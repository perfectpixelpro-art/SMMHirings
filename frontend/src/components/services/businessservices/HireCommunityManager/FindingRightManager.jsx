import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const challenges = [
  {
    title: "Finding the Right Experience",
    body: (
      <>
        An{" "}
        <span className="font-[600] text-gray-800">Online Community Manager</span>{" "}
        needs more than social media skills. They need to understand your
        audience, handle conversations well, and represent your brand.
      </>
    ),
  },
  {
    title: "Screening Takes Time",
    body: (
      <>
        Applications rarely show how someone will handle real customer
        conversations, moderation, or difficult situations.{" "}
        <span className="font-[600] text-gray-800">
          Customer Community Management
        </span>{" "}
        requires judgment you can't always see on a CV.
      </>
    ),
  },
  {
    title: "Finding the Right Fit",
    body: (
      <>
        Your community manager speaks directly to your audience, so the person
        needs to understand your brand and communication style. That's why{" "}
        <span className="font-[600] text-gray-800">
          Brand Community Management
        </span>{" "}
        depends on finding someone who fits.
      </>
    ),
  },
  {
    title: "Knowing Who Can Actually Handle Your Community",
    body: (
      <>
        A community manager represents your brand in real time. They need to know
        how to respond to customers, handle sensitive conversations, follow your
        brand voice, and know when to step in or step back. Finding someone with
        the right{" "}
        <span className="font-[600] text-gray-800">community management skills</span>{" "}
        takes more than simply reviewing a CV.
      </>
    ),
  },
];

const FindingRightManager = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9ff] via-white to-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      {/* ambient accent */}
      <span className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#d6edfc] blur-3xl opacity-50" />

      <div className="relative max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 2xl:gap-24">

          {/* ===== Left: sticky heading + callout ===== */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-[13px]">
              The Challenge
            </p>

            <h2 className="mt-3 text-[26px] sm:text-[40px] lg:text-[46px] 2xl:text-[52px] font-[500] leading-[1.15] tracking-[-1px] text-black sm:leading-[1.12] sm:tracking-[-1.5px]">
              Finding the Right Community Manager{" "}
              <span style={{ color: ACCENT }}>Isn't Always Easy</span>
            </h2>

            <p className="mt-5 max-w-md text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[16.5px] sm:leading-[1.75] 2xl:text-[18px]">
              Hiring a community manager can look simple until you start sorting
              through candidates.
            </p>

            {/* closing callout with interlink */}
            <div className="mt-8 rounded-[20px] border border-[#cfe9fb] bg-[#f2f9ff] p-5 sm:p-6">
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Search className="h-5 w-5" style={{ color: ACCENT }} strokeWidth={2} />
                </span>
                <p className="text-[13.5px] font-[350] leading-[1.7] text-gray-600 sm:text-[14.5px]">
                  If you're already spending too much time searching,{" "}
                  <Link
                    to="/business-services/hire-content-writer-copywriter/"
                    className="font-[600] underline underline-offset-2 hover:opacity-80"
                    style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
                  >
                    Hire Content Writers &amp; Copywriters
                  </Link>{" "}
                  through SMM Hiring for your wider content needs.
                </p>
              </div>
            </div>
          </div>

          {/* ===== Right: numbered challenge list ===== */}
          <div className="flex flex-col">
            {challenges.map((item, i) => (
              <div
                key={item.title}
                className="group relative border-t border-[#e5edf5] py-6 pl-0 transition-all duration-200 first:border-t-0 first:pt-0 sm:py-8 lg:pl-6"
              >
                {/* hover accent bar */}
                <span
                  className="pointer-events-none absolute left-0 top-1/2 hidden h-0 w-[3px] -translate-y-1/2 rounded-full transition-all duration-300 group-hover:h-[68%] lg:block"
                  style={{ backgroundColor: ACCENT }}
                />

                <div className="flex items-start gap-5 sm:gap-7">
                  <span
                    className="text-[24px] font-[600] leading-none tabular-nums sm:text-[30px] 2xl:text-[34px]"
                    style={{ color: "rgba(11,165,236,0.35)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-[16.5px] font-[600] leading-snug text-gray-900 transition-colors duration-200 group-hover:text-[#0b6fa6] sm:text-[19px] 2xl:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] font-[350] leading-[1.75] text-gray-500 sm:text-[15px] 2xl:text-[16px]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindingRightManager;