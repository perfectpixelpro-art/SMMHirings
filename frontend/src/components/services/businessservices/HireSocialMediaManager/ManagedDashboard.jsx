import {
  Users,
  CalendarClock,
  FolderKanban,
  MessagesSquare,
  BadgeCheck,
  Target,
  Ban,
  BarChart3,
  Share2,
  Clapperboard,
  Palette,
  Megaphone,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import G1 from "../../../../assets/G2-SMM.png";

const ACCENT = "#0BA5EC";

const dashboardFeatures = [
  {
    icon: Users,
    title: "See Who Is Working on Your Project",
    desc: "Know which freelancers are assigned and what they are working on.",
  },
  {
    icon: CalendarClock,
    title: "Keep Track of Deadlines",
    desc: "Check project milestones, upcoming tasks, and delivery dates at any time.",
  },
  {
    icon: FolderKanban,
    title: "Manage Files and Revisions",
    desc: "Review work, leave feedback, and keep the latest versions in one place.",
  },
  {
    icon: MessagesSquare,
    title: "Talk Directly to Your Freelancer",
    desc: "Communicate with the person doing the work instead of going through several layers.",
  },
];

const matchPoints = [
  {
    icon: BadgeCheck,
    title: "Relevant Experience",
    desc: "Find specialists with experience in analytics, social media, video, design, paid advertising, email marketing, and more.",
  },
  {
    icon: Target,
    title: "Skills That Fit Your Project",
    desc: "Matches are based on the freelancer's actual area of expertise, not simply who is available.",
  },
  {
    icon: Ban,
    title: "No Bidding",
    desc: "Freelancers receive clear project details, rates, deliverables, and timelines, so they can focus on completing the work.",
  },
];

const specialists = [
  {
    icon: BarChart3,
    title: "Analytics & Reporting Experts",
    desc: "Find specialists experienced who can turn complex data into clear reports, and better business decisions. ",
  },
  {
    icon: Share2,
    title: "Social Media Managers",
    desc: "Get matched with managers who understand your industry, from DTC skincare to B2B SaaS, and can handle your social media strategy.",
  },
  {
    icon: Clapperboard,
    title: "Short-Form Video Editors",
    desc: "Work with editors who understand what makes content work on TikTok, Reels, and YouTube Shorts, from strong hooks to polished final cuts.",
  },
  {
    icon: Palette,
    title: "Graphic Designers",
    desc: "Find designers who understand your brand style and can create consistent visuals for your marketing needs.",
  },
  {
    icon: Megaphone,
    title: "Paid Ads Specialists",
    desc: "Connect with freelancers experienced in Google Ads, Meta Ads,who can manage campaigns, creatives, and ongoing optimisation.",
  },
  {
    icon: LayoutGrid,
    title: "And More",
    desc: "Hire content writers, community managers, video editors, web developers, marketing consultants, and other specialists based on your business needs.",
  },
];

const ManagedDashboard = () => {
  return (
    <section className="relative overflow-hidden bg-white py-6 sm:py-20 lg:py-10 2xl:py-10 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="relative max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

        {/* ============ BLOCK 1 — MANAGED DASHBOARD ============ */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
          {/* left: heading + graphic */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-[13px]">
              The Managed Dashboard
            </p>
            <h2 className="mt-3 text-[26px] sm:text-[40px] lg:text-[46px] 2xl:text-[52px] font-[500] leading-[1.15] tracking-[-1px] text-black sm:leading-[1.12] sm:tracking-[-1.5px]">
              A Clearer Way to{" "}
              <span className="block" style={{ color: ACCENT }}>
                Manage Freelance Work
              </span>
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] font-[350] leading-[1.7] text-gray-500 sm:text-[16px] 2xl:text-[17px]">
              One place to see the work, the people, and the timelines. No back
              and forth across five different tools.
            </p>

            <img
              src={G1}
              alt="Managing freelance projects with SMM Hiring"
              className="mt-8 hidden w-full max-w-[440px] select-none lg:block 2xl:max-w-[500px]"
              loading="lazy"
              draggable={false}
            />
          </div>

          {/* right: app-window styled panel */}
          <div className="rounded-[24px] border mt-10 border-[#eef2f7] bg-white p-2.5 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.22)] sm:p-3 min-h-[500px] 2xl:min-h-[580px]">
            {/* window top bar */}
            <div className="flex items-center gap-2 rounded-t-[16px] bg-[#f7fafc] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbdbd]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffe0a3]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#bfe9c6]" />
              <span className="ml-3 text-[12px] font-[500] text-gray-400">
                Project Workspace
              </span>
            </div>

            {/* rows */}
            <div className="p-1.5 sm:p-6 2xl:p-14 h-full">
              {dashboardFeatures.map((f, i) => (
                <div
                  key={f.title}
                  className={[
                    "flex items-start gap-6 p-4 sm:p-5 2xl:p-6",
                    i < dashboardFeatures.length - 1
                      ? "border-b border-[#eef2f7]"
                      : "",
                  ].join(" ")}
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <f.icon className="h-[18px] w-[18px]" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="text-[15.5px] font-[600] leading-snug text-gray-900 sm:text-[16.5px] 2xl:text-[17.5px]">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-[13.5px] font-[350] leading-[1.6] text-gray-500 sm:text-[14px] 2xl:text-[14.5px]">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============ BLOCK 2 — GET MATCHED ============ */}
        <div className="mt-20 sm:mt-28">
      
          <h2 className="mt-3 text-[26px] sm:text-[40px] lg:text-[46px] 2xl:text-[52px] font-[500] leading-[1.15] tracking-[-1px] text-black sm:leading-[1.12] sm:tracking-[-1.5px]">
            Get Matched With Specialists{" "}
            <span style={{ color: ACCENT }}>Who Fit Your Work</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[14.5px] font-[350] leading-[1.75] text-gray-500 sm:text-[16px] 2xl:text-[17px]">
            SMM Hiring reviews freelancer profiles and work samples before
            matching them with projects. The goal is simple: connect your
            business with someone whose skills and experience fit what you
            actually need.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-3 2xl:gap-6">
            {matchPoints.map((p) => (
              <div
                key={p.title}
                className="flex flex-col rounded-[24px] border border-[#eef2f7] bg-white p-6 shadow-[0_8px_24px_-18px_rgba(11,165,236,0.55)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_16px_34px_-18px_rgba(11,165,236,0.75)] sm:p-8 2xl:p-9"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-[0_8px_20px_-12px_rgba(11,165,236,0.9)]"
                  style={{ backgroundColor: ACCENT }}
                >
                  <p.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-[16.5px] font-[600] leading-snug text-gray-900 sm:text-[17.5px] 2xl:text-[18.5px]">
                  {p.title}
                </h3>
                <p className="mt-2 text-[13.5px] font-[350] leading-[1.65] text-gray-500 sm:text-[14.5px] 2xl:text-[15px]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ============ BLOCK 3 — THE RIGHT SPECIALIST ============ */}
        <div className="mt-20 sm:mt-28">
       
          <h2 className="mt-3 text-[26px] sm:text-[40px] lg:text-[46px] 2xl:text-[52px] font-[500] leading-[1.15] tracking-[-1px] text-black sm:leading-[1.12] sm:tracking-[-1.5px]">
            The Right Specialist{" "}
            <span style={{ color: ACCENT }}>for Every Project</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-2 sm:mt-12 md:grid-cols-2 2xl:gap-x-12">
            {specialists.map((s, i) => (
              <div
                key={s.title}
                className={[
                  "flex items-start gap-4 py-6",
                  i < specialists.length - (specialists.length % 2 === 0 ? 2 : 1)
                    ? "border-b border-[#eef2f7]"
                    : "",
                ].join(" ")}
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-[#cfe9fb] shadow-[0_8px_20px_-12px_rgba(11,165,236,0.7)]"
                  style={{ color: ACCENT }}
                >
                  <s.icon className="h-[19px] w-[19px]" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-[16.5px] font-[600] leading-snug text-gray-900 sm:text-[17.5px] 2xl:text-[18.5px]">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] font-[350] leading-[1.65] text-gray-500 sm:text-[14.5px] 2xl:text-[15px]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* accent CTA bar */}
          <div
            className="mt-12 flex flex-col gap-6 rounded-[24px] p-7 shadow-[0_20px_44px_-22px_rgba(11,165,236,0.9)] sm:mt-16 sm:rounded-[28px] sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10 2xl:p-11"
            style={{
              background: `linear-gradient(120deg, ${ACCENT} 0%, #0587c4 100%)`,
            }}
          >
            <div>
              <h3 className="text-[20px] font-[600] leading-tight tracking-[-0.5px] text-white sm:text-[26px] 2xl:text-[30px]">
                Build your team, one specialist at a time
              </h3>
              <p className="mt-2 max-w-xl text-[14px] font-[350] leading-[1.65] text-white/85 sm:text-[15.5px] 2xl:text-[16px]">
                Tell us what you need and get matched with people who fit the
                actual work, not just whoever is free.
              </p>
            </div>

            <Link
              to="/login/business"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-7 py-3.5 text-[15px] font-[600] shadow-[0_14px_30px_-14px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-[1px] hover:opacity-95 lg:self-auto 2xl:text-[16px]"
              style={{ color: ACCENT }}
            >
              Hire a Specialist Now
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagedDashboard;