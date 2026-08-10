import { Link } from "react-router-dom";
import Arrow from "../assets/Arrow.png";

/* "Built for / Skip it" section. Content switches on landingType.
   Freelancer copy is final. Business copy is placeholder to swap later. */

const content = {
  freelancer: {
    heading: {
      pre: "Who Is SMM Hiring Built For, and ",
      accent: "Who Should Skip It",
    },
    subBold: "Running a business and need this kind of work done instead of applying for it?",
    lead: "Head over to the Business side to ",
    linkText: "Hire Web Designer & Developer",
    linkTo: "/business-services/hire-web-designer-developer/",
    tail: " or Hire an App Developer.",
    worksTitle: "This works if you:",
    works: [
      "Scope defined befWant steady freelance social media jobs rather than one gig that dries up next monthore you start",
      "Would rather hand over finished work than send daily status updates",
      "Only want SMM jobs that match your specialization",
    ],
    skipTitle: "This isn't for you if you:",
    skip: [
      "Don't have a portfolio yet",
      "Would rather bid on general marketplace jobs across every category",
      "Prefer a long sales call before starting the actual work",
    ],
  },

  // Placeholder business copy, written to be swapped later
  business: {
    heading: {
      pre: "Who Is SMM Hiring Built For, and ",
      accent: "Who Should Skip It",
    },
    subBold: "A freelancer and want to get matched to this kind of work instead of hiring for it?",
    lead: "Head over to the Freelancer side to ",
    linkText: "Find Social Media Jobs",
    linkTo: "/freelance-social-media-jobs/",
    tail: " or browse open roles.",
    worksTitle: "This works if you:",
    works: [
      "Want briefs scoped before anyone applies, not endless back and forth",
      "Would rather review matched applicants than sift through cold proposals",
      "Only want social media talent, not a general marketplace",
    ],
    skipTitle: "This isn't for you if you:",
    skip: [
      "Aren't ready to define the deliverable yet",
      "Would rather post to a broad marketplace across every category",
      "Prefer long negotiations before the work begins",
    ],
  },
};

function ListItem({ text, muted }) {
  return (
    <li className="flex items-start gap-3">
      <img
        src={Arrow}
        alt=""
        aria-hidden="true"
        className={`mt-1 h-4 w-4 flex-shrink-0 lg:h-[24px] lg:w-[24px] ${
          muted ? "grayscale opacity-80" : ""
        }`}
      />
      <span className="text-[15px] leading-[1.55] text-[#3d4149] lg:text-[19px]">
        {text}
      </span>
    </li>
  );
}

export default function BuiltFor({ landingType = "freelancer" }) {
  const data = content[landingType] || content.freelancer;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-20 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-0">
          {/* Left column */}
          <div className="lg:pr-12 xl:pr-16">
            <h2 className="font-semibold leading-[1.2] text-black text-[30px] sm:text-[36px] lg:text-[42px]">
              {data.heading.pre}
              <span className="text-[#12b3ef]">{data.heading.accent}</span>?
            </h2>

            <p className="mt-5 text-[15px] font-[500] leading-[1.5] text-black sm:text-[16px] lg:text-[22px]">
              {data.subBold}
            </p>

            <p className="mt-3 text-[14px] leading-[1.6] text-[#8a9099] font-[300] sm:text-[15px] lg:text-[20px]">
              {data.lead}
              <Link
                to="/business-services/hire-web-designer-developer/"
                className="text-[#8a9099] underline underline-offset-2 hover:text-[#12b3ef]"
              >
                {data.linkText}
              </Link>
              {data.tail}
            </p>
          </div>

          {/* Right column */}
          <div className="lg:border-l lg:border-[#d7d7d7] lg:pl-12 xl:pl-16">
            {/* Works */}
            <h3 className="text-[17px] font-[500] text-black lg:text-[24px]">
              {data.worksTitle}
            </h3>
            <ul className="mt-5 space-y-5 lg:space-y-8">
              {data.works.map((t, i) => (
                <ListItem key={i} text={t} />
              ))}
            </ul>

            {/* Divider */}
            <div className="my-8 border-t border-[#d7d7d7] lg:my-10" />

            {/* Skip */}
            <h3 className="text-[17px] font-[500] text-black lg:text-[23px]">
              {data.skipTitle}
            </h3>
            <ul className="mt-5 space-y-5 lg:space-y-8">
              {data.skip.map((t, i) => (
                <ListItem key={i} text={t} muted />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}