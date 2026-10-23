import Link from "next/link";
import { CourseArt } from "@/components/brand/CourseArt";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "@/components/ui/Icons";
import { getCategory, type CategoryId } from "@/data/categories";
import type { Course } from "@/data/courses";
import { Price, StatusBadge, formatLine } from "./CourseMeta";

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  const cat = getCategory(course.category as CategoryId);
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift focus-within:shadow-lift">
      <div className="relative aspect-[5/3] overflow-hidden">
        <CourseArt category={course.category} seed={index} className="size-full transition duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3 rounded-full bg-white p-0.5 shadow">
          <StatusBadge status={course.status} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge tone="violet">{cat.short}</Badge>
          <Badge>{course.level}</Badge>
        </div>
        <h3 className="text-lg font-semibold leading-snug text-heading">
          <Link href={`/courses/${course.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {course.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed">{course.summary}</p>
        <p className="mt-3 text-xs text-body/80">{formatLine(course)}{!course.duration && " · Duration to be announced"}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <Price course={course} />
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-deep transition-all group-hover:gap-2.5">
            View details <ArrowRight className="size-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
