import { useState } from "react";

const faqs = [
  {
    q: "What does a community manager actually do?",
    a: "They keep track of what's happening around your brand day to day, replies, questions, the odd situation that needs someone to jump in before it turns into something worse. It's less a social media job and more an ongoing conversation to manage.",
  },
  {
    q: "Why would a business need a community manager?",
    a: "A growing audience turns every message into a small task, and those add up faster than most teams expect. A Community Manager for Business takes that whole load off your plate so people aren't waiting three days for something that should take three minutes.",
  },
  {
    q: "What is Social Media Community Management?",
    a: "Different job from content. Social Media Community Management is what happens once a post is already live, replying, engaging, joining conversations your audience is already having rather than letting the post just sit there collecting comments nobody answers.",
  },
  {
    q: "What do Community Management Services include?",
    a: "Comments, mentions, moderation, keeping a general pulse on what people are saying. The point of Community Management Services is finding out about a problem, or an opportunity, the same day it happens rather than three weeks later.",
  },
  {
    q: "Can I hire a Dedicated Community Manager?",
    a: "You can, and past a certain audience size it's usually worth it. A Dedicated Community Manager learns your brand, your tone, and how your team works well enough that you're not re-explaining context to someone new every few months.",
  },
  {
    q: "How is community management different from social media management?",
    a: "One's upstream, planning, creating, scheduling, posting. The other picks up right after, once people start commenting and reacting. Content is the first half. Community is what happens with it.",
  },
  {
    q: "Can a community manager respond to customer questions?",
    a: "Depends what the role needs. Customer Community Management can handle the routine back-and-forth customers expect, product questions, DMs, comments, the kind of thing that stacks up fast if nobody's watching it.",
  },
  {
    q: "What does Community Moderation Services involve?",
    a: "Staying ahead of what turns a healthy comment section into a mess. Spam, arguments that spiral, comments that shouldn't be there. Community Moderation Services means someone's actually watching, not cleaning up after the fact.",
  },
  {
    q: "How can Brand Community Management help my business?",
    a: "It gives people a reason to stick around past their first comment. Brand Community Management comes down to making someone feel heard, and people who feel heard tend to come back and eventually defend your brand without being asked to.",
  },
  {
    q: "How does SMM Hiring match me with an Online Community Manager?",
    a: "Share the details, business, audience, platforms, workload, what kind of help you need, and SMM Hiring finds an Online Community Manager who fits. No pile of random applications to work through on your own.",
  },
  {
    q: "Can one community manager handle multiple platforms?",
    a: "Yes, when that's part of the role. Wherever your audience actually spends time, one person can usually cover it.",
  },
  {
    q: "Can I hire a community manager for ongoing Community Engagement Services?",
    a: "You can, and most businesses do. The same person stays on as your audience grows, so the search doesn't restart every time something shifts. That's one reason Community Engagement Services can work well for brands that need someone around consistently.",
  },
  {
    q: "What types of businesses usually hire community managers?",
    a: "Any business whose audience actually talks back. Ecommerce brands, SaaS companies, startups, growing brands, basically anyone getting more comments and DMs than one person can handle alongside everything else on their plate.",
  },
  {
    q: "Can a community manager help improve engagement?",
    a: "Often, yes, and this is usually where the value shows. A conversation that would've died at one comment keeps going instead, follow-up questions, relevant discussions, more reasons for people to stay in it rather than scroll past.",
  },
];

export default function CommunityManagerFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[500] text-center text-black mb-10 sm:mb-14">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-gray-500 text-center mb-8 sm:mb-12">
          Everything you need to know before you hire a community manager.
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