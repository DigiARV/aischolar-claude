"use client";

import { useState } from "react";
import { InstructorPortrait } from "@/components/brand/InstructorPortrait";
import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Section";
import { getInstructor } from "@/data/instructors";

export function FounderSection({ compact = false }: { compact?: boolean }) {
  const a = getInstructor("anuj-yadav");
  const [flipped, setFlipped] = useState(false);
  return (
    <section className={compact ? "" : "border-y-2 border-ink bg-butter/50 py-20 sm:py-28"}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Meet the founder" title={<>The human behind <span className="hl">the lessons</span></>} lead="Tap the card to see how Anuj thinks about teaching." />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="secondary" onClick={() => setFlipped((f) => !f)} aria-pressed={flipped}>{flipped ? "Show portrait ↻" : "Flip the card ↻"}</Button>
              <Button href="/about" variant="ghost">About AI Scholar</Button>
              {a.links.map((l) => (<Button key={l.label} href={l.url} variant="ghost">{l.label}</Button>))}
            </div>
          </div>
          <div className="flip mx-auto w-full max-w-lg" data-flipped={flipped}>
            <div className="flip-inner">
              <div className="flip-face chunk rounded-[2rem] bg-white p-5" aria-hidden={flipped} inert={flipped}>
                <InstructorPortrait name={a.name} portrait={a.portrait} />
                <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.14em] text-violet-deep">{a.role}</p>
                <h3 className="text-2xl font-extrabold text-ink">{a.name}</h3>
              </div>
              <div className="flip-face flip-back chunk rounded-[2rem] bg-lav p-6 sm:p-8" aria-hidden={!flipped} inert={!flipped}>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-violet-deep">{a.role}</p>
                <h3 className="text-2xl font-extrabold text-ink">{a.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">{a.bio}</p>
                <blockquote className="mt-4 border-l-4 border-violet pl-4 text-sm font-semibold italic text-ink">{a.philosophy}</blockquote>
                <ul className="mt-4 flex flex-wrap gap-2">{a.expertise.map((e) => (<li key={e} className="rounded-full border-2 border-ink bg-white px-3 py-1 text-xs font-bold">{e}</li>))}</ul>
                {a.credentials.length === 0 && (
                  <p className="mt-4 rounded-xl border-2 border-dashed border-ink/40 bg-butter p-3 text-xs text-[#6b4700]">Placeholder: verified experience and credentials will be added before launch (edit <code>src/data/instructors.ts</code>).</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
