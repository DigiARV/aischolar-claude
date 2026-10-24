import { LeadForm } from "@/components/forms/LeadForm";
import { Container, PageHero } from "@/components/ui/Section";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with AI Scholar with questions about courses, learning paths or collaboration.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to us" lead="Questions about courses, a topic you'd like us to cover, or a collaboration? Send a message." />
      <section className="py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="chunk rounded-card bg-white p-6 sm:p-8">
            <LeadForm source="contact" withMessage cta="Send message" consentText="I agree to AI Scholar contacting me about this message." successTitle="Message received" />
          </div>
          <div className="space-y-4 text-sm">
            <h2 className="text-lg font-semibold text-heading">Other ways to reach us</h2>
            {site.contactEmail ? <p>Email: <a className="font-medium text-violet-deep hover:underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p> : <p>Direct contact details will be published here once confirmed.</p>}
            {site.socials.map((s) => (<p key={s.label}><a className="font-medium text-violet-deep hover:underline" href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></p>))}
          </div>
        </Container>
      </section>
    </>
  );
}
