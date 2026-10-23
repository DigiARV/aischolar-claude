import { CourseCard } from "@/components/courses/CourseCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";
import { courses } from "@/data/courses";

export function FeaturedCourses() {
  return (
    <section className="bg-paper-2/60 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Featured courses" title="Proposed courses, built around outcomes" lead="These are the first courses we're developing. Join a waitlist to shape what gets built first and be told when enrolment opens." />
          <Button href="/courses" variant="ghost" className="self-start sm:self-auto">View all courses</Button>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <li key={c.id}>
              <Reveal delay={(i % 3) * 90} className="h-full"><CourseCard course={c} index={i} /></Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
