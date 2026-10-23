export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  philosophy: string;
  expertise: string[];
  /** Add only verified credentials. Leave empty until supplied. */
  credentials: string[];
  /** Path under /public once a real portrait is supplied, e.g. "/team/anuj.jpg". */
  portrait?: string;
  links: { label: string; url: string }[];
}

export const instructors: Instructor[] = [
  {
    id: "anuj-yadav",
    name: "Anuj Yadav",
    role: "Founder & Lead Instructor",
    bio: "Anuj founded AI Scholar to make practical AI, digital marketing and business skills easier to learn and easier to apply. [Editable placeholder: replace with your own verified introduction.]",
    philosophy:
      "Learning sticks when you use it. Every lesson should end with something you can try on a real task, and every tool should be taught alongside the judgement to use it well.",
    expertise: ["Artificial intelligence & AI tools", "Digital marketing", "Business growth", "Entrepreneurship", "Content & personal branding"],
    credentials: [],
    links: [
      { label: "Instagram", url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "" },
      { label: "YouTube", url: process.env.NEXT_PUBLIC_YOUTUBE_URL || "" },
      { label: "LinkedIn", url: process.env.NEXT_PUBLIC_LINKEDIN_URL || "" },
    ].filter((l) => l.url),
  },
];

export const getInstructor = (id: string) => instructors.find((i) => i.id === id) ?? instructors[0];
