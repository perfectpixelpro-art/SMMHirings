import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import businessServicesData from "../../data/businessServicesData";
import Navbar from "../../components/Navbar";

export default function BusinessServicePage() {
  const { slug } = useParams();
  const service = businessServicesData[slug];
  const [landingType, setLandingType] = useState("business");

  if (!service) return <Navigate to="/" replace />;

  return (
    <div className="w-full bg-white">
      {/* ================= */}
      {/* HERO SECTION */}
      {/* ================= */}
      <section className="relative w-full bg-black overflow-hidden">
        <Navbar landingType={landingType} setLandingType={setLandingType} />

        <div className="relative w-full px-5 sm:px-8 lg:px-[78px] pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-5xl mx-auto text-center">
            {/* Category badge */}
            <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-[#1DBAF8] mb-5 sm:mb-6">
              {service.category}
            </span>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-6 sm:mb-8">
              {service.title}
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg lg:text-xl text-white/75 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10">
              {service.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button className="w-full sm:w-auto bg-[#1DBAF8] hover:bg-[#0fa8e6] text-white font-medium text-[15px] sm:text-base px-7 sm:px-8 py-3.5 rounded-full transition-colors duration-300">
                Hire a Freelancer
              </button>
              <button className="w-full sm:w-auto border border-white/30 hover:border-white text-white font-medium text-[15px] sm:text-base px-7 sm:px-8 py-3.5 rounded-full transition-colors duration-300">
                Talk to Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= */}
      {/* WHAT EXACTLY IS X? */}
      {/* ================= */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-[78px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black leading-tight tracking-tight mb-6 sm:mb-8">
            {service.whatIsTitle}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {service.whatIsDescription}
          </p>
        </div>
      </section>
    </div>
  );
}