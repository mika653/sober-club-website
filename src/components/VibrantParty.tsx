"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  X,
  Star,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Music2,
  Check,
} from "lucide-react";

function FacebookIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function InstagramIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PackageCardProps {
  name: string;
  price: string;
  priceColor: string;
  features: string[];
  inverted?: boolean;
  badge?: string;
}

interface StatItemProps {
  value: string;
  label: string;
  color: string;
}

interface FormField {
  name: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  venue: string;
  package: string;
  message: string;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function StatItem({ value, label, color }: StatItemProps) {
  return (
    <div className="flex flex-col items-center gap-1 px-6 py-4">
      <span className={`font-sora text-3xl md:text-4xl font-bold ${color}`}>
        {value}
      </span>
      <span className="font-inter text-sm text-[#8B95A5] text-center">
        {label}
      </span>
    </div>
  );
}

function PackageCard({
  name,
  price,
  priceColor,
  features,
  inverted = false,
  badge,
}: PackageCardProps) {
  const cardBase = inverted
    ? "bg-[#7C3AED] border border-[#7C3AED]"
    : "bg-[#0F0F1A] border border-white/10";

  const nameColor = inverted ? "text-white" : "text-white";
  const featureColor = inverted ? "text-[#C4B5FD]" : "text-[#8B95A5]";
  const checkColor = inverted ? "text-[#00E5A0]" : "text-[#00E5A0]";
  const dividerColor = inverted ? "border-white/20" : "border-white/10";

  return (
    <div className={`relative rounded-2xl p-6 flex flex-col gap-4 ${cardBase}`}>
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#080812] text-[#00E5A0] font-inter text-xs font-semibold px-3 py-1 rounded-full border border-[#00E5A0]/30 whitespace-nowrap">
          {badge}
        </span>
      )}
      <div>
        <h3 className={`font-sora text-lg font-bold ${nameColor}`}>{name}</h3>
      </div>
      <div className={`border-t ${dividerColor}`} />
      <div>
        <span className={`font-sora text-2xl font-bold ${priceColor}`}>
          {price}
        </span>
        <span className={`font-inter text-sm ml-1 ${featureColor}`}>
          starting price
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {features.map((feat) => (
          <li key={feat} className="flex items-start gap-2">
            <Check
              size={15}
              className={`mt-0.5 shrink-0 ${checkColor}`}
              aria-hidden="true"
            />
            <span className={`font-inter text-sm ${featureColor}`}>{feat}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-2">
        <button
          type="button"
          className={`w-full rounded-[28px] py-3 font-inter text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED] ${
            inverted
              ? "bg-[#080812] text-[#00E5A0]"
              : "bg-[#7C3AED] text-white"
          }`}
        >
          Book This Package
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function VibrantParty() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormField>({
    name: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    venue: "",
    package: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Packages", href: "#packages" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const packages: PackageCardProps[] = [
    {
      name: "Shooters & Cocktail Bar",
      price: "P12,500",
      priceColor: "text-[#00E5A0]",
      features: [
        "6-hour bar service",
        "Unlimited shooters & cocktails",
        "1 professional bartender",
        "Basic bar setup & props",
        "50-guest capacity",
      ],
    },
    {
      name: "Cocktail Slushie Bar",
      price: "P20,000",
      priceColor: "text-[#C4B5FD]",
      features: [
        "7-hour bar service",
        "Slushie machines included",
        "2 professional bartenders",
        "Themed bar setup",
        "100-guest capacity",
      ],
    },
    {
      name: "Sangria Bar",
      price: "P25,000",
      priceColor: "text-[#F43F5E]",
      features: [
        "8-hour bar service",
        "Premium sangria selection",
        "2 bartenders + 1 sommelier",
        "Elegant bar backdrop",
        "150-guest capacity",
      ],
    },
    {
      name: "Premium Bar",
      price: "Custom",
      priceColor: "text-[#00E5A0]",
      features: [
        "Full-day bar service",
        "Full cocktail menu",
        "Dedicated bar team",
        "Custom-branded setup",
        "Unlimited capacity",
      ],
      inverted: true,
      badge: "BEST SELLER",
    },
  ];

  return (
    <div
      className="min-h-screen font-inter"
      style={{ backgroundColor: "#0F0F1A", color: "#FFFFFF" }}
    >
      {/* ------------------------------------------------------------------ */}
      {/* HEADER                                                              */}
      {/* ------------------------------------------------------------------ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F1A]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-sora text-xl font-bold tracking-widest text-[#00E5A0]"
            aria-label="Sober Club — go to top"
          >
            SOBER CLUB
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-sm text-[#8B95A5] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Book Now pill */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-[#7C3AED] text-white font-inter text-sm font-semibold rounded-[28px] px-5 py-2.5 hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
            >
              Book Now
              <ChevronRight size={15} aria-hidden="true" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-[#8B95A5] hover:text-white transition-colors focus-visible:outline-none"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className="md:hidden bg-[#1A1A2E] border-t border-white/5 px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-sm text-[#8B95A5] hover:text-white transition-colors py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 bg-[#7C3AED] text-white font-inter text-sm font-semibold rounded-[28px] px-5 py-2.5 hover:opacity-90 transition-opacity mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
              <ChevronRight size={15} aria-hidden="true" />
            </a>
          </div>
        )}
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center pt-16"
        aria-label="Hero section"
      >
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-vibrant.jpg"
            alt="Vibrant mobile bar party setup"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F1A]/80 via-[#0F0F1A]/60 to-[#0F0F1A]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 flex flex-col gap-6 md:gap-8 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex self-start">
            <span
              className="font-inter text-xs font-semibold tracking-widest px-4 py-2 rounded-full"
              style={{
                backgroundColor: "rgba(124,58,237,0.40)",
                color: "#C4B5FD",
              }}
            >
              20+ YEARS &middot; 1,000+ PARTIES
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-sora font-bold leading-tight" style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)" }}>
            We Bring
            <br />
            The Party
            <br />
            <span className="text-[#00E5A0]">To You.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-inter text-base md:text-lg text-[#8B95A5] max-w-md leading-relaxed">
            The wildest mobile bar experience in Quezon City, delivered with
            genuine Pinoy warmth. From intimate debuts to grand corporate
            galas — we show up, we set up, we get the party started.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#7C3AED] text-white font-inter font-semibold rounded-[28px] px-6 py-3 hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
            >
              Book Your Bar
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 font-inter font-semibold rounded-[28px] px-6 py-3 border border-white/15 hover:border-white/30 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5A0]"
              style={{ backgroundColor: "#1A1A2E", color: "#00E5A0" }}
            >
              See Packages
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* STATS BAR                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-label="Key statistics"
        className="bg-[#1A1A2E] border-y border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="grid grid-cols-3 divide-x divide-white/5">
            <StatItem
              value="20+"
              label="Years in the game"
              color="text-[#00E5A0]"
            />
            <StatItem
              value="1,000+"
              label="Parties served"
              color="text-[#C4B5FD]"
            />
            <StatItem
              value="5,000+"
              label="Happy guests"
              color="text-[#F43F5E]"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* ABOUT / WHAT WE OFFER                                               */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="about"
        aria-label="About Sober Club"
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Text column */}
            <div className="flex flex-col gap-6">
              <span className="font-inter text-xs font-semibold tracking-widest text-[#00E5A0] uppercase">
                What We Offer
              </span>
              <h2 className="font-sora text-3xl md:text-4xl font-bold leading-tight">
                Not Just Drinks.
                <br />
                We Make{" "}
                <span className="text-[#C4B5FD]">Memories.</span>
              </h2>
              <p className="font-inter text-[#8B95A5] leading-relaxed">
                Sober Club is Quezon City&apos;s premier mobile bar service with
                over two decades of experience turning ordinary celebrations
                into unforgettable ones. We handle everything — from setup to
                last call — so you can focus on enjoying the moment with your
                guests.
              </p>
              <p className="font-inter text-[#6B7280] text-sm leading-relaxed">
                Our team of skilled bartenders brings professional flair and
                Pinoy hospitality to every event. Whether it is an intimate
                family gathering or a 300-person corporate night, we bring the
                full bar experience directly to your venue.
              </p>

              {/* Event type pills */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span
                  className="font-inter text-xs font-semibold px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "rgba(124,58,237,0.30)",
                    color: "#C4B5FD",
                  }}
                >
                  Weddings
                </span>
                <span
                  className="font-inter text-xs font-semibold px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "rgba(0,229,160,0.20)",
                    color: "#00E5A0",
                  }}
                >
                  Debuts
                </span>
                <span
                  className="font-inter text-xs font-semibold px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "rgba(244,63,94,0.20)",
                    color: "#F43F5E",
                  }}
                >
                  Corporate
                </span>
                <span
                  className="font-inter text-xs font-semibold px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "rgba(124,58,237,0.20)",
                    color: "#C4B5FD",
                  }}
                >
                  Birthdays
                </span>
                <span
                  className="font-inter text-xs font-semibold px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "rgba(0,229,160,0.15)",
                    color: "#00E5A0",
                  }}
                >
                  Fiestas
                </span>
              </div>
            </div>

            {/* Image column */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-vibrant.jpg"
                alt="Sober Club bartenders at work during an event"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Decorative corner accent */}
              <div
                className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full blur-2xl opacity-40"
                style={{ backgroundColor: "#7C3AED" }}
                aria-hidden="true"
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
        aria-label="Bar packages"
        className="py-20 md:py-28 bg-[#1A1A2E]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center mb-12 md:mb-16">
            <span className="font-inter text-xs font-semibold tracking-widest text-[#F43F5E] uppercase">
              Our Bar Packages
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-bold">
              Pick Your Vibe.
            </h2>
            <p className="font-inter text-[#8B95A5] max-w-md leading-relaxed">
              Every package includes our signature Sober Club setup, licensed
              bartenders, and the energy that keeps the night alive.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>

          {/* Footnote */}
          <p className="font-inter text-xs text-[#6B7280] text-center mt-8">
            All prices are starting rates. Final pricing depends on guest count,
            venue location, and duration. Contact us for a custom quote.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* GALLERY                                                             */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="gallery"
        aria-label="Photo gallery"
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center mb-10 md:mb-14">
            <span className="font-inter text-xs font-semibold tracking-widest text-[#00E5A0] uppercase">
              Gallery
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-bold">
              The Party Never Stops.
            </h2>
            <p className="font-inter text-[#8B95A5] max-w-md leading-relaxed">
              A glimpse into the nights we have had the privilege of making
              memorable.
            </p>
          </div>

          {/* 2x2 grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              { src: "/images/gallery-1.jpg", alt: "Vibrant cocktail bar setup at a wedding reception" },
              { src: "/images/gallery-2.jpg", alt: "Bartender crafting colorful slushie cocktails" },
              { src: "/images/gallery-3.jpg", alt: "Debut party bar with purple and rose lighting" },
              { src: "/images/gallery-4.jpg", alt: "Corporate event premium bar with branded backdrop" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* TESTIMONIALS                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-label="Customer testimonials"
        className="py-20 md:py-28 bg-[#1A1A2E]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-4 text-center mb-10">
            <span className="font-inter text-xs font-semibold tracking-widest text-[#F43F5E] uppercase">
              What They Say
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-bold">
              Straight From The Party.
            </h2>
          </div>

          {/* Single featured testimonial */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#0F0F1A] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col gap-6">
              {/* Stars */}
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#F43F5E] text-[#F43F5E]"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-inter text-lg md:text-xl text-white/90 leading-relaxed">
                &ldquo;Sober Club turned my debut into the most epic night
                ever. The bar setup was insane — people were still talking about
                it weeks after. The bartenders were so fun and professional at
                the same time. Worth every single peso. If you are looking for
                a mobile bar in QC, this is it. No question.&rdquo;
              </blockquote>

              {/* Author */}
              <footer>
                <cite className="font-inter text-sm not-italic font-semibold text-[#C4B5FD]">
                  — Sofia R., 18th Birthday Debut
                </cite>
              </footer>
            </div>
          </div>

          {/* Supporting mini testimonials */}
          <div className="grid sm:grid-cols-2 gap-4 mt-6 max-w-2xl mx-auto">
            {[
              {
                quote:
                  "The sangria bar was a hit at our company Christmas party. Highly professional team.",
                author: "— Mark D., Corporate Event",
                color: "text-[#00E5A0]",
              },
              {
                quote:
                  "We got the cocktail slushie bar for our wedding and everyone loved it. Super unique!",
                author: "— Carla & Jed, Wedding Reception",
                color: "text-[#F43F5E]",
              },
            ].map((t) => (
              <div
                key={t.author}
                className="bg-[#0F0F1A] border border-white/10 rounded-2xl p-6 flex flex-col gap-3"
              >
                <p className="font-inter text-sm text-[#8B95A5] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <cite className={`font-inter text-xs not-italic font-semibold ${t.color}`}>
                  {t.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* INQUIRY FORM                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="contact"
        aria-label="Book your bar"
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left: copy */}
            <div className="flex flex-col gap-6">
              <span className="font-inter text-xs font-semibold tracking-widest text-[#00E5A0] uppercase">
                Book Your Bar
              </span>
              <h2 className="font-sora text-3xl md:text-4xl font-bold leading-tight">
                Ready To Party?
              </h2>
              <p className="font-inter text-[#8B95A5] leading-relaxed">
                Tell us about your event and we will put together the perfect
                bar package for you. No obligation, no fine print — just good
                drinks, great vibes, and a team that shows up ready to impress.
              </p>

              {/* Contact snippets */}
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(0,229,160,0.15)" }}
                  >
                    <Phone size={15} className="text-[#00E5A0]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-[#6B7280]">Call or text us</p>
                    <p className="font-inter text-sm text-white">+63 917 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(124,58,237,0.20)" }}
                  >
                    <Mail size={15} className="text-[#C4B5FD]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-[#6B7280]">Email us anytime</p>
                    <p className="font-inter text-sm text-white">hello@soberclub.ph</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(244,63,94,0.15)" }}
                  >
                    <MapPin size={15} className="text-[#F43F5E]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-[#6B7280]">We serve</p>
                    <p className="font-inter text-sm text-white">Quezon City & Metro Manila</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-[#1A1A2E] border border-white/10 rounded-2xl p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,229,160,0.15)" }}
                  >
                    <Check size={28} className="text-[#00E5A0]" />
                  </div>
                  <h3 className="font-sora text-xl font-bold text-white">
                    Inquiry Sent!
                  </h3>
                  <p className="font-inter text-sm text-[#8B95A5] max-w-xs leading-relaxed">
                    Thanks! We will get back to you within 24 hours to confirm
                    details and availability.
                  </p>
                  <button
                    type="button"
                    className="mt-2 font-inter text-sm text-[#C4B5FD] underline underline-offset-2 hover:text-white transition-colors"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-5"
                  aria-label="Bar booking inquiry form"
                >
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="vp-name"
                      className="font-inter text-xs font-semibold text-[#00E5A0] uppercase tracking-wider"
                    >
                      Your Name
                    </label>
                    <input
                      id="vp-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Juan dela Cruz"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0F0F1A] border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#7C3AED] transition-colors"
                    />
                  </div>

                  {/* Event Type */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="vp-eventType"
                      className="font-inter text-xs font-semibold text-[#C4B5FD] uppercase tracking-wider"
                    >
                      Type of Event
                    </label>
                    <select
                      id="vp-eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-[#0F0F1A] border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white focus:outline-none focus:border-[#7C3AED] transition-colors appearance-none"
                      style={{ color: formData.eventType ? "#fff" : "#6B7280" }}
                    >
                      <option value="" disabled>
                        Select event type
                      </option>
                      <option value="wedding">Wedding</option>
                      <option value="debut">Debut</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="fiesta">Fiesta / Community Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Date + Guest Count */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="vp-eventDate"
                        className="font-inter text-xs font-semibold text-[#F43F5E] uppercase tracking-wider"
                      >
                        Event Date
                      </label>
                      <input
                        id="vp-eventDate"
                        name="eventDate"
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full bg-[#0F0F1A] border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white focus:outline-none focus:border-[#7C3AED] transition-colors"
                        style={{ colorScheme: "dark" }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="vp-guestCount"
                        className="font-inter text-xs font-semibold text-[#00E5A0] uppercase tracking-wider"
                      >
                        Guest Count
                      </label>
                      <select
                        id="vp-guestCount"
                        name="guestCount"
                        required
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full bg-[#0F0F1A] border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white focus:outline-none focus:border-[#7C3AED] transition-colors appearance-none"
                        style={{ color: formData.guestCount ? "#fff" : "#6B7280" }}
                      >
                        <option value="" disabled>
                          Guests
                        </option>
                        <option value="under50">Under 50</option>
                        <option value="50-100">50 – 100</option>
                        <option value="100-200">100 – 200</option>
                        <option value="200-300">200 – 300</option>
                        <option value="300plus">300+</option>
                      </select>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="vp-venue"
                      className="font-inter text-xs font-semibold text-[#C4B5FD] uppercase tracking-wider"
                    >
                      Venue / Location
                    </label>
                    <input
                      id="vp-venue"
                      name="venue"
                      type="text"
                      placeholder="e.g. Quezon City, specific venue name"
                      value={formData.venue}
                      onChange={handleChange}
                      className="w-full bg-[#0F0F1A] border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#7C3AED] transition-colors"
                    />
                  </div>

                  {/* Package */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="vp-package"
                      className="font-inter text-xs font-semibold text-[#F43F5E] uppercase tracking-wider"
                    >
                      Preferred Package
                    </label>
                    <select
                      id="vp-package"
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className="w-full bg-[#0F0F1A] border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white focus:outline-none focus:border-[#7C3AED] transition-colors appearance-none"
                      style={{ color: formData.package ? "#fff" : "#6B7280" }}
                    >
                      <option value="" disabled>
                        Select a package
                      </option>
                      <option value="shooters">Shooters &amp; Cocktail Bar — P12,500</option>
                      <option value="slushie">Cocktail Slushie Bar — P20,000</option>
                      <option value="sangria">Sangria Bar — P25,000</option>
                      <option value="premium">Premium Bar — Custom</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="vp-message"
                      className="font-inter text-xs font-semibold text-[#00E5A0] uppercase tracking-wider"
                    >
                      Anything Else?
                    </label>
                    <textarea
                      id="vp-message"
                      name="message"
                      rows={4}
                      placeholder="Tell us more about your event, theme, special requests, or any questions you have."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#0F0F1A] border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-[#7C3AED] text-white font-inter font-semibold rounded-[28px] py-3.5 hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED] mt-1"
                  >
                    Send Inquiry
                  </button>

                  <p className="font-inter text-xs text-[#6B7280] text-center leading-relaxed">
                    We respond within 24 hours. No spam, ever.
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
      <footer
        aria-label="Site footer"
        style={{ backgroundColor: "#080812" }}
        className="border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {/* Brand column */}
            <div className="flex flex-col gap-4">
              <span className="font-sora text-xl font-bold tracking-widest text-[#00E5A0]">
                SOBER CLUB
              </span>
              <p className="font-inter text-sm text-[#6B7280] leading-relaxed max-w-xs">
                It&rsquo;s never a party unless we&rsquo;re there. Quezon
                City&rsquo;s most trusted mobile bar service since 2004.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3 mt-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sober Club on Facebook"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                  style={{ backgroundColor: "rgba(124,58,237,0.25)" }}
                >
                  <FacebookIcon size={16} className="text-[#C4B5FD]" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sober Club on Instagram"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F43F5E]"
                  style={{ backgroundColor: "rgba(244,63,94,0.20)" }}
                >
                  <InstagramIcon size={16} className="text-[#F43F5E]" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sober Club on TikTok"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5A0]"
                  style={{ backgroundColor: "rgba(0,229,160,0.15)" }}
                >
                  <Music2 size={16} className="text-[#00E5A0]" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Links column */}
            <div className="flex flex-col gap-4">
              <h3 className="font-inter text-xs font-semibold text-white uppercase tracking-widest">
                Quick Links
              </h3>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-col gap-2.5">
                  {[
                    { label: "About Us", href: "#about" },
                    { label: "Our Packages", href: "#packages" },
                    { label: "Photo Gallery", href: "#gallery" },
                    { label: "Book Now", href: "#contact" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="font-inter text-sm text-[#6B7280] hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact column */}
            <div className="flex flex-col gap-4">
              <h3 className="font-inter text-xs font-semibold text-white uppercase tracking-widest">
                Get In Touch
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2.5">
                  <Phone size={14} className="text-[#00E5A0] mt-0.5 shrink-0" aria-hidden="true" />
                  <a
                    href="tel:+639171234567"
                    className="font-inter text-sm text-[#6B7280] hover:text-white transition-colors"
                  >
                    +63 917 123 4567
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail size={14} className="text-[#C4B5FD] mt-0.5 shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:hello@soberclub.ph"
                    className="font-inter text-sm text-[#6B7280] hover:text-white transition-colors"
                  >
                    hello@soberclub.ph
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-[#F43F5E] mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="font-inter text-sm text-[#6B7280]">
                    Quezon City &amp; Metro Manila, Philippines
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider + copyright */}
          <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-inter text-xs text-[#6B7280]">
              &copy; {new Date().getFullYear()} Sober Club. All rights reserved.
            </p>
            <p className="font-inter text-xs text-[#6B7280]">
              Mobile bar service &mdash; Quezon City, Philippines
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
