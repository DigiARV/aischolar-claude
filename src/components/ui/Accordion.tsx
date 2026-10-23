"use client";

import { useId, useState } from "react";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return (
    <div className="divide-y divide-line overflow-hidden rounded-card border border-line bg-white">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-p${i}`}
                id={`${id}-h${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-heading hover:bg-paper sm:px-6"
              >
                {it.q}
                <span
                  aria-hidden
                  className={`grid size-7 shrink-0 place-items-center rounded-full bg-paper-2 text-lg leading-none transition-transform duration-300 ${isOpen ? "rotate-45 bg-violet text-white" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>
            <div id={`${id}-p${i}`} role="region" aria-labelledby={`${id}-h${i}`} className="acc" data-open={isOpen}>
              <div>
                <p className="px-5 pb-5 text-[0.95rem] leading-relaxed sm:px-6">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
