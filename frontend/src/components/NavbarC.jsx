import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const SERVICES = [
  {
    label: "Social Media Management",
    href: "/business-services/hire-social-media-manager/",
  },
  {
    label: "Content Writing & Copywriting",
    href: "/business-services/hire-content-writer-copywriter/",
  },
  {
    label: "Video Production & Editing",
    href: "/business-services/hire-video-editor-producer/",
  },
  {
    label: "Short-Form Videos",
    href: "/business-services/hire-short-form-video-editor/",
  },
  {
    label: "Podcast Production",
    href: "/business-services/hire-podcast-producer-editor/",
  },
  {
    label: "Graphic Design & Visual Branding",
    href: "/business-services/hire-graphic-designer/",
  },
  {
    label: "Website Design & Development",
    href: "/business-services/hire-web-designer-developer/",
  },
  {
    label: "App Design & Development",
    href: "/business-services/hire-app-designer-developer/",
  },
  {
    label: "Voice Over & Audio Production",
    href: "/business-services/hire-voice-over-artist-audio-producer/",
  },
  {
    label: "Paid Social & Ads Management",
    href: "/business-services/hire-paid-social-ads-expert/",
  },
  {
    label: "Community Management",
    href: "/business-services/hire-community-manager/",
  },
  {
    label: "Analytics & Reporting",
    href: "/business-services/hire-marketing-analytics-expert/",
  },
  {
    label: "Consulting & Audits",
    href: "/business-services/hire-digital-marketing-consultant/",
  },
];

const SERVICE_GROUPS = [
  {
    category: "Content & Copy",
    items: [SERVICES[0], SERVICES[1], SERVICES[10], SERVICES[11]],
  },
  {
    category: "Video & Audio",
    items: [SERVICES[2], SERVICES[3], SERVICES[4], SERVICES[8]],
  },
  {
    category: "Design & Development",
    items: [SERVICES[5], SERVICES[6], SERVICES[7]],
  },
  {
    category: "Growth & Strategy",
    items: [SERVICES[9], SERVICES[12]],
  },
];

export default function NavbarC({ landingType, setLandingType }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeout = useRef(null);
  const isBusiness = landingType === "business";

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      {/* ========================= */}
      {/* Desktop Navbar */}
      {/* ========================= */}
      <nav className="absolute top-0 left-0 w-full z-50 hidden lg:block">
        <div className="relative w-full px-[78px] pt-[38px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="SMM Hiring" className="h-[58px] w-auto object-contain" />
          </Link>

          {/* Perfectly Centered Menu */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-10">

              {/* Services */}
              {isBusiness ? (
                <div
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1.5 text-black text-[18px] font-normal transition-colors duration-300 hover:text-[#1DBAF8]">
                    Services
                    <svg
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                      className={`transition-transform duration-200 mt-[1px] ${servicesOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Fiverr-style 2-column mega dropdown */}
                  <div
                    className={`
                      absolute top-[calc(100%+22px)] left-1/2 -translate-x-1/3
                      w-[800px]
                      bg-white
                      shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                      rounded-[16px]
                      overflow-hidden
                      z-50
                      transition-all duration-200
                      ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
                    `}
                  >
                    <div className="w-full h-[4px] bg-[#1DBAF8]" />

                    <div className="grid grid-cols-2 gap-20 px-8 py-12">
                      {SERVICE_GROUPS.map((group) => (
                        <div key={group.category} className="flex flex-col">
                          <p className="text-[13px] font-[700] text-gray-900 mb-4 leading-tight uppercase tracking-wide">
                            {group.category}
                          </p>
                          <div className="flex flex-col gap-1">
                            {group.items.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                onClick={() => setServicesOpen(false)}
                                className="py-2 text-[14px] font-[400] text-gray-600 hover:text-[#1DBAF8] transition-colors duration-150 leading-snug block"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="/remote-marketing-freelance-jobs" className="text-black text-[18px] font-normal transition-colors duration-300 hover:text-[#1DBAF8]">
                  Services
                </Link>
              )}

              <Link to="/about" className="text-black text-[18px] font-normal transition-colors duration-300 hover:text-[#1DBAF8]">
                About Us
              </Link>
              <Link to="/contact" className="text-black text-[18px] font-normal transition-colors duration-300 hover:text-[#1DBAF8]">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-[34px]">
            <Link to={`/login/${landingType}`} className="text-black text-[18px] font-normal transition-colors duration-300 hover:text-[#1DBAF8]">
              Login
            </Link>
            <div className="flex h-[50px] items-center rounded-full border border-[#1DBAF8] p-[3px]">
              <button
                onClick={() => setLandingType("freelancer")}
                className={`h-full rounded-full px-5 text-[15px] font-medium transition-all duration-300 ${
                  landingType === "freelancer" ? "bg-[#1DBAF8] text-white" : "text-black"
                }`}
              >
                Freelancer
              </button>
              <button
                onClick={() => setLandingType("business")}
                className={`h-full rounded-full px-5 text-[15px] font-medium transition-all duration-300 ${
                  landingType === "business" ? "bg-[#1DBAF8] text-white" : "text-black"
                }`}
              >
                Business
              </button>
            </div>
          </div>

        </div>
      </nav>

      {/* ========================= */}
      {/* Mobile Navbar */}
      {/* ========================= */}
      <nav className="absolute top-0 left-0 w-full z-50 lg:hidden">

        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-3">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <Link to="/">
              <img src={logo} alt="SMM Hiring" className="h-8 w-auto" />
            </Link>
          </div>
          <Link to={`/login/${landingType}`} className="text-black text-[16px] font-medium">
            Login
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className={`overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="mx-4 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 p-6">
            <div className="flex flex-col gap-5">

              {/* Services */}
              {isBusiness ? (
                <div>
                  <button
                    onClick={() => setMobileServicesOpen((p) => !p)}
                    className="flex items-center justify-between w-full text-white text-lg"
                  >
                    <span>Services</span>
                    <svg
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                      className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[800px] mt-4" : "max-h-0"}`}>
                    <div className="flex flex-col gap-4">
                      {SERVICE_GROUPS.map((group) => (
                        <div key={group.category}>
                          <p className="text-[11px] font-[700] text-white/50 uppercase tracking-[0.08em] mb-2 px-2">
                            {group.category}
                          </p>
                          <div className="flex flex-col gap-0.5 pl-2 border-l border-white/20">
                            {group.items.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                                className="py-2 px-2 rounded-[8px] text-white/90 text-[14px] font-[400] hover:bg-white/10 transition-colors duration-150 leading-tight block"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="/remote-marketing-freelance-jobs" onClick={() => setMenuOpen(false)} className="text-white text-lg">
                  Services
                </Link>
              )}

              <Link to="/about" onClick={() => setMenuOpen(false)} className="text-white text-lg">Our Role</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-white text-lg">Contact Us</Link>
              <Link to={`/login/${landingType}`} onClick={() => setMenuOpen(false)} className="text-white text-lg">Login</Link>

              {/* Mobile Toggle */}
              <div className="mt-3 flex border border-[#1DBAF8] rounded-full p-1">
                <button
                  onClick={() => setLandingType("freelancer")}
                  className={`flex-1 rounded-full py-2 text-sm font-medium transition-all ${
                    landingType === "freelancer" ? "bg-[#1DBAF8] text-white" : "text-white"
                  }`}
                >
                  Freelancer
                </button>
                <button
                  onClick={() => setLandingType("business")}
                  className={`flex-1 rounded-full py-2 text-sm font-medium transition-all ${
                    landingType === "business" ? "bg-[#1DBAF8] text-white" : "text-white"
                  }`}
                >
                  Business
                </button>
              </div>

            </div>
          </div>
        </div>

      </nav>
    </>
  );
}