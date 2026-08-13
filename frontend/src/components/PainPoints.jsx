import { Link } from "react-router-dom";
import arrowIcon from "../assets/Arrow.png";

const CONTENT = {
  freelancer: {
    titleLine1: "Why Does Applying for Freelance Social",
    titleLine2: "Media Jobs Feels Like a Dead End",
    subtitle:
      "Most freelancers looking for freelance social media manager jobs, digital marketing work, video editing, or design work run into the same five things before they ever get to do the work:",
    points: [
      {
        text: "Your SMM application goes into a queue and stays there. You submit a proposal for a freelance social media manager job, and unless you happen to hear back, you have no idea if anyone even opened it.",
      },
      {
        text: "Every application means writing the same pitch again. No social media freelance platform remembers what you specialize in, so every freelance social media manager and digital marketing job starts with the same blank page.",
      },
      {
        text: "The job post leaves out the parts you actually need. Deliverable, timeline, rate, none of it is spelled out, so you're applying blind and figuring out defined grief only after you've already committed.",
      },
      {
        text: "Price does most of the deciding, not skill. Dozens of people bid on the same",
        linkText: "remote social media jobs",
        after: ", and the lowest number tends to win even over a stronger portfolio.",
      },
      {
        text: "You can't always tell who's on the other end. Without screening, you put real time into proposals for jobs that were never going to pay out.",
      },
    ],
    footer: "Doing the work is easy. Getting to it is the hard part.",
  },
  business: {
    titleLine1: " Why Does Hiring the Right Talent",
    titleLine2: "Feel Like a Full-Time Job?",
    subtitle:
      "Most businesses run into the same five things before they ever get to hire a social media manager or any specialist who actually works out:",
    points: [
      {
        text: "The inbox fills up with the wrong people. You post a role for a remote social media manager, and forty applicants come in the first week. Ten look decent on paper. Two make it to a screening call, and neither is close to what you needed.",
      },
      {
        text: "Every hire starts from scratch. No agency or social media management company keeps a record of who you tried, what worked, or what didn't. So you rewrite the job post, chase new references, and repeat the whole thing. The role changes. The process doesn't.",
      },
      {
        text: "The portfolio only shows the highlights. Three polished pieces, no context. You have no idea how they actually work, whether they hit deadlines, or if the client would hire them again.",
      },
      {
        text: "Agencies price a team you didn't ask for. You wanted to outsource social media management to one dedicated social media manager, or bring on a single content writer for a landing page. You got a $4,000-a-month retainer, an account manager, a strategist, and a junior doing the actual work.",
        
      },
      {
        text: "You can't always tell who's serious. Freelancer marketplaces are full of profiles that look polished until the call. Whether you're trying to hire a social media marketer, hire a digital marketing expert, or hire marketing professionals across a whole account, real hours go into calls with people who were never going to work out.",
      },
    ],
    footer: "None of this is really about how to hire a social media expert who fits. It's everything that gets in the way of finding one.",
  },
};

export default function PainPoints({ landingType = "freelancer" }) {
  const data = CONTENT[landingType] ?? CONTENT.freelancer;

  return (
    <section className="bg-white mt-8 sm:mt-16 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px] py-0 lg:py-0 overflow-hidden">
      {/* Header */}
      <div className="px-5 sm:px-10 lg:px-[78px]  mb-6 lg:mb-8">
        <h2 className="text-[32px]  sm:text-[40px] leading-9 lg:leading-14 lg:text-[48px] font-semibold text-gray-900  mb-1.5">
          <span className="block">{data.titleLine1}</span>
          <span className="block text-sky-500">
            {data.titleLine2}
            <span className="text-slate-900">?</span>
          </span>
        </h2>

        <p className="mt-5 sm:text-[19px]  text-slate-500">{data.subtitle}</p>
      </div>

      {/* Content */}
      <div className="px-5 sm:px-10 lg:px-[78px] mb-6 lg:mb-8">
        <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-white to-sky-50 p-5 sm:p-8">
          <ul className="space-y-6 sm:space-y-7">
            {data.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 sm:gap-4">
                <img
                  src={arrowIcon}
                  alt=""
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 sm:h-6 sm:w-6 flex-shrink-0"
                />
                <p className="text-[17px] leading-relaxed text-slate-700">
                  {point.text}
                  {point.linkText && (
                    <>
                      {" "}
                       <Link
                        to="/remote-marketing-freelance-jobs"
                        className="text-sky-600 underline underline-offset-2 hover:text-sky-700"
                      >
                        {point.linkText}
                      </Link>
                    </>
                  )}
                  {point.after}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-5 xl:text-[16px] 2xl:text-[16px]">{data.footer}</p>
      </div>
    </section>
  );
}