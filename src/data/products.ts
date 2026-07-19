export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  category: string;
};

export type CategoryInfo = {
  name: string;
  slug: string;
  emoji: string;
  tagline: string;
  description: string;
  gradient: string;
  image: string;
};

export const categoryInfo: CategoryInfo[] = [
  {
    name: "Chimneys",
    slug: "chimneys",
    emoji: "🔥",
    tagline: "Smoke-free kitchens start here",
    description:
      "Premium kitchen chimneys with powerful suction, auto-clean technology, and sleek designs to complement your kitchen.",
    gradient: "from-rose-600 to-orange-500",
    image: "/products/Auto-Clean-Chimney-60cm.webp",
  },
  {
    name: "Gas Stoves",
    slug: "gas-stoves",
    emoji: "🍳",
    tagline: "Cook with precision and style",
    description:
      "High-efficiency gas stoves with durable brass burners, auto-ignition, and elegant finishes for every kitchen.",
    gradient: "from-blue-600 to-cyan-500",
    image: "/products/4-Burner-Gas-Stove.webp",
  },
  {
    name: "Geysers",
    slug: "geysers",
    emoji: "🚿",
    tagline: "Instant hot water, all year round",
    description:
      "Energy-efficient water geysers with rapid heating, safety cut-off, and corrosion-resistant tanks for reliable hot water.",
    gradient: "from-emerald-600 to-teal-500",
    image: "/products/15L-Instant-Geyser.webp",
  },
  {
    name: "Air-Fryers",
    slug: "air-fryers",
    emoji: "🍟",
    tagline: "Healthy frying, zero compromise",
    description:
      "Digital air fryers with rapid air circulation technology for crispy, oil-free cooking with preset programs.",
    gradient: "from-amber-500 to-yellow-500",
    image: "/products/4L-Digital-Air-Fryer.webp",
  },
  {
    name: "Safe Lockers",
    slug: "safe-lockers",
    emoji: "🛡️",
    tagline: "Security you can trust",
    description:
      "Digital and key-operated safe lockers with fire-resistant construction for protecting your valuables at home or office.",
    gradient: "from-violet-600 to-purple-500",
    image: "/products/Digital-Locker-30L.webp",
  },
  {
    name: "Induction Cooktops",
    slug: "induction-cooktops",
    emoji: "⚡",
    tagline: "Smart cooking, instant heat",
    description:
      "Modern induction cooktops with touch controls, multiple presets, and energy-efficient induction heating technology.",
    gradient: "from-pink-500 to-rose-500",
    image: "/products/Single-Burner-Induction.webp",
  },
  {
    name: "Mixers & Juicers",
    slug: "mixers-juicers",
    emoji: "🥤",
    tagline: "Blend, mix, and juice with ease",
    description:
      "Powerful mixer grinders and juicer machines with multiple jar options, stainless steel blades, and robust motors.",
    gradient: "from-sky-500 to-indigo-500",
    image: "/products/750W-Mixer-Grinder.webp",
  },
  {
    name: "Heaters & Blow Warmers",
    slug: "heaters-blow-warmers",
    emoji: "🌬️",
    tagline: "Stay warm through Uttarakhand winters",
    description:
      "Room heaters, blow warmers, and oil-filled radiators with thermostat control, tip-over shutoff, and energy-saving modes.",
    gradient: "from-red-600 to-pink-500",
    image: "/products/2000W-Fan-Heater.webp",
  },
  {
    name: "Electric Kettles",
    slug: "electric-kettles",
    emoji: "🫖",
    tagline: "Boil water in minutes",
    description:
      "Stainless steel electric kettles with rapid boil, auto shut-off, and cordless design for the perfect cup of tea or coffee.",
    gradient: "from-lime-500 to-green-500",
    image: "/products/1.5L-SS-Kettle.webp",
  },
  {
    name: "Toasters",
    slug: "toasters",
    emoji: "🍞",
    tagline: "Perfect toast, every morning",
    description:
      "Pop-up toasters with adjustable browning, defrost and reheat functions, and wide slots for all bread types.",
    gradient: "from-cyan-500 to-blue-500",
    image: "/products/2-Slice-Pop-up-Toaster.webp",
  },
  {
    name: "Garment Steamers",
    slug: "garment-steamers",
    emoji: "👔",
    tagline: "Wrinkle-free in seconds",
    description:
      "Handheld and standing garment steamers with rapid heat-up, continuous steam, and fabric-safe technology.",
    gradient: "from-fuchsia-500 to-pink-500",
    image: "/products/Handheld-Steamer-1000W.webp",
  },
  {
    name: "Water Heating Rods",
    slug: "water-heating-rods",
    emoji: "🌡️",
    tagline: "Portable heating on demand",
    description:
      "Immersion water heating rods with copper heating elements, heat-resistant handles, and safety auto-cut features.",
    gradient: "from-orange-500 to-amber-500",
    image: "/products/1000W-Immersion-Rod.webp",
  },
];

export const products: Product[] = [
  // Chimneys
  { id: 1, name: "Auto-Clean Chimney 60cm", description: "Auto-clean kitchen chimney with baffle filters, LED display, and 1200 m³/h suction.", price: "₹8,499", image: "/products/Auto-Clean-Chimney-60cm.webp", features: ["Auto-clean", "60cm", "Baffle Filter", "LED Display", "1200 m³/h"], category: "chimneys" },
  { id: 2, name: "Slim Line Chimney 90cm", description: "Sleek 90cm chimney with curved glass, touch controls, and silent motor operation.", price: "₹12,999", image: "/products/Slim-Line-Chimney-90cm.webp", features: ["Curved Glass", "Touch Control", "90cm", "Silent Motor"], category: "chimneys" },
  { id: 3, name: "Filterless Chimney 60cm", description: "Filter-less technology with auto heat cleaning, oil collector, and motion sensor.", price: "₹10,499", image: "/products/Filterless-Chimney-60cm.webp", features: ["Filterless", "Auto Heat Clean", "Motion Sensor", "Oil Collector"], category: "chimneys" },

  // Gas Stoves
  { id: 4, name: "4-Burner Gas Stove", description: "Premium 4-burner gas stove with auto-ignition, brass burners, and powder-coated body.", price: "₹5,299", image: "/products/4-Burner-Gas-Stove.webp", features: ["4-Burner", "Auto-Ignition", "Brass Burners", "Powder Coated"], category: "gas-stoves" },
  { id: 5, name: "2-Burner Glass Top Stove", description: "Elegant 2-burner glass top stove with toughened glass, auto-ignition, and safety knobs.", price: "₹3,999", image: "/products/2-Burner-Glass-Top-Stove.webp", features: ["Glass Top", "Auto-Ignition", "2-Burner", "Safety Knobs"], category: "gas-stoves" },
  { id: 6, name: "3-Burner Kitchen Stove", description: "Compact 3-burner stove with high-efficiency burners and anti-skid feet.", price: "₹4,499", image: "/products/3-Burner-Kitchen-Stove.webp", features: ["3-Burner", "High Efficiency", "Anti-skid", "Compact"], category: "gas-stoves" },

  // Geysers
  { id: 7, name: "15L Instant Geyser", description: "15-liter instant water geyser with rapid heating, safety thermostat, and Rust-proof tank.", price: "₹6,999", image: "/products/15L-Instant-Geyser.webp", features: ["15L", "Instant Heat", "Safety Thermostat", "Rust Proof"], category: "geysers" },
  { id: 8, name: "25L Storage Geyser", description: "25-liter storage geyser with copper heating element, temperature control, and heavy-duty insulation.", price: "₹9,499", image: "/products/25L-Storage-Geyser.webp", features: ["25L", "Copper Element", "Temp Control", "Heavy Insulation"], category: "geysers" },
  { id: 9, name: "10L Compact Geyser", description: "Space-saving 10-liter geyser ideal for bathrooms with slim profile and fast recovery.", price: "₹5,299", image: "/products/10L-Compact-Geyser.webp", features: ["10L", "Compact", "Fast Recovery", "Slim Profile"], category: "geysers" },

  // Air-Fryers
  { id: 10, name: "4L Digital Air Fryer", description: "4-liter digital air fryer with 8 preset menus, touch screen, and 1800W power.", price: "₹5,999", image: "/products/4L-Digital-Air-Fryer.webp", features: ["4L", "Digital", "8 Presets", "Touch Screen"], category: "air-fryers" },
  { id: 11, name: "6L Family Air Fryer", description: "Large 6-liter air fryer with rotisserie function, dehydrate mode, and recipe book.", price: "₹7,999", image: "/products/6L-Family-Air-Fryer.webp", features: ["6L", "Rotisserie", "Dehydrate", "Family Size"], category: "air-fryers" },

  // Safe Lockers
  { id: 12, name: "Digital Locker 30L", description: "30-liter digital safe locker with electronic keypad, emergency key, and bolt locking.", price: "₹8,999", image: "/products/Digital-Locker-30L.webp", features: ["30L", "Digital Keypad", "Emergency Key", "Bolt Locking"], category: "safe-lockers" },
  { id: 13, name: "Laptop Safe Locker 15L", description: "Compact 15-liter laptop safe with foam interior, digital lock, and carry handle.", price: "₹6,499", image: "/products/Laptop-Safe-Locker-15L.webp", features: ["15L", "Foam Interior", "Digital Lock", "Portable"], category: "safe-lockers" },

  // Induction Cooktops
  { id: 14, name: "Single Burner Induction", description: "Single burner induction cooktop with touch panel, 10 power levels, and timer.", price: "₹2,999", image: "/products/Single-Burner-Induction.webp", features: ["Single Burner", "Touch Panel", "10 Levels", "Timer"], category: "induction-cooktops" },
  { id: 15, name: "Double Burner Induction", description: "Dual burner induction with independent controls, boost function, and auto shut-off.", price: "₹5,499", image: "/products/Double-Burner-Induction.webp", features: ["Dual Burner", "Independent Control", "Boost", "Auto Shut-off"], category: "induction-cooktops" },

  // Mixers & Juicers
  { id: 16, name: "750W Mixer Grinder", description: "750-watt mixer grinder with 3 jars, stainless steel blades, and overload protection.", price: "₹3,499", image: "/products/750W-Mixer-Grinder.webp", features: ["750W", "3 Jars", "SS Blades", "Overload Protection"], category: "mixers-juicers" },
  { id: 17, name: "Juicer Mixer Grinder", description: "Multi-function juicer mixer grinder with fruit filter, 2-speed control, and pulse mode.", price: "₹4,999", image: "/products/Juicer-Mixer-Grinder.webp", features: ["Juicer", "Mixer", "Grinder", "Pulse Mode"], category: "mixers-juicers" },

  // Heaters
  { id: 18, name: "2000W Fan Heater", description: "2000-watt fan-forced room heater with thermostat, tip-over shutoff, and overheat protection.", price: "₹2,499", image: "/products/2000W-Fan-Heater.webp", features: ["2000W", "Fan Forced", "Tip-over Shutoff", "Thermostat"], category: "heaters-blow-warmers" },
  { id: 19, name: "Oil-Filled Radiator 11 Fin", description: "11-fin oil-filled radiator with 3 heat settings, thermal cut-off, and silent operation.", price: "₹5,999", image: "/products/Oil-Filled-Radiator-11-Fin.webp", features: ["11 Fin", "3 Settings", "Silent", "Thermal Cut-off"], category: "heaters-blow-warmers" },

  // Electric Kettles
  { id: 20, name: "1.5L SS Kettle", description: "1.5-liter stainless steel electric kettle with 360° base, auto shut-off, and boil-dry protection.", price: "₹1,499", image: "/products/1.5L-SS-Kettle.webp", features: ["1.5L", "SS", "360° Base", "Boil-dry Protection"], category: "electric-kettles" },
  { id: 21, name: "2L Glass Kettle", description: "2-liter glass electric kettle with blue LED illumination, temperature gauge, and rapid boil.", price: "₹2,299", image: "/products/2L-Glass-Kettle.webp", features: ["2L", "Glass", "LED", "Temperature Gauge"], category: "electric-kettles" },

  // Toasters
  { id: 22, name: "2-Slice Pop-up Toaster", description: "2-slice toaster with adjustable browning, reheat/defrost, cancel function, and crumb tray.", price: "₹1,299", image: "/products/2-Slice-Pop-up-Toaster.webp", features: ["2-Slice", "Adjustable", "Reheat/Defrost", "Crumb Tray"], category: "toasters" },
  { id: 23, name: "4-Slice Wide Slot Toaster", description: "4-slice toaster with extra-wide slots, bagel mode, and LED countdown display.", price: "₹3,499", image: "/products/4-Slice-Wide-Slot-Toaster.webp", features: ["4-Slice", "Wide Slot", "Bagel Mode", "LED Display"], category: "toasters" },

  // Garment Steamers
  { id: 24, name: "Handheld Steamer 1000W", description: "1000-watt handheld garment steamer with 30s heat-up, fabric brush, and 200ml tank.", price: "₹1,999", image: "/products/Handheld-Steamer-1000W.webp", features: ["Handheld", "1000W", "30s Heat-up", "Fabric Brush"], category: "garment-steamers" },
  { id: 25, name: "Standing Steamer 1500W", description: "1500-watt standing garment steamer with telescopic pole, hanger, and large water tank.", price: "₹4,499", image: "/products/Standing-Steamer-1500W.webp", features: ["1500W", "Telescopic Pole", "Large Tank", "Standing"], category: "garment-steamers" },

  // Water Heating Rods
  { id: 26, name: "1000W Immersion Rod", description: "1000-watt immersion water heater with copper element and heat-resistant plastic handle.", price: "₹399", image: "/products/1000W-Immersion-Rod.webp", features: ["1000W", "Copper Element", "Heat-resistant", "Portable"], category: "water-heating-rods" },
  { id: 27, name: "1500W Rapid Heater", description: "1500-watt rapid heating rod with dual safety, auto shut-off, and stainless steel body.", price: "₹599", image: "/products/1500W-Rapid-Heater.webp", features: ["1500W", "Dual Safety", "Auto Shut-off", "SS Body"], category: "water-heating-rods" },
];

export function getCategoryInfo(slug: string): CategoryInfo | undefined {
  return categoryInfo.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}