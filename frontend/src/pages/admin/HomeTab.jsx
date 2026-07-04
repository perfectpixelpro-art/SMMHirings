import { useEffect, useState } from "react";
import { adminApi } from "../../api/adminApi";

const ACCENT = "#12B3EF";

// --- Cyan line icons for the stat cards (match the dashboard mock) ---
const icons = {
  freelancer: (
    <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0" />
  ),
  business: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 12h18" />
    </>
  ),
  revenue: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </>
  ),
  users: (
    <>
      <path d="M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2 20a7 7 0 0114 0" />
      <path d="M16 4.5a3.5 3.5 0 010 7M17 20a7 7 0 00-2-4.9" />
    </>
  ),
  profiles: (
    <>
      <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM5 20a7 7 0 0111.5-5.4" />
      <path d="M15 18.5l1.8 1.8L21 16" />
    </>
  ),
};

const StatCard = ({ icon, label, value, sub }) => (
  <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid #eef2f6" }}>
    <div className="flex items-center gap-2 mb-3">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {icons[icon]}
      </svg>
      <span className="text-[14px] font-medium text-gray-500">{label}</span>
    </div>
    <p className="text-[30px] font-extrabold leading-none text-gray-900">{value}</p>
    {sub && <p className="text-[12px] text-gray-400 mt-2">{sub}</p>}
  </div>
);

const EmailList = ({ title, users }) => (
  <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #eef2f6" }}>
    <div className="px-5 py-4" style={{ background: "#f0f8fd", borderBottom: "1px solid #eef2f6" }}>
      <p className="text-[17px] font-extrabold" style={{ color: ACCENT }}>{title}</p>
    </div>
    {users.length === 0 ? (
      <p className="text-[13px] text-gray-400 px-5 py-4">None yet.</p>
    ) : (
      <div className="flex flex-col px-5">
        {users.slice(0, 9).map((u) => (
          <div key={u.id} className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid #f1f5f9" }}>
            <span className="text-[13px] text-gray-700">{u.email}</span>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md" style={{ background: u.profileCompleted ? "#dcfce7" : "#fef9c3", color: u.profileCompleted ? "#16a34a" : "#ca8a04" }}>
              {u.profileCompleted ? "Profile done" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    )}
  </div>
);

const nfmt = (n) => (typeof n === "number" ? n.toLocaleString("en-US") : "—");

export default function HomeTab() {
  const [stats, setStats] = useState(null);
  const [freelancers, setFreelancers] = useState([]);
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    adminApi.get("/api/admin/stats").then((r) => setStats(r.data)).catch(() => {});
    adminApi.get("/api/admin/freelancers").then((r) => setFreelancers(r.data.freelancers || [])).catch(() => {});
    adminApi.get("/api/admin/businesses").then((r) => setBusinesses(r.data.businesses || [])).catch(() => {});
  }, []);

  return (
    <div>
      <h2 className="text-[26px] font-extrabold mb-1" style={{ color: ACCENT }}>Overview</h2>
      <p className="text-gray-500 text-[14px] mb-6">Platform activity at a glance.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <StatCard icon="freelancer" label="Freelancers" value={nfmt(stats?.freelancers)} sub="Total Freelancers" />
        <StatCard icon="business" label="Businesses" value={nfmt(stats?.businesses)} sub="Total Businesses" />
        <StatCard icon="revenue" label="Revenue" value={`$${nfmt(stats?.revenue ?? 0)}`} sub="Total Revenue" />
        <StatCard icon="users" label="Total Users" value={nfmt(stats?.totalUsers)} sub="Total Users" />
        <StatCard icon="profiles" label="Profiles Completed" value={nfmt(stats?.profilesCompleted)} sub="Total Profiles Completed" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <EmailList title="Freelancers" users={freelancers} />
        <EmailList title="Businesses" users={businesses} />
      </div>
    </div>
  );
}
