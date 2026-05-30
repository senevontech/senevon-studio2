import { projects } from "@/lib/content";
import { SectionShell } from "@/components/ui/SectionShell";

export function WorkSection() {
  return (
    <SectionShell
      id="work"
      eyebrow="Featured Work"
      title="Case studies designed for depth, not noise."
      subtitle="Each project block will later connect to dedicated detail pages and media-rich narratives."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
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
