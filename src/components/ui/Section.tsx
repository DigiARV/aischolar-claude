import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-cyan" : "text-violet-deep"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem] ${dark ? "text-white" : "text-heading"}`}>
        {title}
      </h2>
      {lead && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-white/70" : "text-body"}`}>{lead}</p>}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: string }) {
  return (
    <section className="on-dark relative overflow-hidden bg-ink pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="animate-aurora absolute -top-40 right-0 h-96 w-96 rounded-full bg-violet/25 blur-[110px]" aria-hidden />
      <Container className="relative">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{lead}</p>}
      </Container>
    </section>
  );
}
