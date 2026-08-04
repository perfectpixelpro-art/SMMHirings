import { useState, useEffect, useRef } from "react";
import {
  Search,
  PenSquare,
  CalendarDays,
  MessageCircle,
  BarChart3,
  ChevronLeft,
  ChevronRight,  
} from "lucide-react";

const ICONS = [Search, PenSquare, CalendarDays, MessageCircle, BarChart3];
const FEATURES = ["Dedicated workflow", "Expert managed", "Transparent delivery"];

export default function HowItWorksSection({ title, steps }) {
  
   const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

    useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      if (window.innerWidth < 1024) return;
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      const newActive = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      setActive(newActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  if (!steps?.length) return null;
  

  const ActiveIcon = ICONS[active % ICONS.length];
  const prev = () => setActive(active === 0 ? steps.length - 1 : active - 1);
  const next = () => setActive(active === steps.length - 1 ? 0 : active + 1);





  

  return (
    <>
      {/* ── DESKTOP — scroll driven ── */}
      <div
        ref={sectionRef}
        className="relative hidden lg:block"
        style={{ height: `${steps.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-[#FCFDFE] flex flex-col">

          {/* Background blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#1DBAF8]/10 blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-sky-100 blur-[180px]" />
          </div>

          <div className="relative flex flex-col h-full mx-auto w-full max-w-7xl px-6">

            {/* Header — compact */}
            <div className="text-center pt-10 pb-6 flex-shrink-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1DBAF8]/20 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1DBAF8]">
                <span className="w-2 h-2 rounded-full bg-[#1DBAF8]" />
                Process
              </span>
              <h2 className="mt-4 text-[38px] lg:text-[52px] leading-[1.08] tracking-[-0.04em] font-[500] text-[#111]">
                {title}
              </h2>
              <p className="mt-2 text-[16px] leading-7 text-[#667085]">
                Every project follows one structured workflow designed to deliver consistent results.
              </p>
            </div>

            {/* Timeline — compact */}
            <div className="relative flex-shrink-0 pb-8">
              <div className="absolute left-0 right-0 top-5 h-[2px] bg-[#E9EEF4]" />
              <div
                className="absolute top-5 h-[2px] bg-[#1DBAF8] transition-all duration-500"
                style={{ width: `${(active / (steps.length - 1)) * 100}%` }}
              />
              <div className="relative flex justify-between">
                {steps.map((step, index) => {
                  const Icon = ICONS[index % ICONS.length];
                  const isActive = active === index;
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive ? "bg-[#1DBAF8] border-[#1DBAF8] text-white shadow-lg" : "bg-white border-[#DFE6ED] text-[#98A2B3]"
                      }`}>
                        <Icon size={16} />
                      </div>
                      <span className={`mt-3 text-[10px] font-semibold tracking-[0.2em] uppercase ${isActive ? "text-[#1DBAF8]" : "text-[#98A2B3]"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`mt-1 text-[13px] ${isActive ? "text-[#111] font-medium" : "text-[#667085]"}`}>
                        {step.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Card — fills remaining height */}
            <div className="flex-1 min-h-0 pt-15 pb-10">
              <div className="h-full rounded-[24px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.04),0_16px_48px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col">
                <div className="h-[3px] w-full flex-shrink-0 bg-gradient-to-r from-[#1DBAF8] via-sky-300 to-transparent" />

                <div className="flex flex-1 min-h-0">
                  {/* Left content */}
                  <div className="flex-1 min-w-0 p-8 lg:p-10 border-r border-[#F1F5F9] overflow-y-auto">

                    <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF8FE] px-3.5 py-1.5 mb-5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1DBAF8] text-white">
                        <ActiveIcon size={14} />
                      </div>
                      <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-[#1DBAF8]">
                        Step {String(active + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-[28px] lg:text-[34px] font-[500] tracking-[-0.03em] text-[#0F172A] leading-[1.2]">
                      {steps[active].title}
                    </h3>

                    <p className="mt-4 text-[15px] lg:text-[16px] leading-[1.85] text-[#64748B]">
                      {steps[active].desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {FEATURES.map((f) => (
                        <span key={f} className="inline-flex items-center gap-1.5 rounded-full border border-[#BFECFD] bg-[#F0FBFF] px-3.5 py-1.5 text-[12.5px] font-medium text-[#0EA5E9]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1DBAF8]" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — counter + dots + scroll hint */}
                  <div className="flex flex-col items-center justify-center gap-5 px-8 w-[160px] flex-shrink-0 bg-[#FAFCFE]">
                    <div className="text-center">
                      <p className="text-[36px] font-bold tracking-tight text-[#0F172A]">
                        {String(active + 1).padStart(2, "0")}
                      </p>
                      <p className="text-[13px] text-[#94A3B8]">
                        of {String(steps.length).padStart(2, "0")}
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      {steps.map((_, i) => (
                        <div key={i} className={`rounded-full transition-all duration-500 ${
                          active === i ? "h-8 w-2 bg-[#1DBAF8]" : "h-2 w-2 bg-[#DDE5ED]"
                        }`} />
                      ))}
                    </div>

                    <p className="text-[10px] text-[#B0BEC5] text-center leading-snug tracking-widest uppercase">
                      Scroll<br/>to explore
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── MOBILE — click based ── */}
      <section className="lg:hidden relative overflow-hidden bg-[#FCFDFE] py-16 px-5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#1DBAF8]/10 blur-[120px]" />
        </div>

        <div className="relative">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1DBAF8]/20 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1DBAF8]">
              <span className="w-2 h-2 rounded-full bg-[#1DBAF8]" />
              Process
            </span>
            <h2 className="mt-5 text-[34px] sm:text-[42px] leading-[1.1] tracking-[-0.04em] font-semibold text-[#111]">
              {title}
            </h2>
            <p className="mt-3 text-[16px] leading-7 text-[#667085]">
              Every project follows one structured workflow designed to deliver consistent results.
            </p>
          </div>

          <div className="rounded-[20px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.04),0_12px_32px_rgba(15,23,42,0.08)] overflow-hidden">
            <div className="h-[3px] w-full bg-gradient-to-r from-[#1DBAF8] via-sky-300 to-transparent" />
            <div className="p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF8FE] px-3 py-1.5 mb-5">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1DBAF8] text-white">
                  <ActiveIcon size={12} />
                </div>
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#1DBAF8]">
                  Step {String(active + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[#0F172A] leading-[1.25]">
                {steps[active].title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-[#64748B]">
                {steps[active].desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {FEATURES.map((f) => (
                  <span key={f} className="inline-flex items-center gap-1.5 rounded-full border border-[#BFECFD] bg-[#F0FBFF] px-3 py-1.5 text-[12px] font-medium text-[#0EA5E9]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DBAF8]" />
                    {f}
                  </span>
                ))}
              </div>

              <div className="mt-7 pt-5 border-t border-[#F1F5F9] flex items-center justify-between">
                <button onClick={prev} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E2E8F0] text-[#64748B] hover:border-[#1DBAF8] hover:text-[#1DBAF8] transition-all">
                  <ChevronLeft size={16} />
                </button>
                <div className="flex items-center gap-1.5">
                  {steps.map((_, i) => (
                    <button key={i} onClick={() => setActive(i)} className={`h-2 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-[#1DBAF8]" : "w-2 bg-[#DDE5ED]"}`} />
                  ))}
                </div>
                <button onClick={next} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1DBAF8] text-white hover:bg-[#11ACE8] transition-all">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}