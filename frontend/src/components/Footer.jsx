import React from "react";
import fotter_bg from "../assets/fotter_bg.png";
import footer_logo from "../assets/footer_logo.png";

export default function Footer() {
  return (
    <footer className="w-full">

      {/* ── Top Section: Dark bg image ── */}
      <div className="relative w-full text-center overflow-hidden min-h-[300px] sm:min-h-[340px] md:min-h-[380px]">
        <img
          src={fotter_bg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-10 flex flex-col items-center w-full px-5 py-12 sm:px-10 sm:py-14 md:py-16 lg:py-20 xl:py-24">

          <h2 className="font-black text-center leading-[1.2] mb-4 text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] xl:text-[42px]">
            <span className="text-white">Execution Is Trusted When The</span>
            <br />
            <span className="text-white">Standard </span>
            <span className="italic font-black" style={{ color: "#12B3EF", fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Stays Consistent.
            </span>
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-center leading-[1.9] mb-6 px-2 sm:px-0" style={{ color: "#cbd5e1", maxWidth: "520px" }}>
            Work inside the system follows a fixed level of clarity, structure, and delivery. Every<br />
            output is reviewed against the same execution standard before it moves forward.
          </p>

          <button
            className="text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#12B3EF", border: "1.5px solid #7de0fa", fontSize: "14px", padding: "10px 28px", letterSpacing: "0.01em" }}
          >
            Apply to SMM Hiring
          </button>

          <p className="text-[10px] sm:text-[11px] tracking-wide" style={{ color: "#94a3b8", paddingTop: "32px" }}>
            Applications reviewed on a rolling basis · Entry based on execution quality
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .footer-bottom-row {
            flex-direction: column !important;
          }
          .footer-cols {
            width: 100% !important;
            justify-content: flex-start !important;
            gap: 28px !important;
          }
        }
      `}</style>
      {/* ── Bottom Section: Black bg with logo + links ── */}
      <div className="w-full px-5 py-8 sm:px-10 sm:py-10 md:px-16 md:py-10 lg:px-24 lg:py-10 xl:px-32 xl:py-10" style={{ backgroundColor: "#000000" }}>

        {/* Mobile: stack, Desktop: row */}
        <div className="footer-bottom-row flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-4">

          {/* Left: Logo + tagline — takes ~30% */}
          <div className="flex flex-col gap-2" style={{ width: "30%" }}>
            <div className="flex items-center gap-2">
              <img
                src={footer_logo}
                alt="SMM Hiring"
                className="w-auto object-contain"
                style={{ height: "22px" }}
              />
            </div>
            <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.8", marginTop: "4px" }}>
              The Social execution network.<br />
              Structured, reliable, consistent.
            </p>
          </div>

          {/* Right: 3 columns — takes ~70%, justified with space between */}
          <div className="footer-cols flex flex-row justify-end flex-wrap gap-8 sm:gap-10 md:gap-14 lg:gap-16" style={{ width: "70%" }}>

            {/* Platform */}
            <div className="flex flex-col" style={{ gap: "8px", minWidth: "80px" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, color: "#ffffff", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "4px" }}>Platform</p>
              {["About", "Process", "Standards", "Apply"].map((item) => (
                <a key={item} href="#" style={{ fontSize: "12px", color: "#6b7280", textDecoration: "none" }} className="hover:text-white transition-colors">{item}</a>
              ))}
            </div>

            {/* Work */}
            <div className="flex flex-col" style={{ gap: "8px", minWidth: "110px" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, color: "#ffffff", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "4px" }}>Work</p>
              {["Social Media", "Short-Form Video", "Visual Content", "Website"].map((item) => (
                <a key={item} href="#" style={{ fontSize: "12px", color: "#6b7280", textDecoration: "none" }} className="hover:text-white transition-colors">{item}</a>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col" style={{ gap: "8px", minWidth: "90px" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, color: "#ffffff", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "4px" }}>Contact</p>
              {["Get in Touch", "The Social 99", "Privacy Policy", "Terms"].map((item) => (
                <a key={item} href="#" style={{ fontSize: "12px", color: "#6b7280", textDecoration: "none" }} className="hover:text-white transition-colors">{item}</a>
              ))}
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="w-full mt-8" style={{ borderTop: "1px solid #1f2937" }} />

      </div>
    </footer>
  );
}