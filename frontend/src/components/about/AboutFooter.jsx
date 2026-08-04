import { useNavigate } from "react-router-dom";
import fotter_bg from "../../assets/footer_bg.jpg";

const AboutFooter = ({ landingType = "freelancer" }) => {
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate(landingType === "freelancer" ? "/login/freelancer" : "/login/business");
  };

  return (
    <section
      className="relative mb-[-60px] overflow-hidden"
      style={{
        backgroundImage: `url(${fotter_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div
        className="
          relative z-10 mx-auto max-w-[1440px]
          flex flex-col items-center justify-center text-center
          px-5 sm:px-10 lg:px-[78px]
          py-16 sm:py-20 lg:py-24
          min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]
        "
      >
        {/* Heading */}
        <h2
          className="
            text-black font-[500] tracking-[-0.03em] leading-[1.15]
            text-[24px] sm:text-[38px] md:text-[46px] lg:text-[50px]
            px-2 sm:px-0
          "
        >
          When Execution Is{" "}
          <span className="text-[#13b3ef]">Controlled,</span>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          The Output Becomes Reliable.
        </h2>

        {/* Description */}
        <p
          className="
            mt-5 sm:mt-7 lg:mt-8
            max-w-[680px] sm:max-w-[740px] lg:max-w-[800px]
            text-black font-light tracking-[0.01em] leading-[1.7]
            text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]
            px-1 sm:px-0
          "
        >
          SMM Hiring exists to ensure that content does not lose its strength in
          the final stage. Every piece is built on the same foundation, follows
          the same level of clarity, and is delivered with the same expectation.
          That consistency is what makes the system work.
        </p>

        {/* Button */}
        <button
          onClick={handleCTA}
          className="
            mt-7 sm:mt-8
            rounded-[12px] sm:rounded-[14px]
            bg-[#12B3EF] border border-[#8BE3FF]
            px-7 sm:px-9 py-2.5 sm:py-3
            text-white font-medium
            text-[15px] sm:text-[17px] lg:text-[18px]
            transition-all duration-300
            hover:bg-[#08A9E9] active:scale-95
          "
        >
          Apply to SMM Hiring
        </button>
      </div>
    </section>
  );
};

export default AboutFooter;