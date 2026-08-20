import {
  LayoutTemplate,
  Search,
  MousePointerClick,
  Megaphone,
  Clock,
  Check,
  AudioLines,
} from "lucide-react";
import { Link } from "react-router-dom";
import G3SMM from "../../../../assets/G8SMM.png";

const ACCENT = "#0BA5EC";

const items = [
  {
    icon: LayoutTemplate,
    heading: "Website copy that doesn't reflect what your business actually offers.",
    body: (
      <>
        Vague headline, generic paragraph, visitor's gone before the scroll even
        happens. Website copywriting services fix that part specifically, making
        the "why us" obvious instead of something a reader has to dig for. When
        stronger website messaging is the goal, businesses can{" "}
        <span className="font-[600] text-gray-800">hire website copywriter</span>{" "}
        support for homepage, service, product, and conversion-focused pages.
      </>
    ),
  },
  {
    icon: Search,
    heading: "Blog content that isn't showing up on Google.",
    body: (
      <>
        You can publish every single week and still rank nowhere. Keyword
        research and search intent come first with our SEO content writing and
        blog writing services, not a topic that just sounded good in a meeting.
        It's exactly why smart businesses{" "}
        <span className="font-[600] text-gray-800">hire SEO content writer</span>{" "}
        support instead of settling for a generalist.
      </>
    ),
  },
  {
    icon: MousePointerClick,
    heading: "Landing pages that get traffic but no conversions.",
    body: (
      <>
        The ad spend already solved traffic. What's actually broken is usually
        the copy sitting on the page once someone lands. Landing page copywriting
        goes straight at that, instead of pouring more money into traffic a weak
        page was never going to convert anyway. When the goal is stronger
        conversion-focused messaging, businesses can{" "}
        <span className="font-[600] text-gray-800">hire copywriter</span> support
        specifically for landing pages, sales copy, and other customer-facing
        content.
      </>
    ),
  },
  {
    icon: Megaphone,
    heading: "Inconsistent brand voice across content pieces.",
    body: (
      <>
        Three writers, three tones, and the brand starts sounding like it can't
        make up its mind. A documented voice guide sorts that out fast, whether
        the piece in question came from one of our content writers running the
        blog or a website copywriter brought in for a single page.
      </>
    ),
  },
  {
    icon: Clock,
    heading: "Not enough time or in-house resources to keep up with demand.",
    body: (
      <>
        Content's almost always first on the chopping block once other things get
        busy. Content writing and copywriting services exist so product
        descriptions and emails stop losing to whatever feels more urgent that
        particular week.
      </>
    ),
  },
];

const ProblemsWeSolve = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fbfdff] to-white py-12 sm:py-20 lg:py-20 2xl:py-28 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <span className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#e0f0fc] blur-3xl opacity-50" />
      <span className="pointer-events-none absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-[#e0f0fc] blur-3xl opacity-40" />

      <div className="relative max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24">
          {/* ===== LEFT: sticky heading + image ===== */}
          <div className="lg:sticky lg:top-24 lg:self-start pt-20">
            <span
              className="inline-flex items-center gap-1.5 rounded-full bg-[#e9f4fd] px-3.5 py-1.5 text-[11.5px] font-[600] uppercase tracking-[0.12em]"
              style={{ color: ACCENT }}
            >
              What We Solve
            </span>

            <h2 className="mt-5 text-[26px] sm:text-[38px] lg:text-[44px] 2xl:text-[50px] font-[500] leading-[1.16] tracking-[-1px] text-black sm:tracking-[-1.5px]">
              What Problems Our{" "}
              <span style={{ color: ACCENT }}>
                Content Writing and Copywriting Services
              </span>{" "}
              Solve
            </h2>

            <p className="mt-5 max-w-md text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[16.5px] 2xl:text-[17.5px]">
              Most content problems trace back to a handful of specific gaps.
              Here's exactly what the right writer or copywriter fixes for your
              business.
            </p>

            <div className="mt-14 2xl:mt-12 w-full max-w-[560px] xl:max-w-[640px] 2xl:max-w-[720px]">
              <img
                src={G3SMM}
                alt="Content writing and copywriting services that solve real business problems "
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* ===== RIGHT: numbered list with connecting rail ===== */}
          <div className="relative">
            {/* vertical rail behind the numbers */}
            <span className="pointer-events-none absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[#cfe9fb] via-[#cfe9fb] to-transparent sm:block" />

            <ul className="flex flex-col gap-8 sm:gap-10">
              {items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={item.heading} className="relative sm:pl-16">
                    {/* number node on the rail */}
                    <span
                      className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full bg-white text-[13px] font-[700] shadow-[0_6px_18px_-6px_rgba(11,165,236,0.7)] ring-4 ring-[#eaf6fe] sm:flex"
                      style={{ color: ACCENT }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="group rounded-[20px] border border-transparent p-1 transition-all duration-200 hover:border-[#eaf3fb] hover:bg-white/70 hover:shadow-[0_16px_36px_-26px_rgba(11,165,236,0.7)] sm:p-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#e9f4fd] transition-colors duration-200 group-hover:bg-[#dceffc] sm:hidden">
                          <Icon className="h-[19px] w-[19px]" style={{ color: ACCENT }} strokeWidth={2} />
                        </span>
                        <Icon
                          className="hidden h-[20px] w-[20px] shrink-0 sm:block"
                          style={{ color: ACCENT }}
                          strokeWidth={2}
                        />
                        <h3 className="text-[16.5px] font-[600] leading-snug text-gray-900 sm:text-[18px] 2xl:text-[19.5px]">
                          {item.heading}
                        </h3>
                      </div>

                      <p className="mt-3 text-[13.5px] font-[350] leading-[1.75] text-gray-500 sm:text-[14.5px] 2xl:text-[15.5px]">
                        {item.body}
                      </p>

                      <span
                        className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#e9f4fd] px-3 py-1 text-[11px] font-[600] uppercase tracking-[0.06em]"
                        style={{ color: ACCENT }}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        Solved
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ===== Closing note with interlink ===== */}
        <div className="mt-12 flex items-start gap-4 rounded-[18px] border border-[#eef2f7] bg-white p-5 shadow-[0_8px_24px_-18px_rgba(11,165,236,0.55)] sm:mt-16 sm:items-center sm:p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e9f4fd]">
            <AudioLines className="h-[20px] w-[20px]" style={{ color: ACCENT }} strokeWidth={2} />
          </span>
          <p className="text-[14px] font-[350] leading-[1.7] text-gray-600 sm:text-[15.5px] 2xl:text-[16px]">
            <span className="font-[600] text-gray-900">
              Need professional narration for videos, explainers, or other branded
              content?
            </span>{" "}
            You can{" "}
            <Link
              to="/business-services/hire-voice-over-artist-audio-producer/"
              className="font-[600] underline underline-offset-2 hover:opacity-80"
              style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
            >
              hire voice over artist
            </Link>{" "}
            support for the job.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;