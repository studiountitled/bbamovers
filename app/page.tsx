import Image from "next/image";
import QuoteForm from "./components/QuoteForm";

const services = [
  {
    title: "Residential Moving",
    copy: "Careful packing, clear timelines, and respectful crews for homes and apartments.",
  },
  {
    title: "Commercial Moving",
    copy: "After-hours and weekend availability to keep your business running.",
  },
  {
    title: "Long Distance",
    copy: "Coordinated transport across Alabama, Georgia, and beyond with tracked updates.",
  },
];

const processSteps = [
  {
    title: "Tell us about the move",
    copy: "Share your dates, size, and any special items for a fast, accurate quote.",
  },
  {
    title: "We build your plan",
    copy: "We handle logistics, timing, and crew size so nothing gets missed.",
  },
  {
    title: "Move day, done right",
    copy: "A focused team that protects your space and delivers on schedule.",
  },
];

const stats = [
  { label: "Avg. Quote Time", value: "15 min" },
  { label: "Moves Coordinated", value: "2,300+" },
  { label: "Returning Clients", value: "62%" },
  { label: "Damage-Free Rate", value: "98%" },
];

const pricing = [
  {
    title: "10 ft Truck",
    price: "$150 + $5/mile",
    note: "Recommended for studio moves",
  },
  {
    title: "15 ft Truck",
    price: "$300 + $5/mile",
    note: "Recommended for 1BR moves",
  },
  {
    title: "20 ft Truck",
    price: "$450 + $4/mile",
    note: "Recommended for 2BR moves",
  },
  {
    title: "26 ft Truck",
    price: "$600 + $3/mile",
    note: "Recommended for 3+ BR moves",
  },
];

const pricingNotes = [
  "Pricing applies to one-way trips.",
  "Mileage is charged for the distance between pickup and drop-off locations.",
  "$50 per floor for downstairs stairs.",
  "$100 per floor for upstairs stairs.",
  "Free disassembly included.",
];

const reviews = [
  {
    name: "Tanya R.",
    detail: "Birmingham, AL",
    quote:
      "Fast crew, no surprises. Everything arrived exactly how it left, which is all we wanted.",
  },
  {
    name: "Marcus J.",
    detail: "Montgomery, AL",
    quote:
      "They handled our office move overnight. We opened the next morning with zero downtime.",
  },
  {
    name: "Kylie S.",
    detail: "Columbus, GA",
    quote:
      "Great communication and the price matched the quote. We felt taken care of the whole time.",
  },
];

const galleryImages = [
  "/gallery-5.jpg",
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-10.jpg",
  "/gallery-3.jpg",
];

const faqs = [
  {
    question: "How fast can I get a quote?",
    answer:
      "Most quotes are delivered the same day. If we need more detail, we’ll call within a few hours.",
  },
  {
    question: "Do you serve areas outside Alabama?",
    answer:
      "Yes. We handle long-distance moves across the Southeast, including Georgia and neighboring states.",
  },
  {
    question: "What if my date changes?",
    answer:
      "We’ll adjust your schedule based on availability. The earlier we know, the more options we can offer.",
  },
];

export default function Home() {
  return (
    <div className="page-bg min-h-screen">
      <div className="px-6 pb-16 pt-8 sm:px-10 lg:px-16">
        <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--brand-ember)]/10">
              <Image
                src="/logo.png"
                alt="BBA Movers logo"
                width={54}
                height={54}
                priority
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                BBA Movers
              </p>
              <p className="text-xs text-[color:var(--muted)]">
                Alabama &amp; Georgia
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-4 text-sm text-[color:var(--muted)] md:flex">
            <span>TETRIS WORLD CHAMPIONS</span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--brand-ember)]/40" />
            <span>Residential, Commercial &amp; Long Distance</span>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a
              className="outline-button rounded-xl px-4 py-2 text-sm font-semibold"
              href="tel:13349122747"
            >
              Call 334 912 2747
            </a>
            <a
              className="cta-button rounded-xl px-5 py-2 text-sm font-semibold"
              href="#quote"
            >
              Request a Quote
            </a>
          </div>
        </header>

        <main className="mx-auto mt-10 w-full max-w-6xl space-y-24">
          <section className="relative overflow-hidden rounded-[32px] border border-[color:var(--brand-ember)]/10 bg-transparent p-8 shadow-[0_20px_50px_rgba(142,47,31,0.12)] lg:p-10">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,247,223,0.75),rgba(255,214,115,0.6),rgba(255,255,255,0.8))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,210,77,0.2),transparent_60%)]" />
            </div>
            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="text-[17px] sm:text-[18px]">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Alabama moving company
                </p>
                <h1 className="section-title mt-4 text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-6xl">
                  Moving day, but make it easy.
                </h1>
                <p className="mt-4 max-w-xl text-[18px] text-[color:var(--muted)] sm:text-[19px]">
                  <span className="text-[color:var(--ink)]">
                    We turn moving chaos into calm.
                  </span>
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="cta-button rounded-full px-6 py-3 text-sm font-semibold"
                    href="#quote"
                  >
                    Request a Quote
                  </a>
                  <a
                    className="outline-button rounded-full px-6 py-3 text-sm font-semibold"
                    href="#contact"
                  >
                    Contact Us
                  </a>
                </div>
                <p className="mt-6 text-base font-semibold text-[color:var(--accent)]">
                  Same-day availability · No hidden fees · Call 334 912 2747
                </p>
              </div>

              <div className="glass-card rounded-[28px] p-6">
                <div className="rounded-2xl bg-[color:var(--brand-ember)]/10 p-6 text-[16.5px] sm:text-[17px]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    Tetris World Champions
                  </p>
                  <h2 className="section-title mt-4 text-3xl font-semibold text-[color:var(--ink)] sm:text-4xl">
                    We pack like a puzzle.
                  </h2>
                  <p className="mt-3 text-base text-[color:var(--muted)]">
                    Think tight stacks, padded corners, and a crew that treats
                    your stuff like it’s their grandma’s china.
                  </p>
                  <div className="mt-6 rounded-2xl border border-white/50 bg-white/80 p-4 text-base text-[color:var(--muted)]">
                    Based in Alabama and serving Georgia too. We bring the
                    truck, you bring the snacks.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-10 lg:mt-12">
              <Image
                src="/hero-move.jpg"
                alt="BBA Movers team helping a customer move"
                width={1400}
                height={720}
                className="h-64 w-full rounded-[28px] object-cover shadow-[0_18px_40px_rgba(142,47,31,0.18)] sm:h-72 lg:h-80"
                priority
              />
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="glass-card rounded-3xl p-6">
                <h3 className="section-title text-2xl font-semibold text-[color:var(--ink)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  {service.copy}
                </p>
                <div className="mt-4 aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[color:var(--brand-ember)]/10">
                  <Image
                    src={
                      service.title === "Residential Moving"
                        ? "/gallery-1.jpg"
                        : service.title === "Commercial Moving"
                          ? "/gallery-2.jpg"
                          : "/gallery-4.jpg"
                    }
                    alt={service.title}
                    width={600}
                    height={360}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </section>

          <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                How it works
              </p>
              <h2 className="section-title mt-4 text-3xl font-semibold">
                Clear steps, good energy.
              </h2>
              <p className="mt-4 text-sm text-[color:var(--muted)]">
                You’ll always know who’s handling your move, what’s next, and
                how to reach us if anything changes.
              </p>
            </div>
            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-3xl border border-[color:var(--brand-ember)]/10 bg-white/80 p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand-tangerine)]/20 text-sm font-semibold text-[color:var(--accent)]">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">
                      {step.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="pricing">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Pricing
                </p>
                <h2 className="section-title mt-3 text-3xl font-semibold">
                  Simple packages for one-way trips.
                </h2>
                <p className="mt-3 max-w-xl text-sm text-[color:var(--muted)]">
                  Choose the truck size that fits your move. We’ll confirm the
                  final rate once we map your route and timing.
                </p>
              </div>
              <a
                className="cta-button rounded-full px-4 py-2 text-sm font-semibold"
                href="#quote"
              >
                Request a Quote
              </a>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-4">
              {pricing.map((item) => (
                <div
                  key={item.title}
                  className="glass-card flex h-full flex-col rounded-3xl p-6"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    {item.title}
                  </p>
                  <p className="section-title mt-3 text-2xl font-semibold text-[color:var(--ink)]">
                    {item.price}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-2 text-sm text-[color:var(--muted)] sm:grid-cols-2">
              {pricingNotes.map((note) => (
                <div key={note} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--brand-tangerine)]" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="photos">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Move highlights
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((src, index) => (
                <div
                  key={`photo-${index}`}
                  className="relative h-56 overflow-hidden rounded-2xl bg-[color:var(--brand-ember)]/10"
                >
                  <Image
                    src={src}
                    alt={`BBA Movers gallery ${index + 1}`}
                    width={900}
                    height={700}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          <section id="reviews">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Reviews
                </p>
                <h2 className="section-title mt-3 text-3xl font-semibold">
                  Real people, real happy moves.
                </h2>
              </div>
              <a
                className="cta-button rounded-full px-4 py-2 text-sm font-semibold"
                href="#quote"
              >
                Get my quote
              </a>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="glass-card flex h-full flex-col rounded-3xl p-6"
                >
                  <p className="text-sm text-[color:var(--muted)]">
                    “{review.quote}”
                  </p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-[color:var(--ink)]">
                      {review.name}
                    </p>
                    <p className="text-xs text-[color:var(--muted)]">
                      {review.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="quote">
            <div className="glass-card grid gap-10 rounded-[32px] p-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Request a quote
                </p>
                <h2 className="section-title mt-4 text-3xl font-semibold">
                  Let’s map out your move.
                </h2>
                <p className="mt-4 text-sm text-[color:var(--muted)]">
                  Share a few details and we’ll confirm timing, pricing, and the
                  best crew size. No surprises, no awkward upsells.
                </p>
                <div className="mt-6 grid gap-3 text-sm text-[color:var(--muted)]">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--brand-tangerine)]" />
                    Residential, commercial &amp; long distance
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--brand-tangerine)]" />
                    Based in Alabama, serving Georgia
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--brand-tangerine)]" />
                    Response in 1 business day
                  </div>
                </div>
              </div>

              <QuoteForm />
            </div>
          </section>

          <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                FAQ
              </p>
              <h2 className="section-title mt-3 text-3xl font-semibold">
                Questions we hear all the time.
              </h2>
            </div>
            <div className="grid gap-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-[color:var(--brand-ember)]/10 bg-white/80 p-6"
                >
                  <p className="text-base font-semibold text-[color:var(--ink)]">
                    {faq.question}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <footer
        id="contact"
        className="border-t border-[color:var(--brand-ember)]/10 bg-white/80"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
              BBA Movers
            </p>
            <p className="text-xs text-[color:var(--muted)]">
              TETRIS WORLD CHAMPIONS · Residential, Commercial &amp; Long
              Distance
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[color:var(--muted)]">
            <span>☎️ 334 912 2747</span>
            <span>📍 Alabama, Georgia</span>
          </div>
          <a
            className="cta-button rounded-full px-5 py-2 text-sm font-semibold"
            href="#quote"
          >
            Request a Quote
          </a>
        </div>
        <div className="border-t border-[color:var(--brand-ember)]/10">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-2 px-6 py-4 text-xs text-[color:var(--muted)] sm:px-10 lg:px-16">
            <span>Built by</span>
            <a
              className="underline decoration-[color:var(--brand-ember)]/40 underline-offset-4"
              href="https://prairies.studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              prairies.studio
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 md:hidden">
        <div className="glass-card flex items-center justify-between gap-3 rounded-full px-4 py-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
              Ready to move?
            </p>
            <p className="text-sm font-semibold text-[color:var(--ink)]">
              Get your quote today
            </p>
          </div>
          <a
            className="cta-button rounded-full px-4 py-2 text-sm font-semibold"
            href="#quote"
          >
            Quote
          </a>
        </div>
      </div>
    </div>
  );
}
