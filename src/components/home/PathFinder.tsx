"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { getCategory } from "@/data/categories";
import { courses, type Level } from "@/data/courses";
import { coursesFor, learningPaths } from "@/data/paths";

const experience: { id: "new" | "some" | "pro"; label: string; hint: string }[] = [
  { id: "new", label: "Brand new", hint: "I'm just getting started" },
  { id: "some", label: "Some experience", hint: "I've tried a few things" },
  { id: "pro", label: "Fairly experienced", hint: "I want to go deeper" },
];
const rank: Record<Level, number> = { Beginner: 0, Intermediate: 1, Advanced: 2 };

/** Two-step wizard: goal, then experience. Orders the path's courses to suit the learner. */
export function PathFinder() {
  const [goal, setGoal] = useState<string | null>(null);
  const [exp, setExp] = useState<(typeof experience)[number]["id"] | null>(null);
  const id = useId();
  const path = learningPaths.find((p) => p.id === goal);
  const step = !goal ? 1 : !exp ? 2 : 3;

  let list = path ? coursesFor(path, courses) : [];
  if (exp === "new") list = [...list].sort((a, b) => rank[a.level] - rank[b.level]);
  if (exp === "pro") list = [...list].sort((a, b) => rank[b.level] - rank[a.level]);

  const option = "group flex min-h-16 w-full items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4 text-left transition hover:border-violet hover:shadow-md";
  return (
    <div className="chunk mx-auto max-w-3xl rounded-[2rem] bg-white p-6 sm:p-10" aria-live="polite">
      <div className="mb-6 flex items-center justify-between">
        <ol className="flex gap-2" aria-label={`Step ${step} of 3`}>
          {[1, 2, 3].map((n) => (<li key={n} className={`h-1.5 w-10 rounded-full transition-colors ${n <= step ? "bg-violet" : "bg-paper-2"}`} />))}
        </ol>
        {step > 1 && <button type="button" onClick={() => (step === 3 ? setExp(null) : setGoal(null))} className="text-sm font-semibold text-violet hover:underline">← Back</button>}
      </div>

      {step === 1 && (
        <div>
          <h3 className="font-serif text-3xl text-ink sm:text-4xl">What do you want to achieve?</h3>
          <div role="group" aria-labelledby={id} className="mt-6 space-y-3">
            <span id={id} className="sr-only">Choose your main goal</span>
            {learningPaths.map((p) => (
              <button key={p.id} type="button" onClick={() => setGoal(p.id)} className={option}>
                <span className="flex-1"><span className="block font-semibold text-ink">{p.label}</span><span className="mt-0.5 block text-sm text-body">{p.blurb}</span></span>
                <ArrowRight className="size-5 text-violet transition-transform group-hover:translate-x-1" />
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="font-serif text-3xl text-ink sm:text-4xl">How familiar are you with this?</h3>
          <p className="mt-2 text-body">No wrong answers. This only changes the order we suggest.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {experience.map((e) => (
              <button key={e.id} type="button" onClick={() => setExp(e.id)} className={`${option} flex-col items-start gap-1`}>
                <span className="font-semibold text-ink">{e.label}</span><span className="text-sm text-body">{e.hint}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && path && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet">Your suggested path</p>
          <h3 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">{path.label.replace(/^I want to /, "To ")}, start with:</h3>
          <ol className="mt-6 space-y-3">
            {list.map((c, i) => (
              <li key={c.id} className={`flex gap-4 rounded-2xl p-4 ${i === 0 ? "bg-lav" : "bg-paper"}`}>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-sm font-semibold text-white">{i + 1}</span>
                <div>
                  <Link href={`/courses/${c.slug}`} className="font-semibold text-ink hover:underline">{c.title}</Link>
                  <p className="text-xs text-body/80">{getCategory(c.category).short} · {c.level}{i === 0 && " · Best first step"}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-body"><strong className="text-ink">Next step:</strong> {path.nextStep}</p>
            <Button href={`/courses/${list[0].slug}`} className="shrink-0">View first course <ArrowRight className="size-4" /></Button>
          </div>
        </div>
      )}
    </div>
  );
}
