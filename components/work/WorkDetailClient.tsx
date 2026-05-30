"use client";

import { useEffect, useState } from "react";
import { fetchProjectBySlugClient } from "@/lib/data/projects-client";
import type { PortfolioProject } from "@/types/project";

type WorkDetailClientProps = {
  slug: string;
  initialProject: PortfolioProject;
};

export function WorkDetailClient({ slug, initialProject }: WorkDetailClientProps) {
  const [project, setProject] = useState<PortfolioProject>(initialProject);

  useEffect(() => {
    let active = true;

    async function syncFromSupabase() {
      const liveProject = await fetchProjectBySlugClient(slug);
      if (active && liveProject) {
        setProject(liveProject);
      }
    }

    syncFromSupabase();

    return () => {
      active = false;
    };
  }, [slug]);

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.24em] text-accent-cyan">
        {project.category}
      </p>
      <h1 className="mt-4 font-heading text-4xl leading-tight md:text-6xl">
        {project.name}
      </h1>
      <p className="mt-6 text-sm leading-relaxed text-text-mute md:text-base">
        {project.summary ??
          "This case study page is wired and ready for Supabase-managed long-form storytelling blocks."}
      </p>
      <div className="mt-8 rounded-2xl border border-surface-edge bg-surface-panel/60 p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-accent-lime">Impact</p>
        <p className="mt-3 text-base text-text-base">{project.impact}</p>
      </div>
    </section>
  );
}
