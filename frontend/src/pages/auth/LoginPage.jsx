import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../api/axios";
import logoDark from "../../assets/footer_logo.png";
import logo from "../../assets/logo.png";

const COPY = {
  freelancer: {
    label: "Freelancer Portal",
    panel: ["Structured work.", "Clear briefs.", "Consistent income."],
    panelSub:
      "Sign in to access your active briefs, track your output, and stay connected to the SMM Hiring system.",
    cta: "Sign in as Freelancer",
    signup: "/signup/freelancer",
    other: { label: "Are you a business?", to: "/login/business" },
  },
  business: {
    label: "Business Portal",
    panel: ["Hire structured.", "Deliver fast.", "Scale with confidence."],
    panelSub:
      "Sign in to manage your active briefs, review deliverables, and work with vetted professionals.",
    cta: "Sign in as Business",
    signup: "/signup/business",
    other: { label: "Are you a freelancer?", to: "/login/freelancer" },
  },
};

export default function LoginPage({ role = "freelancer" }) {
  const c = COPY[role];
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [needsVerify, setNeedsVerify] = useState(false);
  const [resendMsg, setResendMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setNeedsVerify(false); setResendMsg(""); setLoading(true);
    try {
      const u = await login(email, password, role);
      // Route by where the user is in the pipeline.
      if (!u.profileCompleted) navigate(`/profile/${u.role}`); // must complete profile
      else if (u.applicationStatus === "approved") navigate("/ai-interview"); // approved → interview
      else navigate("/profile/pending"); // completed but awaiting review
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed";
      setError(msg);
      if (err.response?.status === 403 && /verify/i.test(msg)) setNeedsVerify(true);
    } finally {
      setLoading(false);
    }
  };

  const resend = async () => {
    setResendMsg("");
    try {
      await api.post("/api/auth/resend-verification", { email });
      setResendMsg("Verification email sent. Check your inbox.");
    } catch (err) {
      setResendMsg(err.response?.data?.message || "Could not resend email.");
    }
  };

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
          <div className="flex justify-center mb-7 lg:hidden"><Link to="/"><img src={logo} alt="SMM Hiring" className="h-9 w-auto object-contain" /></Link></div>
          <div className="mb-7">
            <div className="inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ backgroundColor: "#e0f5ff", color: "#12B3EF" }}>{c.label}</div>
            <h1 className="text-gray-900 font-extrabold text-[22px] sm:text-[24px] mb-1">Welcome back</h1>
            <p className="text-gray-500 text-[13px]">Sign in to your account.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-gray-600 font-medium">Email address</label>
              <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full rounded-lg outline-none text-gray-700 placeholder-gray-400" style={{ border: "1px solid #d1d5db", padding: "10px 12px", fontSize: "13px" }} />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[13px] text-gray-600 font-medium">Password</label>
                <Link to="/forgot-password" className="text-[12px] hover:opacity-75" style={{ color: "#12B3EF" }}>Forgot password?</Link>
              </div>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full rounded-lg outline-none text-gray-700 placeholder-gray-400" style={{ border: "1px solid #d1d5db", padding: "10px 40px 10px 12px", fontSize: "13px" }} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                  {showPassword
                    ? <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" strokeLinecap="round" /></svg>
                    : <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>}
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading} className="w-full text-white font-semibold rounded-lg hover:opacity-90 transition-opacity mt-1" style={{ backgroundColor: "#12B3EF", padding: "12px", fontSize: "14px", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}>
              {loading ? "Signing in..." : c.cta}
            </button>
            {error && <p className="text-red-500 text-[13px] mt-1">{error}</p>}
            {needsVerify && (
              <button type="button" onClick={resend} className="text-[13px] font-semibold self-start" style={{ color: "#12B3EF", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                Resend verification email
              </button>
            )}
            {resendMsg && <p className="text-green-600 text-[13px]">{resendMsg}</p>}
          </form>

          <p className="text-center text-[13px] text-gray-500 mt-6">
            New here?{" "}
            <Link to={c.signup} className="font-semibold hover:opacity-75" style={{ color: "#12B3EF" }}>Create account</Link>
          </p>
          <p className="text-center text-[12px] text-gray-400 mt-2">
            <Link to={c.other.to} className="hover:opacity-75" style={{ color: "#12B3EF" }}>{c.other.label}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
