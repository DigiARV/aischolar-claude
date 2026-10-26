import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";

const stages = [
  { when: "Now", tone: "bg-coral", items: ["Designing the first course outlines", "Opening course waitlists", "Building this website"] },
  { when: "Next", tone: "bg-violet", items: ["Opening enrolment for the first course", "Publishing free guides and templates", "Student accounts and dashboard"] },
  { when: "Later", tone: "bg-saffron", items: ["Hinglish courses", "Live cohorts", "Community and an AI learning assistant"] },
];

export function Roadmap() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <SectionHeading eyebrow="Roadmap" title={<>Where we are, and <em>where we&apos;re going</em></>} lead="AI Scholar is early. This is what exists today and what we plan to build, in order. Plans may change as we learn." />
        <ol className="relative mt-12 grid gap-5 md:grid-cols-3">
          <span className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-line md:block" aria-hidden />
          {stages.map((s, i) => (
            <li key={s.when} className="relative">
              <Reveal delay={i * 110}>
                <div className="flex items-center gap-3"><span className={`relative z-10 size-[0.9rem] rounded-full ring-8 ring-paper ${s.tone}`} aria-hidden /><span className="font-serif text-3xl text-ink">{s.when}</span></div>
                <ul className="chunk-sm mt-5 space-y-3 rounded-card bg-white p-6 text-[0.95rem]">
                  {s.items.map((t) => (<li key={t} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink/30" aria-hidden />{t}</li>))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
