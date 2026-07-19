"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    bg: "/heroBG/hero-slide-1.webp",
    badge: "⚡ Premium Home & Kitchen Appliances",
    title: (
      <>
        Upgrade Your Home with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-green-light">
          Reliable Performance
        </span>
      </>
    ),
    description:
      "Authorized distributor of high-quality kitchen chimneys, gas stoves, secure lockers, water geysers, and room heating solutions across Dehradun and Garhwal region.",
    buttons: [
      {
        href: "https://wa.me/917303479951",
        label: "💬 WhatsApp Inquiry",
        primary: true,
      },
      { href: "/products", label: "Browse Catalog", primary: false },
    ],
  },
  {
    bg: "/heroBG/hero-slide-2.webp",
    badge: "🔥 Kitchen & Cooking Solutions",
    title: (
      <>
        Premium Kitchen Appliances{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-green-light">
          for Every Home
        </span>
      </>
    ),
    description:
      "From chimneys and gas stoves to air-fryers and induction cooktops — equip your kitchen with the best brands at competitive prices.",
    buttons: [
      {
        href: "/products",
        label: "Explore Products",
        primary: true,
      },
      {
        href: "https://wa.me/917303479951",
        label: "Get a Quote",
        primary: false,
      },
    ],
  },
  {
    bg: "/heroBG/hero-slide-3.webp",
    badge: "📍 Serving the Garhwal Region",
    title: (
      <>
        Trusted Across{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-green-light">
          7 Districts
        </span>{" "}
        of Uttarakhand
      </>
    ),
    description:
      "Fast and reliable delivery to Dehradun, Rishikesh, Tehri, Rudraprayag, Uttarkashi, Chamoli, and Pauri. Your satisfaction is our priority.",
    buttons: [
      {
        href: "/contact",
        label: "Contact Us",
        primary: true,
      },
      {
        href: "https://wa.me/917303479951",
        label: "💬 WhatsApp",
        primary: false,
      },
    ],
  },
];

export default function HeroSection() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      loop
      grabCursor
      className="w-full h-dvh"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i} className="relative">
          {/* Background image */}
          <Image
            src={slide.bg}
            alt={`Slide ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
          />

          {/* Dark overlay with subtle pattern texture */}
          <div className="absolute inset-0 hero-overlay" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
              <div className="max-w-2xl space-y-6">
                {/* Badge */}
                <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full tracking-wider uppercase border border-white/20">
                  {slide.badge}
                </span>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
                  {slide.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  {slide.buttons.map((btn, j) =>
                    btn.primary ? (
                      <a
                        key={j}
                        href={btn.href}
                        target={
                          btn.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          btn.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="bg-brand-green hover:bg-brand-green-dark text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl text-center"
                      >
                        {btn.label}
                      </a>
                    ) : (
                      <Link
                        key={j}
                        href={btn.href}
                        className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 text-center"
                      >
                        {btn.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* Scroll-down indicator */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1 text-white/60">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full z-10 leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </Swiper>
  );
}
