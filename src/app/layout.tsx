import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";
import Navbar from "../components/Navbar";
import ServiceWorkerRegister from "../components/ServiceWorkerRegister";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atharv's Trading Company | Home & Kitchen Appliances Dehradun",
  description:
    "Premium home & kitchen appliances by Atharv's Trading Company. Serving Rishikesh, Tehri, Rudraprayag, Uttarkashi, Chamoli, and Pauri with top-tier chimneys, geysers, stoves, and electronics.",
  metadataBase: new URL("https://www.atharvstradingcompany.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Atharv's Trading Company | Premium Home Appliances",
    description:
      "Your trusted partner for geysers, chimneys, gas stoves, air-fryers, and safe lockers across Uttarakhand.",
    url: "https://www.atharvstradingcompany.in",
    siteName: "Atharv's Trading Company",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Atharv's Trading Company Storefront - Mazari Grant, Dehradun",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Atharv's Trading",
  },
  formatDetection: {
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <ServiceWorkerRegister />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}