import type { ReactNode } from "react";

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "violet" | "cyan" | "amber" | "dark" }) {
  const tones = {
    neutral: "bg-paper-2 text-ink/80",
    violet: "bg-lav text-violet-deep",
    cyan: "bg-sky text-cyan-deep",
    amber: "bg-butter text-[#8a5a00]",
    dark: "bg-ink text-white",
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}
