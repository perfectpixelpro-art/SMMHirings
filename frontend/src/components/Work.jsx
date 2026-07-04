import React from "react";
import WorkWomenImg from "../assets/WorkWomenImg.png";

const steps = [
  {
    number: "STEP 01",
    icon: "🗒️",
    title: "Review",
    desc: "Attend the AI interview and evaluation rounds. Your approach and execution are assessed. The focus is on clarity and consistency.",
  },
  {
    number: "STEP 02",
    icon: "✅",
    title: "Get Added",
    desc: "If you meet the standard, you receive an acceptance email. You are added to the system as an active freelancer. Entry is limited to those who qualify.",
  },
  {
    number: "STEP 03",
    icon: "🧑‍💼",
    title: "Get Work",
    desc: "Tasks are assigned with clear briefs and expectations. You know exactly what needs to be delivered. No pitching, no negotiation required.",
  },
  {
    number: "STEP 04",
    icon: "🚀",
    title: "Deliver",
    desc: "Execute the work based on the given brief. Each submission is reviewed before delivery. Payment is made per deliverable.",
  },
];

export default function Work() {
  return (
    <section className="bg-white px-5 py-10 sm:px-10 sm:py-12 md:px-16 md:py-14 lg:px-24 lg:py-16 xl:px-32 xl:py-16">

      {/* ── Section Heading ── */}
      <h2
        className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-gray-900 mb-2"
        style={{ fontWeight: 800, lineHeight: "1.2" }}
      >
        How It{" "}
        <span
          style={{
            color: "#12B3EF",
            fontStyle: "italic",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 800,
          }}
        >
          Works
        </span>
      </h2>

      {/* Subtext — responsive, wraps on mobile */}
      <p className="text-[13px] sm:text-[14px] text-gray-500 mb-8 md:mb-10 max-w-full" style={{ whiteSpace: "normal" }}>
        <span className="hidden md:inline" style={{ whiteSpace: "nowrap" }}>Work moves through a defined process, from interview and onboarding to assignment and final delivery.</span>
        <span className="md:hidden">Work moves through a defined process, from interview and onboarding to assignment and final delivery.</span>
      </p>

      {/* ── 4 Step Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 md:mb-16">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5"
            style={{ border: "1px solid #e5e7eb" }}
          >
            <p
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#12B3EF",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              {step.number}
            </p>
            <div
              className="flex items-center justify-center mb-4"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                backgroundColor: "#f3f4f6",
                fontSize: "18px",
              }}
            >
              {step.icon}
            </div>
            <h3
              className="text-gray-900 mb-2"
              style={{ fontSize: "15px", fontWeight: 700, lineHeight: "1.3" }}
            >
              {step.title}
            </h3>
            <p className="text-gray-500" style={{ fontSize: "13px", lineHeight: "1.65" }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ── Bottom: Image Left + Text Right ── */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">

        {/* Left: Image */}
        <div
          className="relative w-full md:w-[380px] lg:w-[420px] xl:w-[440px] flex-shrink-0 rounded-3xl p-3"
          style={{
            border: "1.5px solid #b8e8f8",
            backgroundColor: "#e8f8fe",
            boxShadow: "none",
          }}
        >
          <img
            src={WorkWomenImg}
            alt="Execution review"
            className="w-full h-full object-cover rounded-2xl"
            style={{ minHeight: "280px", maxHeight: "380px", display: "block" }}
          />
          {/* Brief Ready badge */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white rounded-full px-4 py-2 shadow-md"
            style={{ whiteSpace: "nowrap" }}
          >
            <span style={{ color: "#22c55e", fontSize: "13px" }}>✓</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#374151" }}>Brief Ready</span>
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex-1 w-full">

          <h2
            className="text-gray-900 text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[38px] mb-3"
            style={{ fontWeight: 800, lineHeight: "1.25" }}
          >
            <span className="block">Execution is reviewed</span>
            <span className="block">
              before{" "}
              <span
                style={{
                  color: "#12B3EF",
                  fontStyle: "italic",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontWeight: 800,
                }}
              >
                work is assigned
              </span>
            </span>
          </h2>

          {/* Subtext — responsive */}
          <p
            className="text-gray-500 mb-6 max-w-full sm:max-w-[420px]"
            style={{ fontSize: "14px", lineHeight: "1.7" }}
          >
            The process moves through interviews, evaluation, onboarding, and placement into the active working pool.
          </p>

          <button
            className="text-white font-semibold rounded-lg hover:bg-[#0fa0d6] transition-colors"
            style={{
              backgroundColor: "#12B3EF",
              fontSize: "14px",
              padding: "12px 24px",
              border: "none",
              cursor: "pointer",
            }}
          >
            See The Process
          </button>
        </div>
      </div>

    </section>
  );
}