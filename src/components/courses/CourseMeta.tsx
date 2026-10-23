import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/format";
import { statusLabel, type Course } from "@/data/courses";
import { site } from "@/data/site";

export function StatusBadge({ status }: { status: Course["status"] }) {
  const tone = status === "published" ? "cyan" : status === "waitlist" ? "violet" : "amber";
  return <Badge tone={tone}>{status === "waitlist" ? "Waitlist open" : status === "coming-soon" ? "Coming soon" : "Open"}</Badge>;
}

/** Price block that never invents numbers: unset prices read "Pricing to be announced". */
export function Price({ course, large = false }: { course: Course; large?: boolean }) {
  if (course.price == null) {
    return <span className={`${large ? "text-lg" : "text-sm"} font-medium text-body`}>Pricing to be announced</span>;
  }
  const cur = course.currency ?? site.currency;
  return (
    <span className="flex items-baseline gap-2">
      <span className={`${large ? "text-3xl" : "text-lg"} font-semibold text-heading`}>{formatPrice(course.price, cur)}</span>
      {course.originalPrice != null && course.originalPrice > course.price && (
        <s className="text-sm text-body/70">{formatPrice(course.originalPrice, cur)}</s>
      )}
    </span>
  );
}

export function formatLine(course: Course) {
  const planned = course.status === "published" ? "" : " (planned)";
  return `${course.format}${planned}${course.duration ? ` · ${course.duration}` : ""}`;
}

export const ctaLabel = (c: Course) => (c.status === "published" ? "Enrol now" : statusLabel[c.status] === "Coming soon" ? "Get notified" : "Join the waitlist");
