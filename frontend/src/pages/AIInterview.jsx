import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { api } from "../api/axios";
import InterviewRunner from "./interview/InterviewRunner";
import NavbarC from "../components/NavbarC";
import aiOrb from "../assets/aiOrb.png";
import aiHeadphones from "../assets/aiHeadphones.png";
import aiMic from "../assets/aiMic.png";
import aiShield from "../assets/aiShield.png";

const FEATURES = [
  { icon: aiHeadphones, title: "Spoken Questions", desc: "Listen to each question clearly" },
  { icon: aiMic, title: "Speak Your Answer", desc: "Answer out loud with your mic" },
  { icon: aiShield, title: "Private & Secure", desc: "Your responses are confidential" },
];

export default function AIInterview() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [landingType, setLandingType] = useState("freelancer"); // for the shared navbar
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
  if (session) return <InterviewRunner session={session} onExit={() => navigate("/dashboard")} />;

  return (
    <div className="min-h-screen font-sans relative overflow-hidden" style={{ background: "linear-gradient(180deg,#ffffff 0%,#f0f8fd 100%)" }}>
      <NavbarC landingType={landingType} setLandingType={setLandingType} />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-[150px] lg:pt-[170px] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          {/* LEFT — copy, features, start card */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-3 py-1.5 rounded-full mb-5" style={{ background: "#dcfce7", color: "#16a34a" }}>
              ✓ Approved • Step 3
            </span>
            <h1 className="font-extrabold text-gray-900 text-[40px] sm:text-[52px] leading-[1.05] mb-4">Your AI Interview</h1>
            <p className="text-gray-500 text-[16px] leading-relaxed max-w-[460px] mb-8">
              A short spoken interview to assess your English communication. You'll hear each question, then speak your answer.
            </p>

            <div className="flex flex-col gap-5 mb-9">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-center gap-4">
                  <img src={f.icon} alt="" className="w-12 h-12 shrink-0" />
                  <div>
                    <h3 className="text-gray-900 font-bold text-[17px] leading-tight">{f.title}</h3>
                    <p className="text-gray-500 text-[14px]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Start card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6" style={{ border: "1px solid #eef2f6", boxShadow: "0 10px 30px rgba(18,179,239,0.08)" }}>
              <label className="block text-gray-800 font-bold text-[15px] mb-2.5">Role / job title you're applying for</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">💼</span>
                  <input
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && startInterview()}
                    placeholder="e.g. Social Media Manager"
                    className="w-full text-[14px] text-gray-800 outline-none"
                    style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: "13px 14px 13px 40px" }}
                  />
                </div>
                <button
                  onClick={startInterview}
                  disabled={starting}
                  className="text-white font-bold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{ background: "#12B3EF", padding: "13px 28px", fontSize: "15px", border: "none", cursor: starting ? "not-allowed" : "pointer", opacity: starting ? 0.6 : 1 }}
                >
                  {starting ? "Starting…" : "🎙  Start AI Interview  →"}
                </button>
              </div>
              {error && <p className="text-red-500 text-[13px] mt-3">{error}</p>}
            </div>

            <p className="text-center text-gray-400 text-[14px] mt-6">
              Return to{" "}
              <button onClick={() => navigate("/")} className="font-semibold" style={{ background: "none", border: "none", color: "#12B3EF", cursor: "pointer" }}>Home</button>
            </p>
          </div>

          {/* RIGHT — animated orb with floating chips */}
          <div className="relative hidden lg:flex items-center justify-center lg:min-h-[520px] order-first lg:order-last">
            <img src={aiOrb} alt="AI voice interview" className="w-[86%] max-w-[520px] select-none" style={{ animation: "orbFloat 6s ease-in-out infinite" }} />

            <Chip className="top-[16%] right-[6%]">✦ AI Powered</Chip>
            <Chip className="top-1/2 left-[2%] -translate-y-1/2">🌐 English Focused</Chip>
            <Chip className="bottom-[14%] right-[10%]">🔁 Real-time Feedback</Chip>
          </div>
        </div>
      </div>

      {showApproved && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(13,17,23,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 60, padding: 20 }}>
          <div className="font-sans" style={{ background: "#fff", borderRadius: 18, maxWidth: 400, width: "100%", padding: "32px 28px", textAlign: "center" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", fontSize: 30 }}>🎉</div>
            <h2 style={{ fontSize: 21, fontWeight: 800, color: "#0d1117", marginBottom: 10 }}>You have been approved!</h2>
            <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, marginBottom: 22 }}>Great news — your profile passed review. The final step is a short AI interview.</p>
            <button onClick={dismissApproved} style={{ background: "#12B3EF", color: "#fff", border: "none", borderRadius: 10, padding: "11px 32px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Continue</button>
          </div>
        </div>
      )}

      <style>{`@keyframes orbFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}`}</style>
    </div>
  );
}

// Floating label chip over the orb.
const Chip = ({ children, className = "" }) => (
  <div
    className={`absolute text-[13px] font-semibold text-gray-700 bg-white rounded-xl px-3.5 py-2 hidden sm:flex items-center gap-1.5 ${className}`}
    style={{ boxShadow: "0 8px 24px rgba(13,38,59,0.12)", border: "1px solid #f1f5f9" }}
  >
    {children}
  </div>
);
