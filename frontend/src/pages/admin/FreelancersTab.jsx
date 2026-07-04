import { useEffect, useState } from "react";
import { adminApi } from "../../api/adminApi";
import ProfileDetails from "./ProfileDetails";

const ACCENT = "#12B3EF";

const STATUS_STYLE = {
  pending: { bg: "#fef9c3", fg: "#ca8a04", label: "Pending review" },
  approved: { bg: "#dcfce7", fg: "#16a34a", label: "Approved" },
  rejected: { bg: "#fee2e2", fg: "#dc2626", label: "Rejected" },
};

const StatusPill = ({ status }) => {
  const s = STATUS_STYLE[status] || STATUS_STYLE.pending;
  return <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999, background: s.bg, color: s.fg }}>{s.label}</span>;
};

const Avatar = ({ email }) => (
  <span className="flex items-center justify-center rounded-full flex-shrink-0" style={{ width: 28, height: 28, background: "#e0f5ff", color: ACCENT, fontSize: 12, fontWeight: 700 }}>
    {email?.[0]?.toUpperCase()}
  </span>
);

const SkillTags = ({ skills = [] }) => {
  if (!skills.length) return <span className="text-gray-400 text-[13px]">—</span>;
  return (
    <div className="flex flex-wrap gap-1.5" style={{ maxWidth: 260 }}>
      {skills.map((s) => (
        <span key={s} style={{ background: "#e0f5ff", color: "#0a7bb0", padding: "2px 9px", borderRadius: 999, fontSize: 11, fontWeight: 500 }}>{s}</span>
      ))}
    </div>
  );
};

const Dash = () => <span className="text-gray-400 text-[13px]">—</span>;

export default function FreelancersTab() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    adminApi
      .get("/api/admin/freelancers")
      .then((r) => setRows(r.data.freelancers || []))
      .finally(() => setLoading(false));
  }, []);

  const act = async (action) => {
    if (!selected) return;
    setBusy(true);
    try {
      const { data } = await adminApi.patch(`/api/admin/users/${selected.id}/${action}`);
      const patch = { applicationStatus: data.applicationStatus, rejectedUntil: data.rejectedUntil || null };
      setRows((rs) => rs.map((r) => (r.id === selected.id ? { ...r, ...patch } : r)));
      setSelected((s) => ({ ...s, ...patch }));
    } catch (e) {
      alert(e.response?.data?.message || "Action failed");
    } finally {
      setBusy(false);
    }
  };

  if (loading) return <p style={{ color: "#6b7280" }}>Loading…</p>;

  return (
    <div>
      <h2 className="text-[26px] font-extrabold mb-1" style={{ color: ACCENT }}>Freelancers</h2>
      <p className="text-gray-500 text-[14px] mb-6">Platform activity at a glance.</p>

      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #eef2f6" }}>
        <div className="overflow-x-auto">
          <table className="w-full" style={{ borderCollapse: "collapse", minWidth: 860 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #eef2f6" }}>
                {["Email", "Experience Level", "Job Title", "Skills", "Portfolio"].map((h) => (
                  <th key={h} className="text-[13px] font-semibold text-gray-500 px-5 py-4 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr><td colSpan={5} className="px-5 py-8 text-center text-gray-400 text-[14px]">No freelancers yet.</td></tr>
              ) : (
                rows.map((u) => {
                  const p = u.profile || {};
                  return (
                    <tr
                      key={u.id}
                      onClick={() => setSelected(u)}
                      className="cursor-pointer hover:bg-[#f7fbfe] transition-colors"
                      style={{ borderBottom: "1px solid #f1f5f9" }}
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2.5">
                          <Avatar email={u.email} />
                          <span className="text-[13px] text-gray-700">{u.email}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-[13px] text-gray-700">{p.experienceLevel || <Dash />}</td>
                      <td className="px-5 py-4 text-[13px] text-gray-700">{p.jobTitle || <Dash />}</td>
                      <td className="px-5 py-4"><SkillTags skills={p.skills} /></td>
                      <td className="px-5 py-4">
                        {p.portfolio?.website ? (
                          <a href={p.portfolio.website} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-[12px]" style={{ color: ACCENT, wordBreak: "break-all", display: "inline-block", maxWidth: 220 }}>
                            {p.portfolio.website}
                          </a>
                        ) : <Dash />}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail + approve/reject modal (preserves the approval workflow) */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, background: "rgba(13,17,23,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50, padding: 20 }}>
          <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-2xl w-full" style={{ maxWidth: 560, maxHeight: "85vh", overflowY: "auto", padding: 24 }}>
            <div className="flex items-start justify-between gap-3 mb-4 pb-4" style={{ borderBottom: "1px solid #f1f5f9" }}>
              <div>
                <p className="text-[16px] font-bold text-gray-900">{selected.email}</p>
                <p className="text-[12px] text-gray-400 mt-1">Joined {new Date(selected.createdAt).toLocaleDateString()} · {selected.role}</p>
                <div className="mt-2"><StatusPill status={selected.applicationStatus} /></div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", fontSize: 22, color: "#9ca3af", cursor: "pointer", lineHeight: 1 }}>×</button>
            </div>

            <div className="flex gap-2 mb-5">
              <button onClick={() => act("approve")} disabled={busy || selected.applicationStatus === "approved"} className="text-white text-[13px] font-semibold rounded-lg" style={{ background: "#16a34a", padding: "8px 18px", border: "none", cursor: busy ? "not-allowed" : "pointer", opacity: selected.applicationStatus === "approved" ? 0.5 : 1 }}>✓ Approve</button>
              <button onClick={() => act("reject")} disabled={busy || selected.applicationStatus === "rejected"} className="text-white text-[13px] font-semibold rounded-lg" style={{ background: "#dc2626", padding: "8px 18px", border: "none", cursor: busy ? "not-allowed" : "pointer", opacity: selected.applicationStatus === "rejected" ? 0.5 : 1 }}>✕ Reject</button>
            </div>

            <ProfileDetails profile={selected.profile} />
          </div>
        </div>
      )}
    </div>
  );
}
