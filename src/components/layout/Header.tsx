"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Close, Menu } from "@/components/ui/Icons";
import { mainNav } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
      if (e.key === "Tab" && panelRef.current) {
        const f = [toggleRef.current, ...panelRef.current.querySelectorAll<HTMLElement>("a,button")].filter(Boolean) as HTMLElement[];
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-paper/85 backdrop-blur-md transition-colors ${scrolled || open ? "border-b border-line" : "border-b border-transparent"}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[4.5rem]">
        <Logo dark={false} />
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${isActive(l.href) ? "bg-ink text-white" : "text-ink/70 hover:bg-paper-2 hover:text-ink"}`}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/sign-in" className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 hover:text-ink">Sign In</Link>
          <Button href="/courses" className="!py-2.5">Start Learning</Button>
        </div>
        <button ref={toggleRef} type="button" className="grid size-11 place-items-center rounded-full border border-ink/20 bg-white text-ink lg:hidden"
          aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          {open ? <Close /> : <Menu />}
        </button>
      </div>
      <div id="mobile-menu" ref={panelRef} hidden={!open} className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-paper px-5 pb-10 pt-4 lg:hidden">
        <nav aria-label="Mobile" className="flex flex-col">
          {mainNav.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}
              className={`border-b border-line py-4 font-serif text-3xl ${isActive(l.href) ? "text-violet-deep" : "text-ink"}`}>{l.label}</Link>
          ))}
          <Link href="/sign-in" className="border-b border-line py-4 font-serif text-3xl text-ink/70">Sign In</Link>
        </nav>
        <Button href="/courses" className="mt-6 w-full">Start Learning</Button>
      </div>
    </header>
  );
}
