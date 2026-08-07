import { Link } from "react-router-dom";
import arrowIcon from "../assets/Arrow.png";

const CONTENT = {
  freelancer: {
    titleLine1: "Why Does Applying for Freelance Social",
    titleLine2: "Media Jobs Feels Like a Dead End",
    subtitle:
      "Most freelancers run into the same five things before they ever get to do the work:",
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
        text: "You can't always tell who's on the other end. Without screening, you might put real time into a proposal for a job that was never going to pay out in the first place.",
      },
    ],
    footer: "The work isn't the problem. Getting to work is.",
  },
  business: {
    titleLine1: "Why Does Hiring Freelance Social",
    titleLine2: "Media Help Feels Like a Dead End",
    subtitle:
      "Most businesses run into the same five things before they ever get the work started:",
    points: [
      {
        text: "Your job post disappears into a pile of applicants. You list an opening for a freelance social media manager, and unless you sift through every proposal yourself, you have no idea who's actually a fit.",
      },
      {
        text: "Every search for a freelance social media manager means starting from zero. No hiring platform remembers what your brand needs, so every new opening for social media freelance help begins with the same blank screening process.",
      },
      {
        text: "The proposal leaves out the parts you actually need. Scope, turnaround, rate, none of it is spelled out, so you're comparing candidates blind and sorting out mismatched expectations only after you've already committed.",
      },
      {
        text: "Price does most of the deciding, not fit. Dozens of freelancers bid on the same",
        linkText: "remote social media jobs",
        after: ", and the lowest number tends to win even over a stronger portfolio.",
      },
      {
        text: "You can't always tell who you're hiring. Without verification, you might commit budget to someone who was never going to deliver in the first place.",
      },
    ],
    footer: "The talent isn't the problem. Finding it is.",
  },
};

export default function PainPoints({ landingType = "freelancer" }) {
  const data = CONTENT[landingType] ?? CONTENT.freelancer;

  return (
    <section className="bg-white mt-16 py-0 lg:py-0 overflow-hidden">
      {/* Header */}
      <div className="px-5 sm:px-10 lg:px-[78px] mb-6 lg:mb-8">
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
                  className="mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"
                />
                <p className="text-[18px] leading-relaxed text-slate-700">
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