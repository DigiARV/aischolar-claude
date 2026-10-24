"use client";

import { useState } from "react";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Section";
import { courses } from "@/data/courses";

/** "Build your own bundle", honest edition: pick courses you want and join their waitlists in one go. No checkout. */
export function WishlistBuilder() {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (slug: string) => setPicked((p) => (p.includes(slug) ? p.filter((s) => s !== slug) : [...p, slug]));
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="chunk grid gap-8 rounded-[2rem] bg-ink p-6 text-white shadow-[6px_6px_0_0_var(--color-violet)] sm:p-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-block rounded-full bg-amber px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-ink">🧩 Build your wishlist</span>
            <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">Pick the courses you want. Skip the rest.</h2>
            <p className="mt-2 text-white/75">Tell us which courses you&apos;d take and we&apos;ll tell you when they open. It helps us decide what to build first.</p>
            <fieldset className="mt-6">
              <legend className="sr-only">Courses you are interested in</legend>
              <div className="flex flex-wrap gap-2.5">
                {courses.map((c) => {
                  const on = picked.includes(c.slug);
                  return (
                    <label key={c.id} className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-full border-2 px-4 text-sm font-bold transition has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-cyan ${on ? "border-cyan bg-cyan text-ink" : "border-white/30 text-white hover:border-white"}`}>
                      <input type="checkbox" className="sr-only" checked={on} onChange={() => toggle(c.slug)} />
                      <span aria-hidden>{on ? "✓" : "+"}</span>{c.title}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </div>
          <div className="rounded-2xl bg-white p-5 text-ink" aria-live="polite">
            {picked.length === 0 ? (
              <p className="py-10 text-center text-sm text-body">Select at least one course to join its waitlist.</p>
            ) : (
              <>
                <p className="mb-4 text-sm font-extrabold">{picked.length} {picked.length === 1 ? "course" : "courses"} selected</p>
                <LeadForm key={picked.join("|")} source={`wishlist:${picked.join(",")}`} withName={false} cta="Join the waitlists" consentText="I agree to receive emails about the courses I selected. I can unsubscribe at any time." />
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
