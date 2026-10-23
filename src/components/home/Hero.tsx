import { HeroVisual } from "@/components/brand/HeroVisual";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Section";

const trust = ["Practical, project-based learning", "Skills for real-world application", "Learn at your own pace"];

export function Hero() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="animate-aurora absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-violet/30 blur-[120px]" aria-hidden />
      <div className="animate-aurora absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-cyan/20 blur-[120px] [animation-delay:-8s]" aria-hidden />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80">
            <span className="size-1.5 rounded-full bg-cyan" aria-hidden /> Courses in development · Join the waitlist
          </p>
          <h1 className="animate-rise mt-6 text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-white [--d:100ms] sm:text-6xl lg:text-[4.25rem]">
            Learn AI. Master Marketing.{" "}
            <span className="display grad-text block pb-1 text-[1.1em]">Build what&apos;s next.</span>
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-white/70 [--d:220ms] sm:text-lg">
            Build practical skills in AI, digital marketing and business growth through hands-on courses, expert-led lessons and workflows you can apply in the real world.
          </p>
          <div className="animate-rise mt-8 flex flex-col gap-3 [--d:340ms] sm:flex-row">
            <Button href="/courses">Explore Courses <ArrowRight className="size-4" /></Button>
            <Button href="/learning-paths" variant="secondary">Discover Your Learning Path</Button>
          </div>
          <ul className="animate-rise mt-10 grid gap-3 text-sm text-white/70 [--d:460ms] sm:grid-cols-3 sm:gap-5">
            {trust.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-cyan" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}
