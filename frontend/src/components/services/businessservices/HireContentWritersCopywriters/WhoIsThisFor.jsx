import {
  FileText,
  Target,
  Rocket,
  Building2,
  ShoppingCart,
  Cpu,
  Users,
  Info,
  Mic,
  ArrowUpRight,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";

const BLUE = "#0BA5EC";
const INK = "#0F172A";

const comparisonRows = [
  { label: "Usually Writing", writer: "Blog posts, articles, guides", copywriter: "Website copy, ads, landing pages" },
  { label: "Trying To", writer: "Educate and inform", copywriter: "Push toward one action" },
  { label: "Gets You", writer: "Traffic, search visibility", copywriter: "Signups, purchases, replies" },
  { label: "Bring One In When", writer: "People need to find you first", copywriter: "People are already there, just not converting" },
];

const audiences = [
  { icon: Rocket,      title: "Startups",         desc: "Figuring out a brand voice before they've fully settled on one." },
  { icon: Building2,   title: "Small businesses",  desc: "Keeping content steady without adding a full-time hire." },
  { icon: ShoppingCart,title: "Ecommerce brands",  desc: "Product pages that need to sell, not just describe." },
  { icon: Cpu,         title: "SaaS companies",    desc: "Turning technical products into something a normal person understands." },
  { icon: Users,       title: "Agencies",          desc: "Backup writers when client work outpaces their own team." },
];

/* ─── Compare card ─── */
const CompareCard = ({ icon: Icon, title, tagline, accent, field }) => (
  <div className="relative flex-1 overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)] sm:rounded-[22px]">
    <div className="h-[3px] w-full" style={{ backgroundColor: accent }} />
    <div className="p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11"
          style={{ backgroundColor: `${accent}12` }}
        >
          <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" style={{ color: accent }} strokeWidth={2} />
        </span>
        <div>
          <h3 className="text-[16.5px] font-[700] leading-tight text-gray-900 sm:text-[20px]">{title}</h3>
          <p className="text-[12px] font-[400] text-gray-400 sm:text-[13px]">{tagline}</p>
        </div>
      </div>
      <div className="mt-6 sm:mt-7">
        {comparisonRows.map((row, i) => (
          <div key={row.label} className={`py-4 sm:py-[18px] ${i !== 0 ? "border-t border-gray-100" : ""}`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-400 sm:text-[10.5px]">{row.label}</p>
            <p className="mt-1.5 text-[14px] font-[500] leading-[1.5] text-gray-800 sm:text-[16px]">{row[field]}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Audience card content ─── */
const AudienceContent = ({ audience, index, align }) => (
  <div
    className={`group max-w-[380px] rounded-[18px] border border-gray-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#0BA5EC]/25 hover:shadow-[0_16px_30px_-16px_rgba(11,165,236,0.3)] lg:p-6 ${align === "right" ? "ml-auto text-right" : "mr-auto text-left"}`}
  >
    <span className="text-[11px] font-[700] tracking-[0.08em] transition-colors duration-300" style={{ color: BLUE }}>
      {String(index + 1).padStart(2, "0")}
    </span>
    <h4 className="mt-1 text-[16px] font-[700] text-gray-900 sm:text-[17.5px]">{audience.title}</h4>
    <p className="mt-1.5 text-[13.5px] leading-[1.6] text-gray-500 sm:text-[14.5px]">{audience.desc}</p>
  </div>
);

/* ─── Audience timeline ─── */
const AudienceTimeline = () => (
  <div className="mt-6 sm:mt-8">
    {/* Mobile */}
    <div className="relative md:hidden">
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#0BA5EC]/40 via-gray-200 to-transparent" />
      <div className="flex flex-col gap-6">
        {audiences.map((audience, index) => {
          const Icon = audience.icon;
          return (
            <div key={audience.title} className="group relative flex gap-4">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_-4px_rgba(11,165,236,0.35)] ring-2 ring-[#0BA5EC]/25 transition-all duration-300 group-hover:ring-[#0BA5EC]/60 group-hover:shadow-[0_6px_20px_-4px_rgba(11,165,236,0.5)] group-hover:scale-110">
                <Icon className="h-[18px] w-[18px] text-[#0BA5EC] transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
              </span>
              <div className="pt-0.5">
                <span className="text-[11px] font-[700] tracking-[0.08em]" style={{ color: BLUE }}>{String(index + 1).padStart(2, "0")}</span>
                <h4 className="mt-0.5 text-[15.5px] font-[700] text-gray-900">{audience.title}</h4>
                <p className="mt-1 text-[13.5px] leading-[1.6] text-gray-500">{audience.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* Desktop zigzag */}
    <div className="relative hidden md:block">
      {audiences.map((audience, index) => {
        const Icon = audience.icon;
        const isLeft = index % 2 === 0;
        return (
          <div key={audience.title} className="group/row grid grid-cols-[1fr_64px_1fr] lg:grid-cols-[1fr_72px_1fr]">
            <div className={`flex items-center py-5 ${isLeft ? "justify-end pr-8 lg:pr-10" : ""}`}>
              {isLeft && <AudienceContent audience={audience} index={index} align="right" />}
            </div>
            <div className="relative flex justify-center">
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gray-200" />
              <span
                className="relative z-10 my-auto flex h-12 w-12 cursor-default items-center justify-center rounded-full bg-white ring-2 ring-[#0BA5EC]/25 transition-all duration-300 lg:h-[54px] lg:w-[54px]"
                style={{ boxShadow: "0 8px 20px -8px rgba(11,165,236,0.4)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "scale(1.18)";
                  e.currentTarget.style.boxShadow = "0 10px 28px -6px rgba(11,165,236,0.65)";
                  e.currentTarget.style.ringColor = "rgba(11,165,236,0.6)";
                  e.currentTarget.style.background = "#EBF7FE";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 20px -8px rgba(11,165,236,0.4)";
                  e.currentTarget.style.background = "white";
                }}
              >
                <Icon
                  className="h-5 w-5 text-[#0BA5EC] transition-all duration-300 lg:h-[22px] lg:w-[22px]"
                  strokeWidth={2}
                />
              </span>
            </div>
            <div className={`flex items-center py-5 ${!isLeft ? "justify-start pl-8 lg:pl-10" : ""}`}>
              {!isLeft && <AudienceContent audience={audience} index={index} align="left" />}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

/* ─── Premium closing banner — horizontal, double height ─── */
const bannerFeatures = ["Episode editing", "Show notes", "Distribution", "Scheduling"];

const ClosingBanner = () => (
  <div
    className="relative mt-14 overflow-hidden rounded-[24px] sm:mt-16"
    style={{
      background: "linear-gradient(135deg, #F0F7FF 0%, #EBF5FF 55%, #F3EFFE 100%)",
      border: "1px solid rgba(11,165,236,0.16)",
    }}
  >
    {/* Soft corner glows */}
    <div
      className="pointer-events-none absolute -top-12 -right-12 h-52 w-52 rounded-full opacity-50"
      style={{ background: "radial-gradient(circle, rgba(11,165,236,0.18), transparent 70%)", filter: "blur(24px)" }}
    />
    <div
      className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full opacity-35"
      style={{ background: "radial-gradient(circle, rgba(124,58,237,0.16), transparent 70%)", filter: "blur(20px)" }}
    />

    {/* Left gradient stripe */}
    <div
      className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-[24px]"
      style={{ background: "linear-gradient(180deg, #0BA5EC, #7C3AED)" }}
    />

    {/* Top hairline */}
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-56"
      style={{ background: "linear-gradient(90deg, transparent, rgba(11,165,236,0.55), rgba(124,58,237,0.4), transparent)" }}
    />

    {/* ── Main horizontal layout ── */}
    <div className="flex flex-col gap-8 px-10 py-10 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-12 sm:py-12 lg:px-14 lg:py-14">

      {/* ── Left: icon + all copy ── */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">

        {/* Icon cluster */}
        <div className="relative shrink-0 flex items-center justify-center" style={{ width: 72, height: 72 }}>
          <div
            className="absolute rounded-full"
            style={{ width: 72, height: 72, border: "1px solid rgba(11,165,236,0.18)" }}
          />
          <div
            className="absolute rounded-full"
            style={{ width: 54, height: 54, border: "1px solid rgba(11,165,236,0.26)" }}
          />
          <div
            className="relative z-10 flex items-center justify-center rounded-2xl"
            style={{
              width: 48, height: 48,
              background: "linear-gradient(135deg, rgba(11,165,236,0.15), rgba(124,58,237,0.09))",
              border: "1px solid rgba(11,165,236,0.28)",
              boxShadow: "0 6px 22px -6px rgba(11,165,236,0.38)",
            }}
          >
            <Mic className="h-5 w-5" style={{ color: BLUE }} strokeWidth={2} />
          </div>
          {/* Live dot */}
          <span
            className="absolute z-20 rounded-full"
            style={{
              top: 6, right: 6, width: 10, height: 10,
              backgroundColor: BLUE,
              border: "2px solid #EBF5FF",
              boxShadow: `0 0 8px ${BLUE}90`,
            }}
          />
        </div>

        {/* Text block */}
        <div className="flex flex-col gap-3">
          {/* Pill */}
          

          {/* Headline */}
          <p className="text-[18px] font-[500] leading-[1.3] text-gray-900 sm:text-[20px] lg:text-[27px]">
            Need content beyond written copy?
          </p>

          {/* Body */}
          <p className="max-w-[600px] text-[13.5px] font-[350] leading-[1.75] text-gray-500 sm:text-[16px]">
            You can also{" "}
            <Link
              to="/business-services/hire-podcast-producer-editor/"
              className="font-[600] underline underline-offset-2 transition-all hover:opacity-80"
              style={{ color: BLUE, textDecorationColor: "rgba(11,165,236,0.35)" }}
            >
              hire podcast producers
            </Link>{" "}
            for podcast planning, production, and ongoing content support.
          </p>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {bannerFeatures.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-[11px] font-[500]"
                style={{
                  background: "rgba(11,165,236,0.08)",
                  border: "1px solid rgba(11,165,236,0.16)",
                  color: "#185FA5",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right: CTAs stacked ── */}
      <div className="flex shrink-0 flex-row items-center gap-3 sm:flex-col sm:items-stretch sm:gap-3">
        <Link
          to="/business-services/hire-podcast-producer-editor/"
          className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-[700] text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-6px_rgba(11,165,236,0.55)]"
          style={{ backgroundColor: BLUE }}
        >
          Explore production
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <Link
          to="/business-services/hire-podcast-producer-editor/"
          className="inline-flex items-center justify-center gap-2 rounded-full border bg-white px-6 py-3 text-[13px] font-[600] text-gray-700 transition-all duration-200 hover:border-[#0BA5EC]/40 hover:text-[#0BA5EC] hover:-translate-y-0.5"
          style={{ borderColor: "rgba(0,0,0,0.10)" }}
        >
          <Headphones className="h-3.5 w-3.5" strokeWidth={2} />
          Hear samples
        </Link>
      </div>
    </div>

    {/* Bottom hairline */}
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-40"
      style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.45), rgba(11,165,236,0.45), transparent)" }}
    />
  </div>
);

/* ─── Main section ─── */
const WhoIsThisFor = () => (
  <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
    <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

      {/* ── Heading ── */}
      <h2 className="max-w-4xl text-[26px] sm:text-[40px] lg:text-[52px] 2xl:text-[54px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
        <span style={{ color: BLUE }}>Content Writers</span> vs Copywriters
      </h2>

      {/* ── Intro ── */}
      <p className="mt-5 max-w-3xl text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
        Content writer, or copywriter. Most people ask this before anything else, and honestly, the answer just comes down to{" "}
        <span className="font-[600] text-gray-800">what the content's supposed to do once it's live.</span>
      </p>

      {/* ── Comparison cards ── */}
      <div className="mt-12 sm:mt-16">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-0">
          <CompareCard icon={FileText} title="Content Writers" tagline="Bring people in" accent={BLUE} field="writer" />
          <div className="hidden shrink-0 items-center justify-center px-3 lg:flex">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[15px] font-[800] uppercase tracking-wider text-gray-400 shadow-sm">vs</span>
          </div>
          <CompareCard icon={Target} title="Copywriters" tagline="Close the sale" accent={INK} field="copywriter" />
        </div>
        <div className="mt-5 flex items-start gap-2 px-1 sm:mt-6">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-300" strokeWidth={2} />
          <p className="text-[12.5px] italic leading-[1.6] text-gray-400 sm:text-[14px]">
            Not a hard rule, more of a starting point. Plenty of projects blur the line on purpose.
          </p>
        </div>
      </div>

      {/* ── Together paragraph ── */}
      <p className="mt-8 max-w-3xl text-[15px] font-[350] leading-[1.7] text-gray-500 sm:mt-10 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
        Most businesses end up needing both, just not on the same day.{" "}
        <span className="font-[600] text-gray-800">Content Writers bring people in. Copywriters close them.</span>{" "}
        Together, that's content writing services and copywriting services working as one hire instead of two searches.
      </p>

      {/* ── Who hires ── */}
      <div className="mt-14 sm:mt-20">
        <h3 className="mt-3 text-[21px] pl-105 2xl:pl-145 font-[600] tracking-[-0.3px] text-gray-900 sm:text-[30px]">
          Who actually hires through this
        </h3>
        <AudienceTimeline />
      </div>

      {/* ── Closing banner ── */}
      <ClosingBanner />
    </div>
  </section>
);

export default WhoIsThisFor;