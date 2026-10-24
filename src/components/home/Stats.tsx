import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";
import { categories } from "@/data/categories";
import { courses } from "@/data/courses";

/** Every number is derived from real data in this repo, never invented. */
export function Stats() {
  const modules = Math.min(...courses.map((c) => c.curriculum.length));
  const tiles = [
    { n: String(courses.length), l: "Courses in development", s: "proposed, not yet open", c: "bg-lav" },
    { n: String(categories.filter((c) => c.primary).length), l: "Learning pillars", s: "AI · marketing · business", c: "bg-sky" },
    { n: `${modules}`, l: "Modules per outline", s: "each ending in a project", c: "bg-peach" },
    { n: "2", l: "Languages planned", s: "English now, Hinglish next", c: "bg-butter" },
  ];
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <SectionHeading align="center" eyebrow="Where we are" title={<>Early days. <span className="hl">Honest numbers.</span></>} lead="We're building in the open. Here's exactly what exists today. No inflated stats." />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <li key={t.l}>
              <Reveal delay={i * 90} className="h-full">
                <div className={`chunk h-full rounded-card p-6 ${t.c}`}>
                  <p className="text-6xl font-extrabold tracking-tight text-ink">{t.n}</p>
                  <p className="mt-3 text-lg font-extrabold text-ink">{t.l}</p>
                  <p className="mt-1 text-sm text-ink/70">{t.s}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
