import { SectionShell } from "@/components/ui/SectionShell";

export function IdentitySection() {
  return (
    <SectionShell
      id="identity"
      eyebrow="Studio Identity"
      title="A modern studio built for products that need clarity and edge."
      subtitle="We combine product thinking, visual direction, and engineering rigor so every interaction has purpose."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            label: "Narrative First",
            detail:
              "Each page has intentional progression so visitors understand value fast."
          },
          {
            label: "Visual Depth",
            detail:
              "Layered surfaces, gradients, and geometric motion deliver a distinct digital presence."
          },
          {
            label: "Engineering Discipline",
            detail:
              "Component-driven architecture keeps the system scalable as content grows."
          }
        ].map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-surface-edge bg-surface-panel/70 p-6"
          >
            <h3 className="font-heading text-xl text-text-base">{item.label}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-mute">{item.detail}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
