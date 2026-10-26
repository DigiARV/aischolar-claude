import Link from "next/link";
import { CourseArt } from "@/components/brand/CourseArt";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";
import { categories } from "@/data/categories";
import { courses } from "@/data/courses";

export function Pillars() {
  const primary = categories.filter((c) => c.primary);
  const secondary = categories.filter((c) => !c.primary);
  return (
    <section className="border-y border-line bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="What you can learn" title={<>Three pillars, <em>one skill set</em></>} lead="Start in the area closest to your goal. Each pillar makes the others more useful." />
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {primary.map((c, i) => {
            const mine = courses.filter((x) => x.category === c.id);
            return (
              <li key={c.id}>
                <Reveal delay={i * 80}>
                  <Link href={`/courses?category=${c.id}`} className="group grid items-center gap-5 py-7 transition-colors hover:bg-paper md:grid-cols-[4rem_1.2fr_1.4fr_9rem_2rem] md:gap-8 md:px-4">
                    <span className="font-serif text-5xl text-ink/25 transition-colors group-hover:text-violet">0{i + 1}</span>
                    <h3 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">{c.name}</h3>
                    <p className="text-[0.95rem] leading-relaxed">{c.description}</p>
                    <div className="hidden aspect-[4/3] overflow-hidden rounded-2xl md:block"><CourseArt category={c.id} seed={i} className="size-full transition duration-500 group-hover:scale-110" /></div>
                    <span className="flex items-center gap-2 text-sm font-semibold text-violet md:justify-end"><span className="md:hidden">{mine.length} proposed {mine.length === 1 ? "course" : "courses"} · Explore</span><ArrowRight className="size-5 transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <Reveal className="mt-10">
          <p className="mb-3 text-sm font-semibold text-heading">Also explore</p>
          <ul className="flex flex-wrap gap-2.5">
            {secondary.map((c) => (
              <li key={c.id}><Link href={`/courses?category=${c.id}`} className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-4 text-sm font-medium text-ink transition hover:border-violet hover:text-violet">{c.name}</Link></li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
