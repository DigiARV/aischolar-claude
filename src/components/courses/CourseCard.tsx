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
    <article className="chunk group relative flex h-full flex-col rounded-[1.75rem] bg-white p-2.5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgb(91_63_230/0.35)] focus-within:-translate-y-1">
      <div className="relative aspect-[5/3] overflow-hidden rounded-[1.25rem]">
        <CourseArt category={course.category} seed={index} className="size-full transition duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3 rounded-full bg-white/95 p-0.5 shadow-sm"><StatusBadge status={course.status} /></div>
      </div>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-4">
        <div className="mb-3 flex flex-wrap items-center gap-2"><Badge tone="violet">{cat.short}</Badge><Badge>{course.level}</Badge></div>
        <h3 className="font-serif text-[1.65rem] leading-[1.1] text-ink">
          <Link href={`/courses/${course.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">{course.title}</Link>
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed">{course.summary}</p>
        <p className="mt-3 font-serif text-[1.05rem] italic leading-snug text-violet">After this: {course.teaser}</p>
        <p className="mt-3 text-xs text-body/80">{formatLine(course)}{!course.duration && " · Duration to be announced"}</p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
          <Price course={course} />
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-all group-hover:gap-2.5">Details <ArrowRight className="size-4" /></span>
        </div>
      </div>
    </article>
  );
}
