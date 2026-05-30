export type Capability = {
  title: string;
  detail: string;
  mode: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  impact: string;
  summary: string;
};

export type ProcessStep = {
  stage: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    title: "Digital Product Design",
    detail: "Concept to interface systems with bold narrative direction.",
    mode: "Strategy + UI/UX"
  },
  {
    title: "Immersive Web Engineering",
    detail: "High-performance web apps with motion and realtime interaction.",
    mode: "Next.js + 3D"
  },
  {
    title: "3D Brand Worlds",
    detail: "Product scenes, environmental visuals, and cinematic transitions.",
    mode: "R3F + Shaders"
  },
  {
    title: "AI Experience Systems",
    detail: "Workflow automation and intelligent interfaces for teams.",
    mode: "LLM + Ops"
  }
];

export const projects: Project[] = [
  {
    slug: "orion-launch-console",
    name: "Orion Launch Console",
    category: "SaaS Platform",
    impact: "42% faster onboarding funnel",
    summary:
      "Rebuilt onboarding architecture with guided motion states and task-centric navigation."
  },
  {
    slug: "nexa-mobility-hub",
    name: "Nexa Mobility Hub",
    category: "Realtime Operations",
    impact: "3.4x jump in dashboard engagement",
    summary:
      "Designed a dense but readable operations interface for distributed transport teams."
  },
  {
    slug: "velar-commerce-space",
    name: "Velar Commerce Space",
    category: "Digital Retail",
    impact: "29% growth in repeat purchase rate",
    summary:
      "Introduced immersive product storytelling and high-trust checkout decision flows."
  }
];

export const processSteps: ProcessStep[] = [
  {
    stage: "01 Discover",
    description: "We map product intent, audience tension, and business constraints."
  },
  {
    stage: "02 Design",
    description: "Narrative systems, visual worlds, and interaction choreography."
  },
  {
    stage: "03 Build",
    description: "Production-grade frontend architecture with measurable quality gates."
  },
  {
    stage: "04 Scale",
    description: "Optimization, analytics loops, and modular growth planning."
  }
];
