import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { categories } from "@/data/categories";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Section";

const col = "space-y-2.5 text-sm";
const link = "text-white/65 transition-colors hover:text-white";

export function Footer() {
  const primary = categories.filter((c) => c.primary);
  return (
    <footer className="border-t-2 border-ink bg-ink pt-16 pb-8 text-white/70">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed">{site.description}</p>
            {site.socials.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/80 hover:border-white/40 hover:text-white">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white">Learn</h2>
              <ul className={col}>
                {primary.map((c) => (
                  <li key={c.id}><Link className={link} href={`/courses?category=${c.id}`}>{c.name}</Link></li>
                ))}
                <li><Link className={link} href="/courses">All courses</Link></li>
                <li><Link className={link} href="/learning-paths">Learning paths</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white">Company</h2>
              <ul className={col}>
                <li><Link className={link} href="/about">About</Link></li>
                <li><Link className={link} href="/resources">Resources</Link></li>
                <li><Link className={link} href="/contact">Contact</Link></li>
                <li><Link className={link} href="/sign-in">Sign In</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white">Legal</h2>
              <ul className={col}>
                <li><Link className={link} href="/privacy">Privacy Policy</Link></li>
                <li><Link className={link} href="/terms">Terms &amp; Conditions</Link></li>
                <li><Link className={link} href="/refund-policy">Refund Policy</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white">Contact</h2>
              <ul className={col}>
                {site.contactEmail ? (
                  <li><a className={link} href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></li>
                ) : (
                  <li><Link className={link} href="/contact">Send a message</Link></li>
                )}
              </ul>
            </div>
          </nav>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Courses shown are proposed and not yet open for enrolment.</p>
        </div>
      </Container>
    </footer>
  );
}
