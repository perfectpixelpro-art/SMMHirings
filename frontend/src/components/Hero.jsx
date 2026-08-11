import { useNavigate } from "react-router-dom";
import freelancerVideo from "../assets/Freelancers.mp4";
import businessVideo from "../assets/Business.mp4";

export default function Hero({ landingType, setLandingType }) {
  const isFreelancer = landingType === "freelancer";
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate(isFreelancer ? "/login/freelancer" : "/login/business");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        key={landingType}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={isFreelancer ? freelancerVideo : businessVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero Content */}
      <div className="relative z-20 flex h-full flex-col">

        {/* ── MOBILE: content pinned to bottom over video ── */}
        <div className="sm:hidden flex flex-col justify-end h-full pb-10 px-5">

          {/* Toggle */}
          <div
            className="flex rounded-full p-1 self-start mb-5"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            <button
              onClick={() => setLandingType("freelancer")}
              className={`
                px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-300
                ${isFreelancer
                  ? "bg-[#1CB9F5] text-white shadow-sm"
                  : "text-white/80 hover:text-white"
                }
              `}
            >
              Freelancer
            </button>
            <button
              onClick={() => setLandingType("business")}
              className={`
                px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-300
                ${!isFreelancer
                  ? "bg-[#19baf5] text-white shadow-sm"
                  : "text-white/80 hover:text-white"
                }
              `}
            >
              Business
            </button>
          </div>

          {/* Heading */}
          <h1 className="text-white font-bold tracking-[-0.5px] leading-[1.1] text-[26px] mb-4">
            {isFreelancer ? (
               <>Find Top-Rated Freelancers<br />Jobs for Digital Marketing & <br/>Creative Services</>
            ) : (
              <>Skip the search.<br />Get the right fit.</>
            )}
          </h1>

          {/* Sub line */}
          <p className="text-white/75 text-[13px] leading-relaxed mb-6">
            {isFreelancer
              ? "Free to apply. No subscription. No bidding against other freelancers."
              : "Vetted talent, matched to your brief. Managed end-to-end."}
          </p>

          {/* CTA Button */}
          <button
            onClick={handleCTA}
            className={`
              w-full h-[50px]
              rounded-full
              active:scale-95
              transition-all duration-300
              text-[15px] font-semibold text-white shadow-md
              ${isFreelancer
                ? "bg-[#1CB9F5] hover:bg-[#14ACE8]"
                : "bg-[#19baf5] hover:bg-[#339900]"
              }
            `}
          >
            {isFreelancer ? "Apply as a Freelancer" : "Hire a Freelancer"}
          </button>

        </div>

        {/* ── DESKTOP: unchanged ── */}
        <div className="hidden sm:flex flex-1 items-center">
          <div className="w-full mt-[-60px] max-w-[1700px] mx-auto px-10 lg:px-[78px]">
            <div className="max-w-[1120px]">
              <h1
                className="
                  text-white font-semibold tracking-[-0.5px] leading-[1.1]
                  text-[56px]
                  md:text-[64px]
                  lg:text-[74px]
                  xl:text-[60px]
                   2xl:text-[75px]
                "
              >
                {isFreelancer ? (
                  <>Find Top-Rated Freelancers<br />Jobs for Digital Marketing & <br/>Creative Services</>
                ) : (
                  <>Skip the search.<br />Get the right fit.</>
                )}
              </h1>

              <button
                onClick={handleCTA}
                className="
                  mt-6
                  h-[58px]
                  rounded-full
                  bg-[#1CB9F5] hover:bg-[#14ACE8]
                  transition-all duration-300
                  px-8
                  text-[18px]
                  font-medium text-white shadow-lg
                "
              >
                {isFreelancer ? "Apply as a Freelancer" : "Hire a Freelancer"}
              </button>
              <p className="text-white mt-6">
                {isFreelancer ? (
                  <>Free to apply. No subscription. No bidding against other freelancers.</>
                ) : (
                  <></>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* ── DESKTOP: Bottom Glass Bar ── */}
        <div className="hidden sm:block absolute bottom-8 left-0 w-full">
          <div
            className="mx-10 lg:mx-[78px] rounded-[16px] relative overflow-hidden"
            style={{
              background: "rgba(18, 179, 239, 0.28)",
              backdropFilter: "blur(12px) saturate(160%)",
              WebkitBackdropFilter: "blur(12px) saturate(160%)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-[1px] pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
              }}
            />
            <div className="px-8 py-[14px] relative z-10">
              <p className="text-center text-white text-[14px] md:text-[15px] lg:text-[18px] font-normal leading-[2]">
                {isFreelancer
                  ? "Most Freelance and  Digital Marketing  jobs start with a proposal you send into silence. Here, you skip that step. Apply once, and defined briefs come to you based on what you specialize in, whether that's short-form video, copywriting, community management, or paid socials."
                  : "Forget sorting through hundreds of profiles or gambling on a stranger's promises. Get matched directly with talent already vetted for your exact need."}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
