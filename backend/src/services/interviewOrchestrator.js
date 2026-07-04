import { InterviewSession } from "../models/InterviewSession.js";
import { InterviewTurn } from "../models/InterviewTurn.js";
import { evaluateAndNext } from "./openaiService.js";

/**
 * Core interview step, shared by the REST endpoint and the WebSocket handler.
 * Records the answer on the current turn, asks OpenAI for the next step, and
 * (if not complete) creates the next question turn.
 *
 * Returns one of:
 *   { error: "no_speech" | "not_found" | "finished" | "no_active_question" | "llm_failed" }
 *   { interviewComplete: true, closing }
 *   { interviewComplete: false, order, question, isFollowUp }
 */
export async function advanceInterview({ sessionId, transcript }) {
  const answer = (transcript || "").trim();
  if (!answer) return { error: "no_speech" };

  const session = await InterviewSession.findById(sessionId);
  if (!session) return { error: "not_found" };
  if (session.status !== "in_progress") return { error: "finished" };

  const turns = await InterviewTurn.find({ session: sessionId }).sort({ order: 1 });
  const current = turns[turns.length - 1];
  if (!current) return { error: "no_active_question" };

  current.answerTranscript = answer;
  current.answeredAt = new Date();

  const history = turns.map((t) => ({ question: t.question, answer: t.answerTranscript }));

  let result;
  try {
    result = await evaluateAndNext({
      role: session.role,
      difficulty: session.difficulty,
      history,
      questionsAsked: session.questionsAsked,
      maxQuestions: session.maxQuestions,
    });
  } catch (err) {
    console.error("[advanceInterview] OpenAI failed:", err.message);
    return { error: "llm_failed" };
  }

  current.evaluationNotes = result.evaluationNotes || "";
  await current.save();

  const done = result.interviewComplete || session.questionsAsked >= session.maxQuestions;
  if (done) {
    return { interviewComplete: true, closing: result.nextQuestion || "Thank you, that concludes the interview." };
  }

  const nextOrder = current.order + 1;
  await InterviewTurn.create({
    session: session._id,
    order: nextOrder,
    question: result.nextQuestion,
    isFollowUp: !!result.isFollowUp,
  });
  await InterviewSession.findByIdAndUpdate(session._id, { $inc: { questionsAsked: 1 } });

  return { interviewComplete: false, order: nextOrder, question: result.nextQuestion, isFollowUp: !!result.isFollowUp };
}
