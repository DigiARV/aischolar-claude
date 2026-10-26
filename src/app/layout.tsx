import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Practical AI, Marketing & Business Education`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: { siteName: site.name, locale: site.locale, type: "website", title: site.name, description: site.description, url: "/" },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#070b1a", width: "device-width", initialScale: 1 };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  ...(site.socials.length ? { sameAs: site.socials.map((s) => s.url) } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body className="min-h-screen antialiased">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
