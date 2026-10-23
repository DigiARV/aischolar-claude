import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseArt } from "@/components/brand/CourseArt";
import { LeadForm } from "@/components/forms/LeadForm";
import { Price, StatusBadge, formatLine } from "@/components/courses/CourseMeta";
import { CourseCard } from "@/components/courses/CourseCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Check } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Section";
import { getCategory } from "@/data/categories";
import { courses, getCourse } from "@/data/courses";
import { getInstructor } from "@/data/instructors";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCourse(slug);
  if (!c) return {};
  return pageMetadata({ title: c.title, description: c.summary, path: `/courses/${c.slug}` });
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  const cat = getCategory(course.category);
  const instructor = getInstructor(course.instructorId);
  const idx = courses.indexOf(course);
  const related = courses.filter((c) => c.id !== course.id && (c.category === course.category || c.goals.some((g) => course.goals.includes(g)))).slice(0, 3);
  const live = course.status === "published";

  const facts: [string, string][] = [
    ["Level", course.level],
    ["Format", live ? course.format : `${course.format} (planned)`],
    ["Duration", course.duration ?? "To be announced"],
    ["Language", course.languages.join(", ")],
  ];

  return (
    <>
      <section className="on-dark relative overflow-hidden bg-ink pt-28 pb-14 sm:pt-36 sm:pb-20">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <Container className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-white/60">
              <Link href="/courses" className="hover:text-white">Courses</Link> <span aria-hidden>/</span> <span className="text-white/80">{cat.short}</span>
            </nav>
            <div className="mb-4 flex flex-wrap gap-2"><span className="rounded-full bg-white p-0.5"><StatusBadge status={course.status} /></span><Badge tone="dark">{course.level}</Badge></div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">{course.title}</h1>
            <p className="mt-4 max-w-xl text-lg text-white/70">{course.summary}</p>
            <p className="mt-4 text-sm text-white/50">By {instructor.name} · {formatLine(course)}</p>
          </div>
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10"><CourseArt category={course.category} seed={idx} className="aspect-[5/3] w-full" /></div>
        </Container>
      </section>

      <Container className="grid gap-10 py-14 lg:grid-cols-[1.7fr_1fr] lg:gap-14 lg:py-20">
        <div className="space-y-12">
          {!live && (
            <p className="rounded-card border border-dashed border-amber/60 bg-amber/10 p-4 text-sm text-[#6b4700]">
              This course is a proposal. The outline below shows our current plan and may change before launch. Enrolment is not open yet.
            </p>
          )}
          <section aria-labelledby="about"><h2 id="about" className="text-2xl font-semibold text-heading">About this course</h2><p className="mt-3 leading-relaxed">{course.description}</p></section>
          <section aria-labelledby="outcomes">
            <h2 id="outcomes" className="text-2xl font-semibold text-heading">What you&apos;ll be able to do</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {course.outcomes.map((o) => (<li key={o} className="flex gap-3 rounded-xl border border-line bg-white p-4 text-sm"><Check className="mt-0.5 size-5 shrink-0 text-violet" />{o}</li>))}
            </ul>
          </section>
          <section aria-labelledby="curriculum">
            <h2 id="curriculum" className="text-2xl font-semibold text-heading">Curriculum outline <span className="ml-2 align-middle text-xs font-medium text-body/70">(proposed)</span></h2>
            <ol className="mt-4 divide-y divide-line overflow-hidden rounded-card border border-line bg-white">
              {course.curriculum.map((m, i) => (
                <li key={m.title} className="flex gap-4 p-5">
                  <span className="font-mono text-sm text-violet-deep">{String(i + 1).padStart(2, "0")}</span>
                  <div><h3 className="font-semibold text-heading">{m.title}</h3><p className="mt-1 text-sm">{m.summary}</p></div>
                </li>
              ))}
            </ol>
          </section>
          <section aria-labelledby="who" className="grid gap-8 sm:grid-cols-2">
            <div><h2 id="who" className="text-xl font-semibold text-heading">Who it&apos;s for</h2><ul className="mt-3 list-disc space-y-1 pl-5 text-sm">{course.audience.map((a) => <li key={a}>{a}</li>)}</ul></div>
            <div><h2 className="text-xl font-semibold text-heading">Prerequisites</h2><ul className="mt-3 list-disc space-y-1 pl-5 text-sm">{course.prerequisites.map((a) => <li key={a}>{a}</li>)}</ul></div>
          </section>
          <section aria-labelledby="instructor" className="rounded-card border border-line bg-white p-6">
            <h2 id="instructor" className="text-xl font-semibold text-heading">Your instructor</h2>
            <p className="mt-3 font-semibold text-heading">{instructor.name} <span className="font-normal text-body">· {instructor.role}</span></p>
            <p className="mt-2 text-sm leading-relaxed">{instructor.philosophy}</p>
            <Link href="/about" className="mt-3 inline-block text-sm font-semibold text-violet-deep hover:underline">More about AI Scholar</Link>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start" aria-label="Enrolment">
          <div className="rounded-card border border-line bg-white p-6 shadow-card">
            <Price course={course} large />
            <dl className="mt-5 divide-y divide-line text-sm">
              {facts.map(([k, v]) => (<div key={k} className="flex justify-between py-2.5"><dt>{k}</dt><dd className="font-medium text-heading">{v}</dd></div>))}
            </dl>
            <div className="mt-5">
              {live && course.enrolUrl ? (
                <Button href={course.enrolUrl} className="w-full">Enrol now</Button>
              ) : course.waitlistUrl ? (
                <Button href={course.waitlistUrl} className="w-full">{course.status === "waitlist" ? "Join the waitlist" : "Get notified"}</Button>
              ) : (
                <>
                  <h2 className="mb-3 text-base font-semibold text-heading">{course.status === "waitlist" ? "Join the waitlist" : "Get notified when it's ready"}</h2>
                  <LeadForm source={`course:${course.slug}`} withName={false} cta={course.status === "waitlist" ? "Join the waitlist" : "Notify me"} consentText="I agree to receive an email about this course. I can unsubscribe at any time." />
                </>
              )}
            </div>
          </div>
        </aside>
      </Container>

      {related.length > 0 && (
        <section className="bg-paper-2/60 py-14 sm:py-20">
          <Container>
            <h2 className="text-2xl font-semibold text-heading">You might also like</h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (<li key={c.id}><CourseCard course={c} index={courses.indexOf(c)} /></li>))}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
}
