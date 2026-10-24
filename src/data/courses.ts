import type { CategoryId } from "./categories";

export type Level = "Beginner" | "Intermediate" | "Advanced";
export type Format = "Self-paced" | "Live cohort" | "Blended";
export type CourseStatus = "published" | "waitlist" | "coming-soon";

export interface Module {
  title: string;
  summary: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  /** One-line, outcome-focused summary used on cards. */
  summary: string;
  description: string;
  /** Short, playful "after this" line for cards. Keep it aspirational, never a guarantee. */
  teaser: string;
  category: CategoryId;
  level: Level;
  /** Planned format. Shown with a "planned" label until the course is published. */
  format: Format;
  /** e.g. "6 hours". Leave undefined until the real duration is known. */
  duration?: string;
  languages: string[];
  instructorId: string;
  /** Amount in major units (e.g. 1999). Leave undefined until pricing is decided. */
  price?: number;
  originalPrice?: number;
  currency?: "INR" | "USD";
  status: CourseStatus;
  /** Real enrolment URL once published; waitlist URL when using an external provider. */
  enrolUrl?: string;
  waitlistUrl?: string;
  outcomes: string[];
  prerequisites: string[];
  audience: string[];
  curriculum: Module[];
  /** Used to match learning-path recommendations. */
  goals: ("grow-business" | "master-ai" | "marketing-career")[];
}

export const courses: Course[] = [
  {
    id: "c-ai-productivity",
    slug: "ai-tools-for-everyday-productivity",
    title: "AI Tools for Everyday Productivity",
    summary: "Use AI assistants to research, write, plan and decide faster, without losing your own judgement.",
    teaser: "your weekly tasks get a lot shorter.",
    description:
      "A hands-on introduction to modern AI assistants for working professionals and business owners. You will learn how to write clear prompts, verify AI output and build a small personal library of reusable workflows for tasks you already do every week.",
    category: "ai",
    level: "Beginner",
    format: "Self-paced",
    languages: ["English"],
    instructorId: "anuj-yadav",
    status: "waitlist",
    outcomes: [
      "Write structured prompts that produce usable first drafts",
      "Use AI for research while checking sources and accuracy",
      "Build a personal prompt library for recurring tasks",
      "Know when not to use AI and how to review output responsibly",
    ],
    prerequisites: ["No prior AI experience required", "A laptop or phone with internet access"],
    audience: ["Working professionals", "Students and job seekers", "Small-business owners"],
    curriculum: [
      { title: "How modern AI assistants actually work", summary: "A plain-language mental model, strengths and limits." },
      { title: "Prompting that gets results", summary: "Context, constraints, examples and iteration." },
      { title: "AI for research and summarising", summary: "Faster reading with source checking." },
      { title: "AI for writing and communication", summary: "Emails, documents and presentations." },
      { title: "Your reusable workflow library", summary: "Turn what works into templates you can reuse." },
    ],
    goals: ["master-ai", "marketing-career"],
  },
  {
    id: "c-ai-marketing",
    slug: "ai-powered-marketing-fundamentals",
    title: "AI-Powered Marketing Fundamentals",
    summary: "Learn the marketing basics, then use AI to plan, create and improve campaigns faster.",
    teaser: "you can explain your marketing in one clear sentence.",
    description:
      "Marketing foundations (audience, positioning, channels, funnel and measurement) taught alongside practical AI workflows, so you can plan and run a simple campaign end to end.",
    category: "marketing",
    level: "Beginner",
    format: "Self-paced",
    languages: ["English"],
    instructorId: "anuj-yadav",
    status: "waitlist",
    outcomes: [
      "Define an audience and a clear positioning statement",
      "Map a basic funnel from awareness to action",
      "Use AI to research, draft and refine campaign assets",
      "Choose simple metrics and read them sensibly",
    ],
    prerequisites: ["No marketing background required"],
    audience: ["Aspiring marketers", "Founders and freelancers", "Career switchers"],
    curriculum: [
      { title: "Marketing in plain English", summary: "Audience, offer, message and channel." },
      { title: "Positioning and messaging", summary: "Say what you do so people care." },
      { title: "The funnel and the customer journey", summary: "Where AI helps at each stage." },
      { title: "Building a campaign with AI", summary: "From idea to draft assets." },
      { title: "Measuring what matters", summary: "A simple scorecard and next steps." },
    ],
    goals: ["marketing-career", "grow-business"],
  },
  {
    id: "c-ai-content",
    slug: "practical-ai-content-creation",
    title: "Practical AI Content Creation",
    summary: "Plan, write and produce consistent content for social and video using AI-assisted workflows.",
    teaser: "a week of content, planned in one sitting.",
    description:
      "Build a repeatable content workflow: idea generation, scripting, editing support and repurposing, while keeping your own voice and standards.",
    category: "content",
    level: "Beginner",
    format: "Blended",
    languages: ["English"],
    instructorId: "anuj-yadav",
    status: "coming-soon",
    outcomes: [
      "Create a content system you can sustain every week",
      "Draft scripts and captions in your own voice with AI support",
      "Repurpose one idea into multiple formats",
      "Review AI-assisted content for quality and originality",
    ],
    prerequisites: ["A social or business profile you want to grow (optional)"],
    audience: ["Creators and aspiring creators", "Small brands", "Marketing beginners"],
    curriculum: [
      { title: "Content strategy basics", summary: "Pillars, formats and a simple calendar." },
      { title: "Ideas and hooks", summary: "A repeatable way to find topics worth making." },
      { title: "Scripts, captions and carousels", summary: "AI-assisted drafting with a human edit." },
      { title: "AI video and visual tools", summary: "What they do well and where they fall short." },
      { title: "Repurposing and publishing workflow", summary: "One idea, many formats." },
    ],
    goals: ["master-ai", "marketing-career", "grow-business"],
  },
  {
    id: "c-meta-ads",
    slug: "meta-ads-fundamentals",
    title: "Meta Ads Fundamentals",
    summary: "Understand how paid social works and set up, measure and improve your first campaigns.",
    teaser: "an ads dashboard stops looking like a puzzle.",
    description:
      "A practical introduction to advertising on Meta platforms: account structure, audiences, creative, budgets and reading results. Taught with exercises you can apply to a real or sample business.",
    category: "performance",
    level: "Intermediate",
    format: "Self-paced",
    languages: ["English"],
    instructorId: "anuj-yadav",
    status: "coming-soon",
    outcomes: [
      "Structure campaigns, ad sets and ads sensibly",
      "Choose objectives and audiences for a clear goal",
      "Brief and test ad creative methodically",
      "Read core metrics and decide what to change next",
    ],
    prerequisites: ["Basic marketing knowledge", "A business or sample brand to practise with"],
    audience: ["Marketers and freelancers", "Business owners running their own ads"],
    curriculum: [
      { title: "How paid social works", summary: "Auction basics, objectives and structure." },
      { title: "Audiences and targeting", summary: "Who to reach and how." },
      { title: "Creative that earns attention", summary: "Briefing, testing and iteration." },
      { title: "Budgets, tracking and measurement", summary: "Set up properly before spending." },
      { title: "Optimising campaigns", summary: "A calm, evidence-based review routine." },
    ],
    goals: ["marketing-career", "grow-business"],
  },
  {
    id: "c-ai-business",
    slug: "ai-for-business-growth",
    title: "AI for Business Growth",
    summary: "Find where AI can save time or create revenue in your business, and plan a safe first rollout.",
    teaser: "you have a shortlist of AI projects worth your time.",
    description:
      "A practical framework for identifying high-value AI use cases across marketing, sales, operations and customer support, with a focus on responsible adoption and measurable results.",
    category: "business",
    level: "Intermediate",
    format: "Live cohort",
    languages: ["English"],
    instructorId: "anuj-yadav",
    status: "coming-soon",
    outcomes: [
      "Audit your business for realistic AI opportunities",
      "Prioritise use cases by effort, risk and impact",
      "Plan a small pilot with clear success measures",
      "Set simple guardrails for data and quality",
    ],
    prerequisites: ["Experience running or managing a team, product or business"],
    audience: ["Founders and business owners", "Managers and team leads"],
    curriculum: [
      { title: "Where AI creates business value", summary: "Time saved, revenue enabled, risk reduced." },
      { title: "Mapping your workflows", summary: "Find the repeatable work." },
      { title: "Choosing tools and use cases", summary: "A simple prioritisation matrix." },
      { title: "Piloting and measuring", summary: "Start small, learn fast." },
      { title: "Responsible use and next steps", summary: "Privacy, quality control and team habits." },
    ],
    goals: ["grow-business", "master-ai"],
  },
  {
    id: "c-automation",
    slug: "build-your-first-marketing-automation-workflow",
    title: "Build Your First Marketing Automation Workflow",
    summary: "Connect your tools and automate one real marketing task from trigger to result.",
    teaser: "one boring task quietly runs itself.",
    description:
      "A guided build: pick a repetitive marketing task, design the workflow, connect the tools and test it, with documentation so you can maintain and extend it.",
    category: "automation",
    level: "Intermediate",
    format: "Blended",
    languages: ["English"],
    instructorId: "anuj-yadav",
    status: "coming-soon",
    outcomes: [
      "Break a manual process into triggers, actions and checks",
      "Build and test a working automation",
      "Add AI steps safely, with review points",
      "Document the workflow so others can use it",
    ],
    prerequisites: ["Comfort with common web tools", "Basic marketing familiarity"],
    audience: ["Marketers and operators", "Freelancers and agency teams"],
    curriculum: [
      { title: "Thinking in workflows", summary: "Triggers, actions, data and checks." },
      { title: "Choosing a task to automate", summary: "Value versus complexity." },
      { title: "Build: from trigger to outcome", summary: "A guided, hands-on build." },
      { title: "Adding AI steps", summary: "Where it helps and where to keep a human." },
      { title: "Testing, monitoring and documenting", summary: "Make it dependable." },
    ],
    goals: ["grow-business", "master-ai", "marketing-career"],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);

export const statusLabel: Record<CourseStatus, string> = {
  published: "Open for enrolment",
  waitlist: "Join the waitlist",
  "coming-soon": "Coming soon",
};
