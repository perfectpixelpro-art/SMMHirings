import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { adminApi, getAdminToken, setAdminToken } from "../api/adminApi";

// Gate admin routes: must have a valid admin token.
export default function RequireAdmin({ children }) {
  const [state, setState] = useState(getAdminToken() ? "checking" : "no");

  useEffect(() => {
    if (!getAdminToken()) return;
    adminApi
      .get("/api/admin/me")
      .then(() => setState("ok"))
      .catch(() => {
        setAdminToken(null); // token expired/invalid
        setState("no");
      });
  }, []);

  if (state === "checking") {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0d1117" }}>
        <div style={{ width: 40, height: 40, border: "3px solid #12B3EF", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }
  if (state === "no") return <Navigate to="/admin/login" replace />;
  return children;
}
