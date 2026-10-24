import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "accent";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-5 py-3 text-sm font-bold transition duration-150 min-h-11 disabled:opacity-60 disabled:pointer-events-none " +
  "shadow-[4px_4px_0_0_var(--color-ink)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0_0_var(--color-ink)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none";

const variants: Record<Variant, string> = {
  primary: "bg-violet text-white",
  secondary: "bg-white text-ink",
  accent: "bg-cyan text-ink",
  dark: "bg-ink text-white shadow-[4px_4px_0_0_var(--color-violet)] hover:shadow-[5px_5px_0_0_var(--color-violet)]",
  ghost: "bg-transparent text-ink shadow-none hover:bg-ink hover:text-white hover:shadow-none hover:translate-x-0 hover:translate-y-0",
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
