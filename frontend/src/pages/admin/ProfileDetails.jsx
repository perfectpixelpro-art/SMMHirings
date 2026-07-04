const BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";

const HIDE = new Set(["_id", "__v", "user", "id", "createdAt", "updatedAt"]);
const FILE_IMG = new Set(["logo", "avatar"]);

const label = (k) =>
  k.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

function Value({ k, v }) {
  if (v == null || v === "" || (Array.isArray(v) && v.length === 0))
    return <span style={{ color: "#9ca3af" }}>—</span>;

  if (typeof v === "string" && FILE_IMG.has(k))
    return <img src={BASE + v} alt={k} style={{ width: 56, height: 56, borderRadius: 8, objectFit: "cover", border: "1px solid #e5e7eb" }} />;

  if (k === "resume" && typeof v === "string")
    return <a href={BASE + v} target="_blank" rel="noreferrer" style={{ color: "#12B3EF" }}>View / download</a>;

  if (Array.isArray(v))
    return (
      <span style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {v.map((t) => (
          <span key={t} style={{ background: "#e0f5ff", color: "#0a7bb0", padding: "2px 9px", borderRadius: 999, fontSize: 12 }}>{t}</span>
        ))}
      </span>
    );

  if (typeof v === "string" && /^https?:\/\//.test(v))
    return <a href={v} target="_blank" rel="noreferrer" style={{ color: "#12B3EF", wordBreak: "break-all" }}>{v}</a>;

  return <span style={{ color: "#111827" }}>{String(v)}</span>;
}

function Row({ k, v }) {
  return (
    <div style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: "1px solid #f1f5f9" }}>
      <div style={{ width: 150, flexShrink: 0, color: "#6b7280", fontSize: 13 }}>{label(k)}</div>
      <div style={{ fontSize: 13 }}><Value k={k} v={v} /></div>
    </div>
  );
}

export default function ProfileDetails({ profile }) {
  if (!profile)
    return <p style={{ color: "#9ca3af", fontSize: 14 }}>This user hasn't submitted their profile yet.</p>;

  const entries = Object.entries(profile).filter(([k]) => !HIDE.has(k));

  return (
    <div>
      {entries.map(([k, v]) => {
        // nested object (social links / portfolio) → its own labelled group
        if (v && typeof v === "object" && !Array.isArray(v)) {
          const sub = Object.entries(v).filter(([, val]) => val);
          return (
            <div key={k} style={{ marginTop: 16 }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 4 }}>{label(k)}</p>
              {sub.length ? sub.map(([sk, sv]) => <Row key={sk} k={sk} v={sv} />) : <span style={{ color: "#9ca3af", fontSize: 13 }}>—</span>}
            </div>
          );
        }
        return <Row key={k} k={k} v={v} />;
      })}
    </div>
  );
}
