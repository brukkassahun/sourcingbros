import { Article } from "@/lib/articles";

export const batch2: Article[] = [
  {
    slug: "import-vehicles-from-china-guide",
    title: "How to Import LHD Vehicles from China: Step-by-Step Guide",
    description:
      "Complete guide to importing left-hand-drive vehicles from China — choosing the right brand, export documentation, shipping options, transit times, and customs clearance.",
    category: "Vehicle Sourcing",
    readTime: "10 min read",
    publishedAt: "2025-12-01",
    keywords: ["import vehicles from China", "LHD car export China", "China vehicle import guide", "RoRo shipping vehicles"],
    heroImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&h=630&fit=crop",
    heroAlt: "Cars lined up at a Chinese port for export",
    content: [
      { type: "p", text: "China has become one of the world's largest vehicle exporters, with brands like Chery, Jetour, BYD, and Geely gaining market share across Africa, the Middle East, and Southeast Asia. If you're considering importing LHD (left-hand-drive) vehicles from China, this guide walks you through the entire process — from choosing the right brand to clearing customs in your country." },

      { type: "h2", text: "Choosing the Right Chinese Vehicle Brand" },
      { type: "p", text: "China has dozens of vehicle manufacturers, but not all export to every market. Here are the most popular brands for export:" },
      { type: "table", headers: ["Brand", "Strength", "Price Range (USD)", "Best For"], rows: [
        ["Chery", "Passenger cars & SUVs", "$8,000-25,000", "Budget-conscious buyers"],
        ["Jetour", "SUVs & crossovers", "$12,000-30,000", "SUV enthusiasts"],
        ["BYD", "EVs & hybrids", "$15,000-40,000", "Electric vehicle buyers"],
        ["Geely", "Sedans & SUVs", "$10,000-35,000", "Mid-range quality"],
        ["Haval", "SUVs", "$14,000-32,000", "SUV specialists"],
        ["Wuling", "Mini EVs & commercial", "$5,000-15,000", "Budget & commercial"],
        ["JAC", "Trucks & commercial", "$12,000-45,000", "Commercial buyers"],
        ["Dongfeng", "Trucks & heavy vehicles", "$20,000-80,000", "Heavy machinery"],
      ]},

      { type: "callout", variant: "info", text: "LHD (Left-Hand Drive) vehicles are standard for most of Africa, the Middle East, and Southeast Asia. China manufactures LHD vehicles for domestic use, making export straightforward. If you need RHD (Right-Hand Drive) for countries like Kenya, Uganda, or South Africa, options are more limited — check availability before committing." },

      { type: "h2", text: "New vs Used Vehicles" },
      { type: "p", text: "Both new and used vehicles can be exported from China. New vehicles come with full warranty and are simpler to export. Used vehicles are cheaper but require additional documentation and inspection." },
      { type: "ul", items: [
        "New vehicles: Factory warranty, no mileage, full export documentation included by manufacturer",
        "Used vehicles: 20-40% cheaper, but require independent inspection and may have import age restrictions in your country",
        "Demo/display vehicles: Nearly new, discounted, available from dealerships — a good middle ground",
      ]},

      { type: "h2", text: "Export Documentation Required" },
      { type: "p", text: "To export a vehicle from China, you need:" },
      { type: "ol", items: [
        "Commercial invoice (from seller/dealership)",
        "Vehicle purchase contract (with chassis and engine numbers)",
        "Chinese export customs declaration",
        "Certificate of Origin (COO) — issued by manufacturer or CCPIT",
        "Vehicle inspection certificate (for used vehicles)",
        "Bill of Lading (issued by shipping company)",
        "Export license (if applicable to vehicle category)",
      ]},

      { type: "h2", text: "Shipping Options: RoRo vs Container vs Bulk" },
      { type: "table", headers: ["Method", "Cost", "Transit Time", "Best For"], rows: [
        ["RoRo (Roll-on/Roll-off)", "Lowest", "20-45 days", "Single vehicles, drive-on/off"],
        ["Container (FCL 20ft/40ft)", "Medium", "25-50 days", "1-4 vehicles, extra parts"],
        ["Container (LCL)", "Medium-High", "30-55 days", "Single vehicle + parts"],
        ["Bulk Shipping", "Variable", "30-60 days", "Large fleet orders (10+ vehicles)"],
      ]},

      { type: "chart", chartType: "comparison", chartTitle: "Average Transit Times from China to Major African Ports (days)", chartData: [
        { label: "Tema (Ghana)", value: 28, color: "#D4A84B" },
        { label: "Lagos (Nigeria)", value: 32, color: "#0F1B2D" },
        { label: "Mombasa (Kenya)", value: 35, color: "#B8923A" },
        { label: "Durban (S. Africa)", value: 30, color: "#1A2B45" },
        { label: "Dar es Salaam (Tanzania)", value: 38, color: "#243656" },
      ], chartUnit: " days"},

      { type: "h2", text: "Total Cost Breakdown" },
      { type: "p", text: "When calculating the total landed cost of importing a vehicle from China, factor in all of these costs:" },
      { type: "ul", items: [
        "Vehicle purchase price (negotiated with dealership/factory)",
        "Sourcing agent service fee (if using one — typically 3-8% of vehicle price)",
        "Pre-shipment inspection fee ($200-500 per vehicle)",
        "Export documentation fees ($100-300)",
        "Shipping cost ($1,500-4,000 depending on method and destination)",
        "Marine insurance (1-2% of vehicle value)",
        "Destination port charges ($300-800)",
        "Import duty (varies by country — check your local tariff schedule)",
        "VAT/Sales tax (varies by country)",
        "Clearing agent fee ($200-500)",
      ]},

      { type: "blockquote", text: "A $15,000 vehicle from China typically costs $20,000-24,000 landed in West Africa after all costs. That's still 30-50% cheaper than buying locally in most African markets." },

      { type: "h2", text: "Customs Clearance in Your Country" },
      { type: "p", text: "Once the vehicle arrives at your destination port, you'll need to clear customs. Requirements vary by country, but you'll generally need:" },
      { type: "ul", items: [
        "Original Bill of Lading (endorsed)",
        "Commercial invoice and packing list",
        "Certificate of Origin",
        "Vehicle inspection/pre-export verification (e.g., SONCAP for Nigeria, ECA for Ghana)",
        "Form M (Nigeria) or equivalent import declaration",
        "Import duty payment receipt",
        "Valid ID and business registration (if importing commercially)",
      ]},
      { type: "p", text: "Work with a licensed clearing agent at your destination port — they handle the paperwork and can save you days of waiting and potential storage fees." },

      { type: "h2", text: "How SourcingBros Helps" },
      { type: "p", text: "SourcingBros handles the entire vehicle import process for you — from finding the right vehicle at the best dealership price, to pre-shipment inspection (360° walkaround video + mechanical check), to arranging shipping and handling export documentation. You deal with one person who manages everything on the ground in China." },
    ],
  },

  {
    slug: "negotiate-prices-with-chinese-factories",
    title: "How to Negotiate Prices with Chinese Factories (Without Losing the Deal)",
    description:
      "Price negotiation with Chinese suppliers is an art. Learn the cultural nuances, negotiation tactics, and pricing structures that will get you the best factory-direct price.",
    category: "Sourcing Guide",
    readTime: "7 min read",
    publishedAt: "2025-11-15",
    keywords: ["negotiate China factory prices", "supplier negotiation China", "factory direct pricing", "China wholesale negotiation"],
    heroImage: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1200&h=630&fit=crop",
    heroAlt: "Negotiation and business discussion",
    content: [
      { type: "p", text: "Negotiating with Chinese factories is different from negotiating with Western suppliers. It's not just about price — it's about relationships, respect, and understanding how Chinese business culture works. Get it right, and you'll get the best price. Get it wrong, and you'll either overpay or lose the supplier entirely." },

      { type: "h2", text: "Understand Chinese Business Culture" },
      { type: "p", text: "Before you negotiate, understand three key concepts:" },
      { type: "h3", text: "Mianzi (Face)" },
      { type: "p", text: "Never embarrass a supplier in front of others. Never tell them their price is ridiculous. Never threaten to leave if they don't comply. Losing face damages the relationship permanently. Instead, frame negotiations as a collaborative effort to find a mutually beneficial price." },
      { type: "h3", text: "Guanxi (Relationships)" },
      { type: "p", text: "Chinese business is built on relationships, not transactions. Suppliers give better prices to customers they trust and want to work with long-term. Spend time building the relationship before you start hard negotiation." },
      { type: "h3", text: "Patience" },
      { type: "p", text: "Chinese negotiation is a marathon, not a sprint. The first price quoted is rarely the final price — but pushing too hard, too fast signals you're not a serious partner. Expect 3-5 rounds of negotiation." },

      { type: "h2", text: "Understand Price Tiers" },
      { type: "p", text: "Chinese factories almost always have tiered pricing based on order quantity. The more you order, the lower the unit price:" },
      { type: "table", headers: ["MOQ Range", "Price Tier", "Discount from List"], rows: [
        ["1-49 units", "Sample/Small batch", "0% (list price)"],
        ["50-199 units", "Small wholesale", "5-10% off"],
        ["200-499 units", "Standard wholesale", "10-15% off"],
        ["500-999 units", "Bulk order", "15-20% off"],
        ["1,000-4,999 units", "Large bulk", "20-25% off"],
        ["5,000+ units", "Production run", "25-30% off"],
      ]},

      { type: "h2", text: "The Negotiation Process" },
      { type: "p", text: "Here's how a typical negotiation plays out:" },
      { type: "chart", chartType: "bar", chartTitle: "Typical Price Reduction During Negotiation (% from initial quote)", chartData: [
        { label: "Initial Quote", value: 0, color: "#D4A84B" },
        { label: "After Round 1", value: 8, color: "#0F1B2D" },
        { label: "After Round 2", value: 15, color: "#B8923A" },
        { label: "After Round 3", value: 22, color: "#1A2B45" },
        { label: "Final Agreement", value: 25, color: "#243656" },
      ], chartUnit: "%"},

      { type: "h3", text: "Round 1: The Opening" },
      { type: "p", text: "When you receive the first quote, don't react immediately. Thank them for the quote, ask questions about the product specs, MOQ, and lead time. This shows you're a serious buyer, not just price-shopping. Then ask: 'Is this your best price for this quantity?'" },

      { type: "h3", text: "Round 2: The Counter-Offer" },
      { type: "p", text: "After the supplier responds (usually with a 5-8% reduction), make your counter-offer. Target 20-30% below their current price — this gives you room to negotiate down. Back up your offer with reasons: 'I've received quotes from other suppliers at $X, but I prefer your quality.'" },

      { type: "h3", text: "Round 3: The Trade-Offs" },
      { type: "p", text: "If they can't meet your price, trade quantity for price. 'If I increase my order to 500 units, can you do $X per unit?' Other trade-offs: faster payment terms (e.g., 50% deposit instead of 30%), longer-term commitment, or flexible delivery schedule." },

      { type: "h3", text: "Final Round: Closing" },
      { type: "p", text: "Once you're close, push for the final reduction. 'If you can do $X, I'll place the order today.' This creates urgency and shows commitment. Don't push past this — if you've reached a fair price, close the deal." },

      { type: "callout", variant: "warning", text: "Never do these: (1) Tell the supplier their competitor is cheaper and you'll leave — they'll stop negotiating. (2) Negotiate price after agreeing to terms — this destroys trust. (3) Demand the absolute lowest price — factories that agree to unsustainably low prices cut corners on quality." },

      { type: "h2", text: "Payment Terms Negotiation" },
      { type: "p", text: "Standard Chinese factory payment terms are 30% deposit + 70% before shipping. You can negotiate:" },
      { type: "ul", items: [
        "30% deposit + 70% after quality inspection (best for buyers)",
        "50% deposit + 50% before shipping (compromise)",
        "Letter of Credit (L/C) for large orders ($10,000+)",
        "Escrow through Alibaba Trade Assurance (for platform orders)",
      ]},

      { type: "h2", text: "When to Walk Away" },
      { type: "p", text: "Know your walk-away price before you start negotiating. If a supplier can't meet it, politely thank them and move on. There are millions of factories in China — don't settle for one that won't work with you. But also: if a price seems too good to be true, it probably is. A factory offering 50% below market price is likely cutting quality, using substandard materials, or planning to bait-and-switch." },
    ],
  },
];
