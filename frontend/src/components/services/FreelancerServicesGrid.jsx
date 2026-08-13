import { Link } from "react-router-dom";

/* Minimal line icons (inherit currentColor) */
const Ic = {
  calendar: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className={c}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  chat: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className={c}>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v6A2.5 2.5 0 0 1 17.5 15H9l-4 3.5V15H6.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  pen: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className={c}>
      <path d="M4 20l1-4L15.5 5.5a2.1 2.1 0 0 1 3 3L8 19l-4 1z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M13.5 7.5l3 3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  play: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className={c}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9.5l4 2.5-4 2.5v-5z" fill="currentColor" />
    </svg>
  ),
  target: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className={c}>
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  chart: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className={c}>
      <path d="M4 20h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="6" y="11" width="3" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="11" y="7" width="3" height="10" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="16" y="13" width="3" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  palette: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className={c}>
      <path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.4 0 2-1 2-2 0-1.4 1.1-2 2.2-2H18a2.5 2.5 0 0 0 2.5-2.5A8.5 8.5 0 0 0 12 3.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="8" cy="10" r="1" fill="currentColor" />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
      <circle cx="16" cy="10.5" r="1" fill="currentColor" />
    </svg>
  ),
  megaphone: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className={c}>
      <path d="M4 10v4l3 .5V9.5L4 10z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 9.5L18 5v14L7 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 15l1.2 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  users: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className={c}>
      <circle cx="9" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 7.5a2.8 2.8 0 0 1 0 5.4M17 19a5.4 5.4 0 0 0-2-4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  broadcast: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className={c}>
      <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 7.5a6 6 0 0 0 0 9M16.5 7.5a6 6 0 0 1 0 9M4.8 4.8a9.5 9.5 0 0 0 0 14.4M19.2 4.8a9.5 9.5 0 0 1 0 14.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

const jobs = [
  { icon: Ic.calendar, title: "Content Scheduling and Publishing",
    description: "The right post, on the right platform, at the right time. Every time. Without the brand voice drifting halfway through the week." },
  { icon: Ic.chat, title: "Community Management",
    description: "Not just replying to comments. Building real engagement for brands that want an actual audience, not a follower count that looks good in a deck." },
  { icon: Ic.pen, title: "Caption Writing and Copywriting",
    description: "Copy that stops a scroll. Hooks, captions, CTAs written for the platform they are going on, not copy-pasted across five of them." },
  { icon: Ic.play, title: "Short-Form Video Editing",
    description: "Raw footage in. Finished Reels, TikToks, and Shorts out. On-brand, fast turnaround." },
  { icon: Ic.target, title: "Social Media Strategy",
    description: "Content calendars and growth plans that connect to what the business is actually trying to do, usually handled by a freelance social media manager who has done this enough to know what works and what just fills a schedule." },
  { icon: Ic.chart, title: "Analytics and Reporting",
    description: "Pulling numbers is straightforward. Turning them into something a client can act on is where the work actually starts." },
  { icon: Ic.palette, title: "Visual Branding and Design",
    description: "Graphics, carousels, and templates consistent enough that a scroll through the feed looks like one brand, not several designers taking turns." },
  { icon: Ic.megaphone, title: "Paid Social Management",
    description: "Running the full campaign: audiences, budgets, optimization, reporting. Not just the setup." },
  { icon: Ic.users, title: "Influencer and Collaboration Outreach",
    description: "Finding the right creator, keeping the pitch clean, and managing the campaign once it goes live." },
  { icon: Ic.broadcast, title: "Livestream and Event Coverage",
    description: "Launches, live events, real-time moments. Someone has to cover it as it happens." },
];

const FreelancerServicesGrid = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-20">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[78px]">
        {/* Header */}
        <div className="max-w-[920px]">
        
          <h2 className="mt-4 text-[#0f1115] font-medium tracking-[-0.02em] leading-[1.12] text-[30px] sm:text-[40px] lg:text-[48px]">
            What Freelance Social Media Marketing Jobs Are Available Right Now?
          </h2>
          <p className="mt-5 max-w-[820px] text-[15px] font-light leading-[1.8] text-[#6b7280] sm:text-[17px]">
            Businesses on this platform hire across a wide range of specialties.
            Whether you are after social media freelancer jobs, broader marketing
            freelance opportunities, or something more specific, the roles here
            are scoped and waiting for someone who knows what they are doing.
          </p>
        </div>

        {/* Uniform premium cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:gap-7">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="
                group relative flex min-h-[220px] flex-col overflow-hidden rounded-[22px]
                border border-[#edeff2] bg-white p-8 lg:p-9
                transition-[transform,box-shadow,border-color] duration-300 ease-out
                hover:-translate-y-1.5 hover:border-[#d6ecf8]
                hover:shadow-[0_20px_44px_rgba(18,179,239,0.12)]
              "
            >
              {/* faint corner watermark */}
              <div className="pointer-events-none absolute -right-5 -bottom-6 text-[#12b3ef]/[0.05] transition-all duration-500 group-hover:text-[#12b3ef]/[0.09] group-hover:scale-110">
                {job.icon("h-44 w-44")}
              </div>

              {/* bottom accent line grows on hover */}
              <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#1CB9F5] to-[#0ea5e9] transition-transform duration-300 ease-out group-hover:scale-x-100" />

              {/* icon tile */}
              <span
                className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-[16px] text-white shadow-[0_10px_22px_rgba(18,179,239,0.32)] transition-transform duration-300 group-hover:-rotate-6"
                style={{ background: "linear-gradient(135deg, #1CB9F5, #0ea5e9)" }}
              >
                {job.icon("h-7 w-7")}
              </span>

              <h3 className="relative z-10 mt-6 flex items-start gap-2 text-[18px] font-semibold leading-snug text-[#0f1115] lg:text-[20px]">
                {job.title}
                <span className="mt-0.5 -translate-x-1 text-[#12b3ef] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </h3>

              <p className="relative z-10 mt-2.5 max-w-[440px] text-[14px] leading-[1.75] text-[#6b7280] lg:text-[15px]">
                {job.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing callout */}
        <div className="relative mt-14 overflow-hidden rounded-[24px] p-8 sm:mt-16 sm:p-10 lg:p-12"
          style={{ background: "linear-gradient(120deg, #0b3a4d 0%, #12657f 55%, #12b3ef 130%)" }}>
          <div className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.18), transparent)" }} />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)" }} />
          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[760px]">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
                Every profile reviewed
              </span>
              <h3 className="mt-4 text-[21px] font-semibold leading-snug text-white sm:text-[26px]">
                Not sure where your skills fit as a digital marketing freelancer?
              </h3>
              <p className="mt-3 text-[14px] leading-[1.8] text-white/80 sm:text-[16px]">
                Write down what you actually do. A real person reads every
                profile. Specialists get a fair look even when their work does
                not fit one category cleanly.
              </p>
            </div>

            <Link to="/login/freelancer"
              className="group inline-flex h-[54px] flex-shrink-0 items-center justify-center gap-2 rounded-full bg-white px-8 text-[15px] font-semibold text-[#0b3a4d] shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:bg-[#eaf8ff]">
              Apply as a Freelancer
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerServicesGrid;        