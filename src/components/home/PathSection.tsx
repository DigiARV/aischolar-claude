import { Container, SectionHeading } from "@/components/ui/Section";
import { PathFinder } from "./PathFinder";

export function PathSection() {
  return (
    <section className="grid-lines border-y-2 border-ink bg-violet py-20 sm:py-28">
      <Container>
        <div className="mb-10"><SectionHeading dark eyebrow="10-second quiz" title="Which path fits you?" lead="Be honest. Pick the goal that sounds most like you and we'll map the courses worth taking, in order." /></div>
        <PathFinder />
      </Container>
    </section>
  );
}
