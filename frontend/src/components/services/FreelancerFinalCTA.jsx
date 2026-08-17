import { ArrowRight, Sparkles, Zap } from "lucide-react";

const FreelancerFinalCTA = () => {
  return (
    <section className="bg-white py-8 sm:py-14 lg:py-12 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          {/* decorative glows */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-sky-300/30 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,_white_1px,_transparent_1px)] [background-size:22px_22px]" />

          {/* floating glass stat badge */}
          <div className="pointer-events-none absolute right-6 top-6 hidden -rotate-3 items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-4 py-2.5 backdrop-blur-md sm:flex lg:right-10 lg:top-10">
            <Zap className="h-4 w-4 text-white" strokeWidth={2} fill="currentColor" />
            <span className="text-[12.5px] font-semibold text-white">
              First match in 48 hrs
            </span>
          </div>

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            {/* Left: copy */}
            <div className="max-w-xl">
            

              <h3 className="mt-4 text-[26px] font-[500] leading-[1.4] tracking-[-1px] text-white sm:text-[34px] lg:text-[38px]">
                Your Next Client Might Already <br/> Be Waiting.
              </h3>

              <p className="mt-3 text-[14.5px] font-[350] leading-[1.7] text-sky-50 sm:text-[16px]">
                Apply once. After that, marketing freelance opportunities
                come to you already scoped, with the rate and timeline
                included. You are deciding whether it fits, not negotiating
                blind.
              </p>
            </div>

            {/* Right: CTA */}
            <div className="flex w-full flex-col items-start gap-3 lg:w-auto lg:shrink-0 lg:items-end">
              <a
                href="/login/freelancer/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14.5px] font-semibold text-sky-600 shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:scale-[1.03] hover:bg-sky-50 sm:w-auto sm:px-8 sm:py-4 sm:text-[16px]"
              >
                Apply as a Freelancer
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <p className="text-[12.5px] font-[350] tracking-wide text-sky-100 sm:text-[13px]">
                smmhiring.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerFinalCTA;