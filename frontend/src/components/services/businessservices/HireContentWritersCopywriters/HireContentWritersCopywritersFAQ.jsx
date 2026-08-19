import { useState } from "react";

const faqs = [
  {
    q: "How is this different from a content agency?",
    a: "Agencies sell you a chain. Account manager, editor, and then a writer somewhere underneath both. Skip the chain, deal with the writer.",
  },
  {
    q: "Can I hire just one writer, or do I need a package?",
    a: "You can hire one writer. Your plan determines how many roles you can post, so you can hire based on the work you actually have rather than committing to a full content package.",
  },
  {
    q: "What if the writer isn't the right fit?",
    a: "Tell us what isn't working and we'll find someone else. That doesn't touch your monthly limit, only confirmed hires do.",
  },
  {
    q: "Can I hire for multiple projects or brands?",
    a: "Yes, and if you've got a few running at once, submit each one separately. Keep the right writer on the right project.",
  },
  {
    q: "Is this only for blog writing, or does it cover other content types?",
    a: "Blog writing services are just one piece. Website copywriting services, SEO content writing, landing page copywriting, product descriptions, email, all of it runs through the same process.",
  },
  {
    q: "What's the difference between hiring a content writer and hiring a copywriter?",
    a: "Content Writers write blogs, guides, articles, the stuff built to inform and rank. Copywriters write shorter copy built to push one specific action. Need both? Just say so up front and we'll sort it, that's the core of what content writing and copywriting services covers here.",
  },
  {
    q: "Do writers have SEO content writing experience, or just general writing skills?",
    a: "Depends what you tell us. Mention that ranking matters and you'll be matched through our hire SEO content writer track, someone who starts with keyword research, not just someone who writes cleanly.",
  },
  {
    q: "Can I hire a website copywriter specifically, instead of a general content writer?",
    a: "Yes, you can. Flag it if the work's website pages, product pages, or anything conversion-heavy, and you'll hire a website copywriter built for exactly that, not for long-form blogging.",
  },
  {
    q: "What if the delivered content doesn't meet expectations?",
    a: "A revision round's already built in. Still not right after that? Flag it, we'll figure out next steps instead of leaving you stuck.",
  },
  {
    q: "What Does an SEO Content Writer Do?",
    a: "An SEO content writer creates content around keywords and search intent to help your business get found online. Need one? You can hire SEO content writer support for topics that matter to your business.",
  },
  {
    q: "Can I Hire a Website Copywriter for Specific Pages?",
    a: "Yes. You can hire a website copywriter for a homepage, service page, product page, landing page, or full website.",
  },
  {
    q: "What Can I Hire a Copywriter For?",
    a: "Website copy, landing pages, product descriptions, emails, ads, and sales copy. Share the work you need, and the match is based on it.",
  },
];

export default function HireContentWritersCopywritersFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[500] text-center text-black mb-10 sm:mb-14">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-gray-500 text-center mb-8 sm:mb-12">
          Everything you need to know before you hire a writer.
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