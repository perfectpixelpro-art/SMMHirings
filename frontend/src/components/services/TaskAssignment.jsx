import { Link } from "react-router-dom";

const items = [
  {
    title: "One clear specialty.",
    desc: 'Generalist profiles are harder to match. "I do social media" gets ignored. "I edit short-form video for DTC brands" gets you into the right queue.',
  },
  {
    title: "Relevant samples.",
    desc: "Not your best work overall, your best work in the specialty you are applying under. A strong logo will not help a copywriting application.",
  },
  {
    title: "Platform experience.",
    desc: "Name the platforms you have actually worked in. Vague answers slow down verification.",
  },
  {
    title: "Results where you have them.",
    desc: "Engagement growth, retention numbers, turnaround times, anything that shows the work worked.",
  },
  {
    title: "Honest availability.",
    desc: "Overcommitting on your profile just means declining briefs later.",
  },
];

const ready = [
  "Updated resume",
  "Samples specific to your specialty",
  "A clear list of what you do",
  "Realistic availability",
  "One lane, not five",
];

function CheckMini() {
  return (
    <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#12b3ef]">
      <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none">
        <path d="M5 12.5l4 4 10-10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

const TaskAssignment = () => {
  return (
    <section className="bg-white py-10 sm:py-20 lg:py-20 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="mx-auto max-w-[1700px] px-5 md:px-10 lg:px-[78px]">
        {/* Two-column */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left */}
          <div className="lg:sticky lg:top-24 lg:self-start">
           
            <h2 className="mt-3 font-semibold leading-[1.12] tracking-[-0.02em] text-[#111111] text-[30px] sm:text-[40px] lg:text-[48px]">
              What Makes a{" "}
              <span className="text-[#12b3ef]">Strong Freelancer Profile</span>?
            </h2>
            <p className="mt-5 max-w-[440px] text-[15px] leading-[1.7] text-[#5b6068] sm:text-[16px] lg:text-[17px]">
              A thin profile gets thin results. Here is what moves the needle
              before you apply for marketing freelancer jobs.
            </p>
          </div>

          {/* Right timeline */}
          <div className="relative">
            {/* connecting line */}
            <span className="pointer-events-none absolute left-[19px] top-3 bottom-6 w-[2px] bg-gradient-to-b from-[#cdeafb] via-[#cdeafb] to-transparent" />

            <div className="space-y-8 lg:space-y-9">
              {items.map((item, i) => (
                <div key={i} className="group relative pl-14">
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#19BAF8] to-[#0f97dc] text-[14px] font-bold text-white shadow-[0_6px_16px_rgba(18,179,239,0.35)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[18px] font-[500] tracking-[-0.01em] text-[#12131a] sm:text-[20px] lg:text-[21px]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-[1.65] text-[#5b6068] sm:text-[16px] lg:text-[17px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blue premium band */}
        <div className="relative mt-10 overflow-hidden rounded-[22px] bg-gradient-to-r from-[#19BAF8] to-[#0f8fd4] px-6 py-6 shadow-[0_22px_50px_-26px_rgba(18,179,239,0.55)] sm:px-9 lg:mt-14 lg:px-12 lg:py-7">
          {/* glow */}
          <div className="pointer-events-none absolute -top-16 right-10 h-40 w-[360px] rounded-full bg-white opacity-15 blur-[80px]" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Left: heading + chips */}
            <div className="min-w-0">
              <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-white sm:text-[21px] lg:text-[23px]">
                Before you apply, have this ready
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {ready.map((chip, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.14] px-3.5 py-1.5 text-[13px] font-medium text-white ring-1 ring-white/25 backdrop-blur-sm lg:text-[14px]"
                  >
                    <CheckMini />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: CTA */}
            <Link
              to="/login/freelancer"
              className="inline-flex flex-shrink-0 items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#0f8fd4] transition hover:bg-[#eaf7ff] lg:self-auto lg:text-[15px]"
            >
              Apply as a Freelancer
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskAssignment;