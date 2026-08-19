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
  { icon: Store,      num: "01", label: "Business",  desc: "What you do and who you serve" },
  { icon: LayoutGrid, num: "02", label: "Platforms", desc: "Where your community is active" },
  { icon: BarChart2,  num: "03", label: "Workload",  desc: "Type and amount of support needed" },
  { icon: Target,     num: "04", label: "Goals",     desc: "What you want your manager to achieve" },
  { icon: CreditCard, num: "05", label: "Budget",    desc: "What you're comfortable spending" },
  { icon: Calendar,   num: "06", label: "Timeline",  desc: "When you need someone to start" },
];

const GetStarted = () => (
  <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-16 2xl:py-24 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
    <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 2xl:gap-20">

        {/* ── Left: heading + callout + note ── */}
        <div className="lg:sticky lg:top-24 lg:self-start">
     
          <h2 className="mt-3 text-[26px] sm:text-[40px] lg:text-[48px] 2xl:text-[52px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
            What You'll Need to{" "}
            <span style={{ color: ACCENT }}>Get Started</span>
          </h2>

          <p className="mt-4 max-w-md text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[16.5px] sm:leading-[1.75] 2xl:text-[17px]">
            Getting started is simple. Share a few details so the right{" "}
            <span className="font-[600] text-gray-800">community manager</span>{" "}
            can be matched to your needs.
          </p>

          {/* callout */}
          <div className="mt-8 rounded-[20px] bg-[#f7fbff] p-6 sm:p-7 2xl:p-8">
            <p className="text-[14.5px] font-[350] leading-[1.75] text-gray-600 sm:text-[15.5px] 2xl:text-[16px]">
              <span className="font-[600] text-gray-900">
                The clearer your requirements, the closer the match,
              </span>{" "}
              whether you're after{" "}
              <span className="font-[600] text-gray-800">Community Engagement Services</span>,{" "}
              <span className="font-[600] text-gray-800">Community Moderation Services</span>,
              or ongoing{" "}
              <span className="font-[600] text-gray-800">Social Media Community Management</span>.
              The details you share upfront are what get you matched with the
              right person, not a generic pick from a list.
            </p>
          </div>

          {/* freelancer note */}
          <p className="mt-5 text-[13.5px] font-[350] leading-[1.7] text-gray-500 sm:text-[14.5px]">
            On the other side of the platform,{" "}
            <Link
              to="/remote-marketing-freelance-jobs"
              className="font-[600] underline underline-offset-2 hover:opacity-80"
              style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
            >
              remote marketing freelance jobs
            </Link>{" "}
            connect marketing professionals with businesses looking for their
            skills.
          </p>
        </div>

        {/* ── Right: editorial index rows ── */}
        <div>
          {requirements.map(({ icon: Icon, num, label, desc }) => (
            <div
              key={label}
              className="group relative flex items-center gap-5 border-t border-[#eef2f7] py-6 pl-5 last:border-b sm:gap-7 sm:py-7 sm:pl-7"
            >
              {/* hover accent bar */}
              <span
                className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-full transition-all duration-300 group-hover:h-[70%]"
                style={{ backgroundColor: ACCENT }}
              />

              {/* big index number */}
              <span
                className="w-14 shrink-0 text-[38px] font-[700] leading-none tracking-[-1px] tabular-nums transition-colors duration-300 sm:w-16 sm:text-[46px] 2xl:text-[50px]"
                style={{ color: "rgba(11,165,236,0.16)" }}
              >
                {num}
              </span>

              {/* label + desc */}
              <div className="flex-1 transition-transform duration-300 group-hover:translate-x-1">
                <h3 className="text-[17px] font-[600] leading-snug text-gray-900 sm:text-[19px] 2xl:text-[20px]">
                  {label}
                </h3>
                <p className="mt-1 text-[13.5px] font-[350] leading-[1.65] text-gray-500 sm:text-[14.5px] 2xl:text-[15.5px]">
                  {desc}
                </p>
              </div>

              {/* icon */}
              <span
                className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-[#e3eef7] transition-all duration-300 group-hover:ring-[#8ed3f6] group-hover:shadow-[0_0_0_5px_rgba(11,165,236,0.12)] sm:h-12 sm:w-12"
              >
                <Icon
                  className="h-[20px] w-[20px] transition-transform duration-300 group-hover:scale-110"
                  style={{ color: ACCENT }}
                  strokeWidth={2}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default GetStarted;