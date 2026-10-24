import Link from "next/link";
import { CourseArt } from "@/components/brand/CourseArt";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "@/components/ui/Icons";
import { getCategory } from "@/data/categories";
import type { Course } from "@/data/courses";
import { Price, StatusBadge, formatLine } from "./CourseMeta";

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  const cat = getCategory(course.category);
  return (
    <article className="chunk group relative flex h-full flex-col overflow-hidden rounded-card bg-white transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-ink)] focus-within:-translate-y-0.5">
      <div className="relative aspect-[5/3] overflow-hidden border-b-2 border-ink">
        <CourseArt category={course.category} seed={index} className="size-full transition duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3 rounded-full border-2 border-ink bg-white p-0.5"><StatusBadge status={course.status} /></div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2"><Badge tone="violet">{cat.short}</Badge><Badge>{course.level}</Badge></div>
        <h3 className="text-lg font-extrabold leading-snug text-heading">
          <Link href={`/courses/${course.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">{course.title}</Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed">{course.summary}</p>
        <p className="mt-3 rounded-xl border-2 border-dashed border-ink/25 bg-paper px-3 py-2 text-[0.8rem] leading-snug text-ink/80">
          <strong className="text-ink">After this:</strong> {course.teaser}
        </p>
        <p className="mt-3 text-xs text-body/80">{formatLine(course)}{!course.duration && " · Duration to be announced"}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <Price course={course} />
          <span className="inline-flex items-center gap-1.5 text-sm font-extrabold text-violet-deep transition-all group-hover:gap-2.5">Details <ArrowRight className="size-4" /></span>
        </div>
      </div>
    </article>
  );
}
