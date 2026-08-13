import { useState } from "react";
import { useNavigate } from "react-router-dom";
import freelancerVideo from "../assets/Freelancers.mp4";
import businessVideo from "../assets/Business.mp4";

/* ── Searchable pages (from App.jsx routes) ──────────────────────────────
   title  = what shows in the dropdown
   path   = the route to navigate to (same tab)
   group  = small category label shown on the right
   keys   = extra keywords to match against                               */
const SEARCH_INDEX = [
  // Main pages
  { title: "Home", path: "/", group: "Page", keys: ["home", "main"] },
  { title: "About Us", path: "/about/", group: "Page", keys: ["about", "company"] },
  { title: "Contact Us", path: "/contact/", group: "Page", keys: ["contact", "support", "help"] },
  {
    title: "Freelance Social Media Jobs",
    path: "/remote-marketing-freelance-jobs/",
    group: "Freelancer",
    keys: ["remote", "freelance", "jobs", "apply", "work", "marketing"],
  },

  // Business services — Content & Copy
  {
    title: "Hire Social Media Manager",
    path: "/business-services/hire-social-media-manager/",
    group: "Content & Copy",
    keys: ["smm", "social", "manager", "management"],
  },
  {
    title: "Hire Content Writers & Copywriters",
    path: "/business-services/hire-content-writer-copywriter/",
    group: "Content & Copy",
    keys: ["content", "writer", "copywriter", "copy", "blog"],
  },
  {
    title: "Hire Community Manager",
    path: "/business-services/hire-community-manager/",
    group: "Content & Copy",
    keys: ["community", "moderation", "engagement"],
  },
  {
    title: "Hire Marketing Analytics Expert",
    path: "/business-services/hire-marketing-analytics-expert/",
    group: "Content & Copy",
    keys: ["analytics", "reporting", "data", "insights"],
  },

  // Business services — Video & Audio
  {
    title: "Hire Video Editor & Producer",
    path: "/business-services/hire-video-editor-producer/",
    group: "Video & Audio",
    keys: ["video", "editor", "producer", "editing"],
  },
  {
    title: "Hire Short Form Video Editor",
    path: "/business-services/hire-short-form-video-editor/",
    group: "Video & Audio",
    keys: ["short form", "reels", "shorts", "video"],
  },
  {
    title: "Hire Podcast Producer & Editor",
    path: "/business-services/hire-podcast-producer-editor/",
    group: "Video & Audio",
    keys: ["podcast", "audio", "producer"],
  },
  {
    title: "Hire Voice Over Artist & Audio Producer",
    path: "/business-services/hire-voice-over-artist-audio-producer/",
    group: "Video & Audio",
    keys: ["voice over", "vo", "audio", "narration"],
  },

  // Business services — Design & Development
  {
    title: "Hire Graphic Designer",
    path: "/business-services/hire-graphic-designer/",
    group: "Design & Development",
    keys: ["graphic", "design", "branding", "logo"],
  },
  {
    title: "Hire Web Designer & Developer",
    path: "/business-services/hire-web-designer-developer/",
    group: "Design & Development",
    keys: ["web", "website", "developer", "design"],
  },
  {
    title: "Hire App Designer & Developer",
    path: "/business-services/hire-app-designer-developer/",
    group: "Design & Development",
    keys: ["app", "mobile", "developer", "ios", "android"],
  },

  // Business services — Growth & Strategy
  {
    title: "Hire Paid Social Ads Expert",
    path: "/business-services/hire-paid-social-ads-expert/",
    group: "Growth & Strategy",
    keys: ["paid", "ads", "social", "ppc", "meta", "performance"],
  },
  {
    title: "Hire Digital Marketing Consultant",
    path: "/business-services/hire-digital-marketing-consultant/",
    group: "Growth & Strategy",
    keys: ["consultant", "consulting", "strategy", "audit"],
  },
];

/* Quick chips shown under the search bar (Fiverr-style) */
const QUICK_LINKS = {
  freelancer: [
    { label: "Freelance Jobs", path: "/remote-marketing-freelance-jobs/" },
    { label: "Short-Form Video", path: "/business-services/hire-short-form-video-editor/" },
    { label: "Copywriting", path: "/business-services/hire-content-writer-copywriter/" },
    { label: "Graphic Design", path: "/business-services/hire-graphic-designer/" },
    { label: "Paid Social", path: "/business-services/hire-paid-social-ads-expert/" },
  ],
  business: [
    { label: "Social Media Manager", path: "/business-services/hire-social-media-manager/" },
    { label: "Video Editor", path: "/business-services/hire-video-editor-producer/" },
    { label: "Graphic Designer", path: "/business-services/hire-graphic-designer/" },
    { label: "Paid Ads Expert", path: "/business-services/hire-paid-social-ads-expert/" },
    { label: "Web Developer", path: "/business-services/hire-web-designer-developer/" },
  ],
};

/* Keyword aliases -> best page. Checked first (Fiverr-style intent match).
   Order matters: more specific terms first. */
const ALIASES = [
  { keys: ["short form", "short-form", "reels", "shorts"], path: "/business-services/hire-short-form-video-editor/" },
  { keys: ["video", "editor", "editing"], path: "/business-services/hire-short-form-video-editor/" },
  { keys: ["podcast"], path: "/business-services/hire-podcast-producer-editor/" },
  { keys: ["voice", "vo", "narration"], path: "/business-services/hire-voice-over-artist-audio-producer/" },
  { keys: ["copywrit", "content", "writer", "blog", "copy"], path: "/business-services/hire-content-writer-copywriter/" },
  { keys: ["community", "moderation"], path: "/business-services/hire-community-manager/" },
  { keys: ["analytic", "report", "data", "insight"], path: "/business-services/hire-marketing-analytics-expert/" },
  { keys: ["graphic", "logo", "brand", "design"], path: "/business-services/hire-graphic-designer/" },
  { keys: ["web", "website"], path: "/business-services/hire-web-designer-developer/" },
  { keys: ["app", "mobile", "ios", "android"], path: "/business-services/hire-app-designer-developer/" },
  { keys: ["paid", "ads", "ppc", "performance"], path: "/business-services/hire-paid-social-ads-expert/" },
  { keys: ["consult", "strategy", "audit"], path: "/business-services/hire-digital-marketing-consultant/" },
  { keys: ["social media manager", "smm", "social", "manager", "management"], path: "/business-services/hire-social-media-manager/" },
  { keys: ["freelance", "job", "apply", "remote", "work"], path: "/remote-marketing-freelance-jobs/" },
  { keys: ["about", "company"], path: "/about/" },
  { keys: ["contact", "support", "help"], path: "/contact/" },
];

/* Resolve a query to the best matching page path. */
function resolvePath(query) {
  const q = query.trim().toLowerCase();
  if (!q) return null;

  // 1) alias intent match (first alias whose keyword appears in the query)
  for (const a of ALIASES) {
    if (a.keys.some((k) => q.includes(k))) return a.path;
  }

  // 2) fallback: score against page titles + keywords
  let best = null;
  let bestScore = 0;
  for (const item of SEARCH_INDEX) {
    const title = item.title.toLowerCase();
    const hay = (title + " " + item.keys.join(" ")).toLowerCase();
    let score = 0;
    if (title.startsWith(q)) score += 5;
    if (title.includes(q)) score += 3;
    if (hay.includes(q)) score += 1;
    if (score > bestScore) {
      bestScore = score;
      best = item.path;
    }
  }
  return best;
}

/* Search box (no live suggestion dropdown). Enter or the button opens the
   best-matching page in the same tab. Quick chips route directly. */
function HeroSearch({ landingType, size = "desktop" }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const submit = () => {
    const path = resolvePath(query);
    if (path) navigate(path); // same tab
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submit();
    }
  };

  const chips = QUICK_LINKS[landingType] || QUICK_LINKS.freelancer;
  const inputH = size === "mobile" ? "h-[52px]" : "h-[60px]";
  const textSize = size === "mobile" ? "text-[14px]" : "text-[16px]";

  return (
    <div className="w-full max-w-[640px]">
      {/* Input row */}
      <div
        className={`flex items-center ${inputH} w-full overflow-hidden rounded-[12px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]`}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={
            landingType === "business"
              ? "Search a role to hire… e.g. video editor"
              : "Search for any service… e.g. short-form video"
          }
          aria-label="Search services"
          className={`h-full flex-1 bg-transparent px-5 ${textSize} text-[#1b1e24] placeholder:text-[#9aa1ac] outline-none`}
        />
        <button
          type="button"
          onClick={submit}
          aria-label="Search"
          className="mr-2 flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-[9px] bg-[#12131a] text-white transition hover:bg-[#1CB9F5]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path
              d="M20 20l-3.2-3.2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Quick chips */}
      <div className="mt-4 flex flex-wrap gap-2.5">
        {chips.map((c) => (
          <button
            key={c.path}
            type="button"
            onClick={() => navigate(c.path)}
            className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-[13px] font-medium text-white transition hover:border-white/60 hover:bg-white/20"
            style={{ WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}
          >
            {c.label}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Hero({ landingType, setLandingType }) {
  const isFreelancer = landingType === "freelancer";
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate(isFreelancer ? "/login/freelancer" : "/login/business");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style>{`
        @keyframes heroUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-up { opacity: 0; animation: heroUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
        .hero-d1 { animation-delay: 0.10s; }
        .hero-d2 { animation-delay: 0.20s; }
        .hero-d3 { animation-delay: 0.30s; }
        .hero-d4 { animation-delay: 0.40s; }
        @media (prefers-reduced-motion: reduce) {
          .hero-up { animation: none; opacity: 1; }
        }
      `}</style>

      {/* Background Video */}
      <video
        key={landingType}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src={isFreelancer ? freelancerVideo : businessVideo}
          type="video/mp4"
        />
      </video>

      {/* Light tint only — keeps the video bright */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero Content */}
      <div className="relative z-20 flex h-full flex-col">
        {/* ── MOBILE ── */}
        <div className="sm:hidden flex flex-col justify-end h-full pb-10 px-5">
          {/* Toggle */}
          <div
            className="hero-up hero-d1 flex rounded-full p-1 self-start mb-6"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            <button
              onClick={() => setLandingType("freelancer")}
              className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-300 ${
                isFreelancer
                  ? "bg-[#1CB9F5] text-white shadow-sm"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Freelancer
            </button>
            <button
              onClick={() => setLandingType("business")}
              className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-300 ${
                !isFreelancer
                  ? "bg-[#19baf5] text-white shadow-sm"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Business
            </button>
          </div>

          {/* Heading */}
          <h1 className="hero-up hero-d2 text-white font-[400] tracking-[-0.5px] leading-[1.14] text-[27px] mb-4 [text-shadow:0_1px_16px_rgba(0,0,0,0.3)]">
            {isFreelancer ? (
              <>
                Find Freelance Social Media Jobs
                <br />
                and Digital Marketing Work Matched <br />
                to Your Skills
              </>
            ) : (
              <>
                Hire a Social Media Manager
                <br /> or Any Digital Marketing <br /> Specialist Your Business{" "}
                <br /> Needs
              </>
            )}
          </h1>

          {/* Search */}
          <div className="hero-up hero-d3 mb-6">
            <HeroSearch landingType={landingType} size="mobile" />
          </div>

          {/* CTA Button */}
          <button
            onClick={handleCTA}
            className={`hero-up hero-d4 group w-full h-[52px] rounded-full active:scale-95 transition-all duration-300 text-[15px] font-semibold text-white shadow-lg flex items-center justify-center gap-2 ${
              isFreelancer
                ? "bg-[#1CB9F5] hover:bg-[#14ACE8]"
                : "bg-[#19baf5] hover:bg-[#14ACE8]"
            }`}
          >
            {isFreelancer ? "Apply as a Freelancer" : "Post a Role"}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden sm:flex flex-1 items-center">
          <div className="w-full mt-[-40px] max-w-[1700px] mx-auto px-10 lg:px-[78px]">
            <div className="max-w-[1120px]">
              <h1
                className="
                  hero-up hero-d2
                  text-white 2xl:font-[400] font-[300] tracking-[-0.5px] leading-[1.16]
                  [text-shadow:0_1px_24px_rgba(0,0,0,0.3)]
                  text-[56px]
                  md:text-[64px]
                  lg:text-[74px]
                  xl:text-[52px]
                  2xl:text-[58px]
                "
              >
                {isFreelancer ? (
                  <>
                    Find Freelance Social Media <br /> Jobs and Digital Marketing{" "}
                    <br /> Work Matched to Your Skills
                  </>
                ) : (
                  <>
                    Hire a Social Media Manager
                    <br /> or Any Digital Marketing <br /> Specialist Your
                    Business <br /> Needs
                  </>
                )}
              </h1>

              {/* Search + quick chips */}
              <div className="hero-up hero-d3 mt-8">
                <HeroSearch landingType={landingType} size="desktop" />
              </div>

              {/* CTA row */}
              <div className="hero-up hero-d4 mt-7 flex flex-wrap items-center gap-6">
                <button
                  onClick={handleCTA}
                  className="
                    group h-[56px] rounded-full
                    bg-[#1CB9F5] hover:bg-[#14ACE8]
                    transition-all duration-300
                    px-8 text-[17px] font-medium text-white
                    shadow-[0_10px_30px_rgba(28,185,245,0.35)]
                    flex items-center gap-2
                  "
                >
                  {isFreelancer ? "Apply as a Freelancer" : "Post a Role"}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

              
              </div>
            </div>
          </div>
        </div>

        {/* ── DESKTOP: Bottom Glass Bar ── */}
        <div className="hidden sm:block absolute bottom-8 left-0 w-full">
          <div
            className="mx-10 lg:mx-[78px] rounded-[16px] relative overflow-hidden"
            style={{
              background: "rgba(18, 179, 239, 0.28)",
              backdropFilter: "blur(12px) saturate(160%)",
              WebkitBackdropFilter: "blur(12px) saturate(160%)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              boxShadow:
                "0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-[1px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
              }}
            />
            <div className="px-8 py-[14px] relative z-10">
              <p className="text-center text-white text-[14px] md:text-[15px] lg:text-[16px] font-[200] leading-[2]">
                {isFreelancer
                  ? "Most freelance social media jobs start with a proposal you send into silence. Here, you skip that step. Complete one SMM application, and defined briefs come to you based on what you specialize in, whether that's short-form video, copywriting, community management, graphic design, or paid socials."
                  : "SMM Hiring is a hiring platform for teams that need social media marketing services, content, video, or design talent without going through an agency. Post the role, tell us what the work needs, and a shortlist of candidates we've already interviewed comes to you."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}