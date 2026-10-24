import { PathFinder } from "@/components/home/PathFinder";
import { Container, PageHero } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Learning Paths",
  description: "Not sure where to start? Choose your goal and see a suggested sequence of AI, marketing and business courses from AI Scholar.",
  path: "/learning-paths",
});

export default function LearningPathsPage() {
  return (
    <>
      <PageHero eyebrow="Learning paths" title="Find the right place to start" lead="Pick the goal closest to yours and see a suggested order of courses. No technical background needed." />
      <section className="grid-lines border-b-2 border-ink bg-violet py-14 sm:py-20"><Container><PathFinder /></Container></section>
    </>
  );
}
