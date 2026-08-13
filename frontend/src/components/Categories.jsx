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
    {/* Pencil body */}
    <path
      d="M8.2 17.8L14.8 6.3L18.2 8.3L11.6 19.8L8.2 17.8Z"
      stroke="#12b3ef"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />

    {/* Sharp wooden tip */}
    <path
      d="M8.2 17.8L6.8 21L11.6 19.8"
      stroke="#12b3ef"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />

    {/* Graphite point */}
    <path
      d="M6.8 21L8.2 20.65"
      stroke="#12b3ef"
      strokeWidth="1.4"
      strokeLinecap="round"
    />

    {/* Pencil top */}
    <path
      d="M14.8 6.3L16.2 4L19.6 6L18.2 8.3"
      stroke="#12b3ef"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />

    {/* Pencil detail */}
    <path
      d="M13.8 8.1L17.2 10.1"
      stroke="#12b3ef"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);
const IconGrowth = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
    <path d="M4 18l5-5 3 3 7-7" stroke="#12b3ef" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 8h4v4" stroke="#12b3ef" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Shared style for inline links inside item descriptions
const descLink =
  "text-inherit underline underline-offset-2 hover:text-[#12b3ef]";

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

  business: {
    heading: {
      before: "What Roles Can ",
      accent: "You Hire Through",
      after: " SMM Hiring?",
    },
    sub: "Post the role once, tell us the spec, and we'll match you to candidates in that specialization. Roles we hire for:",
    items: [
      {
        Icon: IconWindow,
        title: "Content & Copy",
        desc: (
          <>
            Hire Social Media Manager,{" "}
            <Link
              to="/business-services/hire-content-writer-copywriter/"
              className={descLink}
            >
              Hire Content Writers & Copywriters
            </Link>
            , Hire Community Manager, Hire Marketing Analytics Expert
          </>
        ),
      },
      {
        Icon: IconVideo,
        title: "Video & Audio",
        desc: "Hire Video Editor, Hire Short Form Video Editor, Hire Podcast Producer, Hire Voice Over Artist",
      },
      {
        Icon: IconDesign,
        title: "Design & Development",
        desc: "Hire Graphic Designer, Hire Web Designer & Developer, Hire App Developer",
      },
      {
        Icon: IconGrowth,
        title: "Growth & Strategy",
        desc: (
          <>
            <Link
              to="/business-services/hire-paid-social-ads-expert/"
              className={descLink}
            >
              Hire Paid Social Ads Expert
            </Link>
            , Hire Marketing Consultant
          </>
        ),
      },
    ],
    note: "Not sure which role fits the work? Post it as-is and we'll help define it.",
    footer: {
      title: "Looking to freelance instead?",
      lead: "Head over to the Freelancer side to Apply as a Freelancer",
      linkText: "",
      linkTo: "",
      tail: "",
    },
  },
};

export default function Categories({ landingType = "freelancer" }) {
  const data = content[landingType] || content.freelancer;
  const { heading, sub, items, note, footer } = data;

  return (
    <section className="bg-white py-15 lg:py-20 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
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
            <span className=" font-semibold  text-[#12b3ef]">
              {heading.accent}
            </span>
            {heading.after}
          </h2>

          {/* Subtext */}
          <p className="mt-4 max-w-[900px] 2xl:max-w-[1140px] text-[20px] leading-[1.8] text-[#474747] lg:text-[20px]">
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
                  <h3 className="text-[17px]  text-[#1b1e24] lg:text-[24px]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-[1.55] text-[#6D7587] lg:text-[18px]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Optional note (business only) */}
          {note && (
            <p className="mt-8 text-[14px] leading-[1.6] text-[#6D7587] lg:mt-10 lg:text-[18px]">
              {note}
            </p>
          )}
        </div>

        {/* Footer strip */}
        <div className="border-t border-[#cfe6f5] px-6 py-6 sm:px-10 lg:px-14">
          <p className="text-[15px]  text-[#12b3ef] lg:text-[22px]">
            {footer.title}
          </p>
          <p className="mt-1 font-[300] text-[14px] leading-[1.6] text-[#4b515c] lg:text-[17px]">
            {footer.lead}
            {footer.linkText && (
              <Link
                to={footer.linkTo}
                className="font-medium text-[#1b1e24] underline underline-offset-2 hover:text-[#12b3ef]"
              >
                {footer.linkText}
              </Link>
            )}
            {footer.tail}
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}