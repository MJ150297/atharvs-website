"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategoryInfo,
  getProductsByCategory,
  type Product,
} from "../data/products";
import AppearOnScroll from "@/src/components/AppearOnScroll";

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <AppearOnScroll delay={index * 80}>
      <div className="group relative h-72 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-green/20" />
        </div>

        {/* Black fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Price badge */}
        <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-brand-blue-dark font-bold text-sm px-3 py-1.5 rounded-lg shadow-sm">
          {product.price}
        </div>

        {/* Hover overlay — slides up from bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/70 backdrop-blur-sm px-4 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <a
            href={`https://wa.me/917303479951?text=Hi! I'm interested in ${encodeURIComponent(product.name)} (${product.price})`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-white font-semibold text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Inquire on WhatsApp
          </a>
        </div>

        {/* Name always visible at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="text-lg font-bold text-white">
            {product.name}
          </h3>
          <p className="text-sm text-white/70 line-clamp-1">
            {product.description}
          </p>
        </div>
      </div>
    </AppearOnScroll>
  );
}

export default function CategoryPageClient({
  category,
}: {
  category: string;
}) {
  const cat = getCategoryInfo(category);
  if (!cat) {
    notFound();
  }

  const products = getProductsByCategory(category);

  return (
    <main className="flex-1">
      {/* ═══════════════════════════════════════
          1. HERO — Category Gradient Banner
         ═══════════════════════════════════════ */}
      <section
        className={`relative overflow-hidden px-6 py-20 md:py-28 bg-gradient-to-br ${cat.gradient}`}
      >
        {/* Decorative background bubbles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/5 animate-float-slow" />
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/5 animate-float" />
          <div className="absolute top-1/3 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/[0.08] animate-float-slow" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <AppearOnScroll delay={50}>
            <nav className="mb-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                All Products
              </Link>
              <span className="mx-2 text-sm text-white/40">/</span>
              <span className="text-sm text-white/80">{cat.name}</span>
            </nav>
          </AppearOnScroll>

          <AppearOnScroll delay={150}>
            <div className="flex items-center gap-5">
              <span className="text-6xl drop-shadow-lg transition-transform duration-500 hover:scale-110 hover:rotate-6">
                {cat.emoji}
              </span>
              <div>
                <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">
                  {cat.name}
                </h1>
                <p className="max-w-2xl text-lg text-white/80">{cat.tagline}</p>
              </div>
            </div>
          </AppearOnScroll>

          <AppearOnScroll delay={250}>
            <p className="mt-4 max-w-3xl text-base text-white/70">
              {cat.description}
            </p>
          </AppearOnScroll>

          {/* Scroll-down indicator */}
          <AppearOnScroll delay={350}>
            <div className="mt-8 animate-bounce">
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
          2. PRODUCT GRID
         ═══════════════════════════════════════ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <AppearOnScroll>
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-brand-blue-dark">
                  Our {cat.name}
                </h2>
                <p className="mt-1 text-brand-neutral-muted">
                  {products.length}{" "}
                  {products.length === 1 ? "product" : "products"} available
                </p>
              </div>
              <a
                href={`https://wa.me/917303479951?text=Hi! I have a query about ${encodeURIComponent(cat.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-brand-green text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-brand-green-dark transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Ask about {cat.name}
              </a>
            </div>
          </AppearOnScroll>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <AppearOnScroll>
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
                <span className="block mb-4 text-5xl">{cat.emoji}</span>
                <h3 className="mb-2 text-xl font-bold text-brand-blue-dark">
                  Products Coming Soon
                </h3>
                <p className="mx-auto mb-6 max-w-md text-brand-neutral-muted">
                  We're updating our inventory for {cat.name}. Contact us on
                  WhatsApp for current availability and pricing.
                </p>
                <a
                  href={`https://wa.me/917303479951?text=Hi! I'm looking for ${encodeURIComponent(cat.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3 font-medium text-white transition-all hover:bg-brand-green-dark"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </AppearOnScroll>
          )}
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
              Need Help Choosing the Right {cat.name}?
            </h2>
            <p className="mb-8 text-lg text-white/70">
              Our team can help you find the perfect model for your needs and
              budget. Get personalized recommendations on WhatsApp.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/917303479951?text=Hi! I need help choosing a ${encodeURIComponent(cat.name)}`}
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
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                All Products
              </Link>
            </div>
          </div>
        </AppearOnScroll>
      </section>

      {/* ═══════════════════════════════════════
          4. Mobile sticky CTA
         ═══════════════════════════════════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-30 flex border-t border-slate-200 bg-white shadow-2xl md:hidden">
        <Link
          href="/products"
          className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-bold text-brand-blue-dark"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          All Products
        </Link>
        <a
          href={`https://wa.me/917303479951?text=Hi! I have a query about ${encodeURIComponent(cat.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 bg-brand-green py-3.5 text-sm font-bold text-white"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </main>
  );
}