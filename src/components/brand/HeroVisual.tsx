import { ArrowRight } from "@/components/ui/Icons";

/**
 * An illustrative "skills map": three pillars feed one practical outcome.
 * Deliberately labelled as illustrative; it is not a product screenshot.
 */
export function HeroVisual() {
  const tracks = [
    { name: "AI tools", note: "Prompting & workflows", c: "#7c5cff" },
    { name: "Marketing", note: "Campaigns & content", c: "#22d3ee" },
    { name: "Business", note: "Systems & growth", c: "#f5b544" },
  ];
  return (
    <figure className="relative mx-auto w-full max-w-[34rem]" aria-label="Illustration: AI, marketing and business skills combine into practical outcomes">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-violet/30 via-transparent to-cyan/25 blur-3xl" aria-hidden />
      <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="flex gap-1.5" aria-hidden>
            <i className="size-2.5 rounded-full bg-white/20" /><i className="size-2.5 rounded-full bg-white/20" /><i className="size-2.5 rounded-full bg-white/20" />
          </span>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[0.7rem] font-medium tracking-wide text-white/70">Skill map · illustrative</span>
        </div>

        <ul className="space-y-2.5">
          {tracks.map((t, i) => (
            <li
              key={t.name}
              className="animate-rise flex items-center gap-3 rounded-xl border border-white/10 bg-ink/60 px-4 py-3"
              style={{ "--d": `${450 + i * 120}ms` } as React.CSSProperties}
            >
              <span className="grid size-9 place-items-center rounded-lg" style={{ background: `${t.c}22`, color: t.c }} aria-hidden>
                <span className="size-2.5 rounded-full" style={{ background: t.c, boxShadow: `0 0 14px ${t.c}` }} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-white">{t.name}</span>
                <span className="block text-xs text-white/55">{t.note}</span>
              </span>
              <span className="ml-auto hidden h-1.5 w-20 overflow-hidden rounded-full bg-white/10 sm:block" aria-hidden>
                <span className="block h-full rounded-full" style={{ width: `${55 + i * 15}%`, background: t.c }} />
              </span>
            </li>
          ))}
        </ul>

        <svg viewBox="0 0 400 56" className="my-1 h-12 w-full" aria-hidden>
          <path d="M66 0V20Q66 34 100 34H300Q334 34 334 20V0M200 34V56" stroke="url(#hv)" strokeWidth="2" fill="none" strokeDasharray="5 6" className="animate-dash" />
          <defs>
            <linearGradient id="hv" x1="0" x2="1"><stop stopColor="#7c5cff" /><stop offset="1" stopColor="#22d3ee" /></linearGradient>
          </defs>
        </svg>

        <div className="animate-rise rounded-xl bg-gradient-to-br from-violet/25 to-cyan/15 p-4 ring-1 ring-white/15" style={{ "--d": "850ms" } as React.CSSProperties}>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-cyan">Real-world output</p>
          <p className="mt-1 flex items-center gap-2 text-base font-semibold text-white">
            A working campaign, workflow or plan <ArrowRight className="size-4 text-cyan" />
          </p>
          <p className="mt-1 text-xs text-white/60">You finish each course with something you can use.</p>
        </div>
      </div>
      <div className="animate-drift absolute -right-3 -top-5 hidden rounded-2xl border border-white/10 bg-navy-2/90 px-3 py-2 text-xs text-white/80 shadow-xl sm:block" aria-hidden>
        <span className="mr-1.5 inline-block size-2 rounded-full bg-cyan" />Prompt library
      </div>
      <div className="animate-drift absolute -bottom-4 -left-3 hidden rounded-2xl border border-white/10 bg-navy-2/90 px-3 py-2 text-xs text-white/80 shadow-xl [animation-delay:-4s] sm:block" aria-hidden>
        <span className="mr-1.5 inline-block size-2 rounded-full bg-violet" />Hands-on project
      </div>
    </figure>
  );
}
