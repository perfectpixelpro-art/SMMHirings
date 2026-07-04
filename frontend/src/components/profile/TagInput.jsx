import { useState } from "react";

// Controlled tag/chip input. value = string[], onChange(next[]).
export default function TagInput({ value = [], onChange, placeholder }) {
  const [text, setText] = useState("");

  const add = () => {
    const t = text.trim();
    if (t && !value.includes(t)) onChange([...value, t]);
    setText("");
  };
  const remove = (t) => onChange(value.filter((x) => x !== t));

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      add();
    } else if (e.key === "Backspace" && !text && value.length) {
      remove(value[value.length - 1]);
    }
  };

  return (
    <div
      className="w-full rounded-lg flex flex-wrap gap-2 items-center"
      style={{ border: "1px solid #d1d5db", padding: "8px 10px", minHeight: 42, background: "#fff" }}
    >
      {value.map((t) => (
        <span key={t} className="flex items-center gap-1 rounded-full text-[12px] font-medium"
          style={{ background: "#e0f5ff", color: "#0a7bb0", padding: "3px 10px" }}>
          {t}
          <button type="button" onClick={() => remove(t)} style={{ background: "none", border: "none", cursor: "pointer", color: "#0a7bb0", fontSize: 14, lineHeight: 1 }}>×</button>
        </span>
      ))}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKeyDown}
        onBlur={add}
        placeholder={value.length ? "" : placeholder}
        className="flex-1 outline-none text-gray-700 placeholder-gray-400"
        style={{ fontSize: 13, minWidth: 140, border: "none" }}
      />
    </div>
  );
}
