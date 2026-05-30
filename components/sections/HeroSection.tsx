export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-28 md:pb-32 md:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-grid h-full w-full" />
        <div className="hero-orb hero-orb-cyan" />
        <div className="hero-orb hero-orb-orange" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.24em] text-accent-cyan">
            Future-Ready Studio
          </p>
          <h1 className="font-heading text-5xl leading-[0.92] text-text-base sm:text-6xl md:text-7xl">
            We design
            <span className="block text-transparent text-stroke">digital worlds</span>
            people remember.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-text-mute md:text-base">
            Story-driven products with cinematic motion, immersive 3D surfaces, and
            performance-first engineering.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Start a Project</button>
            <button className="btn-secondary">View Work</button>
          </div>
        </div>

        <div className="w-full max-w-sm rounded-3xl border border-surface-edge bg-surface-panel/70 p-6 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.22em] text-accent-lime">
            Live Scene Placeholder
          </p>
          <p className="mt-4 text-sm leading-relaxed text-text-mute">
            This panel is reserved for the upcoming R3F hero scene. In Phase 2 we will
            connect camera movement and scroll-driven animation.
          </p>
        </div>
      </div>
    </section>
  );
}
