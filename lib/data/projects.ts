import { projects as fallbackProjects } from "@/lib/content";
import type { PortfolioProject } from "@/types/project";

const fallback: PortfolioProject[] = fallbackProjects.map((project) => ({
  slug: project.slug,
  name: project.name,
  category: project.category,
  impact: project.impact,
  summary: project.summary,
  isFeatured: true
}));

export function getAllProjectsStatic(): PortfolioProject[] {
  return fallback;
}

export function getFeaturedProjectsStatic(): PortfolioProject[] {
  const all = getAllProjectsStatic();
  const featured = all.filter((project) => project.isFeatured !== false);
  return featured.length > 0 ? featured : all;
}

export function getProjectBySlugStatic(slug: string): PortfolioProject | null {
  const all = getAllProjectsStatic();
  return all.find((project) => project.slug === slug) ?? null;
}
