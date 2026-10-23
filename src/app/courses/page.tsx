import { Suspense } from "react";
import { CourseCatalogue } from "@/components/courses/CourseCatalogue";
import { Container, PageHero } from "@/components/ui/Section";
import { courses } from "@/data/courses";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Explore Courses",
  description: "Browse proposed AI, digital marketing and business courses from AI Scholar. Search by category, level and format, and join a waitlist.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <>
      <PageHero eyebrow="Courses" title="Explore courses" lead="Practical courses in AI, marketing and business. All courses below are proposed and in development; join a waitlist to be told when enrolment opens." />
      <section className="py-12 sm:py-16">
        <Container>
          <Suspense fallback={<div className="h-64 animate-pulse rounded-card bg-paper-2" aria-label="Loading courses" />}>
            <CourseCatalogue courses={courses} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
