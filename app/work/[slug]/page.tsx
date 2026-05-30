import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getAllProjects, getProjectBySlug } from "@/lib/data/projects";

export const revalidate = 300;

type WorkDetailPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-surface-base text-text-base">
      <SiteHeader />
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
      <SiteFooter />
    </main>
  );
}
