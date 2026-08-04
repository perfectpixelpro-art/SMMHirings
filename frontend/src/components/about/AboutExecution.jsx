import { useNavigate } from "react-router-dom";

const AboutExecution = ({ landingType = "freelancer" }) => {
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate(landingType === "freelancer" ? "/login/freelancer" : "/login/business");
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[78px]">

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center">

          {/* Left — heading */}
          <div className="flex items-center h-full">
            <h2
              className="
                text-[#111111] font-[500] leading-[1.2] tracking-[-0.02em]
                lg:mt-[-12px]
                text-[28px] sm:text-[46px] md:text-[52px] lg:text-[50px]
              "
            >
              Most content doesn't
              <br />
              fail in planning. It fails
              <br />
              in execution.
            </h2>
          </div>

          {/* Right — body + quote + button */}
          <div>

            <p
              className="
                text-[#70798A] font-light tracking-[0.01em] leading-[1.7]
                text-[14.5px] sm:text-[17px] md:text-[18px]
              "
            >
              In most workflows, the thinking is clear, but the output isn't.
              The strategy may be defined, the direction may be strong, yet the
              final result still varies depending on who works on it. That
              inconsistency weakens everything that comes before it.
            </p>

            <p
              className="
                mt-5 sm:mt-7
                text-[#70798A] font-light tracking-[0.01em] leading-[1.7]
                text-[14.5px] sm:text-[17px] md:text-[18px]
              "
            >
              SMM Hiring was created to solve that problem at its root.
              Instead of leaving execution open to interpretation, it brings
              structure to how work is delivered. The aim is simple: to reduce
              variation and make the final output as reliable as the plan
              behind it.
            </p>

            {/* Quote */}
            <div className="mt-5 sm:mt-6 rounded-r-xl border-l-[4px] border-[#1DBAF8] bg-[#EAF8FF] px-5 sm:px-8 py-3.5 sm:py-4">
              <p
                className="
                  font-serif italic font-regular text-[#111111]
                  text-[14px] sm:text-[16px] md:text-[19px]
                  tracking-[0.015em] leading-snug sm:leading-normal
                "
              >
                When execution varies, the system becomes unreliable.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={handleCTA}
              className="
                mt-6
                inline-flex items-center justify-center
                rounded-[14px]
                bg-[#1DBAF8] hover:bg-[#10ADEA]
                px-8 py-3.5
                text-white font-medium text-[17px]
                transition-all duration-300
              "
            >
              Apply to SMM
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutExecution;

