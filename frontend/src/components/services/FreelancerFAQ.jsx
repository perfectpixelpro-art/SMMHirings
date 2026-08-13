import { useState } from "react";

const faqs = [
  {
    q: "Who can apply for freelance marketing jobs?",
    a: "Digital marketing freelancers, social media managers, or anyone looking for freelance marketing opportunities can apply. Social media, digital marketing, paid ads, video editing, and other marketing skills are all welcome. What matters most is having a portfolio that backs up your skills. Job titles matter less than the work you can show.",
  },
  {
    q: "Is this only for social media managers?",
    a: "No. The platform is open to copywriters, video editors, designers, paid advertising specialists, strategists, and other marketing professionals. Social media managers may apply in higher numbers, but other roles are just as welcome and can be equally in demand.",
  },
  {
    q: "What if I do not get approved the first time?",
    a: "You will receive specific feedback rather than a generic rejection. If something falls short, you will know what needs improvement. Many freelancers come back after strengthening their samples and get approved on their second attempt. There is no waiting period between applications.",
  },
  {
    q: "How long does the whole thing take?",
    a: "Most applicants hear back within 48 hours of submitting their application. Some applications may be reviewed faster, depending on how busy the review queue is that week.",
  },
  {
    q: "Which freelance marketing jobs are busiest right now?",
    a: "Short-form video has been consistently in demand, along with paid advertising. Social media management remains steady, while copywriting and design can see demand increase during certain times of the year. Demand can change from month to month.",
  },
  {
    q: "Do I have to take every job I get matched with?",
    a: "No. Read the brief, see if it works for you as a marketing freelancer, and pass if it does not. There is no pressure to accept every opportunity and no penalty for saying no. Your future matches are not affected.",
  },
  {
    q: "How much experience do I actually need?",
    a: "Less than you might think. Around eight months of experience with two or three strong, recent samples can be more valuable than years of experience without current work to show. Recency and quality matter more than how long your CV is.",
  },
  {
    q: "Will I actually know what the job is before committing?",
    a: "Yes. Every brief includes the deliverables, rate, and timeline before you decide whether to accept it. There are no calls just to figure out the scope and no guessing as you go. Everything you need to make a decision is provided upfront.",
  },
  {
    q: "What if I think a deadline on a freelance digital marketing project is going to slip?",
    a: "Let the client and SMM Hiring know as early as possible. Freelancers who flag potential delays early can work with the team to find a solution. Staying silent and waiting until the deadline creates a much bigger problem, so early communication is always the better approach.",
  },
  {
    q: "Is there a limit on how many remote marketing jobs I can take at once?",
    a: "There is no fixed limit set by the platform. The real limit is how much work you can take on while still meeting the quality and deadlines expected in each brief. Taking on too much can quickly affect the quality of your work.",
  },
  {
    q: "My skills cross a few different areas. Do I still apply?",
    a: "Absolutely. Just explain what you actually do in clear, simple language. Your profile is reviewed based on your skills rather than being limited to a single category. Freelancers who combine areas such as content and design or strategy and copywriting can be matched with briefs that fit their skill set.",
  },
  {
    q: "How does payment work on freelance digital marketing projects?",
    a: "Once the client approves your work, payment is processed through the platform. You do not need to create invoices or chase clients for payment. The process is handled through the platform.",
  },
  {
    q: "Can the same client come back and work with me again?",
    a: "Yes. Some clients request the same freelancer for future projects, while others start with one project and continue working together. When the first project goes well, repeat work can naturally follow.",
  },
  {
    q: "What if a client tries to add something that was not in the original brief?",
    a: "Anything outside the original scope is treated as a separate project with its own rate and agreement. Extra work is not quietly added to an existing project, and SMM Hiring helps maintain that boundary when needed.",
  },
  {
    q: "I am not based in the US. Can I still apply for freelance marketing jobs here?",
    a: "Yes. Social Media Freelancer Jobs are remote, and location is not part of how project matches are made. Freelancers outside the US can apply and be matched in the same way as everyone else.",
  },
];

export default function FreelancerFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[500] text-center text-black mb-10 sm:mb-14">
          Frequent Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-gray-500 text-center mb-8 sm:mb-12">
          Everything you need to know before getting started.
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
