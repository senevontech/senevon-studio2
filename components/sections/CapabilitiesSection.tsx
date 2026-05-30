import { capabilities } from "@/lib/content";
import { SectionShell } from "@/components/ui/SectionShell";

export function CapabilitiesSection() {
  return (
    <SectionShell
      id="capabilities"
      eyebrow="Capabilities"
      title="Modular capability pods for teams shipping ambitious products."
      subtitle="These cards map directly to interactive 3D units in the next phase."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {capabilities.map((capability) => (
          <article
            key={capability.title}
            className="group rounded-2xl border border-surface-edge bg-surface-panel/60 p-6 transition hover:-translate-y-1 hover:border-accent-cyan"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-accent-lime">
              {capability.mode}
            </p>
            <h3 className="mt-3 font-heading text-2xl text-text-base">
              {capability.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-mute">
              {capability.detail}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
