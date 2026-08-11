import { Link } from "react-router-dom";

/* Simple inline icons (no extra dependency) */
const IconWindow = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="#12b3ef" strokeWidth="1.7" />
    <path d="M3 8h18" stroke="#12b3ef" strokeWidth="1.7" />
    <circle cx="6" cy="6" r="0.7" fill="#12b3ef" />
    <circle cx="8.4" cy="6" r="0.7" fill="#12b3ef" />
  </svg>
);
const IconVideo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
    <rect x="3" y="6" width="13" height="12" rx="2" stroke="#12b3ef" strokeWidth="1.7" />
    <path d="M16 10l5-3v10l-5-3v-4z" stroke="#12b3ef" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);
const IconDesign = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
    <path d="M14 4l6 6L9 21H3v-6L14 4z" stroke="#12b3ef" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M12.5 5.5l6 6" stroke="#12b3ef" strokeWidth="1.7" />
  </svg>
);
const IconGrowth = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
    <path d="M4 18l5-5 3 3 7-7" stroke="#12b3ef" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 8h4v4" stroke="#12b3ef" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const content = {
  freelancer: {
    heading: {
      before: "What Types of ",
      accent: "Freelance Social Media Jobs",
      after: " Can You Apply For?",
    },
    sub: "Pick your specialization, complete your SMM Application once, and you'll keep getting matched to freelance social media management jobs in that lane going forward.",
    items: [
      {
        Icon: IconWindow,
        title: "Content & Copy",
        desc: "Social Media Management, Content Writing & Copywriting, Community Management, Analytics & Reporting",
      },
      {
        Icon: IconVideo,
        title: "Video & Audio",
        desc: "Video Production & Editing, Short-Form Videos, Podcast Production, Voice Over & Audio Production",
      },
      {
        Icon: IconDesign,
        title: "Design & Development",
        desc: "Graphic Design & Visual Branding, Website Design & Development, App Design & Development",
      },
      {
        Icon: IconGrowth,
        title: "Growth & Strategy",
        desc: "Paid Social & Ads Management, Consulting & Audits",
      },
    ],
    footer: {
      title: "Looking to hire instead?",
      lead: "Head over to the Business side to ",
      linkText: "Hire Social Media Manager",
      linkTo: "/business-services/hire-social-media-manager/",
      tail: " or Hire a Community Manager.",
    },
  },

  // Placeholder business copy, written to be swapped later
  business: {
    heading: {
      before: "What Types of ",
      accent: "Social Media Talent",
      after: " Can You Hire?",
    },
    sub: "Post one brief, pick the specialization you need, and start reviewing applicants who actually do that kind of social media work.",
    items: [
      {
        Icon: IconWindow,
        title: "Content & Copy",
        desc: "Social Media Managers, Content Writers & Copywriters, Community Managers, Analytics & Reporting",
      },
      {
        Icon: IconVideo,
        title: "Video & Audio",
        desc: "Video Editors, Short-Form Video Creators, Podcast Producers, Voice Over & Audio Talent",
      },
      {
        Icon: IconDesign,
        title: "Design & Development",
        desc: "Graphic Designers & Brand Designers, Web Designers & Developers, App Designers & Developers",
      },
      {
        Icon: IconGrowth,
        title: "Growth & Strategy",
        desc: "Paid Social & Ads Managers, Consultants & Auditors",
      },
    ],
    footer: {
      title: "Looking for work instead?",
      lead: "Head over to the Freelancer side to ",
      linkText: "Find Social Media Jobs",
      linkTo: "/freelance-social-media-jobs/",
      tail: " or browse open roles.",
    },
  },
};

export default function Categories({ landingType = "freelancer" }) {
  const data = content[landingType] || content.freelancer;
  const { heading, sub, items, footer } = data;

  return (
    <section className="bg-white py-20 lg:py-20 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        <div className="overflow-hidden rounded-[22px] border border-[#cfe6f5] bg-[#f5fcff]">
        {/* Body */}
        <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
          {/* Heading */}
          <h2 className="
          max-w-[840px]
            font-semibold
            text-black
            leading-8
            lg:leading-[1.28]
            text-[32px] sm:text-[40px] lg:text-[48px]">
            {heading.before}
            <span className="font-serif font-[300] italic text-[#12b3ef]">
              {heading.accent}
            </span>
            {heading.after}
          </h2>

          {/* Subtext */}
          <p className="mt-4 max-w-[940px] 2xl:max-w-[1140px] text-[20px] leading-[1.8] text-[#474747] lg:text-[22px]">
            {sub}
          </p>

          {/* Items */}
          <div className="mt-8 space-y-7 lg:mt-10 lg:space-y-18">
            {items.map(({ Icon, title, desc }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex h-18 w-18 flex-shrink-0 items-center justify-center rounded-[10px] border border-[#78d4f6] bg-[#f8fdff]">
                  <Icon />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-[17px]  text-[#1b1e24] lg:text-[26px]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-[1.55] text-[#6D7587] lg:text-[19px]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer strip */}
        <div className="border-t border-[#cfe6f5] px-6 py-6 sm:px-10 lg:px-14">
          <p className="text-[15px]  text-[#12b3ef] lg:text-[22px]">
            {footer.title}
          </p>
          <p className="mt-1 font-[300] text-[14px] leading-[1.6] text-[#4b515c] lg:text-[17px]">
            {footer.lead}
            <Link
              to={footer.linkTo}
              className="font-medium text-[#1b1e24] underline underline-offset-2 hover:text-[#12b3ef]"
            >
              {footer.linkText}
            </Link>
            {footer.tail}
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
