import { Fragment } from "react";

const rows = [
  {
    label: "How you get hired",
    other: "Propose and wait, or bid against a crowd",
    smm: "Profile matched to a brief that fits your specialty",
  },
  {
    label: "Pricing",
    other: "Lowest quote usually wins",
    smm: "Rate set in the brief before you accept",
  },
  {
    label: "Client screening",
    other: "Find out who you're dealing with after starting",
    smm: "Every business reviewed before a job reaches you",
  },
  {
    label: "Scope",
    other: "Often vague, grows once you're in it",
    smm: "Deliverables, rate, and timeline fixed upfront",
  },
  {
    label: "Fees",
    other: "Vary, not always visible",
    smm: "Flat 30% platform fee, shown before you accept",
  },
  {
    label: "Repeat work",
    other: "Start from zero each time",
    smm: "Clients can request you directly",
  },
];

const note =
  "The fee covers profile screening, skill-based matching, and payment processing, so most of your time goes toward doing work, not hunting for it.";

function Check() {
  return (
    <span className="mt-[2px] flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center rounded-full bg-[#12b3ef]">
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
        <path d="M5 12.5l4 4 10-10" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

const FreelancerProcess = () => {
  return (
    <section className="bg-white py-10 sm:py-20  lg:py-20 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
     

        {/* Heading */}
        <h2 className="
            text-center
            font-semibold
            text-black
            leading-8
            lg:leading-[1.2]
            text-[32px] sm:text-[40px] lg:text-[48px] 2xl:text-[52px]
          ">
          How Does This Compare to{" "}
          <span className="text-[#12b3ef]">Other <br/> Platforms</span>?
        </h2>

        {/* Desktop table */}
        <div
          className="relative mt-12 hidden md:grid"
          style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
        >
          {/* Highlighted SMM panel spanning all rows */}
          <div
            style={{ gridColumn: 3, gridRow: "1 / -1" }}
            className="rounded-[20px] bg-[#f0f9ff] shadow-[0_24px_60px_rgba(18,179,239,0.14)] ring-1 ring-[#d3edfb]"
          />

          {/* Header */}
          <div style={{ gridColumn: 1, gridRow: 1 }} className="border-b border-[#e6eaef]" />
          <div
            style={{ gridColumn: 2, gridRow: 1 }}
            className="flex items-center justify-center border-b border-[#e6eaef] px-0 py-6 text-center text-[15px] font-semibold text-[#6a7078] lg:text-[20px] 2xl:text-[24px]"
          >
            Other Platforms
          </div>
          <div
            style={{ gridColumn: 3, gridRow: 1 }}
            className="relative z-10 flex items-center justify-center border-b border-[#d6ecfa] px-6 py-6 text-center text-[16px] font-bold text-[#12b3ef] lg:text-[20px] 2xl:text-[24px]"
          >
            SMM Hiring
          </div>

          {/* Rows */}
          {rows.map((r, i) => {
            const rowNum = i + 2;
            const last = i === rows.length - 1;
            return (
              <Fragment key={i}>
                <div
                  style={{ gridColumn: 1, gridRow: rowNum }}
                  className={`flex min-h-[96px] items-center px-2 py-6 ${
                    !last ? "border-b border-[#eef2f5]" : ""
                  }`}
                >
                  <p className="text-[16px] font-[500] text-[#1b1e24] lg:text-[19px] 2xl:text-[23px]">
                    {r.label}
                  </p>
                </div>
                <div
                  style={{ gridColumn: 2, gridRow: rowNum }}
                  className={`flex min-h-[96px] items-center px-4 py-6 ${
                    !last ? "border-b border-[#eef2f5]" : ""
                  }`}
                >
                  <p className="text-[15px] leading-[1.6] text-[#5B5B5B] lg:text-[17px] 2xl:text-[20px]">
                    {r.other}
                  </p>
                </div>
                <div
                  style={{ gridColumn: 3, gridRow: rowNum }}
                  className={`relative z-10 flex min-h-[96px] items-center px-6 py-6 ${
                    !last ? "border-b border-[#d6ecfa]" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Check />
                    <p className="text-[15px]  leading-[1.55] text-[#12131a] lg:text-[17px] 2xl:text-[20px]">
                      {r.smm}
                    </p>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-10 space-y-4 md:hidden">
          {rows.map((r, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[16px] border border-[#e6eaef] shadow-[0_6px_20px_rgba(15,23,42,0.04)]"
            >
              <p className="border-b border-[#f0f2f5] px-5 py-4 text-[16px] font-bold text-[#1b1e24]">
                {r.label}
              </p>
              <div className="px-5 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9aa1ac]">
                  Other Platforms
                </p>
                <p className="mt-1 text-[14px] leading-[1.6] text-[#5B5B5B]">
                  {r.other}
                </p>
              </div>
              <div className="bg-[#f0f9ff] px-5 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#12b3ef]">
                  SMM Hiring
                </p>
                <div className="mt-1.5 flex items-start gap-2">
                  <Check />
                  <p className="text-[14px] font-medium leading-[1.6] text-[#12131a]">
                    {r.smm}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mx-auto mt-12 max-w-[760px] text-center text-[14px] leading-[1.75] text-[#8a9099] lg:text-[17px] 2xl:text-[20px] font-[300]">
          {note}
        </p>
      </div>
    </section>
  );
};

export default FreelancerProcess;