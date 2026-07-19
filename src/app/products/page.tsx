"use client";

import Link from "next/link";
import { categoryInfo } from "../../data/products";
import AppearOnScroll from "@/src/components/AppearOnScroll";

export default function ProductsPage() {
  return (
    <main className="flex-1">
      {/* ═══════════════════════════════════════
          1. HERO — Gradient Banner
         ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-blue-gradient px-6 py-20 md:py-32">
        {/* Decorative background bubbles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/5 animate-float-slow" />
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/5 animate-float" />
          <div className="absolute top-1/3 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/[0.07] animate-float-slow" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Floating icon */}
          <AppearOnScroll delay={100}>
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm animate-float">
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </div>
          </AppearOnScroll>

          <AppearOnScroll delay={250}>
            <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Our{" "}
              <span className="text-brand-green-light">Products</span>
            </h1>
          </AppearOnScroll>

          <AppearOnScroll delay={400}>
            <p className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl">
              Explore our wide range of premium home and kitchen appliances. We
              deliver across all major districts of Uttarakhand.
            </p>
          </AppearOnScroll>

          {/* Scroll-down indicator */}
          <AppearOnScroll delay={550}>
            <div className="mt-10 animate-bounce">
              <svg
                className="h-8 w-8 text-white/60"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </AppearOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. CATEGORY GRID
         ═══════════════════════════════════════ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryInfo.map((cat, i) => (
              <AppearOnScroll key={cat.slug} delay={i * 80}>
                <Link
                  href={`/products/${cat.slug}`}
                  className="group relative block h-56 rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${cat.image})` }}
                  />

                  {/* Black fade overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Emoji */}
                  <div className="absolute right-4 top-4 text-5xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {cat.emoji}
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h2 className="text-xl font-bold text-white mb-1">
                      {cat.name}
                    </h2>
                    <p className="text-sm text-white/80 line-clamp-2">
                      {cat.tagline}
                    </p>
                  </div>

                  {/* Arrow indicator on hover */}
                  <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. CTA — Call to Action
         ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-blue-gradient px-6 py-20">
        {/* Decorative rings */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border-[40px] border-white/5" />
          <div className="absolute -right-10 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border-[60px] border-white/[0.03]" />
        </div>

        <AppearOnScroll>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Need Help Choosing?
            </h2>
            <p className="mb-8 text-lg text-white/70">
              Our team is here to help you find the perfect appliance for your
              home. Reach out on WhatsApp for personalized assistance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/917303479951"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-brand-blue-dark shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10 animate-pulse-glow"
              >
                Chat on WhatsApp
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </AppearOnScroll>
      </section>
    </main>
  );
}