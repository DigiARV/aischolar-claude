"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { getCategory } from "@/data/categories";
import { courses } from "@/data/courses";
import { coursesFor, learningPaths } from "@/data/paths";

const emoji: Record<string, string> = { "grow-business": "📈", "master-ai": "🤖", "marketing-career": "🎯" };

/** Interactive path quiz. Sits on a violet band (white text). Used on the homepage and /learning-paths. */
export function PathFinder() {
  const [selected, setSelected] = useState<string | null>(null);
  const id = useId();
  const path = learningPaths.find((p) => p.id === selected);
  const list = path ? coursesFor(path, courses) : [];

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <div>
        <div role="radiogroup" aria-label="What is your main goal?" className="space-y-3.5">
          {learningPaths.map((p) => {
            const on = selected === p.id;
            return (
              <button key={p.id} type="button" role="radio" aria-checked={on} aria-controls={`${id}-result`} onClick={() => setSelected(p.id)}
                className={`chunk flex min-h-16 w-full items-center gap-4 rounded-2xl px-5 py-4 text-left text-base font-bold transition duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 ${on ? "bg-amber text-ink" : "bg-white text-ink"}`}>
                <span className="text-2xl" aria-hidden>{emoji[p.id]}</span>
                <span className="flex-1">{p.label}</span>
                <span aria-hidden className={`grid size-6 place-items-center rounded-full border-2 border-ink text-xs ${on ? "bg-ink text-white" : "bg-white"}`}>{on ? "✓" : ""}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div id={`${id}-result`} aria-live="polite">
        {!path ? (
          <div className="rounded-card border-2 border-dashed border-white/50 p-8 text-white/85">
            <p className="text-lg font-extrabold text-white">Your match shows up here 👇</p>
            <p className="mt-2 text-sm">Pick the line that sounds most like you. No technical knowledge needed.</p>
          </div>
        ) : (
          <div className="chunk rounded-card bg-white p-6 text-ink sm:p-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-violet-deep">Your suggested path</p>
            <p className="mt-2 text-sm text-body">{path.blurb}</p>
            <ol className="mt-5 space-y-4">
              {list.map((c, i) => (
                <li key={c.id} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-ink bg-cyan text-sm font-extrabold">{i + 1}</span>
                  <div>
                    <Link href={`/courses/${c.slug}`} className="font-extrabold leading-snug hover:underline">{c.title}</Link>
                    <p className="text-xs text-body/80">{getCategory(c.category).short} · {c.level}</p>
                    <p className="mt-0.5 text-sm text-body">{path.steps[i]?.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-col gap-3 border-t-2 border-ink/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm"><strong>Next step:</strong> {path.nextStep}</p>
              <Button href={`/courses/${list[0].slug}`} className="shrink-0">Show me <ArrowRight className="size-4" /></Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
