import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/axios";
import logoDark from "../../assets/footer_logo.png";
import logo from "../../assets/logo.png";

const COPY = {
  freelancer: {
    label: "Freelancer Portal",
    panel: ["Join the system.", "Get assigned.", "Get paid."],
    panelSub:
      "Create your freelancer account and start receiving structured work with clear briefs.",
    cta: "Create Freelancer Account",
    login: "/login/freelancer",
  },
  business: {
    label: "Business Portal",
    panel: ["Brief it.", "Assign it.", "Get it delivered."],
    panelSub:
      "Create your business account and get structured content delivered by vetted professionals.",
    cta: "Create Business Account",
    login: "/login/business",
  },
};

export default function SignupPage({ role = "freelancer" }) {
  const c = COPY[role];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [resendMsg, setResendMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password.length < 8) return setError("Password must be at least 8 characters");
    if (password !== confirm) return setError("Passwords do not match");
    if (!agreed) return setError("Please agree to the Terms of Service");
    setLoading(true);
    try {
      await api.post("/api/auth/signup", { email, password, role });
      setDone(true);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const resend = async () => {
    setResendMsg("");
    try {
      await api.post("/api/auth/resend-verification", { email });
      setResendMsg("Verification email re-sent.");
    } catch (err) {
      setResendMsg(err.response?.data?.message || "Could not resend email.");
    }
  };

  // ── "Check your email" success screen ──
  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans" style={{ backgroundColor: "#f0f8fd" }}>
        <div style={{ maxWidth: "420px", width: "100%", padding: "40px 24px", textAlign: "center" }}>
          <Link to="/"><img src={logo} alt="SMM Hiring" style={{ height: "32px", margin: "0 auto 32px" }} /></Link>
          <div style={{ width: 64, height: 64, background: "#dbeafe", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth={2}><path strokeLinecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <h1 style={{ color: "#0d1117", fontSize: "22px", fontWeight: 800, marginBottom: "12px" }}>Check your email!</h1>
          <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
            We sent a verification link to <strong style={{ color: "#374151" }}>{email}</strong>.<br />
            Click it to verify your account, then sign in.
          </p>
          <button onClick={resend} style={{ background: "none", border: "none", color: "#12B3EF", fontWeight: 600, fontSize: "13px", cursor: "pointer" }}>
            Didn't get it? Resend email
          </button>
          {resendMsg && <p style={{ color: "#16a34a", fontSize: "13px", marginTop: 8 }}>{resendMsg}</p>}
          <div style={{ marginTop: 24 }}>
            <Link to={c.login} style={{ display: "inline-block", padding: "12px 28px", background: "#12B3EF", color: "#fff", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>Go to Sign In</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex font-sans" style={{ backgroundColor: "#f0f8fd" }}>
      <div className="hidden lg:flex flex-col justify-between w-[42%] flex-shrink-0 px-12 py-10" style={{ backgroundColor: "#0d1117" }}>
        <Link to="/"><img src={logoDark} alt="SMM Hiring" className="h-8 w-auto object-contain object-left" /></Link>
        <div>
          <div className="inline-block text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5" style={{ backgroundColor: "#12B3EF22", color: "#12B3EF" }}>{c.label}</div>
          <h2 className="text-white font-black text-[32px] xl:text-[38px] leading-[1.2] mb-4">
            {c.panel[0]}<br />{c.panel[1]}<br />
            <span style={{ color: "#12B3EF", fontStyle: "italic", fontFamily: "Georgia, serif" }}>{c.panel[2]}</span>
          </h2>
          <p className="text-[14px] leading-[1.75]" style={{ color: "#6b7280" }}>{c.panelSub}</p>
        </div>
        <p className="text-[12px]" style={{ color: "#374151" }}>© 2026 SMM Hiring · All rights reserved</p>
      </div>

      <div className="flex-1 flex items-center justify-center px-5 py-10 sm:px-8">
        <div className="w-full" style={{ maxWidth: "400px" }}>
          <div className="flex justify-center mb-6 lg:hidden"><Link to="/"><img src={logo} alt="SMM Hiring" className="h-8 w-auto object-contain" /></Link></div>
          <div className="mb-6">
            <div className="inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ backgroundColor: "#e0f5ff", color: "#12B3EF" }}>{c.label}</div>
            <h1 className="text-gray-900 font-extrabold text-[22px] sm:text-[24px] mb-1">Create account</h1>
            <p className="text-gray-500 text-[13px]">It only takes a minute.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-gray-600 font-medium">Email address</label>
              <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full rounded-lg outline-none text-gray-700 placeholder-gray-400" style={{ border: "1px solid #d1d5db", padding: "10px 12px", fontSize: "13px" }} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-gray-600 font-medium">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="At least 8 characters" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full rounded-lg outline-none text-gray-700 placeholder-gray-400" style={{ border: "1px solid #d1d5db", padding: "10px 40px 10px 12px", fontSize: "13px" }} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                  {showPassword
                    ? <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" strokeLinecap="round" /></svg>
                    : <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-gray-600 font-medium">Confirm password</label>
              <input type="password" placeholder="Re-enter your password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required className="w-full rounded-lg outline-none text-gray-700 placeholder-gray-400" style={{ border: "1px solid #d1d5db", padding: "10px 12px", fontSize: "13px" }} />
            </div>
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 accent-[#12B3EF]" />
              <span className="text-[12px] text-gray-500">I agree to the <a href="#" style={{ color: "#12B3EF" }}>Terms</a> and <a href="#" style={{ color: "#12B3EF" }}>Privacy Policy</a></span>
            </label>
            <button type="submit" disabled={loading} className="w-full text-white font-semibold rounded-lg hover:opacity-90 transition-opacity mt-1" style={{ backgroundColor: "#12B3EF", padding: "12px", fontSize: "14px", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}>
              {loading ? "Creating account..." : c.cta}
            </button>
            {error && <p className="text-red-500 text-[13px] mt-1">{error}</p>}
          </form>

          <p className="text-center text-[13px] text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to={c.login} className="font-semibold hover:opacity-75" style={{ color: "#12B3EF" }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
