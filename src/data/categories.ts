export type CategoryId =
  | "ai"
  | "marketing"
  | "business"
  | "content"
  | "performance"
  | "automation"
  | "ecommerce"
  | "career";

export interface Category {
  id: CategoryId;
  name: string;
  short: string;
  description: string;
  primary: boolean;
  /** Tailwind-free accent colours so art components can use them directly. */
  accent: string;
  accent2: string;
}

export const categories: Category[] = [
  {
    id: "ai",
    name: "AI & Emerging Technology",
    short: "AI",
    description:
      "Understand modern AI tools and put them to work on everyday tasks, from research and writing to decision-making.",
    primary: true,
    accent: "#7c5cff",
    accent2: "#22d3ee",
  },
  {
    id: "marketing",
    name: "Digital Marketing & Growth",
    short: "Marketing",
    description:
      "Learn how modern marketing works, then use AI to plan, create and improve campaigns faster.",
    primary: true,
    accent: "#22d3ee",
    accent2: "#7c5cff",
  },
  {
    id: "business",
    name: "Business & Entrepreneurship",
    short: "Business",
    description:
      "Connect tools and tactics to outcomes that matter: customers, revenue, systems and sound decisions.",
    primary: true,
    accent: "#f5b544",
    accent2: "#7c5cff",
  },
  {
    id: "content",
    name: "AI Content Creation",
    short: "Content",
    description: "Write, design and produce video and social content with AI-assisted workflows.",
    primary: false,
    accent: "#7c5cff",
    accent2: "#f5b544",
  },
  {
    id: "performance",
    name: "Performance Marketing",
    short: "Performance",
    description: "Paid advertising fundamentals, measurement and optimisation.",
    primary: false,
    accent: "#22d3ee",
    accent2: "#f5b544",
  },
  {
    id: "automation",
    name: "Automation & Workflows",
    short: "Automation",
    description: "Connect tools and remove repetitive work with reusable, documented workflows.",
    primary: false,
    accent: "#7c5cff",
    accent2: "#22d3ee",
  },
  {
    id: "ecommerce",
    name: "E-commerce Growth",
    short: "E-commerce",
    description: "Build and grow an online store with practical marketing and operations know-how.",
    primary: false,
    accent: "#f5b544",
    accent2: "#22d3ee",
  },
  {
    id: "career",
    name: "Career & Productivity Skills",
    short: "Career",
    description: "Future-ready professional skills to work smarter and stay employable.",
    primary: false,
    accent: "#22d3ee",
    accent2: "#7c5cff",
  },
];

export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id)!;
