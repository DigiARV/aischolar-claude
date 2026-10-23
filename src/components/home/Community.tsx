import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { site } from "@/data/site";

export function Community() {
  return (
    <section id="join" className="on-dark relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="animate-aurora absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-cyan/15 blur-[110px]" aria-hidden />
      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">Community & updates</p>
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">Keep learning. Stay ahead. <span className="display grad-text">Put AI to work.</span></h2>
          <p className="mt-5 max-w-lg text-white/70">Get early access to course launches, free guides and prompt templates. Occasional, useful emails. No spam.</p>
          {site.whatsappCommunityUrl && (
            <div className="mt-6"><Button href={site.whatsappCommunityUrl} variant="secondary">Join the WhatsApp community</Button></div>
          )}
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
          <LeadForm source="home-community" tone="dark" cta="Join the list" />
        </div>
      </Container>
    </section>
  );
}
