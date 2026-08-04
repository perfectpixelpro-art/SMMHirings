import { useState } from "react";

const faqs = [
  {
    q: "Who can apply to join the platform as a freelancer?",
    a: "The platform is open to skilled professionals across all digital service categories: including Social Media Management, Content Writing, Copywriting, Video Editing, Graphic Design, SEO, Paid Advertising, Web Development, and more. Applicants must have a demonstrable portfolio, a minimum of one year of professional experience in their field, and the ability to deliver work independently within agreed timelines. Students and beginners are encouraged to build their portfolio further before applying.",
  },
  {
    q: "Is there a cost to join the platform as a freelancer?",
    a: "No. Joining the platform as a freelancer is completely free. There are no registration fees, subscription charges, or upfront costs of any kind. The platform operates on a commission-based model: a small service fee is deducted from each completed project payment, the details of which are clearly outlined during the onboarding process after approval.",
  },
  {
    q: "How are freelancers matched with projects?",
    a: "Project matching is based on the freelancer's approved profile: their listed skills, category expertise, experience level, availability, and past performance on the platform. Freelancers do not need to bid or apply for individual projects. When a client brief aligns with a freelancer's profile, the project is surfaced for review and the freelancer can choose to accept or decline based on fit and availability.",
  },
  {
    q: "What happens if a client is not satisfied with the delivered work?",
    a: "Every project on the platform includes a structured revision process. If a client raises concerns about a deliverable, the freelancer is notified and allowed to address the feedback within the agreed revision scope. The platform's support team mediates in cases where a resolution cannot be reached independently. Freelancers who consistently deliver high-quality work and maintain strong client ratings receive increased project match priority over time.",
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
