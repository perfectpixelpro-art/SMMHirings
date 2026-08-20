import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import G1SMM from "../../../../assets/G8SMM.png";

const perks = [
  "A reviewed shortlist matched to your requirements",
  "Dedicated, freelance, remote, or virtual hiring options",
  "Direct contact with the person doing the work",
];

const HireSocialMediaManagerHero = () => {
  return (
    <section className="relative  overflow-hidden bg-gradient-to-b from-sky-50 to-white pt-28 pb-14 sm:pt-40 2xl:pt-52 sm:pb-24 lg:pb-20 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      {/* ambient glow, same treatment used across the site's hero-style sections */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[420px] w-[620px] translate-x-1/4 rounded-full bg-sky-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 top-0 h-[300px] w-[500px] -translate-x-1/3 rounded-full bg-sky-100/50 blur-[110px]" />

      <div className="relative max-w-[1700px] 2xl:max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        {/* 50% content / 50% image on large screens */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* ============ LEFT: CONTENT (50%) ============ */}
          <div className="text-center lg:text-left lg:-mt-16 xl:-mt-27 2xl:-mt-50">
            {/* Heading */}
            <h1 className="max-w-2xl 2xl:max-w-4xl mx-auto lg:mx-0 text-[32px] sm:text-[42px] lg:text-[48px] xl:text-[54px] 2xl:text-[62px] font-[500] leading-[1.12] tracking-[-1.5px] text-black">
              Hire a Freelance{" "}
              <span className="text-sky-400">Social Media Manager</span> for
              Your Business
            </h1>

            {/* Subtext */}
            <p className="mt-5 2xl:max-w-3xl max-w-2xl mx-auto lg:mx-0 text-[15.5px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] 2xl:text-[18px]">
              Find a professional social media manager through SMM Hiring who
              fits your business, understands your goals, and can take
              ownership of your day-to-day social. Choose from dedicated,
              freelance, remote, or virtual support based on how your business
              works.
            </p>

            {/* CTA */}
            <div className="mt-7 flex justify-center lg:justify-start">
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
          </div>

          {/* ============ RIGHT: IMAGE (50%) ============ */}
          <div className="flex justify-center lg:justify-end lg:mt-16 xl:mt-20">
            <div className="w-full max-w-[560px] xl:max-w-[680px] 2xl:max-w-[760px]">
              <img
                src={G1SMM}
                alt="Freelance social media manager working with a business"
                className="w-full h-auto object-contain "
              />
            </div>
          </div>
        </div>

        {/* ============ WHAT YOU GET (full width, below grid) ============ */}
        <div className="mt-12 sm:mt-14 lg:-mt-20 xl:-mt-24 2xl:xl:-mt-37">
          <p className="text-center lg:text-left text-[12px] font-semibold uppercase tracking-[0.14em] text-sky-500 sm:text-[13px]">
            What You Get
          </p>

          <ul className="mt-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start sm:gap-x-10 sm:gap-y-4 2xl:gap-x-32">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-left">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-400">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <p className="text-[14px] font-[500] leading-[1.4] text-gray-800 sm:text-[15px] 2xl:text-[16px] whitespace-nowrap">
                  {perk}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HireSocialMediaManagerHero;