import {
  Target,
  Clock,
  Handshake,
  SlidersHorizontal,
  Users,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const BLUE = "#0BA5EC";

const features = [
  {
    icon: Target,
    title: "Community Management Services Matched to Your Needs",
    body: (
      <>
        Matches are based on your{" "}
        <span className="font-[600] text-gray-800">
          business, audience, platforms, workload, and goals
        </span>
        , so you get a community manager who fits your specific requirements
        and{" "}
        <span className="font-[600] text-gray-800">
          Customer Community Management
        </span>{" "}
        needs.
      </>
    ),
  },
  {
    icon: Clock,
    title: "Less Time Screening Community Managers",
    body: (
      <>
        Spend less time comparing profiles and more time choosing the right
        person. SMM Hiring helps you focus on community managers with
        relevant experience, skills, and the right fit for your{" "}
        <span className="font-[600] text-gray-800">
          Brand Community Management
        </span>{" "}
        needs.
      </>
    ),
  },
  {
    icon: Handshake,
    title: "Direct Access to Your Online Community Manager",
    body: (
      <>
        Work directly with your community manager without an agency layer
        between you and the person doing the work. Keep communication clear,
        direct, and focused on your community.
      </>
    ),
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Community Management Support",
    body: (
      <>
        Hire for a specific project, ongoing engagement, or long-term
        community management. Choose the level of support that fits your
        current needs and adjust as your community grows. This can include
        ongoing{" "}
        <span className="font-[600] text-gray-800">
          Community Engagement Services
        </span>{" "}
        when your audience needs regular attention.
      </>
    ),
  },
];

/* ── zigzag timeline (matches the "Who actually hires" pattern) ── */
const FeatureContent = ({ feature, index, align }) => (
  <div
    className={`group max-w-[420px] rounded-[18px] border border-gray-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#0BA5EC]/25 hover:shadow-[0_16px_30px_-16px_rgba(11,165,236,0.3)] lg:p-6 ${
      align === "right" ? "ml-auto text-right" : "mr-auto text-left"
    }`}
  >
    <span
      className="text-[11px] font-[700] tracking-[0.08em] transition-colors duration-300"
      style={{ color: BLUE }}
    >
      {String(index + 1).padStart(2, "0")}
    </span>
    <h3 className="mt-1 text-[16px] font-[700] leading-snug text-gray-900 sm:text-[17.5px]">
      {feature.title}
    </h3>
    <p className="mt-1.5 text-[13.5px] font-[350] leading-[1.6] text-gray-500 sm:text-[14.5px] sm:leading-[1.7]">
      {feature.body}
    </p>
  </div>
);

const FeatureTimeline = () => (
  <div className="mt-12 sm:mt-16">
    {/* mobile / tablet: left-rail timeline */}
    <div className="relative md:hidden">
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#0BA5EC]/40 via-gray-200 to-transparent" />
      <div className="flex flex-col gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="group relative flex gap-4">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_-4px_rgba(11,165,236,0.35)] ring-2 ring-[#0BA5EC]/25 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0BA5EC] group-hover:shadow-[0_8px_20px_-6px_rgba(11,165,236,0.55)] group-active:scale-110 group-active:bg-[#0BA5EC]">
                <Icon className="h-[18px] w-[18px] text-[#0BA5EC] transition-colors duration-300 group-hover:text-white group-active:text-white" strokeWidth={2} />
              </span>
              <div className="pt-0.5">
                <span className="text-[11px] font-[700] tracking-[0.08em]" style={{ color: BLUE }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-0.5 text-[15.5px] font-[700] leading-snug text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[13.5px] font-[350] leading-[1.6] text-gray-500">
                  {feature.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* desktop: alternating zigzag timeline */}
    <div className="relative hidden md:block">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        const isLeft = index % 2 === 0;
        return (
          <div key={feature.title} className="group grid grid-cols-[1fr_64px_1fr] lg:grid-cols-[1fr_72px_1fr]">
            <div className={`flex items-center py-5 ${isLeft ? "justify-end pr-8 lg:pr-10" : ""}`}>
              {isLeft && <FeatureContent feature={feature} index={index} align="right" />}
            </div>

            <div className="relative flex justify-center">
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gray-200" />
              <span className="relative z-10 my-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_-8px_rgba(11,165,236,0.4)] ring-2 ring-[#0BA5EC]/25 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0BA5EC] group-hover:shadow-[0_12px_26px_-8px_rgba(11,165,236,0.55)] lg:h-[54px] lg:w-[54px]">
                <Icon className="h-5 w-5 text-[#0BA5EC] transition-colors duration-300 group-hover:text-white lg:h-[22px] lg:w-[22px]" strokeWidth={2} />
              </span>
            </div>

            <div className={`flex items-center py-5 ${!isLeft ? "justify-start pl-8 lg:pl-10" : ""}`}>
              {!isLeft && <FeatureContent feature={feature} index={index} align="left" />}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

/* ── compact two-panel closing banner: icon panel + condensed message + one CTA ── */
const chips = [
  "Custom site design",
  "Community pages",
  "Comment moderation",
  "DM response",
  "Sentiment tracking",
  "Ongoing support",
];

const ClosingBanner = ({ cta }) => (
  <div className="relative overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.2)] sm:rounded-[28px] lg:flex">
    {/* ── icon panel ── */}
    <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0BA5EC] to-[#0284c7] px-6 py-8 sm:py-10 lg:w-[280px] lg:shrink-0 lg:py-0 xl:w-[320px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

      <div className="relative flex items-center gap-3">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm ring-1 ring-white/25 sm:h-16 sm:w-16">
          <MessageCircle className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={2} />
        </span>
        <span className="h-px w-6 bg-white/40" />
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm ring-1 ring-white/25 sm:h-16 sm:w-16">
          <Users className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={2} />
        </span>
      </div>
    </div>

    {/* ── content panel ── */}
    <div className="flex-1 p-6 sm:p-8 lg:p-10">
     

      <h3 className="mt-3 text-[19px] font-[700] leading-[1.35] text-gray-900 sm:text-[23px] lg:text-[25px]">
        Need a website that gives your community a better place to connect
        with your brand?
      </h3>

      <p className="mt-3 max-w-4xl 2xl:max-w-5xl text-[13.5px] font-[350] leading-[1.7] text-gray-500 sm:text-[15px]">
        You can{" "}
        <Link
          to="/business-services/hire-web-designer-developer/"
          className="font-[600] underline underline-offset-2 hover:opacity-80"
          style={{ color: BLUE, textDecorationColor: "#8ed3f6" }}
        >
          hire a web designer &amp; developer
        </Link>{" "}
        to build a site that supports your audience and keeps your brand
        experience consistent.
      </p>

      <p className="mt-3 max-w-4xl 2xl:max-w-5xl text-[13.5px] font-[350] leading-[1.7] text-gray-500 sm:text-[15px]">
        Spend less time comparing profiles and more time choosing the right
        person. SMM Hiring helps you find a Community Manager for Business
        with relevant experience, skills, and the right fit for your brand.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11.5px] font-[500] text-gray-600"
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-col items-start gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] font-[500] text-gray-400 sm:text-[13.5px]">
          {cta.note}
        </p>
        <Link
          to={cta.href}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[13.5px] font-[600] text-white shadow-[0_10px_24px_-10px_rgba(11,165,236,0.6)] transition-all duration-300 hover:shadow-[0_14px_30px_-10px_rgba(11,165,236,0.7)] hover:-translate-y-0.5 sm:w-auto"
          style={{ backgroundColor: BLUE }}
        >
          {cta.label}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  </div>
);

const WhyChooseCommunityManagement = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
       
        {/* Heading */}
        <h2 className="mt-4 max-w-4xl text-[26px] sm:text-[40px] lg:text-[52px] 2xl:text-[54px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
          Why Choose SMM Hiring for{" "}
          <span style={{ color: BLUE }}>Community Management</span>?
        </h2>

        {/* Intro */}
        <p className="mt-5 max-w-3xl text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
          Finding the right community manager shouldn't mean spending hours
          going through applications.{" "}
          <span className="font-[600] text-gray-800">
            SMM Hiring makes the search simpler by matching you with people
            who fit the actual work.
          </span>
        </p>

        {/* ── Feature timeline ── */}
        <FeatureTimeline />

        {/* ── Closing banner: icon panel + condensed message + single CTA ── */}
        <div className="mt-10 sm:mt-14">
          <ClosingBanner
            cta={{
              note: "One team, matched to fit — from your community to your website.",
              label: "Hire a Web Designer",
              href: "/business-services/hire-web-designer-developer/",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCommunityManagement;