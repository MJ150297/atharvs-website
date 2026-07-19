"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 80);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(scrollY / docHeight, 1) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-0.5 bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm transition-all duration-300 ${
          scrolled ? "h-14" : "h-22"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo Brand Segment */}
            <Link href="/" className="flex items-center gap-2">
              <div
                className={`relative transition-all duration-300 ${
                  scrolled ? "w-8 h-8" : "w-20 h-20"
                }`}
              >
                <Image
                  src="/logo.webp"
                  alt="Atharv's Trading Company Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-bold tracking-wider text-brand-blue-dark leading-none transition-all duration-300 ${
                    scrolled ? "text-sm" : "text-md"
                  }`}
                >
                  ATHARV'S
                </span>
                <span
                  className={`font-semibold text-brand-blue tracking-widest leading-none mt-0.5 transition-all duration-300 ${
                    scrolled ? "text-[8px]" : "text-[10px]"
                  }`}
                >
                  TRADING COMPANY
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-brand-neutral-text">
              <Link href="/" className="hover:text-brand-blue transition-colors">
                Home
              </Link>
              <Link href="/products" className="hover:text-brand-blue transition-colors">
                Our Products
              </Link>
              <Link href="/about" className="hover:text-brand-blue transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-brand-blue transition-colors">
                Contact
              </Link>

              <a
                href="tel:+917303479951"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-1"
              >
                📞 Call: +91 73034 79951
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-brand-neutral-text hover:text-brand-blue focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-4 space-y-2 text-sm font-medium">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-50 hover:text-brand-blue"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-50 hover:text-brand-blue"
            >
              Our Products
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-50 hover:text-brand-blue"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-50 hover:text-brand-blue"
            >
              Contact
            </Link>
            <div className="pt-2 border-t border-slate-100">
              <a
                href="tel:+917303479951"
                className="w-full text-center block bg-brand-blue text-white px-4 py-2.5 rounded-lg text-sm font-bold shadow"
              >
                Call Store
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}