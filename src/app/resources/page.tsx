import { LeadForm } from "@/components/forms/LeadForm";
import { Badge } from "@/components/ui/Badge";
import { Container, PageHero } from "@/components/ui/Section";
import { resourceKinds, resources } from "@/data/resources";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Resources",
  description: "Free AI tutorials, marketing guides, business playbooks and templates from AI Scholar. The library is being built; join the list for launches.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Free guides, templates and tutorials" lead="The library is being built. Here's what's planned. Join the list and we'll tell you as each piece is published." />
      <section className="py-14 sm:py-20">
        <Container className="space-y-12">
          {resourceKinds.map((k) => {
            const items = resources.filter((r) => r.kind === k.kind);
            return (
              <div key={k.kind}>
                <h2 className="text-xl font-semibold text-heading">{k.kind}</h2>
                <p className="mt-1 text-sm">{k.blurb}</p>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((r) => (
                    <li key={r.slug} className="chunk-sm rounded-card bg-white p-5">
                      <Badge tone={r.status === "published" ? "cyan" : "amber"}>{r.status === "published" ? "Available" : "Planned"}</Badge>
                      <h3 className="mt-3 font-semibold text-heading">{r.status === "published" && r.href ? <a href={r.href} className="hover:underline">{r.title}</a> : r.title}</h3>
                      <p className="mt-1 text-sm">{r.summary}</p>
                    </li>
                  ))}
                  {items.length === 0 && <li className="rounded-card border border-dashed border-ink/30 p-5 text-sm">Nothing planned yet in this category.</li>}
                </ul>
              </div>
            );
          })}
          <div className="chunk-sm rounded-card bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-heading">Be first to know</h2>
            <p className="mb-5 mt-1 text-sm">Get new resources by email as they&apos;re published.</p>
            <div className="max-w-xl"><LeadForm source="resources" /></div>
          </div>
        </Container>
      </section>
    </>
  );
}
