import { HeroVisual } from "@/components/brand/HeroVisual";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Section";

const trust = ["Practical, project-based learning", "Skills for real-world application", "Learn at your own pace"];

export function Hero() {
  return (
    <section className="dot-bg relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="absolute -left-24 top-32 size-72 rounded-full bg-lav blur-3xl" aria-hidden />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-3.5 py-1.5 text-xs font-bold text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
            <span className="size-2 rounded-full bg-violet" aria-hidden /> First courses in development · Join the waitlist
          </p>
          <h1 className="animate-rise mt-6 text-[2.35rem] font-extrabold leading-[1.02] tracking-tight text-heading [--d:100ms] sm:text-6xl lg:text-[4.4rem]">
            Learn AI. Master Marketing.<br /><span className="hl">Build what&apos;s next.</span>
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-body [--d:220ms] sm:text-lg">
            Build practical skills in AI, digital marketing and business growth through hands-on courses, expert-led lessons and workflows you can apply in the real world.
          </p>
          <div className="animate-rise mt-8 flex flex-col gap-4 [--d:340ms] sm:flex-row">
            <Button href="/courses">Explore Courses <ArrowRight className="size-4" /></Button>
            <Button href="/learning-paths" variant="secondary">Discover Your Learning Path</Button>
          </div>
          <ul className="animate-rise mt-10 grid gap-3 text-sm font-semibold text-ink/80 [--d:460ms] sm:grid-cols-3 sm:gap-5">
            {trust.map((t) => (
              <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 size-5 shrink-0 text-violet" />{t}</li>
            ))}
          </ul>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}
