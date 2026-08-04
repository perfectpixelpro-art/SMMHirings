import { useRef, useState, useEffect } from "react";

import VettedF from "../assets/VettedF.png";
import MatchedF from "../assets/MatchedF.png";
import ManagedF from "../assets/ManagedF.png";
import ReliableF from "../assets/ReliableF.png";
import ScreenedB from "../assets/ScreenedB.png";
import MatchedB from "../assets/MatchedB.png";
import ManagedB from "../assets/ManagedB.png";
import ScalableB from "../assets/ScalableB.png";

const CONTENT = {
  freelancer: {
    heading: "Why We're Different",
    subheading: "Built to work for you, not just list you.",
    cards: [
      { id: "f1", title: "Vetted", description: "Trusted before the conversation even starts.", image: VettedF },
      { id: "f2", title: "Matched", description: "Paired with work that actually fits you.", image: MatchedF, imageAlt: "Team collaborating around a monitor" },
      { id: "f3", title: "Managed", description: "We handle the admin. You handle the work.", image: ManagedF },
      { id: "f4", title: "Reliable", description: "Steady income so you can focus on what you do best.", image: ReliableF },
    ],
  },
  business: {
    heading: "Why Businesses Choose Us",
    subheading: "Built to be managed, not just matched.",
    cards: [
      { id: "b1", title: "Screened", description: "Every creator is screened before they ever reach a project. Quality is confirmed upfront, not hoped for later.", image: ScreenedB },
      { id: "b2", title: "Matched", description: "We pair real needs with the right person, not a keyword search or an open post.", image: MatchedB, imageAlt: "Business team reviewing work together" },
      { id: "b3", title: "Managed", description: "We stay involved from brief to delivery, catching issues before they become problems.", image: ManagedB },
      { id: "b4", title: "Scalable", description: "The same standard, every project, every time. No surprises on either side.", image: ScalableB },
    ],
  },
};

function DifferentCard({ title, description, image, imageAlt }) {
  return (
    <div
      className="
        group
        flex-shrink-0
        flex flex-col
        bg-white
        rounded-[20px]
        p-4 lg:p-5
        box-border
        border border-gray-100
        shadow-[0_2px_16px_rgba(0,0,0,0.06)]
        hover:shadow-[0_8px_32px_rgba(29,186,249,0.15)]
        hover:-translate-y-1
        hover:border-[#1dbaf9]/30
        transition-all duration-300 ease-out

        w-[calc((100vw-40px)/1.6)]
        sm:w-[calc((100vw-40px)/2.4)]
        md:w-[calc((100vw-80px)/2.8)]
        lg:w-[calc((100vw-160px)/4.4)]
      "
    >
      {/* Image first — fixed height, aligned top */}
      <div className="
        w-full flex-shrink-0
        rounded-[14px] lg:rounded-[16px]
        overflow-hidden
        bg-gray-50
        h-[130px] sm:h-[150px] md:h-[170px] lg:h-[200px]
        mb-4 lg:mb-5
        border border-gray-100
      ">
        {image && (
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover block group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
        )}
      </div>

      {/* Text below — fixed height so cards match */}
      <div className="px-1 h-[90px] sm:h-[100px] lg:h-[110px] flex-shrink-0 overflow-hidden">
        {/* Blue accent dot + title */}
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-[6px] h-[6px] rounded-full bg-[#1dbaf9] flex-shrink-0" />
          <h3 className="
            font-[600] tracking-tight leading-tight text-gray-900
            text-[17px] sm:text-[18px] md:text-[19px] lg:text-[21px]
          ">
            {title}
          </h3>
        </div>
        <p className="
          text-gray-500 font-[300] leading-snug m-0 pl-[14px]
          text-[12.5px] sm:text-[13px] md:text-[13.5px] lg:text-[14px]
        ">
          {description}
        </p>
      </div>
    </div>
  );
}

function ArrowBtn({ direction, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
      className="
        flex-shrink-0 flex items-center justify-center
        rounded-full border border-gray-200 bg-white
        transition-all duration-150
        w-9 h-9 sm:w-[42px] sm:h-[42px] md:w-[46px] md:h-[46px]
        p-0 cursor-pointer
        hover:border-[#1dbaf9] hover:shadow-[0_0_0_3px_rgba(29,186,249,0.1)]
        disabled:opacity-30 disabled:cursor-default disabled:pointer-events-none
      "
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        {direction === "left" ? (
          <path d="M10 12L6 8l4-4" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M6 4l4 4-4 4" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

export default function WhyDifferent({ landingType = "freelancer" }) {
  const key = landingType === "business" ? "business" : "freelancer";
  const { heading, subheading, cards } = CONTENT[key];

  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 1);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };
    const timer = setTimeout(update, 50);
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      clearTimeout(timer);
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [key]);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild;
    const amount = card ? card.offsetWidth + 18 : 360;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-11 lg:py-16 overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-end gap-4 mb-6 lg:mb-8 px-5 sm:px-10 md:px-12 lg:px-[78px]">
        <div>
          <h2 className="leading-tight font-[500] text-gray-900 mb-1.5 text-[28px] sm:text-[36px] md:text-[42px] lg:text-[52px] lg:leading-[4.5rem]">
            {heading}
          </h2>
          <p className="text-gray-700 m-0 text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px]">
            {subheading}
          </p>
        </div>
        <div className="flex gap-2.5 flex-shrink-0">
          <ArrowBtn direction="left" onClick={() => scroll("left")} disabled={!canScrollLeft} />
          <ArrowBtn direction="right" onClick={() => scroll("right")} disabled={!canScrollRight} />
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="
          flex gap-5 sm:gap-5 md:gap-6 lg:gap-[46px]
          overflow-x-auto
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
          pt-1 pb-3
          pl-5 sm:pl-10 md:pl-12 lg:pl-[78px]
          pr-0
        "
      >
        {cards.map((card) => (
          <DifferentCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}