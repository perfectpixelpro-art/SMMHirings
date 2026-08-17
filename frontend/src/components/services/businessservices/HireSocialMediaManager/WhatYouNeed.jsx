import {
  Building2,
  Users,
  Layers,
  Wallet,
  Clock,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const requirements = [
  {
    icon: Building2,
    label: "Company",
    description: "Industry, size, and contact details.",
  },
  {
    icon: Users,
    label: "Role",
    description: "Position, skills, and experience needed.",
  },
  {
    icon: Layers,
    label: "Workload",
    description: "Number of hires and scope of work.",
  },
  {
    icon: Wallet,
    label: "Budget",
    description: "Your expected range.",
  },
  {
    icon: Clock,
    label: "Timeline",
    description: "When you need to get started.",
  },
  {
    icon: ClipboardList,
    label: "Plan",
    description: "Choose the hiring plan that fits your needs.",
  },
];

const WhatYouNeed = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

      

        {/* Heading */}
        <h2 className="mt-3 max-w-4xl text-[26px] sm:text-[40px] lg:text-[52px] 2xl:text-[54px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
          What You'll Need to{" "}
          <span style={{ color: ACCENT }}>Get Started</span>
        </h2>

        <p className="mt-4 max-w-2xl text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
          Have these ready and your role goes live in minutes.
        </p>

        {/* Requirement tiles */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {requirements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-[18px] border border-[#eef2f7] bg-[#f7fbff] p-5 transition-all duration-200 hover:-translate-y-[2px] hover:border-[#cfe9fb] hover:bg-white hover:shadow-[0_16px_34px_-20px_rgba(11,165,236,0.7)] sm:p-6 2xl:p-7"
              >
                {/* ghost index */}
                <span className="pointer-events-none absolute right-4 top-3 text-[34px] font-[700] leading-none text-[#0BA5EC]/[0.06] sm:text-[40px]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e9f4fd] transition-colors duration-200 group-hover:bg-[#dceffc] 2xl:h-[52px] 2xl:w-[52px]">
                    <Icon
                      className="h-[22px] w-[22px]"
                      style={{ color: ACCENT }}
                      strokeWidth={2}
                    />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-[16px] font-[600] leading-snug text-gray-900 sm:text-[17px] 2xl:text-[18px]">
                      {item.label}
                    </p>
                    <p className="mt-1.5 text-[13.5px] font-[350] leading-[1.6] text-gray-500 sm:text-[14.5px] 2xl:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emphasised takeaway */}
        <div
          className="mt-10 max-w-3xl border-l-2 pl-5 sm:mt-14 sm:pl-6"
          style={{ borderColor: ACCENT }}
        >
          <p className="text-[16px] font-[400] leading-[1.65] text-gray-800 sm:text-[19px] sm:leading-[1.6] 2xl:text-[20px]">
            <span className="font-[600] text-gray-900">
              The clearer your requirements, the closer the match
            </span>
            , whether you're hiring your first social media manager for business
            or bringing on someone to run an existing strategy.
          </p>
        </div>

        {/* Closing line with interlink */}
        <p className="mt-6 max-w-3xl text-[14px] font-[350] leading-[1.7] text-gray-500 sm:text-[16px] sm:leading-[1.75] 2xl:text-[17px]">
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
    </section>
  );
};

export default WhatYouNeed;