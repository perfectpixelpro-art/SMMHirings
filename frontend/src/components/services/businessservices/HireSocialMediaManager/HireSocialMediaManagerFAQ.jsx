import { useState } from "react";

const faqs = [
  {
    q: "How is this different from hiring a social media agency?",
    a: "With an agency, you may have an account manager or strategist between you and the person actually managing your social media. With SMM Hiring, you work directly with the person handling your channels. That makes feedback quicker, and responsibilities clearer.",
  },
  {
    q: "Can I hire just one social media manager, or do I need multiple?",
    a: "You can hire just one. Your plan limits the number of roles you can post, not the number of candidates you can review. If you later need help with any other platform you can post another role under your plan.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. Plans run month to month, so you can cancel whenever you need to. There are no setup fees or long-term commitments.",
  },
  {
    q: "What if the shortlist isn't right for my business?",
    a: "If the shortlist isn't quite right, let the team know what's missing and a new one can be provided. It won't count toward your monthly limit. You're only charged against the limit when you make a hire.",
  },
  {
    q: "Do I have to interview every candidate myself?",
    a: "No. Candidates are reviewed against your requirements before they reach you. You can focus your time on the people who look like a good fit, then decide who to interview and hire.",
  },
  {
    q: "Can I hire for more than social media?",
    a: "Yes. You can build the role around what your business actually needs. That might include content creation, social media strategy, community management, reporting, paid ads, or influencer coordination.",
  },
  {
    q: "My team works in-office. Can a remote social media manager still work well?",
    a: "Yes. Social media work can be managed remotely. Your manager can plan content, create or coordinate assets, schedule posts, manage comments and messages, and send reports without being in your office.",
  },
  {
    q: "Do candidates have social media strategy experience?",
    a: "Depends on the role you create. Some managers are strongest at content planning and execution, while others can build a strategy around your audience, content pillars, goals, and platforms. If you need both strategy and execution, include both in your requirements.",
  },
  {
    q: "What if the social media manager I hire doesn't work out?",
    a: "You can post the role again. Only confirmed hires count toward your monthly limit, so you aren't using up your allowance on candidates who don't work out.",
  },
  {
    q: "Can I hire for other roles besides social media?",
    a: "Yes. SMM Hiring lets you find content writers, copywriters, short-form video editors, graphic designers, paid ads specialists, analytics and reporting experts, web developers, and other marketing professionals.",
  },
  {
    q: "Can I hire someone part-time?",
    a: "Yes. You can define the workload around your needs. If you only need a few hours a week for content scheduling and community management, you can set the role up that way.",
  },
  {
    q: "Will I still have control over my social media accounts?",
    a: "Yes. You remain in control of your business accounts and can decide what access the manager needs. You can also agree on an approval process for content before anything is published.",
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