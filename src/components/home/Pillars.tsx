import Link from "next/link";
import { CourseArt } from "@/components/brand/CourseArt";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";
import { categories } from "@/data/categories";
import { courses } from "@/data/courses";

const tints = ["bg-lav", "bg-sky", "bg-butter"];

export function Pillars() {
  const primary = categories.filter((c) => c.primary);
  const secondary = categories.filter((c) => !c.primary);
  return (
    <section className="border-y-2 border-ink bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="What you can learn" title={<>Three pillars. <span className="hl">One skill set.</span></>} lead="Start in the area closest to your goal. The pillars are designed to work together, so each one makes the others more useful." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {primary.map((c, i) => {
            const n = courses.filter((x) => x.category === c.id).length;
            return (
              <Reveal key={c.id} delay={i * 110}>
                <Link href={`/courses?category=${c.id}`} className={`chunk group flex h-full flex-col overflow-hidden rounded-card transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-ink)] ${tints[i]}`}>
                  <div className="aspect-[16/9] overflow-hidden border-b-2 border-ink"><CourseArt category={c.id} seed={i} className="size-full transition duration-500 group-hover:scale-105" /></div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm font-extrabold text-ink/50">0{i + 1}</p>
                    <h3 className="mt-1 text-xl font-extrabold text-ink">{c.name}</h3>
                    <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink/80">{c.description}</p>
                    <p className="mt-5 flex items-center justify-between text-sm font-extrabold text-ink">
                      <span>{n > 0 ? `${n} proposed ${n === 1 ? "course" : "courses"}` : "Courses coming"}</span>
                      <span className="inline-flex items-center gap-1.5 transition-all group-hover:gap-2.5">Explore <ArrowRight className="size-4" /></span>
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10">
          <p className="mb-3 text-sm font-extrabold text-heading">Also explore</p>
          <ul className="flex flex-wrap gap-3">
            {secondary.map((c) => (
              <li key={c.id}>
                <Link href={`/courses?category=${c.id}`} className="chunk-sm inline-flex min-h-11 items-center rounded-full bg-white px-4 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-lav">{c.name}</Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
