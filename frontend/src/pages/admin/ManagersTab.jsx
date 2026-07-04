import { useState } from "react";

const ACCENT = "#12B3EF";

// No managers backend yet — seed the table with the sample roster from the design.
const SEED_MANAGERS = [
  { id: "m1", email: "alice.johnson@example.com", clients: 12, active: 10 },
  { id: "m2", email: "brian.smith@example.com", clients: 8, active: 8 },
  { id: "m3", email: "charlie.brown@example.com", clients: 10, active: 10 },
  { id: "m4", email: "diana.wilson@example.com", clients: 10, active: 8 },
  { id: "m5", email: "ethan.taylor@example.com", clients: 4, active: 4 },
  { id: "m6", email: "fiona.miller@example.com", clients: 6, active: 2 },
  { id: "m7", email: "george.anderson@example.com", clients: 11, active: 6 },
  { id: "m8", email: "hannah.thomas@example.com", clients: 9, active: 9 },
];

const ROLE_OPTIONS = ["Manager", "Senior Manager", "Recruiter", "Support"];
const CLIENT_OPTIONS = SEED_MANAGERS.map((m) => m.email);

const inputStyle = {
  border: "1px solid #d1d5db",
  borderRadius: 8,
  padding: "11px 12px",
  fontSize: 14,
  width: "100%",
  outline: "none",
  background: "#fff",
  color: "#111827",
};

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[13px] font-medium text-gray-600">{label}</label>
    {children}
  </div>
);

const Select = ({ value, onChange, placeholder, options }) => (
  <select value={value} onChange={onChange} style={{ ...inputStyle, appearance: "auto", color: value ? "#111827" : "#9ca3af" }}>
    <option value="" disabled>{placeholder}</option>
    {options.map((o) => (
      <option key={o} value={o} style={{ color: "#111827" }}>{o}</option>
    ))}
  </select>
);

const Avatar = ({ email }) => (
  <span
    className="flex items-center justify-center rounded-full flex-shrink-0"
    style={{ width: 28, height: 28, background: "#e0f5ff", color: ACCENT, fontSize: 12, fontWeight: 700 }}
  >
    {email[0]?.toUpperCase()}
  </span>
);

export default function ManagersTab() {
  const [form, setForm] = useState({ fullName: "", email: "", password: "", role: "", client: "" });
  const [saved, setSaved] = useState(false);
  const [managers, setManagers] = useState(SEED_MANAGERS);

  const set = (k) => (e) => { setForm((f) => ({ ...f, [k]: e.target.value })); setSaved(false); };

  const saveChanges = (e) => {
    e.preventDefault();
    // No backend endpoint yet — keep it local so the UI is fully interactive.
    setSaved(true);
  };

  const assignClient = (id) => (e) => {
    const val = e.target.value;
    if (!val) return;
    setManagers((ms) => ms.map((m) => (m.id === id ? { ...m, clients: m.clients + 1, active: m.active + 1 } : m)));
  };

  const removeClient = (id) => (e) => {
    const val = e.target.value;
    if (!val) return;
    setManagers((ms) => ms.map((m) => (m.id === id ? { ...m, clients: Math.max(0, m.clients - 1), active: Math.max(0, m.active - 1) } : m)));
  };

  return (
    <div>
      <h2 className="text-[26px] font-extrabold mb-1" style={{ color: ACCENT }}>Managers/ Roles</h2>
      <p className="text-gray-500 text-[14px] mb-6">Platform activity at a glance.</p>

      {/* Assign Role form */}
      <form onSubmit={saveChanges} className="bg-white rounded-2xl p-6 mb-6" style={{ border: "1px solid #eef2f6", maxWidth: 520 }}>
        <div className="flex items-center gap-3 mb-5">
          <span className="flex items-center justify-center rounded-full" style={{ width: 40, height: 40, background: "#e0f5ff" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0" />
            </svg>
          </span>
          <div>
            <p className="text-[16px] font-bold text-gray-900">Assign Role</p>
            <p className="text-[13px] text-gray-500">Update your personal and business deals.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Field label="Full Name">
            <input type="text" value={form.fullName} onChange={set("fullName")} style={inputStyle} />
          </Field>
          <Field label="Email Address">
            <input type="email" value={form.email} onChange={set("email")} style={inputStyle} />
          </Field>
          <Field label="Password">
            <input type="password" value={form.password} onChange={set("password")} style={inputStyle} />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Role">
              <Select value={form.role} onChange={set("role")} placeholder="Select Role" options={ROLE_OPTIONS} />
            </Field>
            <Field label="Client">
              <Select value={form.client} onChange={set("client")} placeholder="Select client" options={CLIENT_OPTIONS} />
            </Field>
          </div>

          {saved && <p className="text-[13px] font-medium" style={{ color: "#16a34a" }}>Changes saved.</p>}

          <button
            type="submit"
            className="w-full text-white font-semibold rounded-lg mt-1"
            style={{ background: ACCENT, padding: 13, border: "none", cursor: "pointer", fontSize: 14 }}
          >
            Save Changes
          </button>
        </div>
      </form>

      {/* Managers table */}
      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #eef2f6" }}>
        <div className="overflow-x-auto">
          <table className="w-full" style={{ borderCollapse: "collapse", minWidth: 720 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #eef2f6" }}>
                {["Managers", "Clients", "Active Clients", "Assign Client", "Remove Client"].map((h, i) => (
                  <th key={h} className="text-[13px] font-semibold text-gray-500 px-5 py-4" style={{ textAlign: i === 0 ? "left" : "center" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {managers.map((m) => (
                <tr key={m.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2.5">
                      <Avatar email={m.email} />
                      <span className="text-[13px] text-gray-700">{m.email}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-center text-[13px] text-gray-700">{m.clients}</td>
                  <td className="px-5 py-3 text-center text-[13px] text-gray-700">{m.active}</td>
                  <td className="px-5 py-3">
                    <select defaultValue="" onChange={assignClient(m.id)} style={{ ...inputStyle, fontSize: 13, padding: "8px 10px", color: "#6b7280" }}>
                      <option value="" disabled>Select client</option>
                      {CLIENT_OPTIONS.map((c) => (<option key={c} value={c} style={{ color: "#111827" }}>{c}</option>))}
                    </select>
                  </td>
                  <td className="px-5 py-3">
                    <select defaultValue="" onChange={removeClient(m.id)} style={{ ...inputStyle, fontSize: 13, padding: "8px 10px", color: "#6b7280" }}>
                      <option value="" disabled>Select client</option>
                      {CLIENT_OPTIONS.map((c) => (<option key={c} value={c} style={{ color: "#111827" }}>{c}</option>))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
