"use client";

import { useId, useState } from "react";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <h3>
              <button type="button" aria-expanded={isOpen} aria-controls={`${id}-p${i}`} id={`${id}-h${i}`} onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left text-lg font-medium text-heading">
                {it.q}
                <span aria-hidden className={`grid size-9 shrink-0 place-items-center rounded-full border border-ink/20 text-xl leading-none transition duration-300 ${isOpen ? "rotate-45 border-violet bg-violet text-white" : "bg-white"}`}>+</span>
              </button>
            </h3>
            <div id={`${id}-p${i}`} role="region" aria-labelledby={`${id}-h${i}`} className="acc" data-open={isOpen}>
              <div><p className="max-w-2xl pb-6 leading-relaxed">{it.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
