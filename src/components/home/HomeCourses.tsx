"use client";

import { useState } from "react";
import { CourseCard } from "@/components/courses/CourseCard";
import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Section";
import { courses, type Level } from "@/data/courses";

const tabs: { id: "all" | Level; label: string }[] = [
  { id: "all", label: "All courses" },
  { id: "Beginner", label: "Start here" },
  { id: "Intermediate", label: "Level up" },
];

export function HomeCourses() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("all");
  const shown = courses.filter((c) => tab === "all" || c.level === tab);
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Featured courses" title={<>Courses built around <em>outcomes</em></>} lead="The first courses we're developing. Pick a level, open one up, and join its waitlist." />
          <div role="tablist" aria-label="Filter by level" className="inline-flex self-start rounded-full border border-line bg-white p-1 lg:self-auto">
            {tabs.map((t) => (
              <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${tab === t.id ? "bg-ink text-white" : "text-ink/70 hover:text-ink"}`}>{t.label}</button>
            ))}
          </div>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel" aria-live="polite">
          {shown.map((c) => (<li key={c.id}><CourseCard course={c} index={courses.indexOf(c)} /></li>))}
        </ul>
        <div className="mt-10 text-center"><Button href="/courses" variant="secondary">Browse the full catalogue</Button></div>
      </Container>
    </section>
  );
}
