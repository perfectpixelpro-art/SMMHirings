import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const perks = [
  "A reviewed shortlist matched to your requirements",
  "Dedicated, freelance, remote, or virtual hiring options",
  "Direct contact with the person doing the work",
];

const HireSocialMediaManagerHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white pt-28 pb-10 sm:pt-50 2xl:pt-70 sm:pb-20 sm:px-0 lg:pb-10 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      {/* ambient glow, same treatment used across the site's hero-style sections */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-sky-200/30 blur-[110px]" />

      <div className="relative max-w-[1700px] 2xl:max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        {/* Heading */}
        <h1 className="mx-auto max-w-4xl  text-center text-[30px] sm:text-[42px] lg:text-[52px] 2xl:text-[62px] font-[500] leading-[1.14] tracking-[-1.5px] text-black">
          Hire a Freelance{" "}
          <span className="text-sky-400">Social Media Manager</span> for
          Your Business
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-4 max-w-2xl text-center text-[15.5px] font-[350] leading-[1.75] text-gray-500 sm:text-[17px] 2xl:text-[18px]">
          Find a professional social media manager through SMM Hiring who
          fits your business, understands your goals, and can take
          ownership of your day-to-day social. Choose from dedicated,
          freelance, remote, or virtual support based on how your business
          works.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/login/business"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-8 py-3.5 text-[15px] font-semibold text-white transition hover:bg-sky-500 sm:text-[16px]"
          >
            Post a Role
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2.5}
            />
          </Link>
        </div>

        {/* What You Get */}
        <div className="mt-12 sm:mt-16">
          <p className="text-center text-[12.5px] font-semibold uppercase tracking-[0.14em] text-sky-500 sm:text-[13px] 2xl:text-[14px]">
            What You Get
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-7 sm:grid-cols-3 sm:gap-5">
            {perks.map((perk) => (
              <div
                key={perk}
                className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-5 sm:px-6"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400">
                  <Check className="h-4 w-4 text-white" strokeWidth={2.5} />
                </span>
                <p className="text-[14.5px] font-[500] leading-[1.6] text-gray-900 sm:text-[15px] 2xl:text-[17px]">
                  {perk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireSocialMediaManagerHero;