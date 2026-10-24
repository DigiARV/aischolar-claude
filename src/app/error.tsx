"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="dot-bg pt-40 pb-28 text-center">
      <Container>
        <h1 className="text-3xl font-semibold text-heading">Something went wrong</h1>
        <p className="mx-auto mt-3 max-w-md text-body">An unexpected error occurred. Please try again.</p>
        <div className="mt-8"><Button onClick={reset}>Try again</Button></div>
      </Container>
    </section>
  );
}
