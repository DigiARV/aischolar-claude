import Image from "next/image";

/** Shows a real portrait when one is supplied; otherwise an honest monogram placeholder. */
export function InstructorPortrait({ name, portrait }: { name: string; portrait?: string }) {
  if (portrait) {
    return (
      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem]">
        <Image src={portrait} alt={`Portrait of ${name}`} fill sizes="(min-width:1024px) 24rem, 90vw" className="object-cover" />
      </div>
    );
  }
  const initials = name.split(" ").map((p) => p[0]).join("");
  return (
    <div role="img" aria-label={`Portrait placeholder for ${name}`} className="relative mx-auto grid aspect-[4/5] w-full max-w-sm place-items-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-lav via-peach to-butter">
      <span className="font-serif text-9xl italic text-violet/80">{initials}</span>
      <span className="absolute bottom-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-ink/70 backdrop-blur">Portrait to be added</span>
    </div>
  );
}
