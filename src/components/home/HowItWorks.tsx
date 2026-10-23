import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";

const steps = [
  { t: "Choose your learning goal", d: "Start from what you want to achieve, not from a tool name." },
  { t: "Select a course or learning path", d: "Follow a suggested sequence or pick a single course." },
  { t: "Learn through guided lessons and practical exercises", d: "Short lessons, demonstrations and exercises that build on each other." },
  { t: "Apply your skills to real-world projects", d: "Finish with work you can use or show." },
];

export function HowItWorks() {
  return (
    <section className="bg-paper-2/60 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="How it works" title="From goal to real work in four steps" />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <span className="absolute left-[1.35rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-violet/50 to-cyan/50 max-md:block md:left-0 md:top-[1.35rem] md:h-px md:w-full md:bg-gradient-to-r" aria-hidden />
          {steps.map((s, i) => (
            <li key={s.t} className="relative pl-14 md:pl-0">
              <Reveal delay={i * 120}>
                <span className="absolute left-0 top-0 grid size-11 place-items-center rounded-full border border-violet/30 bg-white text-base font-semibold text-violet-deep shadow-card md:relative md:mb-5">{i + 1}</span>
                <h3 className="text-lg font-semibold leading-snug text-heading">{s.t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed">{s.d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
