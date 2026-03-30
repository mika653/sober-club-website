"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Package {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  inverted?: boolean;
  badge?: string;
}

interface Stat {
  value: string;
  label: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const stats: Stat[] = [
  { value: "20+", label: "Years of Excellence" },
  { value: "1,000+", label: "Events Executed" },
  { value: "5,000", label: "Guests Per Event" },
];

const packages: Package[] = [
  {
    name: "Shooters & Cocktail Bar",
    tagline: "The classic foundation",
    price: "From P12,500",
    features: [
      "Full bar setup & teardown",
      "Licensed bartenders",
      "Signature cocktail menu",
      "Up to 4 hours of service",
    ],
  },
  {
    name: "Cocktail Slushie Bar",
    tagline: "Frozen elegance",
    price: "From P20,000",
    features: [
      "Premium slushie machines",
      "Custom flavour pairings",
      "All-inclusive mixers",
      "Up to 5 hours of service",
    ],
  },
  {
    name: "Sangria Bar",
    tagline: "Mediterranean luxury",
    price: "From P25,000",
    features: [
      "Curated wine selection",
      "House-crafted sangria blends",
      "Seasonal fruit garnishes",
      "Up to 5 hours of service",
    ],
  },
  {
    name: "Premium Bar",
    tagline: "The pinnacle experience",
    price: "Upon Request",
    features: [
      "Bespoke cocktail curation",
      "Internationally sourced spirits",
      "Dedicated event manager",
      "Unlimited hours of service",
    ],
    inverted: true,
    badge: "SIGNATURE",
  },
];

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Elegant bar setup at a gala" },
  { src: "/images/gallery-2.jpg", alt: "Handcrafted cocktail close-up" },
  { src: "/images/gallery-3.jpg", alt: "Bartender at work during a wedding" },
  { src: "/images/gallery-4.jpg", alt: "Premium glassware arrangement" },
];

const eventTypes = [
  "Wedding",
  "Corporate Gala",
  "Private Party",
  "Birthday Celebration",
  "Debut",
  "Other",
];

const preferredPackages = [
  "Shooters & Cocktail Bar",
  "Cocktail Slushie Bar",
  "Sangria Bar",
  "Premium Bar",
  "Not Sure Yet",
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-dm text-xs tracking-[3px] uppercase"
      style={{ color: "#D4AF37" }}
    >
      {children}
    </span>
  );
}

function Divider() {
  return (
    <div
      className="w-10 h-px mt-3 mb-6"
      style={{ backgroundColor: "#D4AF37" }}
    />
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function PremiumElegance() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    guestCount: "",
    preferredPackage: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleFormChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Packages", href: "#packages" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  // Shared input / select style
  const fieldBase: React.CSSProperties = {
    backgroundColor: "#221E18",
    color: "#F5F0E8",
    borderColor: "#3A3428",
    borderRadius: "6px",
  };

  return (
    <div
      className="min-h-screen font-dm antialiased"
      style={{ backgroundColor: "#1A1714", color: "#F5F0E8" }}
    >
      {/* ------------------------------------------------------------------ */}
      {/* HEADER                                                              */}
      {/* ------------------------------------------------------------------ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
        style={{ backgroundColor: "rgba(26, 23, 20, 0.92)", backdropFilter: "blur(12px)" }}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 select-none">
          <span
            className="font-playfair text-lg font-semibold tracking-[2px] uppercase"
            style={{ color: "#D4AF37" }}
          >
            Sober Club
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-dm text-sm tracking-wide transition-colors duration-200"
              style={{ color: "#9A8E7E" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#F5F0E8")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#9A8E7E")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Book Now CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 font-dm text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-85"
            style={{
              backgroundColor: "#D4AF37",
              color: "#110E0A",
              borderRadius: "4px",
            }}
          >
            Book Now
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-1"
            style={{ color: "#F5F0E8" }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-8 md:hidden"
          style={{ backgroundColor: "#110E0A" }}
        >
          <nav className="flex flex-col gap-6 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-playfair text-2xl font-medium"
                style={{ color: "#F5F0E8" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="mt-auto inline-flex items-center justify-center px-6 py-3 font-dm text-sm font-medium tracking-wide"
            style={{
              backgroundColor: "#D4AF37",
              color: "#110E0A",
              borderRadius: "4px",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-20"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-elegant.jpg"
            alt="Elegant mobile bar setup"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Multi-layer dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(17,14,10,0.88) 0%, rgba(26,23,20,0.70) 50%, rgba(17,14,10,0.82) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 py-20">
          {/* Badge */}
          <div className="mb-8">
            <span
              className="inline-block font-dm text-xs tracking-[3px] uppercase px-4 py-2"
              style={{
                color: "#D4AF37",
                backgroundColor: "rgba(212,175,55,0.12)",
                border: "1px solid rgba(212,175,55,0.30)",
                borderRadius: "4px",
              }}
            >
              Est. 2004 · Quezon City
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-playfair font-semibold leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "#F5F0E8" }}
          >
            Elevate
            <br />
            Your
            <br />
            <span style={{ color: "#D4AF37" }}>Celebration.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="font-dm text-base md:text-lg leading-relaxed max-w-md mb-10"
            style={{ color: "#9A8E7E" }}
          >
            Bespoke mobile bar experiences crafted for weddings, galas, and
            private events across Metro Manila. Every pour, perfected.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 font-dm text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-85"
              style={{
                backgroundColor: "#D4AF37",
                color: "#110E0A",
                borderRadius: "4px",
              }}
            >
              Reserve Now
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center px-8 py-3.5 font-dm text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-85"
              style={{
                backgroundColor: "#221E18",
                color: "#D4AF37",
                border: "1px solid rgba(212,175,55,0.35)",
                borderRadius: "4px",
              }}
            >
              Our Packages
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "#8A7E6E" }}
        >
          <span className="font-dm text-xs tracking-[2px] uppercase">Scroll</span>
          <div
            className="w-px h-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(212,175,55,0.6), transparent)",
            }}
          />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* STATS BAR                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section style={{ backgroundColor: "#221E18" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x"
            style={{ borderColor: "#3A3428" }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center px-6 py-4 sm:py-0 first:pt-0 last:pb-0 sm:first:pt-0 sm:last:pb-0"
              >
                <span
                  className="font-playfair font-semibold leading-none mb-2"
                  style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#D4AF37" }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-dm text-xs tracking-[2px] uppercase"
                  style={{ color: "#8A7E6E" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* ABOUT                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section id="about" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <SectionLabel>The Experience</SectionLabel>
              <Divider />
              <h2
                className="font-playfair font-semibold leading-tight mb-6"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#F5F0E8" }}
              >
                More Than
                <br />
                <span style={{ color: "#D4AF37" }}>Mixology.</span>
              </h2>
              <p
                className="font-dm text-base leading-relaxed mb-5"
                style={{ color: "#9A8E7E" }}
              >
                Since 2004, Sober Club has been redefining what a mobile bar
                can be. We don&apos;t just serve drinks — we orchestrate an
                experience that becomes an integral part of your event&apos;s story.
              </p>
              <p
                className="font-dm text-base leading-relaxed mb-8"
                style={{ color: "#9A8E7E" }}
              >
                Each setup is tailored to your venue, your guests, and your
                vision. From intimate private dinners to grand gala evenings,
                our bartenders bring theatrical craftsmanship and flawless
                hospitality to every pour.
              </p>

              {/* Event pills */}
              <div className="flex flex-wrap gap-2">
                {["Weddings", "Galas", "Corporate", "Private"].map((tag) => (
                  <span
                    key={tag}
                    className="font-dm text-xs tracking-wide px-4 py-2"
                    style={{
                      backgroundColor: "#221E18",
                      color: "#D4AF37",
                      border: "1px solid rgba(212,175,55,0.25)",
                      borderRadius: "4px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div
              className="relative aspect-[4/5] w-full overflow-hidden"
              style={{ borderRadius: "8px" }}
            >
              <Image
                src="/images/about-elegant.jpg"
                alt="Sober Club bartender at an elegant event"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle gold frame accent */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.15)",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PACKAGES                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="packages"
        className="py-20 lg:py-28"
        style={{ backgroundColor: "#221E18" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-14">
            <SectionLabel>Curated Packages</SectionLabel>
            <Divider />
            <h2
              className="font-playfair font-semibold leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#F5F0E8" }}
            >
              Select Your{" "}
              <span style={{ color: "#D4AF37" }}>Experience.</span>
            </h2>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="relative flex flex-col p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: pkg.inverted ? "#D4AF37" : "#1A1714",
                  borderRadius: "8px",
                  border: pkg.inverted
                    ? "none"
                    : "1px solid rgba(212,175,55,0.15)",
                }}
              >
                {/* Signature badge */}
                {pkg.badge && (
                  <div className="mb-4">
                    <span
                      className="font-dm text-xs tracking-[2px] uppercase px-3 py-1"
                      style={{
                        backgroundColor: "#110E0A",
                        color: "#D4AF37",
                        borderRadius: "4px",
                      }}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {!pkg.badge && (
                  <div className="mb-4 h-6" />
                )}

                {/* Package name */}
                <h3
                  className="font-playfair font-semibold text-lg leading-snug mb-1"
                  style={{ color: pkg.inverted ? "#110E0A" : "#F5F0E8" }}
                >
                  {pkg.name}
                </h3>

                {/* Tagline */}
                <p
                  className="font-dm text-xs mb-4"
                  style={{ color: pkg.inverted ? "rgba(17,14,10,0.65)" : "#8A7E6E" }}
                >
                  {pkg.tagline}
                </p>

                {/* Divider */}
                <div
                  className="w-8 h-px mb-5"
                  style={{
                    backgroundColor: pkg.inverted
                      ? "rgba(17,14,10,0.30)"
                      : "rgba(212,175,55,0.35)",
                  }}
                />

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="font-dm text-sm flex items-start gap-2"
                      style={{ color: pkg.inverted ? "#1A1714" : "#9A8E7E" }}
                    >
                      <span
                        className="mt-1.5 shrink-0 w-1 h-1 rounded-full"
                        style={{
                          backgroundColor: pkg.inverted
                            ? "#1A1714"
                            : "#D4AF37",
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div
                  className="font-playfair font-semibold text-xl mb-5"
                  style={{ color: pkg.inverted ? "#110E0A" : "#D4AF37" }}
                >
                  {pkg.price}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full py-2.5 font-dm text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-85"
                  style={{
                    backgroundColor: pkg.inverted ? "#110E0A" : "transparent",
                    color: pkg.inverted ? "#D4AF37" : "#D4AF37",
                    border: pkg.inverted
                      ? "none"
                      : "1px solid rgba(212,175,55,0.45)",
                    borderRadius: "4px",
                  }}
                >
                  Inquire Now
                </a>
              </div>
            ))}
          </div>

          {/* Fine print */}
          <p
            className="text-center font-dm text-xs mt-8"
            style={{ color: "#8A7E6E" }}
          >
            All packages are customisable. Pricing varies by event size, location, and duration.
            Contact us for a tailored quote.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* GALLERY                                                             */}
      {/* ------------------------------------------------------------------ */}
      <section id="gallery" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-12">
            <SectionLabel>Portfolio</SectionLabel>
            <Divider />
            <h2
              className="font-playfair font-semibold leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#F5F0E8" }}
            >
              Moments We&apos;ve{" "}
              <span style={{ color: "#D4AF37" }}>Crafted.</span>
            </h2>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={img.src}
                className="relative overflow-hidden group"
                style={{
                  borderRadius: "8px",
                  aspectRatio: index % 3 === 0 ? "5/4" : "4/3",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(17,14,10,0.80) 0%, transparent 60%)",
                  }}
                >
                  <span
                    className="font-dm text-sm tracking-wide"
                    style={{ color: "#D4AF37" }}
                  >
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* TESTIMONIALS                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "#221E18" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <SectionLabel>Testimonials</SectionLabel>
          <Divider />

          {/* Decorative quote mark */}
          <span
            className="font-playfair block text-7xl leading-none mb-6 select-none"
            style={{ color: "rgba(212,175,55,0.20)" }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <blockquote>
            <p
              className="font-playfair text-xl md:text-2xl font-medium leading-relaxed mb-8"
              style={{ color: "#F5F0E8" }}
            >
              The cocktails were absolutely exquisite — every guest couldn&apos;t
              stop talking about the bar. Sober Club elevated our wedding
              reception into something truly unforgettable. The team was
              professional, elegant, and genuinely passionate about their craft.
            </p>
            <footer>
              <cite
                className="font-dm text-sm tracking-[2px] uppercase not-italic"
                style={{ color: "#D4AF37" }}
              >
                Camille &amp; Rafael Santos
              </cite>
              <p
                className="font-dm text-xs mt-1"
                style={{ color: "#8A7E6E" }}
              >
                Wedding Reception, Quezon City — 2024
              </p>
            </footer>
          </blockquote>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block rounded-full"
                style={{
                  width: i === 0 ? "20px" : "6px",
                  height: "6px",
                  backgroundColor: i === 0 ? "#D4AF37" : "rgba(212,175,55,0.25)",
                  transition: "width 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* INQUIRY FORM                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: copy */}
            <div className="lg:sticky lg:top-28">
              <SectionLabel>Reserve Your Date</SectionLabel>
              <Divider />
              <h2
                className="font-playfair font-semibold leading-tight mb-6"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#F5F0E8" }}
              >
                Make Your Event{" "}
                <span style={{ color: "#D4AF37" }}>Extraordinary.</span>
              </h2>
              <p
                className="font-dm text-base leading-relaxed mb-8"
                style={{ color: "#9A8E7E" }}
              >
                Tell us about your event and we&apos;ll get back to you within 24
                hours with a personalised proposal tailored to your vision.
              </p>

              {/* Contact info */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <span
                    className="w-9 h-9 flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "rgba(212,175,55,0.10)",
                      borderRadius: "4px",
                      color: "#D4AF37",
                    }}
                  >
                    <Phone size={15} />
                  </span>
                  <div>
                    <p
                      className="font-dm text-xs tracking-[1px] uppercase mb-0.5"
                      style={{ color: "#8A7E6E" }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:+639XXXXXXXXX"
                      className="font-dm text-sm transition-colors duration-200"
                      style={{ color: "#F5F0E8" }}
                    >
                      +63 9XX XXX XXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className="w-9 h-9 flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "rgba(212,175,55,0.10)",
                      borderRadius: "4px",
                      color: "#D4AF37",
                    }}
                  >
                    <Mail size={15} />
                  </span>
                  <div>
                    <p
                      className="font-dm text-xs tracking-[1px] uppercase mb-0.5"
                      style={{ color: "#8A7E6E" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:hello@soberclub.ph"
                      className="font-dm text-sm transition-colors duration-200"
                      style={{ color: "#F5F0E8" }}
                    >
                      hello@soberclub.ph
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className="w-9 h-9 flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "rgba(212,175,55,0.10)",
                      borderRadius: "4px",
                      color: "#D4AF37",
                    }}
                  >
                    <MapPin size={15} />
                  </span>
                  <div>
                    <p
                      className="font-dm text-xs tracking-[1px] uppercase mb-0.5"
                      style={{ color: "#8A7E6E" }}
                    >
                      Location
                    </p>
                    <p
                      className="font-dm text-sm"
                      style={{ color: "#F5F0E8" }}
                    >
                      Quezon City, Metro Manila
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center text-center py-16 px-8"
                  style={{
                    backgroundColor: "#221E18",
                    borderRadius: "8px",
                    border: "1px solid rgba(212,175,55,0.20)",
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-6"
                    style={{
                      backgroundColor: "rgba(212,175,55,0.10)",
                      borderRadius: "4px",
                      color: "#D4AF37",
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <h3
                    className="font-playfair text-xl font-semibold mb-3"
                    style={{ color: "#F5F0E8" }}
                  >
                    Inquiry Received
                  </h3>
                  <p
                    className="font-dm text-sm leading-relaxed"
                    style={{ color: "#9A8E7E" }}
                  >
                    Thank you for reaching out. We&apos;ll review your request and
                    respond with a personalised proposal within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-5"
                  noValidate
                >
                  {/* Row: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="font-dm text-xs tracking-[1px] uppercase"
                        style={{ color: "#BEB09A" }}
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="px-4 py-3 font-dm text-sm border outline-none transition-colors duration-200 placeholder:opacity-40 focus:border-[#D4AF37]"
                        style={fieldBase}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="font-dm text-xs tracking-[1px] uppercase"
                        style={{ color: "#BEB09A" }}
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="px-4 py-3 font-dm text-sm border outline-none transition-colors duration-200 placeholder:opacity-40 focus:border-[#D4AF37]"
                        style={fieldBase}
                      />
                    </div>
                  </div>

                  {/* Row: Phone + Event Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="phone"
                        className="font-dm text-xs tracking-[1px] uppercase"
                        style={{ color: "#BEB09A" }}
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+63 9XX XXX XXXX"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="px-4 py-3 font-dm text-sm border outline-none transition-colors duration-200 placeholder:opacity-40 focus:border-[#D4AF37]"
                        style={fieldBase}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="eventDate"
                        className="font-dm text-xs tracking-[1px] uppercase"
                        style={{ color: "#BEB09A" }}
                      >
                        Event Date
                      </label>
                      <input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={handleFormChange}
                        className="px-4 py-3 font-dm text-sm border outline-none transition-colors duration-200 focus:border-[#D4AF37]"
                        style={{
                          ...fieldBase,
                          colorScheme: "dark",
                        }}
                      />
                    </div>
                  </div>

                  {/* Row: Event Type + Guest Count */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="eventType"
                        className="font-dm text-xs tracking-[1px] uppercase"
                        style={{ color: "#BEB09A" }}
                      >
                        Event Type
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleFormChange}
                        className="px-4 py-3 font-dm text-sm border outline-none transition-colors duration-200 focus:border-[#D4AF37] appearance-none cursor-pointer"
                        style={fieldBase}
                      >
                        <option value="" disabled>
                          Select event type
                        </option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="guestCount"
                        className="font-dm text-xs tracking-[1px] uppercase"
                        style={{ color: "#BEB09A" }}
                      >
                        Expected Guests
                      </label>
                      <input
                        id="guestCount"
                        name="guestCount"
                        type="number"
                        min="1"
                        placeholder="e.g. 150"
                        value={formData.guestCount}
                        onChange={handleFormChange}
                        className="px-4 py-3 font-dm text-sm border outline-none transition-colors duration-200 placeholder:opacity-40 focus:border-[#D4AF37]"
                        style={fieldBase}
                      />
                    </div>
                  </div>

                  {/* Preferred Package */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="preferredPackage"
                      className="font-dm text-xs tracking-[1px] uppercase"
                      style={{ color: "#BEB09A" }}
                    >
                      Preferred Package
                    </label>
                    <select
                      id="preferredPackage"
                      name="preferredPackage"
                      value={formData.preferredPackage}
                      onChange={handleFormChange}
                      className="px-4 py-3 font-dm text-sm border outline-none transition-colors duration-200 focus:border-[#D4AF37] appearance-none cursor-pointer"
                      style={fieldBase}
                    >
                      <option value="" disabled>
                        Select a package
                      </option>
                      {preferredPackages.map((pkg) => (
                        <option key={pkg} value={pkg}>
                          {pkg}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Notes */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="notes"
                      className="font-dm text-xs tracking-[1px] uppercase"
                      style={{ color: "#BEB09A" }}
                    >
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      placeholder="Tell us about your vision, venue, or any special requirements..."
                      value={formData.notes}
                      onChange={handleFormChange}
                      className="px-4 py-3 font-dm text-sm border outline-none transition-colors duration-200 placeholder:opacity-40 focus:border-[#D4AF37] resize-none"
                      style={fieldBase}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center w-full py-4 font-dm text-sm font-medium tracking-[1.5px] uppercase transition-opacity duration-200 hover:opacity-85 active:opacity-70"
                    style={{
                      backgroundColor: "#D4AF37",
                      color: "#110E0A",
                      borderRadius: "4px",
                    }}
                  >
                    Submit Inquiry
                  </button>

                  <p
                    className="text-center font-dm text-xs"
                    style={{ color: "#8A7E6E" }}
                  >
                    We respect your privacy. Your information will never be
                    shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER                                                              */}
      {/* ------------------------------------------------------------------ */}
      <footer style={{ backgroundColor: "#110E0A" }}>
        {/* Main footer */}
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Brand column */}
            <div className="md:col-span-1">
              <span
                className="font-playfair text-lg font-semibold tracking-[2px] uppercase block mb-3"
                style={{ color: "#D4AF37" }}
              >
                Sober Club
              </span>
              <p
                className="font-dm text-sm leading-relaxed mb-5"
                style={{ color: "#8A7E6E", fontStyle: "italic" }}
              >
                &ldquo;It&apos;s never a party unless we&apos;re there.&rdquo;
              </p>
              <p
                className="font-dm text-xs leading-relaxed"
                style={{ color: "#8A7E6E" }}
              >
                Premium mobile bar service. Quezon City, Philippines.
                Serving Metro Manila and beyond since 2004.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4
                className="font-dm text-xs tracking-[2px] uppercase mb-5"
                style={{ color: "#D4AF37" }}
              >
                Navigate
              </h4>
              <nav className="flex flex-col gap-3">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Packages", href: "#packages" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-dm text-sm transition-colors duration-200"
                    style={{ color: "#8A7E6E" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#F5F0E8")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#8A7E6E")
                    }
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="font-dm text-xs tracking-[2px] uppercase mb-5"
                style={{ color: "#D4AF37" }}
              >
                Get In Touch
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+639XXXXXXXXX"
                  className="flex items-center gap-3 font-dm text-sm transition-colors duration-200"
                  style={{ color: "#8A7E6E" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F5F0E8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#8A7E6E")
                  }
                >
                  <Phone size={13} style={{ color: "#D4AF37", flexShrink: 0 }} />
                  +63 9XX XXX XXXX
                </a>
                <a
                  href="mailto:hello@soberclub.ph"
                  className="flex items-center gap-3 font-dm text-sm transition-colors duration-200"
                  style={{ color: "#8A7E6E" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F5F0E8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#8A7E6E")
                  }
                >
                  <Mail size={13} style={{ color: "#D4AF37", flexShrink: 0 }} />
                  hello@soberclub.ph
                </a>
                <div className="flex items-start gap-3">
                  <MapPin
                    size={13}
                    style={{ color: "#D4AF37", flexShrink: 0, marginTop: "2px" }}
                  />
                  <span
                    className="font-dm text-sm"
                    style={{ color: "#8A7E6E" }}
                  >
                    Quezon City,
                    <br />
                    Metro Manila, Philippines
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="max-w-6xl mx-auto mx-6 lg:mx-12"
          style={{
            borderTop: "1px solid rgba(212,175,55,0.12)",
          }}
        />

        {/* Copyright bar */}
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="font-dm text-xs"
            style={{ color: "#8A7E6E" }}
          >
            &copy; {new Date().getFullYear()} Sober Club. All rights reserved.
          </p>
          <p
            className="font-dm text-xs"
            style={{ color: "#8A7E6E" }}
          >
            Quezon City, Philippines
          </p>
        </div>
      </footer>
    </div>
  );
}
