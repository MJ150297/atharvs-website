"use client";

import { useState } from "react";
import AppearOnScroll from "@/src/components/AppearOnScroll";

const districts = [
  "Dehradun",
  "Rishikesh",
  "Tehri",
  "Rudraprayag",
  "Uttarkashi",
  "Chamoli",
  "Pauri",
];

const WHATSAPP_NUMBER = "917303479951";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Atharv's Trading Company,%0A%0AName%3A%20${encodeURIComponent(form.name)}%0APhone%3A%20${encodeURIComponent(form.phone)}%0AMessage%3A%20${encodeURIComponent(form.message)}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
          </AppearOnScroll>

          <AppearOnScroll delay={250}>
            <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Get in{" "}
              <span className="text-brand-green-light">Touch</span>
            </h1>
          </AppearOnScroll>

          <AppearOnScroll delay={400}>
            <p className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl">
              Available across Uttarakhand — reach out for inquiries, orders, or
              support. We're here to help.
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
          2. CONTACT INFO CARDS — 2-column grid
         ═══════════════════════════════════════ */}
      <section className="px-6 pb-16 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* ── Store Location ── */}
            <AppearOnScroll delay={100}>
              <div className="group h-full rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-brand-blue-dark">
                    Store Location
                  </h2>
                </div>
                <address className="not-italic text-brand-neutral-muted leading-relaxed">
                  <p>Fatehpur Danda Road, Mazari Grant</p>
                  <p>Dehradun, Uttarakhand 248140</p>
                  <p>India</p>
                </address>
              </div>
            </AppearOnScroll>

            {/* ── Contact Details ── */}
            <AppearOnScroll delay={250}>
              <div className="group h-full rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-brand-blue-dark">
                    Contact Details
                  </h2>
                </div>
                <div className="space-y-3 text-brand-neutral-muted">
                  <p>
                    <span className="font-medium text-brand-neutral-text">
                      Phone:
                    </span>{" "}
                    <a
                      href="tel:+917303479951"
                      className="hover:text-brand-blue transition-colors"
                    >
                      +91-73034-79951
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-brand-neutral-text">
                      Email:
                    </span>{" "}
                    <a
                      href="mailto:info@atharvstradingcompany.in"
                      className="hover:text-brand-blue transition-colors"
                    >
                      info@atharvstradingcompany.in
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-brand-neutral-text">
                      Hours:
                    </span>{" "}
                    Mon-Sat, 10:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </AppearOnScroll>

            {/* ── Service Areas ── */}
            <AppearOnScroll delay={400}>
              <div className="group h-full rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 md:col-span-2">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-brand-blue-dark">
                    Service Areas
                  </h2>
                </div>
                <p className="mb-4 text-brand-neutral-muted">
                  We deliver and provide service across the Garhwal region of
                  Uttarakhand:
                </p>
                <div className="flex flex-wrap gap-3">
                  {districts.map((area) => (
                    <div
                      key={area}
                      className="flex items-center justify-center gap-1.5 rounded-lg bg-brand-blue/10 px-3 py-2.5 text-sm font-medium text-brand-blue-dark transition-all duration-200 hover:bg-brand-blue hover:text-white"
                    >
                      <svg
                        className="h-4 w-4 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </AppearOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. EMBEDDED GOOGLE MAP
         ═══════════════════════════════════════ */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <AppearOnScroll>
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.5046530316554!2d78.14272757037953!3d30.150006747359875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093b266da0e30b%3A0x1f24c222a8392ab8!2sATHARV&#39;S%20TRADING%20COMPANY!5e0!3m2!1sen!2sin!4v1784316225736!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atharv's Trading Company Location"
                className="block"
              />
            </div>
          </AppearOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. WHATSAPP CONTACT FORM
         ═══════════════════════════════════════ */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <AppearOnScroll>
            <h2 className="mb-4 text-center text-3xl font-bold text-brand-blue-dark">
              Send Us a Message
            </h2>
            <p className="mb-10 text-center text-brand-neutral-muted">
              Fill out the form below and we'll connect with you on
              WhatsApp.
            </p>
          </AppearOnScroll>

          <AppearOnScroll delay={150}>
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-md md:p-8"
            >
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-brand-neutral-text"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-brand-neutral-text outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-brand-neutral-text"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-brand-neutral-text outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-brand-neutral-text"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for..."
                    className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-brand-neutral-text outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-green px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-xl hover:shadow-brand-green/20 active:translate-y-0"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </AppearOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. CTA — Call to Action
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
              Prefer Browsing First?
            </h2>
            <p className="mb-8 text-lg text-white/70">
              Explore our full range of kitchen and home appliances. Quality
              assured, delivered across Uttarakhand.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-brand-blue-dark shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10 animate-pulse-glow"
              >
                View Products
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
                href="https://wa.me/917303479951"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </AppearOnScroll>
      </section>
    </main>
  );
}