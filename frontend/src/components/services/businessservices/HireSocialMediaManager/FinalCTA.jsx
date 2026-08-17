import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const chips = ["Reviewed shortlist in 48 hours", "No long-term contract", "Hire directly, no markup"];

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-10 2xl:py-12 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0BA5EC] via-[#0a86c4] to-[#075985] px-6 py-12 text-center sm:rounded-[36px] sm:px-10 sm:py-16 lg:py-10 2xl:py-14">
          {/* ambient light accents */}
          <span className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
         

            <h2 className="mx-auto mt-4 max-w-2xl text-[27px] font-[500] leading-[1.15] tracking-[-0.5px] text-white sm:text-[40px] lg:text-[48px] 2xl:text-[52px] sm:tracking-[-1px]">
              Ready to Hire Without the Agency Markup?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] font-[350] leading-[1.7] text-white/80 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
              Post the role, meet a reviewed shortlist, and hire your social
              media manager directly.
            </p>

            {/* CTA button */}
            <div className="mt-8 flex justify-center sm:mt-10">
              <Link
                to="/login/business"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-[600] shadow-[0_20px_40px_-16px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_26px_50px_-16px_rgba(0,0,0,0.55)] 2xl:text-[16px]"
                style={{ color: "#075985" }}
              >
                Post a Role
                <ArrowRight className="h-4 w-4" style={{ color: ACCENT }} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Trust chips */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5 sm:mt-11 sm:gap-3">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[12.5px] font-[450] text-white/90 backdrop-blur-sm sm:text-[13.5px]"
                >
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;