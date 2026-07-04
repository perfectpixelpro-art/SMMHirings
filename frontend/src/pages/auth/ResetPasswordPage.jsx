import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../../api/axios";
import logo from "../../assets/logo.png";

export default function ResetPasswordPage() {
  const [params] = useSearchParams();
  const token = params.get("token");
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password.length < 8) return setError("Password must be at least 8 characters");
    if (password !== confirm) return setError("Passwords do not match");
    if (!token) return setError("Invalid reset link.");
    setLoading(true);
    try {
      await api.post("/api/auth/reset-password", { token, newPassword: password });
      setDone(true);
      setTimeout(() => navigate("/login/freelancer"), 1800);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans" style={{ backgroundColor: "#f0f8fd" }}>
      <div className="w-full" style={{ maxWidth: "420px", padding: "40px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Link to="/"><img src={logo} alt="SMM Hiring" style={{ height: "32px", margin: "0 auto 24px" }} /></Link>
          <h1 style={{ color: "#0d1117", fontSize: "22px", fontWeight: 800, marginBottom: "8px" }}>Set new password</h1>
          <p style={{ color: "#6b7280", fontSize: "13px" }}>Enter your new password below.</p>
        </div>

        {done ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 56, height: 56, background: "#dcfce7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#16a34a" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <p style={{ color: "#374151", fontSize: "14px", marginBottom: "24px" }}>Password updated! Redirecting you to sign in...</p>
            <Link to="/login/freelancer" style={{ display: "inline-block", padding: "12px 28px", background: "#12B3EF", color: "#fff", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>Sign in now</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "13px", color: "#4b5563", fontWeight: 500 }}>New password</label>
              <div style={{ position: "relative" }}>
                <input type={showPassword ? "text" : "password"} placeholder="At least 8 characters" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: "100%", border: "1px solid #d1d5db", borderRadius: "8px", padding: "10px 40px 10px 12px", fontSize: "13px", outline: "none", color: "#374151", boxSizing: "border-box" }} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0, color: "#9ca3af" }}>
                  {showPassword
                    ? <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" strokeLinecap="round" /></svg>
                    : <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>}
                </button>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "13px", color: "#4b5563", fontWeight: 500 }}>Confirm new password</label>
              <input type="password" placeholder="Re-enter new password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required style={{ border: "1px solid #d1d5db", borderRadius: "8px", padding: "10px 12px", fontSize: "13px", outline: "none", color: "#374151" }} />
            </div>
            <button type="submit" disabled={loading} style={{ backgroundColor: "#12B3EF", color: "#fff", padding: "12px", borderRadius: "8px", border: "none", fontWeight: 600, fontSize: "14px", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}>
              {loading ? "Resetting..." : "Reset Password"}
            </button>
            {error && <p style={{ color: "#ef4444", fontSize: "13px" }}>{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
