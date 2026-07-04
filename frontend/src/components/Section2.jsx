import React from "react";
import section2bg from "../assets/section2bg.png";

export default function Section2() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-center"
      style={{ minHeight: "220px" }}
    >
      {/* Background Image */}
      <img
        src={section2bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Content on top of bg */}
      <div className="relative z-10 px-5 py-12 sm:px-10 sm:py-14 md:px-20 md:py-16 lg:px-32 lg:py-20">

        {/* Heading — large bold */}
        <h2
          className="text-gray-900 text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[38px]"
          style={{ fontWeight: 700, lineHeight: "1.2", marginBottom: "4px" }}
        >
          A Closed System for
        </h2>

        {/* Blue italic — slightly smaller than heading, matching screenshot */}
        <p
          className="text-[18px] sm:text-[21px] md:text-[24px] lg:text-[27px] xl:text-[30px]"
          style={{
            color: "#12B3EF",
            fontStyle: "italic",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 700,
            lineHeight: "1.3",
            marginBottom: "16px",
          }}
        >
          Content Execution
        </p>

        {/* Subtext */}
        <p
          className="text-gray-500 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.7] max-w-[480px] mx-auto"
        >
          Work moves through a defined process from assignment to delivery.
          <br className="hidden sm:block" />
          Each task comes with a clear brief and a fixed standard.
        </p>
      </div>
    </section>
  );
}