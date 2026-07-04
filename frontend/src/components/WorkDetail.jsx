import React from "react";
import workBoyImg from "../assets/workBoyImg.png";
import women2 from "../assets/women2.png";

const categories = [
  { icon: "📱", title: "Social Media", desc: "Captions, hooks, post copy, and scheduling content across platforms with consistent brand voice." },
  { icon: "🎬", title: "Short-Form Video", desc: "Scripting, editing, and structuring reels and clips built for retention and outcome." },
  { icon: "🎨", title: "Visual Content", desc: "Static graphics, carousels, and branded visuals aligned to provided design guidelines." },
  { icon: "🌐", title: "Website", desc: "Copy, structure and content updates for web pages that convert and communicate clearly." },
];

const deliverItems = [
  { title: "First Frame Clarity", desc: "The opening establishes direction immediately. The viewer understands the context, intent, and relevance without needing additional explanation." },
  { title: "Controlled Pacing", desc: "Information unfolds with structure and restraint. Each transition, cut, or sequence supports clarity and keeps attention steady from beginning to end." },
  { title: "Clean Execution", desc: "The work feels refined, aligned, and technically stable throughout. Visuals, timing, language, and structure operate together without friction or inconsistency." },
  { title: "Clear Outcome", desc: "The purpose of the content remains visible throughout the piece. Whether the goal is retention, response, awareness, or action, the result is communicated with precision." },
];

const whoItems = [
  { pre: "People who can ", bold: "work within a defined brief", post: " without rewriting the scope." },
  { pre: "Content creators with a ", bold: "clean, repeatable specialty", post: "." },
  { pre: "Professionals who deliver output ", bold: "without being managed", post: "." },
  { pre: "Individuals who ", bold: "communicate through output", post: ", not constant updates." },
  { pre: "Those comfortable with ", bold: "structured feedback", post: " and iteration." },
  { pre: "People who want ", bold: "consistent work", post: " without the overhead of freelancing." },
];

const whoStyles = `
  @media (min-width: 1400px) {
    .who-image-wrapper { width: 648px !important; }
    .who-image-wrapper img { min-height: 374px !important; max-height: 462px !important; }
  }
`;

export default function WorkDetail() {
  return (
    <>
      {/* ══ SECTION 1: What You Work On ══ */}
      <section className="bg-white px-5 py-10 sm:px-10 sm:py-12 md:px-16 md:py-14 lg:px-24 lg:py-16 xl:px-32 xl:py-16">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-gray-900 mb-2" style={{ fontWeight: 800, lineHeight: "1.2" }}>
          What You{" "}
          <span style={{ color: "#12B3EF", fontStyle: "italic", fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 800 }}>Work On</span>
        </h2>
        <p className="text-gray-500 mb-8 md:mb-10" style={{ fontSize: "13px", lineHeight: "1.6" }}>
          Work is organized by output, structure, and mode of execution.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 md:mb-10">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col gap-3 bg-white rounded-xl p-5" style={{ border: "1px solid #e5e7eb" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", backgroundColor: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>{cat.icon}</div>
              <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#111827", lineHeight: "1.3" }}>{cat.title}</h3>
              <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: "1.65" }}>{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative w-full rounded-3xl p-3" style={{ border: "1.5px solid #b8e8f8", backgroundColor: "#e8f8fe" }}>
          <img src={workBoyImg} alt="Work environment" className="w-full object-cover rounded-2xl" style={{ height: "260px", objectPosition: "center", display: "block" }} />
          <div className="absolute flex items-center gap-1.5 rounded-full" style={{ bottom: "50%", left: "35%", transform: "translate(-50%, 50%)", padding: "5px 12px", whiteSpace: "nowrap", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 1px 6px rgba(0,0,0,0.10)" }}>
            <span style={{ fontSize: "11px" }}>📤</span>
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#12B3EF" }}>Output Tracked</span>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: What The Work Should Deliver ══ */}
      <section className="bg-white px-5 py-10 sm:px-10 sm:py-12 md:px-16 md:py-14 lg:px-24 lg:py-16 xl:px-32 xl:py-16" style={{ borderTop: "1px solid #f3f4f6" }}>
        <div className="text-center mb-10">
          <h2 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] xl:text-[36px] text-gray-900" style={{ fontWeight: 800, lineHeight: "1.2" }}>
            What The Work Should{" "}
            <span style={{ color: "#12B3EF", fontStyle: "italic", fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 800 }}>Deliver</span>
          </h2>
          <p className="text-gray-500 mt-3 mx-auto" style={{ fontSize: "13px", lineHeight: "1.7", maxWidth: "600px" }}>
            Every piece of content produced through this system is held to the same set of output standards regardless of format or category.
          </p>
        </div>

        <div className="flex flex-col gap-3 mx-auto" style={{ maxWidth: "600px" }}>
          {deliverItems.map((item, i) => (
            <div key={i} className="flex gap-3 items-start w-full" style={{ border: "1px solid #e5e7eb", borderRadius: "10px", padding: "14px 16px" }}>
              <div style={{ width: "19px", height: "19px", borderRadius: "5px", backgroundColor: "#12B3EF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                <span style={{ color: "#fff", fontSize: "10px", fontWeight: 800 }}>✓</span>
              </div>
              <div>
                <p style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827", marginBottom: "4px" }}>{item.title}</p>
                <p style={{ fontSize: "12.5px", color: "#6b7280", lineHeight: "1.65" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SECTION 3: Who This Is For ══ */}
      <style dangerouslySetInnerHTML={{ __html: whoStyles }} />
      <section className="bg-white px-5 py-10 sm:px-10 sm:py-12 md:px-16 md:py-14 lg:px-24 lg:py-16 xl:px-32 xl:py-16" style={{ borderTop: "1px solid #f3f4f6" }}>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start w-full justify-between">

          {/* Left */}
          <div className="flex-1 w-full">
            <h2 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[36px] text-gray-900 mb-1" style={{ fontWeight: 800, lineHeight: "1.2" }}>
              Who This Is For
            </h2>
            <p className="text-gray-500 mb-7" style={{ fontSize: "13px", lineHeight: "1.6" }}>
              Built for people who work well within a clear direction and defined expectations.
            </p>

            <div className="flex flex-col gap-4">
              {whoItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span style={{ flexShrink: 0, display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#12B3EF" }}></span>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.65" }}>
                    {item.pre}<strong style={{ fontWeight: 700, color: "#111827" }}>{item.bold}</strong>{item.post}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: women2 image */}
          <div className="w-full md:w-[420px] lg:w-[480px] xl:w-[540px] flex-shrink-0 rounded-3xl p-3 who-image-wrapper" style={{ border: "1.5px solid #b8e8f8", backgroundColor: "#e8f8fe" }}>
            <img src={women2} alt="Who this is for" className="w-full object-cover rounded-2xl" style={{ minHeight: "340px", maxHeight: "420px", display: "block" }} />
          </div>

        </div>
      </section>
    </>
  );
}