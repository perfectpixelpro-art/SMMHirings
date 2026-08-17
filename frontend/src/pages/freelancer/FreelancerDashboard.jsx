import { useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../api/axios";
import NavbarC from "../../components/NavbarC";
import skillInstagram from "../../assets/skillInstagram.png";
import skillContentStrategy from "../../assets/skillContentStrategy.png";
import skillCopywriting from "../../assets/skillCopywriting.png";
import skillCanva from "../../assets/skillCanva.png";
import skillAnalytics from "../../assets/skillAnalytics.png";
import skillCommunityManagement from "../../assets/skillCommunityManagement.png";

// Pre-rendered chip images (icon + label) for known skills.
const SKILL_CHIP_IMG = {
  instagram: skillInstagram,
  "content strategy": skillContentStrategy,
  copywriting: skillCopywriting,
  canva: skillCanva,
  analytics: skillAnalytics,
  "community management": skillCommunityManagement,
};

// --- Mock job listings (static for now; swap for a real API later) ---
const MOCK_JOBS = [
  {
    id: "j1",
    icon: "🗂️",
    title: "Social Media Manager",
    company: "Bloom Digital",
    location: "Remote",
    type: "Full-time",
    rate: "$25–35/hr",
    posted: "2 days ago",
    description:
      "Own the end-to-end social presence for lifestyle brands — content calendars, community management, and paid campaigns.",
    skills: ["Instagram", "Content Strategy", "Copywriting", "Canva", "Analytics", "Community Management"],
  },
  {
    id: "j2",
    icon: "🎬",
    title: "Content Creator",
    subtitle: "(Short-form Video)",
    company: "Reelworks",
    location: "Remote",
    type: "Contract",
    rate: "$30–45/hr",
    posted: "5 days ago",
    description:
      "Produce scroll-stopping short-form video for TikTok and Reels. Scripting, editing, and trend research.",
    skills: ["TikTok", "Video Editing", "Reels", "Storytelling", "CapCut", "Trend Research"],
  },
  {
    id: "j3",
    icon: "📊",
    title: "Paid Social Specialist",
    company: "GrowthLab",
    location: "Hybrid",
    type: "Full-time",
    rate: "$25–35/hr",
    posted: "1 week ago",
    description:
      "Plan, launch, and optimize paid campaigns across Meta and TikTok. Strong grasp of ROAS and A/B testing required.",
    skills: ["Meta Ads", "TikTok Ads", "Analytics", "A/B Testing", "Budgeting", "Copywriting"],
  },
  {
    id: "j4",
    icon: "💬",
    title: "Community Manager",
    company: "Nimbus",
    location: "Remote",
    type: "Part-time",
    rate: "$20–28/hr",
    posted: "3 days ago",
    description:
      "Nurture an engaged community across Discord, Instagram, and X. Respond, moderate, and surface insights.",
    skills: ["Community Management", "Instagram", "Copywriting", "Analytics", "Discord", "Customer Support"],
  },
];

// Small emoji per skill for the "skills to grow" chips.
const SKILL_ICON = {
  instagram: "📷", "content strategy": "📄", copywriting: "✏️", canva: "🎨",
  analytics: "📊", "community management": "👥", tiktok: "🎵", "video editing": "🎬",
  reels: "🎞️", storytelling: "📖", capcut: "✂️", "trend research": "🔎",
  "meta ads": "📣", "tiktok ads": "📣", "a/b testing": "🧪", budgeting: "💰",
  discord: "💬", "customer support": "🎧",
};
const skillIcon = (s) => SKILL_ICON[s.toLowerCase()] || "•";

const norm = (s) => s.toLowerCase().trim();

// Percentage of a job's required skills the freelancer already has.
function computeMatch(jobSkills, mySkills) {
  if (!jobSkills.length) return { pct: 0, matched: [], missing: [] };
  const mine = new Set(mySkills.map(norm));
  const matched = jobSkills.filter((s) => mine.has(norm(s)));
  const missing = jobSkills.filter((s) => !mine.has(norm(s)));
  return { pct: Math.round((matched.length / jobSkills.length) * 100), matched, missing };
}

export default function FreelancerDashboard() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [landingType, setLandingType] = useState("freelancer"); // for the shared navbar
  const [mySkills, setMySkills] = useState([]);
  const [selectedId, setSelectedId] = useState(MOCK_JOBS[0].id);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const { data } = await api.get("/api/profile/me");
        if (active) setMySkills(data.profile?.skills || []);
      } catch {
        if (active) setMySkills([]);
      } finally {
        if (active) setLoadingProfile(false);
      }
    })();
    return () => { active = false; };
  }, []);

  const jobs = useMemo(
    () =>
      MOCK_JOBS.map((j) => ({ ...j, match: computeMatch(j.skills, mySkills) })).sort(
        (a, b) => b.match.pct - a.match.pct
      ),
    [mySkills]
  );

  const selected = jobs.find((j) => j.id === selectedId) || jobs[0];

  if (loading) return null;
  if (!user) return <Navigate to="/login/freelancer" replace />;

  const name = user.email ? user.email.split("@")[0] : "there";

  return (
    <div className="min-h-screen font-sans relative overflow-hidden" style={{ background: "linear-gradient(180deg,#ffffff 0%,#f7fbfe 100%)" }}>
      <NavbarC landingType={landingType} setLandingType={setLandingType} />

      <div className="max-w-[1060px] mx-auto px-5 sm:px-8 pt-[120px] lg:pt-[132px] pb-14">
        <h1 className="font-extrabold text-gray-900 text-[26px] sm:text-[32px] leading-[1.1] mb-2">Welcome back, {name}</h1>
        <p className="text-gray-400 text-[15px] mb-7">Here are roles matched to your skills from the AI interview.</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_330px] gap-5 items-start">

          {/* LEFT — job cards */}
          <div className="flex flex-col gap-4">
            {jobs.map((job) => {
              const active = job.id === selected.id;
              return (
                <button
                  key={job.id}
                  onClick={() => setSelectedId(job.id)}
                  className="text-left bg-white rounded-[20px] transition-all"
                  style={{
                    border: active ? "2px solid #7dd3fc" : "1px solid #eef2f6",
                    boxShadow: active ? "0 10px 26px rgba(18,179,239,0.12)" : "0 3px 12px rgba(13,38,59,0.04)",
                    padding: "16px 18px",
                    cursor: "pointer",
                  }}
                >
                  <div className="flex items-start gap-3.5">
                    {/* icon */}
                    <div className="shrink-0 flex items-center justify-center rounded-xl text-[18px]" style={{ width: 44, height: 44, background: "#e0f2fe" }}>
                      {job.icon}
                    </div>

                    {/* main */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-gray-900 font-bold text-[16px] leading-tight">
                            {job.title}{" "}
                            {job.subtitle && <span className="text-gray-400 font-normal text-[13px]">{job.subtitle}</span>}
                          </h3>
                          <p className="text-[13px] mt-0.5">
                            <span className="text-gray-600 font-medium">{job.company}</span>{" "}
                            <span className="text-gray-400">{job.location}</span>
                          </p>
                        </div>
                        <span className="shrink-0 text-[12px] font-semibold px-2.5 py-1 rounded-full" style={{ background: "#e0f2fe", color: "#12B3EF" }}>
                          {job.match.pct}% match
                        </span>
                      </div>

                      <p className="text-gray-500 text-[13px] leading-relaxed mt-2 max-w-[540px]">{job.description}</p>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        <span className="text-[11.5px] font-semibold px-2.5 py-1 rounded-full" style={{ background: "#e0f2fe", color: "#12B3EF" }}>{job.type}</span>
                        <span className="text-[11.5px] font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">{job.rate}</span>
                        <span className="text-[11.5px] font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">🗓 {job.posted}</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT — skill match card */}
          <div className="lg:sticky lg:top-[120px]">
            <div className="bg-white rounded-[18px] p-5" style={{ border: "1px solid #eef2f6", boxShadow: "0 10px 32px rgba(13,38,59,0.06)" }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: "#12B3EF" }}>Skill Match</p>
              <h3 className="text-gray-900 font-bold text-[17px] mb-4">{selected.title}</h3>

              <div className="flex items-center gap-3.5 mb-4">
                <Ring pct={selected.match.pct} />
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  {loadingProfile ? "Loading your skills…" : (
                    <>You match <b className="text-gray-800">{selected.match.matched.length} of {selected.skills.length}</b> required skills.</>
                  )}
                </p>
              </div>

              <div style={{ borderTop: "1px solid #f1f5f9" }} className="pt-4">
                {selected.match.matched.length > 0 && (
                  <div className="mb-4">
                    <p className="text-[13px] text-gray-400 mb-2.5">Your skills</p>
                    <div className="grid grid-cols-2 gap-2">
                      {selected.match.matched.map((s) => (
                        <SkillChip key={s} label={s} matched />
                      ))}
                    </div>
                  </div>
                )}

                {selected.match.missing.length > 0 && (
                  <>
                    <p className="text-[13px] text-gray-400 mb-2.5">Skills to grow</p>
                    <div className="grid grid-cols-2 gap-2">
                      {selected.match.missing.map((s) => (
                        <SkillChip key={s} label={s} />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <button
                className="w-full mt-5 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                style={{ background: "#12B3EF", padding: 12, fontSize: 14, border: "none", cursor: "pointer" }}
              >
                Apply Now <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Circular progress ring.
const Ring = ({ pct }) => {
  const r = 24, c = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0" style={{ width: 62, height: 62 }}>
      <svg width="62" height="62" viewBox="0 0 62 62" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="31" cy="31" r={r} fill="none" stroke="#eef2f6" strokeWidth="6" />
        <circle
          cx="31" cy="31" r={r} fill="none" stroke="#12B3EF" strokeWidth="6" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - Math.max(pct, 4) / 100)}
          style={{ transition: "stroke-dashoffset .5s" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-extrabold text-[13px]" style={{ color: "#12B3EF" }}>
        {pct}%
      </span>
    </div>
  );
};

const SkillChip = ({ label, matched }) => {
  const img = SKILL_CHIP_IMG[label.toLowerCase()];
  if (img) {
    return <img src={img} alt={label} className="h-[32px] w-auto max-w-full object-contain object-left select-none" />;
  }
  return (
    <div
      className="flex items-center gap-2 text-[13px] font-medium px-3 py-2 rounded-full truncate"
      style={{
        border: "1px solid #eef2f6",
        background: matched ? "#f0fdf4" : "#fff",
        color: matched ? "#16a34a" : "#4b5563",
      }}
    >
      <span className="shrink-0">{skillIcon(label)}</span>
      <span className="truncate">{label}</span>
    </div>
  );
};
