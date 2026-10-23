import { Accordion } from "@/components/ui/Accordion";
import { Container, SectionHeading } from "@/components/ui/Section";
import { faqs } from "@/data/faqs";

export function FaqSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
        <SectionHeading eyebrow="FAQ" title="Questions, answered honestly" lead="Some policies are still being decided. Where that's true, we say so." />
        <Accordion items={faqs} />
      </Container>
    </section>
  );
}
