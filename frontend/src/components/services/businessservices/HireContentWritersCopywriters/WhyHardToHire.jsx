import { Files, Puzzle, Hourglass, Repeat, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const problems = [
  {
    icon: Files,
    title: "A Strong Portfolio Doesn't Tell You Everything",
    body: (
      <>
        A few impressive samples don't necessarily show how someone will handle
        your audience, industry, brand voice, or content goals. Writing a great
        blog post is different from writing a landing page that needs to convert.
        SEO content requires a different approach again.
      </>
    ),
  },
  {
    icon: Puzzle,
    title: "The Right Skills Rarely Come in One Neat Package",
    body: (
      <>
        Good writing is only the starting point. The right hire may also need to
        understand{" "}
        <span className="font-[600] text-gray-800">
          SEO, search intent, conversion-focused copy, brand voice, and your
          industry.
        </span>{" "}
        Finding all of that in one candidate can turn a simple hire into a much
        longer search.
      </>
    ),
  },
  {
    icon: Hourglass,
    title: "Too Much Time Goes Into Screening",
    body: (
      <>
        Applications, portfolios, sample assignments, interviews, follow-ups. By
        the time you've worked through all of it, a week or two can disappear
        before a single piece of content gets written. Meanwhile, your blog
        calendar is waiting, your website copy still needs work, or the landing
        page you wanted to update is still sitting in its old version.
      </>
    ),
  },
  {
    icon: Repeat,
    title: "Then There's the Consistency Problem",
    body: (
      <>
        Hire different writers for different pieces without a clear process, and
        the difference shows. One sounds sharp and confident. Another sounds
        completely different. Over time, your website, blog, emails, and other
        content can start sounding like they're coming from different businesses.
      </>
    ),
  },
];

const ProblemItem = ({ problem, index }) => {
  const Icon = problem.icon;
  return (
    <div className="group relative flex gap-5 sm:gap-7">
      {/* node */}
      <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_-12px_rgba(11,165,236,0.55)] ring-1 ring-[#cfe9fb] transition-all duration-200 group-hover:-translate-y-[1px] group-hover:bg-[#f2f9ff] group-hover:ring-[#0BA5EC] group-hover:shadow-[0_14px_30px_-12px_rgba(11,165,236,0.75)] sm:h-[56px] sm:w-[56px]">
        <Icon
          className="h-[22px] w-[22px] sm:h-6 sm:w-6"
          style={{ color: ACCENT }}
          strokeWidth={2}
        />
      </span>

      {/* content */}
      <div className="relative min-w-0 flex-1 pt-1">
        {/* big ghost index */}
        <span className="pointer-events-none absolute -top-3 right-0 text-[52px] font-[700] leading-none text-[#0BA5EC]/[0.05] sm:text-[64px]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <p
          className="text-[12px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: ACCENT }}
        >
          Problem {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-1.5 max-w-md text-[17px] font-[600] leading-snug text-gray-900 sm:text-[19px] 2xl:text-[20px]">
          {problem.title}
        </h3>
        <p className="mt-2.5 max-w-lg text-[13.5px] font-[350] leading-[1.7] text-gray-500 sm:text-[15px] sm:leading-[1.75] 2xl:text-[15.5px]">
          {problem.body}
        </p>
      </div>
    </div>
  );
};

const ProblemColumn = ({ items, startIndex }) => (
  <div className="relative">
    {/* vertical spine */}
    <span className="pointer-events-none absolute left-[23px] top-3 bottom-6 w-[2px] bg-gradient-to-b from-[#cfe9fb] via-[#cfe9fb] to-transparent sm:left-[27px]" />
    <div className="flex flex-col gap-9 sm:gap-11">
      {items.map((problem, idx) => (
        <ProblemItem key={problem.title} problem={problem} index={startIndex + idx} />
      ))}
    </div>
  </div>
);

const WhyHardToHire = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

        {/* Heading */}
        <h2 className="max-w-4xl text-[26px] sm:text-[40px] lg:text-[52px] 2xl:text-[54px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
          Why Hiring Content Writers and Copywriters Is{" "}
          <span style={{ color: ACCENT }}>Harder Than It Looks</span>
        </h2>

        {/* Intro */}
        <div className="mt-5 max-w-3xl space-y-4">
          <p className="text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
            Finding someone who can write isn't difficult.{" "}
            <span className="font-[600] text-gray-800">
              Finding someone who can write for your business is.
            </span>
          </p>
          <p className="text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
            You post the role, the applications start coming in, and suddenly
            you're sorting through dozens of portfolios trying to work out who is
            actually worth your time. One candidate has great blog samples but
            weak website copy. Another writes polished copy but has no real SEO
            experience. Someone else looks perfect on paper but needs constant
            direction once the work starts.
          </p>
        </div>

        {/* Problem timeline: 01-02 left, 03-04 right */}
        <div className="mt-12 grid grid-cols-1 gap-y-9 sm:mt-16 sm:gap-y-11 lg:grid-cols-2 lg:gap-x-12 2xl:gap-x-20">
          <ProblemColumn items={problems.slice(0, 2)} startIndex={0} />
          <ProblemColumn items={problems.slice(2, 4)} startIndex={2} />
        </div>

        {/* Resolving callout */}
        <div className="relative mt-12 overflow-hidden rounded-[24px] border border-[#e3f0fb] bg-gradient-to-br from-[#f2f9ff] to-[#eaf5fe] p-6 sm:mt-16 sm:rounded-[28px] sm:p-9 lg:p-11 2xl:p-12">
          <span className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#d6edfc] blur-3xl opacity-70" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] shadow-sm sm:text-[12px]">
              <Sparkles className="h-3.5 w-3.5" style={{ color: ACCENT }} strokeWidth={2.5} />
              <span style={{ color: ACCENT }}>The Fix</span>
            </span>

            <p className="mt-5 max-w-3xl 2xl:max-w-5xl text-[16px] font-[500] leading-[1.6] text-gray-900 sm:text-[20px] sm:leading-[1.55] 2xl:text-[22px]">
              The problem isn't finding people who can write. It's finding someone
              who fits the work, understands what the content needs to achieve,
              and can deliver without constant hand-holding.
            </p>

            <p className="mt-5 max-w-6xl  2xl:max-w-7xl text-[14px] font-[350] leading-[1.75] text-gray-600 sm:text-[16px] 2xl:text-[17px]">
              That's exactly where{" "}
              <Link
                to="/"
                className="font-[600] underline underline-offset-2 hover:opacity-80"
                style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
              >
                SMM Hiring
              </Link>{" "}
              helps. Content writers and copywriters are reviewed and matched
              based on your{" "}
              <span className="font-[600] text-gray-800">
                industry, requirements, content needs, and budget,
              </span>{" "}
              so you can spend less time screening applications and more time
              choosing the right person.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHardToHire;