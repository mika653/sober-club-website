"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowRight,
  Star,
  Sparkles,
  GlassWater,
  PartyPopper,
  Music,
} from "lucide-react";
import { images } from "@/lib/images";

// ---------------------------------------------------------------------------
// Inline SVG social icons (lucide-react does not export Facebook/Instagram)
// ---------------------------------------------------------------------------

function FacebookIcon({
  size = 16,
  className,
}: {
  size?: number;
  className?: string;
}) {
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
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({
  size = 16,
  className,
}: {
  size?: number;
  className?: string;
}) {
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
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

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

  return (
    <div
      className="min-h-screen font-inter"
      style={{ backgroundColor: "#0F0F1A", color: "#FFFFFF" }}
    >
      {/* ================================================================== */}
      {/* HEADER                                                              */}
      {/* ================================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F1A]/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-sora text-xl font-bold tracking-widest text-[#00E5A0]"
            aria-label="Sober Club — go to top"
          >
            SOBER CLUB
          </a>

          {/* Desktop nav — pill-shaped links */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-sm text-[#8B95A5] hover:text-white hover:bg-white/5 transition-all rounded-[28px] px-4 py-2"
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
          <div className="md:hidden bg-[#1A1A2E] border-t border-white/5 px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-sm text-[#8B95A5] hover:text-white transition-colors py-2 px-3 rounded-xl hover:bg-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 bg-[#7C3AED] text-white font-inter text-sm font-semibold rounded-[28px] px-5 py-2.5 hover:opacity-90 transition-opacity mt-1"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
              <ChevronRight size={15} aria-hidden="true" />
            </a>
          </div>
        )}
      </header>

      {/* ================================================================== */}
      {/* HERO — CENTERED TEXT, MASSIVE HEADLINE, FLOATING STAT CARDS        */}
      {/* ================================================================== */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background image with heavy overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={images.heroVibrant}
            alt="Vibrant mobile bar party atmosphere"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F1A]/75 via-[#0F0F1A]/70 to-[#0F0F1A]" />
          {/* Decorative ambient blobs */}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 -translate-x-1/2 -translate-y-1/2"
            style={{ backgroundColor: "#7C3AED" }}
            aria-hidden="true"
          />
          <div
            className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-15 translate-x-1/2"
            style={{ backgroundColor: "#00E5A0" }}
            aria-hidden="true"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-6 md:gap-8 py-24 md:py-32">
          {/* Eyebrow badge */}
          <span
            className="font-inter text-xs font-semibold tracking-widest px-5 py-2 rounded-[28px] border border-[#7C3AED]/40"
            style={{ backgroundColor: "rgba(124,58,237,0.25)", color: "#C4B5FD" }}
          >
            QUEZON CITY&apos;S PREMIER MOBILE BAR SERVICE
          </span>

          {/* Massive centered headline */}
          <h1 className="font-sora font-black text-5xl md:text-7xl leading-[1.05] tracking-tight uppercase">
            WE BRING THE{" "}
            <span
              className="relative inline-block"
              style={{ color: "#7C3AED" }}
            >
              PARTY
              {/* Underline accent */}
              <span
                className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
                style={{ backgroundColor: "#7C3AED", opacity: 0.5 }}
                aria-hidden="true"
              />
            </span>{" "}
            TO YOU
          </h1>

          {/* Centered subheadline */}
          <p className="font-inter text-base md:text-lg text-[#8B95A5] max-w-xl leading-relaxed">
            From intimate debuts to grand corporate galas — Sober Club arrives,
            sets up, and gets the party started. It&apos;s never a party unless
            we&apos;re there.
          </p>

          {/* Two centered CTAs side by side */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#7C3AED] text-white font-inter font-semibold rounded-[28px] px-7 py-3.5 hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED] text-sm"
            >
              Book Your Bar
              <ArrowRight size={15} aria-hidden="true" />
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 font-inter font-semibold rounded-[28px] px-7 py-3.5 border border-white/15 hover:border-[#00E5A0]/40 hover:text-[#00E5A0] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5A0] text-sm"
              style={{ backgroundColor: "rgba(26,26,46,0.80)", color: "#00E5A0" }}
            >
              See Packages
            </a>
          </div>

          {/* Floating stat cards row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 w-full">
            {/* Stat card — emerald */}
            <div
              className="flex flex-col items-center gap-1 px-6 py-4 rounded-[20px] border border-white/10 min-w-[110px]"
              style={{ backgroundColor: "rgba(26,26,46,0.85)", borderTopColor: "#00E5A0", borderTopWidth: "2px" }}
            >
              <span className="font-sora text-2xl font-black text-[#00E5A0]">20+</span>
              <span className="font-inter text-xs text-[#8B95A5] text-center leading-snug">
                Years in<br />the game
              </span>
            </div>
            {/* Stat card — purple */}
            <div
              className="flex flex-col items-center gap-1 px-6 py-4 rounded-[20px] border border-white/10 min-w-[110px]"
              style={{ backgroundColor: "rgba(26,26,46,0.85)", borderTopColor: "#7C3AED", borderTopWidth: "2px" }}
            >
              <span className="font-sora text-2xl font-black text-[#C4B5FD]">1,000+</span>
              <span className="font-inter text-xs text-[#8B95A5] text-center leading-snug">
                Parties<br />served
              </span>
            </div>
            {/* Stat card — rose */}
            <div
              className="flex flex-col items-center gap-1 px-6 py-4 rounded-[20px] border border-white/10 min-w-[110px]"
              style={{ backgroundColor: "rgba(26,26,46,0.85)", borderTopColor: "#F43F5E", borderTopWidth: "2px" }}
            >
              <span className="font-sora text-2xl font-black text-[#F43F5E]">5,000+</span>
              <span className="font-inter text-xs text-[#8B95A5] text-center leading-snug">
                Happy<br />guests
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* ABOUT — 2x2 BENTO GRID                                             */}
      {/* ================================================================== */}
      <section
        id="about"
        aria-label="About Sober Club"
        className="py-20 md:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section label */}
          <div className="mb-8 flex items-center gap-3">
            <span
              className="font-inter text-xs font-semibold tracking-widest text-[#00E5A0] uppercase px-4 py-1.5 rounded-[28px] border border-[#00E5A0]/25"
              style={{ backgroundColor: "rgba(0,229,160,0.10)" }}
            >
              What We Offer
            </span>
          </div>

          {/* 2x2 Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* TOP-LEFT: Heading + description */}
            <div
              className="rounded-[20px] border border-white/8 p-8 md:p-10 flex flex-col justify-between gap-6"
              style={{ backgroundColor: "#1A1A2E" }}
            >
              <div className="flex flex-col gap-4">
                <h2 className="font-sora text-3xl md:text-4xl font-bold leading-tight">
                  Not Just Drinks.
                  <br />
                  We Make{" "}
                  <span style={{ color: "#C4B5FD" }}>Memories.</span>
                </h2>
                <p className="font-inter text-[#8B95A5] leading-relaxed text-sm md:text-base">
                  Sober Club is Quezon City&apos;s premier mobile bar service with
                  over two decades of experience turning ordinary celebrations
                  into unforgettable ones. We handle everything — from setup to
                  last call — so you can focus on enjoying the moment.
                </p>
                <p className="font-inter text-[#6B7280] text-sm leading-relaxed">
                  Our skilled bartenders bring professional flair and genuine
                  Pinoy warmth to every event. Whether it is an intimate family
                  gathering or a 300-person corporate night, we bring the full
                  bar experience directly to your venue.
                </p>
              </div>
              {/* Accent decoration */}
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#00E5A0]" aria-hidden="true" />
                <span className="font-inter text-xs text-[#6B7280]">
                  Serving Metro Manila since 2004
                </span>
              </div>
            </div>

            {/* TOP-RIGHT: Square image */}
            <div
              className="relative w-full aspect-square rounded-[20px] overflow-hidden border border-white/8"
              style={{ minHeight: "280px" }}
            >
              <Image
                src={images.aboutVibrant}
                alt="Sober Club bartenders crafting cocktails at an event"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-transparent" />
            </div>

            {/* BOTTOM-LEFT: Tall image */}
            <div
              className="relative w-full rounded-[20px] overflow-hidden border border-white/8"
              style={{ minHeight: "320px" }}
            >
              <Image
                src={images.aboutElegant}
                alt="Elegant mobile bar setup ready for guests"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/60 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span
                  className="font-inter text-xs font-semibold px-3 py-1.5 rounded-[28px]"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.55)",
                    color: "#00E5A0",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(0,229,160,0.25)",
                  }}
                >
                  Fully set up at your venue
                </span>
              </div>
            </div>

            {/* BOTTOM-RIGHT: Event types as colorful pills */}
            <div
              className="rounded-[20px] border border-white/8 p-8 flex flex-col justify-between gap-6"
              style={{ backgroundColor: "#1A1A2E" }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <PartyPopper size={18} className="text-[#F43F5E]" aria-hidden="true" />
                  <h3 className="font-sora text-lg font-bold text-white">
                    We Do Every Kind of Event
                  </h3>
                </div>
                <p className="font-inter text-xs text-[#6B7280] leading-relaxed">
                  Name the occasion — we have done them all, and we know exactly
                  how to make each one unforgettable.
                </p>
              </div>

              {/* Colorful pill grid */}
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Weddings", bg: "rgba(124,58,237,0.25)", color: "#C4B5FD", border: "rgba(124,58,237,0.40)" },
                  { label: "Debuts", bg: "rgba(0,229,160,0.15)", color: "#00E5A0", border: "rgba(0,229,160,0.30)" },
                  { label: "Corporate", bg: "rgba(244,63,94,0.15)", color: "#F43F5E", border: "rgba(244,63,94,0.30)" },
                  { label: "Birthdays", bg: "rgba(124,58,237,0.20)", color: "#C4B5FD", border: "rgba(124,58,237,0.30)" },
                  { label: "Fiestas", bg: "rgba(0,229,160,0.12)", color: "#00E5A0", border: "rgba(0,229,160,0.25)" },
                  { label: "Reunions", bg: "rgba(244,63,94,0.12)", color: "#F43F5E", border: "rgba(244,63,94,0.25)" },
                  { label: "Prom Nights", bg: "rgba(124,58,237,0.15)", color: "#C4B5FD", border: "rgba(124,58,237,0.25)" },
                  { label: "House Parties", bg: "rgba(0,229,160,0.10)", color: "#00E5A0", border: "rgba(0,229,160,0.20)" },
                ].map((pill) => (
                  <span
                    key={pill.label}
                    className="font-inter text-xs font-semibold px-4 py-2 rounded-[28px] border"
                    style={{
                      backgroundColor: pill.bg,
                      color: pill.color,
                      borderColor: pill.border,
                    }}
                  >
                    {pill.label}
                  </span>
                ))}
              </div>

              <div
                className="mt-auto p-4 rounded-[16px] border border-[#00E5A0]/15"
                style={{ backgroundColor: "rgba(0,229,160,0.06)" }}
              >
                <p className="font-inter text-xs text-[#8B95A5] leading-relaxed">
                  &ldquo;Our bartenders don&apos;t just pour drinks — they perform.
                  Every event gets a setup tailored to your theme and
                  crowd.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PACKAGES — FEATURED BENTO/FEATURE GRID                             */}
      {/* ================================================================== */}
      <section
        id="packages"
        aria-label="Bar packages"
        className="py-20 md:py-28"
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center mb-12 md:mb-16">
            <span
              className="font-inter text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-[28px] border border-[#F43F5E]/25"
              style={{ backgroundColor: "rgba(244,63,94,0.10)", color: "#F43F5E" }}
            >
              Bar Packages
            </span>
            <h2 className="font-sora text-3xl md:text-5xl font-bold leading-tight">
              Pick Your Vibe.
            </h2>
            <p className="font-inter text-[#8B95A5] max-w-md leading-relaxed text-sm">
              Every package includes our signature Sober Club setup, licensed
              bartenders, and the energy that keeps the night alive.
            </p>
          </div>

          {/* Bento packages grid:
              Desktop: [Premium big — 2col | Shooters 1col] / [Slushie | Sangria]
              Mobile: single column stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* PREMIUM — spans 2 columns, gradient purple */}
            <div
              className="md:col-span-2 rounded-[20px] p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #4C1D95 0%, #7C3AED 60%, #5B21B6 100%)",
                border: "1px solid rgba(196,181,253,0.20)",
              }}
            >
              {/* Best seller badge */}
              <span
                className="absolute top-6 right-6 font-inter text-xs font-bold tracking-widest px-3 py-1.5 rounded-[28px]"
                style={{ backgroundColor: "#00E5A0", color: "#0F0F1A" }}
              >
                BEST SELLER
              </span>
              {/* Glow blob */}
              <div
                className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full blur-[80px] opacity-30"
                style={{ backgroundColor: "#C4B5FD" }}
                aria-hidden="true"
              />

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-[16px] flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <Sparkles size={18} className="text-[#C4B5FD]" aria-hidden="true" />
                </div>
                <h3 className="font-sora text-xl font-bold text-white">Premium Bar</h3>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-sora text-4xl md:text-5xl font-black text-white">
                  Custom
                </span>
                <span className="font-inter text-sm text-[#C4B5FD]">
                  Tailored pricing for your event
                </span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Full-day bar service",
                  "Complete cocktail menu",
                  "Dedicated bar team",
                  "Custom-branded setup",
                  "Unlimited guest capacity",
                  "Premium spirits selection",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(0,229,160,0.25)" }}
                      aria-hidden="true"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#00E5A0" }}
                      />
                    </span>
                    <span className="font-inter text-sm text-[#C4B5FD]">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-inter text-sm font-semibold rounded-[28px] px-6 py-3 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5A0]"
                  style={{ backgroundColor: "#0F0F1A", color: "#00E5A0" }}
                >
                  Get a Custom Quote
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* SHOOTERS */}
            <div
              className="rounded-[20px] border border-white/8 p-7 flex flex-col gap-5"
              style={{ backgroundColor: "#0F0F1A" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-[16px] flex items-center justify-center"
                  style={{ backgroundColor: "rgba(0,229,160,0.12)" }}
                >
                  <GlassWater size={18} className="text-[#00E5A0]" aria-hidden="true" />
                </div>
                <h3 className="font-sora text-base font-bold text-white leading-tight">
                  Shooters &amp; Cocktail Bar
                </h3>
              </div>

              <div className="border-t border-white/8" />

              <div className="flex flex-col gap-0.5">
                <span className="font-sora text-3xl font-black text-[#00E5A0]">P12,500</span>
                <span className="font-inter text-xs text-[#6B7280]">starting price</span>
              </div>

              <ul className="flex flex-col gap-2 flex-1">
                {[
                  "6-hour bar service",
                  "Unlimited shooters & cocktails",
                  "1 professional bartender",
                  "Basic bar setup & props",
                  "50-guest capacity",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "#00E5A0" }}
                      aria-hidden="true"
                    />
                    <span className="font-inter text-xs text-[#8B95A5]">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full font-inter text-sm font-semibold rounded-[28px] py-3 transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                style={{ backgroundColor: "#7C3AED", color: "#fff" }}
              >
                Book This Package
              </a>
            </div>

            {/* SLUSHIE */}
            <div
              className="rounded-[20px] border border-white/8 p-7 flex flex-col gap-5"
              style={{ backgroundColor: "#0F0F1A" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-[16px] flex items-center justify-center"
                  style={{ backgroundColor: "rgba(196,181,253,0.12)" }}
                >
                  <Music size={18} className="text-[#C4B5FD]" aria-hidden="true" />
                </div>
                <h3 className="font-sora text-base font-bold text-white leading-tight">
                  Cocktail Slushie Bar
                </h3>
              </div>

              <div className="border-t border-white/8" />

              <div className="flex flex-col gap-0.5">
                <span className="font-sora text-3xl font-black text-[#C4B5FD]">P20,000</span>
                <span className="font-inter text-xs text-[#6B7280]">starting price</span>
              </div>

              <ul className="flex flex-col gap-2 flex-1">
                {[
                  "7-hour bar service",
                  "Slushie machines included",
                  "2 professional bartenders",
                  "Themed bar setup",
                  "100-guest capacity",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "#C4B5FD" }}
                      aria-hidden="true"
                    />
                    <span className="font-inter text-xs text-[#8B95A5]">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full font-inter text-sm font-semibold rounded-[28px] py-3 transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                style={{ backgroundColor: "#7C3AED", color: "#fff" }}
              >
                Book This Package
              </a>
            </div>

            {/* SANGRIA */}
            <div
              className="rounded-[20px] border border-white/8 p-7 flex flex-col gap-5"
              style={{ backgroundColor: "#0F0F1A" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-[16px] flex items-center justify-center"
                  style={{ backgroundColor: "rgba(244,63,94,0.12)" }}
                >
                  <PartyPopper size={18} className="text-[#F43F5E]" aria-hidden="true" />
                </div>
                <h3 className="font-sora text-base font-bold text-white leading-tight">
                  Sangria Bar
                </h3>
              </div>

              <div className="border-t border-white/8" />

              <div className="flex flex-col gap-0.5">
                <span className="font-sora text-3xl font-black text-[#F43F5E]">P25,000</span>
                <span className="font-inter text-xs text-[#6B7280]">starting price</span>
              </div>

              <ul className="flex flex-col gap-2 flex-1">
                {[
                  "8-hour bar service",
                  "Premium sangria selection",
                  "2 bartenders + 1 sommelier",
                  "Elegant bar backdrop",
                  "150-guest capacity",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "#F43F5E" }}
                      aria-hidden="true"
                    />
                    <span className="font-inter text-xs text-[#8B95A5]">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full font-inter text-sm font-semibold rounded-[28px] py-3 transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                style={{ backgroundColor: "#7C3AED", color: "#fff" }}
              >
                Book This Package
              </a>
            </div>
          </div>

          <p className="font-inter text-xs text-[#6B7280] text-center mt-8">
            All prices are starting rates. Final pricing depends on guest count,
            venue location, and duration. Contact us for a custom quote.
          </p>
        </div>
      </section>

      {/* ================================================================== */}
      {/* GALLERY — OVERLAPPING COLLAGE CARDS                                */}
      {/* ================================================================== */}
      <section
        id="gallery"
        aria-label="Photo gallery"
        className="py-20 md:py-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center mb-10 md:mb-16">
            <span
              className="font-inter text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-[28px] border border-[#00E5A0]/25"
              style={{ backgroundColor: "rgba(0,229,160,0.08)", color: "#00E5A0" }}
            >
              Gallery
            </span>
            <h2 className="font-sora text-3xl md:text-5xl font-bold leading-tight">
              The Party Never Stops.
            </h2>
            <p className="font-inter text-[#8B95A5] max-w-sm leading-relaxed text-sm">
              A glimpse into the nights we&apos;ve had the privilege of making
              unforgettable.
            </p>
          </div>

          {/* Desktop: overlapping collage — hidden on mobile */}
          <div className="hidden md:flex items-center justify-center relative h-[480px]">
            {/* Image 1 — far left, rotated -2deg */}
            <div
              className="absolute w-64 h-80 rounded-[20px] overflow-hidden border-2 border-white/10 shadow-2xl"
              style={{
                transform: "rotate(-2deg) translateX(-320px)",
                zIndex: 1,
              }}
            >
              <Image
                src={images.gallery1}
                alt="Vibrant cocktail bar setup at a wedding reception"
                fill
                className="object-cover object-center"
                sizes="256px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/50 to-transparent" />
            </div>

            {/* Image 2 — left-center, rotated 1deg, layered higher */}
            <div
              className="absolute w-60 h-72 rounded-[20px] overflow-hidden border-2 border-white/10 shadow-2xl"
              style={{
                transform: "rotate(1deg) translateX(-120px)",
                zIndex: 2,
              }}
            >
              <Image
                src={images.gallery2}
                alt="Bartender crafting colorful slushie cocktails"
                fill
                className="object-cover object-center"
                sizes="240px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/40 to-transparent" />
            </div>

            {/* Image 3 — center, larger, no rotation, highest z-index */}
            <div
              className="absolute w-72 h-96 rounded-[20px] overflow-hidden border-2 border-[#7C3AED]/40 shadow-2xl"
              style={{
                transform: "rotate(-1deg) translateX(80px)",
                zIndex: 3,
                boxShadow: "0 0 40px rgba(124,58,237,0.25)",
              }}
            >
              <Image
                src={images.gallery3}
                alt="Debut party bar with purple and rose lighting"
                fill
                className="object-cover object-center"
                sizes="288px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/30 to-transparent" />
            </div>

            {/* Image 4 — far right, rotated 2deg */}
            <div
              className="absolute w-60 h-72 rounded-[20px] overflow-hidden border-2 border-white/10 shadow-2xl"
              style={{
                transform: "rotate(2deg) translateX(320px)",
                zIndex: 2,
              }}
            >
              <Image
                src={images.gallery4}
                alt="Corporate event premium bar with branded backdrop"
                fill
                className="object-cover object-center"
                sizes="240px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/50 to-transparent" />
            </div>
          </div>

          {/* Mobile: standard 2x2 grid */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {[
              { src: images.gallery1, alt: "Vibrant cocktail bar setup at a wedding reception" },
              { src: images.gallery2, alt: "Bartender crafting colorful slushie cocktails" },
              { src: images.gallery3, alt: "Debut party bar with purple and rose lighting" },
              { src: images.gallery4, alt: "Corporate event premium bar with branded backdrop" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-square rounded-[16px] overflow-hidden border border-white/8"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* TESTIMONIALS — CAROUSEL LOOK                                        */}
      {/* ================================================================== */}
      <section
        aria-label="Customer testimonials"
        className="py-20 md:py-28"
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-4 text-center mb-10 md:mb-14">
            <span
              className="font-inter text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-[28px] border border-[#F43F5E]/25"
              style={{ backgroundColor: "rgba(244,63,94,0.08)", color: "#F43F5E" }}
            >
              What They Say
            </span>
            <h2 className="font-sora text-3xl md:text-5xl font-bold leading-tight">
              Straight From The Party.
            </h2>
          </div>

          {/* Carousel look — side cards peek in on desktop */}
          <div className="relative flex items-center justify-center gap-4">

            {/* LEFT side card — faded, smaller, hidden on mobile */}
            <div
              className="hidden md:block w-64 shrink-0 rounded-[20px] border border-white/5 p-6 flex-col gap-4 opacity-40 scale-95 origin-right"
              style={{ backgroundColor: "#0F0F1A" }}
              aria-hidden="true"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className="fill-[#F43F5E] text-[#F43F5E]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="font-inter text-sm text-[#8B95A5] leading-relaxed line-clamp-4">
                &ldquo;The sangria bar was a hit at our company Christmas party.
                Highly professional team and incredible setup.&rdquo;
              </p>
              <cite className="font-inter text-xs text-[#00E5A0] not-italic font-semibold mt-3 block">
                — Mark D., Corporate Event
              </cite>
            </div>

            {/* FEATURED CENTER card — larger, purple left border */}
            <div
              className="w-full md:max-w-xl rounded-[20px] border border-white/10 p-8 md:p-10 flex flex-col gap-5 relative"
              style={{
                backgroundColor: "#0F0F1A",
                borderLeft: "4px solid #7C3AED",
              }}
            >
              {/* Decorative quote mark */}
              <span
                className="absolute top-6 right-8 font-sora text-7xl font-black leading-none select-none"
                style={{ color: "rgba(124,58,237,0.15)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

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
                &ldquo;Sober Club turned my debut into the most epic night ever.
                The bar setup was insane — people were still talking about it
                weeks after. The bartenders were so fun and professional at the
                same time. Worth every single peso. If you&apos;re looking for
                a mobile bar in QC, this is it. No question.&rdquo;
              </blockquote>

              <footer>
                <cite className="font-inter text-sm not-italic font-semibold text-[#C4B5FD]">
                  — Sofia R., 18th Birthday Debut
                </cite>
              </footer>
            </div>

            {/* RIGHT side card — faded, smaller, hidden on mobile */}
            <div
              className="hidden md:block w-64 shrink-0 rounded-[20px] border border-white/5 p-6 opacity-40 scale-95 origin-left"
              style={{ backgroundColor: "#0F0F1A" }}
              aria-hidden="true"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className="fill-[#F43F5E] text-[#F43F5E]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="font-inter text-sm text-[#8B95A5] leading-relaxed line-clamp-4">
                &ldquo;We got the cocktail slushie bar for our wedding and
                everyone loved it. Super unique and the team was amazing.&rdquo;
              </p>
              <cite className="font-inter text-xs text-[#F43F5E] not-italic font-semibold mt-3 block">
                — Carla &amp; Jed, Wedding Reception
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* INQUIRY FORM — FLOATING CARD STYLE                                 */}
      {/* ================================================================== */}
      <section
        id="contact"
        aria-label="Book your bar"
        className="py-20 md:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Floating card with purple glow */}
          <div
            className="rounded-[20px] border border-white/8 overflow-hidden"
            style={{
              backgroundColor: "#1A1A2E",
              boxShadow: "0 0 40px rgba(124,58,237,0.15)",
            }}
          >
            <div className="grid md:grid-cols-2">
              {/* LEFT side — heading + fun copy + illustration area */}
              <div
                className="p-8 md:p-12 flex flex-col gap-6 relative overflow-hidden"
                style={{
                  borderRight: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Background glow decoration */}
                <div
                  className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[80px] opacity-25"
                  style={{ backgroundColor: "#7C3AED" }}
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-10 right-0 w-48 h-48 rounded-full blur-[60px] opacity-15"
                  style={{ backgroundColor: "#00E5A0" }}
                  aria-hidden="true"
                />

                <span
                  className="relative font-inter text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-[28px] border border-[#00E5A0]/25 self-start"
                  style={{ backgroundColor: "rgba(0,229,160,0.08)", color: "#00E5A0" }}
                >
                  Book Your Bar
                </span>

                <h2 className="relative font-sora text-3xl md:text-4xl font-bold leading-tight">
                  Ready To Party?
                </h2>

                <p className="relative font-inter text-[#8B95A5] leading-relaxed text-sm md:text-base">
                  Tell us about your event and we&apos;ll put together the
                  perfect bar package for you. No obligation, no fine print —
                  just good drinks, great vibes, and a team that shows up ready
                  to impress.
                </p>

                {/* Illustration area — decorative stat cards stack */}
                <div className="relative flex flex-col gap-3 mt-2">
                  <div
                    className="rounded-[16px] border border-white/8 p-4 flex items-center gap-3"
                    style={{ backgroundColor: "rgba(15,15,26,0.70)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(0,229,160,0.15)" }}
                    >
                      <Phone size={14} className="text-[#00E5A0]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-[#6B7280]">Call or text us</p>
                      <a
                        href="tel:+639171234567"
                        className="font-inter text-sm text-white hover:text-[#00E5A0] transition-colors"
                      >
                        +63 917 123 4567
                      </a>
                    </div>
                  </div>

                  <div
                    className="rounded-[16px] border border-white/8 p-4 flex items-center gap-3"
                    style={{ backgroundColor: "rgba(15,15,26,0.70)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(124,58,237,0.20)" }}
                    >
                      <Mail size={14} className="text-[#C4B5FD]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-[#6B7280]">Email us anytime</p>
                      <a
                        href="mailto:hello@soberclub.ph"
                        className="font-inter text-sm text-white hover:text-[#C4B5FD] transition-colors"
                      >
                        hello@soberclub.ph
                      </a>
                    </div>
                  </div>

                  <div
                    className="rounded-[16px] border border-white/8 p-4 flex items-center gap-3"
                    style={{ backgroundColor: "rgba(15,15,26,0.70)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(244,63,94,0.15)" }}
                    >
                      <MapPin size={14} className="text-[#F43F5E]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-[#6B7280]">We serve</p>
                      <p className="font-inter text-sm text-white">Quezon City &amp; Metro Manila</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT side — form fields */}
              <div className="p-8 md:p-12">
                {submitted ? (
                  <div className="flex flex-col items-center gap-5 py-12 text-center h-full justify-center">
                    <div
                      className="w-16 h-16 rounded-[20px] flex items-center justify-center"
                      style={{ backgroundColor: "rgba(0,229,160,0.15)", border: "1px solid rgba(0,229,160,0.30)" }}
                    >
                      <Sparkles size={28} className="text-[#00E5A0]" />
                    </div>
                    <h3 className="font-sora text-2xl font-bold text-white">
                      Inquiry Sent!
                    </h3>
                    <p className="font-inter text-sm text-[#8B95A5] max-w-xs leading-relaxed">
                      Thanks! We&apos;ll get back to you within 24 hours to
                      confirm details and availability. Get ready to party.
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
                        className="font-inter text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "#00E5A0" }}
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
                        className="w-full border rounded-[16px] px-4 py-3 font-inter text-sm text-white placeholder-[#6B7280] focus:outline-none transition-colors"
                        style={{
                          backgroundColor: "#0F0F1A",
                          borderColor: "rgba(255,255,255,0.10)",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")}
                      />
                    </div>

                    {/* Event Type */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="vp-eventType"
                        className="font-inter text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "#C4B5FD" }}
                      >
                        Type of Event
                      </label>
                      <select
                        id="vp-eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full border rounded-[16px] px-4 py-3 font-inter text-sm text-white focus:outline-none transition-colors appearance-none"
                        style={{
                          backgroundColor: "#0F0F1A",
                          borderColor: "rgba(255,255,255,0.10)",
                          color: formData.eventType ? "#fff" : "#6B7280",
                        }}
                      >
                        <option value="" disabled>Select event type</option>
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
                          className="font-inter text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "#F43F5E" }}
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
                          className="w-full border rounded-[16px] px-4 py-3 font-inter text-sm text-white focus:outline-none transition-colors"
                          style={{
                            backgroundColor: "#0F0F1A",
                            borderColor: "rgba(255,255,255,0.10)",
                            colorScheme: "dark",
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="vp-guestCount"
                          className="font-inter text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "#00E5A0" }}
                        >
                          Guest Count
                        </label>
                        <select
                          id="vp-guestCount"
                          name="guestCount"
                          required
                          value={formData.guestCount}
                          onChange={handleChange}
                          className="w-full border rounded-[16px] px-4 py-3 font-inter text-sm focus:outline-none transition-colors appearance-none"
                          style={{
                            backgroundColor: "#0F0F1A",
                            borderColor: "rgba(255,255,255,0.10)",
                            color: formData.guestCount ? "#fff" : "#6B7280",
                          }}
                        >
                          <option value="" disabled>Guests</option>
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
                        className="font-inter text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "#C4B5FD" }}
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
                        className="w-full border rounded-[16px] px-4 py-3 font-inter text-sm text-white placeholder-[#6B7280] focus:outline-none transition-colors"
                        style={{
                          backgroundColor: "#0F0F1A",
                          borderColor: "rgba(255,255,255,0.10)",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")}
                      />
                    </div>

                    {/* Package */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="vp-package"
                        className="font-inter text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "#F43F5E" }}
                      >
                        Preferred Package
                      </label>
                      <select
                        id="vp-package"
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className="w-full border rounded-[16px] px-4 py-3 font-inter text-sm focus:outline-none transition-colors appearance-none"
                        style={{
                          backgroundColor: "#0F0F1A",
                          borderColor: "rgba(255,255,255,0.10)",
                          color: formData.package ? "#fff" : "#6B7280",
                        }}
                      >
                        <option value="" disabled>Select a package</option>
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
                        className="font-inter text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "#00E5A0" }}
                      >
                        Anything Else?
                      </label>
                      <textarea
                        id="vp-message"
                        name="message"
                        rows={4}
                        placeholder="Tell us your event theme, special requests, or any questions you have."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border rounded-[16px] px-4 py-3 font-inter text-sm text-white placeholder-[#6B7280] focus:outline-none transition-colors resize-none"
                        style={{
                          backgroundColor: "#0F0F1A",
                          borderColor: "rgba(255,255,255,0.10)",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full font-inter font-semibold rounded-[28px] py-3.5 hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED] text-sm mt-1"
                      style={{ backgroundColor: "#7C3AED", color: "#fff" }}
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
        </div>
      </section>

      {/* ================================================================== */}
      {/* FOOTER — BENTO-STYLE 3-CARD ROW                                    */}
      {/* ================================================================== */}
      <footer
        aria-label="Site footer"
        className="border-t border-white/5 py-12 md:py-16"
        style={{ backgroundColor: "#080812" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* 3 bento cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Brand card */}
            <div
              className="rounded-[20px] border border-white/8 p-7 flex flex-col gap-4"
              style={{ backgroundColor: "#1A1A2E" }}
            >
              <span className="font-sora text-xl font-bold tracking-widest text-[#00E5A0]">
                SOBER CLUB
              </span>
              <p className="font-inter text-sm text-[#6B7280] leading-relaxed">
                It&apos;s never a party unless we&apos;re there. Quezon
                City&apos;s most trusted mobile bar service since 2004.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-2.5 mt-auto pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sober Club on Facebook"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                  style={{ backgroundColor: "rgba(124,58,237,0.25)" }}
                >
                  <FacebookIcon size={15} className="text-[#C4B5FD]" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sober Club on Instagram"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F43F5E]"
                  style={{ backgroundColor: "rgba(244,63,94,0.20)" }}
                >
                  <InstagramIcon size={15} className="text-[#F43F5E]" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sober Club on TikTok"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5A0]"
                  style={{ backgroundColor: "rgba(0,229,160,0.15)" }}
                >
                  <Music size={15} className="text-[#00E5A0]" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Links card */}
            <div
              className="rounded-[20px] border border-white/8 p-7 flex flex-col gap-4"
              style={{ backgroundColor: "#1A1A2E" }}
            >
              <h3 className="font-inter text-xs font-bold text-white uppercase tracking-widest">
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
                        className="font-inter text-sm text-[#6B7280] hover:text-white transition-colors flex items-center gap-1.5 group"
                      >
                        <ChevronRight
                          size={12}
                          className="text-[#6B7280] group-hover:text-[#00E5A0] transition-colors"
                          aria-hidden="true"
                        />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact card */}
            <div
              className="rounded-[20px] border border-white/8 p-7 flex flex-col gap-4"
              style={{ backgroundColor: "#1A1A2E" }}
            >
              <h3 className="font-inter text-xs font-bold text-white uppercase tracking-widest">
                Get In Touch
              </h3>
              <ul className="flex flex-col gap-3.5">
                <li className="flex items-start gap-2.5">
                  <Phone
                    size={14}
                    className="text-[#00E5A0] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+639171234567"
                    className="font-inter text-sm text-[#6B7280] hover:text-white transition-colors"
                  >
                    +63 917 123 4567
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail
                    size={14}
                    className="text-[#C4B5FD] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:hello@soberclub.ph"
                    className="font-inter text-sm text-[#6B7280] hover:text-white transition-colors"
                  >
                    hello@soberclub.ph
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin
                    size={14}
                    className="text-[#F43F5E] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-inter text-sm text-[#6B7280]">
                    Quezon City &amp; Metro Manila, Philippines
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright line */}
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
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
