import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/axios";
import { useAuth } from "../../context/AuthContext";
import Stepper from "../../components/profile/Stepper";
import TagInput from "../../components/profile/TagInput";
import logo from "../../assets/logo.png";

const inputCls = "w-full rounded-lg outline-none text-gray-700 placeholder-gray-400 bg-white";
const inputStyle = { border: "1px solid #d1d5db", padding: "10px 12px", fontSize: "13px" };

const Labeled = ({ label, required, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[13px] text-gray-600 font-medium">
      {label} {required && <span style={{ color: "#ef4444" }}>*</span>}
    </label>
    {children}
  </div>
);
const SectionHead = ({ color, children }) => (
  <div className="flex items-center gap-3 mb-5">
    <span style={{ width: 28, height: 28, borderRadius: 8, background: color, display: "inline-block" }} />
    <h2 className="text-[16px] font-bold text-gray-900">{children}</h2>
  </div>
);
const Card = ({ children }) => (
  <div className="bg-white rounded-2xl p-6 sm:p-8 mb-6" style={{ border: "1px solid #eef2f6" }}>{children}</div>
);

const EXPERIENCE = ["Entry Level (0-1 yr)", "Junior (1-3 yrs)", "Mid (3-5 yrs)", "Senior (5+ yrs)", "Expert (8+ yrs)"];
const AVAILABILITY = ["Full-time", "Part-time", "Hourly / Contract", "Weekends only"];
const RATES = ["$10 - $25 / hr", "$25 - $50 / hr", "$50 - $100 / hr", "$100+ / hr"];

export default function FreelancerProfilePage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [f, setF] = useState({
    firstName: "", lastName: "", email: user?.email || "", phone: "", location: "",
    jobTitle: "", experienceLevel: "", availability: "", hourlyRate: "", about: "",
    website: "", linkedin: "", behance: "", github: "", dribbble: "", instagram: "",
  });
  const [languages, setLanguages] = useState([]);
  const [skills, setSkills] = useState([]);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));
  const REQUIRED = ["firstName", "lastName", "email", "phone", "jobTitle", "experienceLevel", "availability", "hourlyRate", "website"];
  const canSubmit = REQUIRED.every((k) => f[k].trim()) && skills.length > 0;

  const onAvatar = (e) => {
    const file = e.target.files?.[0];
    if (file) { setAvatarFile(file); setAvatarPreview(URL.createObjectURL(file)); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setError(""); setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(f).forEach(([k, v]) => fd.append(k, v ?? ""));
      fd.append("languages", JSON.stringify(languages));
      fd.append("skills", JSON.stringify(skills));
      if (avatarFile) fd.append("avatar", avatarFile);
      if (resumeFile) fd.append("resume", resumeFile);
      await api.post("/api/profile/freelancer", fd);
      navigate("/profile/pending"); // step 2: "evaluating your profile"
    } catch (err) {
      setError(err.response?.data?.message || "Could not save profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#f0f8fd" }}>
      <div className="bg-white border-b border-gray-100 px-5 sm:px-10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <img src={logo} alt="SMM Hiring" className="h-7 sm:h-8" />
          <Stepper current={1} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8">
        <h1 className="text-[26px] sm:text-[30px] font-extrabold text-gray-900 mb-1">Create Your Freelancer Profile</h1>
        <p className="text-gray-500 text-[14px] mb-7">Fill your details to get matched with the best opportunities</p>

        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <Card>
            <SectionHead color="#a855f7">Personal Information</SectionHead>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-start mb-4">
              <label className="flex-shrink-0 cursor-pointer self-center sm:self-start">
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#f0f4f8", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", border: "1px solid #e5e7eb" }}>
                  {avatarPreview ? <img src={avatarPreview} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontSize: 24 }}>👤</span>}
                </div>
                <input type="file" accept="image/*" onChange={onAvatar} hidden />
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                <Labeled label="First Name" required><input className={inputCls} style={inputStyle} value={f.firstName} onChange={set("firstName")} /></Labeled>
                <Labeled label="Last Name" required><input className={inputCls} style={inputStyle} value={f.lastName} onChange={set("lastName")} /></Labeled>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Labeled label="Email Address" required><input type="email" className={inputCls} style={inputStyle} value={f.email} onChange={set("email")} /></Labeled>
              <Labeled label="Phone Number" required><input className={inputCls} style={inputStyle} placeholder="+91 98765 43210" value={f.phone} onChange={set("phone")} /></Labeled>
              <Labeled label="Location"><input className={inputCls} style={inputStyle} placeholder="Ahmedabad, Gujarat, India" value={f.location} onChange={set("location")} /></Labeled>
              <Labeled label="Languages"><TagInput value={languages} onChange={setLanguages} placeholder="Type a language and press Enter" /></Labeled>
            </div>
          </Card>

          {/* Professional Information */}
          <Card>
            <SectionHead color="#f59e0b">Professional Information</SectionHead>
            <Labeled label="Job Title" required>
              <input className={inputCls} style={inputStyle} placeholder="UI/UX Designer" value={f.jobTitle} onChange={set("jobTitle")} />
            </Labeled>
            <div className="mt-4"><Labeled label="Experience Level" required>
              <select className={inputCls} style={inputStyle} value={f.experienceLevel} onChange={set("experienceLevel")}>
                <option value="">Select experience</option>{EXPERIENCE.map((x) => <option key={x}>{x}</option>)}
              </select>
            </Labeled></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <Labeled label="Availability" required>
                <select className={inputCls} style={inputStyle} value={f.availability} onChange={set("availability")}>
                  <option value="">Select</option>{AVAILABILITY.map((x) => <option key={x}>{x}</option>)}
                </select>
              </Labeled>
              <Labeled label="Hourly Rate (USD)" required>
                <select className={inputCls} style={inputStyle} value={f.hourlyRate} onChange={set("hourlyRate")}>
                  <option value="">Select rate</option>{RATES.map((x) => <option key={x}>{x}</option>)}
                </select>
              </Labeled>
            </div>
            <div className="mt-4"><Labeled label="Skills" required>
              <TagInput value={skills} onChange={setSkills} placeholder="Type a skill and press Enter (e.g. React JS)" />
            </Labeled>
            <p className="text-[11px] text-gray-400 mt-1">Press Enter or comma to add</p></div>
          </Card>

          {/* About Me */}
          <Card>
            <SectionHead color="#3b82f6">About Me</SectionHead>
            <textarea rows={6} maxLength={1000} className={inputCls} style={inputStyle} placeholder="I am a passionate designer with 4+ years of experience..." value={f.about} onChange={set("about")} />
          </Card>

          {/* Portfolio & Social Links */}
          <Card>
            <SectionHead color="#ec4899">Portfolio & Social Links</SectionHead>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Labeled label="Portfolio Website" required><input className={inputCls} style={inputStyle} placeholder="https://yourportfolio.com" value={f.website} onChange={set("website")} /></Labeled>
              <Labeled label="LinkedIn"><input className={inputCls} style={inputStyle} placeholder="https://linkedin.com/in/yourname" value={f.linkedin} onChange={set("linkedin")} /></Labeled>
              <Labeled label="Behance"><input className={inputCls} style={inputStyle} placeholder="https://behance.net/yourname" value={f.behance} onChange={set("behance")} /></Labeled>
              <Labeled label="GitHub"><input className={inputCls} style={inputStyle} placeholder="https://github.com/yourname" value={f.github} onChange={set("github")} /></Labeled>
              <Labeled label="Dribbble"><input className={inputCls} style={inputStyle} placeholder="https://dribbble.com/yourname" value={f.dribbble} onChange={set("dribbble")} /></Labeled>
              <Labeled label="Instagram"><input className={inputCls} style={inputStyle} placeholder="https://instagram.com/yourname" value={f.instagram} onChange={set("instagram")} /></Labeled>
            </div>
          </Card>

          {/* Resume */}
          <Card>
            <SectionHead color="#ef4444">Resume</SectionHead>
            <p className="text-gray-500 text-[13px] mb-3">Upload your updated resume (PDF, DOC, DOCX)</p>
            <label className="block cursor-pointer">
              <div style={{ border: "2px dashed #d1d5db", borderRadius: 12, padding: "28px", textAlign: "center" }}>
                <p className="text-gray-700 text-[14px] font-semibold">⬆ {resumeFile ? resumeFile.name : "Upload Resume"}</p>
                {!resumeFile && <p className="text-gray-400 text-[12px] mt-1">Drag & drop or click to browse</p>}
              </div>
              <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResumeFile(e.target.files?.[0] || null)} hidden />
            </label>
          </Card>

          {error && <p className="text-red-500 text-[13px] text-center mb-4">{error}</p>}

          <button
            type="submit"
            disabled={!canSubmit || loading}
            className="w-full text-white font-bold rounded-xl transition-opacity"
            style={{ background: "#12B3EF", padding: "15px", fontSize: "15px", border: "none", cursor: !canSubmit || loading ? "not-allowed" : "pointer", opacity: !canSubmit || loading ? 0.5 : 1 }}
          >
            {loading ? "Saving..." : "Complete Profile & Continue  →"}
          </button>
          {!canSubmit && <p className="text-center text-[12px] text-gray-400 mt-2">Fill all required (*) fields: First/Last Name, Email, Phone, Job Title, Experience, Availability, Hourly Rate, Skills &amp; Portfolio Website.</p>}
        </form>
      </div>
    </div>
  );
}
