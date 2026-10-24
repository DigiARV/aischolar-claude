import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Section";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="chunk grid-lines relative overflow-hidden rounded-[2rem] bg-violet px-6 py-14 text-center shadow-[8px_8px_0_0_var(--color-ink)] sm:px-12 sm:py-20">
          <span className="absolute left-6 top-6 text-4xl" aria-hidden>🚀</span>
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">Ready to start building skills <span className="hl [--hl:rgb(255_200_61/0.8)]">that compound?</span></h2>
            <p className="mt-4 text-white/85">Browse the proposed courses, find your path, and join the waitlist for the ones that fit your goals.</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/courses" variant="accent">Explore Courses <ArrowRight className="size-4" /></Button>
              <Button href="/learning-paths" variant="secondary">Find your path</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
