import { useState } from "react";

const faqs = [
  {
    q: "How Is This Different From a Social Media Management Company?",
    a: "An agency sells you a package: account manager, strategist, and somebody further down the chain actually doing the posting. Skip the middle two. You're talking straight to the person who'll run your channels.",
  },
  {
    q: "Can I Hire Just One Person, or Do I Need a Package?",
    a: "One's fine. The plan you're on just caps how many roles you can post, not how many people get reviewed on your behalf.",
  },


  {
    q: "What Happens If the Shortlist Isn't Right?",
    a: "Say so and we'll send another. A miss doesn't eat into your monthly limit; that only happens once you actually hire someone.",
  },
  {
    q: "Do I Have to Interview Every Candidate Myself?",
    a: "No, that part's already done. Talk to whoever looks promising, then make the final call yourself.",
  },
  {
    q: "Can I Hire Across Multiple Brands?",
    a: "Yes, that's exactly what the Starter and Growth tiers are built for: several hires without the agency markup stacking on each one.",
  },
  {
    q: "Is This Just for Social Media, or Does It Cover Broader Marketing Too?",
    a: "Social media sits at the center, but strategy, content, community management, and reporting can all fold into the role. Need something closer to full social media marketing services? Just spell that out when you post.",
  },
  {
    q: "What's Actually Different Between a Dedicated and a Freelance Social Media Manager?",
    a: "A dedicated social media manager is on your account and nothing else. A freelance social media manager is usually splitting time across a few clients, working project by project or on retainer. Which one makes sense really comes down to how much ongoing support you actually need.",
  },
  {
    q: "My Team Works In-Office. Does a Remote Social Media Manager Still Make Sense?",
    a: "It does. There's nothing about managing social media that requires sitting at the same desk as everyone else. A remote social media manager handles the content, the publishing, the community management, all of it, from wherever they happen to be.",
  },
  {
    q: "How's a Virtual Social Media Manager Different From an In-House Hire?",
    a: "Same responsibilities, day to day, minus the office. A virtual social media manager owns the work without needing a desk to do it from.",
  },
  {
    q: "Do Candidates Come With Social Media Strategy Experience?",
    a: "Depends what you ask for. Building a social media strategy from scratch is a different skill set than executing one that already exists, so just be clear in your post about which one you need.",
  },
  {
    q: "What If the Professional Social Media Manager I Hire Doesn't Work Out?",
    a: "Post the role again. Screening starts fresh, and it's only confirmed hires that count against your monthly limit, not the attempts along the way.",
  },
  {
    q: "Can This Cover Multiple Locations or Brands?",
    a: "Yes. Businesses running several brands or locations usually spec each one out separately, so the right specialist ends up matched to the right account instead of one hire stretched thin across everything.",
  },
];

export default function HireSocialMediaManagerFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[500] text-center text-black mb-10 sm:mb-14">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-gray-500 text-center mb-8 sm:mb-12">
          Everything you need to know before you post a role.
        </p>

        <div className="flex flex-col">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border-b border-gray-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 text-left py-5 sm:py-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-[400] text-black pr-2">
                    {item.q}
                  </span>

                  <span
                    className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-transform duration-300"
                    style={{
                      backgroundColor: "#1dbaf9",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:w-4 sm:h-4"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-5 sm:pb-6 pr-8 sm:pr-12">
                      <p className="pb-5 sm:pb-6 text-sm sm:text-base text-gray-500 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}