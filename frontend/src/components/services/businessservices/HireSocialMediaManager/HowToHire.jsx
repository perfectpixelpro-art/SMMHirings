import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const steps = [
  {
    n: "01",
    title: "Post the Role",
    desc: "Tell us what you need: platform focus, responsibilities, expected hours, budget, and whether you want dedicated, remote, freelance, or virtual support.",
  },
  {
    n: "02",
    title: "Get Your Shortlist",
    desc: "Usually within 48 hours. Candidates are reviewed against the requirements you shared.",
  },
  {
    n: "03",
    title: "Talk to the Candidates",
    desc: "No agency layer, no relayed messages. Speak directly with the people who could actually manage your channels.",
  },
  {
    n: "04",
    title: "Hire Your Fit",
    desc: "Pick whoever makes the most sense for your business and start working together.",
  },
];

const plans = [
  { name: "Free", price: "$0", period: "", hires: "1 hire per month", highlight: false },
  { name: "Starter", price: "$20", period: "/month", hires: "3 hires per month", highlight: false },
  {
    name: "Growth",
    price: "$100",
    period: "/month",
    hires: "6 or more hires per month",
    highlight: true,
    badge: "Scales with you",
  },
];

const HowToHire = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9ff] via-white to-white py-6 sm:py-20 lg:py-10 2xl:py-10 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

      

        {/* Heading */}
        <h2 className="mt-3 max-w-4xl text-[26px] sm:text-[40px] lg:text-[52px] 2xl:text-[54px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
          How to Hire a Social Media Manager{" "}
          <span style={{ color: ACCENT }}>Through SMM Hiring</span>
        </h2>

        {/* ===== Steps ===== */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.n} className="relative">
              {/* connector segment (lg only, not on last) */}
              {i < steps.length - 1 && (
                <span className="pointer-events-none absolute left-12 right-0 top-6 hidden h-px bg-[#cfe9fb] lg:block" />
              )}

              <span
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[15px] font-[600] tabular-nums shadow-[0_8px_20px_-12px_rgba(11,165,236,0.7)] ring-1 ring-[#cfe9fb]"
                style={{ color: ACCENT }}
              >
                {step.n}
              </span>

              <h3 className="mt-5 text-[16.5px] font-[600] leading-snug text-gray-900 sm:text-[17.5px] 2xl:text-[18.5px]">
                {step.title}
              </h3>
              <p className="mt-2 text-[13.5px] font-[350] leading-[1.65] text-gray-500 sm:text-[14.5px] 2xl:text-[15px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ===== Pricing ===== */}
        <div className="mt-14 sm:mt-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-[13px]">
            Simple Monthly Plans
          </p>
          <h3 className="mt-2 text-[22px] font-[500] leading-tight tracking-[-0.5px] text-black sm:text-[30px] 2xl:text-[34px]">
            Pick a plan, hire your fit
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-3 2xl:gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={[
                  "relative flex flex-col rounded-[24px] p-6 transition-all duration-200 sm:p-8 2xl:p-9",
                  plan.highlight
                    ? "border-2 border-[#0BA5EC] bg-[#f2f9ff] shadow-[0_20px_44px_-24px_rgba(11,165,236,0.8)]"
                    : "border border-[#eef2f7] bg-white shadow-[0_8px_24px_-18px_rgba(11,165,236,0.55)] hover:-translate-y-[2px] hover:shadow-[0_16px_34px_-18px_rgba(11,165,236,0.75)]",
                ].join(" ")}
              >
                {plan.highlight && (
                  <span
                    className="absolute -top-3 left-8 rounded-full px-3 py-1 text-[11px] font-[600] uppercase tracking-[0.08em] text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {plan.badge}
                  </span>
                )}

                <p className="text-[15px] font-[600] text-gray-900 sm:text-[16px]">
                  {plan.name}
                </p>

                <div className="mt-4 flex items-end gap-1">
                  <span
                    className="text-[40px] font-[600] leading-none tracking-[-1px] sm:text-[46px] 2xl:text-[50px]"
                    style={{ color: plan.highlight ? ACCENT : "#111827" }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="mb-1 text-[14px] font-[400] text-gray-400 sm:text-[15px]">
                      {plan.period}
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-[#eef2f7] pt-6">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  <p className="text-[14px] font-[500] text-gray-700 sm:text-[15px]">
                    {plan.hires}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[13.5px] font-[350] leading-[1.7] text-gray-500 sm:text-[15px]">
            No setup fee. No long-term contract. Cancel anytime.
          </p>
        </div>

        {/* ===== Cross-sell + CTA ===== */}
        <div className="mt-12 rounded-[24px] border border-[#eef2f7] bg-white p-6 shadow-[0_8px_24px_-18px_rgba(11,165,236,0.55)] sm:mt-16 sm:rounded-[28px] sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-10 2xl:p-11">
          <p className="max-w-3xl 2xl:max-w-5xl text-[14.5px] font-[350] leading-[1.75] text-gray-600 sm:text-[16px] 2xl:text-[17px]">
            Social media isn't the only role you can hire for here. Find
            designers,{" "}
            <Link
              to="/business-services/hire-short-form-video-editor/"
              className="font-[600] underline underline-offset-2 hover:opacity-80"
              style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
            >
              short-form video editors
            </Link>
            , paid ads experts, marketing consultants, content writers, and more
            through SMM Hiring.
          </p>

          <Link
            to="/login/business"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-[600] text-white shadow-[0_14px_30px_-14px_rgba(11,165,236,0.9)] transition-all duration-200 hover:-translate-y-[1px] hover:opacity-95 lg:mt-0 2xl:text-[16px]"
            style={{ backgroundColor: ACCENT }}
          >
            Post a Role
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowToHire;