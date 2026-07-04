import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminApi, setAdminToken } from "../../api/adminApi";
import logoDark from "../../assets/footer_logo.png";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const { data } = await adminApi.post("/api/admin/login", { email, password });
      setAdminToken(data.token);
      navigate("/admin");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const field = { border: "1px solid #2a2f3a", background: "#111621", color: "#e5e7eb", borderRadius: 8, padding: "11px 12px", fontSize: 13, width: "100%", outline: "none" };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans px-5" style={{ background: "#0d1117" }}>
      <div className="w-full" style={{ maxWidth: 380 }}>
        <div className="text-center mb-8">
          <img src={logoDark} alt="SMM Hiring" style={{ height: 30, margin: "0 auto 24px" }} />
          <div className="inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ background: "#12B3EF22", color: "#12B3EF", letterSpacing: "0.14em" }}>Admin Console</div>
          <h1 className="text-white font-extrabold text-[22px] mb-1">Sign in to Admin</h1>
          <p className="text-[13px]" style={{ color: "#6b7280" }}>Restricted access — authorized staff only.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium" style={{ color: "#9ca3af" }}>Admin email</label>
            <input type="email" placeholder="Enter admin email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="off" style={field} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium" style={{ color: "#9ca3af" }}>Password</label>
            <div style={{ position: "relative" }}>
              <input type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ ...field, paddingRight: 40 }} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#6b7280" }}>
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>
          <button type="submit" disabled={loading} className="w-full font-semibold rounded-lg transition-opacity mt-1" style={{ background: "#12B3EF", color: "#fff", padding: 12, fontSize: 14, border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.6 : 1 }}>
            {loading ? "Signing in..." : "Sign in to Admin"}
          </button>
          {error && <p className="text-[13px]" style={{ color: "#f87171" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}
