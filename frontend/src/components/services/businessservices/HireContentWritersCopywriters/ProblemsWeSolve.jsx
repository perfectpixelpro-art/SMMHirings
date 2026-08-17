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

const SolveCard = ({ item, featured }) => {
  const Icon = item.icon;
  return (
    <article
      className={`group relative overflow-hidden rounded-[22px] border border-[#eef2f7] bg-white p-6 shadow-[0_8px_24px_-18px_rgba(11,165,236,0.55)] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#cfe9fb] hover:shadow-[0_18px_36px_-20px_rgba(11,165,236,0.75)] sm:p-7 2xl:p-8 ${
        featured ? "bg-gradient-to-br from-white to-[#f7fbff] lg:col-span-2" : ""
      }`}
    >
      <div className={featured ? "lg:flex lg:items-start lg:gap-10 2xl:gap-14" : ""}>
        <div className={featured ? "lg:w-[42%] lg:shrink-0" : ""}>
          <div className="flex items-center justify-between gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9f4fd] transition-colors duration-200 group-hover:bg-[#dceffc]">
              <Icon className="h-[22px] w-[22px]" style={{ color: ACCENT }} strokeWidth={2} />
            </span>
            <span
              className="inline-flex items-center gap-1.5 rounded-full bg-[#e9f4fd] px-3 py-1 text-[11px] font-[600] uppercase tracking-[0.06em]"
              style={{ color: ACCENT }}
            >
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
              Solved
            </span>
          </div>

          <h3
            className={`mt-5 font-[600] leading-snug text-gray-900 ${
              featured
                ? "text-[19px] sm:text-[23px] 2xl:text-[25px]"
                : "text-[16.5px] sm:text-[18px] 2xl:text-[19px]"
            }`}
          >
            {item.heading}
          </h3>
        </div>

        <p
          className={`text-[13.5px] font-[350] leading-[1.75] text-gray-500 sm:text-[14.5px] 2xl:text-[15.5px] ${
            featured ? "mt-4 lg:mt-1 lg:flex-1" : "mt-3"
          }`}
        >
          {item.body}
        </p>
      </div>
    </article>
  );
};

const ProblemsWeSolve = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

    

        {/* Heading */}
        <h2 className="mt-3 max-w-4xl text-[26px] sm:text-[40px] lg:text-[52px] 2xl:text-[54px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
          What Problems Our{" "}
          <span style={{ color: ACCENT }}>Content Writing and Copywriting Services</span>{" "}
          Solve
        </h2>

        {/* Solve cards bento */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 lg:grid-cols-2 2xl:gap-6">
          {items.map((item, i) => (
            <SolveCard key={item.heading} item={item} featured={i === 0} />
          ))}
        </div>

        {/* Closing note with interlink */}
        <div className="mt-10 flex items-start gap-4 rounded-[18px] border border-[#eef2f7] bg-white p-5 shadow-[0_8px_24px_-18px_rgba(11,165,236,0.55)] sm:mt-12 sm:items-center sm:p-6">
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