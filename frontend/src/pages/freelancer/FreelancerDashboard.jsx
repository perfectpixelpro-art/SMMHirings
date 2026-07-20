import { useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../api/axios";
import logo from "../../assets/logo.png";

// --- Mock job listings (static for now; swap for a real API later) ---
const MOCK_JOBS = [
  {
    id: "j1",
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
    title: "Content Creator (Short-form Video)",
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
    title: "Paid Social Specialist",
    company: "GrowthLab",
    location: "Hybrid · NYC",
    type: "Full-time",
    rate: "$35–50/hr",
    posted: "1 week ago",
    description:
      "Plan, launch, and optimize paid campaigns across Meta and TikTok. Strong grasp of ROAS and A/B testing required.",
    skills: ["Meta Ads", "TikTok Ads", "Analytics", "A/B Testing", "Budgeting", "Copywriting"],
  },
  {
    id: "j4",
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

// Normalize a skill string for tolerant comparison.
const norm = (s) => s.toLowerCase().trim();

// Percentage of a job's required skills the freelancer already has.
function computeMatch(jobSkills, mySkills) {
  if (!jobSkills.length) return { pct: 0, matched: [], missing: [] };
  const mine = new Set(mySkills.map(norm));
  const matched = jobSkills.filter((s) => mine.has(norm(s)));
  const missing = jobSkills.filter((s) => !mine.has(norm(s)));
  return { pct: Math.round((matched.length / jobSkills.length) * 100), matched, missing };
}

const matchColor = (pct) => (pct >= 70 ? "#16a34a" : pct >= 40 ? "#d97706" : "#dc2626");

export default function FreelancerDashboard() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
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
    return () => {
      active = false;
    };
  }, []);

  // Jobs annotated with their match, sorted best-match first.
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

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#f0f8fd" }}>
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-5 sm:px-10 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <img src={logo} alt="SMM Hiring" className="h-7 sm:h-8" />
          <button
            onClick={() => navigate("/dashboard")}
            className="text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            style={{ background: "#12B3EF", padding: "9px 18px", fontSize: 14, border: "none", cursor: "pointer" }}
          >
            Dashboard
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-10 py-8">
        <h1 className="text-gray-900 font-extrabold text-[22px] sm:text-[26px] mb-1">
          Welcome back{user.email ? `, ${user.email.split("@")[0]}` : ""} 👋
        </h1>
        <p className="text-gray-500 text-[14px] mb-7">
          Here are roles matched to your skills from the AI interview.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          {/* LEFT — Jobs listing */}
          <div className="flex flex-col gap-4">
            {jobs.map((job) => {
              const isActive = job.id === selected.id;
              return (
                <button
                  key={job.id}
                  onClick={() => setSelectedId(job.id)}
                  className="text-left bg-white rounded-2xl transition-all"
                  style={{
                    border: isActive ? "2px solid #12B3EF" : "1px solid #e5e7eb",
                    padding: "18px 20px",
                    cursor: "pointer",
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-gray-900 font-bold text-[16px]">{job.title}</h3>
                      <p className="text-gray-500 text-[13px] mt-0.5">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <div
                      className="shrink-0 text-[12px] font-bold px-2.5 py-1 rounded-full"
                      style={{ background: `${matchColor(job.match.pct)}18`, color: matchColor(job.match.pct) }}
                    >
                      {job.match.pct}% match
                    </div>
                  </div>
                  <p className="text-gray-600 text-[13px] leading-relaxed mt-2.5">{job.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {job.type && <Chip>{job.type}</Chip>}
                    {job.rate && <Chip>{job.rate}</Chip>}
                    <Chip>{job.posted}</Chip>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT — Skill match panel for the selected job */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-1">
                Skill Match
              </p>
              <h3 className="text-gray-900 font-bold text-[16px] mb-4">{selected.title}</h3>

              {/* Ring / big percentage */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="flex items-center justify-center rounded-full font-extrabold"
                  style={{
                    width: 84,
                    height: 84,
                    fontSize: 22,
                    color: matchColor(selected.match.pct),
                    background: `${matchColor(selected.match.pct)}14`,
                    border: `3px solid ${matchColor(selected.match.pct)}`,
                  }}
                >
                  {selected.match.pct}%
                </div>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  {loadingProfile
                    ? "Loading your skills…"
                    : `You match ${selected.match.matched.length} of ${selected.skills.length} required skills.`}
                </p>
              </div>

              {selected.match.matched.length > 0 && (
                <div className="mb-4">
                  <p className="text-[12px] font-semibold text-gray-700 mb-2">✓ Your matching skills</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.match.matched.map((s) => (
                      <span
                        key={s}
                        className="text-[12px] font-medium px-2.5 py-1 rounded-full"
                        style={{ background: "#dcfce7", color: "#16a34a" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selected.match.missing.length > 0 && (
                <div className="mb-5">
                  <p className="text-[12px] font-semibold text-gray-700 mb-2">Skills to grow</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.match.missing.map((s) => (
                      <span
                        key={s}
                        className="text-[12px] font-medium px-2.5 py-1 rounded-full"
                        style={{ background: "#f3f4f6", color: "#6b7280" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                className="w-full text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
                style={{ background: "#12B3EF", padding: 13, border: "none", cursor: "pointer" }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Chip = ({ children }) => (
  <span className="text-[12px] font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
    {children}
  </span>
);
