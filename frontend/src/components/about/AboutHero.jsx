const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f5fdff] pt-8 sm:pt-10">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[78px]">

        {/* Top Spacing */}
        <div className="pt-[80px] sm:pt-[140px] lg:pt-[170px]" />

        {/* Heading */}
        <div className="mx-auto max-w-[980px] text-center">

          <h1
            className="
              text-[#111111]
              font-[500]
              leading-[1.15]
              tracking-[-0.015em]
              text-[30px]
              sm:text-[48px]
              md:text-[56px]
              lg:text-[62px]
              xl:text-[68px]
            "
          >
            Execution aligned to defined
            {/* On mobile: no <br> so it wraps naturally */}
            <br className="hidden sm:block" />
            briefs and consistent output
          </h1>

          <p
            className="
              mx-auto
              mt-4 sm:mt-5
              max-w-[760px]
              text-[#7C8594]
              font-light
              leading-[1.7] sm:leading-[1.85]
              tracking-[0.01em]
              text-[14px]
              sm:text-[17px]
              md:text-[19px]
              text-center
              px-2 sm:px-0
            "
          >
            SMM Hiring operates as a controlled execution network where every
            <br className="hidden md:block" />
            <span className="md:block">
              task is pre-defined and delivered to a consistent standard.
            </span>
          </p>

        </div>

        {/* Stats */}
        <div className="mx-auto mt-10 sm:mt-14 lg:mt-16 max-w-[860px]">

          {/* Mobile: horizontal row. md+: 3-col grid */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-0 items-start">

            {/* Stat 1 */}
            <div className="relative flex flex-col items-center py-3 px-2">
              <h3
                className="
                  text-[#111111]
                  font-[500]
                  leading-none
                  text-[28px]
                  sm:text-[40px]
                  md:text-[46px]
                "
              >
                100%
              </h3>
              <p
                className="
                  mt-2 sm:mt-3
                  text-[#98A1B2]
                  text-[11px]
                  sm:text-[15px]
                  md:text-[16px]
                  tracking-[0.01em]
                  text-center
                  leading-snug
                "
              >
                Execution aligned to brief
              </p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[40px] sm:h-[54px] w-px bg-[#E5E7EB]" />
            </div>

            {/* Stat 2 */}
            <div className="relative flex flex-col items-center py-3 px-2">
              <h3
                className="
                  text-[#111111]
                  font-[500]
                  leading-none
                  text-[28px]
                  sm:text-[40px]
                  md:text-[46px]
                "
              >
                Zero
              </h3>
              <p
                className="
                  mt-2 sm:mt-3
                  text-[#98A1B2]
                  text-[11px]
                  sm:text-[15px]
                  md:text-[16px]
                  tracking-[0.01em]
                  text-center
                  leading-snug
                "
              >
                Interpretation required
              </p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[40px] sm:h-[54px] w-px bg-[#E5E7EB]" />
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center py-3 px-2">
              <h3
                className="
                  text-[#111111]
                  font-[500]
                  leading-none
                  text-[28px]
                  sm:text-[40px]
                  md:text-[46px]
                "
              >
                One
              </h3>
              <p
                className="
                  mt-2 sm:mt-3
                  text-[#98A1B2]
                  text-[11px]
                  sm:text-[15px]
                  md:text-[16px]
                  tracking-[0.01em]
                  text-center
                  leading-snug
                "
              >
                Standard across all output
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="pb-[60px] sm:pb-[100px] lg:pb-[120px]" />

      </div>
    </section>
  );
};

export default AboutHero;