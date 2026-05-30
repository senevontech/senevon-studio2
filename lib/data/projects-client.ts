"use client";

import { getAllProjectsStatic } from "@/lib/data/projects";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser";
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

export async function fetchAllProjectsClient(): Promise<PortfolioProject[]> {
  const fallback = getAllProjectsStatic();

  try {
    const supabase = getSupabaseBrowserClient();
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
}

export async function fetchFeaturedProjectsClient(): Promise<PortfolioProject[]> {
  const all = await fetchAllProjectsClient();
  const featured = all.filter((project) => project.isFeatured !== false);
  return featured.length > 0 ? featured : all;
}

export async function fetchProjectBySlugClient(
  slug: string
): Promise<PortfolioProject | null> {
  const all = await fetchAllProjectsClient();
  return all.find((project) => project.slug === slug) ?? null;
}
