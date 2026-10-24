"use client";

import { useState } from "react";
import { Hands, Refresh, Spark, Target } from "@/components/ui/Icons";
import { Container, SectionHeading } from "@/components/ui/Section";

const passive = [
  "Watch hours of video, then wonder what to do next",
  "Tools are shown in isolation",
  "Learning ends when the video ends",
  "Content ages quietly",
];
const pillars = [
  { icon: Hands, title: "Learn by Doing", text: "Practical assignments and demonstrations in every course." },
  { icon: Spark, title: "AI-First Learning", text: "Apply AI tools to real tasks, and learn to check their work." },
  { icon: Target, title: "Business-Oriented Skills", text: "Tie what you learn to outcomes you define and can measure." },
  { icon: Refresh, title: "Continuous Improvement", text: "Lessons reviewed and updated as tools and platforms evolve." },
];

export function WhyUs() {
  const [ours, setOurs] = useState(true);
  const tab = "rounded-full px-5 py-2.5 text-sm font-extrabold transition";
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading align="center" eyebrow="Why AI Scholar" title={<>Your learning, <span className="hl">flipped</span></>} lead="Knowing about AI isn't the goal. Using it well on your own work is. Flip the switch to see how we design differently." />
        <div className="mt-8 flex justify-center">
          <div role="group" aria-label="Compare learning styles" className="chunk-sm inline-flex rounded-full bg-white p-1">
            <button type="button" aria-pressed={!ours} onClick={() => setOurs(false)} className={`${tab} ${!ours ? "bg-ink text-white" : "text-ink"}`}>Watch-only learning</button>
            <button type="button" aria-pressed={ours} onClick={() => setOurs(true)} className={`${tab} ${ours ? "bg-violet text-white" : "text-ink"}`}>AI Scholar</button>
          </div>
        </div>
        <div className="mt-10" aria-live="polite">
          {ours ? (
            <ul className="grid gap-5 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <li key={p.title} className={`chunk animate-rise rounded-card p-6 ${["bg-lav", "bg-sky", "bg-butter", "bg-peach"][i]}`} style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
                  <span className="grid size-11 place-items-center rounded-xl border-2 border-ink bg-white text-ink"><p.icon /></span>
                  <h3 className="mt-4 text-lg font-extrabold text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink/80">{p.text}</p>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mx-auto max-w-2xl space-y-3">
              {passive.map((t, i) => (
                <li key={t} className="animate-rise flex items-center gap-3 rounded-2xl border-2 border-dashed border-ink/30 bg-white px-5 py-4 text-ink/70" style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
                  <span aria-hidden className="grid size-7 shrink-0 place-items-center rounded-full bg-paper-2 text-sm">✕</span>{t}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}
