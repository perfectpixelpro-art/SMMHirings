import {
  Store,
  LayoutGrid,
  BarChart2,
  Target,
  CreditCard,
  Calendar,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

const BLUE = "#0BA5EC";

const requirements = [
  { icon: Store,       num: "01", label: "Business",  desc: "What you do and who you serve" },
  { icon: LayoutGrid,  num: "02", label: "Platforms", desc: "Where your community is active" },
  { icon: BarChart2,   num: "03", label: "Workload",  desc: "Type and amount of support needed" },
  { icon: Target,      num: "04", label: "Goals",     desc: "What you want your manager to achieve" },
  { icon: CreditCard,  num: "05", label: "Budget",    desc: "What you're comfortable spending" },
  { icon: Calendar,    num: "06", label: "Timeline",  desc: "When you need someone to start" },
];

/* ─── Single card with ghost number ─── */
const ReqCard = ({ icon: Icon, num, label, desc }) => (
  <div className="group relative overflow-hidden rounded-[16px] border border-[#eef0f3] bg-white p-6 transition-all duration-200 hover:border-[#0BA5EC]/30 hover:shadow-[0_6px_24px_-8px_rgba(11,165,236,0.18)] sm:p-7">
    {/* Ghost number */}
    <span
      className="pointer-events-none absolute right-4 top-3 select-none text-[52px] font-[800] leading-none"
      style={{ color: "rgba(11,165,236,0.07)" }}
    >
      {num}
    </span>

    {/* Icon */}
    <span
      className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-[12px]"
      style={{ backgroundColor: "rgba(11,165,236,0.09)" }}
    >
      <Icon className="h-[22px] w-[22px]" style={{ color: BLUE }} strokeWidth={2} />
    </span>

    {/* Text */}
    <p className="text-[22px] font-[500] leading-snug text-[#0d1117]">{label}</p>
    <p className="mt-1.5 text-[14px] leading-[1.6] text-gray-500">{desc}</p>
  </div>
);

/* ─── Main section ─── */
const GetStarted = () => (
   <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
    <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

      {/* ── Heading ── */}
      <h2 className="mt-3 max-w-4xl text-[26px] sm:text-[40px] lg:text-[52px] 2xl:text-[54px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
        What You'll Need to{" "}
        <span style={{ color: BLUE }}>Get Started</span>
      </h2>

      {/* ── Subtitle ── */}
      <p className="mt-4 max-w-2xl text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
        Getting started is simple. Share a few details so the right{" "}
        <strong className="font-[700] text-[#0d1117]">community manager</strong>{" "}
        can be matched to your needs.
      </p>

      {/* ── Cards grid ── */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3.5 lg:grid-cols-6 lg:gap-3">
        {requirements.map((req) => (
          <ReqCard key={req.label} {...req} />
        ))}
      </div>

      {/* ── Blockquote callout ── */}
      <div
        className="mt-7 border-l-[3px] pl-5 sm:mt-8"
        style={{ borderColor: BLUE, borderRadius: 0 }}
      >
        <p className="text-[15px] leading-[1.8] text-[#0d1117] sm:text-[16px]">
          <strong className="font-[700]">
            The clearer your requirements, the closer the match
          </strong>{" "}
          — whether you're after{" "}
          <strong className="font-[600]">Community Engagement Services</strong>,{" "}
          <strong className="font-[600]">Community Moderation Services</strong>,
          or ongoing{" "}
          <strong className="font-[600]">
            Social Media Community Management
          </strong>
          . The details you share upfront are what get you matched with the
          right person, not a generic pick from a list.
        </p>
      </div>

      {/* ── Freelancer note ── */}
      <p className="mt-5 text-[15px] leading-[1.75] text-gray-500">
        On the other side of the platform,{" "}
        <Link
          to="/remote-marketing-freelance-jobs"
          className="font-[600] underline underline-offset-[3px] transition-colors hover:opacity-80"
          style={{
            color: BLUE,
            textDecorationColor: "rgba(11,165,236,0.4)",
          }}
        >
          remote marketing freelance jobs
        </Link>{" "}
        connect marketing professionals with businesses looking for their skills.
      </p>

    </div>
  </section>
);

export default GetStarted;