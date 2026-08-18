import { Check, ArrowRight, ArrowDown } from "lucide-react";

const ACCENT = "#0BA5EC";

const rows = [
  {
    problem: "Forty applications, two worth a call",
    cost: "Hours screening resumes for nothing",
    fix: "A reviewed shortlist, not a stack of applications",
  },
  {
    problem: "Agency retainer for one person's job",
    cost: "Paying for a strategist and account manager you didn't need",
    fix: "Hire the person doing the work, directly",
  },
  {
    problem: "Posting goes quiet for weeks",
    cost: "Launches slip and engagement drops",
    fix: "A hire whose actual job is your channels",
  },
  {
    problem: "Strategy resets with every turnover",
    cost: "Months of consistent brand voice are lost",
    fix: "A documented process, not improvisation",
  },
  {
    problem: "Hiring takes a month",
    cost: "A full hiring cycle is lost before anyone starts",
    fix: "A shortlist within 48 hours",
  },
];

const WorthYourTime = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-12 2xl:py-10 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

     

        {/* Heading */}
        <h2 className="mt-3 max-w-4xl text-[26px] sm:text-[40px] lg:text-[52px] 2xl:text-[54px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
          Find a{" "}
          <span style={{ color: ACCENT }}>Professional Social Media Manager</span>{" "}
          for Your Business
        </h2>

        <p className="mt-4 max-w-2xl text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
          The problem usually isn't finding people who say they can manage
          social media. It's figuring out which of them are actually worth
          your time.
        </p>

        {/* Transformation strips */}
        <div className="mt-10 flex flex-col gap-4 sm:mt-14 sm:gap-5">
          {rows.map((row, i) => (
            <div
              key={row.problem}
              className="group relative overflow-hidden rounded-[20px] border border-[#eef2f7] bg-white shadow-[0_8px_24px_-18px_rgba(11,165,236,0.55)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_16px_34px_-18px_rgba(11,165,236,0.75)]"
            >
              {/* ===== Desktop layout (lg and up) ===== */}
              <div className="hidden items-stretch lg:flex">
                {/* index */}
                <div className="flex w-[70px] shrink-0 items-center justify-center 2xl:w-[84px]">
                  <span
                    className="text-[18px] font-[600] tabular-nums 2xl:text-[20px]"
                    style={{ color: ACCENT }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* problem + cost */}
                <div className="flex flex-1 flex-col justify-center border-l border-[#eef2f7] px-6 py-6 2xl:px-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                    The Problem
                  </p>
                  <p className="mt-1.5 text-[16px] font-[600] leading-[1.4] text-gray-900 2xl:text-[17.5px]">
                    {row.problem}
                  </p>
                  <p className="mt-2 text-[13px] font-[350] leading-[1.55] text-gray-500 2xl:text-[14px]">
                    <span className="font-[500] text-gray-400">Costs you: </span>
                    {row.cost}
                  </p>
                </div>

                {/* arrow */}
                <div className="flex w-[64px] shrink-0 items-center justify-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e9f4fd] transition-transform duration-200 group-hover:translate-x-[2px]">
                    <ArrowRight
                      className="h-4 w-4"
                      style={{ color: ACCENT }}
                      strokeWidth={2.5}
                    />
                  </span>
                </div>

                {/* fix */}
                <div className="flex w-[40%] shrink-0 items-center gap-4 bg-[#e9f4fd] px-6 py-6 2xl:px-8">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <Check className="h-[18px] w-[18px] text-white" strokeWidth={3} />
                  </span>
                  <div>
                    <p
                      className="text-[11px] font-semibold uppercase tracking-[0.12em]"
                      style={{ color: ACCENT }}
                    >
                      The Fix
                    </p>
                    <p className="mt-1 text-[15px] font-[600] leading-[1.4] text-gray-900 2xl:text-[16.5px]">
                      {row.fix}
                    </p>
                  </div>
                </div>
              </div>

              {/* ===== Mobile / tablet layout (below lg) ===== */}
              <div className="flex flex-col lg:hidden">
                {/* problem + cost */}
                <div className="px-5 py-5">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[13px] font-[600] tabular-nums"
                      style={{ color: ACCENT }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                      The Problem
                    </p>
                  </div>
                  <p className="mt-2 text-[15px] font-[600] leading-[1.4] text-gray-900">
                    {row.problem}
                  </p>
                  <p className="mt-1.5 text-[13px] font-[350] leading-[1.55] text-gray-500">
                    <span className="font-[500] text-gray-400">Costs you: </span>
                    {row.cost}
                  </p>
                </div>

                {/* connector */}
                <div className="flex items-center justify-center">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e9f4fd]">
                    <ArrowDown
                      className="h-4 w-4"
                      style={{ color: ACCENT }}
                      strokeWidth={2.5}
                    />
                  </span>
                </div>

                {/* fix */}
                <div className="mt-1 flex items-start gap-3 bg-[#e9f4fd] px-5 py-5">
                  <span
                    className="mt-[2px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </span>
                  <div>
                    <p
                      className="text-[11px] font-semibold uppercase tracking-[0.12em]"
                      style={{ color: ACCENT }}
                    >
                      The Fix
                    </p>
                    <p className="mt-1 text-[14.5px] font-[600] leading-[1.4] text-gray-900">
                      {row.fix}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="mt-8 max-w-3xl text-[14px] font-[350] leading-[1.7] text-gray-500 sm:mt-12 sm:text-[16px] sm:leading-[1.75] 2xl:text-[17px]">
          The problem usually isn't finding people who say they can manage
          social media. It's figuring out{" "}
          <span className="font-[600] text-gray-800">
            which people are actually worth your time.
          </span>
        </p>
      </div>
    </section>
  );
};

export default WorthYourTime;