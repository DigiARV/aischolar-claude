import { LegalPage } from "@/components/layout/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "Terms & Conditions", description: "Terms & Conditions for AI Scholar (draft placeholder, to be finalised before launch).", path: "/terms" });

export default function Page() {
  return <LegalPage title="Terms & Conditions"><p>The terms for using the AI Scholar website and courses. Topics to cover: acceptable use, intellectual property in course material, purchases and access, disclaimers (no guaranteed outcomes), limitation of liability, governing law.</p></LegalPage>;
}
