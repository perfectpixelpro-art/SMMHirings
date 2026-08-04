export default function WhatIsSection({ title, description }) {
  return (
    <section className="relative w-full bg-white py-15 sm:py-24 lg:py-20 px-5 sm:px-8 lg:px-[78px] overflow-hidden">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1DBAF8]/[0.03] blur-[100px]" />

      <div className="relative max-w-5xl mx-auto">
        {/* Small label */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="h-[1px] w-8 sm:w-12 bg-[#1DBAF8]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#1DBAF8]">
            Overview
          </span>
        </div>

        {/* Two-column layout on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left: Title */}
          <div className="lg:col-span-5">
            <h2
              className="
                text-[#111111]
                font-[500]
                leading-[1.15]
                tracking-[-0.02em]
                text-[28px]
                sm:text-[36px]
                md:text-[42px]
                lg:text-[50px]
              "
            >
              {title}
            </h2>
          </div>

          {/* Right: Description */}
          <div className="lg:col-span-7 lg:pt-2">
            <p
              className="
                text-[#5A6473]
                font-light
                leading-[1.8]
                tracking-[0.005em]
                text-[15px]
                sm:text-[17px]
                md:text-[18px]
              "
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


