/** Original hero composition: a tilted "skill meter" card, floating topic chips and a sticky note. Illustrative only. */
export function HeroVisual() {
  const bars = [
    { name: "AI tools", w: 72, c: "bg-violet" },
    { name: "Marketing", w: 58, c: "bg-cyan" },
    { name: "Business", w: 44, c: "bg-amber" },
  ];
  const chip = "absolute rounded-full border-2 border-ink bg-white px-3.5 py-1.5 text-xs font-bold text-ink shadow-[3px_3px_0_0_var(--color-ink)]";
  return (
    <figure className="relative mx-auto h-[26rem] w-full max-w-[34rem] sm:h-[30rem]" aria-label="Illustration: a skill meter that grows across AI, marketing and business">
      <div className="absolute inset-x-4 top-1/2 h-64 -translate-y-1/2 rounded-[3rem] bg-gradient-to-br from-lav via-sky to-butter" aria-hidden />
      <div className="animate-wiggle absolute left-1/2 top-1/2 w-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-3xl border-2 border-ink bg-white p-5 shadow-[8px_8px_0_0_var(--color-ink)] [--r:-3deg] sm:w-[21rem]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-extrabold text-ink">Your skill meter</p>
          <span className="rounded-full bg-butter px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[#6b4700]">Illustrative</span>
        </div>
        <ul className="mt-5 space-y-4">
          {bars.map((b, i) => (
            <li key={b.name}>
              <div className="mb-1.5 flex justify-between text-xs font-bold text-ink"><span>{b.name}</span><span className="text-ink/50">level up</span></div>
              <div className="h-3.5 overflow-hidden rounded-full border-2 border-ink bg-paper-2">
                <div className={`animate-fill h-full rounded-full ${b.c}`} style={{ width: `${b.w}%`, "--d": `${400 + i * 200}ms` } as React.CSSProperties} />
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-5 rounded-xl bg-ink px-3 py-2.5 text-xs font-semibold text-white">Next: apply it to a real project</p>
      </div>
      <span className={`${chip} left-2 top-10 -rotate-6`}>🤖 AI tools</span>
      <span className={`${chip} right-4 top-6 rotate-3`}>📣 Meta Ads</span>
      <span className={`${chip} right-0 top-1/2 hidden -rotate-3 sm:block`}>⚙️ Automation</span>
      <span className={`${chip} bottom-16 left-0 rotate-3`}>🛒 E-commerce</span>
      <span className={`${chip} bottom-8 right-14 -rotate-2`}>✍️ Content</span>
      <div className="absolute bottom-0 left-8 w-44 rotate-[-5deg] border-2 border-ink bg-butter p-3 text-[0.8rem] font-bold leading-snug text-ink shadow-[4px_4px_0_0_var(--color-ink)] sm:left-14">
        Tip: prompt first, polish second. ✨
      </div>
    </figure>
  );
}
