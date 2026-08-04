import { useRef, useState, useEffect, useCallback } from "react";

import aboutVideo from "../../assets/aboutVideo.mp4";
import logo from "../../assets/logo.png";

export default function AboutVideo() {
  const videoRef   = useRef(null);
  const sectionRef = useRef(null);
  const rafRef     = useRef(null);
  const targetPos  = useRef({ x: -300, y: -300 });
  const cursorX    = useRef(-300);
  const cursorY    = useRef(-300);

  const [isPlaying, setIsPlaying]   = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos]   = useState({ x: -300, y: -300 });

  // ── Ultra-smooth lerp cursor ─────────────────────────────────────────────────
  const tick = useCallback(() => {
    const LERP = 0.07;
    cursorX.current += (targetPos.current.x - cursorX.current) * LERP;
    cursorY.current += (targetPos.current.y - cursorY.current) * LERP;

    const dx = Math.abs(cursorX.current - cursorPos.x);
    const dy = Math.abs(cursorY.current - cursorPos.y);
    if (dx > 0.3 || dy > 0.3) {
      setCursorPos({ x: cursorX.current, y: cursorY.current });
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []); // eslint-disable-line

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  const handleMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  // ── Auto-play when section enters viewport ───────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = videoRef.current;
          if (!v) return;
          if (entry.isIntersecting) {
            v.play().then(() => setIsPlaying(true)).catch(() => {});
          } else {
            v.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.4 } // starts playing when 40% of section is visible
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // ── Play / Pause toggle on click ─────────────────────────────────────────────
  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onEnd = () => setIsPlaying(false);
    v.addEventListener("ended", onEnd);
    return () => v.removeEventListener("ended", onEnd);
  }, []);

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-10 lg:px-[78px]">

        {/* Video card */}
        <div
          ref={sectionRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={togglePlay}
          className="
            relative w-full overflow-hidden select-none
            rounded-2xl sm:rounded-3xl
            cursor-none
          "
          style={{ aspectRatio: "16 / 8" }}
        >

          {/* ── Video ── */}
          <video
            ref={videoRef}
            src={aboutVideo}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            muted
            preload="metadata"
          />

          {/* ── Cover (paused state) ── */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-[#EBEBED] flex items-center justify-center">
              <img
                src={logo}
                alt="SMM Hiring"
                draggable={false}
                className="
                  w-[140px] sm:w-[210px] lg:w-[280px]
                  object-contain pointer-events-none select-none
                "
              />
            </div>
          )}

          {/* ── Subtle vignette overlay when playing ── */}
          {isPlaying && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.18) 100%)",
              }}
            />
          )}

          {/* ── Desktop custom cursor ── */}
          <div
            className="hidden sm:flex pointer-events-none absolute z-30 items-center justify-center"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              width: 96,
              height: 96,
              transform: "translate(-50%, -50%)",
              opacity: isHovering ? 1 : 0,
              transition: "opacity 0.25s ease",
            }}
          >
            <div
              className="
                w-full h-full rounded-full bg-white
                flex items-center justify-center
                shadow-[0_8px_32px_rgba(0,0,0,0.18)]
              "
              style={{
                transform: isPlaying ? "scale(0.9)" : "scale(1)",
                transition: "transform 0.2s ease",
              }}
            >
              {isPlaying ? (
                <div className="flex items-center gap-[7px]">
                  <div className="w-[4px] h-[26px] rounded-full bg-[#1DBAF8]" />
                  <div className="w-[4px] h-[26px] rounded-full bg-[#1DBAF8]" />
                </div>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="ml-[4px]">
                  <path
                    d="M5 3.5l16 8.5-16 8.5V3.5z"
                    stroke="#1DBAF8"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* ── Mobile tap button — visible only when paused ── */}
          {!isPlaying && (
            <div className="sm:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="
                  w-[68px] h-[68px] rounded-full bg-white
                  flex items-center justify-center
                  shadow-[0_8px_28px_rgba(0,0,0,0.16)]
                "
                style={{ transition: "transform 0.2s ease" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="ml-[3px]">
                  <path
                    d="M5 3.5l16 8.5-16 8.5V3.5z"
                    stroke="#1DBAF8"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}