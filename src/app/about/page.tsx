import { FounderSection } from "@/components/home/FounderSection";
import { WhyUs } from "@/components/home/WhyUs";
import { FinalCta } from "@/components/home/FinalCta";
import { Container, PageHero } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: "AI Scholar is an education brand for practical AI, digital marketing and business skills, built to help people turn knowledge into real-world skills.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About AI Scholar" title="Practical education for people who want to put AI to work" lead="Practical AI, marketing and business education that helps people turn knowledge into real-world skills." />
      <section className="py-14 sm:py-20">
        <Container className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-heading">Our mission</h2>
            <p className="mt-3 leading-relaxed">AI is changing how people work, market and build businesses. Most learning content stops at what the tools are. We focus on how to use them on real work, with the judgement to know when they help and when they don&apos;t.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-heading">Where we are today</h2>
            <p className="mt-3 leading-relaxed">AI Scholar is at an early stage. Courses are being designed and are not yet open for enrolment. We&apos;ll share what exists and what&apos;s planned, clearly separated, as we build.</p>
          </div>
        </Container>
      </section>
      <WhyUs />
      <FounderSection />
      <FinalCta />
    </>
  );
}
