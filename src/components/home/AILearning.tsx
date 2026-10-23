import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";

const items = [
  { t: "Practical AI tool demonstrations", d: "Watch tools used on real tasks, including where they fall short." },
  { t: "Prompt libraries and reusable workflows", d: "Templates you can adapt and reuse after the course ends." },
  { t: "AI-assisted research and content creation", d: "Faster first drafts, with a method for checking quality and sources." },
  { t: "Marketing and business use cases", d: "Examples drawn from campaigns, operations and customer work." },
  { t: "Projects for responsible AI use", d: "Apply AI with attention to accuracy, privacy and originality." },
];
const future = ["AI-powered course recommendations", "A personal AI learning assistant", "Personalised practice and feedback"];

export function AILearning() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
      <Container className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading dark eyebrow="AI-powered learning" title={<>AI is how we teach, <span className="display grad-text">not just what we teach</span></>} lead="Courses are designed so you practise with real AI tools from the first lesson, with guidance on judgement, quality and ethics." />
          <Reveal className="mt-8 rounded-card border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">On the roadmap, not live yet</p>
            <ul className="mt-3 space-y-1.5 text-sm text-white/70">
              {future.map((f) => (<li key={f} className="flex gap-2"><span className="text-white/40" aria-hidden>◦</span>{f}</li>))}
            </ul>
          </Reveal>
        </div>
        <ul className="space-y-3">
          {items.map((it, i) => (
            <li key={it.t}>
              <Reveal delay={i * 80}>
                <div className="flex gap-4 rounded-card border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/25 hover:bg-white/[0.07]">
                  <span className="font-mono text-sm text-cyan" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-semibold text-white">{it.t}</h3>
                    <p className="mt-1 text-sm text-white/65">{it.d}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
