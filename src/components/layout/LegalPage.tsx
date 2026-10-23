import { Container, PageHero } from "@/components/ui/Section";

export function LegalPage({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
      <section className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <p className="rounded-card border border-dashed border-amber/70 bg-amber/10 p-4 text-sm text-[#6b4700]">
            <strong>Placeholder, complete before launch.</strong> This page has not been reviewed by a legal professional and must be replaced with AI Scholar&apos;s final {title.toLowerCase()} before the site goes live or any payments or personal data are collected.
          </p>
          <div className="mt-8 space-y-4 leading-relaxed">{children}</div>
        </Container>
      </section>
    </>
  );
}
