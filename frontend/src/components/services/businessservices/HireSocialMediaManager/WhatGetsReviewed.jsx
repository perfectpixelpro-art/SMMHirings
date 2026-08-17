import { Briefcase, Share2, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const criteria = [
  {
    icon: Briefcase,
    label: "Previous work",
    description: "The accounts, content, and campaigns they've actually worked on.",
  },
  {
    icon: Share2,
    label: "Platform experience",
    description: "The channels they know and what kind of work they've handled there.",
  },
  {
    icon: Sparkles,
    label: "Relevant skills",
    description: "Content, community management, strategy, reporting, whatever your role calls for.",
  },
  {
    icon: TrendingUp,
    label: "Past results",
    description: "The outcomes they can point to from previous work.",
  },
];

const WhatGetsReviewed = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

        

        {/* Heading */}
        <h2 className="mt-3 max-w-4xl text-[26px] sm:text-[40px] lg:text-[52px] 2xl:text-[54px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
          A Good Resume Doesn't{" "}
          <span style={{ color: ACCENT }}>Tell You Everything</span>
        </h2>

        {/* Intro */}
        <div className="mt-5 max-w-7xl space-y-4">
          <p className="text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
            Anyone can say they know social media. What matters is whether they
            can actually do the work your business needs.
          </p>
          <p className="text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
            Before a candidate reaches your shortlist, their experience gets
            checked against the requirements of the role you posted.
          </p>
        </div>

        {/* Spotlight panel: What Gets Reviewed */}
        <div className="relative mt-10 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0BA5EC] via-[#0a97d8] to-[#0b6fa6] p-6 sm:mt-14 sm:rounded-[32px] sm:p-9 lg:p-12 2xl:p-14">
          {/* ambient light accents */}
          <span className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-[12px]">
              The Check
            </p>
            <h3 className="mt-2 text-[22px] font-[600] leading-[1.2] text-white sm:text-[28px] 2xl:text-[32px]">
              What Gets Reviewed?
            </h3>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-9 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
              {criteria.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group rounded-[18px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-[3px] hover:bg-white/15 2xl:p-6"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 2xl:h-12 2xl:w-12">
                      <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                    </span>
                    <p className="mt-4 text-[15px] font-[600] leading-snug text-white sm:text-[16px] 2xl:text-[17px]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-[13px] font-[350] leading-[1.6] text-white/75 sm:text-[13.5px] 2xl:text-[14.5px]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Lead-out */}
        <p className="mt-8 max-w-7xl text-[14px] font-[350] leading-[1.7] text-gray-500 sm:mt-10 sm:text-[16px] sm:leading-[1.75] 2xl:text-[17px]">
          So instead of digging through a stack of resumes yourself, you're
          starting with people who've already cleared that bar.
        </p>

        {/* Closing line */}
        <p className="mt-5 max-w-3xl text-[15px] font-[400] leading-[1.7] text-gray-700 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
          The final call is still yours.{" "}
        
          <Link
                    to="/"
                    className="font-[600] underline underline-offset-2 hover:opacity-80"
                    style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
                  >
                    SMM Hiring
                  </Link>{" "}

          just takes the first round of guesswork off your plate.
        </p>
      </div>
    </section>
  );
};

export default WhatGetsReviewed;