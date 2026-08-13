import { ArrowRight, UserPlus, FileEdit, ShieldCheck, MessagesSquare, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up",
    description: "Free account. No subscription, no upfront cost.",
  },
  {
    number: "02",
    icon: FileEdit,
    title: "Build Your Profile",
    description:
      "Go in once. Every future match, whether as a freelance social media manager, digital marketing freelancer, or anything else, runs off what you put here.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Get Verified",
    description:
      "Profile and samples reviewed within 48 hours. Move forward or get feedback. No silence either way.",
  },
  {
    number: "04",
    icon: MessagesSquare,
    title: "Pass the AI Interview",
    description:
      "Short interview on skill, communication, and how you handle situations common to your specialty. Most people finish in under 15 minutes. A 90% match score gets you through.",
  },
  {
    number: "05",
    icon: Sparkles,
    title: "Get Matched",
    description:
      "Dashboard opens. Social media freelancer jobs and freelance marketing jobs in your lane start coming in with deliverables, rate, and timeline already set.",
  },
];

const HowPaymentIsReleased = () => {
  return (
    <section className="bg-white py-10 sm:py-20  lg:py-20 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
    <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
     

      {/* Heading */}
      <h3 className="mt-3 max-w-2xl text-[32px] sm:text-[44px] lg:text-[52px] font-[500] leading-[1.12] tracking-[-1.5px] text-black">
        How to Land Your{" "}
        <span className="text-sky-400">First Freelance Job</span>
      </h3>

      <p className="mt-4 max-w-xl text-[16px] sm:text-[18px] lg:text-[19px] font-[350] leading-[1.6] text-gray-400">
        Five steps, start to finish. No bidding, no cold outreach, no
        guessing what happens next.
      </p>

      {/* Steps */}
      <div className="relative mt-12 flex flex-col gap-5 sm:gap-6">
        {/* connecting line, desktop+mobile alike, positioned behind the number badges */}
        <div
          className="pointer-events-none absolute left-[27px] top-2 bottom-2 w-px bg-sky-200 sm:left-[31px]"
          aria-hidden="true"
        />

        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="group relative flex gap-5 rounded-2xl border border-sky-100 bg-[#f9fdff] p-5 transition-all duration-200 hover:border-sky-300 hover:shadow-[0_4px_24px_rgba(56,189,248,0.12)] sm:gap-6 sm:p-7"
            >
              {/* Number badge */}
              <div className="relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-sky-400 sm:h-[62px] sm:w-[62px]">
                <Icon
                  className="h-6 w-6 text-white sm:h-7 sm:w-7"
                  strokeWidth={2}
                />
                <span className="absolute -bottom-2 -right-1 rounded-full border border-sky-200 bg-white px-1.5 py-[1px] text-[10px] font-bold text-sky-500 sm:text-[11px]">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <p className="text-[17px] font-[600] leading-tight text-gray-900 sm:text-[20px] lg:text-[22px]">
                  {step.title}
                </p>
                <p className="mt-2 text-[14.5px] font-[350] leading-[1.7] text-gray-600 sm:text-[16px] lg:text-[17px]">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center sm:mt-12 sm:justify-start">
        <a
          href="#apply"
          className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(56,189,248,0.35)] transition-colors duration-200 hover:bg-sky-500 sm:text-[16px]"
        >
          Apply as a Freelancer
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </a>
      </div>

      <div className="mt-12 border-t border-gray-100 sm:mt-16" />
    </div>
    </section>
  );
};

export default HowPaymentIsReleased;