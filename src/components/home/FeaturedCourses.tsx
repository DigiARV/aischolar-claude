import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Section";
import { courses } from "@/data/courses";
import { CourseCarousel } from "./CourseCarousel";

export function FeaturedCourses() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Skills that pay" title={<>Courses built around <span className="hl">outcomes</span></>} lead="These are the first courses we're developing. Swipe through, then join a waitlist to be told when enrolment opens." />
          <Button href="/courses" variant="secondary" className="self-start sm:self-auto">See all courses →</Button>
        </div>
        <div className="mt-10"><CourseCarousel courses={courses} /></div>
      </Container>
    </section>
  );
}
