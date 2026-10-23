import type { CategoryId } from "@/data/categories";
import { getCategory } from "@/data/categories";

/** Original abstract artwork per category. Pure SVG, so it is tiny and scales crisply. */
export function CourseArt({ category, seed = 0, className = "" }: { category: CategoryId; seed?: number; className?: string }) {
  const { accent, accent2 } = getCategory(category);
  const gid = `g-${category}-${seed}`;
  const rot = (seed % 4) * 7;
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-hidden>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#111a33" />
          <stop offset="1" stopColor="#070b1a" />
        </linearGradient>
        <radialGradient id={`${gid}-r`} cx="0.8" cy="0.1" r="0.8">
          <stop offset="0" stopColor={accent} stopOpacity="0.55" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill={`url(#${gid})`} />
      <rect width="400" height="240" fill={`url(#${gid}-r)`} />
      <g stroke="#fff" strokeOpacity="0.06">
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={i} d={`M${i * 50} 0V240`} />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <path key={i} d={`M0 ${i * 48}H400`} />
        ))}
      </g>
      <g transform={`rotate(${rot} 200 120)`}>{motif(category, accent, accent2)}</g>
    </svg>
  );
}

function motif(cat: CategoryId, a: string, b: string) {
  switch (cat) {
    case "ai": {
      const n = [[90, 70], [90, 120], [90, 170], [200, 50], [200, 100], [200, 150], [200, 195], [310, 85], [310, 150]];
      const l: [number, number][] = [[0,3],[0,4],[1,4],[1,5],[2,5],[2,6],[3,7],[4,7],[4,8],[5,8],[6,8],[5,7]];
      return (
        <g>
          {l.map(([x, y], i) => (
            <line key={i} x1={n[x][0]} y1={n[x][1]} x2={n[y][0]} y2={n[y][1]} stroke={a} strokeOpacity="0.5" />
          ))}
          {n.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 9 : 6} fill={i % 2 ? b : a} />
          ))}
        </g>
      );
    }
    case "marketing":
      return (
        <g>
          <path d="M70 60h260l-50 70v60l-40 20v-80z" fill={a} fillOpacity="0.18" stroke={a} strokeWidth="2" strokeLinejoin="round" />
          <path d="M120 85h160M150 110h100" stroke={b} strokeWidth="3" strokeLinecap="round" />
          <circle cx="240" cy="200" r="7" fill={b} />
        </g>
      );
    case "business":
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={80 + i * 62} y={170 - i * 34} width="48" height={34 + i * 34} rx="8" fill={i % 2 ? b : a} fillOpacity={0.35 + i * 0.18} />
          ))}
          <path d="M80 150 160 110 230 120 330 50" stroke="#fff" strokeOpacity="0.85" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="330" cy="50" r="6" fill="#fff" />
        </g>
      );
    case "content":
      return (
        <g>
          <rect x="95" y="55" width="130" height="150" rx="14" fill={a} fillOpacity="0.22" stroke={a} />
          <rect x="165" y="40" width="130" height="150" rx="14" fill={b} fillOpacity="0.22" stroke={b} />
          <path d="M205 100l34 20-34 20z" fill="#fff" />
        </g>
      );
    case "performance":
      return (
        <g fill="none">
          {[85, 60, 35].map((r, i) => (
            <circle key={r} cx="200" cy="125" r={r} stroke={i % 2 ? b : a} strokeWidth="2.5" strokeOpacity={0.9 - i * 0.2} />
          ))}
          <circle cx="200" cy="125" r="8" fill="#fff" />
          <path d="M200 125 310 40" stroke="#fff" strokeOpacity="0.8" strokeWidth="2" />
        </g>
      );
    case "automation":
      return (
        <g>
          <path d="M95 120H160M240 120H305M200 80V50M200 160v30" stroke={a} strokeWidth="2.5" strokeDasharray="6 6" className="animate-dash" />
          {[[70, 120], [200, 120], [330, 120], [200, 45], [200, 195]].map(([x, y], i) => (
            <rect key={i} x={x - 26} y={y - 22} width="52" height="44" rx="12" fill={i === 1 ? a : "#111a33"} stroke={i === 1 ? "none" : b} strokeWidth="2" />
          ))}
        </g>
      );
    case "ecommerce":
      return (
        <g>
          {[0, 1, 2].flatMap((r) => [0, 1, 2, 3].map((c) => (
            <rect key={`${r}${c}`} x={80 + c * 62} y={55 + r * 52} width="50" height="42" rx="9" fill={(r + c) % 2 ? b : a} fillOpacity={(r * 4 + c) % 5 === 0 ? 0.9 : 0.28} />
          )))}
        </g>
      );
    default:
      return (
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={70 + i * 55} y={190 - i * 28} width="48" height="12" rx="6" fill={i % 2 ? b : a} />
          ))}
          <path d="M94 175 320 60" stroke="#fff" strokeOpacity="0.6" strokeDasharray="3 7" strokeWidth="2" />
        </g>
      );
  }
}
