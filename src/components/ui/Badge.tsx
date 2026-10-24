import type { ReactNode } from "react";

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "violet" | "cyan" | "amber" | "dark" }) {
  const tones = {
    neutral: "bg-paper-2 text-ink",
    violet: "bg-lav text-violet-deep",
    cyan: "bg-sky text-cyan-deep",
    amber: "bg-butter text-[#6b4700]",
    dark: "bg-ink text-white",
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${tones[tone]}`}>{children}</span>;
}
