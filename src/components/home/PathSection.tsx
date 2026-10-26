import { Container, SectionHeading } from "@/components/ui/Section";
import { PathFinder } from "./PathFinder";

export function PathSection() {
  return (
    <section className="border-y border-line bg-gradient-to-b from-lav/60 to-paper py-20 sm:py-28">
      <Container>
        <div className="mb-10"><SectionHeading align="center" eyebrow="Find your starting point" title={<>Not sure where to <em>begin?</em></>} lead="Answer two quick questions and get a suggested course order. No account needed." /></div>
        <PathFinder />
      </Container>
    </section>
  );
}
