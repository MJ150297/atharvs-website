export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Atharv's Trading Company",
    "image": "https://www.atharvstradingcompany.in/og-image.jpg",
    "@id": "https://www.atharvstradingcompany.in/#store",
    "url": "https://www.atharvstradingcompany.in",
    "telephone": "+91-73034-79951",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fatehpur Danda Road, Mazari Grant",
      "addressLocality": "Dehradun",
      "addressRegion": "Uttarakhand",
      "postalCode": "248140",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.154,
      "longitude": 78.118,
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Dehradun" },
      { "@type": "AdministrativeArea", "name": "Rishikesh" },
      { "@type": "AdministrativeArea", "name": "Tehri" },
      { "@type": "AdministrativeArea", "name": "Rudraprayag" },
      { "@type": "AdministrativeArea", "name": "Uttarkashi" },
      { "@type": "AdministrativeArea", "name": "Chamoli" },
      { "@type": "AdministrativeArea", "name": "Pauri" },
    ],
    "knowsAbout": [
      "Kitchen Chimneys",
      "Gas Stoves",
      "Induction Cooktops",
      "Geysers",
      "Water Heating Rods",
      "Heaters & Blow Warmers",
      "Air-Fryers",
      "Toasters",
      "Safe Lockers",
      "Mixers & Juicers",
      "Garment Steamers",
      "Electric Kettles",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}