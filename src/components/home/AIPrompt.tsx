"use client";

import { useState } from "react";
import { Container, SectionHeading } from "@/components/ui/Section";

const parts = [
  { k: "Role", text: "Act as a friendly marketing coach for small businesses.", why: "Sets the point of view and tone you want the answer to take." },
  { k: "Context", text: "I run a home bakery in Pune and sell mostly through Instagram.", why: "Gives the facts a good answer depends on. This is where most prompts fall short." },
  { k: "Task", text: "Suggest five post ideas that could bring in first-time customers this month.", why: "One clear job beats a vague request." },
  { k: "Format", text: "Give each idea a hook, a format (reel, carousel or story) and a call to action, as a table.", why: "Tells the AI the shape of the answer so you can use it straight away." },
];
const items = ["Practical AI tool demonstrations", "Prompt libraries and reusable workflows", "AI-assisted research and content creation", "Marketing and business use cases", "Projects that apply AI responsibly"];
const future = ["AI-powered course recommendations", "A personal AI learning assistant", "Personalised practice and feedback"];

export function AIPrompt() {
  const [i, setI] = useState(0);
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="AI-powered learning" title={<>AI is how we teach, <em>not just what</em></>} lead="You'll practise with real AI tools from the first lesson, with guidance on judgement, quality and ethics. Here's a taste of the kind of thing you'll learn to do." />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_1fr]">
          <div className="chunk rounded-[2rem] bg-white p-6 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet">Lesson preview · anatomy of a good prompt</p>
            <p className="mt-5 text-lg leading-[1.9] text-ink/70 sm:text-xl">
              {parts.map((p, n) => (
                <button key={p.k} type="button" onClick={() => setI(n)} aria-pressed={i === n}
                  className={`mr-1 rounded-lg px-1.5 py-0.5 text-left transition ${i === n ? "bg-lav text-ink ring-2 ring-violet" : "hover:bg-paper-2"}`}>{p.text}</button>
              ))}
            </p>
            <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Prompt parts">
              {parts.map((p, n) => (
                <button key={p.k} type="button" onClick={() => setI(n)} aria-pressed={i === n}
                  className={`min-h-11 rounded-full px-4 text-sm font-semibold transition ${i === n ? "bg-violet text-white" : "border border-line bg-paper text-ink hover:border-violet"}`}>{p.k}</button>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-paper p-5" aria-live="polite">
              <p className="font-serif text-2xl text-ink">{parts[i].k}</p>
              <p className="mt-1 text-body">{parts[i].why}</p>
            </div>
            <p className="mt-4 text-xs text-body/70">An example for teaching purposes. This is not a live AI tool.</p>
          </div>
          <div>
            <ul className="space-y-3">
              {items.map((t) => (<li key={t} className="flex gap-3 border-b border-line pb-3 font-medium text-ink"><span className="mt-2 size-2 shrink-0 rounded-full bg-mint" aria-hidden />{t}</li>))}
            </ul>
            <div className="mt-8 rounded-2xl border border-dashed border-ink/30 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral-deep">On the roadmap, not live yet</p>
              <ul className="mt-2 space-y-1 text-sm text-body">{future.map((f) => <li key={f}>◦ {f}</li>)}</ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
