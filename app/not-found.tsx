import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface-base px-6 text-text-base">
      <div className="max-w-md rounded-2xl border border-surface-edge bg-surface-panel/70 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-accent-cyan">404</p>
        <h1 className="mt-4 font-heading text-3xl">Page Not Found</h1>
        <p className="mt-4 text-sm leading-relaxed text-text-mute">
          The requested page does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary mt-6 inline-flex">
          Return Home
        </Link>
      </div>
    </main>
  );
}
