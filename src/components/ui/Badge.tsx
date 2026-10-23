import type { ReactNode } from "react";

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "violet" | "cyan" | "amber" | "dark" }) {
  const tones = {
    neutral: "bg-paper-2 text-body",
    violet: "bg-violet/10 text-violet-deep",
    cyan: "bg-cyan/15 text-cyan-deep",
    amber: "bg-amber/20 text-[#8a5a00]",
    dark: "bg-white/10 text-white/85",
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${tones[tone]}`}>{children}</span>;
}
