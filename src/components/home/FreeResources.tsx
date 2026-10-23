import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";
import { resourceKinds, resources } from "@/data/resources";

export function FreeResources() {
  return (
    <section className="bg-paper-2/60 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Free resources" title="Learn something useful today" lead="A growing library of tutorials, guides and templates. These are the first topics planned; join the list to be told when each one lands." />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resourceKinds.map((k, i) => {
            const planned = resources.filter((r) => r.kind === k.kind);
            return (
              <li key={k.kind}>
                <Reveal delay={(i % 3) * 80} className="h-full">
                  <div className="h-full rounded-card border border-line bg-white p-6">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-semibold text-heading">{k.kind}</h3>
                      <Badge tone="amber">Coming soon</Badge>
                    </div>
                    <p className="mt-2 text-sm">{k.blurb}</p>
                    {planned[0] && <p className="mt-4 border-t border-line pt-3 text-sm text-heading">Planned: {planned[0].title}</p>}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <Link href="/resources" className="mt-8 inline-flex items-center gap-2 font-semibold text-violet-deep hover:gap-3 transition-all">Browse the resource hub <ArrowRight className="size-4" /></Link>
      </Container>
    </section>
  );
}
