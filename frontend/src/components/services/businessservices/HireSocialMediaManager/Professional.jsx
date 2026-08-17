import { Check, User, Globe, Briefcase, Laptop2, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const weeklyTasks = [
  "Writing and scheduling posts across whichever platforms you're active on",
  "Answering comments and DMs so your audience isn't talking to silence",
  "Adjusting your social media strategy as trends shift and algorithms change",
  "Reporting on what's actually working, not just what got posted",
  "Keeping content in sync with the rest of your marketing calendar",
];

const hiringModels = [
  {
    icon: User,
    title: "Dedicated Social Media Manager",
    description: "One person focused on your account, rather than juggling multiple clients at once.",
  },
  {
    icon: Globe,
    title: "Remote Social Media Manager",
    description: "Work your channels from wherever they are. Location isn't a filter.",
  },
  {
    icon: Briefcase,
    title: "Freelance Social Media Manager",
    description: "Project-based or retainer support, without an agency contract attached.",
  },
  {
    icon: Laptop2,
    title: "Virtual Social Media Manager",
    description: "The same day-to-day ownership as an in-house hire, without the desk or payroll overhead.",
  },
];

const Professional = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9ff] via-white to-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

       

        {/* Heading */}
        <h2 className="mt-3 max-w-4xl text-[26px] sm:text-[40px] lg:text-[52px] 2xl:text-[54px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
          What a{" "}
          <span style={{ color: ACCENT }}>Social Media Manager</span>{" "}
          Actually Does for Your Business
        </h2>

        <p className="mt-4 max-w-2xl text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
          A professional social media manager runs your brand's presence so
          it doesn't fall to whoever on your team has ten spare minutes
          between actual work.
        </p>

        {/* Feature panel — echoes the light-blue panels across the site */}
        <div className="relative mt-10 overflow-hidden rounded-[24px] bg-[#e9f4fd] p-5 sm:mt-16 sm:rounded-[32px] sm:p-8 lg:p-10 2xl:p-12">
          {/* soft ambient accents */}
          <span className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#c9e8fb] blur-3xl opacity-70" />
          <span className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#d6edfc] blur-3xl opacity-60" />

          <div className="relative grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8 2xl:gap-10">

            {/* Left: weekly scope */}
            <div className="flex flex-col">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-[13px]">
                What That Looks Like Week to Week
              </p>

              <div className="mt-5 flex flex-1 flex-col justify-between gap-3">
                {weeklyTasks.map((task) => (
                  <div
                    key={task}
                    className="flex flex-1 items-center gap-4 rounded-[16px] border border-white bg-white px-4 py-4 shadow-[0_8px_24px_-18px_rgba(11,165,236,0.55)] sm:px-5"
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <Check className="h-4 w-4 text-white" strokeWidth={3} />
                    </span>
                    <p className="text-[13.5px] font-[450] leading-[1.5] text-gray-800 sm:text-[15px] 2xl:text-[16px]">
                      {task}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: hiring models */}
            <div className="flex flex-col">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-[13px]">
                Four Ways to Hire For It
              </p>

              <div className="mt-5 flex flex-1 flex-col justify-between gap-3">
                {hiringModels.map((model) => {
                  const Icon = model.icon;
                  return (
                    <div
                      key={model.title}
                      className="group relative flex flex-1 items-center gap-4 rounded-[16px] border border-white bg-white px-4 py-4 shadow-[0_8px_24px_-18px_rgba(11,165,236,0.55)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_16px_34px_-18px_rgba(11,165,236,0.75)] sm:px-5"
                    >
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e9f4fd] transition-colors duration-200"
                        style={{ ["--tw-bg-opacity"]: 1 }}
                      >
                        <Icon
                          className="h-[18px] w-[18px] transition-colors duration-200"
                          style={{ color: ACCENT }}
                          strokeWidth={2}
                        />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[14px] font-[600] leading-snug text-gray-900 sm:text-[15.5px] 2xl:text-[16.5px]">
                          {model.title}
                        </p>
                        <p className="mt-1 text-[12.5px] font-[350] leading-[1.55] text-gray-500 sm:text-[13.5px] 2xl:text-[14.5px]">
                          {model.description}
                        </p>
                      </div>
                      <ArrowUpRight
                        className="ml-auto hidden h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 sm:block"
                        style={{ color: ACCENT }}
                        strokeWidth={2.5}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Closing paragraph with interlink */}
        <p className="mt-8 max-w-3xl text-[14px] font-[350] leading-[1.7] text-gray-500 sm:mt-12 sm:text-[16px] sm:leading-[1.75] 2xl:text-[17px]">
          Whichever arrangement you choose, the role is built around what
          your business needs. Whether you're a small brand hiring an{" "}
          <Link
            to="/business-services/hire-app-designer-developer/"
            className="inline-flex items-center gap-1 font-[600] underline underline-offset-2 hover:opacity-80"
            style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
          >
            app developer
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Link>{" "}
          or scaling social media management for business across multiple
          channels, you can define the support you need before you hire.
        </p>
      </div>
    </section>
  );
};

export default Professional;