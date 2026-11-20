// Centralized SEO configuration — keywords, meta data, structured data
// Following 2025-2026 SEO best practices: E-E-A-T, semantic HTML, long-tail keywords

export const SEO = {
  organization: {
    name: "SourcingBros",
    legalName: "SourcingBros",
    url: "https://sourcingbros.com",
    logo: "https://sourcingbros.com/logo.svg",
    description:
      "SourcingBros is a professional China sourcing agent connecting global buyers directly to verified Chinese factories. We provide vehicle sourcing, auto parts, car wraps, electronics, custom manufacturing, quality inspection, and global shipping services.",
    slogan: "Your Direct Factory Sourcing Partner in China",
    foundingDate: "2023",
    founders: [{ name: "Bk Sahahun" }],
    address: {
      type: "PostalAddress",
      addressLocality: "Guangzhou",
      addressRegion: "Guangdong",
      addressCountry: "CN",
    },
    contactPoint: {
      type: "ContactPoint",
      telephone: "+86-153-6580-6070",
      contactType: "customer service",
      areaServed: ["Africa", "Middle East", "Southeast Asia", "Europe", "Americas"],
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://wa.me/8615365806070",
    ],
  },
  keywords: {
    primary: [
      "China sourcing agent",
      "sourcing from China",
      "China sourcing company",
      "factory direct sourcing",
      "import from China",
      "China wholesale sourcing",
      "product sourcing China",
      "China procurement services",
    ],
    services: [
      "vehicle sourcing China",
      "LHD vehicle export China",
      "auto parts sourcing China",
      "car wrap sourcing China",
      "PPF sourcing China",
      "electronics sourcing China",
      "OEM manufacturing China",
      "custom manufacturing China",
      "quality inspection China",
      "China shipping and logistics",
      "warehousing China sourcing",
    ],
    longTail: [
      "how to source products from China factories",
      "best China sourcing agent for Africa",
      "China sourcing agent for car parts",
      "direct factory sourcing from Guangzhou",
      "China export agent for vehicles",
      "sourcing car wraps from China manufacturers",
      "OEM manufacturing services China",
      "pre-shipment quality inspection China",
      "consolidated shipping from China to Africa",
      "China sourcing company for small business",
      "buy LHD vehicles from China",
      "China sourcing agent transparent pricing",
      "product sourcing services Guangzhou",
      "China factory direct wholesale",
    ],
  },
  pages: {
    home: {
      title: "SourcingBros | China Sourcing Agent — Factory Direct Products & Global Shipping",
      description:
        "Professional China sourcing agent. We connect you directly to verified factories for vehicles, auto parts, car wraps, electronics & custom manufacturing. Quality inspection, transparent pricing & global shipping to 40+ countries. Get a quote in 48 hours.",
      path: "/",
    },
    services: {
      title: "Sourcing Services in China | Vehicle, Auto Parts, Electronics & OEM Manufacturing",
      description:
        "Full-service China sourcing: LHD vehicle export, auto parts & body kits, car wraps & PPF, electronics, custom OEM manufacturing, quality inspection, shipping & warehousing. 50+ verified factories. Transparent factory-direct pricing.",
      path: "/services",
    },
    products: {
      title: "What We Source from China | Vehicles, Parts, Electronics, Wraps & More",
      description:
        "Sourcing categories: LHD vehicles (Chery, Jetour, BYD, Geely), auto parts & body kits, car wraps & PPF (500+ colors), electronics from Shenzhen, industrial hardware, lifestyle goods. If it's made in China, we can source it.",
      path: "/products",
    },
    howItWorks: {
      title: "How China Sourcing Works | 5-Step Process — SourcingBros",
      description:
        "Our 5-step China sourcing process: tell us what you need, we source & quote in 48 hours, sample & quality check, production & inspection, shipping & delivery. Transparent, reliable, end-to-end sourcing from Chinese factories.",
      path: "/how-it-works",
    },
    about: {
      title: "About SourcingBros | Your Direct Factory Sourcing Partner in China",
      description:
        "SourcingBros bridges the gap between global buyers and Chinese factories. No middleman markups, transparent pricing, quality inspection on every order. 50+ verified factory partners, 40+ countries served. Based in Guangzhou, China.",
      path: "/about",
    },
    contact: {
      title: "Contact SourcingBros | Get a Free China Sourcing Quote in 48 Hours",
      description:
        "Request a free sourcing quote from China. WhatsApp, email, or fill our form — we respond within 48 hours with factory-direct pricing. Source vehicles, parts, electronics, and more from verified Chinese factories.",
      path: "/contact",
    },
    faq: {
      title: "China Sourcing FAQ | MOQ, Pricing, Shipping & Quality — SourcingBros",
      description:
        "Answers to common questions about sourcing from China: minimum order quantities, pricing vs. direct buying, shipping & customs, quality assurance, payment methods, factory visits, and process timelines.",
      path: "/faq",
    },
    resources: {
      title: "China Sourcing Guides & Resources | SourcingBros Blog",
      description:
        "Expert guides on sourcing from China: how to find reliable factories, negotiate prices, ensure quality, handle shipping & customs, and avoid common sourcing mistakes. Free resources for global importers.",
      path: "/resources",
    },
  },
} as const;
