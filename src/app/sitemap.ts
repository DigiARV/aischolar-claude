import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/courses", "/learning-paths", "/about", "/resources", "/contact", "/privacy", "/terms", "/refund-policy"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.7 })),
    ...courses.map((c) => ({ url: `${site.url}/courses/${c.slug}`, changeFrequency: "weekly" as const, priority: 0.8 })),
  ];
}
