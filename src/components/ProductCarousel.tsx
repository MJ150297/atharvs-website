"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const categories = [
  { name: "Chimneys", slug: "chimneys", emoji: "🔥", image: "/products/Auto-Clean-Chimney-60cm.webp" },
  { name: "Gas Stoves", slug: "gas-stoves", emoji: "🍳", image: "/products/4-Burner-Gas-Stove.webp" },
  { name: "Geysers", slug: "geysers", emoji: "🚿", image: "/products/15L-Instant-Geyser.webp" },
  { name: "Air-Fryers", slug: "air-fryers", emoji: "🍟", image: "/products/4L-Digital-Air-Fryer.webp" },
  { name: "Safe Lockers", slug: "safe-lockers", emoji: "🛡️", image: "/products/Digital-Locker-30L.webp" },
  { name: "Induction Cooktops", slug: "induction-cooktops", emoji: "⚡", image: "/products/Single-Burner-Induction.webp" },
  { name: "Mixers & Juicers", slug: "mixers-juicers", emoji: "🥤", image: "/products/750W-Mixer-Grinder.webp" },
  { name: "Heaters & Blow Warmers", slug: "heaters-blow-warmers", emoji: "🌬️", image: "/products/2000W-Fan-Heater.webp" },
  { name: "Electric Kettles", slug: "electric-kettles", emoji: "🫖", image: "/products/1.5L-SS-Kettle.webp" },
  { name: "Toasters", slug: "toasters", emoji: "🍞", image: "/products/2-Slice-Pop-up-Toaster.webp" },
  { name: "Garment Steamers", slug: "garment-steamers", emoji: "👔", image: "/products/Handheld-Steamer-1000W.webp" },
  { name: "Water Heating Rods", slug: "water-heating-rods", emoji: "🌡️", image: "/products/1000W-Immersion-Rod.webp" },
];

export default function ProductCarousel() {
  return (
    <section className="py-16 px-6 bg-brand-neutral-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-blue-dark">
          Our Product Range
        </h2>
        <p className="text-brand-neutral-muted text-center mb-10 max-w-xl mx-auto">
          Find the perfect appliance for your home
        </p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView="auto"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          grabCursor
          className="!pb-4"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.slug} className="!w-auto">
              <Link
                href={`/products/${cat.slug}`}
                className="group relative block w-80 h-96 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />

                {/* Black fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Hover overlay — slides up from bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm px-4 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="block text-white text-center font-bold text-base">
                    {cat.name}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-3.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            View All Products
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}