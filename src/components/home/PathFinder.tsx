"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { getCategory } from "@/data/categories";
import { courses } from "@/data/courses";
import { coursesFor, learningPaths } from "@/data/paths";

/** Interactive path chooser. Used on the homepage (compact) and /learning-paths. */
export function PathFinder({ dark = false }: { dark?: boolean }) {
  const [selected, setSelected] = useState<string | null>(null);
  const id = useId();
  const path = learningPaths.find((p) => p.id === selected);
  const list = path ? coursesFor(path, courses) : [];

  return (
    <div>
      <div role="radiogroup" aria-label="What is your main goal?" className="grid gap-3 md:grid-cols-3">
        {learningPaths.map((p, i) => {
          const on = selected === p.id;
          return (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={on}
              aria-controls={`${id}-result`}
              onClick={() => setSelected(p.id)}
              className={`group min-h-24 rounded-card border p-5 text-left transition duration-200 ${
                on
                  ? "border-violet bg-violet text-white shadow-lift"
                  : dark
                    ? "border-white/15 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                    : "border-line bg-white text-heading hover:border-violet/50"
              }`}
            >
              <span className={`text-xs font-semibold tracking-[0.16em] ${on ? "text-white/80" : "text-cyan-deep"}`}>0{i + 1}</span>
              <span className="mt-1 block text-lg font-semibold leading-snug">{p.label}</span>
              <span className={`mt-1 block text-sm ${on ? "text-white/80" : dark ? "text-white/60" : "text-body"}`}>{p.blurb}</span>
            </button>
          );
        })}
      </div>

      <div id={`${id}-result`} aria-live="polite" className="mt-6">
        {!path ? (
          <p className={`rounded-card border border-dashed p-6 text-sm ${dark ? "border-white/20 text-white/60" : "border-line text-body"}`}>
            Pick the option closest to your goal. We&apos;ll suggest where to start. No technical knowledge needed.
          </p>
        ) : (
          <div className={`rounded-card border p-6 sm:p-8 ${dark ? "border-white/15 bg-white/5" : "border-line bg-white shadow-card"}`}>
            <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-cyan" : "text-violet-deep"}`}>Suggested path</p>
            <ol className="mt-5 grid gap-5 md:grid-cols-3">
              {list.map((c, i) => (
                <li key={c.id} className="relative">
                  <div className="flex items-center gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet to-cyan text-sm font-bold text-ink">{i + 1}</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-violet/40 to-transparent" aria-hidden />
                  </div>
                  <p className={`mt-3 text-xs font-medium ${dark ? "text-white/50" : "text-body/70"}`}>{getCategory(c.category).short} · {c.level}</p>
                  <Link href={`/courses/${c.slug}`} className={`mt-0.5 block font-semibold leading-snug hover:underline ${dark ? "text-white" : "text-heading"}`}>{c.title}</Link>
                  <p className={`mt-1 text-sm ${dark ? "text-white/60" : "text-body"}`}>{path.steps[i]?.text}</p>
                </li>
              ))}
            </ol>
            <div className={`mt-7 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between ${dark ? "border-white/10" : "border-line"}`}>
              <p className={`text-sm ${dark ? "text-white/70" : "text-body"}`}><strong className={dark ? "text-white" : "text-heading"}>Next step:</strong> {path.nextStep}</p>
              <Button href={`/courses/${list[0].slug}`} className="shrink-0">View first course <ArrowRight className="size-4" /></Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
