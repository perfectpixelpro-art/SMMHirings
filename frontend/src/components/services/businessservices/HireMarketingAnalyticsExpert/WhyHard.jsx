import { useState } from "react";
import { Boxes, Layers, Clock, FileText, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const problems = [
  {
    icon: Boxes,
    num: "01",
    heading: "The Black Box Problem",
    body: (
      <>
        Having access to data does not make it easier to make decisions. You may
        have reports and campaign numbers, but still struggle to see results and
        where your budget is being lost. When you{" "}
        <Link
          to="/login/business"
          className="font-[600] underline underline-offset-2 hover:opacity-80"
          style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
        >
          Hire Analytics Expert
        </Link>{" "}
        through SMM Hiring, you get matched with a freelancer who reviews your
        data, identifies opportunities, and gives you clear, practical
        recommendations.
      </>
    ),
  },
  {
    icon: Layers,
    num: "02",
    heading: "Analytics Skill Is Needed",
    body: (
      <>
        The right expert needs to work across social media analytics, paid
        advertising, attribution, website performance, lead data and revenue
        reporting. They also need to connect these numbers to the KPIs that
        actually matter to your business.
      </>
    ),
  },
  {
    icon: Clock,
    num: "03",
    heading: "Finding the Right Skills Takes Time",
    body: (
      <>
        Hiring the right person involves days of reviewing CVs, portfolios, case
        studies, and sample reports. Even after that, it's hard to know whether a
        freelancer understands your business needs, and while you search,
        important reporting and marketing decisions can be delayed.
      </>
    ),
  },
  {
    icon: FileText,
    num: "04",
    heading: "Reports Should Help You Understand",
    body: (
      <>
        A detailed report is only useful when the numbers are easy to understand.
        When you{" "}
        <Link
          to="/login/business"
          className="font-[600] underline underline-offset-2 hover:opacity-80"
          style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
        >
          Hire Reporting Specialist
        </Link>{" "}
        through SMM Hiring, you get to work with professionals who can explain
        what changed, which metrics deserve attention, and what actions you could
        consider next.
      </>
    ),
  },
];

const WhyHard = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fbfdff] to-white py-14 sm:py-20 lg:py-24 2xl:py-28 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      {/* ambient accents */}
      <span className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#e0f0fc] blur-3xl opacity-50" />
      <span className="pointer-events-none absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-[#e0f0fc] blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-[1700px] px-5 md:px-10 lg:px-[78px]">
        <div className="grid grid-cols-1 gap-12 2xl:gap-60 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-24">
          {/* ===== LEFT: header ===== */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            

            <h2 className="mt-5 text-[27px] sm:text-[38px] lg:text-[44px] 2xl:text-[50px] font-[500] leading-[1.16] tracking-[-1px] text-black sm:tracking-[-1.5px]">
              Why Is Finding the Right{" "}
              <span style={{ color: ACCENT }}>Analytics &amp; Reporting Expert</span>{" "}
              So Difficult?
            </h2>

            <p className="mt-5 max-w-md text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[16.5px] 2xl:text-[17.5px]">
              The data is rarely the problem. Turning it into decisions, with the
              right person reading it, is where most businesses get stuck. Here's
              what makes the search hard.
            </p>

            {/* little progress readout */}
            <div className="mt-8 hidden items-center gap-3 lg:flex">
              <span className="text-[40px] font-[800] leading-none text-gray-900">
                {String(open + 1).padStart(2, "0")}
              </span>
              <span className="text-[13px] font-[400] text-gray-400">
                of {String(problems.length).padStart(2, "0")}
                <br />
                challenges
              </span>
            </div>
          </div>

          {/* ===== RIGHT: accordion ===== */}
          <div className="flex flex-col">
            {problems.map((p, i) => {
              const Icon = p.icon;
              const isOpen = open === i;
              return (
                <div
                  key={p.heading}
                  className="border-t border-[#e9eef4] last:border-b"
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="group flex w-full items-center gap-4 py-6 text-left sm:gap-6 sm:py-7"
                  >
                    {/* big display number */}
                    <span
                      className="text-[26px] font-[800] leading-none tracking-tight transition-colors duration-300 sm:text-[30px]"
                      style={{ color: isOpen ? ACCENT : "#cdd8e3" }}
                    >
                      {p.num}
                    </span>

                    {/* icon chip */}
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 sm:h-12 sm:w-12"
                      style={{
                        backgroundColor: isOpen ? ACCENT : "#e9f4fd",
                      }}
                    >
                      <Icon
                        className="h-5 w-5 transition-colors duration-300"
                        style={{ color: isOpen ? "#fff" : ACCENT }}
                        strokeWidth={2}
                      />
                    </span>

                    {/* heading */}
                    <h3
                      className="flex-1 text-[17px] font-[600] leading-snug transition-colors duration-300 sm:text-[20px] 2xl:text-[22px]"
                      style={{ color: isOpen ? "#0f172a" : "#334155" }}
                    >
                      {p.heading}
                    </h3>

                    {/* plus / rotate toggle */}
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
                      style={{
                        borderColor: isOpen ? ACCENT : "#dbe4ec",
                        backgroundColor: isOpen ? ACCENT : "transparent",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Plus
                        className="h-4 w-4 transition-colors duration-300"
                        style={{ color: isOpen ? "#fff" : "#94a3b8" }}
                        strokeWidth={2.5}
                      />
                    </span>
                  </button>

                  {/* expanding body */}
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-7 pl-[calc(26px+1rem)] pr-2 text-[14px] font-[350] leading-[1.8] text-gray-500 sm:pl-[calc(30px+1.5rem+3rem)] sm:text-[15px] 2xl:text-[16px]">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHard;