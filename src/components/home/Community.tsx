import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/Button";
import { Container, Pill } from "@/components/ui/Section";
import { site } from "@/data/site";

const perks = ["Early notice when each course opens", "Free guides, prompt templates and tutorials as they're published", "Occasional, useful emails. No spam"];

export function Community() {
  return (
    <section id="join" className="border-t border-line bg-gradient-to-b from-paper to-lav/60 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <Pill>Community & updates</Pill>
          <h2 className="h-display mt-4 text-5xl sm:text-6xl">Keep learning. Stay ahead. <em>Put AI to work.</em></h2>
          <ul className="mt-8 space-y-3">
            {perks.map((p) => (<li key={p} className="flex gap-3 text-ink"><span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-mint text-[0.7rem] text-white" aria-hidden>✓</span>{p}</li>))}
          </ul>
          {site.whatsappCommunityUrl && <div className="mt-8"><Button href={site.whatsappCommunityUrl} variant="accent">Join the WhatsApp community</Button></div>}
        </div>
        <div className="chunk rounded-[2rem] bg-white p-6 sm:p-9">
          <h3 className="mb-5 font-serif text-3xl text-ink">Join the early-access list</h3>
          <LeadForm source="home-community" cta="Join the list" />
        </div>
      </Container>
    </section>
  );
}
