import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const perks = [
  "A community manager matched to your needs",
  "Comments, DMs, mentions & engagement",
  "Communication aligned with your brand",
  "Flexible support as your community grows",
];

const CommunityManagerHero = () => {
  return (
     <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9ff] via-[#f7fbff] to-white pt-16 pb-14 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 2xl:pt-32 2xl:pb-28 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      {/* ambient accents */}
      <span className="pointer-events-none absolute left-1/2 -top-24 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[#cfe9fb] blur-3xl opacity-50" />
      <span className="pointer-events-none absolute -left-24 top-52 h-64 w-64 rounded-full bg-[#e0f0fc] blur-3xl opacity-50" />
      <span className="pointer-events-none absolute -right-24 top-44 h-64 w-64 rounded-full bg-[#e0f0fc] blur-3xl opacity-50" />

      <div className="relative max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        {/* ===== Centered copy ===== */}
        <div className="mx-auto max-w-4xl text-center pt-20">
          <h1 className="text-[32px] font-[500] leading-[1.1] tracking-[-1px] text-black sm:text-[46px] lg:text-[56px] 2xl:text-[62px] sm:leading-[1.06] sm:tracking-[-2px]">
            Hire a Dedicated Community Manager Who Turns Followers{" "}
            <span style={{ color: ACCENT }}>Into a Community</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[18px] sm:leading-[1.75] 2xl:text-[19px]">
            Your audience is talking. A dedicated community manager keeps
            conversations going, responds to your audience, and makes sure people
            feel heard. Get Community Management Services from an Online Community
            Manager matched to your brand, audience, platforms, and workload.
          </p>

          <div className="mt-9 flex justify-center sm:mt-8">
            <Link
              to="/login/business"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-[15px] font-[600] text-white shadow-[0_18px_38px_-14px_rgba(11,165,236,0.9)] transition-all duration-200 hover:-translate-y-[2px] hover:opacity-95 2xl:text-[16px]"
              style={{ backgroundColor: ACCENT }}
            >
              Hire a Community Manager
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                strokeWidth={2.5}
              />
            </Link>
          </div>
        </div>

        {/* ===== What You Get ===== */}
        <div className="mx-auto mt-14 max-w-6xl sm:mt-14">
          <p
            className="text-center text-[12px] font-semibold uppercase tracking-[0.16em] sm:text-[13px]"
            style={{ color: ACCENT }}
          >
            What You Get
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {perks.map((perk) => (
              <div
                key={perk}
                className="group flex items-center gap-3.5 rounded-[18px] border border-[#eaf3fb] bg-white/80 px-5 py-5 shadow-[0_10px_30px_-24px_rgba(11,165,236,0.7)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-[2px] hover:border-[#cfe9fb] hover:shadow-[0_18px_36px_-22px_rgba(11,165,236,0.8)]"
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Check className="h-4 w-4 text-white" strokeWidth={3} />
                </span>
                <p className="text-[13.5px] font-[500] leading-[1.45] text-gray-700 sm:text-[14px] 2xl:text-[14.5px]">
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

export default CommunityManagerHero;