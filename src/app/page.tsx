import Image from "next/image";
import HeroSection from "../components/HeroSection";
import ProductCarousel from "../components/ProductCarousel";
import CountUp from "../components/CountUp";
import AppearOnScroll from "../components/AppearOnScroll";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      <HeroSection />

      <ProductCarousel />

      {/* Features Section */}
      <section className="py-16 px-6 bg-brand-neutral-card">
        <div className="max-w-6xl mx-auto">
          <AppearOnScroll>
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue-dark">
              Why Choose Us?
            </h2>
          </AppearOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description:
                  "We stock only top-brand home and kitchen appliances built to last.",
                emoji: "🏆",
                image: "/whychooseus/premium-quality.webp",
              },
              {
                title: "Local Delivery",
                description: (
                  <>
                    Fast and reliable delivery across{" "}
                    <strong>
                      <CountUp from={0} to={7} />
                    </strong>{" "}
                    districts of the Garhwal region.
                  </>
                ),
                emoji: "🚚",
                image: "/whychooseus/local-delivery.webp",
              },
              {
                title: "Personalized Service",
                description:
                  "Get expert advice and support directly from our team in Dehradun.",
                emoji: "🤝",
                image: "/whychooseus/personalised-service.webp",
              },
            ].map((feature, i) => (
              <AppearOnScroll key={feature.title} delay={i * 150}>
                <div className="group relative h-72 rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 hover:ring-2 hover:ring-brand-green hover:ring-offset-2">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />

                  {/* Black fade overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="mb-3">
                      <span className="text-3xl">{feature.emoji}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="w-full py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-x-20">
            {/* Content — Top on mobile, Left on desktop */}
            <AppearOnScroll>
              <div className="text-start flex-1 space-y-5">
                <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brand-green">
                  Meet the Owner
                </span>
                <h2 className="text-3xl font-bold text-brand-blue-dark md:text-4xl">
                  Mr. Arvind Singh
                </h2>
                <p className="text-lg font-medium text-brand-blue">
                  Owner, Atharv's Trading Company
                </p>
                <p className="text-brand-neutral-muted leading-relaxed">
                  With years of experience in the home appliance industry, Mr. Arvind Singh is committed
                  to providing top-quality products and exceptional service to every customer across
                  the Garhwal region. His hands-on approach ensures that Atharv's Trading Company
                  remains a trusted name for reliable appliances and personalized support.
                </p>
                <p className="text-brand-neutral-muted leading-relaxed">
                  Under his leadership, the company has grown to serve over 7 districts in Uttarakhand,
                  building lasting relationships with customers through trust, transparency, and a
                  genuine passion for helping families find the perfect appliances for their homes.
                  Every product stocked is personally vetted to meet the highest standards of quality
                  and durability.
                </p>
                <a
                  href="tel:+919258850323"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg"
                >
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  Call: +91 92588 50323
                </a>
              </div>
            </AppearOnScroll>

            {/* Image — Bottom on mobile, Right on desktop */}
            <AppearOnScroll delay={200}>
              <div className="w-72 h-72 md:w-80 md:h-80 shrink-0 relative">
                {/* Decorative background ring */}
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-brand-blue/20 animate-float-slow" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="/owner.webp"
                    alt="Mr. Arvind Singh — Owner, Atharv's Trading Company"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 288px, 320px"
                    priority
                  />
                </div>
              </div>
            </AppearOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 px-6 bg-brand-blue text-white text-center">
        <div className="max-w-2xl mx-auto">
          <AppearOnScroll>
            <h2 className="text-3xl font-bold mb-4">
              Ready to Upgrade Your Home?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact us today for the best deals on home and kitchen appliances
              in Uttarakhand.
            </p>
            <a
              href="https://wa.me/919258850323"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-blue px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-50 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get in Touch
            </a>
          </AppearOnScroll>
        </div>
      </section>

    </div>
  );
}