"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Search } from "@/components/ui/Icons";
import { categories } from "@/data/categories";
import type { Course, Format, Level } from "@/data/courses";
import { CourseCard } from "./CourseCard";

const levels: Level[] = ["Beginner", "Intermediate", "Advanced"];
const formats: Format[] = ["Self-paced", "Live cohort", "Blended"];

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return (
    <label className="block text-sm font-medium text-heading">
      <span className="mb-1.5 block">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-12 w-full rounded-xl border-2 border-ink bg-white px-3 text-base text-heading outline-none focus:ring-2 focus:ring-violet/50"
      >
        <option value="">All</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}

/** Filter state lives in the URL, so back/forward and shared links work. */
export function CourseCatalogue({ courses }: { courses: Course[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const category = params.get("category") ?? "";
  const level = params.get("level") ?? "";
  const format = params.get("format") ?? "";
  const urlQ = params.get("q") ?? "";
  const [q, setQ] = useState(urlQ);
  const [prevUrlQ, setPrevUrlQ] = useState(urlQ);
  if (prevUrlQ !== urlQ) {
    setPrevUrlQ(urlQ);
    setQ(urlQ);
  }

  function setParam(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    const qs = next.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  const results = useMemo(() => {
    const needle = urlQ.trim().toLowerCase();
    return courses.filter(
      (c) =>
        (!category || c.category === category) &&
        (!level || c.level === level) &&
        (!format || c.format === format) &&
        (!needle || `${c.title} ${c.summary} ${c.description}`.toLowerCase().includes(needle)),
    );
  }, [courses, category, level, format, urlQ]);

  const active = [category, level, format, urlQ].some(Boolean);
  const usedCats = categories.filter((c) => courses.some((x) => x.category === c.id));

  return (
    <div>
      <form
        role="search"
        aria-label="Search and filter courses"
        onSubmit={(e) => { e.preventDefault(); setParam("q", q.trim()); }}
        className="chunk rounded-card bg-white p-4 sm:p-5"
      >
        <div className="grid gap-4 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <label className="block text-sm font-medium text-heading">
            <span className="mb-1.5 block">Search</span>
            <span className="relative block">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-body/60" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onBlur={() => q.trim() !== urlQ && setParam("q", q.trim())}
                placeholder="Try “ads” or “prompts”"
                className="min-h-12 w-full rounded-xl border-2 border-ink bg-white pl-11 pr-3 text-base text-heading outline-none focus:ring-2 focus:ring-violet/50"
              />
            </span>
          </label>
          <Select label="Category" value={category} onChange={(v) => setParam("category", v)} options={usedCats.map((c) => ({ value: c.id, label: c.name }))} />
          <Select label="Level" value={level} onChange={(v) => setParam("level", v)} options={levels.map((l) => ({ value: l, label: l }))} />
          <Select label="Format" value={format} onChange={(v) => setParam("format", v)} options={formats.map((f) => ({ value: f, label: f }))} />
        </div>
        <button type="submit" className="sr-only">Search</button>
      </form>

      <div className="mt-5 flex items-center justify-between gap-4" aria-live="polite">
        <p className="text-sm">{results.length} {results.length === 1 ? "course" : "courses"}{active && " match your filters"}</p>
        {active && (
          <button type="button" onClick={() => { setQ(""); router.push(pathname, { scroll: false }); }} className="text-sm font-semibold text-violet-deep underline-offset-4 hover:underline">
            Clear all
          </button>
        )}
      </div>

      {results.length > 0 ? (
        <ul className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((c) => (
            <li key={c.id}><CourseCard course={c} index={courses.indexOf(c)} /></li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 rounded-card border-2 border-dashed border-ink/40 bg-white p-10 text-center">
          <h2 className="text-lg font-semibold text-heading">No courses match those filters</h2>
          <p className="mx-auto mt-2 max-w-md text-sm">Try removing a filter, or tell us what you&apos;d like to learn and we&apos;ll keep it in mind.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button variant="ghost" onClick={() => { setQ(""); router.push(pathname, { scroll: false }); }}>Clear filters</Button>
            <Button href="/contact">Suggest a topic</Button>
          </div>
        </div>
      )}
    </div>
  );
}
