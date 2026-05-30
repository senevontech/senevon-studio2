import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface-base text-text-base">
      <SiteHeader />
      <section className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.24em] text-accent-cyan">About</p>
        <h1 className="mt-4 font-heading text-4xl md:text-6xl">Studio DNA</h1>
        <p className="mt-6 text-sm leading-relaxed text-text-mute md:text-base">
          SNV Studio blends narrative systems, immersive visual design, and production
          engineering to help products stand out in crowded categories.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
