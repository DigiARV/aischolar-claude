import { LegalPage } from "@/components/layout/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "Privacy Policy", description: "Privacy Policy for AI Scholar (draft placeholder, to be finalised before launch).", path: "/privacy" });

export default function Page() {
  return <LegalPage title="Privacy Policy"><p>How AI Scholar collects, uses and protects personal data. Topics to cover: data collected (name, email, usage), purposes, email-provider processors, retention, user rights, cookies and analytics, contact for privacy requests.</p></LegalPage>;
}
