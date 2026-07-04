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

const Sub = ({ children }) => (
  <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3 mt-2">{children}</p>
);

const INDUSTRIES = ["Technology", "E-commerce", "Marketing & Advertising", "Healthcare", "Finance", "Education", "Real Estate", "Other"];
const SIZES = ["1-10", "11-50", "51-200", "201-500", "500+"];
const CATEGORIES = ["Social Media Management", "Video Editing", "Graphic Design", "Web Development", "Content Writing", "SEO", "Other"];
const EXPERIENCE = ["Entry Level", "Intermediate", "Expert"];
const FREELANCER_COUNT = ["1", "2-3", "4-5", "6+"];
const BUDGETS = ["Under $500", "$500 - $1,000", "$1,000 - $5,000", "$5,000+"];
const TIMELINES = ["Less than 1 week", "1-2 weeks", "1 month", "1-3 months", "3+ months"];

export default function BusinessProfilePage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [f, setF] = useState({
    companyName: "", firstName: "", lastName: "", accountEmail: user?.email || "",
    companyEmail: "", phone: "", website: "",
    address: "", city: "", state: "", country: "", zipCode: "",
    industry: "", companySize: "", about: "",
    linkedin: "", facebook: "", instagram: "",
    projectName: "", projectCategory: "", experienceLevel: "", numberOfFreelancers: "",
    budgetRange: "", projectTimeline: "", projectDescription: "",
  });
  const [requiredSkills, setRequiredSkills] = useState([]);
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));
  const REQUIRED = ["companyName", "firstName", "lastName", "accountEmail", "phone", "industry", "companySize", "about"];
  const canSubmit = REQUIRED.every((k) => f[k].trim());

  const onLogo = (e) => {
    const file = e.target.files?.[0];
    if (file) { setLogoFile(file); setLogoPreview(URL.createObjectURL(file)); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setError(""); setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(f).forEach(([k, v]) => fd.append(k, v ?? ""));
      fd.append("requiredSkills", JSON.stringify(requiredSkills));
      if (logoFile) fd.append("logo", logoFile);
      await api.post("/api/profile/business", fd);
      navigate("/profile/pending"); // step 2: "evaluating your profile"
    } catch (err) {
      setError(err.response?.data?.message || "Could not save profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#f0f8fd" }}>
      {/* top bar */}
      <div className="bg-white border-b border-gray-100 px-5 sm:px-10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <img src={logo} alt="SMM Hiring" className="h-7 sm:h-8" />
          <Stepper current={1} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8">
        <h1 className="text-[26px] sm:text-[30px] font-extrabold text-gray-900 mb-1">Create Your Business Profile 🏢</h1>
        <p className="text-gray-500 text-[14px] mb-7">Fill your company details to find the best freelancers for your projects</p>

        <form onSubmit={handleSubmit}>
          {/* Company Information */}
          <Card>
            <SectionHead color="#3b82f6">Company Information</SectionHead>
            <div className="flex gap-4 items-start mb-4">
              <label className="flex-shrink-0 cursor-pointer">
                <div style={{ width: 64, height: 64, borderRadius: 12, background: "#f0f4f8", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", border: "1px solid #e5e7eb" }}>
                  {logoPreview ? <img src={logoPreview} alt="logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontSize: 22 }}>🏢</span>}
                </div>
                <input type="file" accept="image/*" onChange={onLogo} hidden />
              </label>
              <div className="flex-1">
                <Labeled label="Company Name" required>
                  <input className={inputCls} style={inputStyle} placeholder="Perfect Pixel Pro" value={f.companyName} onChange={set("companyName")} />
                </Labeled>
              </div>
            </div>

            <Sub>Account Owner</Sub>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <Labeled label="First Name" required><input className={inputCls} style={inputStyle} value={f.firstName} onChange={set("firstName")} /></Labeled>
              <Labeled label="Last Name" required><input className={inputCls} style={inputStyle} value={f.lastName} onChange={set("lastName")} /></Labeled>
            </div>
            <div className="flex flex-col gap-4 mb-4">
              <Labeled label="Account Email" required><input type="email" className={inputCls} style={inputStyle} value={f.accountEmail} onChange={set("accountEmail")} /></Labeled>
              <Labeled label="Company Email"><input type="email" className={inputCls} style={inputStyle} placeholder="contact@company.com" value={f.companyEmail} onChange={set("companyEmail")} /></Labeled>
              <Labeled label="Phone Number" required><input className={inputCls} style={inputStyle} placeholder="+91 98765 43210" value={f.phone} onChange={set("phone")} /></Labeled>
              <Labeled label="Website"><input className={inputCls} style={inputStyle} placeholder="https://yourcompany.com" value={f.website} onChange={set("website")} /></Labeled>
            </div>

            <Sub>Company Address</Sub>
            <div className="flex flex-col gap-4">
              <Labeled label="Address"><input className={inputCls} style={inputStyle} placeholder="123, Business Park, Satellite Road" value={f.address} onChange={set("address")} /></Labeled>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Labeled label="City"><input className={inputCls} style={inputStyle} placeholder="Ahmedabad" value={f.city} onChange={set("city")} /></Labeled>
                <Labeled label="State"><input className={inputCls} style={inputStyle} placeholder="Gujarat" value={f.state} onChange={set("state")} /></Labeled>
                <Labeled label="Country"><input className={inputCls} style={inputStyle} placeholder="India" value={f.country} onChange={set("country")} /></Labeled>
              </div>
              <div className="w-full sm:w-1/3"><Labeled label="Zip Code"><input className={inputCls} style={inputStyle} placeholder="380015" value={f.zipCode} onChange={set("zipCode")} /></Labeled></div>
            </div>
          </Card>

          {/* Business Details */}
          <Card>
            <SectionHead color="#f59e0b">Business Details</SectionHead>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <Labeled label="Industry" required>
                <select className={inputCls} style={inputStyle} value={f.industry} onChange={set("industry")}>
                  <option value="">Select industry</option>
                  {INDUSTRIES.map((x) => <option key={x}>{x}</option>)}
                </select>
              </Labeled>
              <Labeled label="Company Size" required>
                <select className={inputCls} style={inputStyle} value={f.companySize} onChange={set("companySize")}>
                  <option value="">Select size</option>
                  {SIZES.map((x) => <option key={x}>{x}</option>)}
                </select>
              </Labeled>
            </div>
            <Labeled label="About Company" required>
              <textarea rows={4} maxLength={500} className={inputCls} style={inputStyle} placeholder="Tell freelancers about your company..." value={f.about} onChange={set("about")} />
            </Labeled>
            <p className="text-right text-[11px] text-gray-400 mt-1">{f.about.length}/500</p>

            <Sub>Social Links</Sub>
            <div className="flex flex-col gap-4">
              <Labeled label="LinkedIn"><input className={inputCls} style={inputStyle} placeholder="https://linkedin.com/company/yourcompany" value={f.linkedin} onChange={set("linkedin")} /></Labeled>
              <Labeled label="Facebook"><input className={inputCls} style={inputStyle} placeholder="https://facebook.com/yourcompany" value={f.facebook} onChange={set("facebook")} /></Labeled>
              <Labeled label="Instagram"><input className={inputCls} style={inputStyle} placeholder="https://instagram.com/yourcompany" value={f.instagram} onChange={set("instagram")} /></Labeled>
            </div>
          </Card>

          {/* Project Information */}
          <Card>
            <SectionHead color="#22c55e">Project Information</SectionHead>
            <Labeled label="Project Name">
              <input className={inputCls} style={inputStyle} placeholder="E-commerce Website Redesign" value={f.projectName} onChange={set("projectName")} />
            </Labeled>
            <div className="mt-4"><Labeled label="Project Category">
              <select className={inputCls} style={inputStyle} value={f.projectCategory} onChange={set("projectCategory")}>
                <option value="">Select category</option>
                {CATEGORIES.map((x) => <option key={x}>{x}</option>)}
              </select>
            </Labeled></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <Labeled label="Experience Level">
                <select className={inputCls} style={inputStyle} value={f.experienceLevel} onChange={set("experienceLevel")}>
                  <option value="">Select</option>{EXPERIENCE.map((x) => <option key={x}>{x}</option>)}
                </select>
              </Labeled>
              <Labeled label="Number of Freelancers">
                <select className={inputCls} style={inputStyle} value={f.numberOfFreelancers} onChange={set("numberOfFreelancers")}>
                  <option value="">Select</option>{FREELANCER_COUNT.map((x) => <option key={x}>{x}</option>)}
                </select>
              </Labeled>
              <Labeled label="Budget Range (USD)">
                <select className={inputCls} style={inputStyle} value={f.budgetRange} onChange={set("budgetRange")}>
                  <option value="">Select</option>{BUDGETS.map((x) => <option key={x}>{x}</option>)}
                </select>
              </Labeled>
              <Labeled label="Project Timeline">
                <select className={inputCls} style={inputStyle} value={f.projectTimeline} onChange={set("projectTimeline")}>
                  <option value="">Select</option>{TIMELINES.map((x) => <option key={x}>{x}</option>)}
                </select>
              </Labeled>
            </div>
          </Card>

          {/* Requirements */}
          <Card>
            <SectionHead color="#a855f7">Requirements</SectionHead>
            <Labeled label="Required Skills">
              <TagInput value={requiredSkills} onChange={setRequiredSkills} placeholder="Type a skill and press Enter (e.g. React JS)" />
            </Labeled>
            <p className="text-[11px] text-gray-400 mt-1 mb-4">Press Enter or comma to add</p>
            <Labeled label="Project Description">
              <textarea rows={5} maxLength={500} className={inputCls} style={inputStyle} placeholder="Describe your project requirements in detail..." value={f.projectDescription} onChange={set("projectDescription")} />
            </Labeled>
            <p className="text-right text-[11px] text-gray-400 mt-1">{f.projectDescription.length}/500</p>
          </Card>

          {error && <p className="text-red-500 text-[13px] text-center mb-4">{error}</p>}

          <button
            type="submit"
            disabled={!canSubmit || loading}
            className="w-full text-white font-bold rounded-xl transition-opacity"
            style={{ background: "#12B3EF", padding: "15px", fontSize: "15px", border: "none", cursor: !canSubmit || loading ? "not-allowed" : "pointer", opacity: !canSubmit || loading ? 0.5 : 1 }}
          >
            {loading ? "Saving..." : "Create Business Profile & Continue  →"}
          </button>
          {!canSubmit && <p className="text-center text-[12px] text-gray-400 mt-2">Fill all required (*) fields to continue: Company Name, First/Last Name, Account Email, Phone, Industry, Company Size &amp; About Company.</p>}
        </form>
      </div>
    </div>
  );
}
