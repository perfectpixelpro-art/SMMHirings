import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Stepper from "../../components/profile/Stepper";
import logo from "../../assets/logo.png";

export default function ProfilePending() {
  const navigate = useNavigate();
  const { user, reloadUser, logout } = useAuth();
  const acting = useRef(false);

  // Act on the current application status.
  useEffect(() => {
    if (!user || acting.current) return;

    if (user.applicationStatus === "approved") {
      acting.current = true;
      navigate("/ai-interview", { replace: true });
    } else if (user.applicationStatus === "rejected") {
      acting.current = true;
      // Persist the lockout so the home page popup + navbar can react.
      if (user.rejectedUntil) localStorage.setItem("rejectedUntil", user.rejectedUntil);
      logout(); // end the session
      navigate("/", { replace: true, state: { rejected: user.rejectedUntil || true } });
    }
  }, [user, navigate, logout]);

  // Poll for an admin decision every 8s.
  useEffect(() => {
    const id = setInterval(() => reloadUser(), 8000);
    return () => clearInterval(id);
  }, [reloadUser]);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#f0f8fd" }}>
      <div className="bg-white border-b border-gray-100 px-5 sm:px-10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <img src={logo} alt="SMM Hiring" className="h-7 sm:h-8" />
          <Stepper current={2} />
        </div>
      </div>

      <div className="max-w-lg mx-auto px-5 py-16 sm:py-24 text-center flex flex-col items-center">
        <div style={{ position: "relative", width: 96, height: 96, marginBottom: 28 }}>
          <div style={{ position: "absolute", inset: 0, border: "4px solid #d7ecf9", borderTopColor: "#12B3EF", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34 }}>⏳</div>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>

        <h1 className="text-gray-900 font-extrabold text-[22px] sm:text-[26px] mb-3">
          Kindly wait, we are evaluating your profile
        </h1>
        <p className="text-gray-500 text-[14px] leading-relaxed mb-9" style={{ maxWidth: 400 }}>
          Our team is reviewing your details. This screen updates automatically once a
          decision is made — approved applicants move on to a short AI interview.
        </p>

        <button
          onClick={() => navigate("/")}
          className="text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          style={{ background: "#12B3EF", padding: "13px 40px", fontSize: "15px", border: "none", cursor: "pointer" }}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
