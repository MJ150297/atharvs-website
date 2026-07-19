"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Excellent quality and prompt delivery. The team at Atharv's helped me choose the perfect chimney for my kitchen.",
    name: "Ravi Verma",
    location: "Dehradun",
    avatar: "/testimonials/boy-avatar.jpeg",
  },
  {
    quote:
      "Best place for home appliances in Dehradun. I bought a geyser and gas stove — both work flawlessly.",
    name: "Priya Negi",
    location: "Rishikesh",
    avatar: "/testimonials/girl-avatar.jpeg",
  },
  {
    quote:
      "Ordered a safe locker from them. Great support and installation service. Highly recommended!",
    name: "Amit Chauhan",
    location: "Tehri",
    avatar: "/testimonials/boy-avatar1.jpeg",
  },
  {
    quote:
      "They delivered an air-fryer to our village in Chamoli. Reliable service even in remote areas.",
    name: "Sunita Rawat",
    location: "Chamoli",
    avatar: "/testimonials/girl-avatar1.jpg",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="py-16 px-6 bg-brand-neutral-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-blue-dark">
          What Our Customers Say
        </h2>
        <p className="text-brand-neutral-muted text-center mb-10 max-w-xl mx-auto">
          Trusted by households across the Garhwal region
        </p>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          grabCursor
          className="!pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center text-center px-6 py-10 rounded-2xl bg-brand-neutral-bg border border-slate-200">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 bg-slate-200">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-brand-neutral-text leading-relaxed mb-6 italic max-w-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-bold text-brand-blue-dark">{t.name}</p>
                <p className="text-sm text-brand-neutral-muted">{t.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Google Reviews CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://share.google/0pIitTv2SigoMr0zy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg border-2 border-brand-blue bg-white px-6 py-3 font-semibold text-brand-blue shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue hover:text-white hover:shadow-xl"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Review us on Google
          </a>
        </div>
      </div>
    </section>
  );
}