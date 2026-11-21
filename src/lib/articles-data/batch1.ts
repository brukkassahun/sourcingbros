import { Article } from "@/lib/articles";

export const batch1: Article[] = [
  {
    slug: "how-to-find-reliable-china-factories",
    title: "How to Find Reliable Chinese Factories: A Complete Guide for Importers",
    description:
      "Finding trustworthy factories in China is the #1 challenge for importers. Learn how to verify suppliers, check certifications, conduct factory audits, and avoid scams — without flying to China.",
    category: "Sourcing Guide",
    readTime: "8 min read",
    publishedAt: "2025-12-15",
    keywords: ["China factory verification", "reliable suppliers China", "factory audit China", "verify Chinese manufacturer"],
    heroImage: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&h=630&fit=crop",
    heroAlt: "Chinese factory production line",
    content: [
      { type: "p", text: "Finding a reliable Chinese factory is the single most important step in your sourcing journey. A good factory partner means consistent quality, on-time delivery, and fair pricing. A bad one means defective products, missed deadlines, and lost money. This guide walks you through exactly how to verify a Chinese supplier — step by step." },

      { type: "h2", text: "Why Factory Verification Matters" },
      { type: "p", text: "China has over 30 million registered manufacturers. Some are world-class factories producing for global brands. Others are small workshops with a website and a dream. The difference in quality, capacity, and reliability between these two extremes is enormous — and you can't tell them apart from a website alone." },
      { type: "p", text: "Every year, thousands of importers lose money to fake suppliers, bait-and-switch tactics, and factories that simply can't deliver what they promise. The good news? With the right verification process, you can filter out 95% of unreliable suppliers before you spend a single dollar." },

      { type: "h2", text: "Step 1: Verify the Business License" },
      { type: "p", text: "Every legitimate Chinese company must have a business license issued by the local Administration for Industry and Commerce (AIC). This document contains critical information:" },
      { type: "ul", items: [
        "Company name (in Chinese characters — must match exactly)",
        "Registered capital (higher = more established, but not always)",
        "Business scope (must include manufacturing, not just trading)",
        "Establishment date (longer history = more reliable)",
        "Legal representative name",
        "Unified Social Credit Code (18-digit ID number)",
      ]},
      { type: "p", text: "You can verify any business license for free on the National Enterprise Credit Information Publicity System (国家企业信用信息公示系统). Enter the company's Chinese name or Unified Social Credit Code to see their registration details, annual reports, and any administrative penalties." },

      { type: "callout", variant: "warning", text: "Red flag: If a supplier refuses to provide their business license, or if the name on the license doesn't match their website/email domain, walk away immediately. This is the most common sign of a shell company or scammer." },

      { type: "h2", text: "Step 2: Check Certifications" },
      { type: "p", text: "Legitimate factories hold industry-specific certifications. These prove they meet international quality and safety standards:" },
      { type: "table", headers: ["Certification", "What It Proves", "Who Needs It"], rows: [
        ["ISO 9001", "Quality management system", "All manufacturers"],
        ["IATF 16949", "Automotive quality standard", "Auto parts suppliers"],
        ["CE Marking", "EU safety compliance", "Electronics, toys, PPE"],
        ["FCC", "US electronics compliance", "Wireless/electronic products"],
        ["RoHS", "No hazardous substances", "Electronics, toys"],
        ["BSCI / Sedex", "Social compliance audit", "EU retail suppliers"],
        ["REACH", "EU chemical safety", "Chemicals, textiles, electronics"],
      ]},

      { type: "h2", text: "Step 3: Conduct a Factory Audit" },
      { type: "p", text: "A factory audit is an on-site inspection of the supplier's production facility. There are two types:" },
      { type: "p", text: "Desktop Audit: A third-party verification company checks the factory's documents, certifications, and online presence remotely. Costs $100-300. Good for initial screening." },
      { type: "p", text: "On-Site Audit: An inspector visits the factory in person, checks the production line, equipment, worker count, quality control procedures, and takes photos/videos. Costs $300-800. Essential before placing large orders." },
      { type: "p", text: "A proper on-site audit covers:" },
      { type: "ol", items: [
        "Production capacity and equipment condition",
        "Workforce size and skill level",
        "Quality control processes and testing equipment",
        "Raw material storage and handling",
        "Finished goods warehouse conditions",
        "Compliance with labor and environmental standards",
        "Existing client relationships (do they produce for known brands?)",
      ]},

      { type: "h2", text: "Step 4: Verify on B2B Platforms" },
      { type: "p", text: "If you found the supplier on Alibaba, Made-in-China, or Global Sources, check their platform verification status:" },
      { type: "table", headers: ["Platform", "Verification Level", "What's Checked"], rows: [
        ["Alibaba", "Gold Supplier + Verified", "Business license, factory audit, trade assurance"],
        ["Made-in-China", "Audited Supplier", "Business license, on-site factory audit"],
        ["Global Sources", "Verified Manufacturer", "Company registration, export capability"],
      ]},
      { type: "p", text: "Look for suppliers with 'Verified' or 'Audited' badges — these mean a third party has physically visited the factory and confirmed it exists and operates as described. But remember: platform verification is a minimum bar, not a guarantee of quality." },

      { type: "h2", text: "Step 5: Order Samples and Test" },
      { type: "p", text: "Never place a bulk order without first ordering and testing samples. Samples tell you:" },
      { type: "ul", items: [
        "Whether the factory can actually produce the quality they claim",
        "How they communicate and handle requests for modifications",
        "Their lead time for small orders (a good indicator of bulk lead time)",
        "The real product — not just photos or renders",
      ]},
      { type: "p", text: "If a supplier refuses to send samples, charges an unreasonable price for them, or sends samples that don't match their catalog photos — that's a clear signal to find another supplier." },

      { type: "h2", text: "Common Scam Types to Watch For" },
      { type: "chart", chartType: "bar", chartTitle: "Most Common China Sourcing Scams (by frequency)", chartData: [
        { label: "Bait & Switch", value: 32, color: "#D4A84B" },
        { label: "Fake Factory", value: 24, color: "#0F1B2D" },
        { label: "Advance Payment Fraud", value: 18, color: "#B8923A" },
        { label: "Quality Downgrade", value: 15, color: "#1A2B45" },
        { label: "Disappearing Supplier", value: 11, color: "#243656" },
      ]},

      { type: "h2", text: "How a China Sourcing Agent Helps" },
      { type: "p", text: "A professional China sourcing agent like SourcingBros handles factory verification for you. We visit factories in person, check business licenses and certifications, conduct on-site audits, and maintain long-term relationships with verified suppliers. You get access to our pre-vetted factory network — without the time, cost, and risk of doing it yourself." },
      { type: "p", text: "Our 50+ factory partnerships across China are the result of years of verification, relationship-building, and quality testing. When you work with us, you skip straight to placing orders with factories we've already proven are reliable." },

      { type: "blockquote", text: "The cheapest factory is rarely the best factory. The best factory is the one that delivers consistent quality, on time, at a fair price — every single order." },
    ],
  },

  {
    slug: "china-sourcing-agent-vs-trading-company",
    title: "China Sourcing Agent vs Trading Company: Which Is Better?",
    description:
      "Should you use a sourcing agent or a trading company? We break down the differences in pricing, transparency, quality control, and service — so you can choose the right partner for your business.",
    category: "Sourcing Guide",
    readTime: "6 min read",
    publishedAt: "2025-11-28",
    keywords: ["sourcing agent vs trading company", "China procurement", "sourcing company comparison", "import from China"],
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=630&fit=crop",
    heroAlt: "Business meeting and handshake",
    content: [
      { type: "p", text: "When importing from China, you'll encounter two types of companies that help you source products: sourcing agents and trading companies. They may seem similar, but they operate very differently — and choosing the wrong one can cost you thousands of dollars in hidden markups. Here's an honest comparison." },

      { type: "h2", text: "What Is a Trading Company?" },
      { type: "p", text: "A trading company (also called a trading house or export company) buys products from factories and resells them to you at a markup. They hold inventory, handle export documentation, and ship products to your country. You buy from the trading company — not from the factory directly." },
      { type: "p", text: "Trading companies are the most common type of supplier you'll find on Alibaba and Made-in-China. In fact, the majority of 'factories' listed on these platforms are actually trading companies." },

      { type: "h2", text: "What Is a Sourcing Agent?" },
      { type: "p", text: "A sourcing agent (like SourcingBros) works on your behalf to find the right factory, negotiate prices, arrange quality inspection, and manage shipping. You pay the factory directly, and the agent charges a transparent service fee. The agent never marks up the product price — you see the real factory price." },

      { type: "h2", text: "Key Differences: Side by Side" },
      { type: "table", headers: ["Criteria", "Sourcing Agent", "Trading Company"], rows: [
        ["Pricing Model", "Factory price + transparent fee", "Hidden markup (15-40%)"],
        ["Factory Access", "Direct — you see the factory", "Indirect — factory is hidden"],
        ["Price Transparency", "Full breakdown shown", "Only final price shown"],
        ["Quality Control", "On-site inspection, your specs", "Basic or none"],
        ["Customization", "Full OEM/ODM available", "Limited to what they stock"],
        ["MOQ", "Negotiated with factory", "Fixed by trading company"],
        ["After-Sales", "Direct factory warranty", "Trading company handles (slow)"],
        ["Who Holds Your Money", "You pay factory directly", "Trading company holds it"],
      ]},

      { type: "h2", text: "The Hidden Cost of Trading Companies" },
      { type: "p", text: "Trading companies typically add a 15-40% markup to the factory price. This markup is hidden — you only see the final price they quote you, with no breakdown of the actual factory cost. For a $10,000 order, that's $1,500-4,000 in hidden markups." },
      { type: "chart", chartType: "donut", chartTitle: "Where Your Money Goes: Trading Company vs Sourcing Agent", chartData: [
        { label: "Hidden Markup", value: 30, color: "#D4A84B" },
        { label: "Actual Product Cost", value: 60, color: "#0F1B2D" },
        { label: "Shipping & Handling", value: 10, color: "#1A2B45" },
      ]},
      { type: "p", text: "With a sourcing agent, the breakdown is transparent. You see the factory price, the agent's service fee (typically 5-10%), and the shipping cost — separately. No hidden markups, no inflated prices." },

      { type: "callout", variant: "warning", text: "If a supplier won't tell you the factory name, won't let you contact the factory directly, or can't provide a factory address for an on-site audit — they're almost certainly a trading company hiding their markup." },

      { type: "h2", text: "When to Use a Trading Company" },
      { type: "p", text: "Trading companies aren't always bad. They can be a good choice when:" },
      { type: "ul", items: [
        "You're ordering small quantities (below factory MOQ)",
        "You need products from multiple categories in one shipment",
        "You want a simple, one-stop buying experience",
        "You don't need customization or OEM",
      ]},

      { type: "h2", text: "When to Use a Sourcing Agent" },
      { type: "p", text: "A sourcing agent is the better choice when:" },
      { type: "ul", items: [
        "You're ordering larger quantities (>$3,000)",
        "You need custom manufacturing or OEM/ODM",
        "You want the lowest possible factory-direct price",
        "You need quality inspection before shipping",
        "You want to build a long-term factory relationship",
        "You're sourcing vehicles, machinery, or high-value items",
      ]},

      { type: "h2", text: "The Bottom Line" },
      { type: "p", text: "If transparency, quality control, and factory-direct pricing matter to you — and they should — a sourcing agent is the clear winner. You get the real factory price, full quality inspection, and a partner who works for you, not for the factory's margin." },
      { type: "p", text: "SourcingBros operates as your sourcing agent in China. We show you the factory price, charge a flat service fee, and handle everything from factory verification to shipping. No hidden markups, no inflated prices, no surprises." },
    ],
  },
];
