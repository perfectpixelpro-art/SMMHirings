import { Link } from "react-router-dom";

const STATS = [
  { value: "48 Hours", label: "Average time to your first match after approval." },
  { value: "100%", label: "Every business gets reviewed before a job ever reaches a freelancer." },
  { value: "1:1 Matching", label: "One brief, one freelancer, no bidding wars." },
];

const FreelancerHero = () => {
  // Smooth-scroll to the services/jobs section below the hero.
  const seeJobs = () => {
    const el = document.getElementById("freelancer-services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#f5fdff] pt-8 sm:pt-10 2xl:flex 2xl:min-h-screen 2xl:flex-col 2xl:justify-center 2xl:pt-0">
      {/* Soft brand glow accent */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[820px] -translate-x-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(28,185,245,0.16), rgba(28,185,245,0))",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[78px]">
        {/* Top Spacing */}
        <div className="pt-[96px] sm:pt-[128px] lg:pt-[150px] 2xl:pt-30" />

        {/* Heading */}
        <div className="mx-auto max-w-[1140px] text-center">
          <h1
            className="
              text-[#111111]
              font-[500]
              leading-[1.14]
              tracking-[-0.015em]
              text-[26px]
              sm:text-[36px]
              md:text-[42px]
              lg:text-[46px]
              xl:text-[54px]
              2xl:text-[60px]
            "
          >
            Stop Chasing Freelance Marketing Jobs.
            <br className="hidden sm:block" /> Start Getting Matched to Them.
          </h1>

          {/* Subtext */}
          <p
            className="
              mx-auto
              mt-4 sm:mt-8
              max-w-[880px]
              text-[#7C8594]
              font-light
              leading-[1.7] sm:leading-[1.8]
              tracking-[0.01em]
              text-[14px]
              sm:text-[16px]
              md:text-[18px]
              px-1 sm:px-0
            "
          >
            <Link
              to="/"
              className="font-medium text-[#111111] underline underline-offset-2 transition-colors hover:text-[#12b3ef]"
            >
              SMM Hiring
            </Link>{" "}
            is a freelance marketing platform for social media and digital
            marketing professionals. If you are a freelance social media manager
            or digital marketing freelancer looking for remote marketing jobs or
            freelance digital marketing projects, this is built for you. Apply
            once, build your profile, and get matched to freelance marketing jobs
            where the brief, rate, and timeline are already sorted before you say
            yes.
          </p>

          {/* CTAs */}
          <div className="mt-6 2xl:mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/login/freelancer"
              className="group inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#1CB9F5] px-8 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(28,185,245,0.32)] transition hover:bg-[#14ACE8] sm:w-auto"
            >
              Apply as a Freelancer
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <button
              type="button"
              onClick={seeJobs}
              className="inline-flex h-[50px] w-full items-center justify-center rounded-full border border-[#cfe6f5] bg-white px-8 text-[15px] font-semibold text-[#1b1e24] transition hover:border-[#12b3ef] hover:text-[#12b3ef] sm:w-auto"
            >
              See Available Jobs
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-10 sm:mt-12 lg:mt-14 2xl:mt-20 max-w-[920px]">
          <div className="grid grid-cols-3 gap-0 items-start">
            {STATS.map((s, i) => (
              <div
                key={s.value}
                className="relative flex flex-col items-center px-2 py-3 sm:px-4"
              >
                <h3 className="text-[#111111] font-[600] leading-none text-[24px] sm:text-[34px] md:text-[32px] 2xl:text-[40px]">
                  {s.value}
                </h3>
                <p className="mt-2 sm:mt-3 max-w-[240px] text-center text-[11px] leading-snug tracking-[0.01em] text-[#98A1B2] sm:text-[14px] md:text-[14px] 2xl:text-[16px]">
                  {s.label}
                </p>
                {i !== STATS.length - 1 && (
                  <div className="absolute right-0 top-1/2 h-[44px] w-px -translate-y-1/2 bg-[#E5E7EB] sm:h-[58px]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="pb-[48px] sm:pb-[72px] lg:pb-[88px] 2xl:pb-0" />
      </div>
    </section>
  );
};

export default FreelancerHero;