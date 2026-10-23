import { Container, SectionHeading } from "@/components/ui/Section";
import { PathFinder } from "./PathFinder";

export function PathSection() {
  return (
    <section className="on-dark relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="animate-aurora absolute right-0 top-0 h-80 w-80 rounded-full bg-violet/20 blur-[110px]" aria-hidden />
      <Container className="relative">
        <SectionHeading dark eyebrow="Not sure where to start?" title="Choose your starting point" lead="Tell us your goal in plain words. We'll map the courses worth taking, in order." />
        <div className="mt-10"><PathFinder dark /></div>
      </Container>
    </section>
  );
}
