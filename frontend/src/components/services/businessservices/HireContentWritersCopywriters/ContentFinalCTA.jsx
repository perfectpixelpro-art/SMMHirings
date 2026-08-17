import { ArrowRight, Check, Search, MessageSquare, MousePointerClick } from "lucide-react";
import { Link } from "react-router-dom";

const HILITE = "#86d3f7";

const chips = ["Matched in 48 hours", "Month to month", "No agency chain"];

const outcomes = [
  { icon: Search, title: "Rank", sub: "Found on the searches that matter" },
  { icon: MessageSquare, title: "Engage", sub: "Content people actually read" },
  { icon: MousePointerClick, title: "Convert", sub: "Copy that drives the action" },
];

const ContentFinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#01245c] via-[#013186] to-[#0a86c4] p-7 sm:rounded-[36px] sm:p-12 lg:p-14 2xl:p-16">
          {/* decorative */}
          <span className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#0BA5EC]/40 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <span className="pointer-events-none absolute right-6 top-4 select-none text-[110px] font-[700] leading-none text-white/[0.04] sm:text-[150px]">
            content
          </span>

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 2xl:gap-20">

            {/* ===== Left ===== */}
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/60 sm:text-[13px]">
                Let's Get You Matched
              </p>

              <h2 className="mt-4 max-w-2xl text-[26px] font-[500] leading-[1.14] tracking-[-0.5px] text-white sm:text-[40px] lg:text-[46px] 2xl:text-[52px] sm:tracking-[-1.5px]">
                Hire Content Writers and Copywriters Who{" "}
                <span style={{ color: HILITE }}>Actually Move the Needle</span>
              </h2>

              <p className="mt-5 max-w-xl text-[14.5px] font-[350] leading-[1.75] text-white/75 sm:text-[16.5px] 2xl:text-[17px]">
                Every extra day underperforming content stays live is another day
                of traffic and conversions you don't get back. Hire a content
                writer or copywriter and get content writing services and
                copywriting services built to rank, engage, and convert.
              </p>

              <div className="mt-8 flex flex-col gap-5 sm:mt-9">
                <div>
                  <Link
                    to="/login/business"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-[600] shadow-[0_20px_40px_-16px_rgba(0,0,0,0.5)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_26px_50px_-16px_rgba(0,0,0,0.6)] 2xl:text-[16px]"
                    style={{ color: "#013186" }}
                  >
                    Hire a Writer Now
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                      style={{ color: "#0BA5EC" }}
                      strokeWidth={2.5}
                    />
                  </Link>
                </div>

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

            {/* ===== Right: outcomes glass card ===== */}
            <div className="relative">
              <span className="pointer-events-none absolute inset-0 -z-10 translate-y-4 rounded-[28px] bg-black/20 blur-2xl" />

              <div className="rounded-[24px] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:rounded-[28px] sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60 sm:text-[12px]">
                  Content built to
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:mt-5">
                  {outcomes.map((o) => {
                    const Icon = o.icon;
                    return (
                      <div
                        key={o.title}
                        className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 transition-colors duration-200 hover:bg-white/15 sm:px-5"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                          <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[15px] font-[600] leading-snug text-white sm:text-[16px]">
                            {o.title}
                          </p>
                          <p className="mt-0.5 text-[12px] font-[350] leading-snug text-white/60 sm:text-[13px]">
                            {o.sub}
                          </p>
                        </div>
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: HILITE }}
                        >
                          <Check className="h-3.5 w-3.5" style={{ color: "#013186" }} strokeWidth={3} />
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentFinalCTA;