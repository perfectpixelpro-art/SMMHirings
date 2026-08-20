import { FileX2, LayoutDashboard, Share2, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const problems = [
  {
    icon: FileX2,
    title: "Reports No One Reads",
    body: (
      <>
        When you{" "}
        <Link to="/login/business" className="font-[600] underline underline-offset-2 hover:opacity-80" style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}>
          Hire Reporting Specialist
        </Link>{" "}
        through SMM Hiring, you work with a freelancer who turns complex data into
        clear reports that explain what changed and what it means for your
        business.
      </>
    ),
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards Without Action",
    body: (
      <>
        Through Dashboard Setup Services, you can hire a freelancer to focus your
        dashboard on the KPIs that matter, making it easier to track performance
        and spot issues.
      </>
    ),
  },
  {
    icon: Share2,
    title: "Siloed Social Data",
    body: (
      <>
        Need Social Media Reporting Services? SMM Hiring can connect you with a
        freelancer who brings insights from Instagram, LinkedIn, and YouTube into
        one clear view.
      </>
    ),
  },
  {
    icon: TrendingUp,
    title: "Marketing That Doesn't Connect to Revenue",
    body: (
      <>
        For Marketing Analytics Services, you can hire a freelancer who connects
        clicks, leads, sales, and revenue to your marketing activity. Performance
        Reporting Services track these results and identify changes in marketing
        performance.
      </>
    ),
  },
  {
    icon: Clock,
    title: "Lack of In-House Resources",
    body: (
      <>
        When you{" "}
        <Link to="/login/business" className="font-[600] underline underline-offset-2 hover:opacity-80" style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}>
          Hire Reporting Specialist
        </Link>{" "}
        support, you can bring in freelance help to keep reporting and monthly
        reviews on track when your internal team is busy.
      </>
    ),
  },
];

const ProblemsFreelancerSolves = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fbfdff] to-white py-14 sm:py-20 lg:py-24 2xl:py-28 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <span className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#e0f0fc] blur-3xl opacity-50" />
      <span className="pointer-events-none absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-[#e0f0fc] blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-[1300px] px-5 md:px-10 lg:px-[78px]">
        {/* ===== Centered header ===== */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-[27px] sm:text-[38px] lg:text-[46px] 2xl:text-[52px] font-[500] leading-[1.16] tracking-[-1px] text-black sm:tracking-[-1.5px]">
            What Problems Can an{" "}
            <span style={{ color: ACCENT }}>Analytics & Reporting Freelancer</span>{" "}
            Solve?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[16.5px] 2xl:text-[17.5px]">
            From reports no one reads to data trapped in silos, the right freelance
            specialist turns scattered numbers into decisions your business can
            actually act on.
          </p>
        </div>

        {/* ===== Center-spine timeline ===== */}
        <div className="relative mt-16 sm:mt-20">
          {/* vertical spine (desktop) */}
          <span className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#cfe9fb] to-transparent lg:block" />

          <div className="flex flex-col gap-10 lg:gap-16">
            {problems.map((p, i) => {
              const Icon = p.icon;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={p.title}
                  className="group relative lg:grid lg:grid-cols-[1fr_56px_1fr] lg:items-center lg:gap-0"
                >
                  {/* Card */}
                  <div
                    className={`${
                      isLeft
                        ? "lg:col-start-1 lg:pr-14 lg:text-right"
                        : "lg:col-start-3 lg:pl-14"
                    }`}
                  >
                    <div className="rounded-[22px] border border-[#eef2f7] bg-white p-6 shadow-[0_14px_40px_-28px_rgba(11,165,236,0.6)] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#cfe9fb] hover:shadow-[0_26px_52px_-30px_rgba(11,165,236,0.8)] sm:p-7 2xl:p-8">
                      <span className="text-[13px] font-[800] tracking-wide" style={{ color: ACCENT }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 text-[18px] font-[700] leading-snug text-gray-900 sm:text-[20px] 2xl:text-[22px]">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-[13.5px] font-[350] leading-[1.75] text-gray-500 sm:text-[14.5px] 2xl:text-[15px]">
                        {p.body}
                      </p>
                    </div>
                  </div>

                  {/* Spine icon node — desktop */}
                  <div className="col-start-2 row-start-1 hidden items-center justify-center lg:flex">
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#cfe9fb] bg-white shadow-[0_6px_18px_-6px_rgba(11,165,236,0.5)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#0BA5EC] group-hover:bg-[#e9f7fe] group-hover:shadow-[0_0_0_4px_rgba(11,165,236,0.15),0_14px_28px_-10px_rgba(11,165,236,0.7)]">
                      {/* pulsing ring on hover */}
                      <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-[#0BA5EC]/30 scale-100 opacity-0 transition-all duration-500 group-hover:scale-[1.35] group-hover:opacity-100" />
                      <Icon
                        className="relative h-6 w-6 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(11,165,236,0.8)]"
                        style={{ color: ACCENT }}
                        strokeWidth={2}
                      />
                    </span>
                  </div>

                  {/* mobile inline icon */}
                  <div className="mb-4 flex lg:hidden">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#cfe9fb] bg-white shadow-[0_6px_18px_-6px_rgba(11,165,236,0.5)] transition-all duration-300 group-hover:border-[#0BA5EC] group-hover:bg-[#e9f7fe] group-hover:shadow-[0_0_0_4px_rgba(11,165,236,0.15),0_10px_22px_-8px_rgba(11,165,236,0.7)]">
                      <Icon
                        className="relative h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_rgba(11,165,236,0.8)]"
                        style={{ color: ACCENT }}
                        strokeWidth={2}
                      />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== content-writer interlink note ===== */}
        <div className="mx-auto mt-14 flex max-w-2xl items-start gap-4 rounded-[18px] border border-[#eef2f7] bg-white p-5 shadow-[0_8px_24px_-18px_rgba(11,165,236,0.55)] sm:items-center sm:p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e9f4fd]">
            <TrendingUp className="h-5 w-5" style={{ color: ACCENT }} strokeWidth={2} />
          </span>
          <p className="text-[14px] font-[350] leading-[1.7] text-gray-600 sm:text-[15px]">
            If your content is not aligned with what the data says, consider{" "}
            <Link
              to="/business-services/hire-content-writer-copywriter/"
              className="font-[600] underline underline-offset-2 hover:opacity-80"
              style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
            >
              hiring content writers & copywriters
            </Link>{" "}
            to execute the new direction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsFreelancerSolves;