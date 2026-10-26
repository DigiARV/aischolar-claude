import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Section";

export function FinalCta() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="on-dark relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-center sm:px-12 sm:py-24">
          <div className="animate-aurora absolute -left-20 -top-20 size-96 rounded-full bg-violet/50 blur-[100px]" aria-hidden />
          <div className="animate-aurora absolute -bottom-24 -right-16 size-80 rounded-full bg-coral/40 blur-[100px] [animation-delay:-8s]" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="h-display on-dark text-5xl sm:text-6xl">Your next skill is <em>one course away</em></h2>
            <p className="mt-5 text-white/75">Browse the proposed courses, find your path, and join the waitlist for the ones that fit your goals.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/courses" variant="dark">Explore Courses <ArrowRight className="size-4" /></Button>
              <Button href="/learning-paths" variant="secondary" className="!border-white/30 !bg-transparent !text-white hover:!border-white">Find your path</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
