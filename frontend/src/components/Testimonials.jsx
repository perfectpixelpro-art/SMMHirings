import { useRef, useLayoutEffect } from "react";
import man1 from "../assets/man1.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";
import man4 from "../assets/man4.png";
import man5 from "../assets/man5.png";
import man6 from "../assets/man6.png";
import leftShadow from "../assets/leftShadow.png";
import rightShadow from "../assets/rightShadow.png";

/* Testimonials row. Content switches on landingType.
   Freelancer copy is final. Business copy is placeholder to swap later.
   Cards move continuously (marquee) with no break. The cards are
   duplicated to fill the loop; card SIZES are unchanged (same width
   classes and same padded container as before).
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
      line2a: "Through",
      line2b: " SMM Hiring?",
    },
    items: [
      {
        avatar: man6,
        name: "Priya M.",
        role: "Marketing Lead, DTC Skincare Brand",
        quote:
          "We spent six weeks trying to hire a video editor through our usual channels. On SMM Hiring, the shortlist came back in three days and we hired one of the first three we met.",
      },
      {
        avatar: man5,
        name: "Daniel R.",
        role: "Founder, B2B SaaS",
        quote:
          "The screening is the whole point. Every candidate I met was actually a fit. I didn't waste a single interview on someone who couldn't do the work.",
      },
      {
        avatar: man4,
        name: "Alicia T.",
        role: "E-commerce Owner",
        quote:
          "Cheaper than an agency retainer and I got a person who actually knew our brand voice by week two. That doesn't happen with an account manager sitting between us.",
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

  // Render TWO identical halves. Sizes stay identical to the original
  // because the row still lives inside the same padded container and the
  // card wrappers keep the same width classes. We loop by translating the
  // track by exactly one half's measured width, so the seam is invisible.
  const half = [...items, ...items]; // duplicate so a half fills wide screens
  const marqueeItems = [...half, ...half];

  const trackRef = useRef(null);
  const animRef = useRef(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const start = () => {
      if (animRef.current) animRef.current.cancel();
      const half = track.scrollWidth / 2; // width of one identical half, in px
      if (!half) return;
      // pixels-per-second — tweak to taste (lower = slower)
      const speed = 60;
      const duration = (half / speed) * 1000;
      animRef.current = track.animate(
        [
          { transform: "translateX(0px)" },
          { transform: `translateX(-${half}px)` },
        ],
        { duration, iterations: Infinity, easing: "linear" }
      );
    };

    start();
    const onResize = () => start();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (animRef.current) animRef.current.cancel();
    };
  }, [landingType]);

  const pause = () => animRef.current && animRef.current.pause();
  const play = () => animRef.current && animRef.current.play();

  return (
    <section className="bg-white py-10 sm:py-20 lg:py-20 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
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

        {/* Cards row — continuous marquee. Sizes unchanged (same container,
            same width classes). Fade at the edges comes from overlay images. */}
        <div className="relative mt-10 overflow-hidden lg:mt-14">
          <div
            ref={trackRef}
            onMouseEnter={pause}
            onMouseLeave={play}
            className="flex w-full items-stretch gap-6 py-2"
          >
            {marqueeItems.map((item, i) => (
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