import { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  subtitle,
  children
}: SectionShellProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-10 space-y-4">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.24em] text-accent-cyan">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-heading text-3xl leading-tight text-text-base md:text-5xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="max-w-2xl text-sm leading-relaxed text-text-mute md:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
