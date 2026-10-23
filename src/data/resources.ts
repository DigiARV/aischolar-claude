export type ResourceKind = "AI tool tutorials" | "Marketing guides" | "Business playbooks" | "Templates & prompts" | "Video tutorials" | "Case studies";

export interface Resource {
  slug: string;
  kind: ResourceKind;
  title: string;
  summary: string;
  /** Resources stay "planned" until real content exists, so no link ever points at a fabricated page. */
  status: "planned" | "published";
  href?: string;
}

export const resourceKinds: { kind: ResourceKind; blurb: string }[] = [
  { kind: "AI tool tutorials", blurb: "Step-by-step walkthroughs of AI tools for real tasks." },
  { kind: "Marketing guides", blurb: "Clear explainers on strategy, channels and measurement." },
  { kind: "Business playbooks", blurb: "Frameworks for growth, systems and decisions." },
  { kind: "Templates & prompts", blurb: "Reusable prompts and templates you can copy." },
  { kind: "Video tutorials", blurb: "Short, practical video lessons." },
  { kind: "Case studies", blurb: "Worked examples, clearly labelled as illustrative or real." },
];

export const resources: Resource[] = [
  { slug: "prompt-basics", kind: "Templates & prompts", title: "A starter prompt library for work", summary: "Reusable prompts for research, writing and planning.", status: "planned" },
  { slug: "ai-research-workflow", kind: "AI tool tutorials", title: "A reliable AI research workflow", summary: "Gather, verify and summarise information with an AI assistant.", status: "planned" },
  { slug: "positioning-guide", kind: "Marketing guides", title: "Positioning in one page", summary: "Write a positioning statement your audience understands.", status: "planned" },
  { slug: "ai-opportunity-audit", kind: "Business playbooks", title: "The AI opportunity audit", summary: "A checklist for spotting your best AI use cases.", status: "planned" },
  { slug: "content-system", kind: "Video tutorials", title: "Build a weekly content system", summary: "Plan, make and repurpose content on a repeatable schedule.", status: "planned" },
  { slug: "automation-teardown", kind: "Case studies", title: "Anatomy of a simple automation", summary: "A worked example from trigger to result.", status: "planned" },
];
