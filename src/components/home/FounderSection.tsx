import { InstructorPortrait } from "@/components/brand/InstructorPortrait";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Pill } from "@/components/ui/Section";
import { getInstructor } from "@/data/instructors";

export function FounderSection() {
  const a = getInstructor("anuj-yadav");
  return (
    <section className="border-y border-line bg-white py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal><InstructorPortrait name={a.name} portrait={a.portrait} /></Reveal>
        <Reveal delay={120}>
          <Pill>Founder & lead instructor</Pill>
          <h2 className="h-display mt-4 text-5xl sm:text-6xl">{a.name}</h2>
          <p className="mt-5 text-lg leading-relaxed">{a.bio}</p>
          <blockquote className="mt-6 border-l-2 border-coral pl-5 font-serif text-2xl italic leading-snug text-ink">&ldquo;{a.philosophy}&rdquo;</blockquote>
          <h3 className="mt-8 text-sm font-semibold text-heading">Areas of focus</h3>
          <ul className="mt-3 flex flex-wrap gap-2">{a.expertise.map((e) => (<li key={e} className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm font-medium text-ink">{e}</li>))}</ul>
          {a.credentials.length === 0 && (
            <p className="mt-6 rounded-2xl border border-dashed border-saffron bg-butter p-4 text-sm text-[#6b4700]">Placeholder: verified experience and credentials will be added before launch (edit <code>src/data/instructors.ts</code>).</p>
          )}
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/about" variant="secondary">About AI Scholar</Button>
            {a.links.map((l) => (<Button key={l.label} href={l.url} variant="ghost">{l.label}</Button>))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
