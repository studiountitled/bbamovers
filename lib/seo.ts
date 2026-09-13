export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bbamovers.com";

export const businessName = "BBA Movers";
export const businessPhone = "+1-334-912-2747";
export const displayPhone = "334 912 2747";
export const thumbtackUrl =
  "https://www.thumbtack.com/al/montgomery/shed-moving/bba-movers-movers-bba/service/550005647532138507";

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

type Faq = {
  question: string;
  answer: string;
};

export type SeoService = {
  title: string;
  shortTitle: string;
  slug: string;
  description: string;
  image: string;
  intro: string;
  included: string[];
  tips: string[];
  faqs: Faq[];
};

export const seoServices: SeoService[] = [
  {
    title: "Residential Moving in Alabama",
    shortTitle: "Residential Moving",
    slug: "residential-moving",
    description:
      "Home and apartment movers based in Montgomery and serving Alabama, with careful loading, furniture protection, disassembly, and clear pricing.",
    image: "/gallery-3.jpg",
    intro:
      "Moving to a new home should feel organized from the first call. BBA Movers plans the truck size, route, stairs, furniture needs, and crew before move day, then handles loading and unloading with care.",
    included: [
      "Home, apartment, condo, and storage-unit moves",
      "Furniture wrapping and moving blankets at no extra cost",
      "Free furniture disassembly when needed for the move",
      "Loading, transportation, unloading, and room placement",
    ],
    tips: [
      "Share both addresses and your preferred date when requesting a quote.",
      "Mention stairs, elevators, tight hallways, and unusually heavy items in advance.",
      "Pack loose belongings in closed boxes or bags before the crew arrives.",
    ],
    faqs: [
      {
        question: "Does BBA Movers handle apartment moves?",
        answer:
          "Yes. Share elevator access, floor numbers, parking instructions, and building time restrictions so the crew can plan accurately.",
      },
      {
        question: "Is furniture disassembly included?",
        answer:
          "Disassembly needed for the move is free. Assembly for beds, washing machines, and dryers is $50 per item; other furniture assembly is free.",
      },
    ],
  },
  {
    title: "Commercial Moving Services",
    shortTitle: "Commercial Moving",
    slug: "commercial-moving",
    description:
      "Office, retail, and small-business movers serving Montgomery and nearby Alabama cities, with evening and weekend availability by request.",
    image: "/gallery-2.jpg",
    intro:
      "BBA Movers coordinates small-business, office, and retail moves around your operating schedule. We plan access, equipment, furniture, and loading order so the items needed first can come off the truck first.",
    included: [
      "Office furniture, boxed records, fixtures, and equipment",
      "Loading plans organized around the new workspace",
      "Evening and weekend availability by request",
      "Clear communication with one move-day contact",
    ],
    tips: [
      "Label boxes by department or destination room.",
      "Confirm loading-zone and elevator access at both properties.",
      "Move sensitive records, cash, and employee devices under your own supervision.",
    ],
    faqs: [
      {
        question: "Can you move a business outside normal working hours?",
        answer:
          "Evening and weekend scheduling may be available. Include your preferred time window in the quote request so availability can be confirmed.",
      },
      {
        question: "How should we prepare office equipment?",
        answer:
          "Disconnect, label, and securely pack electronics before arrival. Mention bulky or unusually heavy equipment when requesting the quote.",
      },
    ],
  },
  {
    title: "Long Distance Moving from Alabama to Georgia",
    shortTitle: "Long Distance Moving",
    slug: "long-distance-moving",
    description:
      "One-way and long-distance moving across Alabama, Georgia, and nearby Southeast routes with truck-size planning and clear mileage details.",
    image: "/gallery-12.jpg",
    intro:
      "For moves between cities or across state lines, the route matters as much as the truck. BBA Movers confirms pickup, drop-off, mileage, truck size, access details, and specialty items before finalizing the plan.",
    included: [
      "One-way routes across Alabama, Georgia, and nearby states",
      "Truck-size planning based on the amount being moved",
      "Furniture protection, loading, transportation, and unloading",
      "Pickup and delivery scheduling coordinated before move day",
    ],
    tips: [
      "Provide complete pickup and drop-off addresses for mileage planning.",
      "Keep medication, documents, valuables, and overnight essentials with you.",
      "Confirm everything will fit the selected truck before move day.",
    ],
    faqs: [
      {
        question: "How are long-distance mileage fees calculated?",
        answer:
          "Mileage fees of $0-$3 per mile might be charged for the distance from the pickup to the drop-off location in some cases. Your route is reviewed before pricing is confirmed.",
      },
      {
        question: "What if everything does not fit in the selected truck?",
        answer:
          "An additional trip may be needed and charged if items remain after the truck is full. BBA Movers discounts subsequent trips.",
      },
    ],
  },
  {
    title: "Piano Moving Services",
    shortTitle: "Piano Moving",
    slug: "piano-moving",
    description:
      "Piano movers serving Montgomery and surrounding routes for upright, baby grand, and specialty piano moves between rooms or addresses.",
    image: "/gallery-11.jpg",
    intro:
      "Pianos require a different plan from standard furniture. BBA Movers reviews the piano type, path, steps, turns, doorways, and destination before confirming the crew and equipment for the job.",
    included: [
      "Upright, baby grand, and specialty piano moves",
      "Same-building and address-to-address relocation",
      "Path and access review before scheduling",
      "Protective handling during loading and transport",
    ],
    tips: [
      "Send photos of the piano and the full path at both locations.",
      "Measure narrow doors, hallways, and sharp turns.",
      "Mention every exterior and interior step before the quote is finalized.",
    ],
    faqs: [
      {
        question: "What details are needed for a piano moving quote?",
        answer:
          "Share the piano type, pickup and delivery addresses, photos, steps, floor levels, and any narrow turns or doorways.",
      },
      {
        question: "Can you move a piano within the same building?",
        answer:
          "Yes. BBA Movers handles room-to-room and floor-to-floor piano moves when the access path is suitable and reviewed in advance.",
      },
    ],
  },
  {
    title: "Movers Only Loading and Unloading",
    shortTitle: "Movers Only",
    slug: "movers-only-loading-unloading",
    description:
      "Labor-only movers for rental trucks, trailers, storage units, and containers in Montgomery and surrounding Alabama communities.",
    image: "/gallery-13.jpg",
    intro:
      "Already have the truck or container? BBA Movers can provide the moving labor. The crew loads or unloads your rental truck, trailer, storage unit, or moving container while you remain responsible for transportation.",
    included: [
      "Loading or unloading for common rental-truck sizes",
      "Storage-unit and portable-container moving help",
      "Furniture disassembly when needed for loading",
      "Careful use of available truck space",
    ],
    tips: [
      "Have the truck or container parked and ready before the crew arrives.",
      "Reserve moving blankets and tie-downs with your rental provider.",
      "Tell the crew which boxes and furniture need to be unloaded first.",
    ],
    faqs: [
      {
        question: "Do movers-only rates include a truck?",
        answer:
          "No. Movers-only service provides labor for loading or unloading. You supply and drive the truck, trailer, or container.",
      },
      {
        question: "Can the crew help at a storage unit?",
        answer:
          "Yes. BBA Movers can load from or unload into storage units when access and timing are arranged in advance.",
      },
    ],
  },
];

export type SeoLocation = {
  city: string;
  state: string;
  stateName: string;
  slug: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  planning: string[];
};

export const seoLocations: SeoLocation[] = [
  {
    city: "Montgomery",
    state: "AL",
    stateName: "Alabama",
    slug: "montgomery-al",
    title: "Movers in Montgomery, AL",
    description:
      "Montgomery movers for home, apartment, office, piano, and movers-only jobs. Call BBA Movers at 334-912-2747 for a clear moving quote.",
    intro:
      "BBA Movers is based in Montgomery and helps local households and businesses with moves across the city, throughout Alabama, and into Georgia. Choose a full truck package or hire the crew for loading and unloading only.",
    image: "/gallery-5.jpg",
    planning: [
      "Share apartment floor, elevator, and parking details before move day.",
      "For moves outside Montgomery, provide both addresses so mileage can be reviewed.",
      "Mention pianos, safes, exercise equipment, and other heavy items in the quote request.",
    ],
  },
  {
    city: "Auburn",
    state: "AL",
    stateName: "Alabama",
    slug: "auburn-al",
    title: "Movers in Auburn, AL",
    description:
      "Moving help in Auburn, Alabama for apartments, homes, offices, rental trucks, and long-distance routes. Request a quote from BBA Movers.",
    intro:
      "BBA Movers serves Auburn moves that need a full truck and crew as well as labor-only loading or unloading. The team plans around stairs, building access, truck size, and the route before pricing is confirmed.",
    image: "/gallery-10.jpg",
    planning: [
      "Confirm apartment move-in windows and key or elevator access early.",
      "Pack loose items into closed boxes or bags before the movers arrive.",
      "Send the destination address for one-way and out-of-town route planning.",
    ],
  },
  {
    city: "Birmingham",
    state: "AL",
    stateName: "Alabama",
    slug: "birmingham-al",
    title: "Movers in Birmingham, AL",
    description:
      "Birmingham moving services for residential, commercial, piano, and long-distance moves with truck packages and movers-only options.",
    intro:
      "BBA Movers provides scheduled moving help for Birmingham homes, apartments, offices, and storage units. Every quote considers the route, access, truck size, stairs, and specialty items so the move can be planned clearly.",
    image: "/gallery-8.jpg",
    planning: [
      "Reserve loading areas and elevators at both buildings when required.",
      "Tell the team about steep drives, long carries, or limited truck access.",
      "Label office and household boxes by their destination room.",
    ],
  },
  {
    city: "Tuskegee",
    state: "AL",
    stateName: "Alabama",
    slug: "tuskegee-al",
    title: "Movers in Tuskegee, AL",
    description:
      "Tuskegee movers for local homes, apartments, storage units, rental-truck loading, and routes across Alabama and Georgia.",
    intro:
      "BBA Movers helps Tuskegee customers with local and one-way moves, including full truck packages and movers-only labor. Share the size of the move and access at both locations for an accurate plan.",
    image: "/gallery-1.jpg",
    planning: [
      "List large furniture and appliances so the right truck size can be discussed.",
      "Share all indoor and outdoor stairs before receiving final pricing.",
      "Keep important documents, valuables, and medication with you during the move.",
    ],
  },
  {
    city: "Columbus",
    state: "GA",
    stateName: "Georgia",
    slug: "columbus-ga",
    title: "Movers in Columbus, GA",
    description:
      "Moving services in Columbus, Georgia for homes, apartments, offices, pianos, and one-way routes from Alabama. Get a BBA Movers quote.",
    intro:
      "BBA Movers serves Columbus as part of its Alabama and Georgia route network. Customers can book a truck-and-crew move or hire movers only for a rental truck, trailer, container, or storage unit.",
    image: "/gallery-12.jpg",
    planning: [
      "Provide Alabama-to-Georgia pickup and drop-off addresses for route planning.",
      "Confirm building access, stairs, and parking restrictions at both stops.",
      "Choose a truck size that can hold the full move to avoid an additional trip.",
    ],
  },
  {
    city: "Atlanta",
    state: "GA",
    stateName: "Georgia",
    slug: "atlanta-ga",
    title: "Movers Serving Atlanta, GA",
    description:
      "Planned moving routes to and from Atlanta for Alabama households and businesses, with full-service and labor-only moving options.",
    intro:
      "BBA Movers coordinates planned routes to and from Atlanta for customers moving between Georgia and Alabama. Detailed pickup and delivery information helps the team estimate mileage, access, timing, and truck needs before move day.",
    image: "/gallery-2.jpg",
    planning: [
      "Share complete addresses and preferred arrival windows for long-distance planning.",
      "Confirm loading-zone, elevator, and building requirements before the move.",
      "Keep essentials separate in case you need them before the truck is unloaded.",
    ],
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
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montgomery",
      addressRegion: "AL",
      addressCountry: "US",
    },
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
    sameAs: [thumbtackUrl],
  },
  faq: (faqs: Faq[]) => ({
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
