const navItems = [
  { label: "Identity", href: "#identity" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-edge bg-surface-base/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-heading text-xl tracking-wide text-text-base">
          SNV STUDIO
        </a>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] text-text-mute transition hover:text-accent-cyan"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
