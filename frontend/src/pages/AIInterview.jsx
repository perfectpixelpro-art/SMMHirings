import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { api } from "../api/axios";
import InterviewRunner from "./interview/InterviewRunner";
import logo from "../assets/logo.png";

export default function AIInterview() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [showApproved, setShowApproved] = useState(false);

  const [role, setRole] = useState("");
  const [starting, setStarting] = useState(false);
  const [error, setError] = useState("");
  const [session, setSession] = useState(null); // once set, the runner takes over

  useEffect(() => {
    if (user?.applicationStatus === "approved") {
      const key = `approvedPopupSeen_${user.id}`;
      if (!localStorage.getItem(key)) setShowApproved(true);
    }
  }, [user]);

  const dismissApproved = () => {
    if (user) localStorage.setItem(`approvedPopupSeen_${user.id}`, "1");
    setShowApproved(false);
  };

  const startInterview = async () => {
    if (!role.trim()) return setError("Please enter the role you're interviewing for.");
    setError(""); setStarting(true);
    try {
      const { data } = await api.post("/api/interview/start", { role, maxQuestions: 5 });
      setSession(data); // { sessionId, question, order, maxQuestions }
    } catch (err) {
      setError(err.response?.data?.message || "Could not start the interview.");
    } finally {
      setStarting(false);
    }
  };

  if (loading) return null;
  if (!user) return <Navigate to="/login/freelancer" replace />;
  if (user.applicationStatus !== "approved") return <Navigate to="/profile/pending" replace />;

  // Interview in progress → hand off to the runner.
  if (session) return <InterviewRunner session={session} onExit={() => navigate("/")} />;

  const inputStyle = { border: "1px solid #d1d5db", borderRadius: 8, padding: "11px 12px", fontSize: 14, width: "100%", outline: "none" };

  return (
    <div className="min-h-screen font-sans flex flex-col" style={{ backgroundColor: "#f0f8fd" }}>
      <div className="bg-white border-b border-gray-100 px-5 sm:px-10 py-4">
        <div className="max-w-3xl mx-auto"><img src={logo} alt="SMM Hiring" className="h-7 sm:h-8" /></div>
      </div>

      <div className="flex-1 flex items-center justify-center px-5 py-16">
        <div className="text-center flex flex-col items-center w-full" style={{ maxWidth: 440 }}>
          <div style={{ width: 84, height: 84, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 38, marginBottom: 22 }}>🤖</div>
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ background: "#dcfce7", color: "#16a34a" }}>Approved · Step 3</span>
          <h1 className="text-gray-900 font-extrabold text-[24px] sm:text-[28px] mb-3">Your AI Interview</h1>
          <p className="text-gray-500 text-[14px] leading-relaxed mb-7">
            A short spoken interview to assess your English communication. You'll hear each
            question, then speak your answer. Find a quiet spot with your mic ready.
          </p>

          <div className="w-full flex flex-col gap-4 text-left mb-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-gray-600 font-medium">Role / job title you're applying for</label>
              <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="e.g. Social Media Manager" style={inputStyle} />
            </div>
          </div>

          {error && <p className="text-red-500 text-[13px] mb-3">{error}</p>}

          <button onClick={startInterview} disabled={starting} className="text-white font-bold rounded-xl hover:opacity-90 transition-opacity w-full" style={{ background: "#12B3EF", padding: "14px", fontSize: "15px", border: "none", cursor: starting ? "not-allowed" : "pointer", opacity: starting ? 0.6 : 1 }}>
            {starting ? "Starting…" : "Start AI Interview  →"}
          </button>
          <button onClick={() => navigate("/")} className="mt-4 text-[13px] font-semibold" style={{ background: "none", border: "none", color: "#6b7280", cursor: "pointer" }}>Return to Home</button>
        </div>
      </div>

      {showApproved && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(13,17,23,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50, padding: 20 }}>
          <div className="font-sans" style={{ background: "#fff", borderRadius: 18, maxWidth: 400, width: "100%", padding: "32px 28px", textAlign: "center" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", fontSize: 30 }}>🎉</div>
            <h2 style={{ fontSize: 21, fontWeight: 800, color: "#0d1117", marginBottom: 10 }}>You have been approved!</h2>
            <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, marginBottom: 22 }}>Great news — your profile passed review. The final step is a short AI interview.</p>
            <button onClick={dismissApproved} style={{ background: "#12B3EF", color: "#fff", border: "none", borderRadius: 10, padding: "11px 32px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}
