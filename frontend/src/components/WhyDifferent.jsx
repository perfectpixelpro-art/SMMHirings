const content = {
  freelancer: {
    heading: {
      line1: (
        <>
          How SMM Hiring{" "}
          <span className="text-[#12b3ef]">Compares to Other</span>
        </>
      ),
      line2: (
        <>
          <span className="text-[#12b3ef]">Freelance Social Media</span> Job
          Platforms?
        </>
      ),
    },
    columns: ["Typical Platforms", "SMM Hiring"],
    rows: [
      {
        label: "Cold pitching",
        values: ["You write and send pitches", "Matches come to you"],
      },
      {
        label: "Scope defined upfront",
        values: [
          "Rarely, figure it out as you go",
          "Always, deliverable, timeline, and rate shown before you accept",
        ],
      },
      {
        label: "Client screening",
        values: ["You do it yourself", "Handled before the job reaches you"],
      },
      {
        label: "Payment terms",
        values: ["Vary from client to client", "Same terms on every job"],
      },
      {
        label: "Category focus",
        values: [
          "Everything, from writing to coding",
          "Only social media, video, design, and growth roles",
        ],
      },
      {
        label: "Competing on rate",
        values: [
          "Yes, lowest bid usually wins",
          "No, matched by specialization and fit",
        ],
      },
      {
        label: "Revisions",
        values: ["Open-ended, unpaid", "Capped upfront"],
      },
      {
        label: "Job clarity",
        values: [
          "Job post leaves out key details",
          "Every brief shows the full scope before you say yes",
        ],
      },
      {
        label: "Support if things go wrong",
        values: [
          "You sort it out with the client",
          "Our team reviews the job details and rules on it",
        ],
      },
    ],
    caption: {
      lead: "On general marketplaces, you find the client, write the pitch, negotiate, and chase payment. On the SMM Hiring ",
      bold: "social media freelance platform",
      tail: ", all of that is handled. What's left is the work.",
    },
  },

  // Placeholder business copy, written to be swapped later
  business: {
    heading: {
      line1: (
        <>
          How SMM Hiring{" "}
          <span className="text-[#12b3ef]">Compares to Hiring</span>
        </>
      ),
      line2: (
        <>
          Through an <span className="text-[#12b3ef]">Agency or Marketplace?</span>
        </>
      ),
    },
    columns: ["Agencies", "Freelancer Marketplaces", "SMM Hiring"],
    rows: [
      {
        label: "Cost",
        values: [
          "$3,000–$10,000/month retainer",
          "Varies wildly, race to lowest bid",
          "Flat monthly plan, $0 to $100",
        ],
      },
      {
        label: "Who you actually work with",
        values: [
          "Account manager + strategist + junior",
          "Whoever bids first",
          "The person doing the work",
        ],
      },
      {
        label: "Screening done for you",
        values: [
          "Yes, but limited to their bench",
          "No",
          "Yes, every candidate",
        ],
      },
      {
        label: "Portfolio verification",
        values: ["Rarely", "No", "Every profile verified"],
      },
      {
        label: "Time to first candidate",
        values: [
          "1–3 weeks",
          "Same-day floods of applicants",
          "Shortlist within 48 hours of posting",
        ],
      },
      {
        label: "Contract length",
        values: ["6–12 months typical", "Per project", "Month-to-month"],
      },
      {
        label: "Category focus",
        values: [
          "Everything, packaged as a team",
          "Everything, no filter",
          "Marketing, content, video, design, growth",
        ],
      },
    ],
    caption: {
      lead: "On agencies, you pay for a team you didn't ask for. On marketplaces, you sort through the flood yourself. On ",
      bold: "SMM Hiring",
      tail: ", the screening happens before the shortlist ever reaches your inbox. What's left is the interview and the hire.",
    },
  },
};

export default function WhyDifferent({ landingType = "freelancer" }) {
  const data = content[landingType] || content.freelancer;
  const { heading, columns, rows, caption } = data;

  const highlightIndex = columns.length - 1; // SMM Hiring is always last
  // label column (wider) + one equal fraction per comparison column
  const gridCols = `minmax(150px,1.3fr) ${"1fr ".repeat(columns.length).trim()}`;

  return (
    <section className="bg-white sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px] mt-6 sm:mt-10 py-0 lg:py-0 overflow-hidden">
      {/* Header */}
      <div className="px-5 sm:px-10 lg:px-[78px] mb-6 lg:mb-8">
        <h2 className="
            font-semibold
            text-black
            leading-8
            lg:leading-[1.28]
            text-[32px] sm:text-[40px] lg:text-[48px]">
          <span className="block">{heading.line1}</span>
          <span className="block">{heading.line2}</span>
        </h2>
      </div>

      {/* Table */}
      <div className="px-5 sm:px-10 lg:px-[78px]">
        {/* Desktop / tablet: grid table */}
        <div className="hidden overflow-hidden rounded-[4px] border border-[#e8ecf1] md:block">
          {/* Column header row */}
          <div
            className="grid border-b border-[#e8ecf1] bg-[#fbfeff]"
            style={{ gridTemplateColumns: gridCols }}
          >
            <div className="border-r border-[#e8ecf1]" />
            {columns.map((col, i) => (
              <div
                key={i}
                className={`px-6 py-5 text-center text-[16px] font-semibold lg:px-8 lg:py-6 lg:text-[20px] ${
                  i !== columns.length - 1 ? "border-r border-[#e8ecf1]" : ""
                } ${i === highlightIndex ? "bg-[#f4fbff] text-[#12b3ef]" : "text-[#3b3b3b]"}`}
              >
                {col}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {rows.map((row, r) => (
            <div
              key={r}
              className={`grid ${r !== rows.length - 1 ? "border-b border-[#e8ecf1]" : ""}`}
              style={{ gridTemplateColumns: gridCols }}
            >
              {/* Label cell */}
              <div className="flex items-center border-r border-[#e8ecf1] bg-[#fbfeff] px-6 py-5 lg:px-8 lg:py-6">
                <h3 className="text-[16px] font-semibold leading-[1.35] text-[#3b3b3b] lg:text-[20px]">
                  {row.label}
                </h3>
              </div>

              {/* Value cells */}
              {row.values.map((val, c) => (
                <div
                  key={c}
                  className={`flex items-center justify-center px-6 py-5 text-center lg:px-8 lg:py-6 ${
                    c !== row.values.length - 1 ? "border-r border-[#e8ecf1]" : ""
                  } ${c === highlightIndex ? "bg-[#f4fbff]" : ""}`}
                >
                  <p
                    className={`text-[15px] leading-[1.55] sm:text-[16px] lg:text-[18px] ${
                      c === highlightIndex
                        ? "font-[500] text-[#12131a]"
                        : "font-[300] 2xl:font-[400] text-[#6D7587]"
                    }`}
                  >
                    {val}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="space-y-4 md:hidden">
          {rows.map((row, r) => (
            <div
              key={r}
              className="overflow-hidden rounded-[4px] border border-[#e8ecf1]"
            >
              <div className="bg-[#fbfeff] px-5 py-4 border-b border-[#e8ecf1]">
                <h3 className="text-[17px] font-semibold text-[#3b3b3b]">
                  {row.label}
                </h3>
              </div>
              <div className="divide-y divide-[#eef0f2]">
                {row.values.map((val, c) => (
                  <div
                    key={c}
                    className={`px-5 py-3 ${c === highlightIndex ? "bg-[#f4fbff]" : ""}`}
                  >
                    <p
                      className={`mb-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                        c === highlightIndex ? "text-[#12b3ef]" : "text-[#9aa1ac]"
                      }`}
                    >
                      {columns[c]}
                    </p>
                    <p
                      className={`text-[15px] leading-[1.55] ${
                        c === highlightIndex
                          ? "font-[500] text-[#12131a]"
                          : "font-[300] text-[#6D7587]"
                      }`}
                    >
                      {val}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Caption */}
        <p className="mt-6 max-w-[1050px] text-[15px] font-[300] leading-[1.7] text-[#6D7587] sm:text-[16px] lg:mt-8 lg:text-[18px]">
          {caption.lead}
          <span className="font-[500] text-[#12131a]">{caption.bold}</span>
          {caption.tail}
        </p>
      </div>
    </section>
  );
}