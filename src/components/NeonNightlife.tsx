"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { images } from "@/lib/images";

// ─── Inline SVG social icons ─────────────────────────────────────────────────

function FacebookIcon({
  size = 16,
  strokeWidth = 1.8,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({
  size = 16,
  strokeWidth = 1.8,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// ─── Keyframe styles injected once ───────────────────────────────────────────

function GlobalStyles() {
  return (
    <style>{`
      @keyframes marquee-scroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .marquee-track {
        animation: marquee-scroll 22s linear infinite;
        will-change: transform;
      }
      .marquee-track:hover {
        animation-play-state: paused;
      }
      .neon-text {
        text-shadow: 0 0 7px rgba(57,255,20,0.6), 0 0 20px rgba(57,255,20,0.35), 0 0 40px rgba(57,255,20,0.15);
      }
      .neon-text-orange {
        text-shadow: 0 0 7px rgba(255,107,0,0.6), 0 0 20px rgba(255,107,0,0.35), 0 0 40px rgba(255,107,0,0.15);
      }
      .neon-box {
        box-shadow: 0 0 8px rgba(57,255,20,0.4), 0 0 20px rgba(57,255,20,0.15), inset 0 0 8px rgba(57,255,20,0.05);
      }
      .neon-box-orange {
        box-shadow: 0 0 8px rgba(255,107,0,0.4), 0 0 20px rgba(255,107,0,0.15);
      }
      .neon-box:hover {
        box-shadow: 0 0 12px rgba(57,255,20,0.6), 0 0 30px rgba(57,255,20,0.25), inset 0 0 12px rgba(57,255,20,0.08);
      }
      .neon-border {
        box-shadow: 0 0 6px rgba(57,255,20,0.3), 0 0 15px rgba(57,255,20,0.1);
      }
      .neon-line {
        box-shadow: 0 0 4px rgba(57,255,20,0.5), 0 0 10px rgba(57,255,20,0.2);
      }
      @keyframes neon-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.85; }
      }
      .neon-pulse {
        animation: neon-pulse 3s ease-in-out infinite;
      }
    `}</style>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Transparent gradient veil — fades into hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-none px-6 sm:px-10 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label="Sober Club home"
          className="flex items-center gap-2 select-none"
        >
          <span className="inline-block w-1 h-6 bg-[#39FF14] rounded-full flex-shrink-0 neon-line" />
          <span className="font-unbounded text-[17px] tracking-[0.22em] text-[#39FF14] uppercase neon-text">
            Sober Club
          </span>
        </a>

        {/* Desktop nav — minimal, no hamburger */}
        <nav
          className="hidden md:flex items-center gap-10"
          aria-label="Primary navigation"
        >
          {[
            { href: "#packages", label: "Packages" },
            { href: "#gallery", label: "Gallery" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-dm text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Book Now pill */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-[#39FF14] text-[#0A0A0A] font-dm font-semibold text-[13px] hover:brightness-110 transition-all duration-200 flex-shrink-0 neon-box"
        >
          Book Now
          <ChevronRight size={14} strokeWidth={2.5} />
        </a>
      </div>
    </header>
  );
}

// ─── Hero (100vh, full bleed, stats embedded inside) ─────────────────────────

function Hero() {
  const stats = [
    { value: "20+", label: "Years Active", accent: "text-[#39FF14]" },
    { value: "1,000+", label: "Events Served", accent: "text-[#FF6B00]" },
    { value: "5,000", label: "Max Guests / Event", accent: "text-[#39FF14]" },
  ];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Full-bleed background image — no border-radius, no padding */}
      <Image
        src={images.heroNeon}
        alt="Sober Club mobile bar setup at a vibrant nighttime event in Quezon City"
        fill
        priority
        className="object-cover object-center scale-[1.02]"
        sizes="100vw"
      />

      {/* Heavy cinematic gradient — bottom darkness for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />

      {/* Vertically centered headline content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-[72px]">
        <div className="max-w-2xl">
          {/* Pill badge */}
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#39FF14]/35 bg-[#39FF14]/8 px-4 py-1.5 backdrop-blur-sm neon-border">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
            <span className="font-dm text-[11px] font-semibold tracking-[0.2em] text-[#39FF14] uppercase">
              Quezon City&apos;s Premier Mobile Bar
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-unbounded text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.02] text-white mb-5">
            It&apos;s Never a Party
            <br />
            <span className="text-[#39FF14] neon-text">Unless We&apos;re There.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-dm text-[15px] sm:text-base text-white/65 max-w-md mb-9 leading-[1.7]">
            Crafted cocktails, skilled mixologists, and bar setups that steal
            the spotlight — brought directly to your venue across Metro Manila.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 h-[52px] px-9 rounded-full bg-[#39FF14] text-[#0A0A0A] font-dm font-semibold text-[14px] hover:brightness-110 transition-all duration-200 neon-box neon-pulse"
            >
              Book Your Bar
              <ArrowRight size={15} strokeWidth={2.4} />
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 h-[52px] px-9 rounded-full bg-white/6 border border-white/14 text-white font-dm font-semibold text-[14px] hover:bg-white/10 hover:border-white/25 transition-all duration-200 backdrop-blur-sm"
            >
              See Packages
            </a>
          </div>
        </div>
      </div>

      {/* Stats — glass strip pinned to bottom, inside the hero */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-black/40 backdrop-blur-md border-t border-white/8">
          <div className="max-w-none px-6 sm:px-10 lg:px-16 py-5 grid grid-cols-3 gap-2 sm:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center sm:items-start gap-0.5">
                <span
                  className={`font-unbounded text-[1.6rem] sm:text-[2.2rem] leading-none ${stat.accent} ${stat.accent.includes("39FF14") ? "neon-text" : "neon-text-orange"}`}
                >
                  {stat.value}
                </span>
                <span className="font-dm text-[10px] sm:text-[11px] text-white/45 uppercase tracking-[0.14em] leading-snug text-center sm:text-left">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About — two-column + marquee ────────────────────────────────────────────

function About() {
  const eventTypes = [
    "Weddings",
    "Debuts",
    "Corporate",
    "Christmas",
    "Yacht Parties",
    "Fiestas",
    "Product Launches",
    "Birthday Parties",
  ];

  // Duplicate so the seamless marquee loop works
  const marqueeItems = [...eventTypes, ...eventTypes];

  return (
    <section className="bg-[#0A0A0A] pt-24 pb-0">
      {/* Two-column content — edge to edge on image side */}
      <div className="grid md:grid-cols-[55fr_45fr] items-stretch min-h-[520px]">
        {/* Left — large image with neon left-border accent */}
        <div className="relative overflow-hidden min-h-[320px] md:min-h-0 border-l-[3px] border-[#39FF14] neon-border">
          <Image
            src={images.aboutNeon}
            alt="Sober Club mixologist preparing a cocktail at an event"
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/20 via-transparent to-[#0A0A0A]/50" />
        </div>

        {/* Right — text content */}
        <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block w-6 h-[2px] bg-[#39FF14]" />
            <span className="font-dm text-[11px] font-semibold tracking-[0.2em] uppercase text-[#39FF14]">
              About Us
            </span>
          </div>

          <h2 className="font-unbounded text-[clamp(1.9rem,4vw,2.9rem)] text-white leading-[1.1] mb-6">
            We Don&apos;t Just Mix Drinks.
            <br />
            <span className="text-white/45">We Make Memories.</span>
          </h2>

          <p className="font-dm text-[14px] sm:text-[15px] text-white/60 leading-[1.75] mb-5">
            Sober Club delivers a full mobile bar experience — from curated
            cocktail menus and professional mixologists to stunning bar setups
            that become the centrepiece of any event. Based in Quezon City, we
            serve Metro Manila and beyond.
          </p>

          <p className="font-dm text-[14px] sm:text-[15px] text-white/50 leading-[1.75] mb-10">
            Every event is unique, and we treat it that way. Our team works
            closely with you to craft a drink experience that matches your
            theme, your crowd, and your vibe.
          </p>

          <a
            href="#contact"
            className="self-start inline-flex items-center gap-2 h-11 px-7 rounded-full border border-[#39FF14]/40 text-[#39FF14] font-dm font-semibold text-[13px] hover:bg-[#39FF14]/10 hover:border-[#39FF14]/70 transition-all duration-200"
          >
            Get a Free Quote
            <ArrowRight size={14} strokeWidth={2.4} />
          </a>
        </div>
      </div>

      {/* Marquee strip — full bleed, no side padding */}
      <div className="mt-16 overflow-hidden border-y border-white/6 bg-[#111111] py-4 select-none">
        <div className="marquee-track flex items-center gap-0 whitespace-nowrap w-max">
          {marqueeItems.map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span
                className={`font-unbounded text-[13px] tracking-[0.18em] uppercase px-7 ${
                  i % 3 === 0
                    ? "text-[#39FF14]"
                    : i % 3 === 1
                    ? "text-white/35"
                    : "text-[#FF6B00]"
                }`}
              >
                {item}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/15 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Packages — horizontal scroll on mobile, 4-col grid on desktop ───────────

interface PackageData {
  number: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  inverted?: boolean;
  badge?: string;
  priceAccent: string;
}

const packageData: PackageData[] = [
  {
    number: "01",
    name: "Shooters & Cocktail Bar",
    price: "P12,500",
    priceAccent: "text-[#39FF14]",
    description: "A classic setup perfect for intimate gatherings with curated cocktail selections.",
    features: [
      "Up to 50 guests",
      "6 cocktail selections",
      "2 mixologists",
      "Standard bar setup",
      "3-hour service",
    ],
  },
  {
    number: "02",
    name: "Cocktail Slushie Bar",
    price: "P20,000",
    priceAccent: "text-[#FF6B00]",
    description: "Frozen cocktail fun — the guaranteed crowd pleaser at every kind of event.",
    features: [
      "Up to 100 guests",
      "Slushie machine included",
      "8 cocktail selections",
      "3 mixologists",
      "4-hour service",
    ],
  },
  {
    number: "03",
    name: "Sangria Bar",
    price: "P25,000",
    priceAccent: "text-[#39FF14]",
    description: "Elegant sangria station with premium fruit garnishes and signature blends.",
    features: [
      "Up to 150 guests",
      "4 sangria varieties",
      "Custom fruit display",
      "3 mixologists",
      "5-hour service",
    ],
  },
  {
    number: "04",
    name: "Premium Bar",
    price: "P30,000",
    priceAccent: "text-[#0A0A0A]",
    description: "Our full-service premium experience — zero compromises, maximum impact.",
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

function PackageCard({ pkg }: { pkg: PackageData }) {
  const isInverted = !!pkg.inverted;

  return (
    <div
      className={`
        relative flex-shrink-0 w-[280px] md:w-auto
        flex flex-col rounded-xl p-6 overflow-hidden
        snap-start transition-transform duration-200 hover:-translate-y-1
        ${
          isInverted
            ? "bg-[#39FF14] border border-[#39FF14] neon-box"
            : "bg-[#1A1A1A] border border-white/6 hover:border-[#39FF14]/25"
        }
      `}
    >
      {/* Giant faded number — decorative background element */}
      <span
        aria-hidden="true"
        className={`
          absolute -top-4 -right-2 font-unbounded text-[7rem] leading-none select-none pointer-events-none
          ${isInverted ? "text-[#0A0A0A]/10" : "text-white/[0.04]"}
        `}
      >
        {pkg.number}
      </span>

      {/* Badge */}
      {pkg.badge && (
        <span className="absolute -top-px left-5 inline-flex items-center justify-center px-3.5 py-1 rounded-b-lg bg-[#0A0A0A] border border-t-0 border-[#39FF14]/30 font-dm text-[9px] font-semibold tracking-[0.2em] text-[#39FF14] uppercase">
          {pkg.badge}
        </span>
      )}

      {/* Number indicator */}
      <span
        className={`font-dm text-[11px] font-semibold tracking-[0.18em] uppercase mb-4 mt-3 ${
          isInverted ? "text-[#0A0A0A]/50" : "text-white/20"
        }`}
      >
        {pkg.number}
      </span>

      {/* Price */}
      <div
        className={`font-unbounded text-[2rem] leading-none mb-1 ${
          isInverted ? "text-[#0A0A0A]" : pkg.priceAccent
        }`}
      >
        {pkg.price}
      </div>

      {/* Name */}
      <h3
        className={`font-dm font-semibold text-[15px] leading-snug mb-3 ${
          isInverted ? "text-[#0A0A0A]" : "text-white"
        }`}
      >
        {pkg.name}
      </h3>

      {/* Description */}
      <p
        className={`font-dm text-[12px] leading-[1.65] mb-5 ${
          isInverted ? "text-[#0A0A0A]/65" : "text-white/45"
        }`}
      >
        {pkg.description}
      </p>

      {/* Divider */}
      <div
        className={`w-full h-px mb-5 ${
          isInverted ? "bg-[#0A0A0A]/15" : "bg-white/6"
        }`}
      />

      {/* Feature list */}
      <ul className="flex flex-col gap-2.5 flex-1">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5">
            <span
              className={`flex-shrink-0 inline-block w-1.5 h-1.5 rounded-full ${
                isInverted ? "bg-[#0A0A0A]/40" : "bg-[#39FF14]"
              }`}
            />
            <span
              className={`font-dm text-[12px] ${
                isInverted ? "text-[#0A0A0A]/75" : "text-white/55"
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
        className={`
          mt-7 inline-flex items-center justify-center h-11 rounded-full
          font-dm font-semibold text-[13px] transition-all duration-200
          ${
            isInverted
              ? "bg-[#0A0A0A] text-[#39FF14] hover:bg-[#0A0A0A]/85"
              : "bg-white/5 border border-white/10 text-white hover:bg-[#39FF14]/8 hover:border-[#39FF14]/35 hover:text-[#39FF14]"
          }
        `}
      >
        Book This Package
      </a>
    </div>
  );
}

function Packages() {
  return (
    <section id="packages" className="bg-[#111111] py-24">
      {/* Section header — padded */}
      <div className="px-6 sm:px-10 lg:px-16 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block w-6 h-[2px] bg-[#FF6B00]" />
          <span className="font-dm text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF6B00]">
            Bar Packages
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="font-unbounded text-[clamp(1.9rem,4vw,2.9rem)] text-white leading-[1.1]">
            Choose Your Perfect Bar.
          </h2>
          <p className="font-dm text-[13px] text-white/40 max-w-xs leading-relaxed sm:text-right">
            All packages include delivery, setup, and teardown within Metro Manila.
          </p>
        </div>
      </div>

      {/* Mobile: horizontal scroll with snap; Desktop: 4-column grid */}
      <div
        className="
          md:hidden
          flex gap-4 overflow-x-auto snap-x snap-mandatory
          pb-4 px-6 sm:px-10
          scrollbar-none
          [scrollbar-width:none]
          [-ms-overflow-style:none]
        "
      >
        {packageData.map((pkg) => (
          <PackageCard key={pkg.number} pkg={pkg} />
        ))}
        {/* Trailing spacer so last card has breathing room */}
        <div className="flex-shrink-0 w-6" />
      </div>

      <div className="hidden md:grid md:grid-cols-4 gap-5 px-6 sm:px-10 lg:px-16">
        {packageData.map((pkg) => (
          <PackageCard key={pkg.number} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}

// ─── Gallery — masonry-style, first image spans 2 rows ───────────────────────

function Gallery() {
  const galleryItems = [
    {
      src: images.gallery1,
      alt: "Sober Club neon bar setup at a wedding reception in Quezon City",
      span: true,
    },
    {
      src: images.gallery2,
      alt: "Mixologist crafting cocktails at a debut party",
      span: false,
    },
    {
      src: images.gallery3,
      alt: "Cocktail slushie bar at a corporate event",
      span: false,
    },
    {
      src: images.gallery4,
      alt: "Premium bar setup at a rooftop event",
      span: false,
    },
  ];

  return (
    <section id="gallery" className="bg-[#0A0A0A] py-24">
      {/* Section header */}
      <div className="px-6 sm:px-10 lg:px-16 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block w-6 h-[2px] bg-[#39FF14]" />
          <span className="font-dm text-[11px] font-semibold tracking-[0.2em] uppercase text-[#39FF14]">
            Our Work
          </span>
        </div>
        <h2 className="font-unbounded text-[clamp(1.9rem,4vw,2.9rem)] text-white leading-[1.1]">
          Scenes From Our Events.
        </h2>
      </div>

      {/* Masonry grid — full bleed, no outer padding */}
      <div className="px-6 sm:px-10 lg:px-16">
        {/* Mobile: simple 2-col grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl"
              style={{ aspectRatio: i === 0 ? "3/4" : "1/1" }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Desktop: masonry-style grid with row-span */}
        <div
          className="hidden md:grid gap-3"
          style={{
            gridTemplateColumns: "1.3fr 1fr 1fr",
            gridTemplateRows: "260px 260px",
          }}
        >
          {/* First image — large, spans 2 rows */}
          <div
            className="relative overflow-hidden rounded-xl"
            style={{ gridRow: "span 2" }}
          >
            <Image
              src={galleryItems[0].src}
              alt={galleryItems[0].alt}
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
              sizes="40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent pointer-events-none" />
            {/* Neon corner tag */}
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-sm border border-[#39FF14]/30 px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] flex-shrink-0" />
              <span className="font-dm text-[10px] font-semibold text-[#39FF14] tracking-wider uppercase">
                Featured
              </span>
            </div>
          </div>

          {/* Remaining 3 images — normal height */}
          {galleryItems.slice(1).map((item, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                sizes="30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials — full-width dark strip, floating oversized quote ───────────

function Testimonials() {
  return (
    <section className="bg-[#111111] py-24 px-6 sm:px-10 lg:px-16">
      {/* Full-width content — no card, no border */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Green accent line above */}
        <div className="w-12 h-[3px] bg-[#39FF14] rounded-full mx-auto mb-10 neon-line" />

        <blockquote>
          <p className="font-dm text-2xl sm:text-3xl text-white/80 leading-[1.55] italic mb-10 text-balance">
            &ldquo;Sober Club absolutely made our wedding. From the custom cocktail
            menu to the gorgeous bar setup, every detail was perfect. Our guests
            are still talking about the drinks months later. If you want a bar
            service that actually elevates your event, these are your people.&rdquo;
          </p>
          <footer className="flex flex-col items-center gap-1">
            <cite className="font-dm text-[14px] font-semibold text-[#39FF14] not-italic tracking-wide">
              Maria S.
            </cite>
            <span className="font-dm text-[12px] text-white/30 tracking-widest uppercase not-italic">
              Wedding Reception &mdash; Quezon City
            </span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

// ─── Inquiry Form — split layout ──────────────────────────────────────────────

function InquiryForm() {
  const inputClass =
    "w-full bg-[#0A0A0A] border border-white/8 rounded-xl px-4 py-3 font-dm text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-[#39FF14]/45 focus:ring-1 focus:ring-[#39FF14]/20 transition-colors duration-200";
  const labelClass =
    "font-dm text-[11px] font-semibold text-[#39FF14] uppercase tracking-[0.14em] mb-1.5 block";
  const selectClass = `${inputClass} appearance-none cursor-pointer`;

  return (
    <section id="contact" className="bg-[#0A0A0A] py-24 px-6 sm:px-10 lg:px-16">
      {/* Dark card with green left border */}
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-white/6 border-l-[3px] border-l-[#39FF14] bg-[#111111] neon-border">
        <div className="grid lg:grid-cols-[42fr_58fr]">
          {/* Left — heading + contact info */}
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14 bg-[#0F0F0F] border-b lg:border-b-0 lg:border-r border-white/5">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-6 h-[2px] bg-[#39FF14]" />
                <span className="font-dm text-[11px] font-semibold tracking-[0.2em] uppercase text-[#39FF14]">
                  Book Your Bar
                </span>
              </div>

              <h2 className="font-unbounded text-[clamp(1.8rem,3.5vw,2.7rem)] text-white leading-[1.1] mb-5">
                Let&apos;s Make Your
                <br />
                <span className="text-[#39FF14]">Event Legendary.</span>
              </h2>

              <p className="font-dm text-[14px] text-white/50 leading-[1.75] mb-10">
                Fill out the form and our team will get back to you within 24
                hours with availability and a custom quote tailored to your event.
              </p>
            </div>

            {/* Contact details */}
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  href="tel:+639171234567"
                  className="flex items-center gap-3.5 group"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#39FF14]/8 border border-[#39FF14]/20 flex items-center justify-center text-[#39FF14] group-hover:bg-[#39FF14]/15 transition-colors duration-200">
                    <Phone size={14} strokeWidth={1.8} />
                  </span>
                  <span className="font-dm text-[13px] text-white/55 group-hover:text-[#39FF14] transition-colors duration-200">
                    +63 917 123 4567
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@soberclub.ph"
                  className="flex items-center gap-3.5 group"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#39FF14]/8 border border-[#39FF14]/20 flex items-center justify-center text-[#39FF14] group-hover:bg-[#39FF14]/15 transition-colors duration-200">
                    <Mail size={14} strokeWidth={1.8} />
                  </span>
                  <span className="font-dm text-[13px] text-white/55 group-hover:text-[#39FF14] transition-colors duration-200">
                    hello@soberclub.ph
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#39FF14]/8 border border-[#39FF14]/20 flex items-center justify-center text-[#39FF14]">
                  <MapPin size={14} strokeWidth={1.8} />
                </span>
                <span className="font-dm text-[13px] text-white/50 leading-relaxed pt-1.5">
                  Quezon City, Metro Manila
                  <br />Philippines
                </span>
              </li>
            </ul>
          </div>

          {/* Right — form fields */}
          <div className="p-8 sm:p-12 lg:p-14">
            <form
              noValidate
              aria-label="Event inquiry form"
              className="flex flex-col gap-5"
            >
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="neon-full-name" className={labelClass}>
                    Full Name
                  </label>
                  <input
                    id="neon-full-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Juan dela Cruz"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="neon-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="neon-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="juan@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="neon-phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="neon-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+63 9XX XXX XXXX"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="neon-event-date" className={labelClass}>
                    Event Date
                  </label>
                  <input
                    id="neon-event-date"
                    name="eventDate"
                    type="date"
                    className={inputClass}
                    style={{ colorScheme: "dark" }}
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label htmlFor="neon-event-type" className={labelClass}>
                    Event Type
                  </label>
                  <select
                    id="neon-event-type"
                    name="eventType"
                    className={selectClass}
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="debut">Debut</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="christmas">Christmas Party</option>
                    <option value="yacht">Yacht Party</option>
                    <option value="fiesta">Fiesta</option>
                    <option value="product-launch">Product Launch</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="other">Other</option>
                  </select>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 bottom-[14px] border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#39FF14]/50"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="neon-package" className={labelClass}>
                    Preferred Package
                  </label>
                  <select
                    id="neon-package"
                    name="preferredPackage"
                    className={selectClass}
                  >
                    <option value="">Select a package</option>
                    <option value="shooters">Shooters &amp; Cocktail Bar &mdash; P12,500</option>
                    <option value="slushie">Cocktail Slushie Bar &mdash; P20,000</option>
                    <option value="sangria">Sangria Bar &mdash; P25,000</option>
                    <option value="premium">Premium Bar &mdash; P30,000</option>
                  </select>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 bottom-[14px] border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#39FF14]/50"
                  />
                </div>
              </div>

              {/* Row 4 */}
              <div>
                <label htmlFor="neon-guests" className={labelClass}>
                  Estimated Guest Count
                </label>
                <input
                  id="neon-guests"
                  name="guestCount"
                  type="number"
                  min="1"
                  placeholder="e.g. 150"
                  className={inputClass}
                />
              </div>

              {/* Row 5 */}
              <div>
                <label htmlFor="neon-details" className={labelClass}>
                  Additional Details
                </label>
                <textarea
                  id="neon-details"
                  name="details"
                  rows={4}
                  placeholder="Tell us about your event — venue, theme, special requests..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-[52px] px-10 rounded-full bg-[#39FF14] text-[#0A0A0A] font-dm font-semibold text-[14px] hover:brightness-110 active:scale-[0.97] transition-all duration-200 neon-box neon-pulse"
                >
                  Send Inquiry
                  <ArrowRight size={15} strokeWidth={2.4} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer — minimal single-line ────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-none px-6 sm:px-10 lg:px-16 h-[60px] flex items-center justify-between gap-4">
        {/* Logo — left */}
        <a
          href="#"
          aria-label="Sober Club home"
          className="font-unbounded text-[13px] tracking-[0.22em] text-white/40 hover:text-[#39FF14] transition-colors duration-200 uppercase whitespace-nowrap flex-shrink-0"
        >
          Sober Club
        </a>

        {/* Social icons — center */}
        <div className="flex items-center gap-4 mx-auto">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sober Club on Facebook"
            className="text-white/30 hover:text-[#39FF14] transition-colors duration-200"
          >
            <FacebookIcon size={15} strokeWidth={1.8} />
          </a>
          <span className="inline-block w-px h-3 bg-white/10" />
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sober Club on Instagram"
            className="text-white/30 hover:text-[#FF6B00] transition-colors duration-200"
          >
            <InstagramIcon size={15} strokeWidth={1.8} />
          </a>
        </div>

        {/* Copyright — right */}
        <p className="font-dm text-[11px] text-white/25 whitespace-nowrap flex-shrink-0">
          &copy; {new Date().getFullYear()} Sober Club
        </p>
      </div>
    </footer>
  );
}

// ─── Page root ────────────────────────────────────────────────────────────────

export default function NeonNightlife() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-dm">
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <About />
        <Packages />
        <Gallery />
        <Testimonials />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}
