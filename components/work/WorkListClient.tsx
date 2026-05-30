"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchAllProjectsClient } from "@/lib/data/projects-client";
import type { PortfolioProject } from "@/types/project";

type WorkListClientProps = {
  initialProjects: PortfolioProject[];
};

export function WorkListClient({ initialProjects }: WorkListClientProps) {
  const [projects, setProjects] = useState<PortfolioProject[]>(initialProjects);

  useEffect(() => {
    let active = true;

    async function syncFromSupabase() {
      const liveProjects = await fetchAllProjectsClient();
      if (active) {
        setProjects(liveProjects);
      }
    }

    syncFromSupabase();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.slug}
          className="rounded-2xl border border-surface-edge bg-gradient-to-b from-surface-panel to-surface-base p-6"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent-cyan">
            {project.category}
          </p>
          <h2 className="mt-3 font-heading text-2xl text-text-base">{project.name}</h2>
          <p className="mt-4 text-sm leading-relaxed text-text-mute">
            {project.summary ?? project.impact}
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-accent-lime">
            {project.impact}
          </p>
          <Link
            href={`/work/${project.slug}`}
            className="mt-6 inline-flex text-xs uppercase tracking-[0.2em] text-accent-orange transition hover:text-accent-cyan"
          >
            Open Case Study
          </Link>
        </article>
      ))}
    </div>
  );
}
