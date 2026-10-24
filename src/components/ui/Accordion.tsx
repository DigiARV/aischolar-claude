"use client";

import { useId, useState } from "react";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className={`chunk-sm overflow-hidden rounded-2xl transition-colors ${isOpen ? "bg-butter" : "bg-white"}`}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-p${i}`}
                id={`${id}-h${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-heading"
              >
                {it.q}
                <span aria-hidden className={`grid size-8 shrink-0 place-items-center rounded-full border-2 border-ink text-lg leading-none transition-transform duration-300 ${isOpen ? "rotate-45 bg-ink text-white" : "bg-white"}`}>+</span>
              </button>
            </h3>
            <div id={`${id}-p${i}`} role="region" aria-labelledby={`${id}-h${i}`} className="acc" data-open={isOpen}>
              <div><p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-ink/80">{it.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
