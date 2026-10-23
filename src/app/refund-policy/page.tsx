import { LegalPage } from "@/components/layout/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "Refund Policy", description: "Refund Policy for AI Scholar (draft placeholder, to be finalised before launch).", path: "/refund-policy" });

export default function Page() {
  return <LegalPage title="Refund Policy"><p>AI Scholar&apos;s refund and cancellation terms. No refund policy has been decided yet. State the final policy here before any course is sold.</p></LegalPage>;
}
