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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

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
              href="https://wa.me/917303479951"
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