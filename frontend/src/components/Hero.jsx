import React, { useState } from "react";
import heroImage from "../assets/hero-image.png";

export default function Hero() {
  const [searchVal, setSearchVal] = useState("");

  return (
    <section className="flex flex-col md:flex-row items-center gap-8 md:gap-10 px-5 pt-10 pb-0 sm:px-10 sm:pt-12 sm:pb-0 md:px-16 md:pt-14 md:pb-0 lg:px-24 lg:pt-16 lg:pb-0 xl:px-50 xl:pt-16 xl:pb-0">

      {/* Left Content */}
      <div className="w-full md:w-[420px] lg:w-[460px] xl:w-[500px] flex-shrink-0">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-[6px] mb-4 md:mb-5"
          style={{
            backgroundColor: "#ffffff",
            border: "1.5px solid #a8ddf5",
            borderRadius: "999px",
            paddingTop: "4px",
            paddingBottom: "4px",
            paddingLeft: "9px",
            paddingRight: "13px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#12B3EF",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.10em",
              color: "#9ca3af",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Closed System · Structured Work
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mb-4 text-gray-900 text-[28px] sm:text-[32px] md:text-[34px] lg:text-[38px] xl:text-[42px]"
          style={{ fontWeight: 800, lineHeight: "1.2", letterSpacing: "-0.3px" }}
        >
          Structured work with
          <br />
          <span style={{ whiteSpace: "nowrap" }}>
            <span
              style={{
                color: "#12B3EF",
                fontStyle: "italic",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 800,
              }}
            >
              clear expectations
            </span>
            <span style={{ color: "#111827" }}> from</span>
          </span>
          <br />
          the start
        </h1>

        {/* Subtext */}
        <p className="text-[13px] sm:text-[13.5px] md:text-[14px] text-gray-500 leading-[1.65] mb-6 md:mb-7 max-w-full md:max-w-[360px]">
          Work is assigned through a defined system with clear
          briefs and fixed expectations. Your role is to execute it
          to standard.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 md:gap-5 mb-7 md:mb-8 flex-wrap">
          <button
            className="text-white font-semibold rounded-lg transition-colors hover:bg-[#0fa0d6]"
            style={{ backgroundColor: "#12B3EF", fontSize: "13px", padding: "11px 20px" }}
          >
            Apply to SMM Hiring
          </button>
          <button
            className="font-semibold text-gray-800 hover:text-[#12B3EF] hover:border-[#12B3EF] transition-colors bg-transparent"
            style={{ fontSize: "13px", border: "1.5px solid #d1d5db", borderRadius: "7px", padding: "10px 18px", cursor: "pointer" }}
          >
            See how it works
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 mb-3 flex-wrap sm:flex-nowrap">
          <div
            className="flex items-center gap-2 bg-white flex-1 sm:flex-none"
            style={{ border: "1px solid #d1d5db", borderRadius: "6px", padding: "9px 12px", width: "100%", maxWidth: "260px" }}
          >
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth={2} style={{ flexShrink: 0 }}>
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M21 21l-4-4" />
            </svg>
            <input
              type="text"
              placeholder="What do you specialize in?"
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              style={{ background: "transparent", outline: "none", border: "none", fontSize: "12px", color: "#6b7280", width: "100%" }}
            />
          </div>
          <button
            className="text-white font-semibold rounded-md hover:bg-[#0fa0d6] transition-colors"
            style={{ backgroundColor: "#12B3EF", fontSize: "13px", padding: "9px 18px", border: "none", cursor: "pointer", flexShrink: 0 }}
          >
            Search
          </button>
        </div>

        {/* Specialty Tags */}
        <p className="text-[10px] sm:text-[11px] text-gray-400 font-normal" style={{ letterSpacing: "0.01em" }}>
          Social Media · Video · Visual Content · Web Copy
        </p>
      </div>

      {/* Right: Hero Image */}
      <div className="flex-1 flex justify-center md:justify-end items-center w-full md:w-auto">
        <img
          src={heroImage}
          alt="SMM Hiring Dashboard"
          className="w-full sm:w-[85%] md:w-full object-contain"
          style={{ maxWidth: "520px" }}
        />
      </div>

    </section>
  );
}