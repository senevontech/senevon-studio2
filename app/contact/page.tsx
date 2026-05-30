import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface-base text-text-base">
      <SiteHeader />
      <section className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.24em] text-accent-cyan">Contact</p>
        <h1 className="mt-4 font-heading text-4xl md:text-6xl">Start a Build Sprint</h1>
        <p className="mt-6 text-sm leading-relaxed text-text-mute md:text-base">
          This page is the conversion endpoint. Next pass will connect this form to a
          Supabase table plus notification workflow.
        </p>
        <form className="mt-10 grid gap-4">
          <input
            className="rounded-xl border border-surface-edge bg-surface-panel px-4 py-3 text-sm text-text-base outline-none ring-accent-cyan focus:ring-1"
            placeholder="Your name"
            aria-label="Your name"
          />
          <input
            className="rounded-xl border border-surface-edge bg-surface-panel px-4 py-3 text-sm text-text-base outline-none ring-accent-cyan focus:ring-1"
            placeholder="Email"
            aria-label="Email"
          />
          <textarea
            className="min-h-32 rounded-xl border border-surface-edge bg-surface-panel px-4 py-3 text-sm text-text-base outline-none ring-accent-cyan focus:ring-1"
            placeholder="Project brief"
            aria-label="Project brief"
          />
          <button type="button" className="btn-primary w-fit">
            Send Inquiry
          </button>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
