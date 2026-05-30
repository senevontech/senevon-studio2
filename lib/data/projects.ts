import { cache } from "react";
import { projects as fallbackProjects } from "@/lib/content";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { PortfolioProject } from "@/types/project";

type SupabaseProjectRow = {
  slug: string;
  name: string;
  category: string;
  impact: string;
  summary: string | null;
  is_featured: boolean;
  rank: number | null;
};

const toProject = (row: SupabaseProjectRow): PortfolioProject => ({
  slug: row.slug,
  name: row.name,
  category: row.category,
  impact: row.impact,
  summary: row.summary ?? undefined,
  isFeatured: row.is_featured,
  rank: row.rank ?? undefined
});

const fallback = fallbackProjects.map((project) => ({
  slug: project.slug,
  name: project.name,
  category: project.category,
  impact: project.impact,
  summary: project.summary,
  isFeatured: true
}));

export const getAllProjects = cache(async (): Promise<PortfolioProject[]> => {
  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from("projects")
      .select("slug,name,category,impact,summary,is_featured,rank")
      .order("rank", { ascending: true, nullsFirst: false });

    if (error || !data || data.length === 0) {
      return fallback;
    }

    return (data as SupabaseProjectRow[]).map(toProject);
  } catch {
    return fallback;
  }
});

export const getFeaturedProjects = cache(async (): Promise<PortfolioProject[]> => {
  const all = await getAllProjects();
  const featured = all.filter((project) => project.isFeatured !== false);
  return featured.length > 0 ? featured : all;
});

export const getProjectBySlug = cache(
  async (slug: string): Promise<PortfolioProject | null> => {
    const all = await getAllProjects();
    return all.find((project) => project.slug === slug) ?? null;
  }
);
