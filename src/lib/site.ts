export const site = {
  name: "SourcingBros",
  domain: "sourcingbros.com",
  tagline: "Your Direct Factory Sourcing Partner in China",
  description:
    "SourcingBros connects global buyers directly to Chinese factories. We source vehicles, auto parts, car wraps, electronics, and custom-manufactured products — with quality inspection, logistics, and export handled end-to-end.",
  phone: "+86 153 6580 6070",
  whatsapp: "8615365806070",
  wechat: "SOURCINGBROS",
  email: "contact@sourcingbros.com",
  location: "Guangzhou, China",
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "What We Source" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/resources", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const services = [
  {
    id: "vehicle-sourcing",
    icon: "car",
    title: "Vehicle Sourcing & Export",
    short: "New and used LHD vehicles sourced from dealerships and factories across China.",
    description:
      "We source left-hand-drive vehicles from Chinese manufacturers and verified dealerships — from passenger cars and SUVs to commercial vehicles and heavy machinery. Full export documentation, customs clearance, and shipping arranged.",
    features: [
      "New & used LHD vehicles from all Chinese brands",
      "Direct dealership pricing — no middleman markup",
      "Complete export documentation & customs handling",
      "Pre-shipment inspection with video & photo reports",
      "RoRo, container, and bulk shipping options",
      "Insurance and tracking until port of destination",
    ],
  },
  {
    id: "auto-parts",
    icon: "wrench",
    title: "Auto Parts & Accessories",
    short: "OEM and aftermarket parts sourced from certified manufacturers.",
    description:
      "From body kits and engine components to interior accessories and electronics — we source directly from ISO 9001 and IATF 16949 certified factories. Bulk orders, custom packaging, and private labeling available.",
    features: [
      "OEM-spec and aftermarket parts for all vehicle makes",
      "Body kits, bumpers, grilles, spoilers, side steps",
      "Engine, suspension, and brake components",
      "Interior accessories, seat covers, floor mats",
      "Private labeling and custom packaging",
      "Bulk wholesale pricing with volume discounts",
    ],
  },
  {
    id: "car-wraps",
    icon: "layers",
    title: "Car Wrap & PPF Materials",
    short: "Color change films, paint protection film, and window tint from top Chinese factories.",
    description:
      "Premium vinyl wraps, TPU paint protection film, and window tint — sourced directly from China's leading manufacturers. We handle quality verification, roll consolidation, and international shipping.",
    features: [
      "PET color change films — 500+ colors and finishes",
      "TPU self-healing paint protection film",
      "Window tint (VLT 5%–70%) with UV rejection",
      "Factory-direct pricing per roll (15.5m)",
      "Quality inspection before dispatch",
      "Consolidated shipping for multi-roll orders",
    ],
  },
  {
    id: "electronics",
    icon: "chip",
    title: "Electronics & Gadgets",
    short: "Consumer electronics, accessories, and tech gadgets from Shenzhen and Guangzhou.",
    description:
      "China is the world's electronics factory. We source phones, accessories, smart home devices, audio equipment, and more from verified suppliers in Shenzhen and Guangzhou — with quality testing and compliance documentation.",
    features: [
      "Phones, tablets, and accessories",
      "Smart home devices and wearables",
      "Audio equipment and accessories",
      "LED lighting and display screens",
      "Quality testing and compliance verification",
      "CE, FCC, and RoHS documentation available",
    ],
  },
  {
    id: "custom-manufacturing",
    icon: "factory",
    title: "Custom Manufacturing & OEM",
    short: "Bring your design — we find the right factory to produce it.",
    description:
      "Have a product idea or design? We connect you with the right factory based on material, volume, and quality requirements. From prototyping to mass production, we manage the entire manufacturing relationship.",
    features: [
      "Factory matching based on your product specs",
      "Prototyping and sample development",
      "Material sourcing and quality standards",
      "Production monitoring and milestone reporting",
      "Tooling and mold management",
      "Private label and white-label manufacturing",
    ],
  },
  {
    id: "quality-inspection",
    icon: "shield-check",
    title: "Quality Inspection & Verification",
    short: "Don't fly to China — we inspect for you with detailed photo and video reports.",
    description:
      "Before you pay, before it ships — we verify. Our team visits the factory or warehouse, inspects the goods, and sends you a comprehensive report with photos, videos, and a quality assessment. You approve before anything moves.",
    features: [
      "Pre-production material verification",
      "In-line production inspection",
      "Pre-shipment quality control (AQL sampling)",
      "Detailed photo and video reports within 24 hours",
      "Vehicle inspection with 360° walkaround video",
      "Container loading supervision",
    ],
  },
  {
    id: "logistics",
    icon: "truck",
    title: "Shipping & Logistics",
    short: "Sea freight, air freight, and express delivery to 40+ countries.",
    description:
      "We handle the entire logistics chain — from factory pickup to your destination port or doorstep. Consolidate multiple suppliers into one shipment, choose the most cost-effective shipping method, and track everything in real time.",
    features: [
      "Sea freight (FCL & LCL) to major ports worldwide",
      "Air freight for urgent shipments",
      "Express courier (DHL, FedEx, UPS) for samples",
      "Supplier consolidation — multiple factories, one shipment",
      "Customs declaration and export documentation",
      "Door-to-door delivery available in select markets",
    ],
  },
  {
    id: "warehousing",
    icon: "warehouse",
    title: "Warehousing & Consolidation",
    short: "Store goods in China and ship when ready — save on logistics costs.",
    description:
      "Buying from multiple suppliers? We receive, inspect, and store your goods in our warehouse, then consolidate them into a single shipment when everything is ready. Reduces shipping costs and simplifies customs.",
    features: [
      "Short and long-term storage in Guangzhou",
      "Multi-supplier receipt and consolidation",
      "Repackaging and relabeling services",
      "Inventory management with photo updates",
      "Quality check on arrival at warehouse",
      "Flexible dispatch — ship when you're ready",
    ],
  },
] as const;

export const productCategories = [
  {
    id: "vehicles",
    title: "Vehicles",
    icon: "car",
    items: [
      "Passenger cars (LHD, new & used)",
      "SUVs and crossovers",
      "Commercial vans and pickups",
      "Electric vehicles (EVs)",
      "Heavy machinery & trucks",
      "Motorcycles and scooters",
    ],
    brands: ["Chery", "Jetour", "Geely", "BYD", "Haval", "Wuling", "JAC", "Dongfeng", "And 20+ more"],
  },
  {
    id: "auto-parts",
    title: "Auto Parts & Body Kits",
    icon: "wrench",
    items: [
      "Body kits & aero packages",
      "Bumpers, grilles, and spoilers",
      "Side steps and roof racks",
      "Suspension and lift kits",
      "Brake pads and rotors",
      "Engine components and filters",
      "Headlights and taillights",
      "Floor mats and seat covers",
    ],
    brands: ["OEM-spec", "Aftermarket premium", "Custom fabricated"],
  },
  {
    id: "car-wraps",
    title: "Car Wraps & PPF",
    icon: "layers",
    items: [
      "PET color change film (500+ colors)",
      "TPU paint protection film",
      "Vinyl wraps (gloss, matte, satin)",
      "Window tint film",
      "Ceramic coatings",
      "Application tools & squeegees",
    ],
    brands: ["500+ color options", "Gloss / Matte / Satin / Chrome", "Per roll (15.5m)"],
  },
  {
    id: "electronics",
    title: "Electronics & Tech",
    icon: "chip",
    items: [
      "Smartphones and tablets",
      "Phone cases and accessories",
      "Smart home devices",
      "Bluetooth speakers & earbuds",
      "LED strips and panels",
      "Power banks and chargers",
      "Smartwatches and fitness bands",
    ],
    brands: ["Shenzhen-origin", "OEM / White-label available"],
  },
  {
    id: "industrial",
    title: "Industrial & Hardware",
    icon: "hammer",
    items: [
      "LED display screens (indoor/outdoor)",
      "Solar panels and components",
      "Industrial tools and equipment",
      "Pipes, valves, and fittings",
      "Safety equipment and PPE",
      "Packaging materials",
    ],
    brands: ["Factory-direct", "Bulk orders", "Custom specs"],
  },
  {
    id: "lifestyle",
    title: "Lifestyle & Consumer Goods",
    icon: "shopping-bag",
    items: [
      "Apparel and textiles",
      "Furniture and home decor",
      "Kitchenware and appliances",
      "Sports and fitness equipment",
      "Beauty and personal care",
      "Stationery and promotional items",
    ],
    brands: ["OEM / Private label", "Small MOQ available"],
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Tell Us What You Need",
    description:
      "Send us your requirements via WhatsApp or our contact form — product type, quantity, target price, and any specifications. No request is too big or too small.",
    icon: "message-square",
  },
  {
    step: "02",
    title: "We Source & Quote",
    description:
      "Our team contacts verified factories across China, negotiates the best price, and sends you a detailed quote with product photos, specs, and factory information within 48 hours.",
    icon: "search",
  },
  {
    step: "03",
    title: "Sample & Quality Check",
    description:
      "Request samples before bulk orders. We inspect them, send you photos and videos, and you approve before proceeding to mass production or purchase.",
    icon: "package-check",
  },
  {
    step: "04",
    title: "Production & Inspection",
    description:
      "Once you place the order, we monitor production at the factory. Before shipping, we conduct a full quality inspection and send you a comprehensive report for approval.",
    icon: "shield-check",
  },
  {
    step: "05",
    title: "Shipping & Delivery",
    description:
      "We handle export documentation, customs clearance, and shipping — by sea, air, or express. Track your shipment in real time until it arrives at your destination.",
    icon: "truck",
  },
] as const;

export const trustBadges = [
  { icon: "factory", title: "Direct Factory Access", sub: "No middlemen — we go straight to the source" },
  { icon: "shield-check", title: "Quality Guaranteed", sub: "Pre-shipment inspection on every order" },
  { icon: "globe", title: "Global Shipping", sub: "40+ countries served by sea, air & express" },
  { icon: "clock", title: "48-Hour Quotes", sub: "Fast turnaround from request to quotation" },
] as const;

export const stats = [
  { value: "50+", label: "Verified Factory Partners" },
  { value: "40+", label: "Countries Served" },
  { value: "500+", label: "Products Sourced" },
  { value: "48hr", label: "Average Quote Time" },
] as const;

export const faqs = [
  {
    q: "What types of products can you source?",
    a: "Virtually anything manufactured in China. Our core expertise is in vehicles (new & used LHD), auto parts and body kits, car wraps and PPF, electronics, and custom-manufactured products. If it's made in China, we can source it — just ask.",
  },
  {
    q: "How do your prices compare to buying directly?",
    a: "Our factory-direct pricing is typically 15-40% lower than what you'd pay through trading companies or middlemen. We charge a transparent service fee that's included in the quote — no hidden markups. You see the factory price, the service fee, and the shipping cost broken down separately.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQ depends on the product and factory. For vehicles, we can source single units. For parts and accessories, MOQs typically start at 10-50 units. For custom manufacturing, it varies by product. We can often negotiate lower MOQs with our factory relationships — let us know your needs.",
  },
  {
    q: "Do you handle shipping and customs?",
    a: "Yes, end-to-end. We arrange sea freight (FCL & LCL), air freight, and express courier shipping. We handle Chinese export customs clearance and documentation. For import customs in your country, we provide all necessary paperwork, or we can arrange door-to-door delivery in select markets.",
  },
  {
    q: "How do you ensure product quality?",
    a: "Every order goes through pre-shipment inspection. Our team visits the factory or warehouse, checks the goods against your specifications, takes photos and videos, and sends you a detailed report. You approve before anything ships. For vehicles, we do a full 360° walkaround video and mechanical check.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Bank transfer (T/T), PayPal (for smaller orders), and letter of credit (L/C) for large orders. Payment terms are typically 30% deposit to start production and 70% balance before shipping, but this can be negotiated based on the order and relationship.",
  },
  {
    q: "Can I visit the factories in China?",
    a: "Absolutely. We can arrange factory visits with translation and logistics support. If you can't travel, we'll do virtual factory tours via video call and send you detailed photos and videos of the production facilities.",
  },
  {
    q: "How long does the entire process take?",
    a: "From your initial request to delivery: quotes within 48 hours, samples in 5-10 days, production 7-30 days (depending on product), and shipping 7-35 days (depending on method and destination). For in-stock items, we can ship within 3 days of payment.",
  },
] as const;
