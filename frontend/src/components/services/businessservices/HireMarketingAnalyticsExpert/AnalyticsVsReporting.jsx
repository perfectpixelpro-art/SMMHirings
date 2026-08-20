import { LineChart, FileBarChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const rows = [
  { label: "Usually doing", a: "Deep analysis, insights, and experiments", b: "Automated dashboards and regular updates" },
  { label: "Trying to", a: "Find what is working and why", b: "Keep everyone aligned and informed" },
  { label: "Gets you", a: "Strategic recommendations and new tests", b: "Visual clarity and consistent tracking" },
  { label: "Bring one in when", a: "You need to figure out your direction", b: "You need a reliable source of truth" },
];

const audiences = [
  { who: "Startups", text: "Figuring out which metrics actually matter before scaling further." },
  { who: "Small businesses", text: "Getting regular reports prepared by an expert." },
  { who: "Ecommerce brands", text: "Connecting social and ad performance directly to revenue, not just clicks." },
  { who: "SaaS companies", text: "Turning product and usage data into insights the marketing team can actually use." },
  { who: "Agencies", text: "Bringing in analysts when client work gets ahead of their internal team." },
];

const AnalyticsVsReporting = () => {
  return (
    <section className="relative overflow-hidden  pt-32 pb-14 sm:pt-6 2xl:pt-6 sm:pb-24 lg:pb-20 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <span className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#e0f0fc] blur-3xl opacity-50" />
      <span className="pointer-events-none absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-[#e0f0fc] blur-3xl opacity-40" />

      <div className="relative max-w-[1700px] 2xl:max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        {/* ===== Header ===== */}
        <div className="mx-auto max-w-3xl text-center">
        

          <h2 className="mt-5 text-[27px] sm:text-[38px] lg:text-[46px] 2xl:text-[52px] font-[500] leading-[1.16] tracking-[-1px] text-black sm:tracking-[-1.5px]">
            Analytics Experts{" "}
            <span style={{ color: ACCENT }}>vs.</span> Reporting Specialists
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[16.5px] 2xl:text-[17.5px]">
            The right choice depends on what you need the data to do. For Social
            Media Analytics Services, SMM Hiring connects you with a freelancer
            who can track engagement, reach, conversions, and performance across
            your social channels.
          </p>
        </div>

        {/* ===== Versus split card ===== */}
        <div className="relative mt-14 sm:mt-16 ">
          <div className="grid grid-cols-1 overflow-hidden rounded-[28px] border border-[#eef2f7] bg-white shadow-[0_30px_70px_-42px_rgba(11,165,236,0.55)] lg:grid-cols-2">
            {/* Column A */}
            <div className="relative p-7 ml-20 2xl:ml-40 sm:p-9 2xl:p-10">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e9f4fd] to-[#dceffb]">
                  <LineChart className="h-6 w-6" style={{ color: ACCENT }} strokeWidth={2} />
                </span>
                <h3 className="text-[19px] font-[700] text-gray-900 sm:text-[21px] 2xl:text-[23px]">
                  Analytics Experts
                </h3>
              </div>

              <div className="mt-7 flex flex-col gap-5">
                {rows.map((r) => (
                  <div key={r.label}>
                    <span className="text-[12px] font-[700] uppercase tracking-[0.08em]" style={{ color: ACCENT }}>
                      {r.label}
                    </span>
                    <p className="mt-1 text-[14px] font-[400] leading-[1.6] text-gray-600 sm:text-[15px]">
                      {r.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column B */}
            <div className="relative  border-t border-[#eef2f7] bg-[#f7fbff] p-7 sm:p-9 2xl:p-10 lg:border-l lg:border-t-0">
              <div className="flex items-center gap-4 ml-20 2xl:ml-40">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#eaf3fb] to-[#dbe7f2]">
                  <FileBarChart className="h-6 w-6 text-slate-500" strokeWidth={2} />
                </span>
                <h3 className="text-[19px] font-[700] text-gray-900 sm:text-[21px] 2xl:text-[23px]">
                  Reporting Specialists
                </h3>
              </div>

              <div className="mt-7 flex flex-col gap-5 ml-20 2xl:ml-40">
                {rows.map((r) => (
                  <div key={r.label}>
                    <span className="text-[12px] font-[700] uppercase tracking-[0.08em] text-slate-500">
                      {r.label}
                    </span>
                    <p className="mt-1 text-[14px] font-[400] leading-[1.6] text-gray-600 sm:text-[15px]">
                      {r.b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* center VS badge */}
          <span className="absolute left-1/2 top-1/2 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-gray-900 text-[13px] font-[800] uppercase tracking-wide text-white shadow-lg lg:flex">
            VS
          </span>
        </div>

        {/* ===== Need more than reporting note ===== */}
        <div className="mt-8 flex items-start gap-4 rounded-[18px] border border-[#eef2f7] bg-white p-5 shadow-[0_8px_24px_-18px_rgba(11,165,236,0.55)] sm:items-center sm:p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e9f4fd]">
            <ArrowRight className="h-5 w-5" style={{ color: ACCENT }} strokeWidth={2} />
          </span>
          <p className="text-[14px] font-[350] leading-[1.7] text-gray-600 sm:text-[15.5px] 2xl:text-[16px]">
            <span className="font-[600] text-gray-900">Need more than just reporting?</span>{" "}
            You can also{" "}
            <Link
              to="/business-services/hire-social-media-manager/"
              className="font-[600] underline underline-offset-2 hover:opacity-80"
              style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
            >
              hire social media managers
            </Link>{" "}
            for strategy, content, and ongoing channel management.
          </p>
        </div>

        {/* ===== Who actually hires — horizontal numbered timeline ===== */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-[22px] font-[600] leading-tight text-gray-900 sm:text-[28px] 2xl:text-[32px]">
              Who Actually Hires{" "}
              <span style={{ color: ACCENT }}>Through This?</span>
            </h3>
          </div>

          <div className="relative mt-14">
            {/* connecting line (desktop) sits behind the number nodes */}
            <span className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-[#cfe9fb] to-transparent lg:block" />

            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0 lg:gap-x-4">
              {audiences.map((a, i) => (
                <div key={a.who} className="group relative flex flex-col items-center px-2 text-center">
                  {/* number node */}
                  <span
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-[14px] font-[700] text-white shadow-[0_10px_22px_-8px_rgba(11,165,236,0.9)] transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* title */}
                  <p className="mt-5 text-[15.5px] font-[700] text-gray-900 sm:text-[16.5px] 2xl:text-[17.5px]">
                    {a.who}
                  </p>

                  {/* description */}
                  <p className="mt-2 max-w-[240px] text-[13px] font-[350] leading-[1.6] text-gray-500 sm:text-[13.5px] 2xl:text-[14px]">
                    {a.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsVsReporting;