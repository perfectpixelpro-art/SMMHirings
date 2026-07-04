import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock login/signup during a rejection lockout period.
  const rejectedUntil = localStorage.getItem("rejectedUntil");
  const locked = rejectedUntil && new Date(rejectedUntil) > new Date();

  return (
    <nav className="bg-white border-b border-gray-100 relative px-5 py-3 sm:px-10 sm:py-3 md:px-16 md:py-3.5 lg:px-24 lg:py-4 xl:px-50 xl:py-4">

      {/* Main row */}
      <div className="flex items-center justify-between">

        {/* Left Links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 sm:gap-6 md:gap-8">
          <a href="#" className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-gray-800 hover:text-[#12B3EF] transition-colors">Services</a>
          <a href="#" className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-gray-800 hover:text-[#12B3EF] transition-colors">Our Role</a>
          <a href="#" className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-gray-800 hover:text-[#12B3EF] transition-colors">Contact Us</a>
        </div>

        {/* Hamburger — visible on mobile only */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[2px] bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>

        {/* Center Logo — always visible */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img src={logo} alt="SMM Hiring" className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto object-contain" />
        </div>

        {/* Auth buttons — desktop/tablet (mobile uses the dropdown) */}
        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          {locked ? (
            <span className="text-[11px] sm:text-[13px] text-gray-400 font-medium" title="Login disabled during your 6-month lockout">
              Login disabled (locked out)
            </span>
          ) : (
            <>
              <Link
                to="/login/freelancer"
                className="border border-[#12B3EF] text-[#12B3EF] hover:bg-[#12B3EF] hover:text-white text-[11px] sm:text-[13px] md:text-[14px] font-semibold px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full transition-colors whitespace-nowrap"
              >
                Login as Freelancer
              </Link>
              <Link
                to="/login/business"
                className="bg-[#12B3EF] hover:bg-[#0fa0d6] text-white text-[11px] sm:text-[13px] md:text-[14px] font-semibold px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full transition-colors whitespace-nowrap"
              >
                Login as Business
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 pt-4 pb-2 border-t border-gray-100 mt-3">
          <a href="#" className="text-[14px] font-medium text-gray-800 hover:text-[#12B3EF] transition-colors">Services</a>
          <a href="#" className="text-[14px] font-medium text-gray-800 hover:text-[#12B3EF] transition-colors">Our Role</a>
          <a href="#" className="text-[14px] font-medium text-gray-800 hover:text-[#12B3EF] transition-colors">Contact Us</a>
          <div className="flex flex-col gap-2 pt-2">
            {locked ? (
              <span className="text-center text-[13px] text-gray-400 font-medium py-2">Login disabled (locked out)</span>
            ) : (
              <>
                <Link to="/login/freelancer" className="text-center border border-[#12B3EF] text-[#12B3EF] hover:bg-[#12B3EF] hover:text-white text-[14px] font-semibold px-4 py-2 rounded-full transition-colors">
                  Login as Freelancer
                </Link>
                <Link to="/login/business" className="text-center bg-[#12B3EF] hover:bg-[#0fa0d6] text-white text-[14px] font-semibold px-4 py-2 rounded-full transition-colors">
                  Login as Business
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}