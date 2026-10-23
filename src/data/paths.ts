import type { Course } from "./courses";

export interface LearningPath {
  id: "grow-business" | "master-ai" | "marketing-career";
  label: string;
  blurb: string;
  nextStep: string;
  /** Ordered course slugs. */
  courses: string[];
  steps: { title: string; text: string }[];
}

export const learningPaths: LearningPath[] = [
  {
    id: "grow-business",
    label: "I want to grow my business",
    blurb: "Start with where AI and marketing can move your numbers, then build systems that keep working.",
    nextStep: "Join the waitlist for the first course in this path and we'll tell you when it opens.",
    courses: ["ai-powered-marketing-fundamentals", "ai-for-business-growth", "build-your-first-marketing-automation-workflow"],
    steps: [
      { title: "Understand your customer and message", text: "Marketing fundamentals with AI-assisted research." },
      { title: "Find your best AI opportunities", text: "A framework to prioritise where AI helps your business." },
      { title: "Automate what repeats", text: "Build one working workflow and document it." },
    ],
  },
  {
    id: "master-ai",
    label: "I want to master AI tools",
    blurb: "Go from curious to confident with practical AI skills you can use every day.",
    nextStep: "Start with the everyday productivity course. It assumes no prior AI experience.",
    courses: ["ai-tools-for-everyday-productivity", "practical-ai-content-creation", "build-your-first-marketing-automation-workflow"],
    steps: [
      { title: "Learn to prompt and verify", text: "The core habits behind every good AI result." },
      { title: "Create with AI", text: "Content workflows that keep your voice." },
      { title: "Automate with AI", text: "Connect tools and add review points." },
    ],
  },
  {
    id: "marketing-career",
    label: "I want to build marketing and career skills",
    blurb: "Build a credible, modern marketing skill set and a portfolio of practical work.",
    nextStep: "Begin with marketing fundamentals, then specialise in content or paid advertising.",
    courses: ["ai-powered-marketing-fundamentals", "meta-ads-fundamentals", "practical-ai-content-creation"],
    steps: [
      { title: "Learn the foundations", text: "How marketing works, in plain English." },
      { title: "Pick a specialism", text: "Paid advertising, content, or both." },
      { title: "Apply it to real projects", text: "Build work you can show and talk about." },
    ],
  },
];

export const coursesFor = (path: LearningPath, all: Course[]) =>
  path.courses.map((s) => all.find((c) => c.slug === s)).filter((c): c is Course => Boolean(c));
