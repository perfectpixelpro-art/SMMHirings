import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import G2CM from "../../../../assets/G5SMM.png";

const ACCENT = "#0BA5EC";

const perks = [
  "A community manager matched to your needs",
  "Comments, DMs, mentions & engagement",
  "Communication aligned with your brand",
  "Flexible support as your community grows",
];

const CommunityManagerHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9ff] via-[#f7fbff] to-white pt-28 pb-14 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 2xl:pt-56 2xl:pb-28 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      {/* ambient accents */}
      <span className="pointer-events-none absolute left-1/2 -top-24 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[#cfe9fb] blur-3xl opacity-50" />
      <span className="pointer-events-none absolute -left-24 top-52 h-64 w-64 rounded-full bg-[#e0f0fc] blur-3xl opacity-50" />
      <span className="pointer-events-none absolute -right-24 top-44 h-64 w-64 rounded-full bg-[#e0f0fc] blur-3xl opacity-50" />

      <div className="relative max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        {/* 60% content / 40% image on large screens */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2.2fr] lg:gap-20 xl:gap-24 2xl:gap-16">
          {/* ============ LEFT: CONTENT (60%) ============ */}
          <div className="text-center lg:text-left">
            {/* Heading */}
            <h1 className="max-w-2xl 2xl:max-w-4xl mx-auto lg:mx-0 text-[32px] sm:text-[42px] lg:text-[48px] xl:text-[54px] 2xl:text-[62px] font-[500] leading-[1.12] tracking-[-1.5px] text-black">
              Hire a Dedicated Community Manager Who Turns Followers{" "}
              <span style={{ color: ACCENT }}>Into a Community</span>
            </h1>

            {/* Subtext */}
            <p className="mt-5 max-w-2xl mx-auto lg:mx-0 text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] sm:leading-[1.72] 2xl:text-[18px]">
              Your audience is talking. A dedicated community manager keeps
              conversations going, responds to your audience, and makes sure
              people feel heard. Get Community Management Services from an Online
              Community Manager matched to your brand, audience, platforms, and
              workload.
            </p>

            {/* CTA */}
            <div className="mt-7 flex justify-center lg:justify-start">
              <Link
                to="/login/business"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-[600] text-white shadow-[0_18px_38px_-14px_rgba(11,165,236,0.9)] transition-all duration-200 hover:-translate-y-[2px] hover:opacity-95 sm:text-[16px]"
                style={{ backgroundColor: ACCENT }}
              >
                Hire a Community Manager
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                  strokeWidth={2.5}
                />
              </Link>
            </div>

            {/* What You Get */}
            <div className="mt-8">
              <p
                className="text-center lg:text-left text-[12px] font-semibold uppercase tracking-[0.14em] sm:text-[13px]"
                style={{ color: ACCENT }}
              >
                What You Get
              </p>

              <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-left">
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    <p className="text-[14px] font-[500] leading-[1.45] text-gray-800 sm:text-[15px] 2xl:text-[16px]">
                      {perk}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ============ RIGHT: IMAGE (40%) ============ */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[380px] lg:max-w-[480px] xl:max-w-[560px]">
              <img
                src={G2CM}
                alt="Dedicated community manager engaging with an online audience"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityManagerHero;