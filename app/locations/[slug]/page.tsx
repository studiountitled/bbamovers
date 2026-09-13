import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  businessName,
  businessPhone,
  displayPhone,
  jsonLd,
  seoLocations,
  seoServices,
  siteUrl,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getLocation(slug: string) {
  return seoLocations.find((location) => location.slug === slug);
}

export function generateStaticParams() {
  return seoLocations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) {
    return {};
  }

  return {
    title: location.title,
    description: location.description,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title: `${location.title} | ${businessName}`,
      description: location.description,
      url: `/locations/${location.slug}`,
      images: [{ url: location.image, alt: location.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${location.title} | ${businessName}`,
      description: location.description,
      images: [location.image],
    },
  };
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) {
    notFound();
  }

  const faqs = [
    {
      question: `What moving services are available in ${location.city}?`,
      answer:
        "BBA Movers offers residential, commercial, piano, long-distance, and movers-only loading and unloading services. Availability depends on the date and route.",
    },
    {
      question: `How do I get a moving quote for ${location.city}?`,
      answer:
        "Send the move date, pickup and drop-off locations, home or office size, stairs, and specialty items through the quote form, or call 334-912-2747.",
    },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/locations/${location.slug}#moving-service`,
      name: `Moving services in ${location.city}, ${location.state}`,
      description: location.description,
      url: `${siteUrl}/locations/${location.slug}`,
      provider: {
        "@id": `${siteUrl}/#moving-company`,
        "@type": "MovingCompany",
        name: businessName,
        telephone: businessPhone,
      },
      areaServed: {
        "@type": "City",
        name: location.city,
        containedInPlace: {
          "@type": "State",
          name: location.stateName,
        },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Moving services",
        itemListElement: seoServices.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.shortTitle,
            url: `${siteUrl}/services/${service.slug}`,
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Service Areas",
          item: `${siteUrl}/locations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: location.title,
          item: `${siteUrl}/locations/${location.slug}`,
        },
      ],
    },
    jsonLd.faq(faqs),
  ];

  return (
    <main className="page-bg min-h-screen px-6 py-10 sm:px-10 lg:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mx-auto w-full max-w-6xl">
        <nav aria-label="Breadcrumb">
          <Link
            href="/locations"
            className="outline-button inline-flex rounded-full px-4 py-2 text-sm font-semibold"
          >
            All service areas
          </Link>
        </nav>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Montgomery-based moving company
            </p>
            <h1 className="section-title mt-4 text-4xl font-semibold text-[color:var(--ink)] sm:text-6xl">
              {location.title}
            </h1>
            <p className="mt-5 text-[color:var(--muted)]">{location.intro}</p>
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
            src={location.image}
            alt={`${businessName} movers serving ${location.city}, ${location.state}`}
            width={900}
            height={640}
            className="h-80 w-full rounded-3xl object-cover shadow-[0_18px_40px_rgba(142,47,31,0.18)]"
            priority
          />
        </section>

        <section className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-title text-3xl font-semibold">
              Moving help available in {location.city}
            </h2>
            <div className="mt-5 grid gap-3">
              {seoServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-2xl border border-[color:var(--brand-ember)]/10 bg-white/80 px-5 py-4 font-semibold text-[color:var(--ink)]"
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="section-title text-3xl font-semibold">
              Plan a smoother move
            </h2>
            <ul className="mt-5 grid gap-4">
              {location.planning.map((item) => (
                <li
                  key={item}
                  className="border-l-4 border-[color:var(--brand-tangerine)] pl-4 text-[color:var(--muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-[color:var(--muted)]">
              Final pricing depends on the selected service, truck size, route,
              access, stairs, and specialty items. Confirm those details before
              move day.
            </p>
          </div>
        </section>

        <section className="mt-14 border-t border-[color:var(--brand-ember)]/10 pt-10">
          <h2 className="section-title text-3xl font-semibold">
            {location.city} moving questions
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-[color:var(--brand-ember)]/10 bg-white/80 p-6"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
