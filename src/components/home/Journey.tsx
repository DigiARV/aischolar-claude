import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";

const steps = [
  { t: "Choose your learning goal", d: "Begin with what you want to achieve, not with a tool name." },
  { t: "Select a course or learning path", d: "Follow a suggested order or pick a single course that fits." },
  { t: "Learn through guided lessons and exercises", d: "Short lessons with practice built in, at your own pace." },
  { t: "Apply your skills to real projects", d: "Finish with work you can use, show and keep improving." },
];

export function Journey() {
  return (
    <section className="bg-ink py-20 text-white sm:py-28">
      <Container className="on-dark grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading dark eyebrow="The learning journey" title={<>From goal to <em>real work</em></>} lead="Four steps, designed so beginners always know what to do next." />
        </div>
        <ol className="relative space-y-10 pl-14 sm:pl-16">
          <span className="absolute bottom-3 left-[1.45rem] top-3 w-px bg-gradient-to-b from-violet-soft via-coral to-transparent sm:left-[1.7rem]" aria-hidden />
          {steps.map((s, i) => (
            <li key={s.t} className="relative">
              <Reveal delay={i * 100}>
                <span className="absolute -left-14 top-0 grid size-11 place-items-center rounded-full border border-white/25 bg-ink font-serif text-xl text-violet-soft sm:-left-16 sm:size-[3.4rem] sm:text-2xl">{i + 1}</span>
                <h3 className="font-serif text-3xl leading-tight text-white sm:text-4xl">{s.t}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-white/70">{s.d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
