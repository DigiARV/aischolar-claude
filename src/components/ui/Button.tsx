import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none min-h-11";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-violet to-violet-deep text-white shadow-[0_8px_24px_-8px_rgb(124_92_255/0.7)] hover:shadow-[0_12px_28px_-8px_rgb(124_92_255/0.9)] hover:-translate-y-0.5",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/35 backdrop-blur",
  ghost: "border border-line bg-white text-heading hover:border-violet/50 hover:text-violet-deep",
  dark: "bg-navy text-white hover:bg-navy-3",
};

type Props = { variant?: Variant; href?: string } & Omit<ComponentProps<"button">, "ref">;

export function Button({ variant = "primary", href, className = "", children, ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    const external = /^https?:/.test(href);
    return external ? (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
