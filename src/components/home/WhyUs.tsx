import { Hands, Refresh, Spark, Target } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";

const pillars = [
  { icon: Hands, title: "Learn by Doing", text: "Every lesson is built around practical assignments and live demonstrations, not slides to memorise.", tag: "Assignments · Demos" },
  { icon: Spark, title: "AI-First Learning", text: "Understand how to apply AI tools to real tasks, and how to check their work.", tag: "Tools · Prompts" },
  { icon: Target, title: "Business-Oriented Skills", text: "Connect what you learn to measurable business and professional outcomes you define.", tag: "Goals · Measurement" },
  { icon: Refresh, title: "Continuous Improvement", text: "Lessons are reviewed and updated as tools, platforms and best practices evolve.", tag: "Reviewed · Updated" },
];

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Why AI Scholar" title={<>Education that ends in <span className="display text-violet-deep">application</span></>} lead="Knowing about AI isn't the goal. Using it well, on your own work, is. That belief shapes how every course is designed." />
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 90} className="h-full">
                  <div className={`h-full rounded-card border border-line bg-white p-6 shadow-card ${i % 2 ? "sm:translate-y-6" : ""}`}>
                    <span className="grid size-11 place-items-center rounded-xl bg-navy text-cyan"><p.icon /></span>
                    <h3 className="mt-5 text-lg font-semibold text-heading">{p.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed">{p.text}</p>
                    <p className="mt-4 text-xs font-medium uppercase tracking-wider text-violet-deep">{p.tag}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
