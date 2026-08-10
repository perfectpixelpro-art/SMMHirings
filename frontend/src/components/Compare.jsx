/* Comparison table section. Content switches on landingType.
   Freelancer copy is final. Business copy is placeholder to swap later. */

const content = {
  freelancer: {
    heading: {
      line1: "How Does SMM Hiring Compare to Other",
      accent: "Freelance Social Media Job Platforms",
    },
    colA: "Typical Platforms",
    colB: "SMM Hiring",
    rows: [
      { label: "Cold pitching required", a: "Yes", b: "No" },
      { label: "Scope defined before you start", a: "Rarely", b: "Always" },
      { label: "Client screening done for you", a: "No", b: "Yes" },
      { label: "Payment terms", a: "Varies", b: "Consistent" },
      { label: "Category focus", a: "Everything", b: "Only social media" },
      { label: "Competing on rate", a: "Yes", b: "No" },
    ],
    caption: {
      lead: "On general marketplaces, you're the one finding the client, writing the pitch, negotiating, and eventually chasing payment. On SMM Hiring ",
      bold: "social media freelance platform",
      tail: ", sourcing and screening is already handled. What's left is the work itself.",
    },
  },

  // Placeholder business copy, written to be swapped later
  business: {
    heading: {
      line1: "How Does SMM Hiring Compare to Other",
      accent: "Places to Hire Social Media Talent",
    },
    colA: "Typical Marketplaces",
    colB: "SMM Hiring",
    rows: [
      { label: "You write the job post alone", a: "Always", b: "Guided" },
      { label: "Applicants matched to your brief", a: "Rarely", b: "Always" },
      { label: "Talent screening done for you", a: "No", b: "Yes" },
      { label: "Pricing shown upfront", a: "Varies", b: "Always" },
      { label: "Category focus", a: "Everything", b: "Only social media" },
      { label: "Endless proposals to sift", a: "Yes", b: "No" },
    ],
    caption: {
      lead: "On general marketplaces, you post the job, sift through proposals, and vet every applicant yourself. On SMM Hiring ",
      bold: "social media hiring platform",
      tail: ", sourcing and screening is already handled. What's left is the hire itself.",
    },
  },
};

export default function Compare({ landingType = "freelancer" }) {
  const data = content[landingType] || content.freelancer;
  const { heading, colA, colB, rows, caption } = data;

  return (
    <section className="bg-white py-20 lg:py-20 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        {/* Heading */}
        <h2
          className="
            text-center
            font-semibold
            text-black
            leading-8
            lg:leading-[1.28]
            text-[32px] sm:text-[40px] lg:text-[48px]
          "
        >
          <span className="block">{heading.line1}</span>
          <span className="block">
            <span className="text-[#12b3ef]">{heading.accent}</span>?
          </span>
        </h2>

        {/* Table card */}
        <div className="mt-8 lg:mt-10 rounded-[16px] lg:rounded-[22px] border border-[#12b3ef] bg-white">
          {/* Header band — full width, flush to card sides, taller */}
          <div className="grid grid-cols-[1.3fr_1fr_1fr] rounded-t-[16px] lg:rounded-t-[22px] rounded-b-[16px] lg:rounded-b-[18px] border border-[#12b3ef] bg-[#f4fbff]">
            <div />
            <div className="px-2 py-5 text-center text-[13px] font-[500] text-black sm:text-[15px] lg:py-7 lg:text-[20px]">
              {colA}
            </div>
            <div className="px-2 py-5 text-center text-[13px] font-[500] text-black sm:text-[15px] lg:py-7 lg:text-[20px]">
              {colB}
            </div>
          </div>

          {/* Data rows — dividers inset from card edges */}
          <div className="px-4 pb-1 pt-2 sm:px-6 sm:pt-3 lg:px-8">
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1.3fr_1fr_1fr] items-center ${
                  i !== rows.length - 1 ? "border-b border-[#e3e5e8]" : ""
                }`}
              >
                <div className="py-4 pr-2 text-[13px] text-[#5b6473] sm:text-[14px] lg:py-6 lg:text-[18px]">
                  {row.label}
                </div>
                <div className="px-2 py-4 text-center text-[13px] text-[#575757] sm:text-[15px] lg:py-6 lg:text-[19px]">
                  {row.a}
                </div>
                <div className="px-2 py-4 text-center text-[13px] font-[500] text-[#12131a] sm:text-[15px] lg:py-6 lg:text-[19px]">
                  {row.b}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Caption */}
        <p className="mx-auto mt-6 max-w-[1050px] font-[400] text-center text-[13px] leading-[1.7] text-[#9aa1ac] sm:text-[14px] lg:text-[19px]">
          {caption.lead}
          <span className="font-[400] text-[#000000]">{caption.bold}</span>
          {caption.tail}
        </p>
      </div>
    </section>
  );
}