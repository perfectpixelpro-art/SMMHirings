import { Link } from "react-router-dom";
import bgFotter from "../assets/bgFotter.png";

/* Bottom CTA banner. Content switches on landingType.
   The bottom pill flips the landing type via setLandingType. */

const content = {
  freelancer: {
    line1a: "Ready to Apply for Freelance Social Media Jobs",
    accent: "",
    line2: (
      <>
        and Stop Pitching{" "}
        <span className="font-bold text-[#35bdf2]">for Good?</span>
      </>
    ),
    sub: "Apply for SMM jobs once, get matched to remote social media jobs in your lane, and get to work on things you're actually paid for.",
    ctaText: "Apply as a Freelancer",
    ctaHref: "/freelancer/apply",
    note: "Free to apply. No subscription. Response within 3 business days.",
    pill: "Looking to hire freelancers instead? Switch to Business to hire social media freelancers on demand.",
    switchTo: "business",
  },

  business: {
    line1a: "Ready to Hire Without the ",
    accent: "Agency Markup?",
    line2: "",
    sub: "Post the role once, review a screened shortlist, and hire a social media manager, a video editor, or the specialist your business actually needs. No cold pitching, no bidding, no team you didn't ask for.",
    ctaText: "Post a Role",
    ctaHref: "/business/post-job",
    note: "Free to post. No setup fee. Shortlist in 48 hours.",
    pill: "Looking for social media work instead? Switch to Freelancer to get matched to jobs in your lane.",
    switchTo: "freelancer",
  },
};

export default function FooterCTA({ landingType = "freelancer", setLandingType }) {
  const data = content[landingType] || content.freelancer;

  const handleSwitch = () => {
    if (typeof setLandingType === "function") {
      setLandingType(data.switchTo);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative bg-[#121212]"
      style={{
        backgroundColor: "#121212",
        backgroundImage: `url(${bgFotter})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "100% auto",
      }}
    >
      <div className="mx-auto max-w-[1700px] px-6 py-12 text-center sm:px-10 sm:py-16 md:px-10 lg:px-[78px] lg:py-10">
        {/* Heading */}
        <h2 className="font-bold leading-[1.22] text-white text-[26px] sm:text-[38px] lg:text-[48px]">
          <span className="block">
            {data.line1a}
            <span className="font-bold  text-[#35bdf2]">
              {data.accent}
            </span>
          </span>
          {data.line2 && <span className="block">{data.line2}</span>}
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-4 max-w-[480px] text-[13px] leading-[1.7] text-white/90 sm:mt-5 sm:max-w-[650px] sm:text-[15px] lg:text-[16px]">
          {data.sub}
        </p>

        {/* CTA button */}
        <div className="mt-7 sm:mt-8">
          <Link
            to={`/login/${landingType}`}
            className="inline-flex items-center justify-center rounded-[8px] bg-[#1aa7ef] px-8 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#0f97dc] sm:px-7 sm:py-3 lg:text-[16px]"
          >
            {data.ctaText}
          </Link>
        </div>

        {/* Note */}
        <p className="mt-4 text-[11px] font-[300] text-white/70 sm:mt-5 sm:text-[12px] lg:text-[14px]">
          {data.note}
        </p>

        {/* Switch pill */}
        <div className="mt-5 sm:mt-6">
          <button
            type="button"
            onClick={handleSwitch}
            className="mx-auto inline-flex max-w-[85%] items-center justify-center rounded-full border border-white/15 bg-[#102e3a] px-4 py-3 text-center text-[11px] leading-[1.55] text-white transition hover:border-white/30  sm:max-w-[92%] sm:px-5 sm:py-2.5 sm:text-[12px] lg:text-[13px]"
          >
            {data.pill}
          </button>
        </div>
      </div>
    </section>
  );
}