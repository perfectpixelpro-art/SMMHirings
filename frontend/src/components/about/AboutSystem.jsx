import bgLines from "../../assets/bg_img.jpg";

const AboutSystem = () => {
  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 lg:py-28"
      style={{
        backgroundImage: `url(${bgLines})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100% 100%",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[78px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.84fr_1.16fr] gap-8 lg:gap-16 xl:gap-24">

          {/* Left — heading */}
          <div className="pt-0 lg:pt-2">
            <h2
              className="
                text-[#111111]
                font-[500]
                tracking-[-0.02em]
                leading-[1.2]
                text-[28px]
                sm:text-[46px]
                md:text-[52px]
                lg:text-[50px]
              "
            >
              A system designed
              <br />
              for execution, not
              <br />
              <span className="italic text-[#1DBAF8]">exploration.</span>
            </h2>
          </div>

          {/* Right — body */}
          <div className="max-w-[820px]">

            {/* Mobile separator */}
            <div className="block sm:hidden w-10 h-[2px] bg-[#E5E7EB] mb-5 rounded-full" />

            <p
              className="
                text-[#70798A]
                font-light
                tracking-[0.01em]
                leading-[1.75]
                text-[14.5px]
                sm:text-[17px]
                md:text-[18px]
              "
            >
              SMM Hiring does not operate like an open platform. It is not a
              place where work is discovered, pitched for, or negotiated. Work
              moves through a defined path and reaches the people selected to
              execute it.
            </p>

            <p
              className="
                mt-5 sm:mt-8
                text-[#70798A]
                font-light
                tracking-[0.01em]
                leading-[1.75]
                text-[14.5px]
                sm:text-[17px]
                md:text-[18px]
              "
            >
              That changes the role completely. Instead of figuring out what the
              work should be, the focus shifts to how well it is delivered. The
              expectation is not interpretation. It is precision.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSystem;