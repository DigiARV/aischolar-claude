"use client";

import { useRef } from "react";
import { CourseCard } from "@/components/courses/CourseCard";
import type { Course } from "@/data/courses";

/** Swipeable scroll-snap carousel (native scrolling, no library). */
export function CourseCarousel({ courses }: { courses: Course[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 24), behavior: "smooth" });
  };
  const arrow = "chunk-sm grid size-12 place-items-center rounded-full bg-white text-xl font-bold text-ink transition hover:bg-violet hover:text-white active:translate-y-0.5";
  return (
    <div>
      <ul ref={ref} className="snap-row -mx-5 flex gap-6 overflow-x-auto px-5 pb-6 pt-2 sm:-mx-8 sm:px-8" aria-label="Featured courses" tabIndex={0}>
        {courses.map((c, i) => (
          <li key={c.id} className="w-[82%] shrink-0 sm:w-[22rem]"><CourseCard course={c} index={i} /></li>
        ))}
      </ul>
      <div className="mt-4 flex gap-3">
        <button type="button" onClick={() => go(-1)} className={arrow} aria-label="Previous courses">←</button>
        <button type="button" onClick={() => go(1)} className={arrow} aria-label="Next courses">→</button>
      </div>
    </div>
  );
}
