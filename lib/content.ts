export type Capability = {
  title: string;
  detail: string;
  mode: string;
};

export type Project = {
  name: string;
  category: string;
  impact: string;
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
    name: "Orion Launch Console",
    category: "SaaS Platform",
    impact: "42% faster onboarding funnel"
  },
  {
    name: "Nexa Mobility Hub",
    category: "Realtime Operations",
    impact: "3.4x jump in dashboard engagement"
  },
  {
    name: "Velar Commerce Space",
    category: "Digital Retail",
    impact: "29% growth in repeat purchase rate"
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
