import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Gate a route behind authentication (and optionally a role).
export default function RequireAuth({ role, children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f0f8fd" }}>
        <div style={{ width: 40, height: 40, border: "3px solid #12B3EF", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // Not logged in → send to the matching login portal.
  if (!user) return <Navigate to={`/login/${role || "freelancer"}`} replace />;

  // Logged in but wrong portal → send to their own profile.
  if (role && user.role !== role) return <Navigate to={`/profile/${user.role}`} replace />;

  return children;
}
