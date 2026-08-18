import {
  ArrowRight,
  ClipboardCheck,
  PenLine,
  SlidersHorizontal,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const features = [
  {
    icon: ClipboardCheck,
    label: "Reviewed shortlist",
    desc: "Matched to your needs, not a pile of applications.",
  },
  {
    icon: PenLine,
    label: "Every content skill",
    desc: "SEO content, blog, and website copywriting, and more.",
  },
  {
    icon: SlidersHorizontal,
    label: "Flexible hiring",
    desc: "One project, ongoing support, or a lasting role.",
  },
  {
    icon: MessageSquare,
    label: "Direct contact",
    desc: "Talk straight to your writer, no middle layer.",
  },
];

const ContentWritersHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9ff] via-[#f7fbff] to-white pt-16 pb-14 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 2xl:pt-32 2xl:pb-28 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      {/* ambient accents */}
      <span className="pointer-events-none absolute left-1/2 -top-24 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-[#cfe9fb] blur-3xl opacity-50" />
      <span className="pointer-events-none absolute -left-24 top-52 h-64 w-64 rounded-full bg-[#e0f0fc] blur-3xl opacity-50" />
      <span className="pointer-events-none absolute -right-24 top-40 h-64 w-64 rounded-full bg-[#e0f0fc] blur-3xl opacity-50" />

      <div className="relative max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

        {/* ===== Centered copy ===== */}
        <div className="mx-auto max-w-5xl mt-10 2xl:mt-10 text-center">
          <h1 className="mx-auto max-w-4xl  2xl:max-w-5xl text-center text-[30px] sm:text-[42px] lg:text-[52px] 2xl:text-[62px] font-[500] leading-[1.14] tracking-[-1.5px] text-black">
            Hire Content Writers and Copywriters{" "}
            <span style={{ color: ACCENT }}>Matched to Your Needs</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[18px] sm:leading-[1.75] 2xl:text-[19px]">
            We review content writers and copywriters ourselves and match them to
            your industry, content needs, and budget. Need a writer, a copywriter,
            or both? Same process either way, so you're not the one digging
            through applications.
          </p>

          <div className="mt-9 flex justify-center sm:mt-11 2xl:mt-15">
            <Link
              to="/login/business"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-[15px] font-[600] text-white shadow-[0_18px_38px_-14px_rgba(11,165,236,0.9)] transition-all duration-200 hover:-translate-y-[2px] hover:opacity-95 2xl:text-[16px]"
              style={{ backgroundColor: ACCENT }}
            >
              Hire a Writer
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                strokeWidth={2.5}
              />
            </Link>
          </div>
        </div>

        {/* ===== Feature strip ===== */}
        <div className="mx-auto mt-14 max-w-6xl sm:mt-10 2xl:mt-25">
          <div className="grid grid-cols-1 overflow-hidden rounded-[24px] border border-[#eaf3fb] bg-white/80 shadow-[0_30px_60px_-34px_rgba(11,165,236,0.5)] backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4 sm:rounded-[28px]">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.label}
                  className="group border-b border-[#eef4fa] p-6 transition-colors duration-200 last:border-b-0 hover:bg-[#f7fbff] sm:[&:nth-child(2)]:border-l lg:border-b-0 lg:border-l lg:first:border-l-0 sm:[&:nth-child(3)]:border-l-0 lg:[&:nth-child(3)]:border-l 2xl:p-7"
                  style={{ borderColor: "#eef4fa" }}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e9f4fd] transition-colors duration-200 group-hover:bg-[#dceffc]">
                    <Icon className="h-[20px] w-[20px]" style={{ color: ACCENT }} strokeWidth={2} />
                  </span>
                  <p className="mt-4 text-[15.5px] font-[600] leading-snug text-gray-900 2xl:text-[16.5px]">
                    {feature.label}
                  </p>
                  <p className="mt-1.5 text-[13px] font-[350] leading-[1.6] text-gray-500 2xl:text-[14px]">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentWritersHero;