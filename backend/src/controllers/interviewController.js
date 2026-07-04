import { InterviewSession } from "../models/InterviewSession.js";
import { InterviewTurn } from "../models/InterviewTurn.js";
import { FinalReport } from "../models/FinalReport.js";
import {
  generateFirstQuestion,
  generateFinalReport,
} from "../services/openaiService.js";
import { advanceInterview } from "../services/interviewOrchestrator.js";
import { synthesizeSpeech } from "../services/googleTtsService.js";

// Map orchestrator error codes → HTTP responses.
const ERROR_HTTP = {
  no_speech: [422, "No speech detected. Please answer again."],
  not_found: [404, "Session not found"],
  finished: [400, "This interview is already finished"],
  no_active_question: [400, "No active question to answer"],
  llm_failed: [502, "The interviewer had trouble responding. Please try that answer again."],
};

// Build [{ question, answer }] history from a session's turns (ordered).
async function loadHistory(sessionId) {
  const turns = await InterviewTurn.find({ session: sessionId }).sort({ order: 1 });
  return { turns, history: turns.map((t) => ({ question: t.question, answer: t.answerTranscript })) };
}

// POST /api/interview/start  { role, difficulty?, candidateName?, maxQuestions? }
export async function startInterview(req, res) {
  try {
    const { role, difficulty = "easy", candidateName, maxQuestions } = req.body || {};
    if (!role || !role.trim()) return res.status(400).json({ message: "role is required" });

    const session = await InterviewSession.create({
      user: req.user?.id || null,
      candidateName,
      role: role.trim(),
      difficulty,
      maxQuestions: Math.min(Math.max(Number(maxQuestions) || 5, 1), 10),
    });

    let question;
    try {
      question = await generateFirstQuestion({ role: session.role, difficulty });
    } catch (err) {
      console.error("[interview.start] OpenAI failed:", err.message);
      await InterviewSession.findByIdAndUpdate(session._id, { status: "aborted" });
      return res.status(502).json({ message: "Could not generate the first question. Please try again." });
    }

    const turn = await InterviewTurn.create({ session: session._id, order: 1, question });
    await InterviewSession.findByIdAndUpdate(session._id, { questionsAsked: 1 });

    return res.status(201).json({
      sessionId: session._id,
      order: turn.order,
      question,
      maxQuestions: session.maxQuestions,
    });
  } catch (err) {
    console.error("[startInterview]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// POST /api/interview/answer  { sessionId, transcript }
export async function submitAnswer(req, res) {
  try {
    const { sessionId, transcript } = req.body || {};
    if (!sessionId) return res.status(400).json({ message: "sessionId is required" });

    const result = await advanceInterview({ sessionId, transcript });
    if (result.error) {
      const [code, message] = ERROR_HTTP[result.error] || [500, "Something went wrong"];
      return res.status(code).json({ message, ...(result.error === "no_speech" ? { noSpeech: true } : {}) });
    }
    return res.json(result);
  } catch (err) {
    console.error("[submitAnswer]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// POST /api/interview/end  { sessionId }  → generate + save the final report
export async function endInterview(req, res) {
  try {
    const { sessionId } = req.body || {};
    const session = await InterviewSession.findById(sessionId);
    if (!session) return res.status(404).json({ message: "Session not found" });

    const existing = await FinalReport.findOne({ session: sessionId });
    if (existing) return res.json({ report: existing });

    const { history } = await loadHistory(sessionId);

    let generated;
    try {
      generated = await generateFinalReport({ role: session.role, history });
    } catch (err) {
      console.error("[interview.end] OpenAI failed:", err.message);
      return res.status(502).json({ message: "Could not generate the report. Please try again." });
    }

    const report = await FinalReport.create({
      session: sessionId,
      scores: generated.scores,
      feedback: generated.feedback,
    });
    await InterviewSession.findByIdAndUpdate(sessionId, { status: "completed", completedAt: new Date() });

    return res.status(201).json({ report });
  } catch (err) {
    console.error("[endInterview]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// POST /api/interview/tts  { text, voice? }  → base64 MP3 (keeps the key server-side)
export async function ttsHandler(req, res) {
  try {
    const { text, voice } = req.body || {};
    const audioContent = await synthesizeSpeech(text, voice ? { voice } : {});
    return res.json({ audioContent }); // base64 MP3
  } catch (err) {
    console.error("[tts]", err.message);
    return res.status(502).json({ message: "Text-to-speech failed. Please try again." });
  }
}

// GET /api/interview/:sessionId  → session + turns + report (for the frontend)
export async function getSession(req, res) {
  try {
    const session = await InterviewSession.findById(req.params.sessionId);
    if (!session) return res.status(404).json({ message: "Session not found" });
    const turns = await InterviewTurn.find({ session: session._id }).sort({ order: 1 });
    const report = await FinalReport.findOne({ session: session._id });
    return res.json({ session, turns, report });
  } catch (err) {
    console.error("[getSession]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
