import {
  ArrowRight,
  ClipboardCheck,
  PenLine,
  SlidersHorizontal,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import G7SMM from "../../../../assets/G111SMM.png";

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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9ff] via-[#f7fbff] to-white pt-24 pb-14 sm:pt-32 sm:pb-16 lg:pt-45 lg:pb-20 2xl:pt-60 2xl:pb-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      {/* ambient accents */}
      <span className="pointer-events-none absolute left-1/2 -top-24 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-[#cfe9fb] blur-3xl opacity-50" />
      <span className="pointer-events-none absolute -left-24 top-52 h-64 w-64 rounded-full bg-[#e0f0fc] blur-3xl opacity-50" />
      <span className="pointer-events-none absolute -right-24 top-40 h-64 w-64 rounded-full bg-[#e0f0fc] blur-3xl opacity-50" />

      <div className="relative max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        {/* ===== Top: copy left, image right ===== */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[3fr_2.2fr] lg:gap-16 xl:gap-20 2xl:gap-16">
          {/* LEFT: CONTENT */}
          <div className="text-center lg:text-left">
            <h1 className="max-w-2xl  2xl:max-w-4xl mx-auto lg:mx-0 text-[30px] sm:text-[42px] lg:text-[46px] xl:text-[52px] 2xl:text-[60px] font-[500] leading-[1.12] tracking-[-1.5px] text-black">
              Hire Content Writers and Copywriters{" "}
              <span style={{ color: ACCENT }}>Matched to Your Needs</span>
            </h1>

            <p className="mt-5 2xl:mt-8 max-w-2xl mx-auto lg:mx-0 text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[16.5px] sm:leading-[1.7] 2xl:text-[18px]">
              We review content writers and copywriters ourselves and match them
              to your industry, content needs, and budget. Need a writer, a
              copywriter, or both? Same process either way, so you're not the one
              digging through applications.
            </p>

            <div className="mt-7 2xl:mt-12 flex justify-center lg:justify-start">
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

          {/* RIGHT: IMAGE */}
          <div className="flex justify-center lg:justify-end rounded-[16px]">
<div className="w-full max-w-[360px] lg:max-w-[420px] xl:max-w-[480px] rounded-[16px] overflow-hidden">
  <img
    src={G7SMM}
    alt="Content writers and copywriters matched to your business"
    className="w-full h-auto object-cover block rounded-[16px]"
  />
</div>
          </div>
        </div>

        {/* ===== Feature strip (full width) ===== */}
        <div className="mt-10 sm:mt-12 lg:mt-12 2xl:mt-22">
          <div className="grid grid-cols-1 overflow-hidden rounded-[24px] border border-[#eaf3fb] bg-white/80 shadow-[0_30px_60px_-34px_rgba(11,165,236,0.5)] backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4 sm:rounded-[28px]">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.label}
                  className="group border-b border-[#eef4fa] p-5 transition-colors duration-200 last:border-b-0 hover:bg-[#f7fbff] sm:[&:nth-child(2)]:border-l lg:border-b-0 lg:border-l lg:first:border-l-0 sm:[&:nth-child(3)]:border-l-0 lg:[&:nth-child(3)]:border-l 2xl:p-6"
                  style={{ borderColor: "#eef4fa" }}
                >
                  {/* icon + label inline */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#e9f4fd] transition-colors duration-200 group-hover:bg-[#dceffc]">
                      <Icon className="h-[19px] w-[19px]" style={{ color: ACCENT }} strokeWidth={2} />
                    </span>
                    <p className="text-[15px] font-[600] leading-snug text-gray-900 2xl:text-[16px]">
                      {feature.label}
                    </p>
                  </div>

                  <p className="mt-2.5 text-[12.5px] font-[350] leading-[1.55] text-gray-500 2xl:text-[13.5px]">
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