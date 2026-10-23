import type { SVGProps } from "react";

const p = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p} {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p} {...props}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
export const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p} {...props}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p} {...props}><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4-4" /></svg>
);
export const Spark = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p} {...props}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></svg>
);
export const Hands = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p} {...props}><path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12M11 11V5a1.5 1.5 0 0 1 3 0v7M14 11V7a1.5 1.5 0 0 1 3 0v7c0 4-2.5 6-5.5 6S7 18.5 5.5 15.5L4 12.5a1.4 1.4 0 0 1 2.3-1.5L8 13" /></svg>
);
export const Target = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p} {...props}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></svg>
);
export const Refresh = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p} {...props}><path d="M20 11a8 8 0 0 0-14-4.5L4 9M4 4v5h5M4 13a8 8 0 0 0 14 4.5L20 15M20 20v-5h-5" /></svg>
);
export const Clock = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p} {...props}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
);
export const Layers = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p} {...props}><path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5" /></svg>
);
export const Book = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p} {...props}><path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5v-15ZM5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3" /></svg>
);
