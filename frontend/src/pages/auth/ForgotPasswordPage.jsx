import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/axios";
import logo from "../../assets/logo.png";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/api/auth/forgot-password", { email });
    } catch {
      /* endpoint always returns 200 — ignore */
    } finally {
      setSent(true); // always show the generic message
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans" style={{ backgroundColor: "#f0f8fd" }}>
      <div className="w-full" style={{ maxWidth: "420px", padding: "40px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Link to="/"><img src={logo} alt="SMM Hiring" style={{ height: "32px", margin: "0 auto 24px" }} /></Link>
          <h1 style={{ color: "#0d1117", fontSize: "22px", fontWeight: 800, marginBottom: "8px" }}>Forgot password?</h1>
          <p style={{ color: "#6b7280", fontSize: "13px" }}>Enter your email and we'll send you a reset link.</p>
        </div>

        {sent ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 56, height: 56, background: "#dbeafe", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth={2}><path strokeLinecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <p style={{ color: "#374151", fontSize: "14px", lineHeight: 1.6, marginBottom: "24px" }}>
              If this email exists, a reset link has been sent. Check your inbox.
            </p>
            <Link to="/login/freelancer" style={{ color: "#12B3EF", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>← Back to sign in</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "13px", color: "#4b5563", fontWeight: 500 }}>Email address</label>
              <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ border: "1px solid #d1d5db", borderRadius: "8px", padding: "10px 12px", fontSize: "13px", outline: "none", color: "#374151" }} />
            </div>
            <button type="submit" disabled={loading} style={{ backgroundColor: "#12B3EF", color: "#fff", padding: "12px", borderRadius: "8px", border: "none", fontWeight: 600, fontSize: "14px", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}>
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
            <p style={{ textAlign: "center", fontSize: "13px", color: "#6b7280" }}>
              Remember your password?{" "}
              <Link to="/login/freelancer" style={{ color: "#12B3EF", fontWeight: 600, textDecoration: "none" }}>Sign in</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
