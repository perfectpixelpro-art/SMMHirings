import {
  Globe,
  Clapperboard,
  Image as ImageIcon,
  Wallet,
  RefreshCw,
  CalendarClock,
  XCircle,
  Ticket,
} from "lucide-react";

const briefRows = [
  { icon: Globe, label: "Platforms", value: "Instagram and YouTube" },
  { icon: Clapperboard, label: "Deliverables", value: "8 Reels / month" },
  { icon: ImageIcon, label: "Content", value: "Client provides raw footage" },
  { icon: Wallet, label: "Budget", value: "$250 / month" },
  { icon: RefreshCw, label: "Project", value: "Ongoing" },
  { icon: CalendarClock, label: "First Delivery", value: "Within 5 days" },
];

const exclusions = [
  "Open-ended scope",
  "Rate talks after work has started",
  "Deliverables that quietly grow",
  "Vague expectations",
];

const FreelancerBriefOverview = () => {
  return (
    <section className="bg-white py-10 sm:py-20 lg:py-10 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
       

        {/* Heading */}
        <h3 className="mt-3 max-w-3xl text-[30px] sm:text-[42px] lg:text-[48px] font-[500] leading-[1.14] tracking-[-1.5px] text-black">
          What Does a{" "}
          <span className="text-sky-400">Brief Actually Include?</span>
        </h3>

        <p className="mt-4 max-w-2xl text-[15.5px] font-[350] leading-[1.75] text-gray-500 sm:text-[17px]">
          Every marketing freelance opportunity comes with everything you
          need to decide before committing. Platform, deliverables,
          timeline, budget, project duration, all in the brief before you
          accept anything. No discovery call to figure out what the job
          involves. No scope that grows once you are a few weeks in.
        </p>

        {/* Ticket / brief stub */}
        <div className="relative mt-12">
          {/* ambient glow */}
          <div className="absolute -inset-3 -z-10 rounded-[32px] bg-gradient-to-br from-sky-100 via-sky-50/70 to-rose-50/40 blur-2xl sm:-inset-5" />

          <div className="relative flex flex-col overflow-hidden rounded-[28px] border border-sky-100 bg-white shadow-[0_25px_70px_-20px_rgba(56,189,248,0.3)] lg:flex-row">
            {/* Main brief panel */}
            <div className="flex-1 p-6 sm:p-9">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50">
                    <Ticket className="h-5 w-5 text-sky-500" strokeWidth={2} />
                  </div>
                  <p className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-gray-400 sm:text-[15px]">
                    A real brief looks like this
                  </p>
                </div>
              
              </div>

              {/* Spec-sheet grid */}
              <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-7 sm:mt-8 sm:grid-cols-3">
                {briefRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.label}>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 sm:h-12 sm:w-12">
                        <Icon
                          className="h-5 w-5 text-sky-500 sm:h-6 sm:w-6"
                          strokeWidth={2}
                        />
                      </div>
                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400 sm:text-[11.5px]">
                        {row.label}
                      </p>
                      <p className="mt-1 text-[14.5px] font-[500] leading-snug text-gray-900  sm:text-[16px]">
                        {row.value}
                      </p>
                    </div>
                  );
                })}
              </div>

              <p className="mt-8 border-t border-dashed border-gray-200 pt-6 text-[14px] font-[350] leading-[1.7] text-gray-500 sm:text-[15.5px]">
                That is the whole picture. Say yes if it fits. Pass if it is
                not your next match as a freelance marketing opportunity.
              </p>
            </div>

            {/* Perforated divider — vertical on desktop */}
            <div className="relative hidden w-0 shrink-0 lg:block">
              <div className="absolute inset-y-6 left-0 border-l-2 border-dashed border-sky-200" />
              <span className="absolute -top-4 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-white" />
              <span className="absolute -bottom-4 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-white" />
            </div>

            {/* Perforated divider — horizontal on mobile */}
            <div className="relative block h-0 shrink-0 lg:hidden">
              <div className="absolute inset-x-6 top-0 border-t-2 border-dashed border-sky-200" />
              <span className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white" />
              <span className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white" />
            </div>

            {/* Exclusions stub */}
            <div className="w-full bg-rose-50/40 p-6 sm:p-9 lg:w-[300px]">
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-rose-400 sm:text-[15px]">
                Never in the brief
              </p>

              <ul className="mt-5 flex flex-col gap-6">
                {exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <XCircle
                      className="mt-[1px] h-5 w-5 shrink-0 text-rose-400"
                      strokeWidth={2}
                    />
                    <span className="text-[13.5px] font-[400] leading-[1.6] text-gray-600 sm:text-[14.5px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[13px] font-[350] leading-[1.65] text-gray-500 sm:text-[14px]">
                What is written is the job. Anything extra is a new request
                with its own rate.
              </p>
            </div>
          </div>
        </div>

        {/* Closing CTA line */}
        <p className="mt-9 text-[14.5px] font-[350] leading-[1.7] text-gray-500 sm:text-[16px]">
          Looking to hire instead of work as a marketing freelancer? Head
          over to the Business side to{" "}
          <a
            href="/business-services/hire-community-manager/"
            className="font-[600] text-sky-500 underline decoration-sky-300 underline-offset-2 hover:text-sky-600"
          >
            Hire a Community Manager
          </a>{" "}
          or Hire a Marketing Analytics Expert.
        </p>

        <div className="mt-12 border-t border-gray-100 sm:mt-16" />
      </div>
    </section>
  );
};

export default FreelancerBriefOverview;