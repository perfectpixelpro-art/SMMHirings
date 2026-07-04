import { useEffect, useState } from "react";
import { adminApi } from "../../api/adminApi";

const StatCard = ({ label, value, accent, sub }) => (
  <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid #eef2f6" }}>
    <p className="text-[12px] font-semibold uppercase tracking-wide text-gray-400">{label}</p>
    <p className="text-[28px] font-extrabold mt-1" style={{ color: accent || "#111827" }}>{value}</p>
    {sub && <p className="text-[12px] text-gray-400 mt-0.5">{sub}</p>}
  </div>
);

const EmailList = ({ title, users }) => (
  <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid #eef2f6" }}>
    <p className="text-[14px] font-bold text-gray-900 mb-3">{title} <span className="text-gray-400 font-normal">({users.length})</span></p>
    {users.length === 0 ? (
      <p className="text-[13px] text-gray-400">None yet.</p>
    ) : (
      <div className="flex flex-col">
        {users.slice(0, 8).map((u) => (
          <div key={u.id} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid #f1f5f9" }}>
            <span className="text-[13px] text-gray-700">{u.email}</span>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: u.profileCompleted ? "#dcfce7" : "#fef9c3", color: u.profileCompleted ? "#16a34a" : "#ca8a04" }}>
              {u.profileCompleted ? "Profile done" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    )}
  </div>
);

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
      <h2 className="text-[22px] font-extrabold text-gray-900 mb-1">Overview</h2>
      <p className="text-gray-500 text-[14px] mb-6">Platform activity at a glance.</p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <StatCard label="Freelancers" value={stats?.freelancers ?? "—"} accent="#a855f7" />
        <StatCard label="Businesses" value={stats?.businesses ?? "—"} accent="#3b82f6" />
        <StatCard label="Revenue" value={`$${stats?.revenue ?? 0}`} accent="#16a34a" sub="No billing yet" />
        <StatCard label="Total Users" value={stats?.totalUsers ?? "—"} />
        <StatCard label="Verified Emails" value={stats?.verified ?? "—"} />
        <StatCard label="Profiles Completed" value={stats?.profilesCompleted ?? "—"} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <EmailList title="Freelancers" users={freelancers} />
        <EmailList title="Businesses" users={businesses} />
      </div>
    </div>
  );
}
