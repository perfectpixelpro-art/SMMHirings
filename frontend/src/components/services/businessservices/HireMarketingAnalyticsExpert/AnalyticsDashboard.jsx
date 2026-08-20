import {
  Users,
  CalendarClock,
  FolderKanban,
  MessagesSquare,
  Workflow,
  LayoutDashboard,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import G1SMM from "../../../../assets/G1SMM.png";

const ACCENT = "#0BA5EC";

const features = [
  {
    icon: Users,
    title: "Talent Tracking",
    text: "See which specialist is working on which project and exactly what they're responsible for, at a glance.",
  },
  {
    icon: CalendarClock,
    title: "Project Timelines",
    text: "Track reports, deadlines, revisions, and completed tasks so you know what's due and when.",
  },
  {
    icon: FolderKanban,
    title: "Reports & Assets",
    text: "Store reports, data files, dashboards, templates, and revisions in one organized place.",
  },
  {
    icon: MessagesSquare,
    title: "Communication",
    text: "Talk directly to the analyst on your project, no account managers or multiple teams.",
  },
  {
    icon: Workflow,
    title: "Managed Workflow",
    text: "Keep projects organised while the right specialist handles the analytics and reporting.",
  },
];

const AnalyticsDashboard = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white pt-32 pb-14 sm:pt-44 2xl:pt-32 sm:pb-24 lg:pb-20 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <span className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#e0f0fc] blur-3xl opacity-50" />
      <span className="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-[#e0f0fc] blur-3xl opacity-45" />

      <div className="relative mx-auto max-w-[1700px] px-5 md:px-10 lg:px-[78px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* ===== LEFT: sticky heading + image ===== */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span
              className="inline-flex items-center gap-1.5 rounded-full bg-[#e9f4fd] px-3.5 py-1.5 text-[11.5px] font-[600] uppercase tracking-[0.12em]"
              style={{ color: ACCENT }}
            >
              <LayoutDashboard className="h-3.5 w-3.5" strokeWidth={2.5} />
              One Dashboard
            </span>

            <h2 className="mt-5 text-[27px] sm:text-[38px] lg:text-[44px] 2xl:text-[50px] font-[500] leading-[1.16] tracking-[-1px] text-black sm:tracking-[-1.5px]">
              Your Analytics Projects,{" "}
              <span style={{ color: ACCENT }}>All in One Dashboard</span>
            </h2>

            <p className="mt-5 max-w-md text-[15px] font-[350] leading-[1.75] text-gray-500 sm:text-[16.5px] 2xl:text-[17.5px]">
              A clear view of your analytics projects, the specialists on them,
              upcoming deadlines, and everything delivered along the way, without
              chasing updates through emails or messages.
            </p>

            {/* inline stat */}
            <div className="mt-8 inline-flex items-center gap-2.5 border-l-2 pl-4" style={{ borderColor: ACCENT }}>
              <TrendingUp className="h-5 w-5" style={{ color: ACCENT }} strokeWidth={2.5} />
              <span className="text-[14px] font-[600] text-gray-700">
                4 active projects, tracked live
              </span>
            </div>

            {/* raw image below the content */}
            <div className="mt-10 w-full max-w-[520px]">
              <img
                src={G1SMM}
                alt="Analytics projects managed in one dashboard"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* ===== RIGHT: numbered feature list ===== */}
          <div>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group relative flex items-start gap-6 border-t border-[#e9eef4] py-7 pl-5 transition-colors duration-300 last:border-b sm:gap-8 sm:py-8 sm:pl-6"
                >
                  {/* accent bar that grows on hover (gap from number via pl on parent) */}
                  <span
                    className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                    style={{ backgroundColor: ACCENT }}
                  />

                  {/* big ghost number */}
                  <span className="w-10 shrink-0 text-[28px] font-[800] leading-none tracking-tight text-[#d3e3f0] transition-colors duration-300 group-hover:text-[#a9d5f2] sm:w-14 sm:text-[36px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2.5">
                      <Icon
                        className="h-[18px] w-[18px] shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: ACCENT }}
                        strokeWidth={2}
                      />
                      <h3 className="text-[17px] font-[700] leading-snug text-gray-900 sm:text-[19px] 2xl:text-[21px]">
                        {f.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-[13.5px] font-[350] leading-[1.7] text-gray-500 sm:text-[14.5px] 2xl:text-[15.5px]">
                      {f.text}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* ===== Closing note ===== */}
            <div className="mt-8 flex items-start gap-4 border-l-3 pl-5 sm:items-center" style={{ borderColor: ACCENT }}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e9f4fd]">
                <Sparkles className="h-5 w-5" style={{ color: ACCENT }} strokeWidth={2} />
              </span>
              <div>
                <p className="text-[15.5px] font-[700] text-gray-900 sm:text-[16.5px]">
                  The Right Specialist, From the Start
                </p>
                <p className="mt-1.5 text-[13.5px] font-[350] leading-[1.7] text-gray-500 sm:text-[14.5px]">
                  Hire an Analytics & Reporting expert matched to your business,
                  reporting needs, and goals. With no bidding, specialists focus
                  on the work while your dashboard keeps reports, files,
                  revisions, communication, and timelines in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;