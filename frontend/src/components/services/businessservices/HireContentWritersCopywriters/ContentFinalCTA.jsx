import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const HILITE = "#86d3f7";

const chips = ["Matched in 48 hours", "Month to month", "No agency chain"];

const ContentFinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-20 lg:py-12 2xl:py-14 px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#01245c] via-[#013186] to-[#0a86c4] p-7 sm:rounded-[36px] sm:p-12 lg:p-14 2xl:p-16">
          {/* ambient glows */}
          <span className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#0BA5EC]/40 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          {/* subtle top sheen */}
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          {/* ghost word */}
          <span className="pointer-events-none absolute right-4 top-2 select-none text-[120px] font-[700] leading-none text-white/[0.045] sm:text-[170px]">
            content
          </span>

          <div className="relative">
          
            <h2 className="mt-6 max-w-3xl text-[27px] font-[500] leading-[1.12] tracking-[-0.5px] text-white sm:text-[40px] lg:text-[46px] 2xl:text-[52px] sm:tracking-[-1.5px]">
              Hire Content Writers and Copywriters Who{" "}
              <span style={{ color: HILITE }}>Actually Move the Needle</span>
            </h2>

            <p className="mt-5 max-w-2xl text-[14.5px] font-[350] leading-[1.75] text-white/75 sm:text-[16.5px] 2xl:text-[17px]">
              Every extra day underperforming content stays live is another day
              of traffic and conversions you don't get back. Hire a content
              writer or copywriter and get content writing and copywriting built
              to rank, engage, and convert.
            </p>

            <div className="mt-8 flex flex-col gap-5 sm:mt-9 sm:flex-row sm:items-center sm:gap-6">
              <Link
                to="/login/business"
                className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-[600] shadow-[0_20px_40px_-16px_rgba(0,0,0,0.5)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_26px_50px_-16px_rgba(0,0,0,0.6)] 2xl:text-[16px]"
                style={{ color: "#013186" }}
              >
                Hire a Writer Now
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                  style={{ color: "#0BA5EC" }}
                  strokeWidth={2.5}
                />
              </Link>

              <div className="flex flex-wrap gap-2.5">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[12px] font-[450] text-white/85 backdrop-blur-sm sm:text-[13px]"
                  >
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentFinalCTA;