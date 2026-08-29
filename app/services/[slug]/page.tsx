import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  businessName,
  displayPhone,
  seoServices,
  serviceAreas,
  siteUrl,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getService(slug: string) {
  return seoServices.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return seoServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ${businessName}`,
      description: service.description,
      url: `/services/${service.slug}`,
      images: [
        {
          url: service.image,
          width: 800,
          height: 520,
          alt: `${businessName} ${service.title.toLowerCase()}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${businessName}`,
      description: service.description,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/${service.slug}#service`,
    name: service.title,
    description: service.description,
    provider: {
      "@type": "MovingCompany",
      name: businessName,
      telephone: "+1-334-912-2747",
      url: siteUrl,
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
  };

  return (
    <main className="page-bg min-h-screen px-6 py-10 sm:px-10 lg:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="/services"
          className="outline-button inline-flex rounded-full px-4 py-2 text-sm font-semibold"
        >
          All services
        </Link>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              {businessName}
            </p>
            <h1 className="section-title mt-4 text-4xl font-semibold text-[color:var(--ink)] sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 text-[color:var(--muted)]">
              {service.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/#quote"
                className="cta-button rounded-full px-6 py-3 text-sm font-semibold"
              >
                Request a Quote
              </Link>
              <a
                href="tel:13349122747"
                className="outline-button rounded-full px-6 py-3 text-sm font-semibold"
              >
                Call {displayPhone}
              </a>
            </div>
          </div>

          <Image
            src={service.image}
            alt={`${businessName} ${service.title.toLowerCase()} in Alabama and Georgia`}
            width={900}
            height={640}
            className="h-80 w-full rounded-3xl object-cover shadow-[0_18px_40px_rgba(142,47,31,0.18)]"
            priority
          />
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="glass-card rounded-3xl p-6">
            <h2 className="section-title text-2xl font-semibold">
              Careful crews
            </h2>
            <p className="mt-3 text-sm text-[color:var(--muted)]">
              Furniture protection, route planning, and steady communication
              from quote to move day.
            </p>
          </div>
          <div className="glass-card rounded-3xl p-6">
            <h2 className="section-title text-2xl font-semibold">
              Clear pricing
            </h2>
            <p className="mt-3 text-sm text-[color:var(--muted)]">
              Truck size, route, stairs, and specialty items are confirmed
              before the job starts.
            </p>
          </div>
          <div className="glass-card rounded-3xl p-6">
            <h2 className="section-title text-2xl font-semibold">
              Local routes
            </h2>
            <p className="mt-3 text-sm text-[color:var(--muted)]">
              Serving Alabama communities and Georgia routes for local,
              one-way, and long-distance moving needs.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="section-title text-3xl font-semibold">
            Areas served
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-[color:var(--brand-ember)]/10 bg-white/80 px-5 py-4 text-sm font-semibold text-[color:var(--ink)]"
              >
                {area}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
