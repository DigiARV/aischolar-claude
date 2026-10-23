import Image from "next/image";

/** Shows a real portrait when one is supplied; otherwise an honest monogram placeholder. */
export function InstructorPortrait({ name, portrait }: { name: string; portrait?: string }) {
  if (portrait) {
    return (
      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">
        <Image src={portrait} alt={`Portrait of ${name}`} fill sizes="(min-width:1024px) 24rem, 90vw" className="object-cover" />
      </div>
    );
  }
  const initials = name.split(" ").map((p) => p[0]).join("");
  return (
    <div role="img" aria-label={`Portrait placeholder for ${name}`} className="relative mx-auto grid aspect-[4/5] w-full max-w-sm place-items-center overflow-hidden rounded-3xl bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#7c5cff66,transparent_55%),radial-gradient(circle_at_80%_90%,#22d3ee44,transparent_50%)]" />
      <span className="display grad-text relative text-8xl">{initials}</span>
      <span className="absolute bottom-4 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">Portrait to be added</span>
    </div>
  );
}
