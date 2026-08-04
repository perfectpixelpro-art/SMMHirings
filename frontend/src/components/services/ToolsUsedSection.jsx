import { useState } from "react";

export default function ToolsUsedSection({ title, subtitle, intro, tools }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  if (!tools || tools.length === 0) return null;

  const totalTools = tools.reduce((sum, g) => sum + g.items.length, 0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  const expandAll = () => setOpenIndex(-2);
  const collapseAll = () => setOpenIndex(-1);
  const isAllOpen = openIndex === -2;

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Ultra-subtle top gradient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-[500px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(29,186,249,0.03) 0%, transparent 100%)",
        }}
      />

      {/* Faded ambient orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] blur-[120px] opacity-30"
        style={{
          background:
            "radial-gradient(ellipse, rgba(29,186,249,0.25) 0%, rgba(29,186,249,0) 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* ─── HEADER ─────────────────────────────────────────────────── */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Eyebrow badge */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white mb-8"
            style={{
              boxShadow:
                "0 1px 2px rgba(15,23,42,0.04), 0 4px 20px rgba(29,186,249,0.08)",
              border: "1px solid rgba(29,186,249,0.15)",
            }}
          >
            <span className="relative flex w-2 h-2">
              <span
                className="absolute inline-flex w-full h-full rounded-full opacity-40 animate-ping"
                style={{ backgroundColor: "#1dbaf9" }}
              />
              <span
                className="relative inline-flex w-2 h-2 rounded-full"
                style={{ backgroundColor: "#1dbaf9" }}
              />
            </span>
            <span
              className="text-[11px] font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#0891c9" }}
            >
              The Tech Stack
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-[500] text-neutral-900 tracking-[-0.02em] leading-[1.02] max-w-3xl mx-auto">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-neutral-500 font-[300] tracking-tight">
              {subtitle}
            </p>
          )}

          {intro && (
            <p className="mt-6 text-base sm:text-lg text-neutral-600 leading-relaxed font-[300] max-w-2xl mx-auto">
              {intro}
            </p>
          )}

          {/* Refined stat strip */}
          <div
            className="mt-10 inline-flex items-center rounded-2xl bg-white p-1.5"
            style={{
              boxShadow:
                "0 1px 2px rgba(15,23,42,0.03), 0 12px 32px rgba(29,186,249,0.08)",
              border: "1px solid rgba(29,186,249,0.12)",
            }}
          >
            <div className="flex items-center gap-2.5 px-5 py-2">
              <span
                className="text-2xl font-bold tabular-nums"
                style={{ color: "#1dbaf9" }}
              >
                {totalTools}
              </span>
              <span className="text-sm text-neutral-500 font-medium">
                Tools
              </span>
            </div>
            <span className="w-px h-7 bg-neutral-200" />
            <div className="flex items-center gap-2.5 px-5 py-2">
              <span
                className="text-2xl font-bold tabular-nums"
                style={{ color: "#1dbaf9" }}
              >
                {tools.length}
              </span>
              <span className="text-sm text-neutral-500 font-medium">
                Categories
              </span>
            </div>
          </div>
        </div>

        {/* ─── EXPAND / COLLAPSE CONTROL ──────────────────────────────── */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-sm text-neutral-500 font-medium">
            Explore by category
          </p>
          <button
            onClick={isAllOpen ? collapseAll : expandAll}
            className="inline-flex items-center gap-1.5 text-xs font-[500] transition-colors duration-200 hover:opacity-70"
            style={{ color: "#0891c9" }}
          >
            {isAllOpen ? "Collapse all" : "Expand all"}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: isAllOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* ─── ACCORDION ──────────────────────────────────────────────── */}
        <div className="space-y-3">
          {tools.map((group, i) => {
            const isOpen = isAllOpen || openIndex === i;
            const isHovered = hoveredCategory === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredCategory(i)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="rounded-2xl bg-white transition-all duration-500 overflow-hidden"
                style={{
                  border: isOpen
                    ? "1px solid rgba(29,186,249,0.3)"
                    : "1px solid #eef2f7",
                  boxShadow: isOpen
                    ? "0 1px 2px rgba(15,23,42,0.04), 0 24px 60px rgba(29,186,249,0.12)"
                    : isHovered
                    ? "0 1px 2px rgba(15,23,42,0.03), 0 12px 28px rgba(29,186,249,0.06)"
                    : "0 1px 2px rgba(15,23,42,0.02)",
                  transform:
                    isHovered && !isOpen ? "translateY(-2px)" : "translateY(0)",
                }}
              >
                {/* Trigger button */}
                <button
                  onClick={() => !isAllOpen && toggle(i)}
                  className="w-full flex items-center gap-4 sm:gap-6 px-6 sm:px-8 py-6 sm:py-7 text-left"
                  aria-expanded={isOpen}
                >
                  {/* Number badge */}
                  <div className="shrink-0">
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl text-sm font-bold tabular-nums transition-all duration-500"
                      style={{
                        background: isOpen
                          ? "linear-gradient(135deg, #1dbaf9 0%, #0891c9 100%)"
                          : "#f5fafd",
                        color: isOpen ? "#ffffff" : "#0891c9",
                        boxShadow: isOpen
                          ? "0 8px 20px rgba(29,186,249,0.35), inset 0 1px 0 rgba(255,255,255,0.3)"
                          : "inset 0 0 0 1px rgba(29,186,249,0.15)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Title + meta */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-[22px] font-[500] text-neutral-900 tracking-tight leading-tight">
                      {group.category}
                    </h3>
                    <div className="mt-1.5 flex items-center gap-2">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-md tabular-nums"
                        style={{
                          backgroundColor: isOpen
                            ? "rgba(29,186,249,0.12)"
                            : "#f5fafd",
                          color: "#0891c9",
                        }}
                      >
                        {group.items.length}
                      </span>
                      <span className="text-xs text-neutral-500 font-medium">
                        {group.items.length === 1 ? "tool" : "tools"} inside
                      </span>
                    </div>
                  </div>

                  {/* Chevron */}
                  <div className="shrink-0">
                    <div
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500"
                      style={{
                        backgroundColor: isOpen
                          ? "#1dbaf9"
                          : "rgba(29,186,249,0.08)",
                        color: isOpen ? "#ffffff" : "#0891c9",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        boxShadow: isOpen
                          ? "0 6px 16px rgba(29,186,249,0.3)"
                          : "none",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expandable panel */}
                <div
                  className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-7 sm:pb-9">
                      {/* Divider */}
                      <div
                        className="h-px w-full mb-7"
                        style={{
                          background:
                            "linear-gradient(to right, transparent, rgba(29,186,249,0.25), transparent)",
                        }}
                      />

                      {/* Tools grid */}
                      <div className="grid sm:grid-cols-2 gap-3">
                        {group.items.map((tool, j) => (
                          <ToolTile key={j} tool={tool} index={j} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── FOOTER SIGNATURE ───────────────────────────────────────── */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center gap-4">
          <div
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white"
            style={{
              boxShadow:
                "0 1px 2px rgba(15,23,42,0.03), 0 8px 24px rgba(29,186,249,0.06)",
              border: "1px solid rgba(29,186,249,0.15)",
            }}
          >
            <div className="flex -space-x-1">
              {[0, 1, 2].map((idx) => (
                <span
                  key={idx}
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "#1dbaf9",
                    opacity: 1 - idx * 0.3,
                  }}
                />
              ))}
            </div>
            <span className="text-xs font-[500] tracking-[0.15em] uppercase text-neutral-600">
              Curated & Continuously Updated
            </span>
          </div>
          <p className="text-sm text-neutral-500 font-[500] text-center max-w-md">
            A carefully chosen stack — no bloat, no filler. Every tool earns its
            place.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── TOOL TILE ────────────────────────────────────────────────────────
   Extracted as its own component to keep hover state per-tile clean.
*/
function ToolTile({ tool, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group/tool relative p-5 rounded-xl transition-all duration-300 cursor-default overflow-hidden"
      style={{
        backgroundColor: isHovered ? "#ffffff" : "#fbfdff",
        border: isHovered
          ? "1px solid rgba(29,186,249,0.35)"
          : "1px solid #eef4f9",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: isHovered ? "0 12px 28px rgba(29,186,249,0.1)" : "none",
      }}
    >
      {/* Left accent bar */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full transition-all duration-300"
        style={{
          height: isHovered ? "60%" : "0%",
          backgroundColor: "#1dbaf9",
        }}
      />

      <div className="flex items-start gap-3 relative">
        <span
          className="text-[11px] font-mono font-[500] tabular-nums shrink-0 pt-0.5 transition-colors duration-300"
          style={{ color: isHovered ? "#0891c9" : "rgba(15,23,42,0.35)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          <h4
            className="text-base sm:text-[17px] font-bold tracking-tight leading-snug mb-1.5 transition-colors duration-300"
            style={{ color: isHovered ? "#0891c9" : "#0f172a" }}
          >
            {tool.name}
          </h4>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {tool.desc}
          </p>
        </div>
      </div>
    </div>
  );
}