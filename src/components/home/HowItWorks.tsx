import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";

const levels = [
  { t: "Choose your goal", d: "Start from what you want to achieve, not from a tool name.", c: "bg-lav" },
  { t: "Select a course or path", d: "Follow a suggested sequence or pick a single course.", c: "bg-sky" },
  { t: "Learn by doing", d: "Guided lessons and practical exercises that build on each other.", c: "bg-butter" },
  { t: "Apply it to real projects", d: "Finish with work you can use, show and improve.", c: "bg-peach" },
];

export function HowItWorks() {
  return (
    <section className="border-y-2 border-ink bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Simple process" title={<>How it works. <span className="hl">Level by level.</span></>} lead="Get started in minutes. Choose your path, learn at your pace, and build real things." />
        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {levels.map((l, i) => (
            <li key={l.t} className={i % 2 ? "md:translate-y-8" : ""}>
              <Reveal delay={i * 110} className="h-full">
                <div className={`chunk relative h-full rounded-card p-6 ${l.c}`}>
                  <span className="inline-block rounded-full border-2 border-ink bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wider">Level {i + 1}</span>
                  <h3 className="mt-4 text-xl font-extrabold leading-snug text-ink">{l.t}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/80">{l.d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal className="mt-16 md:mt-20">
          <div className="chunk mx-auto flex max-w-xl items-center gap-4 rounded-2xl bg-ink p-5 text-white shadow-[5px_5px_0_0_var(--color-violet)]">
            <span className="text-3xl" aria-hidden>🏆</span>
            <p><strong className="text-amber">Boss level:</strong> your first real project, built with what you learned.</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
