/**
 * Central, editable site configuration.
 * Anything left empty is hidden in the UI rather than shown as a dead link.
 */
export const site = {
  name: "AI Scholar",
  tagline: "Learn AI. Master Marketing. Build What's Next.",
  description:
    "Practical AI, marketing and business education that helps people turn knowledge into real-world skills.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  locale: "en_IN",
  currency: "INR" as const,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  whatsappCommunityUrl: process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL || "",
  leadsEndpoint: process.env.NEXT_PUBLIC_LEADS_ENDPOINT || "",
  socials: [
    { label: "Instagram", url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "" },
    { label: "YouTube", url: process.env.NEXT_PUBLIC_YOUTUBE_URL || "" },
    { label: "LinkedIn", url: process.env.NEXT_PUBLIC_LINKEDIN_URL || "" },
  ].filter((s) => s.url),
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Explore Courses", href: "/courses" },
  { label: "Learning Paths", href: "/learning-paths" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
] as const;
