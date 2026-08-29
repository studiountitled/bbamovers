export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.bbamovers.com";

export const businessName = "BBA Movers";
export const businessPhone = "+1-334-912-2747";
export const displayPhone = "334 912 2747";

export const serviceAreas = [
  "Montgomery, AL",
  "Auburn, AL",
  "Birmingham, AL",
  "Tuskegee, AL",
  "Columbus, GA",
  "Atlanta, GA",
  "Alabama",
  "Georgia",
];

export const seoServices = [
  {
    title: "Residential Moving in Alabama",
    shortTitle: "Residential Moving",
    slug: "residential-moving",
    description:
      "Home and apartment moving help for local Alabama moves, with careful loading, furniture protection, disassembly, and same-day quote support.",
    image: "/gallery-3.jpg",
  },
  {
    title: "Commercial Moving Services",
    shortTitle: "Commercial Moving",
    slug: "commercial-moving",
    description:
      "Office, retail, and small-business moving services with evening and weekend availability to help reduce downtime.",
    image: "/gallery-2.jpg",
  },
  {
    title: "Long Distance Moving from Alabama to Georgia",
    shortTitle: "Long Distance Moving",
    slug: "long-distance-moving",
    description:
      "One-way and long-distance moving services across Alabama, Georgia, and nearby Southeast routes with clear pricing and route planning.",
    image: "/gallery-12.jpg",
  },
  {
    title: "Piano Moving Services",
    shortTitle: "Piano Moving",
    slug: "piano-moving",
    description:
      "Careful piano moving for upright, baby grand, and specialty pianos within the same building or to a new location.",
    image: "/gallery-11.jpg",
  },
  {
    title: "Movers Only Loading and Unloading",
    shortTitle: "Movers Only",
    slug: "movers-only-loading-unloading",
    description:
      "Labor-only moving help when you already have a rental truck, trailer, storage unit, or container and need loading or unloading support.",
    image: "/gallery-13.jpg",
  },
];

export const jsonLd = {
  movingCompany: {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${siteUrl}/#moving-company`,
    name: businessName,
    url: siteUrl,
    telephone: businessPhone,
    image: `${siteUrl}/hero-move.jpg`,
    logo: `${siteUrl}/logo.png`,
    priceRange: "$$",
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    makesOffer: seoServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${siteUrl}/services/${service.slug}`,
      },
    })),
    sameAs: [],
  },
  faq: (faqs: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }),
};
