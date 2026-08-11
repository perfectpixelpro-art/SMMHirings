const content = {
  freelancer: {
    heading: {
      line1: (
        <>
          What Makes SMM Hiring{" "}
          <span className="text-[#12b3ef]">Different From</span>
        </>
      ),
      line2: (
        <>
          <span className="text-[#12b3ef]">Other Freelance</span> Social Media
          Job Platforms?
        </>
      ),
    },
    rows: [
      {
        heading: "Scope is defined before you accept anything.",
        body: "Every freelance social media job shows the deliverable, timeline, and rate upfront, so you're not guessing.",
      },
      {
        heading: "Revisions are capped.",
        body: "If the client wants more than what was agreed, that becomes a new job rather than extra unpaid work on the old one.",
      },
      {
        heading: "Payment terms hold steady.",
        body: "Whatever the terms are on one freelance social media management job, they're the same on the next.",
      },
      {
        heading: "You're matched by specialization.",
        body: "The social media manager freelance jobs in your queue actually fits what you do.",
      },
      {
        heading: "It's all social media work.",
        body: "Nothing gets thrown in from unrelated categories just because you're technically qualified as a remote social media manager.",
      },
    ],
  },

  // Placeholder business copy, written to be swapped later
  business: {
    heading: {
      line1: (
        <>
          What Makes SMM Hiring{" "}
          <span className="text-[#12b3ef]">Different From</span>
        </>
      ),
      line2: (
        <>
          <span className="text-[#12b3ef]">Other Places</span> To Hire Social
          Media Talent?
        </>
      ),
    },
    rows: [
      {
        heading: "You define the scope, not the freelancer.",
        body: "Post the deliverable, timeline, and budget up front, so the people who apply already know exactly what the job is.",
      },
      {
        heading: "Revisions stay inside the agreement.",
        body: "The work you agreed on is the work you get, and anything beyond it is booked as a separate job instead of scope creep.",
      },
      {
        heading: "Pricing is clear before you commit.",
        body: "You see the rate up front on every hire, so there are no surprise invoices once the work is underway.",
      },
      {
        heading: "You hire by specialization.",
        body: "Applicants are matched to what you actually posted, so you're reviewing people who do this specific kind of work.",
      },
      {
        heading: "Everyone here does social media.",
        body: "You're hiring from a pool built only for social media work, not a general marketplace where anyone can apply.",
      },
    ],
  },
};

export default function WhyDifferent({ landingType = "freelancer" }) {
  const data = content[landingType] || content.freelancer;
  const { heading, rows } = data;

  return (
    <section className="bg-white sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px] mt-16 py-0 lg:py-0 overflow-hidden">
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
        <div className="overflow-hidden rounded-[4px] border border-[#e8ecf1]">
          {rows.map((row, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${
                i !== rows.length - 1 ? "border-b border-[#e8ecf1]" : ""
              }`}
            >
              {/* Left / heading cell */}
              <div className="bg-[#fbfeff] px-6 py-5 md:w-[38%] md:border-r md:border-[#e8ecf1] lg:w-[30%] lg:px-8 lg:py-7">
                <h3 className="text-[17px] font-semibold leading-[1.35] text-[#3b3b3b] lg:text-[30px]">
                  {row.heading}
                </h3>
              </div>

              {/* Right / body cell */}
              <div className="px-6 py-4 md:flex-1 md:py-5 lg:px-10 lg:py-7">
                <p className="text-[16px] font-[300] 2xl:font-[400] sm:text-[22px] leading-[1.55] text-[#6D7587]">
                  {row.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}