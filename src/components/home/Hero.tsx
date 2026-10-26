import { HeroVisual } from "@/components/brand/HeroVisual";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Section";

const trust = ["Practical, project-based learning", "Skills for real-world application", "Learn at your own pace"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="animate-aurora absolute -left-32 top-10 size-[28rem] rounded-full bg-lav blur-[100px]" aria-hidden />
      <div className="animate-aurora absolute -right-24 top-40 size-[22rem] rounded-full bg-peach blur-[100px] [animation-delay:-8s]" aria-hidden />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <div>
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-ink/80">
            <span className="relative flex size-2"><span className="animate-ring absolute inset-0 rounded-full bg-coral" /><span className="relative size-2 rounded-full bg-coral" /></span>
            First courses in development · Join the waitlist
          </p>
          <h1 className="h-display animate-rise mt-6 text-[3.1rem] [--d:100ms] sm:text-7xl lg:text-[5.4rem]">
            Learn AI.<br />Master Marketing.<br /><em>Build what&apos;s next.</em>
          </h1>
          <p className="animate-rise mt-7 max-w-xl text-base leading-relaxed text-body [--d:220ms] sm:text-lg">
            Build practical skills in AI, digital marketing and business growth through hands-on courses, expert-led lessons and workflows you can apply in the real world.
          </p>
          <div className="animate-rise mt-9 flex flex-col gap-3 [--d:340ms] sm:flex-row">
            <Button href="/courses">Explore Courses <ArrowRight className="size-4" /></Button>
            <Button href="/learning-paths" variant="secondary">Discover Your Learning Path</Button>
          </div>
          <ul className="animate-rise mt-10 grid gap-3 text-sm font-medium text-ink/75 [--d:460ms] sm:grid-cols-3 sm:gap-5">
            {trust.map((t) => (<li key={t} className="flex items-start gap-2"><Check className="mt-0.5 size-5 shrink-0 text-mint" />{t}</li>))}
          </ul>
        </div>
        <div className="animate-rise [--d:300ms]"><HeroVisual /></div>
      </Container>
    </section>
  );
}
