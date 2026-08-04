import NavbarC from "../NavbarC";
import { Link } from "react-router-dom";

export default function BusinessServiceHero({
  
  title,
  tagline,
  landingType,
  setLandingType,
}) {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#EAF3FB] via-[#F1F6FB] to-[#F7FAFD] overflow-hidden flex flex-col">
      {/* Soft decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#1DBAF8]/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-[#1DBAF8]/8 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-white/40 blur-[100px]" />

      {/* Navbar */}
      <NavbarC landingType={landingType} setLandingType={setLandingType} />

      {/* Main content — vertically centered, fills viewport */}
      <div className="relative flex-1 flex items-center justify-center w-full px-5 sm:px-8 lg:px-[78px] pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-6xl mx-auto text-center w-full mt-10 lg:mt-14">
         

          {/* Massive headline */}
          <h1
            className="
              text-[#111111]
              font-[500]
              leading-[1.1]
              tracking-[-0.02em]
              text-[32px]
              sm:text-[48px]
              md:text-[58px]
              lg:text-[66px]
              xl:text-[60px]
              mb-6 sm:mb-8
            "
          >
            {title}
          </h1>

          {/* Tagline */}
          <p
            className="
              mx-auto
              max-w-[920px]
              text-[#5A6473]
              font-light
              leading-[1.7] sm:leading-[1.85]
              tracking-[0.01em]
              text-[15px]
              sm:text-[17px]
              md:text-[19px]
              text-center
              px-2 sm:px-0
              mb-10 sm:mb-12
            "
          >
            {tagline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-20">
            <div className="flex flex-col sm:flex-row gap-4">
  <Link to="/business-login">
    <button className="w-full sm:w-auto bg-[#1DBAF8] hover:bg-[#0fa8e6] text-white font-medium text-[15px] sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#1DBAF8]/25 hover:shadow-xl hover:shadow-[#1DBAF8]/30">
      Hire a Freelancer
    </button>
  </Link>

  <Link to="/business-login">
    <button className="w-full sm:w-auto border border-black/15 hover:border-black/40 bg-white/60 backdrop-blur-sm text-black font-medium text-[15px] sm:text-base px-8 py-3.5 rounded-full transition-all duration-300">
      Talk to Us
    </button>
  </Link>
</div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto pt-8 sm:pt-10 border-t border-black/8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-none mb-2">
                48h
              </div>
              <div className="text-[11px] sm:text-sm text-[#7C8594] leading-tight">
                Avg. onboarding
              </div>
            </div>
            <div className="text-center border-x border-black/8">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-none mb-2">
                100%
              </div>
              <div className="text-[11px] sm:text-sm text-[#7C8594] leading-tight">
                Vetted specialists
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-none mb-2">
                1:1
              </div>
              <div className="text-[11px] sm:text-sm text-[#7C8594] leading-tight">
                Matched to brief
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}