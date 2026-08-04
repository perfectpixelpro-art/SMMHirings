import { useNavigate } from "react-router-dom";
import meetImg from "../../assets/meetImg.png";

const AboutOpportunities = ({ landingType = "freelancer" }) => {
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate(landingType === "freelancer" ? "/login/freelancer" : "/login/business");
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[78px]">

        <div
          className="
            relative overflow-hidden
            rounded-[28px] border border-[#78D5FF] bg-[#EAF8FF]
            px-8 py-10 sm:px-12 lg:px-20 lg:py-10
          "
        >
          <div
            className="
              grid grid-cols-1 lg:grid-cols-[45%_55%]
              items-center lg:items-start
              gap-10
              h-[600px] lg:min-h-0 lg:h-[400px]
            "
          >

            {/* LEFT */}
            <div className="max-w-[500px] text-center lg:text-left lg:pt-4">
              <h2
                className="
                  text-[#111111] font-[500] tracking-[-0.02em] leading-[1.3]
                  text-[28px] sm:text-[46px] md:text-[52px] lg:text-[50px]
                "
              >
                Execution meets the
                <br />
                right opportunities
              </h2>

              <p
                className="
                  mt-7 max-w-[520px]
                  text-[#70798A] font-light tracking-[0.01em] leading-[1.9]
                  text-[16px] sm:text-[17px] md:text-[18px]
                "
              >
                Freelancers are matched with projects that align with
                their existing level of execution, allowing the quality
                of work to evolve further.
              </p>

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
                Explore Opportunities
              </button>
            </div>

            {/* RIGHT */}
            <div
              className="
                relative
                flex justify-center lg:justify-end
                items-center lg:items-start
                mt-10 lg:mt-0
                h-full
              "
            >
              <img
                src={meetImg}
                alt="Execution Meets Opportunity"
                className="w-full max-w-[610px] object-contain select-none"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutOpportunities;