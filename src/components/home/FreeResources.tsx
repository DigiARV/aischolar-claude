import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";
import { resourceKinds, resources } from "@/data/resources";

const tints = ["bg-lav", "bg-sky", "bg-butter", "bg-peach", "bg-lav", "bg-sky"];
const icons = ["🤖", "📣", "📈", "🧰", "🎬", "🔍"];

export function FreeResources() {
  return (
    <section className="border-y-2 border-ink bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Free resources" title={<>Learn something <span className="hl">useful today</span></>} lead="A growing library of tutorials, guides and templates. These are the first topics planned; join the list to hear as each one lands." />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resourceKinds.map((k, i) => {
            const planned = resources.find((r) => r.kind === k.kind);
            return (
              <li key={k.kind}>
                <Reveal delay={(i % 3) * 80} className="h-full">
                  <div className={`chunk h-full rounded-card p-6 ${tints[i]}`}>
                    <div className="flex items-center justify-between gap-2"><span className="text-3xl" aria-hidden>{icons[i]}</span><Badge tone="dark">Coming soon</Badge></div>
                    <h3 className="mt-3 text-lg font-extrabold text-ink">{k.kind}</h3>
                    <p className="mt-1 text-sm text-ink/75">{k.blurb}</p>
                    {planned && <p className="mt-4 border-t-2 border-ink/10 pt-3 text-sm font-semibold text-ink">Planned: {planned.title}</p>}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <Link href="/resources" className="mt-8 inline-flex items-center gap-2 font-extrabold text-violet-deep transition-all hover:gap-3">Browse the resource hub <ArrowRight className="size-4" /></Link>
      </Container>
    </section>
  );
}
