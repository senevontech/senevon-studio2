import { processSteps } from "@/lib/content";
import { SectionShell } from "@/components/ui/SectionShell";

export function ProcessSection() {
  return (
    <SectionShell
      id="process"
      eyebrow="Process"
      title="Structured delivery from concept to measurable outcomes."
      subtitle="This timeline will become scroll-animated with pinning and stage transitions."
    >
      <div className="grid gap-4">
        {processSteps.map((step) => (
          <article
            key={step.stage}
            className="rounded-2xl border border-surface-edge bg-surface-panel/70 p-6 md:grid md:grid-cols-[180px_1fr] md:items-start md:gap-8"
          >
            <p className="font-heading text-lg text-accent-orange">{step.stage}</p>
            <p className="mt-3 text-sm leading-relaxed text-text-mute md:mt-0">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
