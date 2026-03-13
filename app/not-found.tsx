import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-bg flex min-h-screen items-center justify-center px-6 py-20">
      <div className="glass-card w-full max-w-xl rounded-3xl p-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
          404
        </p>
        <h1 className="section-title mt-4 text-3xl font-semibold text-[color:var(--ink)]">
          This page took a wrong turn.
        </h1>
        <p className="mt-3 text-[color:var(--muted)]">
          Let’s get you back to the moving plan.
        </p>
        <Link
          href="/"
          className="cta-button mt-6 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
