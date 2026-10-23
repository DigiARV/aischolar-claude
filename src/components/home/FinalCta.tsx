import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Section";

export function FinalCta() {
  return (
    <section className="px-0 pb-20 sm:pb-28">
      <Container>
        <div className="on-dark relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="grid-bg absolute inset-0" aria-hidden />
          <div className="animate-aurora absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-violet/30 blur-[110px]" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">Start building skills <span className="display grad-text">that compound</span></h2>
            <p className="mt-4 text-white/70">Browse the proposed courses, find your path, and join the waitlist for the ones that fit your goals.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/courses">Explore Courses <ArrowRight className="size-4" /></Button>
              <Button href="/learning-paths" variant="secondary">Find your path</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
