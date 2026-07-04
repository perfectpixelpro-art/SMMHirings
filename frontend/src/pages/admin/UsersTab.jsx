import { useEffect, useState } from "react";
import { adminApi } from "../../api/adminApi";
import ProfileDetails from "./ProfileDetails";

const Badge = ({ ok, yes, no }) => (
  <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 999, background: ok ? "#dcfce7" : "#fee2e2", color: ok ? "#16a34a" : "#dc2626" }}>
    {ok ? yes : no}
  </span>
);

const STATUS_STYLE = {
  pending: { bg: "#fef9c3", fg: "#ca8a04", label: "Pending review" },
  approved: { bg: "#dcfce7", fg: "#16a34a", label: "Approved" },
  rejected: { bg: "#fee2e2", fg: "#dc2626", label: "Rejected" },
};

const StatusPill = ({ status }) => {
  const s = STATUS_STYLE[status] || STATUS_STYLE.pending;
  return <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999, background: s.bg, color: s.fg }}>{s.label}</span>;
};

export default function UsersTab({ title, endpoint, listKey }) {
  const [rows, setRows] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);

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

  useEffect(() => {
    setLoading(true);
    adminApi
      .get(endpoint)
      .then((r) => {
        const list = r.data[listKey] || [];
        setRows(list);
        setSelected(list[0] || null);
      })
      .finally(() => setLoading(false));
  }, [endpoint, listKey]);

  if (loading) return <p style={{ color: "#6b7280" }}>Loading…</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[22px] font-extrabold text-gray-900">{title}</h2>
        <span className="text-[13px] text-gray-500">{rows.length} total</span>
      </div>

      {rows.length === 0 ? (
        <p className="text-gray-500 text-[14px]">No {title.toLowerCase()} yet.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-5">
          {/* list */}
          <div className="flex flex-col gap-2">
            {rows.map((u) => {
              const active = selected?.id === u.id;
              return (
                <button
                  key={u.id}
                  onClick={() => setSelected(u)}
                  className="text-left rounded-xl px-4 py-3 transition-colors"
                  style={{ background: active ? "#12B3EF" : "#fff", border: "1px solid " + (active ? "#12B3EF" : "#eef2f6"), cursor: "pointer" }}
                >
                  <p className="text-[13px] font-semibold" style={{ color: active ? "#fff" : "#111827" }}>{u.email}</p>
                  <div className="flex gap-1.5 mt-1.5">
                    <Badge ok={u.isVerified} yes="Verified" no="Unverified" />
                    <Badge ok={u.profileCompleted} yes="Profile done" no="No profile" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* detail */}
          <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid #eef2f6" }}>
            {selected ? (
              <>
                <div className="mb-4 pb-4" style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <p className="text-[16px] font-bold text-gray-900">{selected.email}</p>
                      <p className="text-[12px] text-gray-400 mt-1">
                        Joined {new Date(selected.createdAt).toLocaleDateString()} · {selected.role}
                      </p>
                    </div>
                    <StatusPill status={selected.applicationStatus} />
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => act("approve")}
                      disabled={busy || selected.applicationStatus === "approved"}
                      className="text-white text-[13px] font-semibold rounded-lg"
                      style={{ background: "#16a34a", padding: "8px 18px", border: "none", cursor: busy ? "not-allowed" : "pointer", opacity: selected.applicationStatus === "approved" ? 0.5 : 1 }}
                    >
                      ✓ Approve
                    </button>
                    <button
                      onClick={() => act("reject")}
                      disabled={busy || selected.applicationStatus === "rejected"}
                      className="text-white text-[13px] font-semibold rounded-lg"
                      style={{ background: "#dc2626", padding: "8px 18px", border: "none", cursor: busy ? "not-allowed" : "pointer", opacity: selected.applicationStatus === "rejected" ? 0.5 : 1 }}
                    >
                      ✕ Reject
                    </button>
                  </div>
                </div>
                <ProfileDetails profile={selected.profile} />
              </>
            ) : (
              <p className="text-gray-400">Select a user to view their profile.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
