import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "accent";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition duration-200 min-h-11 disabled:opacity-60 disabled:pointer-events-none active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white shadow-[0_10px_24px_-10px_rgb(20_18_43/0.6)] hover:bg-violet hover:shadow-[0_14px_28px_-10px_rgb(91_63_230/0.7)]",
  accent: "bg-violet text-white shadow-[0_10px_24px_-10px_rgb(91_63_230/0.7)] hover:bg-violet-deep",
  secondary: "border border-ink/20 bg-white text-ink hover:border-ink/50",
  ghost: "text-ink hover:bg-paper-2",
  dark: "bg-white text-ink hover:bg-lav",
};

type Props = { variant?: Variant; href?: string } & Omit<ComponentProps<"button">, "ref">;

export function Button({ variant = "primary", href, className = "", children, ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    const external = /^https?:/.test(href);
    return external ? (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
    ) : (
      <Link href={href} className={cls}>{children}</Link>
    );
  }
  return <button className={cls} {...rest}>{children}</button>;
}
