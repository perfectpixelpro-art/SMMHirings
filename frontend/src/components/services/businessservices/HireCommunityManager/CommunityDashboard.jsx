import {
  Users,
  FolderKanban,
  CalendarClock,
  ClipboardList,
  Activity,
  Files,
  History,
  Check,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const features = [
  {
    icon: Users,
    title: "Freelancer Details",
    desc: "See who is managing your community, along with their skills, experience, and responsibilities.",
  },
  {
    icon: FolderKanban,
    title: "Active Projects",
    desc: "View ongoing community projects, completed tasks, and work still in progress.",
  },
  {
    icon: CalendarClock,
    title: "Project Timelines",
    desc: "Track milestones, deadlines, planned activities, and upcoming community work.",
  },
  {
    icon: ClipboardList,
    title: "Community Plans",
    desc: "Review planned content, engagement activities, campaigns, and upcoming tasks.",
  },
  {
    icon: Activity,
    title: "Progress Updates",
    desc: "See what has been completed, what is currently being worked on, and what comes next.",
  },
  {
    icon: Files,
    title: "Files & Revisions",
    desc: "Keep content, assets, feedback, and revision requests organised in one place.",
  },
  {
    icon: History,
    title: "Project History",
    desc: "Access previous work, updates, plans, and revisions whenever you need them.",
  },
];

const selectionPoints = [
  "Manual profile reviews before anyone is matched to your community.",
  "Community managers with real communication skills and audience knowledge.",
  "No bidding process, so managers focus on your community, not competing for work.",
];

const CommunityDashboard = () => {
  return (
    <section className="relative bg-white py-10 sm:py-20 lg:py-14 2xl:py-16 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

        {/* ===== Section heading ===== */}
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-[13px]">
          One Dashboard
        </p>
        <h2 className="mt-3 max-w-4xl text-[26px] sm:text-[40px] lg:text-[48px] 2xl:text-[52px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
          Hire a Community Manager &{" "}
          <span style={{ color: ACCENT }}>Keep Everything in One Dashboard</span>
        </h2>

        {/* ===== Dashboard block: intro cell + 7 feature cards (fills 4x2) ===== */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-6">
          {/* intro cell */}
          <div
            className="flex flex-col justify-center rounded-[22px] p-7 2xl:p-8"
            style={{ backgroundColor: ACCENT }}
          >
            <h3 className="text-[19px] font-[600] leading-tight tracking-[-0.3px] text-white sm:text-[21px] 2xl:text-[23px]">
              Your Business Dashboard: Manage with Confidence
            </h3>
            <p className="mt-3 text-[13.5px] font-[350] leading-[1.65] text-white/85 sm:text-[14px] 2xl:text-[14.5px]">
              One place to follow the people, the plans, and the progress.
              Tracked in real time, without chasing updates.
            </p>
          </div>

          {/* feature cards */}
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-[22px] border border-[#eef2f7] bg-white p-7 transition-all duration-200 hover:-translate-y-[3px] hover:border-[#cfe9fb] hover:shadow-[0_22px_44px_-24px_rgba(11,165,236,0.65)] 2xl:p-8"
            >
              <span className="pointer-events-none absolute right-5 top-4 text-[15px] font-[600] tabular-nums text-[#e3eef7]">
                0{i + 1}
              </span>

              <span
                className="flex h-12 w-12 items-center justify-center rounded-[14px]"
                style={{ backgroundColor: "#eaf6fe", color: ACCENT }}
              >
                <f.icon className="h-[22px] w-[22px]" strokeWidth={2} />
              </span>

              <h4 className="mt-5 text-[16px] font-[600] leading-snug text-gray-900 sm:text-[16.5px] 2xl:text-[17.5px]">
                {f.title}
              </h4>
              <p className="mt-2 text-[13.5px] font-[350] leading-[1.6] text-gray-500 sm:text-[14px] 2xl:text-[14.5px]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ===== Selection block ===== */}
        <div className="mt-16 overflow-hidden rounded-[28px] border border-[#eef2f7] bg-gradient-to-b from-[#f7fbff] to-white p-7 shadow-[0_30px_70px_-38px_rgba(15,23,42,0.22)] sm:mt-24 sm:p-10 2xl:p-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 2xl:gap-20">
            {/* narrative */}
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-[13px]">
                The Selection
              </p>
              <h3 className="mt-3 max-w-xl text-[22px] font-[500] leading-tight tracking-[-0.5px] text-black sm:text-[32px] 2xl:text-[36px]">
                Work With the Right Community Manager{" "}
                <span style={{ color: ACCENT }}>From the Start</span>
              </h3>

              <div className="mt-6 space-y-4 max-w-xl text-[14px] font-[350] leading-[1.75] text-gray-500 sm:text-[15.5px] 2xl:text-[16px]">
                <p>
                  When you hire a community manager through SMM Hiring, each
                  professional goes through a careful selection process,
                  including manual profile reviews and a required 90% score in
                  the skills interview.
                </p>
                <p>
                  Instead of matching you with generalists, we connect you with
                  community managers who have the communication skills, audience
                  knowledge, and experience your business needs.
                </p>
                <p>
                  There is no bidding process, so freelancers can focus on
                  managing your community instead of competing for work. A
                  central dashboard keeps timelines, files, updates, and
                  revisions in one place, so you always know what is happening.
                </p>
                <p>
                  By the time you hire a community manager, they have already
                  demonstrated the skills needed to represent your brand, engage
                  with your audience, and manage community activities
                  effectively.
                </p>
              </div>
            </div>

            {/* stat + checklist */}
            <div className="rounded-[22px] border border-[#eef2f7] bg-white p-7 sm:p-8 2xl:p-9">
              <div className="flex items-end gap-3">
                <span
                  className="text-[52px] font-[700] leading-none tracking-[-2px] sm:text-[64px] 2xl:text-[70px]"
                  style={{ color: ACCENT }}
                >
                  90%
                </span>
                <span className="mb-2 text-[13px] font-[400] leading-[1.4] text-gray-500 sm:text-[14px]">
                  minimum score required
                  <br />
                  to pass the skills interview
                </span>
              </div>

              <div className="mt-7 space-y-11 border-t border-[#eef2f7] pt-7">
                {selectionPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                    </span>
                    <p className="text-[13.5px] font-[400] leading-[1.55] text-gray-700 sm:text-[14.5px] 2xl:text-[15px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/login/business"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-[600] text-white shadow-[0_16px_34px_-16px_rgba(11,165,236,0.95)] transition-all duration-200 hover:-translate-y-[1px] hover:opacity-95 sm:w-auto 2xl:text-[16px]"
                style={{ backgroundColor: ACCENT }}
              >
                Hire a Community Manager
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityDashboard;