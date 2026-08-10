import { useState } from "react";

/* FAQ accordion. Content switches on landingType.
   Freelancer copy is final. Business copy is placeholder to swap later. */

const content = {
  freelancer: [
    {
      q: "How is SMM Hiring different from other platforms?",
      a: "On a typical freelance platform, the burden sits on you: build a profile, send pitches, wait. SMM Hiring works the other way. Once you're approved, freelance social media jobs matching your specialization show up in your queue already scoped, with a client who's been through our screening process before you ever hear from them.",
    },
    {
      q: "Do you list SMM jobs or only full projects?",
      a: "Both. A single SMM job might be a batch of Reels due Friday. Another might run for a month as an ongoing freelance social media management job. Neither requires a separate application, since your first one covers you going forward.",
    },
    {
      q: "Is this only for social media work?",
      a: "Management, video, copywriting, design, podcast production, web design, paid social, consulting. That's the full list. If what you do falls outside those categories, this platform isn't going to be useful to you.",
    },
    {
      q: "Do I need years of experience to land freelance social media manager jobs?",
      a: "No. Your portfolio carries more weight than your resume when we review your SMM application. A freelancer six months into the work with strong samples will get matched ahead of someone with a longer title and thinner proof.",
    },
    {
      q: "Are these remote social media jobs, or only in-office?",
      a: "Every job on the platform is remote, whether you're applying as a remote social media manager, a video editor, or a copywriter. Location has nothing to do with which jobs land in your queue. Only your specialization does.",
    },
    {
      q: "Is it free to join this social media freelance platform?",
      a: "Yes. No subscription now, no fee added later, no premium tier that gets you better matches.",
    },
    {
      q: "How does the matching work for social media manager freelance jobs?",
      a: "Specialization and fit decide it. Applying first doesn't move you up the line the way it does on other platforms.",
    },
    {
      q: "What if I get matched to a job I don't want?",
      a: "Decline it. One pass, or even a handful, won't count against you. Declining everything that comes through will.",
    },
    {
      q: "Can I work part-time, or keep my own clients while taking on remote social media jobs?",
      a: "Both are fine. There's no quota to hit, and nothing about this platform asks for exclusivity over the clients you already have.",
    },
    {
      q: "How does payment work?",
      a: "Approval triggers payment. No invoice sitting in someone's inbox for three weeks.",
    },
    {
      q: "How much can I earn from freelance social media jobs on SMM Hiring?",
      a: "That depends on specialization, speed, and how many jobs you're willing to run at once. Since rates are set per job instead of per hour, working faster doesn't mean working for less.",
    },
    {
      q: "Does SMM Hiring take a commission?",
      a: "Yes, a platform fee on every job. It's shown to you before you accept, never after.",
    },
    {
      q: "How long does screening take after I apply for SMM jobs?",
      a: "A few business days for the review itself. Your first match usually follows within a week or two after that, depending on how much demand there is in your category.",
    },
    {
      q: "What if a client asks for endless revisions?",
      a: "It doesn't happen here. Revisions are capped up front, and anything beyond what was agreed becomes its own job, paid separately.",
    },
    {
      q: "What if there's a dispute over a freelance social media management job?",
      a: "Our team pulls the job details, the deliverable, and the message thread, then rules on it. You're not left to sort it out with the client alone.",
    },
  ],

  // Placeholder business copy, written to be swapped later
  business: [
    {
      q: "How is SMM Hiring different from other hiring platforms?",
      a: "On a typical marketplace, you post a job and sift through cold proposals yourself. Here, you post one brief and receive matched, pre-screened applicants who already fit the scope you set.",
    },
    {
      q: "Can I hire for a single task or only long projects?",
      a: "Both. Post a one-off batch of Reels or an ongoing monthly social media management role. You define the scope, and applicants apply against exactly that.",
    },
    {
      q: "What kinds of talent can I hire?",
      a: "Social media management, video, copywriting, design, podcast production, web design, paid social, and consulting. If your need falls outside social media, this isn't the right platform.",
    },
    {
      q: "How does applicant screening work?",
      a: "Every freelancer is reviewed before they can appear in your matches, so the shortlist you see has already cleared our vetting process.",
    },
    {
      q: "Is it free to post a job?",
      a: "Posting is free. A transparent platform fee applies per hire, shown to you before you commit, never added afterward.",
    },
    {
      q: "How fast can I expect matches?",
      a: "Most briefs surface matched applicants within a few business days, depending on the category and how specific your scope is.",
    },
    {
      q: "What if the work needs changes?",
      a: "Revisions are capped up front as part of the agreement. Anything beyond that becomes its own job, scoped and paid separately.",
    },
    {
      q: "What if there's a dispute?",
      a: "Our team reviews the job details, the deliverable, and the message thread, then rules on it. You're not left to resolve it alone.",
    },
  ],
};

function Icon({ open }) {
  return (
    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#c9ccd1] text-[#12131a] lg:h-8 lg:w-8">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
        {open ? (
          <path d="M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        ) : (
          <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        )}
      </svg>
    </span>
  );
}

export default function Faq({ landingType = "freelancer" }) {
  const items = content[landingType] || content.freelancer;
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-20 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        {/* Heading */}
        <h2 className="
            text-center
            font-semibold
            text-black
            leading-8
            lg:leading-[1.28]
            text-[32px] sm:text-[40px] lg:text-[48px]
          ">
          Have some questions?
        </h2>

        {/* Accordion */}
        <div className="mx-auto mt-8 max-w-[820px] lg:mt-12">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[#e4e6e9]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left lg:py-6"
                >
                  <span className="text-[16px] 2xl:font-[500]  leading-[1.4] text-[#12131a] lg:text-[24px]">
                    {item.q}
                  </span>
                  <span className="mt-0.5">
                    <Icon open={isOpen} />
                  </span>
                </button>

                {isOpen && (
                  <p className="-mt-1 pb-6 pr-10 text-[14px] font-[200] 2xl:font-[400] leading-[1.7] text-[#474747] lg:pr-16 lg:text-[20px]">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}