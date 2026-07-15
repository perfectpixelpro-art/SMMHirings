import { useState, useEffect, useRef } from "react";
import { api, getAccessToken } from "../../api/axios";
import logo from "../../assets/logo.png";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";
const WS_URL = BACKEND.replace(/^http/, "ws") + "/ws/interview";

// Scores are out of 10.
const ScoreBar = ({ label, value }) => (
  <div style={{ marginBottom: 12 }}>
    <div className="flex justify-between mb-1">
      <span className="text-[13px] text-gray-600">{label}</span>
      <span className="text-[13px] font-bold text-gray-900">{value}<span className="text-gray-400 font-normal">/10</span></span>
    </div>
    <div style={{ height: 8, background: "#e5e7eb", borderRadius: 999 }}>
      <div style={{ width: `${Math.max(0, Math.min(100, value * 10))}%`, height: "100%", background: "#12B3EF", borderRadius: 999 }} />
    </div>
  </div>
);

export default function InterviewRunner({ session, onExit }) {
  const { sessionId, maxQuestions } = session;
  const [question, setQuestion] = useState(session.question);
  const [order, setOrder] = useState(session.order || 1);
  // asking | idle | recording | transcribing | review | processing | complete
  const [state, setState] = useState("asking");
  const [live, setLive] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [report, setReport] = useState(null);

  const wsRef = useRef(null);
  const recRef = useRef(null);
  const streamRef = useRef(null);
  const audioRef = useRef(null); // base64 of current question, for "repeat"

  const playAudio = (b64) =>
    new Promise((resolve) => {
      if (!b64) return resolve();
      const a = new Audio("data:audio/mp3;base64," + b64);
      a.onended = resolve;
      a.onerror = resolve;
      a.play().catch(resolve);
    });

  // Fetch + speak a question, remember its audio for repeat.
  const speakQuestion = async (text) => {
    setState("asking");
    try {
      const { data } = await api.post("/api/interview/tts", { text });
      audioRef.current = data.audioContent;
      await playAudio(data.audioContent);
    } catch { /* non-fatal */ }
    setState("idle");
  };

  const repeatQuestion = async () => {
    if (state === "recording" || state === "transcribing" || state === "processing") return;
    const back = answer ? "review" : "idle";
    setState("asking");
    if (audioRef.current) await playAudio(audioRef.current);
    else await speakQuestion(question);
    setState(back);
  };

  const finish = async () => {
    setState("complete");
    try {
      const { data } = await api.post("/api/interview/end", { sessionId });
      setReport(data.report);
    } catch {
      setError("Could not load the report.");
    }
  };

  // Speak the first question on mount.
  useEffect(() => {
    speakQuestion(session.question);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // WebSocket = transcription only.
  useEffect(() => {
    const ws = new WebSocket(`${WS_URL}?token=${getAccessToken()}`);
    ws.binaryType = "arraybuffer";
    wsRef.current = ws;

    ws.onmessage = (ev) => {
      let m;
      try { m = JSON.parse(ev.data); } catch { return; }
      if (m.type === "transcript") {
        if (!m.isFinal) setLive(m.text);
      } else if (m.type === "final_transcript") {
        setAnswer(m.transcript);
        setLive("");
        setState("review");
      } else if (m.type === "no_speech") {
        setLive("");
        setError("We didn't catch that — please record again.");
        setState("idle");
      } else if (m.type === "error") {
        setError(m.message || "Something went wrong. Please try again.");
        setState("idle");
      }
    };
    return () => { try { ws.close(); } catch { /* noop */ } };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startRecording = async () => {
    setError(""); setAnswer(""); setLive("");
    const ws = wsRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      setError("Connection not ready — please wait a moment and try again.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      ws.send(JSON.stringify({ type: "start", sessionId }));
      const mime = MediaRecorder.isTypeSupported("audio/webm;codecs=opus") ? "audio/webm;codecs=opus" : "audio/webm";
      const rec = new MediaRecorder(stream, { mimeType: mime });
      recRef.current = rec;
      rec.ondataavailable = (e) => {
        if (e.data.size > 0 && ws.readyState === WebSocket.OPEN) e.data.arrayBuffer().then((b) => ws.send(b));
      };
      rec.onstop = () => { if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ type: "stop" })); };
      rec.start(250);
      setState("recording");
    } catch {
      setError("Microphone access was denied or is unavailable.");
    }
  };

  const stopRecording = () => {
    setState("transcribing");
    try { recRef.current?.stop(); } catch { /* noop */ }
    streamRef.current?.getTracks().forEach((t) => t.stop());
  };

  // Submit the reviewed answer → advance via REST.
  const submitAnswer = async () => {
    setState("processing");
    try {
      const { data } = await api.post("/api/interview/answer", { sessionId, transcript: answer });
      if (data.interviewComplete) return finish();
      setQuestion(data.question);
      setOrder(data.order);
      setAnswer(""); setLive("");
      await speakQuestion(data.question); // sets state → idle
    } catch (e) {
      setError(e.response?.data?.message || "Could not submit your answer. Please try again.");
      setState("review");
    }
  };

  // ---------- Report view ----------
  if (state === "complete") {
    return (
      <Shell>
        <div className="max-w-lg mx-auto w-full">
          {report ? (
            <div className="bg-white rounded-2xl p-6 sm:p-8" style={{ border: "1px solid #eef2f6" }}>
              <div className="text-center mb-6">
                <div style={{ fontSize: 40 }}>🏁</div>
                <h1 className="text-[24px] font-extrabold text-gray-900 mt-2">Interview Complete</h1>
                <p className="text-gray-500 text-[13px]">Your English communication report.</p>
                <div className="inline-block mt-4 px-5 py-2 rounded-xl" style={{ background: "#e0f5ff" }}>
                  <span className="text-[13px] text-gray-500">Overall</span>{" "}
                  <span className="text-[22px] font-extrabold" style={{ color: "#12B3EF" }}>{report.scores.overall}</span>
                  <span className="text-[13px] text-gray-400">/10</span>
                </div>
              </div>
              <ScoreBar label="Grammar" value={report.scores.grammar} />
              <ScoreBar label="Fluency" value={report.scores.fluency} />
              <ScoreBar label="Vocabulary" value={report.scores.vocabulary} />
              <ScoreBar label="Confidence" value={report.scores.confidence} />
              <ScoreBar label="Relevance" value={report.scores.relevance} />
              <div className="mt-5 pt-5" style={{ borderTop: "1px solid #f1f5f9" }}>
                <p className="text-[13px] font-bold text-gray-900 mb-1">Feedback</p>
                <p className="text-[14px] text-gray-600 leading-relaxed">{report.feedback}</p>
              </div>
              <button onClick={onExit} className="w-full mt-6 text-white font-semibold rounded-xl" style={{ background: "#12B3EF", padding: 13, border: "none", cursor: "pointer" }}>Back to Home</button>
            </div>
          ) : (
            <div className="text-center py-20"><Spinner /><p className="text-gray-500 mt-4">Generating your report…</p></div>
          )}
        </div>
      </Shell>
    );
  }

  // ---------- Interview view ----------
  const repeatable = ["idle", "review"].includes(state);
  return (
    <Shell>
      <div className="max-w-xl mx-auto w-full">
        <p className="text-center text-[12px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Question {order} of {maxQuestions}</p>

        <div className="bg-white rounded-2xl p-6 sm:p-8 mb-5 text-center" style={{ border: "1px solid #eef2f6" }}>
          <div style={{ fontSize: 30, marginBottom: 10 }}>🤖</div>
          <p className="text-[17px] font-semibold text-gray-900 leading-relaxed">{question}</p>
          {state === "asking" && <p className="text-[12px] text-gray-400 mt-3">🔊 Speaking the question…</p>}
          {repeatable && (
            <button onClick={repeatQuestion} className="mt-3 text-[13px] font-semibold" style={{ background: "none", border: "none", color: "#12B3EF", cursor: "pointer" }}>
              🔁 Repeat question
            </button>
          )}
        </div>

        {(answer || live) && (
          <div className="rounded-xl p-4 mb-5" style={{ background: "#fff", border: "1px solid #eef2f6" }}>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-1">Your answer</p>
            <p className="text-[14px] text-gray-700">{answer} <span style={{ color: "#9ca3af" }}>{live}</span></p>
          </div>
        )}

        {error && <p className="text-red-500 text-[13px] text-center mb-4">{error}</p>}

        <div className="flex flex-col items-center">
          {state === "recording" && (
            <button onClick={stopRecording} className="text-white font-bold rounded-full flex items-center gap-2" style={{ background: "#dc2626", padding: "14px 32px", border: "none", cursor: "pointer" }}>
              <span style={{ width: 12, height: 12, background: "#fff", borderRadius: 3, display: "inline-block", animation: "pulse 1s infinite" }} /> Stop
            </button>
          )}

          {state === "review" && (
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button onClick={startRecording} className="font-semibold rounded-full" style={{ background: "#fff", color: "#12B3EF", border: "1px solid #12B3EF", padding: "13px 28px", cursor: "pointer" }}>🔁 Re-record</button>
              <button onClick={submitAnswer} className="text-white font-bold rounded-full" style={{ background: "#12B3EF", padding: "13px 32px", border: "none", cursor: "pointer" }}>✓ Submit Answer</button>
            </div>
          )}

          {["idle"].includes(state) && (
            <button onClick={startRecording} className="text-white font-bold rounded-full" style={{ background: "#12B3EF", padding: "16px 40px", fontSize: 15, border: "none", cursor: "pointer" }}>🎙  Record Answer</button>
          )}

          {["asking", "transcribing", "processing"].includes(state) && (
            <button disabled className="text-white font-bold rounded-full" style={{ background: "#12B3EF", padding: "16px 40px", fontSize: 15, border: "none", opacity: 0.5, cursor: "not-allowed" }}>
              {state === "transcribing" ? "Transcribing…" : state === "processing" ? "Thinking…" : "Please wait…"}
            </button>
          )}

          <button onClick={onExit} className="mt-4 text-[13px] font-semibold" style={{ background: "none", border: "none", color: "#6b7280", cursor: "pointer" }}>Exit interview</button>
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
      </div>
    </Shell>
  );
}

const Spinner = () => (
  <>
    <div style={{ width: 40, height: 40, border: "3px solid #12B3EF", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto" }} />
    <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
  </>
);

const Shell = ({ children }) => (
  <div className="min-h-screen font-sans flex flex-col" style={{ backgroundColor: "#f0f8fd" }}>
    <div className="bg-white border-b border-gray-100 px-5 sm:px-10 py-4">
      <div className="max-w-3xl mx-auto"><img src={logo} alt="SMM Hiring" className="h-7 sm:h-8" /></div>
    </div>
    <div className="flex-1 flex items-center justify-center px-5 py-12">{children}</div>
  </div>
);
