import { useEffect, useRef } from "react";

// ─── Card Data ─────────────────────────────────────────────────────────────────

const FREELANCER_CARDS = [
  {
    id: "fl-1",
    title: "Google Ads Specialist",
    type: "Hourly · Posted 2 days ago",
    hours: "30+ hrs/week",
    level: "Intermediate",
    desc: "Full-Time Google Ads & Meta Ads Specialist (Media Buyer & Mentor). Company: Dream Team Improvements. Remote-friendly.",
  },
  {
    id: "fl-2",
    title: "Social Media Manager – E-commerce",
    type: "Hourly · Posted 1 day ago",
    hours: "20 hrs/week",
    level: "Entry Level",
    desc: "Creative SMM needed to manage Instagram, TikTok and Pinterest for a growing DTC skincare brand. Must know Canva and scheduling tools.",
  },
  {
    id: "fl-3",
    title: "Facebook Ads Campaign Manager",
    type: "Fixed Price · Posted 3 days ago",
    hours: "10 hrs/week",
    level: "Expert",
    desc: "Experienced Facebook Ads manager needed for lead-gen campaigns for a real estate client. ROAS target 4x minimum, budget $5k/mo.",
  },
  {
    id: "fl-4",
    title: "LinkedIn Content Creator",
    type: "Hourly · Posted 5 days ago",
    hours: "15 hrs/week",
    level: "Intermediate",
    desc: "B2B SaaS startup seeking a LinkedIn ghostwriter for 3 thought-leadership posts per week for our CEO. Must understand tech & startup culture.",
  },
  {
    id: "fl-5",
    title: "TikTok Ads Specialist",
    type: "Hourly · Posted 1 day ago",
    hours: "25 hrs/week",
    level: "Intermediate",
    desc: "Fast-growing fashion brand needs a TikTok Ads expert to manage paid campaigns. Experience with spark ads and creative testing required.",
  },
  {
    id: "fl-6",
    title: "Email Marketing Specialist",
    type: "Fixed Price · Posted 4 days ago",
    hours: "10 hrs/week",
    level: "Intermediate",
    desc: "Klaviyo expert needed to build and optimise email flows for a Shopify store. Proven experience with abandoned cart and post-purchase sequences.",
  },
  {
    id: "fl-7",
    title: "YouTube Channel Manager",
    type: "Hourly · Posted 6 days ago",
    hours: "20 hrs/week",
    level: "Entry Level",
    desc: "Manage our YouTube channel — scheduling uploads, writing descriptions, community tab posts, and basic analytics reporting.",
  },
  {
    id: "fl-8",
    title: "Pinterest Marketing Expert",
    type: "Hourly · Posted 2 days ago",
    hours: "10 hrs/week",
    level: "Intermediate",
    desc: "Home décor e-commerce brand seeking a Pinterest strategist to grow organic reach and run Promoted Pins. Seasonal trends knowledge a must.",
  },
];

const BUSINESS_CARDS = [
  {
    id: "bz-1",
    title: "Senior Full Stack MERN Developer",
    type: "Hourly · Posted 7 days ago",
    hours: "< 30 hrs/week",
    level: "Intermediate",
    desc: "Experienced MERN Developer needed to build a modern car auction platform. Tech Stack: React.js / Next.js / Node.js / MongoDB.",
  },
  {
    id: "bz-2",
    title: "Brand Identity Designer",
    type: "Fixed Price · Posted 3 days ago",
    hours: "Project based",
    level: "Expert",
    desc: "Fintech startup seeking a senior brand designer for a full visual identity: logo, colour palette, typography, and brand guidelines.",
  },
  {
    id: "bz-3",
    title: "Paid Search (PPC) Manager",
    type: "Hourly · Posted 2 days ago",
    hours: "20 hrs/week",
    level: "Intermediate",
    desc: "Healthcare SaaS needs a Google Ads expert to manage and scale search campaigns. Monthly ad spend: $30k. CPA target below $120.",
  },
  {
    id: "bz-4",
    title: "React Native Mobile Developer",
    type: "Hourly · Posted 5 days ago",
    hours: "40 hrs/week",
    level: "Expert",
    desc: "Series A startup building a fitness app needs a React Native developer with App Store deployment experience. GraphQL backend required.",
  },
  {
    id: "bz-5",
    title: "Content Marketing Lead",
    type: "Hourly · Posted 1 day ago",
    hours: "30 hrs/week",
    level: "Intermediate",
    desc: "B2B software company needs a content strategist to own the blog, case studies, and SEO calendar. Long-tail keyword strategy essential.",
  },
  {
    id: "bz-6",
    title: "DevOps / AWS Infrastructure Engineer",
    type: "Fixed Price · Posted 4 days ago",
    hours: "Project based",
    level: "Expert",
    desc: "Scale-up company needs a DevOps engineer to migrate infrastructure to AWS ECS with Terraform. CI/CD pipeline and monitoring required.",
  },
  {
    id: "bz-7",
    title: "UX/UI Designer – SaaS Dashboard",
    type: "Hourly · Posted 6 days ago",
    hours: "20 hrs/week",
    level: "Intermediate",
    desc: "Analytics platform redesigning their core dashboard. Need a UX designer with strong data visualisation skills. Figma prototypes required.",
  },
  {
    id: "bz-8",
    title: "Copywriter – Direct Response",
    type: "Hourly · Posted 2 days ago",
    hours: "15 hrs/week",
    level: "Expert",
    desc: "Performance marketing agency needs a direct response copywriter for landing pages, VSLs, and email sequences. Finance/health niches preferred.",
  },
];

// ─── Clock Icon ────────────────────────────────────────────────────────────────

const ClockIcon = () => (
  <svg className="w-[13px] h-[13px] text-gray-400 mt-[1px] flex-shrink-0" fill="none" viewBox="0 0 16 16">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

// ─── Person Icon ───────────────────────────────────────────────────────────────

const PersonIcon = () => (
  <svg className="w-[13px] h-[13px] text-gray-400 mt-[1px] flex-shrink-0" fill="none" viewBox="0 0 16 16">
    <circle cx="8" cy="6" r="3.2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2.5 14c0-3 2.5-4.8 5.5-4.8s5.5 1.8 5.5 4.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

// ─── Single Job Card ───────────────────────────────────────────────────────────

function JobCard({ title, type, hours, level, desc, btnLabel }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 lg:p-5 mb-3 w-full box-border shadow-sm hover:shadow-md transition-shadow duration-200">

      {/* Top row: title + badge */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <h4 className="text-[13.5px] lg:text-[15px] text-[500] text-gray-900 leading-snug">
          {title}
        </h4>
        <span className="flex-shrink-0 text-[10px] font-semibold text-[#19baf5] bg-[#19baf5]/10 px-2 py-0.5 rounded-full">
          {level}
        </span>
      </div>

      {/* Type */}
      <p className="text-[11px] text-gray-400 mb-3">{type}</p>

      {/* Divider */}
      <div className="border-t border-gray-100 mb-3" />

      {/* Meta */}
      <div className="flex gap-4 mb-3.5">
        <div className="flex items-start gap-1.5">
          <ClockIcon />
          <div>
            <p className="text-[11.5px] lg:text-[12.5px] font-semibold text-gray-800 leading-tight">{hours}</p>
            <p className="text-[10px] text-gray-400 leading-tight mt-0.5">Hours/week</p>
          </div>
        </div>
        <div className="flex items-start gap-1.5">
          <PersonIcon />
          <div>
            <p className="text-[11.5px] lg:text-[12.5px] font-semibold text-gray-800 leading-tight">{level}</p>
            <p className="text-[10px] text-gray-400 leading-tight mt-0.5">Experience</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[12px] lg:text-[13px] text-gray-500 leading-relaxed line-clamp-2 mb-4">
        {desc}
      </p>

      {/* CTA Button */}
      <div className="flex justify-start">
  <button
    className="
      inline-flex
      items-center
      justify-center

      min-w-[80px]
      lg:min-w-[120px]

      px-8
      py-[9px]

      rounded-full

      bg-[#19baf5]
      hover:bg-[#10a8e0]
      transition-colors

      text-white
      text-[12px]
      lg:text-[13px]
      font-semibold
    "
  >
    {btnLabel}
  </button>
</div>
    </div>
  );
}

// ─── Marquee Column ────────────────────────────────────────────────────────────

function MarqueeColumn({ cards, direction = "up", speed = 28, btnLabel }) {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    cancelAnimationFrame(animRef.current);
    posRef.current = null;

    const init = () => {
      const oneSetH = track.scrollHeight / 3;

      posRef.current = direction === "up" ? 0 : -oneSetH;

      const step = () => {
        const oneSet = track.scrollHeight / 3;
        if (direction === "up") {
          posRef.current -= speed / 60;
          if (posRef.current <= -oneSet) posRef.current += oneSet;
        } else {
          posRef.current += speed / 60;
          if (posRef.current >= 0) posRef.current -= oneSet;
        }
        track.style.transform = `translateY(${posRef.current}px)`;
        animRef.current = requestAnimationFrame(step);
      };

      animRef.current = requestAnimationFrame(step);
    };

    const timer = setTimeout(init, 80);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animRef.current);
    };
  }, [direction, speed, cards]);

  const tripled = [...cards, ...cards, ...cards];

  return (
    <div ref={wrapRef} className="overflow-hidden flex-1 min-w-0 h-full">
      <div ref={trackRef} className="will-change-transform">
        {tripled.map((card, i) => (
          <JobCard key={`${card.id}-${i}`} {...card} btnLabel={btnLabel} />
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function RealWork({ landingType = "freelancer" }) {
  const key = landingType === "business" ? "business" : "freelancer";
  const allCards = key === "business" ? BUSINESS_CARDS : FREELANCER_CARDS;

  const leftCards  = allCards.filter((_, i) => i % 2 === 0);
  const rightCards = allCards.filter((_, i) => i % 2 !== 0);

  const heading = key === "freelancer"
    ? "Real work, without the bidding wars."
    : "Only the top 1% make it through.";

  const subheading = key === "freelancer"
    ? "Forget endless proposals, bidding wars, and waiting for replies."
    : "Every person you're matched with has already cleared a process most freelancers never pass.";

  // Button label changes per mode
  const btnLabel = key === "freelancer" ? "Apply Now" : "Hire Now";

  return (
    <section className="bg-white py-0 lg:py-0 overflow-hidden">

      {/* Header */}
      <div className="px-5 sm:px-10 lg:px-[78px] mb-6 lg:mb-8">
        <h2 className="text-[32px]  sm:text-[40px] leading-9 lg:leading-18 lg:text-[52px] font-[500] text-gray-900  mb-1.5">
          {heading}
        </h2>
        <p className="text-gray-700 text-[14px] sm:text-[18px] m-0">
          {subheading}
        </p>
      </div>

      {/* Outer card — reduced desktop height */}
      <div className="mx-5 sm:mx-10 lg:mx-[78px]">
        <div
  className="
    border
    border-gray-200
    rounded-2xl
    overflow-hidden

    h-[420px]
    sm:h-[500px]
    lg:h-[460px]

    flex
    gap-3
    p-3
    relative
  "
>

          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

          {/* Mobile: single column, all cards */}
          <div className="flex flex-1 min-w-0 overflow-hidden h-full sm:hidden">
            <MarqueeColumn
              key={`mobile-${key}`}
              cards={allCards}
              direction="up"
              speed={28}
              btnLabel={btnLabel}
            />
          </div>

          {/* Desktop left col — up */}
          <div className="hidden sm:flex flex-1 min-w-0 overflow-hidden h-full">
            <MarqueeColumn
              key={`left-${key}`}
              cards={leftCards}
              direction="up"
              speed={28}
              btnLabel={btnLabel}
            />
          </div>

          {/* Desktop right col — down */}
          <div className="hidden sm:flex flex-1 min-w-0 overflow-hidden h-full">
            <MarqueeColumn
              key={`right-${key}`}
              cards={rightCards}
              direction="down"
              speed={28}
              btnLabel={btnLabel}
            />
          </div>

        </div>
      </div>
    </section>
  );
}