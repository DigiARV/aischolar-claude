import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <section className="dot-bg pt-40 pb-28 text-center">
      <Container>
        <p className="text-8xl font-semibold text-violet">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-heading">We couldn&apos;t find that page</h1>
        <p className="mx-auto mt-3 max-w-md text-body">The link may be old or mistyped. Try one of these instead.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button href="/">Go home</Button><Button href="/courses" variant="secondary">Explore Courses</Button></div>
      </Container>
    </section>
  );
}
