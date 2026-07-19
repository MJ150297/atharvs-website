"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What areas do you deliver to?",
    a: "We deliver across 7 districts of the Garhwal region: Dehradun, Rishikesh, Tehri, Rudraprayag, Uttarkashi, Chamoli, and Pauri.",
  },
  {
    q: "Do you offer installation services?",
    a: "Yes, we provide installation support for products like chimneys, geysers, and gas stoves. Contact us for details.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash on delivery, UPI, bank transfers, and card payments. Contact us for the best option for your order.",
  },
  {
    q: "How can I place an order?",
    a: "You can call us directly, send a WhatsApp message, or visit our store in Mazari Grant, Dehradun.",
  },
  {
    q: "Do you offer warranties on products?",
    a: "Yes, all our products come with manufacturer warranties. We only stock genuine, brand-approved appliances.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 7 days of delivery for defective or damaged products. Please contact us immediately if you receive a faulty item.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 bg-brand-neutral-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-blue-dark">
          Frequently Asked Questions
        </h2>
        <p className="text-brand-neutral-muted text-center mb-10 max-w-xl mx-auto">
          Everything you need to know before ordering
        </p>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-shadow duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-brand-neutral-text hover:text-brand-blue transition-colors"
                >
                  <span>{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-brand-neutral-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-4 text-brand-neutral-muted leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}