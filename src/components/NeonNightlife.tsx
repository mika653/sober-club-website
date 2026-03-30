"use client";

import Image from "next/image";
import { Menu, Phone, Mail, MapPin } from "lucide-react";

function FacebookIcon({ size = 16, strokeWidth = 1.8 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function InstagramIcon({ size = 16, strokeWidth = 1.8 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

// ─── Reusable primitives ────────────────────────────────────────────────────

function SectionLabel({
  text,
  accentColor = "green",
}: {
  text: string;
  accentColor?: "green" | "orange";
}) {
  const lineColor =
    accentColor === "green" ? "bg-[#39FF14]" : "bg-[#FF6B00]";
  const textColor =
    accentColor === "green" ? "text-[#39FF14]" : "text-[#FF6B00]";

  return (
    <div className="flex items-center gap-3 mb-4">
      <span className={`inline-block w-6 h-[2px] ${lineColor}`} />
      <span
        className={`font-poppins text-xs font-semibold tracking-[0.18em] uppercase ${textColor}`}
      >
        {text}
      </span>
    </div>
  );
}

// ─── Header ─────────────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label="Sober Club home"
          className="font-righteous text-xl tracking-widest text-[#39FF14] select-none"
        >
          SOBER CLUB
        </a>

        {/* Nav — desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          <a
            href="#packages"
            className="font-poppins text-sm text-white/70 hover:text-[#39FF14] transition-colors duration-200"
          >
            Packages
          </a>
          <a
            href="#gallery"
            className="font-poppins text-sm text-white/70 hover:text-[#39FF14] transition-colors duration-200"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="font-poppins text-sm text-white/70 hover:text-[#39FF14] transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#39FF14] text-[#0A0A0A] font-poppins font-semibold text-sm hover:brightness-110 transition-all duration-200"
          >
            Book Now
          </a>
          {/* Hamburger — mobile placeholder */}
          <button
            type="button"
            aria-label="Open navigation menu"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/70 hover:text-[#39FF14] hover:border-[#39FF14]/40 transition-colors duration-200"
          >
            <Menu size={20} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative h-[560px] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-neon.jpg"
        alt="Sober Club mobile bar setup at a vibrant nighttime event"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]/90" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-5 sm:px-8 max-w-7xl mx-auto">
        {/* Badge */}
        <div className="mb-5 inline-flex self-start items-center gap-2 rounded-full border border-[#39FF14]/40 bg-[#39FF14]/10 px-4 py-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
          <span className="font-poppins text-[11px] font-semibold tracking-widest text-[#39FF14] uppercase">
            20+ Years of Mixing Memories
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-righteous text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-white mb-5 whitespace-pre-line">
          {"Your Event.\nOur Bar.\nUnforgettable Nights."}
        </h1>

        {/* Subheadline */}
        <p className="font-poppins text-sm sm:text-base text-white/70 max-w-md mb-8 leading-relaxed">
          Quezon City&rsquo;s premier mobile bar service. We bring the party to
          you — crafted cocktails, skilled mixologists, and setups that steal
          the show.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#39FF14] text-[#0A0A0A] font-poppins font-semibold text-sm hover:brightness-110 transition-all duration-200"
          >
            Book Your Bar
          </a>
          <a
            href="#packages"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white/5 border border-white/15 text-[#39FF14] font-poppins font-semibold text-sm hover:bg-[#39FF14]/10 hover:border-[#39FF14]/40 transition-all duration-200"
          >
            View Packages
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Bar ───────────────────────────────────────────────────────────────

function StatsBar() {
  const stats = [
    { value: "20+", label: "Years of Experience", valueColor: "text-[#39FF14]" },
    { value: "1,000+", label: "Parties Hosted", valueColor: "text-[#FF6B00]" },
    { value: "5,000", label: "Guests Per Event", valueColor: "text-[#39FF14]" },
  ];

  return (
    <div className="bg-[#111111] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 grid grid-cols-3 gap-4 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span
              className={`font-righteous text-2xl sm:text-4xl ${stat.valueColor}`}
            >
              {stat.value}
            </span>
            <span className="font-poppins text-[11px] sm:text-xs text-white/50 uppercase tracking-widest leading-snug">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── About Section ───────────────────────────────────────────────────────────

function About() {
  const eventTypes = [
    { label: "Weddings", color: "text-[#39FF14]" },
    { label: "Debuts", color: "text-[#FF6B00]" },
    { label: "Corporate", color: "text-[#39FF14]" },
    { label: "Christmas", color: "text-[#FF6B00]" },
    { label: "Yacht Parties", color: "text-[#39FF14]" },
    { label: "Fiestas", color: "text-[#FF6B00]" },
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <SectionLabel text="What We Offer" accentColor="green" />
            <h2 className="font-righteous text-3xl sm:text-4xl text-white mb-5 leading-tight">
              We Don&rsquo;t Just Mix Drinks.
            </h2>
            <p className="font-poppins text-sm sm:text-base text-white/60 leading-relaxed mb-6">
              Sober Club delivers a full mobile bar experience — from curated
              cocktail menus and professional mixologists to stunning bar setups
              that become the centrepiece of any event. Based in Quezon City, we
              serve Metro Manila and beyond, bringing high-energy bar service
              straight to your venue.
            </p>
            <p className="font-poppins text-sm sm:text-base text-white/60 leading-relaxed mb-8">
              Every event is unique, and we treat it that way. Our team works
              closely with you to craft a drink experience that matches your
              theme, your crowd, and your vibe.
            </p>

            {/* Event type pills */}
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <span
                  key={type.label}
                  className={`font-poppins text-xs font-semibold px-4 py-2 rounded-full bg-[#1A1A1A] border border-white/8 ${type.color}`}
                >
                  {type.label}
                </span>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/about-neon.jpg"
              alt="Sober Club team preparing cocktails at an event"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Packages ────────────────────────────────────────────────────────────────

interface PackageCard {
  name: string;
  price: string;
  priceColor: string;
  description: string;
  features: string[];
  inverted?: boolean;
  badge?: string;
}

const packages: PackageCard[] = [
  {
    name: "Shooters & Cocktail Bar",
    price: "P12,500",
    priceColor: "text-[#39FF14]",
    description: "A classic bar setup perfect for intimate gatherings.",
    features: [
      "Up to 50 guests",
      "6 cocktail selections",
      "2 mixologists",
      "Standard bar setup",
      "3-hour service",
    ],
  },
  {
    name: "Cocktail Slushie Bar",
    price: "P20,000",
    priceColor: "text-[#FF6B00]",
    description: "Frozen cocktail fun — the crowd pleaser at every event.",
    features: [
      "Up to 100 guests",
      "Slushie machine included",
      "8 cocktail selections",
      "3 mixologists",
      "4-hour service",
    ],
  },
  {
    name: "Sangria Bar",
    price: "P25,000",
    priceColor: "text-[#39FF14]",
    description: "Elegant sangria station with premium fruit garnishes.",
    features: [
      "Up to 150 guests",
      "4 sangria varieties",
      "Custom fruit display",
      "3 mixologists",
      "5-hour service",
    ],
  },
  {
    name: "Premium Bar",
    price: "P30,000",
    priceColor: "text-[#0A0A0A]",
    description: "Our full-service premium experience — no compromises.",
    features: [
      "Unlimited guests",
      "Full spirits selection",
      "Custom cocktail menu",
      "4 mixologists",
      "6-hour service",
    ],
    inverted: true,
    badge: "MOST POPULAR",
  },
];

function Packages() {
  return (
    <section id="packages" className="bg-[#111111] py-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <SectionLabel text="Our Bar Packages" accentColor="orange" />
          <h2 className="font-righteous text-3xl sm:text-4xl text-white leading-tight">
            Choose Your Perfect Bar.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl p-6 border transition-transform duration-200 hover:-translate-y-1 ${
                pkg.inverted
                  ? "bg-[#39FF14] border-[#39FF14]"
                  : "bg-[#1A1A1A] border-white/8 hover:border-[#39FF14]/30"
              }`}
            >
              {/* Most Popular badge */}
              {pkg.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#0A0A0A] border border-[#39FF14]/40 font-poppins text-[10px] font-semibold tracking-widest text-[#39FF14] uppercase whitespace-nowrap">
                  {pkg.badge}
                </span>
              )}

              {/* Price */}
              <div
                className={`font-righteous text-3xl mb-1 ${pkg.inverted ? "text-[#0A0A0A]" : pkg.priceColor}`}
              >
                {pkg.price}
              </div>

              {/* Name */}
              <h3
                className={`font-poppins font-semibold text-base mb-3 leading-snug ${
                  pkg.inverted ? "text-[#0A0A0A]" : "text-white"
                }`}
              >
                {pkg.name}
              </h3>

              {/* Description */}
              <p
                className={`font-poppins text-xs leading-relaxed mb-5 ${
                  pkg.inverted ? "text-[#0A0A0A]/70" : "text-white/50"
                }`}
              >
                {pkg.description}
              </p>

              {/* Divider */}
              <div
                className={`w-full h-px mb-5 ${
                  pkg.inverted ? "bg-[#0A0A0A]/20" : "bg-white/8"
                }`}
              />

              {/* Features */}
              <ul className="flex flex-col gap-2 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span
                      className={`inline-block w-1 h-1 rounded-full flex-shrink-0 ${
                        pkg.inverted ? "bg-[#0A0A0A]/50" : "bg-[#39FF14]"
                      }`}
                    />
                    <span
                      className={`font-poppins text-xs ${
                        pkg.inverted ? "text-[#0A0A0A]/80" : "text-white/60"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`mt-6 inline-flex items-center justify-center h-11 rounded-full font-poppins font-semibold text-sm transition-all duration-200 ${
                  pkg.inverted
                    ? "bg-[#0A0A0A] text-[#39FF14] hover:bg-[#111111]"
                    : "bg-white/5 border border-white/10 text-white hover:bg-[#39FF14]/10 hover:border-[#39FF14]/40 hover:text-[#39FF14]"
                }`}
              >
                Book This Package
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Sober Club neon bar setup at a wedding reception" },
  { src: "/images/gallery-2.jpg", alt: "Mixologist crafting cocktails at a debut party" },
  { src: "/images/gallery-3.jpg", alt: "Cocktail slushie bar at a corporate event" },
  { src: "/images/gallery-4.jpg", alt: "Premium bar setup at a rooftop yacht party" },
];

function Gallery() {
  return (
    <section id="gallery" className="bg-[#0A0A0A] py-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <SectionLabel text="Our Work" accentColor="green" />
          <h2 className="font-righteous text-3xl sm:text-4xl text-white leading-tight">
            Scenes From Our Events.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden"
              style={{ borderRadius: 12, aspectRatio: "4 / 3" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section className="bg-[#111111] py-20 px-5 sm:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel text="What Clients Say" accentColor="orange" />
        <h2 className="font-righteous text-3xl sm:text-4xl text-white leading-tight mb-12">
          They Loved Every Sip.
        </h2>

        <div className="bg-[#1A1A1A] border border-white/8 rounded-2xl p-8 sm:p-10 text-left">
          {/* Quote mark */}
          <div
            aria-hidden="true"
            className="font-righteous text-6xl text-[#39FF14]/20 leading-none mb-4 select-none"
          >
            &ldquo;
          </div>

          <blockquote>
            <p className="font-poppins text-base sm:text-lg text-white/80 leading-relaxed mb-6">
              Sober Club absolutely made our wedding. From the custom cocktail
              menu to the gorgeous bar setup, every detail was perfect. Our
              guests are still talking about the drinks months later. If you
              want a bar service that actually elevates your event, these are
              your people.
            </p>
            <footer>
              <cite className="font-poppins text-sm font-semibold text-[#39FF14] not-italic">
                — Maria S., Wedding Reception
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

// ─── Inquiry Form ────────────────────────────────────────────────────────────

function InquiryForm() {
  const labelClass =
    "font-poppins text-xs font-semibold text-[#39FF14] uppercase tracking-wide mb-1.5 block";
  const inputClass =
    "w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 font-poppins text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#39FF14]/50 focus:ring-1 focus:ring-[#39FF14]/30 transition-colors duration-200";
  const selectClass =
    "w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 font-poppins text-sm text-white focus:outline-none focus:border-[#39FF14]/50 focus:ring-1 focus:ring-[#39FF14]/30 transition-colors duration-200 appearance-none";

  return (
    <section id="contact" className="bg-[#0A0A0A] py-20 px-5 sm:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <SectionLabel text="Book Your Bar" accentColor="green" />
          <h2 className="font-righteous text-3xl sm:text-4xl text-white leading-tight mb-4">
            Let&rsquo;s Make Your Event Legendary.
          </h2>
          <p className="font-poppins text-sm sm:text-base text-white/60 leading-relaxed">
            Fill out the form below and our team will get back to you within 24
            hours with availability and a custom quote for your event.
          </p>
        </div>

        <form
          noValidate
          aria-label="Event inquiry form"
          className="flex flex-col gap-5"
        >
          {/* Row 1 — Name + Email */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="full-name" className={labelClass}>
                Full Name
              </label>
              <input
                id="full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Juan dela Cruz"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="juan@example.com"
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 2 — Phone + Event Date */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+63 9XX XXX XXXX"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="event-date" className={labelClass}>
                Event Date
              </label>
              <input
                id="event-date"
                name="eventDate"
                type="date"
                className={inputClass}
                style={{ colorScheme: "dark" }}
              />
            </div>
          </div>

          {/* Row 3 — Event Type + Preferred Package */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="relative">
              <label htmlFor="event-type" className={labelClass}>
                Event Type
              </label>
              <select id="event-type" name="eventType" className={selectClass}>
                <option value="" disabled selected>
                  Select event type
                </option>
                <option value="wedding">Wedding</option>
                <option value="debut">Debut</option>
                <option value="corporate">Corporate Event</option>
                <option value="christmas">Christmas Party</option>
                <option value="yacht">Yacht Party</option>
                <option value="fiesta">Fiesta</option>
                <option value="other">Other</option>
              </select>
              {/* Chevron */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-4 bottom-3.5 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#39FF14]/60"
              />
            </div>
            <div className="relative">
              <label htmlFor="preferred-package" className={labelClass}>
                Preferred Package
              </label>
              <select
                id="preferred-package"
                name="preferredPackage"
                className={selectClass}
              >
                <option value="" disabled selected>
                  Select a package
                </option>
                <option value="shooters">Shooters &amp; Cocktail Bar — P12,500</option>
                <option value="slushie">Cocktail Slushie Bar — P20,000</option>
                <option value="sangria">Sangria Bar — P25,000</option>
                <option value="premium">Premium Bar — P30,000</option>
              </select>
              {/* Chevron */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-4 bottom-3.5 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#39FF14]/60"
              />
            </div>
          </div>

          {/* Row 4 — Guest Count */}
          <div>
            <label htmlFor="guest-count" className={labelClass}>
              Estimated Guest Count
            </label>
            <input
              id="guest-count"
              name="guestCount"
              type="number"
              min="1"
              placeholder="e.g. 150"
              className={inputClass}
            />
          </div>

          {/* Row 5 — Additional Details */}
          <div>
            <label htmlFor="details" className={labelClass}>
              Additional Details
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              placeholder="Tell us about your event — venue, theme, special requests..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-10 rounded-full bg-[#39FF14] text-[#0A0A0A] font-poppins font-semibold text-sm hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/5 pt-14 pb-8 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-righteous text-2xl tracking-widest text-[#39FF14] mb-3">
              SOBER CLUB
            </div>
            <p className="font-poppins text-sm text-white/50 leading-relaxed max-w-xs">
              It&rsquo;s never a party unless we&rsquo;re there. Quezon City&rsquo;s
              premier mobile bar service since 2005.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+639171234567"
                  className="flex items-center gap-3 font-poppins text-sm text-white/60 hover:text-[#39FF14] transition-colors duration-200"
                >
                  <Phone size={15} strokeWidth={1.8} className="flex-shrink-0" />
                  +63 917 123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@soberclub.ph"
                  className="flex items-center gap-3 font-poppins text-sm text-white/60 hover:text-[#39FF14] transition-colors duration-200"
                >
                  <Mail size={15} strokeWidth={1.8} className="flex-shrink-0" />
                  hello@soberclub.ph
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 font-poppins text-sm text-white/60">
                  <MapPin
                    size={15}
                    strokeWidth={1.8}
                    className="flex-shrink-0 mt-0.5"
                  />
                  Quezon City, Metro Manila, Philippines
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-poppins text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">
              Follow Us
            </h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sober Club on Facebook"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/8 flex items-center justify-center text-white/50 hover:text-[#39FF14] hover:border-[#39FF14]/30 transition-colors duration-200"
              >
                <FacebookIcon size={16} strokeWidth={1.8} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sober Club on Instagram"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/8 flex items-center justify-center text-white/50 hover:text-[#FF6B00] hover:border-[#FF6B00]/30 transition-colors duration-200"
              >
                <InstagramIcon size={16} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-poppins text-xs text-white/30 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Sober Club. All rights reserved.
          </p>
          <p className="font-poppins text-xs text-white/20 text-center sm:text-right">
            Mobile Bar Services &mdash; Quezon City, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page Root ───────────────────────────────────────────────────────────────

export default function NeonNightlife() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-poppins">
      <Header />

      {/* Push content below fixed header */}
      <div className="pt-16">
        <Hero />
        <StatsBar />
        <About />
        <Packages />
        <Gallery />
        <Testimonials />
        <InquiryForm />
        <Footer />
      </div>
    </div>
  );
}
