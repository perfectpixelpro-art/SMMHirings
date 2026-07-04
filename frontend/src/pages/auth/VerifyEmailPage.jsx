import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { api } from "../../api/axios";
import logo from "../../assets/logo.png";

export default function VerifyEmailPage() {
  const [params] = useSearchParams();
  const [status, setStatus] = useState("verifying"); // verifying | success | error
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("freelancer"); // which login portal to send to
  const ran = useRef(false); // guard against React 18 StrictMode double-run

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const token = params.get("token");
    if (!token) {
      setStatus("error");
      setMessage("Invalid verification link.");
      return;
    }
    api
      .post("/api/auth/verify-email", { token })
      .then((res) => {
        setStatus("success");
        setMessage(res.data.message);
        if (res.data.role) setRole(res.data.role);
      })
      .catch((err) => {
        setStatus("error");
        setMessage(err.response?.data?.message || "Verification failed.");
      });
  }, [params]);

  return (
    <div className="min-h-screen flex items-center justify-center font-sans" style={{ backgroundColor: "#f0f8fd" }}>
      <div className="w-full" style={{ maxWidth: "420px", padding: "40px 24px", textAlign: "center" }}>
        <Link to="/"><img src={logo} alt="SMM Hiring" style={{ height: "32px", margin: "0 auto 32px" }} /></Link>

        {status === "verifying" && (
          <>
            <div style={{ width: 40, height: 40, border: "3px solid #12B3EF", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 20px" }} />
            <p style={{ color: "#374151", fontSize: "15px" }}>Verifying your email...</p>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </>
        )}

        {status === "success" && (
          <>
            <div style={{ width: 56, height: 56, background: "#dcfce7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#16a34a" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h1 style={{ color: "#0d1117", fontSize: "22px", fontWeight: 800, marginBottom: "8px" }}>Email Verified!</h1>
            <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "28px" }}>{message}</p>
            <Link to={`/login/${role}`} style={{ display: "inline-block", padding: "12px 28px", background: "#12B3EF", color: "#fff", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>Sign in now</Link>
          </>
        )}

        {status === "error" && (
          <>
            <div style={{ width: 56, height: 56, background: "#fee2e2", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#dc2626" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
            <h1 style={{ color: "#0d1117", fontSize: "22px", fontWeight: 800, marginBottom: "8px" }}>Verification Failed</h1>
            <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "28px" }}>{message}</p>
            <Link to="/signup/freelancer" style={{ display: "inline-block", padding: "12px 28px", background: "#12B3EF", color: "#fff", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>Back to sign up</Link>
          </>
        )}
      </div>
    </div>
  );
}
