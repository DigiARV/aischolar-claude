"use client";

import { useState } from "react";

const nodes = [
  { id: "ai", label: "AI tools", x: 18, y: 24, color: "#5b3fe6", topics: ["Prompting that works", "AI-assisted research", "Reusable workflows", "Using AI responsibly"] },
  { id: "marketing", label: "Marketing", x: 82, y: 24, color: "#ff6b4a", topics: ["Positioning & message", "Content and hooks", "Paid ads basics", "Reading the numbers"] },
  { id: "business", label: "Business", x: 50, y: 86, color: "#f5a524", topics: ["Finding AI opportunities", "Simple automation", "Customer focus", "Better decisions"] },
] as const;

/** Original hero explorer: three skill areas connect to one real project. Tap a node to see what it covers. Illustrative. */
export function HeroVisual() {
  const [active, setActive] = useState<(typeof nodes)[number]["id"]>("ai");
  const current = nodes.find((n) => n.id === active)!;
  const centre = { x: 50, y: 50 };
  return (
    <figure className="mx-auto w-full max-w-[34rem]" aria-label="Interactive illustration of how skill areas connect to a real project">
      <div className="chunk relative overflow-hidden rounded-[2rem] bg-white p-4 sm:p-6">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-body/70">
          <span>Skill map</span><span className="rounded-full bg-paper-2 px-2.5 py-1 normal-case tracking-normal">Illustrative · tap a node</span>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden>
            <circle cx="50" cy="50" r="30" fill="none" stroke="#e9e3d8" strokeDasharray="1.5 2.5" />
            <circle cx="50" cy="50" r="46" fill="none" stroke="#f3eee6" />
            {nodes.map((n) => (
              <line key={n.id} x1={n.x} y1={n.y} x2={centre.x} y2={centre.y} stroke={n.color} strokeWidth={active === n.id ? 1.4 : 0.6} strokeOpacity={active === n.id ? 1 : 0.4} strokeDasharray="2 2" className={active === n.id ? "animate-dash" : ""} vectorEffect="non-scaling-stroke" />
            ))}
          </svg>
          <div className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-center text-xs font-semibold leading-tight text-white shadow-xl sm:size-28">
            <span className="animate-ring absolute inset-0 rounded-full border border-violet" aria-hidden />
            Your real<br />project
          </div>
          {nodes.map((n) => (
            <button key={n.id} type="button" onClick={() => setActive(n.id)} aria-pressed={active === n.id}
              style={{ left: `${n.x}%`, top: `${n.y}%`, borderColor: n.color, background: active === n.id ? n.color : "#fff", color: active === n.id ? "#fff" : "#14122b" }}
              className="absolute min-h-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 px-4 py-2 text-sm font-semibold shadow-md transition hover:scale-105">
              {n.label}
            </button>
          ))}
        </div>
        <div className="mt-2 min-h-[5.5rem] rounded-2xl bg-paper p-4" aria-live="polite">
          <p className="text-sm font-semibold text-ink">{current.label} covers</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {current.topics.map((t) => (<li key={t} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink/80">{t}</li>))}
          </ul>
        </div>
      </div>
    </figure>
  );
}
