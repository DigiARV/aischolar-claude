import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";
import { getInstructor } from "@/data/instructors";
import { InstructorPortrait } from "@/components/brand/InstructorPortrait";

export function FounderSection({ compact = false }: { compact?: boolean }) {
  const a = getInstructor("anuj-yadav");
  return (
    <section className={compact ? "" : "py-20 sm:py-28"}>
      <Container className={compact ? "px-0 sm:px-0" : ""}>
        {!compact && <SectionHeading eyebrow="Your instructor" title="Learn from a practitioner-minded founder" />}
        <div className={`${compact ? "" : "mt-12"} grid items-center gap-10 overflow-hidden rounded-[2rem] border border-line bg-white p-6 shadow-card sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14`}>
          <Reveal><InstructorPortrait name={a.name} portrait={a.portrait} /></Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-deep">{a.role}</p>
            <h3 className="mt-1 text-3xl font-semibold text-heading">{a.name}</h3>
            <p className="mt-4 leading-relaxed">{a.bio}</p>
            <blockquote className="mt-5 border-l-2 border-violet pl-4 text-base italic leading-relaxed text-heading">{a.philosophy}</blockquote>
            <h4 className="mt-6 text-sm font-semibold text-heading">Areas of focus</h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {a.expertise.map((e) => (<li key={e} className="rounded-full bg-paper-2 px-3 py-1 text-sm">{e}</li>))}
            </ul>
            {a.credentials.length === 0 && (
              <p className="mt-5 rounded-xl border border-dashed border-amber/60 bg-amber/10 p-3 text-xs text-[#6b4700]">
                Placeholder: verified experience and credentials will be added here before launch (edit <code>src/data/instructors.ts</code>).
              </p>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/about" variant="ghost">About AI Scholar</Button>
              {a.links.map((l) => (<Button key={l.label} href={l.url} variant="ghost">{l.label}</Button>))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
