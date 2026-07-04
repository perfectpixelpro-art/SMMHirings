import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAdminToken } from "../../api/adminApi";
import logoDark from "../../assets/footer_logo.png";
import HomeTab from "./HomeTab";
import UsersTab from "./UsersTab";
import ManagersTab from "./ManagersTab";
import FreelancersTab from "./FreelancersTab";

const NAV = [
  { key: "home", label: "Home", icon: "🏠" },
  { key: "managers", label: "Managers / Roles", icon: "👥" },
  { key: "freelancers", label: "Freelancers", icon: "🧑‍💻" },
  { key: "business", label: "Business", icon: "🏢" },
  { key: "articles", label: "Articles", icon: "📄" },
];

const ComingSoon = ({ title }) => (
  <div className="flex flex-col items-center justify-center text-center py-24">
    <div style={{ fontSize: 40, marginBottom: 12 }}>🚧</div>
    <h2 className="text-[22px] font-extrabold text-gray-900">{title}</h2>
    <p className="text-gray-500 text-[14px] mt-1">Coming soon.</p>
  </div>
);

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("home");

  const logout = () => {
    setAdminToken(null);
    navigate("/admin/login");
  };

  const NavItems = ({ onPick }) =>
    NAV.map((n) => {
      const active = tab === n.key;
      return (
        <button
          key={n.key}
          onClick={() => { setTab(n.key); onPick?.(); }}
          className="flex items-center gap-3 rounded-lg text-left transition-colors whitespace-nowrap"
          style={{ padding: "10px 14px", background: active ? "#12B3EF" : "transparent", color: active ? "#fff" : "#9ca3af", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600 }}
        >
          <span>{n.icon}</span> <span>{n.label}</span>
        </button>
      );
    });

  return (
    <div className="min-h-screen font-sans flex" style={{ background: "#f7f9fc" }}>
      {/* Sidebar (desktop) */}
      <aside className="hidden md:flex flex-col justify-between flex-shrink-0" style={{ width: 240, background: "#0d1117", padding: "20px 14px" }}>
        <div>
          <div className="flex items-center gap-2 px-2 mb-7">
            <img src={logoDark} alt="SMM Hiring" style={{ height: 24 }} />
            <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: "#12B3EF22", color: "#12B3EF" }}>Admin</span>
          </div>
          <nav className="flex flex-col gap-1"><NavItems /></nav>
        </div>
        <button onClick={logout} className="rounded-lg text-[13px] font-semibold" style={{ background: "#1f2733", color: "#e5e7eb", padding: "10px", border: "none", cursor: "pointer" }}>Log out</button>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile top nav */}
        <div className="md:hidden flex items-center gap-2 overflow-x-auto px-4 py-3" style={{ background: "#0d1117" }}>
          <NavItems />
          <button onClick={logout} className="rounded-lg text-[13px] font-semibold whitespace-nowrap" style={{ background: "#1f2733", color: "#e5e7eb", padding: "8px 14px", border: "none", cursor: "pointer" }}>Log out</button>
        </div>

        <main className="p-5 sm:p-8 flex-1">
          {tab === "home" && <HomeTab />}
          {tab === "freelancers" && <FreelancersTab />}
          {tab === "business" && <UsersTab title="Businesses" endpoint="/api/admin/businesses" listKey="businesses" />}
          {tab === "managers" && <ManagersTab />}
          {tab === "articles" && <ComingSoon title="Articles" />}
        </main>
      </div>
    </div>
  );
}
