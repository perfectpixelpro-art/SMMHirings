import {
  Target,
  Timer,
  SlidersHorizontal,
  TrendingUp,
  Compass,
} from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const benefits = [
  {
    icon: Target,
    tag: "Matched to the exact work",
    title: "Hire for the Actual Work",
    body: "SEO blogs pull different muscles than website copy. Landing pages are different again from product descriptions or sales copy. Tell us which one you actually need, whether that's SEO content writing, website copywriting services, or landing page copywriting, and the match reflects that instead of handing you someone who's fine across the board and exceptional at none of it.",
  },
  {
    icon: Timer,
    tag: "Less screening, faster start",
    title: "Spend Less Time Screening",
    body: "Less time gets spent opening applications that were never going to work out, and more talking to people who already fit the brief. A writer with real experience in your space skips most of the learning curve too, getting straight to writing something your customers respond to instead of spending the first month figuring out who those customers even are.",
  },
  {
    icon: SlidersHorizontal,
    tag: "Support on your terms",
    title: "Choose the Support You Need",
    body: "Pick the level of support you actually need. A single project, ongoing production, or someone who becomes close to part of your team, different scopes, same process, and no account manager relaying messages in between. Just you and the writer.",
  },
  {
    icon: TrendingUp,
    tag: "Built around your goal",
    title: "Hire for What You're Chasing",
    body: "Whatever you're chasing, search traffic, sharper messaging, more leads, better conversion numbers, it decides whether the right call is to hire a content writer, hire a copywriter, or bring on both.",
  },
];

const WhyHireThrough = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">


        {/* Heading */}
        <h2 className="mt-3 max-w-4xl text-[26px] sm:text-[40px] lg:text-[52px] 2xl:text-[54px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
          Why Hire Through <span style={{ color: ACCENT }}>SMM Hiring</span>?
        </h2>

        {/* Zigzag benefits */}
        <div className="mt-12 flex flex-col gap-10 sm:mt-16 sm:gap-14 2xl:gap-16">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            const even = i % 2 === 0;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={benefit.title}
                className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-14 2xl:gap-20"
              >
                {/* text */}
                <div className={even ? "lg:order-2" : "lg:order-1"}>
                  <p
                    className="text-[12px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: ACCENT }}
                  >
                    Reason {num}
                  </p>
                  <h3 className="mt-2 text-[21px] font-[500] leading-tight tracking-[-0.5px] text-gray-900 sm:text-[27px] 2xl:text-[30px]">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-[14px] font-[350] leading-[1.75] text-gray-500 sm:text-[16px] 2xl:text-[16.5px]">
                    {benefit.body}
                  </p>
                </div>

                {/* visual */}
                <div className={even ? "lg:order-1" : "lg:order-2"}>
                  <div className="group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-[24px] border border-[#e3f0fb] bg-gradient-to-br from-[#eaf5fe] to-[#f7fbff] p-6 sm:min-h-[240px] sm:rounded-[28px] sm:p-8 2xl:min-h-[260px]">
                    {/* ambient */}
                    <span className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-[#d6edfc] blur-3xl opacity-70" />
                    <span className="pointer-events-none absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-[#e3f0fc] blur-3xl opacity-60" />

                    {/* top row: icon + tag */}
                    <div className="relative flex items-center justify-between gap-3">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_14px_30px_-14px_rgba(11,165,236,0.75)] transition-transform duration-200 group-hover:-translate-y-[3px] sm:h-16 sm:w-16">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: ACCENT }} strokeWidth={2} />
                      </span>
                      <span
                        className="rounded-full bg-white px-4 py-1.5 text-[12px] font-[600] shadow-sm sm:text-[13.5px]"
                        style={{ color: ACCENT }}
                      >
                        {benefit.tag}
                      </span>
                    </div>

                    {/* big number */}
                    <div className="relative mt-8 flex items-end justify-between">
                      <span
                        className="select-none text-[76px] font-[700] leading-[0.8] tracking-[-3px] sm:text-[100px] 2xl:text-[112px]"
                        style={{ color: "rgba(11,165,236,0.16)" }}
                      >
                        {num}
                      </span>
                      <span
                        className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em]"
                        style={{ color: "rgba(11,165,236,0.55)" }}
                      >
                        SMM Hiring
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing note with interlink */}
        <div className="mt-12 flex items-start gap-4 rounded-[18px] border border-[#eef2f7] bg-white p-5 shadow-[0_8px_24px_-18px_rgba(11,165,236,0.55)] sm:mt-16 sm:items-center sm:p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e9f4fd]">
            <Compass className="h-[20px] w-[20px]" style={{ color: ACCENT }} strokeWidth={2} />
          </span>
          <p className="text-[14px] font-[350] leading-[1.7] text-gray-600 sm:text-[15.5px] 2xl:text-[16px]">
            For writers and other marketing professionals exploring their next
            opportunity,{" "}
            <Link
              to="/remote-marketing-freelance-jobs"
              className="font-[600] underline underline-offset-2 hover:opacity-80"
              style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
            >
              remote marketing freelance jobs
            </Link>{" "}
            offer a way to find relevant work without relying on traditional job
            applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyHireThrough;