export default function WhereItWorksSection({ title, platforms }) {
  if (!platforms || platforms.length === 0) return null;

  return (
    <section className="w-full bg-white py-15 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-[78px] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 sm:mb-20 lg:mb-24 text-center">
          <div className="inline-flex items-center gap-3 mb-5 sm:mb-6">
            <span className="h-[1px] w-8 sm:w-12 bg-[#1DBAF8]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#1DBAF8]">
              Where It Works
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-[#1DBAF8]" />
          </div>

          <h2
            className="
              text-[#111111]
              font-[500]
              leading-[1.1]
              tracking-[-0.02em]
              text-[30px]
              sm:text-[40px]
              md:text-[48px]
              lg:text-[56px]
              max-w-4xl mx-auto
            "
          >
            {title}
          </h2>
        </div>

        {/* Vertical timeline-style list */}
        <div className="relative">
          {/* Center vertical line (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-black/[0.08] to-transparent" />

          <div className="space-y-2 sm:space-y-3">
            {platforms.map((item, i) => {
              const isEven = i % 2 === 0;

              return (
                <div
                  key={item.name}
                  className={`
                    group relative
                    grid grid-cols-1 lg:grid-cols-2
                    gap-6 lg:gap-16
                    py-8 sm:py-10
                    ${isEven ? "" : "lg:[&>*:first-child]:order-2"}
                  `}
                >
                  {/* Content side */}
                  <div className={`relative ${isEven ? "lg:pr-8 lg:text-right" : "lg:pl-8"}`}>
                    <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-semibold text-[#111111] leading-[1.15] tracking-[-0.015em] mb-3 sm:mb-4">
                      {item.name}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-light text-[#5A6473] leading-[1.75] max-w-md lg:max-w-none lg:inline-block">
                      {item.desc}
                    </p>
                  </div>

                  {/* Number side — decorative */}
                  <div className={`relative flex items-center ${isEven ? "lg:justify-start lg:pl-8" : "lg:justify-end lg:pr-8"} hidden lg:flex`}>
                    <div className="relative">
                      {/* Giant faded number */}
                      <span className="block text-[120px] xl:text-[140px] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#1DBAF8]/15 to-[#1DBAF8]/[0.03] select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Accent line — grows on hover */}
                      <span
                        className={`
                          absolute top-1/2 -translate-y-1/2
                          ${isEven ? "left-full ml-4" : "right-full mr-4"}
                          h-[2px] bg-[#1DBAF8]
                          w-0 group-hover:w-16
                          transition-all duration-500 ease-out
                        `}
                      />
                    </div>
                  </div>

                  {/* Center dot on the timeline (desktop) */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative">
                      <span className="block w-3 h-3 rounded-full bg-white border-2 border-[#1DBAF8] group-hover:bg-[#1DBAF8] transition-colors duration-300" />
                      <span className="absolute inset-0 rounded-full bg-[#1DBAF8]/30 scale-0 group-hover:scale-[2.5] transition-transform duration-500" />
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
}