"use client";

import AppearOnScroll from "@/src/components/AppearOnScroll";
import CountUp from "@/src/components/CountUp";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* ═══════════════════════════════════════
          1. HERO — Large Logo + Company Name
         ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-logo-gradient px-6 py-20 md:py-32">
        {/* Decorative background bubbles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/5 animate-float-slow" />
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/5 animate-float" />
          <div className="absolute top-1/3 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/[0.07] animate-float-slow" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Large Logo */}
          <AppearOnScroll delay={100}>
            <div className="relative mb-8">
              <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl" />
              <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-white/40 shadow-2xl md:h-52 md:w-52 animate-float">
                <Image
                  src="/logo.webp"
                  alt="Atharv's Trading Company Logo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 176px, 208px"
                  priority
                />
              </div>
            </div>
          </AppearOnScroll>

          {/* Title */}
          <AppearOnScroll delay={250}>
            <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Atharv's{" "}
              <span className="text-brand-green-dark">Trading Company</span>
            </h1>
          </AppearOnScroll>

          <AppearOnScroll delay={400}>
            <p className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl">
              Premium Home & Kitchen Appliances — trusted distributor across
              Uttarakhand since 2019.
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
          2. STATS BAR — Animated CountUp Numbers
         ═══════════════════════════════════════ */}
      <section className="relative -mt-10 px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:grid-cols-4 md:p-8">
            {[
              { label: "Districts Served", value: 7, suffix: "" },
              { label: "Happy Customers", value: 500, suffix: "+" },
              { label: "Products Offered", value: 50, suffix: "+" },
              { label: "Years of Trust", value: 6, suffix: "+" },
            ].map((stat, i) => (
              <AppearOnScroll key={stat.label} delay={i * 150}>
                <div className="flex flex-col items-center text-center">
                  <span className="text-4xl font-extrabold text-brand-blue md:text-5xl">
                    <CountUp from={0} to={stat.value} duration={2200} />
                    {stat.suffix}
                  </span>
                  <span className="mt-1 text-sm font-medium text-brand-neutral-muted">
                    {stat.label}
                  </span>
                </div>
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. OUR STORY — Enhanced
         ═══════════════════════════════════════ */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <AppearOnScroll>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-md md:p-12">
              {/* Decorative accent bar */}
              <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-brand-blue via-brand-blue-light to-brand-green" />

              <div className="relative pl-4 md:pl-6">
                <h2 className="mb-6 text-3xl font-bold text-brand-blue-dark">
                  Our Story
                </h2>
                <p className="mb-6 leading-relaxed text-brand-neutral-muted">
                  Based in Mazari Grant, Dehradun, Atharv's Trading Company
                  has established itself as a trusted distributor of premium home
                  and kitchen appliances. We bridge the gap between top
                  manufacturers and households across the Garhwal region, ensuring
                  that every home has access to reliable, energy-efficient
                  appliances.
                </p>
                <div className="rounded-lg border-l-4 border-brand-green bg-brand-green/5 p-4 italic text-brand-neutral-text">
                  &ldquo;Bringing quality appliances to every home in the
                  Garhwal region — that's the promise we've kept since
                  day one.&rdquo;
                </div>
              </div>

              {/* Decorative floating circles */}
              <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full border-8 border-brand-blue/5" />
              <div className="pointer-events-none absolute -top-4 -right-4 h-16 w-16 rounded-full border-4 border-brand-green/10" />
            </div>
          </AppearOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. OUR MISSION — Icon grid
         ═══════════════════════════════════════ */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <AppearOnScroll>
            <h2 className="mb-4 text-center text-3xl font-bold text-brand-blue-dark">
              Our Mission
            </h2>
            <p className="mb-10 text-center text-brand-neutral-muted">
              Four pillars that drive everything we do.
            </p>
          </AppearOnScroll>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Quality First",
                desc: "We stock genuine, brand-approved appliances with full warranties.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Exceptional Service",
                desc: "Our team is just a call or WhatsApp message away for queries and assistance.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                ),
              },
              {
                title: "Wide Reach",
                desc: "We serve 7 districts across Uttarakhand with timely delivery.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                ),
              },
              {
                title: "Local Expertise",
                desc: "We understand the needs of households in the Garhwal region and stock accordingly.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
              },
            ].map((pillar, i) => (
              <AppearOnScroll key={pillar.title} delay={i * 120}>
                <div className="group h-full rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    {pillar.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-brand-blue-dark">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-neutral-muted">
                    {pillar.desc}
                  </p>
                </div>
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. WHY SHOP WITH US — Interactive Cards
         ═══════════════════════════════════════ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <AppearOnScroll>
            <h2 className="mb-4 text-center text-3xl font-bold text-brand-blue-dark">
              Why Shop With Us?
            </h2>
            <p className="mb-10 text-center text-brand-neutral-muted">
              What sets Atharv's apart from the rest.
            </p>
          </AppearOnScroll>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Authorized Products",
                desc: "We stock genuine, brand-approved appliances with warranties.",
                gradient: "from-brand-blue to-brand-blue-light",
              },
              {
                title: "Local Expertise",
                desc: "We understand the needs of households in the Garhwal region and stock accordingly.",
                gradient: "from-brand-green to-brand-green-light",
              },
              {
                title: "Reliable Support",
                desc: "Our team is just a call or WhatsApp message away for queries and assistance.",
                gradient: "from-brand-blue-light to-brand-green",
              },
              {
                title: "Wide Reach",
                desc: "We serve 7 districts across Uttarakhand with timely delivery.",
                gradient: "from-brand-green-dark to-brand-green",
              },
            ].map((item, i) => (
              <AppearOnScroll key={item.title} delay={i * 130}>
                <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl md:p-8">
                  {/* Top gradient bar */}
                  <div
                    className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${item.gradient} transition-all duration-300 group-hover:h-2`}
                  />

                  {/* Icon */}
                  <div className="mb-4 mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-brand-neutral-bg text-brand-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-brand-blue-dark">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-brand-neutral-muted">
                    {item.desc}
                  </p>
                </div>
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. CTA — Call to Action
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
              Ready to Explore Our Products?
            </h2>
            <p className="mb-8 text-lg text-white/70">
              Browse our full range of kitchen and home appliances. Quality
              assured, delivered across Uttarakhand.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-brand-blue-dark shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10 animate-pulse-glow"
              >
                View Products
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </AppearOnScroll>
      </section>
    </main>
  );
}