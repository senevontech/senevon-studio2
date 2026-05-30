import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getAllProjects } from "@/lib/data/projects";

export const revalidate = 300;

export default async function WorkIndexPage() {
  const projects = await getAllProjects();

  return (
    <main className="min-h-screen bg-surface-base text-text-base">
      <SiteHeader />
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.24em] text-accent-cyan">Case Studies</p>
        <h1 className="mt-4 font-heading text-4xl md:text-6xl">Selected Work</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-mute md:text-base">
          Detailed portfolio entries driven by measurable product outcomes.
        </p>

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
      </section>
      <SiteFooter />
    </main>
  );
}
