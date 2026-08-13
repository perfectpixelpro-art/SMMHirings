import { useState } from "react";

/* FAQ accordion. Content switches on landingType. */

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

  business: [
    {
      q: "How is SMM Hiring different from a social media management company or agency?",
      a: "A social media management company sells you a team you didn't ask for. Retainer, account manager, strategist, junior doing the work. SMM Hiring works the other way. You post the role, we send you a screened shortlist, you meet the person who'll actually do the work, and you hire them directly.",
    },
    {
      q: "Can I hire just one dedicated social media manager, or do I need a whole team?",
      a: "One is fine. Most of our business accounts start by trying to hire a dedicated social media manager for a single channel, then expand once they see how it works. The monthly plan controls how many roles you can hire, not how many people we screen for you.",
    },
    {
      q: "What roles can I hire through the platform?",
      a: "Marketing, content, video, design, and growth. You can hire a social media marketer, a content writer, a graphic designer, a paid ads expert, a video editor, and more. The full list of roles is in Section 5 above.",
    },
    {
      q: "Is this only for hiring on social media?",
      a: "No. We cover the full social media marketing services stack, but also content writing, video editing, graphic design, web design, app development, podcast production, voice over, and marketing consulting.",
    },
    {
      q: "Are the candidates remote?",
      a: "Yes. Every hire on the platform is a remote social media manager, remote video editor, remote designer, or remote specialist in whatever role you're posting. Location doesn't affect matching. Specialization and fit do.",
    },
    {
      q: "Can I outsource social media management to a single person instead of a team?",
      a: "Yes. That's actually most of what the platform is used for. If you want to outsource social media management without paying an agency for four people, one hire through SMM Hiring is usually the right shape.",
    },
    {
      q: "Do I have to interview them, or does SMM Hiring do that too?",
      a: "We screen and interview every candidate before they reach your inbox. You do the final call to confirm the fit and make the offer. The screening is done. The hire is yours.",
    },
    {
      q: "How does the pricing work?",
      a: "Free to post. Free tier gets you 1 hire per month. $20/month gets you 3. $100/month gets you 6 or more. No setup fee, no annual contract, no per-hire commission on top.",
    },
    {
      q: "What if I need to hire a digital marketing expert or a broader marketing role?",
      a: "Yes. You can hire a digital marketing expert or hire marketing professionals across strategy, growth, paid ads, and analytics through the same platform. Post the role and we'll match you to candidates in that lane.",
    },
    {
      q: "What if the shortlist isn't right?",
      a: "Tell us and we'll re-send. The plan doesn't count a bad shortlist against your monthly limit. Only actual hires do.",
    },
    {
      q: "How long does it take to get a shortlist after posting?",
      a: "Around 48 hours for most roles. Complex or niche specializations can take a few days longer if the pool is smaller.",
    },
    {
      q: "What happens after I hire someone?",
      a: "We track the timeline of the project and check in on both sides. If the fit doesn't hold, we help resolve it or replace the hire within the same month.",
    },
    {
      q: "Is there a contract or minimum term?",
      a: "No. Month to month. Cancel from your account before the next billing date and nothing else is charged.",
    },
    {
      q: "What if I want to hire a social media expert for a one-off project, not ongoing work?",
      a: "You can hire a social media expert for a single project through the same platform. The plan tier just controls the maximum number of hires per month, not the length of engagement.",
    },
    {
      q: "Can I post a role I'm not sure how to describe?",
      a: "Yes. Post what you have and we'll help refine the spec before the shortlist goes out. Most first-time posters go through one round of refinement before the match runs.",
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
    <section className="bg-white py-8 sm:py-20 lg:py-14 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
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
                  <span className="text-[16px] 2xl:font-[500]  leading-[1.4] text-[#12131a] lg:text-[20px]">
                    {item.q}
                  </span>
                  <span className="mt-0.5">
                    <Icon open={isOpen} />
                  </span>
                </button>

                {isOpen && (
                  <p className="-mt-1 pb-6 pr-10 text-[14px] font-[200] 2xl:font-[400] leading-[1.7] text-[#474747] lg:pr-16 lg:text-[17px]">
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