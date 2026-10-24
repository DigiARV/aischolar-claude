import Link from "next/link";

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden>
      <defs>
        <linearGradient id="lm" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6d4cff" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#lm)" />
      <path d="M12 29 20 11l8 18" stroke="#070b1a" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M15.2 23.5h9.6" stroke="#070b1a" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="20" cy="11" r="2.6" fill="#fff" />
    </svg>
  );
}

export function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label="AI Scholar home">
      <LogoMark />
      <span className={`text-lg font-semibold tracking-tight ${dark ? "text-white" : "text-heading"}`}>
        AI <span className="font-normal opacity-80">Scholar</span>
      </span>
    </Link>
  );
}
