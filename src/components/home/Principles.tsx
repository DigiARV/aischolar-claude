"use client";

import { useState } from "react";
import { Container, SectionHeading } from "@/components/ui/Section";

const items = [
  { title: "Learn by Doing", lead: "Practical assignments and demonstrations, so every concept meets a real task.", points: ["Each module ends with a short exercise", "Demonstrations you can pause and follow along", "A small project to finish every course"] },
  { title: "AI-First Learning", lead: "Understand how to apply AI tools to real tasks, and how to check the results.", points: ["AI tools used from the very first lesson", "Prompts and workflows you can reuse", "Habits for reviewing and fixing AI output"] },
  { title: "Business-Oriented Skills", lead: "Connect learning to measurable business and professional outcomes you choose.", points: ["Start by defining the outcome you want", "Simple ways to measure progress", "Apply it to your own work or a sample brand"] },
  { title: "Continuous Improvement", lead: "Lessons are reviewed and updated as tools, platforms and best practices evolve.", points: ["Regular reviews as tools change", "A visible changelog per course (planned)", "Learner feedback shapes what gets updated"] },
];

export function Principles() {
  const [i, setI] = useState(0);
  const cur = items[i];
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Why AI Scholar" title={<>How we design <em>every course</em></>} lead="Knowing about AI isn't the goal. Using it well on your own work is. Four principles guide what we build." />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div role="tablist" aria-orientation="vertical" aria-label="Our principles" className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {items.map((it, n) => (
              <button key={it.title} role="tab" id={`pr-t${n}`} aria-selected={i === n} aria-controls="pr-panel" onClick={() => setI(n)}
                className={`flex min-h-14 shrink-0 items-center gap-4 rounded-2xl border px-5 py-3.5 text-left transition lg:w-full ${i === n ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-ink/40"}`}>
                <span className={`font-serif text-2xl ${i === n ? "text-violet-soft" : "text-ink/30"}`}>0{n + 1}</span>
                <span className="whitespace-nowrap font-semibold lg:whitespace-normal">{it.title}</span>
              </button>
            ))}
          </div>
          <div id="pr-panel" role="tabpanel" aria-labelledby={`pr-t${i}`} key={i} className="chunk animate-rise rounded-[2rem] bg-white p-7 sm:p-10">
            <h3 className="font-serif text-4xl text-ink">{cur.title}</h3>
            <p className="mt-3 text-lg leading-relaxed text-body">{cur.lead}</p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-violet">In practice</p>
            <ul className="mt-3 space-y-3">
              {cur.points.map((p) => (<li key={p} className="flex gap-3 border-t border-line pt-3 text-ink"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-coral" aria-hidden />{p}</li>))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
