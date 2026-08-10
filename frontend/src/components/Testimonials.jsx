import man1 from "../assets/man1.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";
import leftShadow from "../assets/leftShadow.png";
import rightShadow from "../assets/rightShadow.png";

/* Testimonials row. Content switches on landingType.
   Freelancer copy is final. Business copy is placeholder to swap later.
   Center card sits centered; side cards peek and clip at the edges.
   The left/right fade is done with overlay shadow images (not CSS opacity). */

const content = {
  freelancer: {
    heading: {
      line1a: "What Do Freelancers Say About ",
      line1b: "Landing",
      line2a: "Freelance Social Media Jobs",
      line2b: " on SMM Hiring?",
    },
    items: [
      {
        avatar: man1,
        name: "Ravi K.",
        role: "Short-Form Video",
        quote:
          "I used to pitch twelve clients a week and land one. Now the jobs come to me. Nine short-form video projects in three months, zero cold proposals.",
      },
      {
        avatar: man2,
        name: "Simone A.",
        role: "Freelance Copywriter",
        quote:
          "The defined scope is the difference. If a client wants more, that's a new job. My revenue per project is up 40%.",
      },
      {
        avatar: man3,
        name: "Marco D.",
        role: "Freelance Community Manager",
        quote:
          "The screening cut the noise. I get jobs in my lane, and the clients are already verified before I ever talk to them.",
      },
    ],
  },

  // Placeholder business copy, written to be swapped later
  business: {
    heading: {
      line1a: "What Do Businesses Say About ",
      line1b: "Hiring",
      line2a: "Social Media Talent",
      line2b: " on SMM Hiring?",
    },
    items: [
      {
        avatar: man1,
        name: "Alicia R.",
        role: "Restaurant Owner",
        quote:
          "I posted one brief and had matched, screened applicants the same week. No sifting through hundreds of cold proposals.",
      },
      {
        avatar: man2,
        name: "James P.",
        role: "Agency Founder",
        quote:
          "Scope is set before anyone applies, so the people I review already understand the job. Hiring went from weeks to days.",
      },
      {
        avatar: man3,
        name: "Nadia H.",
        role: "Med Spa Director",
        quote:
          "Everyone here does social media, so I'm not wading through unrelated freelancers. The shortlist actually fits.",
      },
    ],
  },
};

function Card({ item }) {
  return (
    <div className="flex h-full flex-col rounded-[16px] border border-[#9b9898] bg-white px-7 py-9 shadow-[0_8px_24px_rgba(15,23,42,0.05)] lg:px-12 lg:py-10">
      <div className="flex items-center gap-4 b">
        <img
          src={item.avatar}
          alt={item.name}
          className="h-15 w-15 flex-shrink-0 rounded-full object-cover ring-2 ring-black lg:h-[60px] lg:w-[60px]"
        />
        <div>
          <p className="text-[17px] text-[#12131a] lg:text-[22px]">
            {item.name}
          </p>
          <p className="text-[13px] font-[200] lg:text-[16px]">{item.role}</p>
        </div>
      </div>
      <p className="mt-6 text-[15px] leading-[1.75] text-[#3d4149] lg:text-[17px]">
        {item.quote}
      </p>
    </div>
  );
}

export default function Testimonials({ landingType = "freelancer" }) {
  const data = content[landingType] || content.freelancer;
  const { heading, items } = data;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-20 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        {/* Heading */}
        <h2
          className="
            text-center
            font-semibold
            text-black
            leading-8
            lg:leading-[1.28]
            text-[26px] sm:text-[38px] lg:text-[44px]
          "
        >
          <span className="block">
            {heading.line1a}
            <span className="text-[#12b3ef]">{heading.line1b}</span>
          </span>
          <span className="block">
            <span className="text-[#12b3ef]">{heading.line2a}</span>
            {heading.line2b}
          </span>
        </h2>

        {/* Cards row — center centered, side cards peek and clip.
            Fade at the edges comes from overlay shadow images. */}
        <div className="relative mt-10 overflow-hidden lg:mt-14">
          <div className="flex items-stretch justify-center gap-6 py-2">
            {items.map((item, i) => (
              <div
                key={i}
                className="w-[75%] flex-shrink-0 sm:w-[62%] lg:w-[42%] xl:w-[38%] 2xl:w-[34%]"
              >
                <Card item={item} />
              </div>
            ))}
          </div>

          {/* Edge fade overlays */}
          <img
            src={leftShadow}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-[-10%] z-10 h-full w-[28%] sm:w-[34%] lg:w-[30%]"
          />
          <img
            src={rightShadow}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-[-10%] z-10 h-full w-[28%] sm:w-[34%] lg:w-[30%]"
          />
        </div>
      </div>
    </section>
  );
}