import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WorkDetailClient } from "@/components/work/WorkDetailClient";
import { getAllProjectsStatic, getProjectBySlugStatic } from "@/lib/data/projects";

type WorkDetailPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  const projects = getAllProjectsStatic();
  return projects.map((project) => ({ slug: project.slug }));
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = params;
  const project = getProjectBySlugStatic(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-surface-base text-text-base">
      <SiteHeader />
      <WorkDetailClient slug={slug} initialProject={project} />
      <SiteFooter />
    </main>
  );
}
