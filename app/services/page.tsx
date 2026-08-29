import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { businessName, displayPhone, seoServices } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Moving Services in Alabama and Georgia",
  description:
    "Explore BBA Movers services for residential moving, commercial moving, piano moving, movers-only loading, and long-distance moves across Alabama and Georgia.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="page-bg min-h-screen px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="/"
          className="outline-button inline-flex rounded-full px-4 py-2 text-sm font-semibold"
        >
          Back to home
        </Link>

        <section className="mt-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
            {businessName}
          </p>
          <h1 className="section-title mt-4 text-4xl font-semibold text-[color:var(--ink)] sm:text-6xl">
            Moving Services in Alabama and Georgia
          </h1>
          <p className="mt-5 max-w-3xl text-[color:var(--muted)]">
            Get help with local home moves, office relocations, piano moves,
            movers-only loading and unloading, and long-distance routes across
            Alabama, Georgia, and nearby Southeast communities.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {seoServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="glass-card overflow-hidden rounded-3xl"
            >
              <Image
                src={service.image}
                alt={`${businessName} ${service.title.toLowerCase()}`}
                width={800}
                height={520}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="section-title text-2xl font-semibold text-[color:var(--ink)]">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-[color:var(--brand-ember)]/10 bg-white/80 p-6">
          <h2 className="section-title text-2xl font-semibold">
            Need a moving quote?
          </h2>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            Call {displayPhone} or request a quote from the BBA Movers home
            page.
          </p>
          <Link
            href="/#quote"
            className="cta-button mt-5 inline-flex rounded-full px-5 py-2 text-sm font-semibold"
          >
            Request a Quote
          </Link>
        </section>
      </div>
    </main>
  );
}
