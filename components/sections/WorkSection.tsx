"use client";

import { useEffect, useState } from "react";
import { SectionShell } from "@/components/ui/SectionShell";
import { fetchFeaturedProjectsClient } from "@/lib/data/projects-client";
import type { PortfolioProject } from "@/types/project";

type WorkSectionProps = {
  initialItems: PortfolioProject[];
};

export function WorkSection({ initialItems }: WorkSectionProps) {
  const [items, setItems] = useState<PortfolioProject[]>(initialItems);

  useEffect(() => {
    let active = true;

    async function syncFromSupabase() {
      const liveProjects = await fetchFeaturedProjectsClient();
      if (active) {
        setItems(liveProjects);
      }
    }

    syncFromSupabase();

    return () => {
      active = false;
    };
  }, []);

  return (
    <SectionShell
      id="work"
      eyebrow="Featured Work"
      title="Case studies designed for depth, not noise."
      subtitle="Each project block will later connect to dedicated detail pages and media-rich narratives."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((project) => (
          <article
            key={project.slug}
            className="rounded-2xl border border-surface-edge bg-gradient-to-b from-surface-panel to-surface-base p-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-accent-cyan">
              {project.category}
            </p>
            <h3 className="mt-3 font-heading text-2xl text-text-base">{project.name}</h3>
            <p className="mt-4 text-sm text-text-mute">{project.impact}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
