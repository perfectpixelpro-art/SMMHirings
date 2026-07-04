const STEPS = ["Create Profile", "Profile Verification", "Dashboard"];

export default function Stepper({ current = 1 }) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 py-4">
      {STEPS.map((label, i) => {
        const step = i + 1;
        const active = step === current;
        const done = step < current;
        return (
          <div key={label} className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <span
                className="flex items-center justify-center rounded-full text-[12px] font-bold"
                style={{
                  width: 24, height: 24,
                  background: active || done ? "#12B3EF" : "#e5e7eb",
                  color: active || done ? "#fff" : "#9ca3af",
                }}
              >
                {done ? "✓" : step}
              </span>
              <span
                className="text-[12px] sm:text-[13px] font-semibold hidden sm:inline"
                style={{ color: active ? "#0d1117" : "#9ca3af" }}
              >
                {label}
              </span>
            </div>
            {step < STEPS.length && <div className="w-6 sm:w-12 h-[2px]" style={{ background: "#e5e7eb" }} />}
          </div>
        );
      })}
    </div>
  );
}
