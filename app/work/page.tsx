import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WorkListClient } from "@/components/work/WorkListClient";
import { getAllProjectsStatic } from "@/lib/data/projects";

export default function WorkIndexPage() {
  const projects = getAllProjectsStatic();

  return (
    <main className="min-h-screen bg-surface-base text-text-base">
      <SiteHeader />
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.24em] text-accent-cyan">Case Studies</p>
        <h1 className="mt-4 font-heading text-4xl md:text-6xl">Selected Work</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-mute md:text-base">
          Detailed portfolio entries driven by measurable product outcomes.
        </p>

        <WorkListClient initialProjects={projects} />
      </section>
      <SiteFooter />
    </main>
  );
}
