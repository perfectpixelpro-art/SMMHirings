import { useState, useEffect, useRef } from "react";
import { api, getAccessToken } from "../../api/axios";
import NavbarC from "../../components/NavbarC";
import aiOrbSmall from "../../assets/aiOrbSmall.png";
import aiWaveform from "../../assets/aiWaveform.png";

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

// Render the question with the first three words highlighted in brand blue.
const renderQuestion = (q) => {
  const words = (q || "").split(" ");
  const head = words.slice(0, 3).join(" ");
  const tail = words.slice(3).join(" ");
  return (
    <>
      <span style={{ color: "#12B3EF" }}>{head}</span>
      {tail && <span style={{ color: "#6b7280" }}> {tail}</span>}
    </>
  );
};

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
  const [landingType, setLandingType] = useState("freelancer"); // for the shared navbar

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
      <Shell landingType={landingType} setLandingType={setLandingType}>
        <div className="max-w-lg mx-auto w-full">
          {report ? (
            <div className="bg-white rounded-2xl p-6 sm:p-8" style={{ border: "1px solid #eef2f6", boxShadow: "0 20px 60px rgba(18,179,239,0.08)" }}>
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
              <button onClick={onExit} className="w-full mt-6 text-white font-semibold rounded-xl" style={{ background: "#12B3EF", padding: 13, border: "none", cursor: "pointer" }}>See Matched Jobs  →</button>
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
  const statusLine = {
    asking: "🔊 Speaking the question…",
    recording: "🎙 Listening… tap Stop when you're done",
    transcribing: "Transcribing your answer…",
    processing: "Thinking…",
  }[state];

  return (
    <Shell landingType={landingType} setLandingType={setLandingType}>
      <div className="w-full max-w-[820px] mx-auto">
        <div
          className="bg-white rounded-[28px] px-6 sm:px-12 py-10 sm:py-14 text-center"
          style={{ border: "1px solid #eef2f6", boxShadow: "0 30px 80px rgba(18,179,239,0.10)" }}
        >
          {/* Orb */}
          <img
            src={aiOrbSmall}
            alt=""
            className="mx-auto w-[92px] h-[92px] select-none"
            style={{ animation: state === "recording" ? "orbPulse 1.4s ease-in-out infinite" : "none" }}
          />

          {/* Question counter pill */}
          <span className="inline-block mt-2 mb-6 text-[13px] font-semibold px-3.5 py-1.5 rounded-full" style={{ background: "#e0f2fe", color: "#12B3EF" }}>
            Question {order} of {maxQuestions}
          </span>

          {/* Question */}
          <h1 className="font-bold text-[26px] sm:text-[34px] leading-[1.25] max-w-[640px] mx-auto">
            {renderQuestion(question)}
          </h1>

          {/* Waveform */}
          <img
            src={aiWaveform}
            alt=""
            className="mx-auto mt-8 mb-2 w-full max-w-[620px] select-none"
            style={{ opacity: state === "recording" ? 1 : 0.55, transition: "opacity .3s", animation: state === "recording" ? "wave 1.2s ease-in-out infinite" : "none" }}
          />

          {statusLine && <p className="text-[13px] text-gray-400 mb-2">{statusLine}</p>}

          {/* Live / reviewed answer */}
          {(answer || live) && (
            <div className="rounded-xl p-4 mt-2 mb-2 text-left max-w-[620px] mx-auto" style={{ background: "#f8fafc", border: "1px solid #eef2f6" }}>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-1">Your answer</p>
              <p className="text-[14px] text-gray-700">{answer} <span style={{ color: "#9ca3af" }}>{live}</span></p>
            </div>
          )}

          {error && <p className="text-red-500 text-[13px] mt-3">{error}</p>}
          {repeatable && (
            <button onClick={repeatQuestion} className="block mx-auto mt-3 text-[13px] font-semibold" style={{ background: "none", border: "none", color: "#12B3EF", cursor: "pointer" }}>
              🔁 Repeat question
            </button>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
            {state === "idle" && (
              <PrimaryBtn onClick={startRecording}>🎙 &nbsp;Tap to speak</PrimaryBtn>
            )}
            {state === "recording" && (
              <PrimaryBtn onClick={stopRecording} color="#dc2626">
                <span style={{ width: 11, height: 11, background: "#fff", borderRadius: 3, display: "inline-block", marginRight: 8, animation: "pulse 1s infinite" }} /> Stop
              </PrimaryBtn>
            )}
            {state === "review" && (
              <>
                <PrimaryBtn onClick={submitAnswer}>✓ &nbsp;Submit Answer</PrimaryBtn>
                <OutlineBtn onClick={startRecording}>🔁 Re-record</OutlineBtn>
              </>
            )}
            {["asking", "transcribing", "processing"].includes(state) && (
              <PrimaryBtn disabled>
                {state === "transcribing" ? "Transcribing…" : state === "processing" ? "Thinking…" : "Please wait…"}
              </PrimaryBtn>
            )}

            {state !== "review" && <OutlineBtn onClick={onExit}>⤶ Exit Interview</OutlineBtn>}
          </div>
          {state === "review" && (
            <button onClick={onExit} className="mt-4 text-[13px] font-semibold" style={{ background: "none", border: "none", color: "#6b7280", cursor: "pointer" }}>Exit interview</button>
          )}
        </div>
      </div>
      <style>{`
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
        @keyframes orbPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
        @keyframes wave{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.12)}}
      `}</style>
    </Shell>
  );
}

const PrimaryBtn = ({ children, onClick, disabled, color = "#12B3EF" }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="text-white font-bold rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity"
    style={{ background: color, padding: "14px 30px", fontSize: 15, border: "none", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.55 : 1, minWidth: 190 }}
  >
    {children}
  </button>
);

const OutlineBtn = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="font-semibold rounded-xl hover:bg-gray-50 transition-colors"
    style={{ background: "#fff", color: "#6b7280", border: "1px solid #e5e7eb", padding: "14px 30px", fontSize: 15, cursor: "pointer", minWidth: 170 }}
  >
    {children}
  </button>
);

const Spinner = () => (
  <>
    <div style={{ width: 40, height: 40, border: "3px solid #12B3EF", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto" }} />
    <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
  </>
);

const Shell = ({ children, landingType, setLandingType }) => (
  <div className="min-h-screen font-sans relative overflow-hidden" style={{ background: "linear-gradient(180deg,#ffffff 0%,#f0f8fd 100%)" }}>
    <NavbarC landingType={landingType} setLandingType={setLandingType} />
    <div className="flex items-center justify-center px-5 pt-[150px] lg:pt-[170px] pb-16">{children}</div>
  </div>
);
