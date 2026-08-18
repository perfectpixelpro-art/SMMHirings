import {
  Store,
  LayoutGrid,
  BarChart2,
  Target,
  CreditCard,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const requirements = [
  { icon: Store,        num: "01", label: "Business",  desc: "What you do and who you serve" },
  { icon: LayoutGrid,   num: "02", label: "Platforms", desc: "Where your community is active" },
  { icon: BarChart2,    num: "03", label: "Workload",  desc: "Type and amount of support needed" },
  { icon: Target,       num: "04", label: "Goals",     desc: "What you want your manager to achieve" },
  { icon: CreditCard,   num: "05", label: "Budget",    desc: "What you're comfortable spending" },
  { icon: Calendar,     num: "06", label: "Timeline",  desc: "When you need someone to start" },
];

/* ─── Single card ─── */
const ReqCard = ({ icon: Icon, num, label, desc }) => (
  <article className="group relative overflow-hidden rounded-[22px] border border-[#eef2f7] bg-white p-6 shadow-[0_8px_24px_-18px_rgba(11,165,236,0.55)] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#cfe9fb] hover:shadow-[0_18px_36px_-20px_rgba(11,165,236,0.75)] sm:p-7 2xl:p-8">
    {/* Ghost number */}
    <span
      className="pointer-events-none absolute right-4 top-3 select-none text-[52px] font-[800] leading-none sm:text-[60px]"
      style={{ color: "rgba(11,165,236,0.07)" }}
    >
      {num}
    </span>

    {/* Icon */}
    <span
      className="mb-5 flex h-11 w-11 items-center justify-center rounded-[12px]"
      style={{ backgroundColor: "rgba(11,165,236,0.09)" }}
    >
      <Icon className="h-[22px] w-[22px]" style={{ color: ACCENT }} strokeWidth={2} />
    </span>

    {/* Label */}
    <h3 className="text-[16.5px] font-[600] leading-snug text-gray-900 sm:text-[18.5px] 2xl:text-[19.5px]">
      {label}
    </h3>

    {/* Desc */}
    <p className="mt-2.5 text-[13.5px] font-[350] leading-[1.7] text-gray-500 sm:text-[14.5px] sm:leading-[1.75] 2xl:text-[15.5px]">
      {desc}
    </p>
  </article>
);

/* ─── Main section ─── */
const GetStarted = () => (
  <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
    <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

      {/* ── Heading ── */}
      <h2 className="mt-3 max-w-4xl text-[26px] sm:text-[40px] lg:text-[52px] 2xl:text-[54px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
        What You'll Need to{" "}
        <span style={{ color: ACCENT }}>Get Started</span>
      </h2>

      {/* ── Subtitle ── */}
      <p className="mt-4 max-w-3xl text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
        Getting started is simple. Share a few details so the right{" "}
        <span className="font-[600] text-gray-800">community manager</span> can
        be matched to your needs.
      </p>

      {/* ── Cards grid ── */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-6">
        {requirements.map((req) => (
          <ReqCard key={req.label} {...req} />
        ))}
      </div>

      {/* ── Blockquote callout ── */}
      <div
        className="mt-10 border-l-[3px] pl-5 sm:mt-12"
        style={{ borderColor: ACCENT, borderRadius: 0 }}
      >
        <p className="text-[15px] font-[350] leading-[1.8] text-gray-500 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
          <span className="font-[600] text-gray-800">
            The clearer your requirements, the closer the match
          </span>{" "}
          — whether you're after{" "}
          <span className="font-[600] text-gray-800">Community Engagement Services</span>,{" "}
          <span className="font-[600] text-gray-800">Community Moderation Services</span>,
          or ongoing{" "}
          <span className="font-[600] text-gray-800">Social Media Community Management</span>.
          The details you share upfront are what get you matched with the right
          person, not a generic pick from a list.
        </p>
      </div>

      {/* ── Freelancer note ── */}
      <p className="mt-5 text-[13.5px] font-[350] leading-[1.7] text-gray-500 sm:text-[15px]">
        On the other side of the platform,{" "}
        <Link
          to="/remote-marketing-freelance-jobs"
          className="font-[600] underline underline-offset-2 hover:opacity-80"
          style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
        >
          remote marketing freelance jobs
        </Link>{" "}
        connect marketing professionals with businesses looking for their skills.
      </p>

    </div>
  </section>
);

export default GetStarted;