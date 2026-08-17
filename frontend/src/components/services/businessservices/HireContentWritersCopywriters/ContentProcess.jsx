import { Zap, Check } from "lucide-react";

const ACCENT = "#0BA5EC";

const steps = [
  {
    title: "Share your requirements",
    desc: "Blog, website copy, landing page, ongoing support, whatever it is, tell us.",
  },
  {
    title: "Get matched with a writer",
    desc: "Someone with real experience in your niche already, not a generalist figuring out your industry on your dime.",
  },
  {
    title: "Review the draft",
    desc: "Once you approve the match, you'll go through the draft and ask for changes. A revision round's already built in, so the first version isn't automatically the final one.",
  },
  {
    title: "Get content ready to use",
    desc: "Content lands ready to use, on your timeline. One-off project, you're done. Need more later, the same writer stays on your account instead of starting over from zero.",
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
  },
];

const ContentProcess = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9ff] via-white to-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

        {/* Heading */}
        <h2 className="mt-3 max-w-4xl text-[26px] sm:text-[40px] lg:text-[52px] 2xl:text-[54px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
          How the Process Works to Hire a{" "}
          <span style={{ color: ACCENT }}>Content Writer or Copywriter</span>
        </h2>

        {/* Step nodes */}
        <div className="relative mt-12 sm:mt-16">
          {/* connecting track (desktop) */}
          <span className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-[2px] bg-gradient-to-r from-[#cfe9fb] via-[#cfe9fb] to-[#cfe9fb] lg:block 2xl:top-8" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <span
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-[17px] font-[600] text-white shadow-[0_12px_28px_-12px_rgba(11,165,236,0.9)] 2xl:h-16 2xl:w-16 2xl:text-[19px]"
                  style={{ backgroundColor: ACCENT }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[16.5px] font-[600] leading-snug text-gray-900 sm:text-[17.5px] 2xl:text-[18.5px]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-[13.5px] font-[350] leading-[1.65] text-gray-500 sm:text-[14px] 2xl:text-[14.5px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Summary bar */}
        <div className="relative mt-12 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0BA5EC] via-[#0a86c4] to-[#075985] p-6 sm:mt-16 sm:rounded-[28px] sm:p-9 2xl:p-10">
          <span className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 sm:h-14 sm:w-14">
              <Zap className="h-6 w-6 text-white" strokeWidth={2} />
            </span>
            <div>
              <h3 className="text-[18px] font-[600] leading-snug text-white sm:text-[22px] 2xl:text-[24px]">
                A shorter path from hire to finished work
              </h3>
              <p className="mt-2 max-w-3xl text-[13.5px] font-[350] leading-[1.7] text-white/80 sm:text-[15px] 2xl:text-[16px]">
                No drawn-out onboarding, and no back-and-forth just to have
                back-and-forth. It's a shorter path than most businesses expect
                when they set out to hire content writers and copywriters on their
                own.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-14 sm:mt-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-[13px]">
            Simple Monthly Plans
          </p>
          <h3 className="mt-2 text-[22px] font-[500] leading-tight tracking-[-0.5px] text-black sm:text-[30px] 2xl:text-[34px]">
            One plan, however much you hire
          </h3>

          <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-[28px] border border-[#e3eef7] bg-white shadow-[0_20px_50px_-30px_rgba(11,165,236,0.5)] sm:mt-10 sm:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={[
                  "relative p-7 sm:p-8 2xl:p-9",
                  i > 0 ? "border-t border-[#eef2f7] sm:border-l sm:border-t-0" : "",
                  plan.highlight
                    ? "bg-gradient-to-br from-[#0BA5EC] to-[#0b6fa6] text-white"
                    : "bg-white",
                ].join(" ")}
              >
                {plan.highlight && (
                  <span className="absolute right-6 top-7 rounded-full bg-white/20 px-3 py-1 text-[10.5px] font-[600] uppercase tracking-[0.08em] text-white">
                    Most flexible
                  </span>
                )}

                <p
                  className={`text-[15px] font-[600] sm:text-[16px] ${
                    plan.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </p>

                <div className="mt-4 flex items-end gap-1">
                  <span
                    className={`text-[38px] font-[600] leading-none tracking-[-1px] sm:text-[44px] 2xl:text-[48px] ${
                      plan.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`mb-1 text-[14px] font-[400] ${
                        plan.highlight ? "text-white/80" : "text-gray-400"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                <div
                  className={`mt-6 flex items-center gap-3 border-t pt-6 ${
                    plan.highlight ? "border-white/25" : "border-[#eef2f7]"
                  }`}
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: plan.highlight ? "rgba(255,255,255,0.25)" : ACCENT }}
                  >
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  <p
                    className={`text-[14px] font-[500] sm:text-[15px] ${
                      plan.highlight ? "text-white" : "text-gray-700"
                    }`}
                  >
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
      </div>
    </section>
  );
};

export default ContentProcess;