const topics = ["AI tools", "Prompting", "Meta Ads", "Content creation", "Automation", "E-commerce", "Personal branding", "Business growth"];
const promises = ["Project-based", "Beginner friendly", "Learn at your own pace", "English first · Hinglish planned", "Built to stay up to date"];

function Row({ items, className, rev = false }: { items: string[]; className: string; rev?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className={`overflow-hidden border-y-2 border-ink py-3 ${className}`} aria-hidden>
      <div className={`marquee ${rev ? "marquee-rev" : ""}`}>
        {loop.concat(loop).map((t, i) => (
          <span key={i} className="flex shrink-0 items-center gap-6 px-3 text-lg font-extrabold sm:text-2xl">{t}<span className="text-cyan sm:text-3xl">✦</span></span>
        ))}
      </div>
    </div>
  );
}

/** Decorative tilted ribbons; real information lives elsewhere, so this is hidden from assistive tech. */
export function Marquee() {
  return (
    <div className="relative overflow-hidden py-10">
      <div className="-rotate-[1.5deg] scale-105"><Row items={topics} className="bg-ink text-white" /></div>
      <div className="-mt-1 rotate-[1deg] scale-105"><Row items={promises} rev className="bg-cyan text-ink" /></div>
    </div>
  );
}
