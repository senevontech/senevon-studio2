import Link from "next/link";

const primaryNavItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

const sectionNavItems = [
  { label: "Identity", href: "#identity" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-edge bg-surface-base/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="font-heading text-xl tracking-wide text-text-base">
          SNV STUDIO
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {primaryNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] text-text-mute transition hover:text-accent-cyan"
            >
              {item.label}
            </Link>
          ))}
          <span className="h-4 w-px bg-surface-edge" aria-hidden />
          {sectionNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] text-text-mute transition hover:text-accent-lime"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
