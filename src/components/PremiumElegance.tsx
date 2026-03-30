"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { images } from "@/lib/images";

// ---------------------------------------------------------------------------
// Inline SVG icons (Facebook & Instagram — not in lucide-react)
// ---------------------------------------------------------------------------

function IconFacebook({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.01" fill="currentColor" strokeWidth="3" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Package {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  isPremium?: boolean;
  badge?: string;
  imageKey: keyof typeof images;
}

interface Stat {
  value: string;
  label: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
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
    imageKey: "gallery1",
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
    imageKey: "gallery2",
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
    imageKey: "gallery3",
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
    isPremium: true,
    badge: "SIGNATURE",
    imageKey: "gallery4",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Honestly, Sober Club MADE our wedding. Every single guest was raving about the cocktails — they even got my lola doing shots!",
    author: "— Pia M.",
    role: "Wedding in Antipolo",
  },
  {
    quote:
      "Our annual gala has never looked or felt better. The team arrived fully prepared, and the custom cocktail menu was an absolute masterpiece.",
    author: "Ana Reyes",
    role: "Events Director, Fortune 500 Company",
  },
];

const eventTypes = [
  "Weddings",
  "Debuts",
  "Corporate",
  "House Parties",
  "Yacht Nights",
  "Fiestas",
];

const formEventTypes = [
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
      className="font-jost text-[10px] tracking-[4px] uppercase"
      style={{ color: "#D4AF37" }}
    >
      {children}
    </span>
  );
}

function GoldRule({ width = "60px" }: { width?: string }) {
  return (
    <div
      className="mx-auto"
      style={{
        width,
        height: "1px",
        backgroundColor: "#D4AF37",
      }}
    />
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function PremiumElegance() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  // Bottom-border-only field style
  const fieldBase: React.CSSProperties = {
    backgroundColor: "transparent",
    color: "#F5F0E8",
    borderBottom: "1px solid #3A3428",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderRadius: 0,
    outline: "none",
  };

  return (
    <div
      className="min-h-screen font-jost antialiased"
      style={{ backgroundColor: "#1A1714", color: "#F5F0E8" }}
    >
      {/* ------------------------------------------------------------------ */}
      {/* HEADER — two-row editorial layout                                   */}
      {/* ------------------------------------------------------------------ */}
      <header
        className="absolute top-0 left-0 right-0 z-40"
        style={{
          backgroundColor: "rgba(17, 14, 10, 0.96)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(212,175,55,0.1)",
        }}
      >
        {/* Row 1: centered logo */}
        <div className="hidden md:flex items-center justify-center px-8 pt-5 pb-3">
          <a
            href="#hero"
            className="select-none text-center"
            aria-label="Sober Club — home"
          >
            <span
              className="font-cormorant font-semibold tracking-[4px] uppercase"
              style={{ fontSize: "1.45rem", color: "#D4AF37" }}
            >
              Sober Club
            </span>
          </a>
        </div>

        {/* Row 2: centered nav links + Reserve CTA */}
        <div
          className="hidden md:flex items-center justify-center gap-10 pb-4"
          style={{ borderTop: "1px solid rgba(212,175,55,0.08)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-jost text-[11px] tracking-[2px] uppercase transition-colors duration-200"
              style={{ color: "#9A8E7E" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F0E8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9A8E7E")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-jost text-[11px] tracking-[2px] uppercase px-5 py-2 transition-opacity duration-200 hover:opacity-80"
            style={{
              backgroundColor: "#D4AF37",
              color: "#110E0A",
              borderRadius: "4px",
              fontWeight: 500,
            }}
          >
            Reserve
          </a>
        </div>

        {/* Mobile header: centered logo + hamburger */}
        <div className="md:hidden flex items-center justify-between px-6 py-4">
          <a href="#hero" className="select-none" aria-label="Sober Club — home">
            <span
              className="font-cormorant font-semibold tracking-[3px] uppercase"
              style={{ fontSize: "1.1rem", color: "#D4AF37" }}
            >
              Sober Club
            </span>
          </a>
          <button
            className="p-1"
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
          className="fixed inset-0 z-40 flex flex-col pt-20 px-8 pb-10 md:hidden"
          style={{ backgroundColor: "#110E0A" }}
        >
          <nav className="flex flex-col gap-8 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-cormorant text-3xl font-medium"
                style={{ color: "#F5F0E8" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="mt-auto inline-flex items-center justify-center px-6 py-3.5 font-jost text-sm font-medium tracking-[2px] uppercase transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "#D4AF37",
              color: "#110E0A",
              borderRadius: "4px",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Reserve Now
          </a>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* HERO — split 50/50                                                  */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="hero"
        className="flex flex-col md:flex-row min-h-screen"
        style={{ paddingTop: "0" }}
      >
        {/* Mobile: image on top */}
        <div
          className="md:hidden w-full relative"
          style={{ height: "300px" }}
        >
          <Image
            src={images.heroElegant}
            alt="Elegant mobile bar setup"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(17,14,10,0.2), rgba(26,23,20,0.5))",
            }}
          />
        </div>

        {/* Left — text content */}
        <div
          className="w-full md:w-1/2 flex items-center justify-end"
          style={{
            backgroundColor: "#1A1714",
            paddingTop: "clamp(5rem, 14vw, 9rem)",
            paddingBottom: "clamp(4rem, 10vw, 8rem)",
          }}
        >
          <div className="w-full max-w-lg px-8 md:px-12 lg:px-16">
            {/* Est. badge */}
            <div className="mb-8">
              <span
                className="font-jost text-[10px] tracking-[3px] uppercase px-3 py-1.5"
                style={{
                  color: "#D4AF37",
                  backgroundColor: "rgba(212,175,55,0.10)",
                  border: "1px solid rgba(212,175,55,0.25)",
                  borderRadius: "4px",
                }}
              >
                Est. 2004 &middot; Quezon City
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-cormorant font-semibold leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.25rem)", color: "#F5F0E8" }}
            >
              Where Every Night Becomes a
              <br />
              <em style={{ color: "#D4AF37", fontStyle: "italic" }}>
                Story
              </em>
            </h1>

            {/* Gold rule */}
            <div className="mb-6" style={{ marginLeft: "0" }}>
              <div style={{ width: "60px", height: "1px", backgroundColor: "#D4AF37" }} />
            </div>

            {/* Subheadline */}
            <p
              className="font-jost text-base md:text-[1.05rem] leading-[1.8] mb-10"
              style={{ color: "#9A8E7E", maxWidth: "420px" }}
            >
              Premium mobile bar experiences that turn your event into the
              night everyone talks about.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 font-jost text-[12px] font-medium tracking-[2px] uppercase transition-opacity duration-200 hover:opacity-80"
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
                className="inline-flex items-center justify-center px-8 py-3.5 font-jost text-[12px] font-medium tracking-[2px] uppercase transition-opacity duration-200 hover:opacity-80"
                style={{
                  color: "#D4AF37",
                  border: "1px solid rgba(212,175,55,0.35)",
                  borderRadius: "4px",
                }}
              >
                Our Packages
              </a>
            </div>

            {/* Scroll hint — desktop only */}
            <div className="hidden md:flex items-center gap-3 mt-16">
              <div
                style={{
                  width: "1px",
                  height: "40px",
                  background:
                    "linear-gradient(to bottom, rgba(212,175,55,0.6), transparent)",
                }}
              />
              <span
                className="font-jost text-[10px] tracking-[2px] uppercase"
                style={{ color: "#8A7E6E" }}
              >
                Scroll
              </span>
            </div>
          </div>
        </div>

        {/* Right — hero image (desktop only) */}
        <div className="hidden md:block w-1/2 relative" style={{ minHeight: "100vh" }}>
          <Image
            src={images.heroElegant}
            alt="Elegant mobile bar setup"
            fill
            priority
            className="object-cover"
            sizes="50vw"
            style={{ borderRadius: "0" }}
          />
          {/* Subtle left-edge fade */}
          <div
            className="absolute inset-y-0 left-0 w-24"
            style={{
              background:
                "linear-gradient(to right, #1A1714, transparent)",
            }}
          />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* STATS — centered single row with gold vertical dividers             */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="stats"
        style={{ backgroundColor: "#1A1714" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center">
                <div className="flex flex-col items-center text-center px-10 md:px-16 py-8 sm:py-0">
                  <span
                    className="font-cormorant font-semibold leading-none mb-3"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", color: "#D4AF37" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-jost text-[10px] tracking-[3px] uppercase"
                    style={{ color: "#8A7E6E" }}
                  >
                    {stat.label}
                  </span>
                </div>
                {/* Gold vertical divider between stats */}
                {index < stats.length - 1 && (
                  <div
                    className="hidden sm:block flex-shrink-0"
                    style={{
                      width: "1px",
                      height: "60px",
                      backgroundColor: "rgba(212,175,55,0.35)",
                    }}
                  />
                )}
                {/* Mobile horizontal divider */}
                {index < stats.length - 1 && (
                  <div
                    className="sm:hidden"
                    style={{
                      width: "40px",
                      height: "1px",
                      backgroundColor: "rgba(212,175,55,0.25)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* ABOUT — centered narrow column                                      */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="about"
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#110E0A" }}
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          {/* Label */}
          <SectionLabel>What We Do</SectionLabel>

          {/* Heading */}
          <h2
            className="font-cormorant font-semibold leading-tight mt-5 mb-6"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", color: "#F5F0E8" }}
          >
            We Don&apos;t Just Show Up.{" "}
            <span style={{ color: "#D4AF37" }}>We Show Out.</span>
          </h2>

          <GoldRule width="60px" />

          {/* Body copy */}
          <p
            className="font-jost text-base leading-[1.9] mt-8 mb-5"
            style={{ color: "#9A8E7E" }}
          >
            For over 20 years, we&apos;ve been the secret ingredient behind
            Quezon City&apos;s most unforgettable nights. Our mixologists don&apos;t
            just make drinks — they create experiences that get the crowd going
            and keep the good times flowing.
          </p>
          <p
            className="font-jost text-base leading-[1.9] mb-12"
            style={{ color: "#8A7E6E" }}
          >
            It&apos;s never a party unless we&apos;re there.
          </p>

          {/* About image */}
          <div
            className="w-full relative overflow-hidden"
            style={{
              height: "clamp(280px, 50vw, 460px)",
              border: "1px solid rgba(212,175,55,0.25)",
              borderRadius: "0",
            }}
          >
            <Image
              src={images.aboutElegant}
              alt="Sober Club bartenders at an elegant event"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(17,14,10,0.4), transparent)",
              }}
            />
          </div>

          {/* Event types — inline text with gold dots */}
          <div className="mt-8 flex items-center justify-center flex-wrap gap-x-0">
            {eventTypes.map((type, index) => (
              <span key={type} className="inline-flex items-center">
                <span
                  className="font-jost text-[11px] tracking-[2px] uppercase"
                  style={{ color: "#9A8E7E" }}
                >
                  {type}
                </span>
                {index < eventTypes.length - 1 && (
                  <span
                    className="mx-3"
                    style={{ color: "#D4AF37", fontSize: "0.6rem" }}
                    aria-hidden="true"
                  >
                    &middot;
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PACKAGES — stacked full-width horizontal cards                      */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="packages"
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#1A1714" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <SectionLabel>Our Packages</SectionLabel>
            <h2
              className="font-cormorant font-semibold leading-tight mt-5"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", color: "#F5F0E8" }}
            >
              Find Your Perfect Pour
            </h2>
          </div>

          {/* Cards */}
          <div className="flex flex-col">
            {packages.map((pkg, index) => (
              <div key={pkg.name}>
                {/* Gold divider above each card */}
                {index > 0 && (
                  <div
                    style={{ height: "1px", backgroundColor: "rgba(212,175,55,0.18)" }}
                  />
                )}

                <div
                  className="flex flex-col md:flex-row"
                  style={{
                    backgroundColor: pkg.isPremium ? "#221E18" : "transparent",
                    borderTop: pkg.isPremium ? "3px solid #D4AF37" : undefined,
                    padding: "clamp(1.5rem, 4vw, 2.5rem) 0",
                  }}
                >
                  {/* Image placeholder */}
                  <div
                    className="w-full md:w-64 lg:w-80 flex-shrink-0 relative overflow-hidden"
                    style={{
                      height: "200px",
                      borderRadius: "0",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <Image
                      src={images[pkg.imageKey]}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(17,14,10,0.35), transparent)",
                      }}
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 md:pl-10 lg:pl-14 flex flex-col justify-center">
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                      <div>
                        {pkg.badge && (
                          <span
                            className="inline-block font-jost text-[9px] tracking-[3px] uppercase px-2.5 py-1 mb-3"
                            style={{
                              color: "#D4AF37",
                              border: "1px solid rgba(212,175,55,0.4)",
                              borderRadius: "4px",
                            }}
                          >
                            {pkg.badge}
                          </span>
                        )}
                        <h3
                          className="font-cormorant font-semibold leading-snug"
                          style={{
                            fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
                            color: pkg.isPremium ? "#D4AF37" : "#F5F0E8",
                            display: "block",
                          }}
                        >
                          {pkg.name}
                        </h3>
                        <p
                          className="font-jost text-sm mt-1"
                          style={{ color: "#8A7E6E", fontStyle: "italic" }}
                        >
                          {pkg.tagline}
                        </p>
                      </div>
                      <span
                        className="font-cormorant text-xl font-semibold flex-shrink-0"
                        style={{ color: "#D4AF37" }}
                      >
                        {pkg.price}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {pkg.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-3 font-jost text-sm"
                          style={{ color: "#9A8E7E" }}
                        >
                          <span
                            style={{
                              width: "16px",
                              height: "1px",
                              backgroundColor: "#D4AF37",
                              flexShrink: 0,
                            }}
                          />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <a
                        href="#contact"
                        className="inline-flex items-center font-jost text-[11px] tracking-[2px] uppercase transition-opacity duration-200 hover:opacity-70"
                        style={{ color: "#D4AF37" }}
                      >
                        Enquire about this package
                        <span className="ml-2" aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom divider */}
            <div
              style={{ height: "1px", backgroundColor: "rgba(212,175,55,0.18)" }}
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* GALLERY — asymmetric editorial grid                                 */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="gallery"
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#110E0A" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <SectionLabel>Our Events</SectionLabel>
            <h2
              className="font-cormorant font-semibold leading-tight mt-5"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", color: "#F5F0E8" }}
            >
              Captured Moments
            </h2>
          </div>

          {/* Asymmetric grid: large left (60%), two stacked right (40%) */}
          <div className="flex flex-col md:flex-row gap-3">
            {/* Large left image */}
            <div
              className="w-full md:w-[60%] relative overflow-hidden"
              style={{ height: "clamp(300px, 55vw, 560px)", borderRadius: "0" }}
            >
              <Image
                src={images.gallery1}
                alt="Elegant bar setup at a gala"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(17,14,10,0.5), transparent 60%)",
                }}
              />
              <div className="absolute bottom-6 left-6">
                <span
                  className="font-jost text-[10px] tracking-[2px] uppercase"
                  style={{ color: "rgba(245,240,232,0.6)" }}
                >
                  Private Gala &middot; BGC
                </span>
              </div>
            </div>

            {/* Two stacked right images */}
            <div className="w-full md:w-[40%] flex flex-row md:flex-col gap-3">
              <div
                className="flex-1 md:flex-none relative overflow-hidden"
                style={{ height: "clamp(150px, 26vw, 274px)", borderRadius: "0" }}
              >
                <Image
                  src={images.gallery2}
                  alt="Handcrafted cocktail close-up"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 40vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(17,14,10,0.5), transparent 60%)",
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <span
                    className="font-jost text-[10px] tracking-[2px] uppercase"
                    style={{ color: "rgba(245,240,232,0.6)" }}
                  >
                    Wedding &middot; Makati
                  </span>
                </div>
              </div>
              <div
                className="flex-1 md:flex-none relative overflow-hidden"
                style={{ height: "clamp(150px, 26vw, 274px)", borderRadius: "0" }}
              >
                <Image
                  src={images.gallery3}
                  alt="Bartender at work during an event"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 40vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(17,14,10,0.5), transparent 60%)",
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <span
                    className="font-jost text-[10px] tracking-[2px] uppercase"
                    style={{ color: "rgba(245,240,232,0.6)" }}
                  >
                    Corporate &middot; Ortigas
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Second row: three equal images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
            {[
              { src: images.gallery4, label: "Debut &middot; QC" },
              { src: images.heroVibrant, label: "Yacht Party &middot; Manila Bay" },
              { src: images.heroNeon, label: "Night Event &middot; Pasay" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden"
                style={{ height: "200px", borderRadius: "0" }}
              >
                <Image
                  src={item.src}
                  alt="Sober Club event"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(17,14,10,0.55), transparent 60%)",
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <span
                    className="font-jost text-[10px] tracking-[2px] uppercase"
                    style={{ color: "rgba(245,240,232,0.6)" }}
                    dangerouslySetInnerHTML={{ __html: item.label }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* TESTIMONIALS — centered large quote, floating on bg                 */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="testimonials"
        className="py-24 lg:py-36"
        style={{ backgroundColor: "#1A1714" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>Real Talk</SectionLabel>

          <div className="relative mt-8">
            {/* Decorative quotation mark */}
            <span
              className="font-cormorant select-none leading-none absolute -top-6 left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                fontSize: "9rem",
                color: "#D4AF37",
                opacity: 0.15,
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Quote text */}
            <blockquote
              className="relative font-cormorant text-xl lg:text-2xl italic leading-[1.75] pt-8"
              style={{ color: "#F5F0E8" }}
            >
              {testimonials[activeTestimonial].quote}
            </blockquote>

            {/* Gold rule + author */}
            <div className="mt-8 flex flex-col items-center gap-4">
              <GoldRule width="40px" />
              <p
                className="font-jost text-sm font-medium tracking-wide"
                style={{ color: "#D4AF37" }}
              >
                {testimonials[activeTestimonial].author}
              </p>
              <p
                className="font-jost text-[11px] tracking-[2px] uppercase"
                style={{ color: "#8A7E6E" }}
              >
                {testimonials[activeTestimonial].role}
              </p>
            </div>
          </div>

          {/* Testimonial nav dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`View testimonial ${i + 1}`}
                style={{
                  width: i === activeTestimonial ? "24px" : "8px",
                  height: "1px",
                  backgroundColor:
                    i === activeTestimonial
                      ? "#D4AF37"
                      : "rgba(212,175,55,0.3)",
                  transition: "all 0.3s ease",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* INQUIRY FORM — centered narrow, bottom-border-only fields           */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="contact"
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#110E0A" }}
      >
        <div className="max-w-lg mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <SectionLabel>Let&apos;s Go</SectionLabel>
            <h2
              className="font-cormorant font-semibold leading-tight mt-5 mb-4"
              style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", color: "#F5F0E8" }}
            >
              Let&apos;s Plan Your Next Big Night
            </h2>
            <GoldRule width="50px" />
            <p
              className="font-jost text-sm leading-relaxed mt-6"
              style={{ color: "#8A7E6E", maxWidth: "360px", margin: "1.5rem auto 0" }}
            >
              Tell us about your event and we&apos;ll put together a custom
              package that fits your vibe and budget.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div
                className="w-12 h-12 mx-auto mb-6 flex items-center justify-center"
                style={{
                  border: "1px solid rgba(212,175,55,0.4)",
                  borderRadius: "50%",
                }}
              >
                <span style={{ color: "#D4AF37", fontSize: "1.4rem" }}>&#10003;</span>
              </div>
              <h3
                className="font-cormorant text-2xl font-semibold mb-3"
                style={{ color: "#F5F0E8" }}
              >
                Enquiry Received
              </h3>
              <p className="font-jost text-sm" style={{ color: "#8A7E6E" }}>
                Thank you. We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-8">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="font-jost text-[10px] tracking-[2px] uppercase"
                  style={{ color: "#8A7E6E" }}
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full bg-transparent pb-2 font-jost text-sm focus:outline-none transition-colors duration-200"
                  style={fieldBase}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderBottomColor = "#D4AF37")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderBottomColor = "#3A3428")
                  }
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-jost text-[10px] tracking-[2px] uppercase"
                    style={{ color: "#8A7E6E" }}
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full bg-transparent pb-2 font-jost text-sm focus:outline-none transition-colors duration-200"
                    style={fieldBase}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderBottomColor = "#D4AF37")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderBottomColor = "#3A3428")
                    }
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="font-jost text-[10px] tracking-[2px] uppercase"
                    style={{ color: "#8A7E6E" }}
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full bg-transparent pb-2 font-jost text-sm focus:outline-none transition-colors duration-200"
                    style={fieldBase}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderBottomColor = "#D4AF37")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderBottomColor = "#3A3428")
                    }
                  />
                </div>
              </div>

              {/* Event Date + Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="eventDate"
                    className="font-jost text-[10px] tracking-[2px] uppercase"
                    style={{ color: "#8A7E6E" }}
                  >
                    Event Date
                  </label>
                  <input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleFormChange}
                    className="w-full bg-transparent pb-2 font-jost text-sm focus:outline-none transition-colors duration-200"
                    style={{ ...fieldBase, colorScheme: "dark" }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderBottomColor = "#D4AF37")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderBottomColor = "#3A3428")
                    }
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="guestCount"
                    className="font-jost text-[10px] tracking-[2px] uppercase"
                    style={{ color: "#8A7E6E" }}
                  >
                    Expected Guests
                  </label>
                  <input
                    id="guestCount"
                    name="guestCount"
                    type="number"
                    min={1}
                    value={formData.guestCount}
                    onChange={handleFormChange}
                    className="w-full bg-transparent pb-2 font-jost text-sm focus:outline-none transition-colors duration-200"
                    style={fieldBase}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderBottomColor = "#D4AF37")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderBottomColor = "#3A3428")
                    }
                  />
                </div>
              </div>

              {/* Event Type */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="eventType"
                  className="font-jost text-[10px] tracking-[2px] uppercase"
                  style={{ color: "#8A7E6E" }}
                >
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleFormChange}
                  className="w-full bg-transparent pb-2 font-jost text-sm focus:outline-none transition-colors duration-200 cursor-pointer"
                  style={{ ...fieldBase, backgroundColor: "transparent" }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderBottomColor = "#D4AF37")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderBottomColor = "#3A3428")
                  }
                >
                  <option value="" style={{ backgroundColor: "#1A1714" }}>
                    Select type
                  </option>
                  {formEventTypes.map((t) => (
                    <option
                      key={t}
                      value={t}
                      style={{ backgroundColor: "#1A1714" }}
                    >
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Package */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="preferredPackage"
                  className="font-jost text-[10px] tracking-[2px] uppercase"
                  style={{ color: "#8A7E6E" }}
                >
                  Preferred Package
                </label>
                <select
                  id="preferredPackage"
                  name="preferredPackage"
                  value={formData.preferredPackage}
                  onChange={handleFormChange}
                  className="w-full bg-transparent pb-2 font-jost text-sm focus:outline-none transition-colors duration-200 cursor-pointer"
                  style={{ ...fieldBase, backgroundColor: "transparent" }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderBottomColor = "#D4AF37")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderBottomColor = "#3A3428")
                  }
                >
                  <option value="" style={{ backgroundColor: "#1A1714" }}>
                    Select package
                  </option>
                  {preferredPackages.map((p) => (
                    <option
                      key={p}
                      value={p}
                      style={{ backgroundColor: "#1A1714" }}
                    >
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="notes"
                  className="font-jost text-[10px] tracking-[2px] uppercase"
                  style={{ color: "#8A7E6E" }}
                >
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleFormChange}
                  className="w-full bg-transparent pb-2 font-jost text-sm focus:outline-none transition-colors duration-200 resize-none"
                  style={fieldBase}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderBottomColor = "#D4AF37")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderBottomColor = "#3A3428")
                  }
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="px-12 py-3.5 font-jost text-[11px] font-medium tracking-[3px] uppercase transition-opacity duration-200 hover:opacity-80"
                  style={{
                    backgroundColor: "#D4AF37",
                    color: "#110E0A",
                    borderRadius: "4px",
                  }}
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER — two rows                                                   */}
      {/* ------------------------------------------------------------------ */}
      <footer style={{ backgroundColor: "#110E0A" }}>
        {/* Top row: 3 columns */}
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Brand column */}
            <div>
              <span
                className="font-cormorant font-semibold tracking-[3px] uppercase block mb-4"
                style={{ fontSize: "1.1rem", color: "#D4AF37" }}
              >
                Sober Club
              </span>
              <p
                className="font-jost text-sm leading-[1.85]"
                style={{ color: "#8A7E6E", maxWidth: "240px" }}
              >
                It&apos;s never a party unless we&apos;re there. Premium mobile bar
                service, Quezon City, Philippines.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="transition-colors duration-200"
                  style={{ color: "#8A7E6E" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A7E6E")}
                >
                  <IconFacebook size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="transition-colors duration-200"
                  style={{ color: "#8A7E6E" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A7E6E")}
                >
                  <IconInstagram size={16} />
                </a>
              </div>
            </div>

            {/* Navigation column */}
            <div>
              <p
                className="font-jost text-[10px] tracking-[3px] uppercase mb-5"
                style={{ color: "#D4AF37" }}
              >
                Navigation
              </p>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-jost text-sm transition-colors duration-200"
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
                <a
                  href="#contact"
                  className="font-jost text-sm transition-colors duration-200"
                  style={{ color: "#8A7E6E" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F5F0E8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#8A7E6E")
                  }
                >
                  Reserve
                </a>
              </nav>
            </div>

            {/* Contact column */}
            <div>
              <p
                className="font-jost text-[10px] tracking-[3px] uppercase mb-5"
                style={{ color: "#D4AF37" }}
              >
                Contact
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+639000000000"
                  className="flex items-center gap-3 font-jost text-sm transition-colors duration-200"
                  style={{ color: "#8A7E6E" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F5F0E8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#8A7E6E")
                  }
                >
                  <Phone size={14} style={{ flexShrink: 0 }} />
                  +63 900 000 0000
                </a>
                <a
                  href="mailto:hello@soberclub.ph"
                  className="flex items-center gap-3 font-jost text-sm transition-colors duration-200"
                  style={{ color: "#8A7E6E" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F5F0E8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#8A7E6E")
                  }
                >
                  <Mail size={14} style={{ flexShrink: 0 }} />
                  hello@soberclub.ph
                </a>
                <div
                  className="flex items-start gap-3 font-jost text-sm"
                  style={{ color: "#8A7E6E" }}
                >
                  <MapPin size={14} style={{ flexShrink: 0, marginTop: "2px" }} />
                  Quezon City, Metro Manila, Philippines
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div
          style={{ height: "1px", backgroundColor: "rgba(212,175,55,0.15)" }}
        />

        {/* Bottom row: centered copyright */}
        <div className="max-w-6xl mx-auto px-6 py-6 text-center">
          <p
            className="font-jost text-[11px] tracking-[1px]"
            style={{ color: "#8A7E6E" }}
          >
            &copy; {new Date().getFullYear()} Sober Club. All rights reserved.
            &nbsp;&middot;&nbsp; Quezon City, Philippines
          </p>
        </div>
      </footer>
    </div>
  );
}
