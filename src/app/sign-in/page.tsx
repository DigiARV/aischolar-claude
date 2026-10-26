import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/Button";
import { Container, PageHero } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Sign In",
  description: "Student accounts and the learning dashboard are coming soon to AI Scholar.",
  path: "/sign-in",
});

export default function SignInPage() {
  return (
    <>
      <PageHero eyebrow="Student dashboard" title="Student accounts are coming soon" lead="Sign-in, saved progress and your learning dashboard will arrive with our first course launch. There's nothing to sign in to yet." />
      <section className="py-14 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="chunk-sm rounded-card bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-heading">Want to hear when accounts open?</h2>
            <div className="mt-5"><LeadForm source="sign-in" cta="Notify me" /></div>
          </div>
          <div className="rounded-card border border-dashed border-ink/30 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-heading">In the meantime</h2>
            <p className="mt-2 text-sm">Browse the proposed courses and join the waitlist for the ones you care about.</p>
            <Button href="/courses" className="mt-5">Explore Courses</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
