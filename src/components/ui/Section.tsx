import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Pill({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-block rounded-full px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] ${dark ? "bg-white/15 text-white" : "bg-lav text-violet-deep"}`}>
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
      <h2 className={`text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-heading"}`}>{title}</h2>
      {lead && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-white/80" : "text-body"}`}>{lead}</p>}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: string }) {
  return (
    <section className="dot-bg relative overflow-hidden border-b-2 border-ink bg-lav/60 pt-28 pb-14 sm:pt-36 sm:pb-20">
      <div className="absolute -right-10 top-24 hidden size-56 rotate-12 rounded-[2rem] border-2 border-ink bg-butter shadow-[6px_6px_0_0_var(--color-ink)] lg:block" aria-hidden />
      <div className="absolute right-40 top-52 hidden size-24 -rotate-6 rounded-full border-2 border-ink bg-cyan lg:block" aria-hidden />
      <Container className="relative">
        <Pill>{eyebrow}</Pill>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-heading sm:text-5xl lg:text-6xl">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-base leading-relaxed text-body sm:text-lg">{lead}</p>}
      </Container>
    </section>
  );
}
