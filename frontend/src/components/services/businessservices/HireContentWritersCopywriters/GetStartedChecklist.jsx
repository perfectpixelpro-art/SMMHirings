    import {
  Building2,
  Users,
  Layers,
  Wallet,
  Clock,
  ClipboardList,
  ListChecks,
  MessageCircle,
  Check,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const items = [
  { icon: Building2, label: "Company", desc: "Industry, size, and how to reach you." },
  { icon: Users, label: "Role", desc: "What you're hiring for, and whether it's a content writer, copywriter, or both." },
  { icon: Layers, label: "Workload", desc: "How many hires, and roughly how much work." },
  { icon: Wallet, label: "Budget", desc: "What you're expecting to pay." },
  { icon: Clock, label: "Timeline", desc: "When you actually need this person starting." },
  { icon: ClipboardList, label: "Plan", desc: "Which hiring plan fits what you're doing." },
];

const GetStartedChecklist = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9ff] via-white to-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 2xl:gap-20">

          {/* ===== Left: heading + contact ===== */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            

            <h2 className="mt-3 text-[26px] sm:text-[40px] lg:text-[46px] 2xl:text-[52px] font-[500] leading-[1.15] tracking-[-1px] text-black sm:leading-[1.12] sm:tracking-[-1.5px]">
              What You'll Need to{" "}
              <span style={{ color: ACCENT }}>Get Started</span>
            </h2>

            <p className="mt-5 max-w-md text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[16.5px] sm:leading-[1.75] 2xl:text-[18px]">
              Before you post a role, it helps to have a few things sorted. The
              more specific you are here, the closer the match tends to be,
              whether this is your first content hire or you're bringing someone
              onto a campaign that's already running.
            </p>

            {/* contact callout */}
            <div className="mt-8 rounded-[20px] border border-[#cfe9fb] bg-[#f2f9ff] p-5 sm:p-6">
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <MessageCircle className="h-5 w-5" style={{ color: ACCENT }} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[14px] font-[600] leading-snug text-gray-900 sm:text-[15px]">
                    Not sure what kind of writer or copywriter you need?
                  </p>
                  <p className="mt-1.5 text-[13.5px] font-[350] leading-[1.65] text-gray-600 sm:text-[14.5px]">
                    <Link
                      to="/contact"
                      className="font-[600] underline underline-offset-2 hover:opacity-80"
                      style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
                    >
                      Contact us
                    </Link>{" "}
                    and share what you're looking for, and the team can help you
                    figure out the right fit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Right: checklist card ===== */}
          <div className="relative">
            <span className="pointer-events-none absolute inset-0 -z-10 translate-y-6 rounded-[32px] bg-[#cfe9fb] blur-2xl opacity-40" />

            <div className="rounded-[24px] border border-[#eaf3fb] bg-white p-6 shadow-[0_30px_60px_-34px_rgba(11,165,236,0.55)] sm:rounded-[28px] sm:p-8 2xl:p-9">
              {/* card header */}
              <div className="flex items-center justify-between gap-3 border-b border-[#eef2f7] pb-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9f4fd]">
                    <ListChecks className="h-5 w-5" style={{ color: ACCENT }} strokeWidth={2} />
                  </span>
                  <p className="text-[15px] font-[600] text-gray-900 sm:text-[16.5px]">
                    Your quick checklist
                  </p>
                </div>
                <span
                  className="rounded-full bg-[#e9f4fd] px-3 py-1 text-[11px] font-[600] uppercase tracking-[0.06em]"
                  style={{ color: ACCENT }}
                >
                  6 things
                </span>
              </div>

              {/* rows */}
              <div className="mt-2 flex flex-col">
                {items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="group flex items-center gap-4 rounded-2xl border-b border-[#f1f5f9] px-2 py-4 transition-colors duration-200 last:border-b-0 hover:bg-[#f7fbff] sm:px-3"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e9f4fd] transition-colors duration-200 group-hover:bg-[#dceffc]">
                        <Icon className="h-[20px] w-[20px]" style={{ color: ACCENT }} strokeWidth={2} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[15px] font-[600] leading-snug text-gray-900 sm:text-[16px]">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-[13px] font-[350] leading-[1.55] text-gray-500 sm:text-[13.5px]">
                          {item.desc}
                        </p>
                      </div>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-[#cfe9fb] transition-all duration-200 group-hover:bg-[#0BA5EC] group-hover:ring-[#0BA5EC]">
                        <Check
                          className="h-3.5 w-3.5 transition-colors duration-200 group-hover:text-white"
                          style={{ color: ACCENT }}
                          strokeWidth={3}
                        />
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* footer CTA */}
              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-[14px] font-[600] hover:opacity-80 sm:text-[15px]"
                style={{ color: ACCENT }}
              >
                Got these ready? Talk to the team
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                  strokeWidth={2.5}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedChecklist;