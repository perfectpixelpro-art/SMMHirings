import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Repeat2 } from "lucide-react";
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
    notes: ["Free to apply", "No subscription", "Response within 3 business days"],
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
    notes: ["Free to post", "No setup fee", "Shortlist in 48 hours"],
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
      {/* soft accent glow behind the heading */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[560px] -translate-x-1/2 rounded-full bg-[#35bdf2]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-[1700px] px-6 py-12 text-center sm:px-10 sm:py-16 md:px-10 lg:px-[78px] lg:py-10">
        {/* Heading */}
        <h2 className="font-bold leading-[1.22] text-white text-[26px] sm:text-[38px] lg:text-[48px]">
          <span className="block">
            {data.line1a}
            <span className="font-bold text-[#35bdf2]">{data.accent}</span>
          </span>
          {data.line2 && <span className="block">{data.line2}</span>}
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-4 max-w-[480px] text-[13px] leading-[1.7] text-white/70 sm:mt-5 sm:max-w-[650px] sm:text-[15px] lg:text-[16px]">
          {data.sub}
        </p>

        {/* CTA button */}
        <div className="mt-8 sm:mt-9">
          <Link
            to={`/login/${landingType}`}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1aa7ef] to-[#35bdf2] px-9 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(26,167,239,0.35)] transition-all duration-200 hover:shadow-[0_14px_36px_rgba(26,167,239,0.5)] hover:brightness-110 sm:px-8 sm:py-3.5 lg:text-[16px]"
          >
            {data.ctaText}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2.5}
            />
          </Link>
        </div>

        {/* Trust chips */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:mt-6">
          {data.notes.map((note) => (
            <span
              key={note}
              className="inline-flex items-center gap-1.5 text-[11.5px] font-[350] text-white/60 sm:text-[12.5px] lg:text-[13.5px]"
            >
              <CheckCircle2
                className="h-3.5 w-3.5 text-[#35bdf2]"
                strokeWidth={2}
              />
              {note}
            </span>
          ))}
        </div>

        {/* Switch pill */}
        <div className="mt-6 sm:mt-7">
          <button
            type="button"
            onClick={handleSwitch}
            className="mx-auto inline-flex max-w-[85%] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-3 text-center text-[11px] leading-[1.55] text-white/85 backdrop-blur-sm transition hover:border-[#35bdf2]/40 hover:bg-white/[0.07] sm:max-w-[92%] sm:px-5 sm:py-2.5 sm:text-[12px] lg:text-[13px]"
          >
            <Repeat2
              className="h-3.5 w-3.5 shrink-0 text-[#35bdf2]"
              strokeWidth={2}
            />
            {data.pill}
          </button>
        </div>
      </div>

      {/* seamless fade into the footer below */}
      <div className="h-14 bg-gradient-to-b from-transparent to-black sm:h-20" />
    </section>
  );
}