import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { businessName, displayPhone, seoLocations } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Moving Service Areas in Alabama and Georgia",
  description:
    "Find BBA Movers service information for Montgomery, Auburn, Birmingham, Tuskegee, Columbus, and Atlanta moving routes.",
  alternates: {
    canonical: "/locations",
  },
};

export default function LocationsPage() {
  return (
    <main className="page-bg min-h-screen px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="/"
          className="outline-button inline-flex rounded-full px-4 py-2 text-sm font-semibold"
        >
          Back to home
        </Link>

        <header className="mt-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
            {businessName} service areas
          </p>
          <h1 className="section-title mt-4 text-4xl font-semibold text-[color:var(--ink)] sm:text-6xl">
            Movers Serving Alabama and Georgia
          </h1>
          <p className="mt-5 text-[color:var(--muted)]">
            Based in Montgomery, BBA Movers handles local, one-way, and
            long-distance moves throughout Alabama and along Georgia routes.
            Explore planning details for the cities we serve most often.
          </p>
        </header>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {seoLocations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="glass-card overflow-hidden rounded-3xl"
            >
              <Image
                src={location.image}
                alt={`${businessName} moving service in ${location.city}, ${location.state}`}
                width={800}
                height={520}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="section-title text-2xl font-semibold text-[color:var(--ink)]">
                  {location.title}
                </h2>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  {location.description}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-12 border-t border-[color:var(--brand-ember)]/10 pt-8">
          <h2 className="section-title text-2xl font-semibold">
            Not sure whether your route is covered?
          </h2>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            Call {displayPhone} with your pickup and drop-off cities. BBA Movers
            also considers routes outside the cities listed here.
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
