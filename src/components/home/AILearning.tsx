"use client";

import { useState } from "react";
import { Container, SectionHeading } from "@/components/ui/Section";

const labs = [
  { tab: "Research", prompt: "Act as a research assistant. Summarise the 5 most important things a first-time buyer should know about [topic]. For each, say how confident you are and what to verify.", note: "Teaches: structured prompts + checking sources." },
  { tab: "Marketing copy", prompt: "Write 5 hook options for [offer] aimed at [audience]. Keep each under 12 words. Then explain which one you'd test first and why.", note: "Teaches: constraints, variations, judgement." },
  { tab: "Content plan", prompt: "Turn this idea into a 5-post week: [idea]. For each post give the format, the hook and the call to action.", note: "Teaches: repurposing one idea many ways." },
  { tab: "Analysis", prompt: "Here are my campaign results: [paste data]. Point out 3 patterns, 2 possible causes and 1 low-risk test for next week.", note: "Teaches: reading data with AI as a thinking partner." },
];
const items = ["Practical AI tool demonstrations", "Prompt libraries and reusable workflows", "AI-assisted research and content creation", "Marketing and business use cases", "Projects that apply AI responsibly"];
const future = ["AI-powered course recommendations", "A personal AI learning assistant", "Personalised practice and feedback"];

export function AILearning() {
  const [i, setI] = useState(0);
  const lab = labs[i];
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="The AI part" title={<>Work <span className="hl">with</span> AI. Not against it.</>} lead="AI is how we teach, not just what we teach. You'll practise with real tools from the first lesson, with guidance on judgement, quality and ethics." />
          <ul className="mt-7 space-y-2.5">
            {items.map((t) => (<li key={t} className="flex gap-3 font-semibold text-ink"><span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-violet" aria-hidden />{t}</li>))}
          </ul>
          <div className="mt-8 rounded-2xl border-2 border-dashed border-ink/40 bg-white p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#8a5a00]">On the roadmap, not live yet</p>
            <ul className="mt-2 space-y-1 text-sm text-body">{future.map((f) => <li key={f}>◦ {f}</li>)}</ul>
          </div>
        </div>
        <div className="chunk self-start overflow-hidden rounded-card bg-ink text-white shadow-[6px_6px_0_0_var(--color-violet)]">
          <div className="flex items-center gap-2 border-b border-white/15 px-4 py-3">
            <span className="flex gap-1.5" aria-hidden><i className="size-3 rounded-full bg-pink" /><i className="size-3 rounded-full bg-amber" /><i className="size-3 rounded-full bg-cyan" /></span>
            <span className="ml-2 font-mono text-xs text-white/60">ai-scholar-lab · example prompts</span>
          </div>
          <div role="tablist" aria-label="Example use cases" className="flex gap-2 overflow-x-auto px-4 pt-4">
            {labs.map((l, n) => (
              <button key={l.tab} role="tab" aria-selected={i === n} id={`lab-t${n}`} aria-controls="lab-panel" onClick={() => setI(n)}
                className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-bold transition ${i === n ? "bg-cyan text-ink" : "bg-white/10 text-white/80 hover:bg-white/20"}`}>{l.tab}</button>
            ))}
          </div>
          <div id="lab-panel" role="tabpanel" aria-labelledby={`lab-t${i}`} className="p-5 sm:p-6">
            <p className="font-mono text-sm leading-relaxed"><span className="text-cyan">you@lab:~$</span> {lab.prompt}</p>
            <p className="mt-5 rounded-xl bg-white/10 p-3 text-sm text-white/80">{lab.note}</p>
            <p className="mt-4 text-xs text-white/50">Illustrative prompt from the kind of exercise we plan to teach. This is not a live AI tool.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
