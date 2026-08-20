import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import G1SMM from "../../../../assets/G100SMM.png";

const perks = [
  "Reviewed shortlist matched to your needs",
  "Analytics, social performance & ROI reporting",
  "Flexible hiring for projects or ongoing roles",
  "Direct contact with your dedicated analyst",
];

const HireMarketingAnalyticsExpertHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white pt-32 pb-14 sm:pt-44 2xl:pt-52 sm:pb-24 lg:pb-20 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      {/* ambient glow, same treatment used across the site's hero-style sections */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[420px] w-[620px] translate-x-1/4 rounded-full bg-sky-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 top-0 h-[300px] w-[500px] -translate-x-1/3 rounded-full bg-sky-100/50 blur-[110px]" />

      <div className="relative max-w-[1700px] 2xl:max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-20">
          {/* ============ LEFT: CONTENT ============ */}
          <div className="text-center lg:text-left">
            {/* Heading */}
            <h1 className="max-w-2xl 2xl:max-w-4xl mx-auto lg:mx-0 text-[32px] sm:text-[42px] lg:text-[48px] xl:text-[54px] 2xl:text-[62px] font-[500] leading-[1.12] tracking-[-1.5px] text-black">
              Hire a{" "}
              <span className="text-sky-400">Marketing Analytics </span> Expert for
              Your Business
            </h1>

            {/* Subtext */}
            <p className="mt-5 2xl:max-w-3xl max-w-2xl mx-auto lg:mx-0 text-[15.5px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] 2xl:text-[18px]">
              A marketing analytics and reporting freelancer turns your raw and
              scattered data into useful business insights. SMM Hiring connects
              you with a professional for your business, marketing channels,
              goals, and reporting needs.
            </p>

            {/* CTA */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                to="/login/business"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-8 py-3.5 text-[15px] font-semibold text-white transition hover:bg-sky-500 sm:text-[16px]"
              >
                Get Matched with an Analytics Expert
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
              </Link>
            </div>

            {/* What You Get — 2x2 bordered grid */}
            <div className="mt-10">
              <p className="text-center lg:text-left text-[12px] font-semibold uppercase tracking-[0.14em] text-sky-500 sm:text-[13px]">
                What You Get
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {perks.map((perk) => (
                  <div
                    key={perk}
                    className="group flex items-center gap-3 rounded-2xl border border-sky-100/70 bg-white/60 px-4 py-3 backdrop-blur-sm transition-all duration-200 hover:border-sky-200 hover:bg-white hover:shadow-[0_10px_24px_-14px_rgba(56,189,248,0.6)]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-400">
                      <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                    </span>
                    <p className="text-left text-[13.5px] font-[500] leading-[1.4] text-gray-800 sm:text-[14px] 2xl:text-[15px]">
                      {perk}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ============ RIGHT: IMAGE ============ */}
        <div className="flex justify-center lg:justify-end">
 <div className="w-full max-w-[400px] xl:max-w-[460px] 2xl:max-w-[520px] bg-[#12b3ef] p-2 rounded-[20px]">
  <img
    src={G1SMM}
    alt="Marketing analytics expert turning data into business insights"
    className="w-full h-auto object-cover rounded-[16px]"
  />
</div>
</div>
        </div>
      </div>
    </section>
  );
};

export default HireMarketingAnalyticsExpertHero;