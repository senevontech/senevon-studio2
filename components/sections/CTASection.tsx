import Link from "next/link";

export function CTASection() {
  return (
    <section className="px-6 pb-20 pt-10 md:pb-24">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-surface-edge bg-gradient-to-r from-surface-panel to-surface-base p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.24em] text-accent-lime">
          Start The Build
        </p>
        <h2 className="mt-4 max-w-3xl font-heading text-3xl leading-tight text-text-base md:text-5xl">
          Ready to craft a portfolio experience that feels unlike every other studio site?
        </h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">
            Book a Discovery Call
          </Link>
          <Link href="/about" className="btn-secondary">
            Get Capability Deck
          </Link>
        </div>
      </div>
    </section>
  );
}
