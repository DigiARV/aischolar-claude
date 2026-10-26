import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";
import { resourceKinds, resources } from "@/data/resources";

export function FreeResources() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Free resources" title={<>Something useful, <em>on the house</em></>} lead="Tutorials, guides and templates are being prepared. Here's what's planned." />
          <Link href="/resources" className="inline-flex items-center gap-2 font-semibold text-violet transition-all hover:gap-3">Resource hub <ArrowRight className="size-4" /></Link>
        </div>
        <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {resourceKinds.map((k, i) => {
            const planned = resources.find((r) => r.kind === k.kind);
            return (
              <li key={k.kind}>
                <Reveal delay={(i % 3) * 80}>
                  <div className="border-t border-ink/15 py-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral-deep">Coming soon</p>
                    <h3 className="mt-2 font-serif text-3xl text-ink">{k.kind}</h3>
                    <p className="mt-2 text-sm">{k.blurb}</p>
                    {planned && <p className="mt-3 text-sm font-medium text-ink">Planned: {planned.title}</p>}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
