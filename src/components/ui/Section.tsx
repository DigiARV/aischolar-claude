import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** Small caps label with a leading rule. */
export function Pill({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-violet-soft" : "text-violet"}`}>
      <span className="h-px w-8 bg-current" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow, title, lead, align = "left", dark = false,
}: { eyebrow?: string; title: ReactNode; lead?: string; align?: "left" | "center"; dark?: boolean }) {
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <div className="mb-4"><Pill dark={dark}>{eyebrow}</Pill></div>}
      <h2 className={`h-display text-4xl sm:text-5xl lg:text-[3.4rem] ${dark ? "on-dark" : ""}`}>{title}</h2>
      {lead && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-white/75" : "text-body"}`}>{lead}</p>}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-lav/70 to-paper pt-28 pb-14 sm:pt-36 sm:pb-20">
      <div className="animate-aurora absolute -right-24 -top-24 size-96 rounded-full bg-coral/15 blur-[90px]" aria-hidden />
      <Container className="relative">
        <Pill>{eyebrow}</Pill>
        <h1 className="h-display mt-5 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">{lead}</p>}
      </Container>
    </section>
  );
}
