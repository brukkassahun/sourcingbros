import { Article } from "@/lib/articles";

export const batch3: Article[] = [
  {
    slug: "quality-inspection-china-imports",
    title: "Pre-Shipment Quality Inspection in China: Why It Matters & How It Works",
    description:
      "Pre-shipment inspection is your last line of defense against defective products. Learn what AQL sampling is, what an inspection report looks like, and why you should never skip this step.",
    category: "Quality Control",
    readTime: "6 min read",
    publishedAt: "2025-12-08",
    keywords: ["quality inspection China", "pre-shipment inspection", "AQL sampling China", "product quality control China"],
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=630&fit=crop",
    heroAlt: "Quality inspection on a production line",
    content: [
      { type: "p", text: "Pre-shipment quality inspection is the single most important step you can take to protect your investment when importing from China. It's your last chance to catch defects before products leave the factory — and before you pay the final balance. Skip it, and you're gambling with your money." },

      { type: "h2", text: "What Is Pre-Shipment Inspection?" },
      { type: "p", text: "Pre-shipment inspection (PSI) is an on-site quality check performed at the factory or warehouse after production is complete but before goods are shipped. A trained inspector visits the factory, samples products according to international standards (AQL), checks them against your specifications, and produces a detailed report with photos and pass/fail results." },

      { type: "h2", text: "The Three Types of Quality Inspection" },
      { type: "table", headers: ["Type", "When It Happens", "What It Catches", "Cost Range"], rows: [
        ["Pre-Production", "Before mass production starts", "Material quality, factory readiness", "$200-400"],
        ["In-Line (DUPRO)", "During 20-50% of production", "Process defects early, correct course", "$250-500"],
        ["Pre-Shipment (PSI)", "After 100% production, before shipping", "Final quality, quantity, packaging", "$200-500"],
      ]},
      { type: "p", text: "For most orders, pre-shipment inspection (PSI) is the minimum. For large orders ($10,000+), consider adding a DUPRO inspection to catch problems early." },

      { type: "h2", text: "Understanding AQL (Acceptable Quality Limit)" },
      { type: "p", text: "AQL is the international standard for sampling inspection. Instead of checking every single unit (impractical for large orders), inspectors check a statistically significant sample. The AQL level determines how many defects are acceptable." },
      { type: "p", text: "The three AQL levels used in practice:" },
      { type: "table", headers: ["Defect Type", "AQL 2.5", "AQL 1.5", "AQL 1.0"], rows: [
        ["Critical Defects", "0 accepted", "0 accepted", "0 accepted"],
        ["Major Defects", "Allowed", "Stricter", "Strictest"],
        ["Minor Defects", "More allowed", "Fewer allowed", "Fewest allowed"],
      ]},
      { type: "p", text: "AQL 2.5 is the industry standard for consumer products. AQL 1.5 is used for higher-value items. AQL 1.0 is used for medical, safety, or premium products where zero tolerance is required." },

      { type: "h2", text: "Defect Classifications" },
      { type: "ul", items: [
        "Critical Defects: Safety hazards, regulatory violations, products that could harm users. Zero tolerance — even one critical defect fails the inspection.",
        "Major Defects: Functional problems, visible damage, missing components. These affect the product's usability and must stay within the AQL limit.",
        "Minor Defects: Cosmetic issues, minor scratches, slight color variations. These don't affect function but may affect customer perception.",
      ]},

      { type: "chart", chartType: "donut", chartTitle: "Typical Inspection Findings by Defect Type", chartData: [
        { label: "No Defects (Pass)", value: 65, color: "#0F1B2D" },
        { label: "Minor Defects", value: 18, color: "#D4A84B" },
        { label: "Major Defects", value: 12, color: "#B8923A" },
        { label: "Critical Defects", value: 5, color: "#E0571F" },
      ]},

      { type: "h2", text: "What an Inspection Report Looks Like" },
      { type: "p", text: "A professional pre-shipment inspection report includes:" },
      { type: "ol", items: [
        "Factory information and inspection date",
        "Order details (product, quantity, PO number)",
        "Sample size selected and sampling methodology used",
        "AQL levels applied (critical, major, minor)",
        "Detailed defect findings with photos of each issue",
        "Quantity verification (counted vs. ordered)",
        "Packaging and labeling check",
        "On-site tests performed (function, pull, drop, etc.)",
        "Final verdict: PASS, FAIL, or PENDING (client decision)",
        "Inspector's comments and recommendations",
      ]},

      { type: "callout", variant: "warning", text: "The cost of a pre-shipment inspection ($200-500) is a fraction of the cost of receiving a container full of defective products. One failed inspection saves you the entire order value — not to mention the cost of returns, customer complaints, and damaged reputation." },

      { type: "h2", text: "Inspection Cost vs. Cost of Defects" },
      { type: "p", text: "Let's look at the math. Say you're ordering $10,000 worth of products:" },
      { type: "chart", chartType: "comparison", chartTitle: "Inspection Cost vs. Cost of Defective Shipment", chartData: [
        { label: "Inspection Cost", value: 300, color: "#0E7A3D" },
        { label: "Defective Goods (15%)", value: 1500, color: "#D4A84B" },
        { label: "Return Shipping", value: 1200, color: "#B8923A" },
        { label: "Lost Sales", value: 2000, color: "#E0571F" },
      ], chartUnit: " USD"},

      { type: "h2", text: "How SourcingBros Handles Inspection" },
      { type: "p", text: "Every SourcingBros order includes pre-shipment inspection at no extra cost. Our team visits the factory, inspects goods against your specifications, and sends you a detailed report with photos and videos. For vehicles, we provide a full 360° walkaround video and mechanical check. You approve before anything ships — nothing leaves China without your sign-off." },
      { type: "p", text: "If the inspection fails, we work with the factory to fix the issues — rework, replacement, or refund. You never pay for defective products." },
    ],
  },

  {
    slug: "shipping-from-china-to-africa",
    title: "Shipping from China to Africa: Sea Freight, Air Freight & Express Guide",
    description:
      "Everything you need to know about shipping from China to African ports — sea freight, air freight, express courier, shipping costs, transit times, and customs documentation.",
    category: "Shipping & Logistics",
    readTime: "9 min read",
    publishedAt: "2025-11-20",
    keywords: ["shipping China to Africa", "sea freight China Africa", "import customs Africa", "China to Nigeria shipping"],
    heroImage: "https://images.unsplash.com/photo-1494412651403-1c7a0c1e1e1e?w=1200&h=630&fit=crop",
    heroAlt: "Cargo ship at a port",
    content: [
      { type: "p", text: "Shipping from China to Africa is the final link in your sourcing chain. Choose the right shipping method and you'll save thousands. Choose wrong and you'll pay for slow delivery, damaged goods, or surprise customs fees. This guide covers everything you need to know about shipping from China to African destinations." },

      { type: "h2", text: "Shipping Methods Compared" },
      { type: "table", headers: ["Method", "Cost", "Transit Time", "Best For"], rows: [
        ["Sea Freight (FCL)", "Lowest per CBM", "25-45 days", "Large/heavy orders, full containers"],
        ["Sea Freight (LCL)", "Low for small volumes", "30-50 days", "Orders under 15 CBM"],
        ["Air Freight", "High", "5-10 days", "Urgent orders, high-value goods"],
        ["Express (DHL/FedEx)", "Highest", "3-7 days", "Samples, small packages"],
      ]},

      { type: "h2", text: "Major Chinese Export Ports" },
      { type: "p", text: "Most exports from China ship from one of these major ports:" },
      { type: "ul", items: [
        "Guangzhou (Nansha Port) — closest to our warehouse, ideal for South China factories",
        "Shenzhen (Yantian/Shekou) — electronics and tech from the Pearl River Delta",
        "Shanghai (Yangshan) — largest container port in the world, serves East China",
        "Ningbo (Beilun) — close to Shanghai, slightly cheaper port fees",
        "Qingdao — serves North China manufacturers",
      ]},

      { type: "h2", text: "Major African Destination Ports" },
      { type: "table", headers: ["Port", "Country", "Major Imports"], rows: [
        ["Tema", "Ghana", "Vehicles, parts, electronics, textiles"],
        ["Tema", "Ghana", "Vehicles, parts, electronics, textiles"],
        ["Lagos (Tin Can / Apapa)", "Nigeria", "Vehicles, parts, electronics, consumer goods"],
        ["Mombasa", "Kenya", "Vehicles, machinery, construction materials"],
        ["Dar es Salaam", "Tanzania", "Vehicles, machinery, consumer goods"],
        ["Durban", "South Africa", "Vehicles, parts, electronics"],
        ["Djibouti", "Djibouti/Ethiopia", "Vehicles, machinery, grain"],
        ["Abidjan", "Ivory Coast", "Vehicles, consumer goods, construction"],
      ]},

      { type: "chart", chartType: "comparison", chartTitle: "Average Sea Freight Transit Times from China (days)", chartData: [
        { label: "Tema (Ghana)", value: 28, color: "#D4A84B" },
        { label: "Lagos (Nigeria)", value: 32, color: "#0F1B2D" },
        { label: "Mombasa (Kenya)", value: 35, color: "#B8923A" },
        { label: "Durban (S. Africa)", value: 30, color: "#1A2B45" },
        { label: "Abidjan (Ivory Coast)", value: 33, color: "#243656" },
      ], chartUnit: " days"},

      { type: "h2", text: "Sea Freight: FCL vs LCL" },
      { type: "p", text: "FCL (Full Container Load): You rent an entire container (20ft or 40ft). Cheapest per cubic meter, fastest transit time, and your goods aren't mixed with other shipments. Best for orders over 15 CBM." },
      { type: "p", text: "LCL (Less than Container Load): Your goods share a container with other shipments. You pay per cubic meter. Slightly slower (5-7 extra days for consolidation) and more expensive per CBM, but ideal for smaller orders." },
      { type: "p", text: "Rule of thumb: If your order fills more than half a container, use FCL. If it's less, use LCL." },

      { type: "h2", text: "Customs Documentation Required" },
      { type: "p", text: "To clear customs at your African destination port, you'll need:" },
      { type: "ol", items: [
        "Original Bill of Lading (endorsed by shipping line)",
        "Commercial Invoice (from supplier)",
        "Packing List (detailed, with weights and dimensions)",
        "Certificate of Origin (COO) — from manufacturer or CCPIT",
        "Form M / Import Declaration (Nigeria) or equivalent",
        "Pre-Shipment Inspection Certificate (e.g., SONCAP for Nigeria, ECA for Ghana)",
        "Insurance Certificate (if applicable)",
        "HS Code classification for each product",
      ]},

      { type: "h2", text: "Duties and Taxes" },
      { type: "p", text: "Import duties vary widely by country and product category. Some examples:" },
      { type: "table", headers: ["Country", "Vehicles", "Auto Parts", "Electronics", "Textiles"], rows: [
        ["Nigeria", "20-35%", "10-20%", "5-20%", "15-35%"],
        ["Ghana", "5-20%", "5-10%", "0-10%", "10-20%"],
        ["Kenya", "25%", "10%", "10-25%", "25%"],
        ["South Africa", "18-30%", "10-15%", "5-15%", "20-40%"],
      ]},
      { type: "p", text: "Always check your country's current tariff schedule and confirm HS codes with your clearing agent before shipping. Duties can change without notice." },

      { type: "callout", variant: "warning", text: "Common shipping mistakes: (1) Choosing the cheapest freight forwarder (they cut corners). (2) Not buying marine insurance. (3) Forgetting to factor in port charges and clearing fees. (4) Not having all customs documents ready before the shipment arrives (storage fees at port are $30-100/day)." },

      { type: "h2", text: "How SourcingBros Handles Shipping" },
      { type: "p", text: "SourcingBros handles the entire shipping process — from factory pickup to destination port delivery. We work with verified freight forwarders, negotiate the best shipping rates, handle all export documentation from China, and provide real-time tracking. We also offer supplier consolidation — buying from multiple factories and shipping in one container to reduce your shipping costs." },
      { type: "p", text: "For destination customs clearance, we provide all necessary paperwork and can connect you with a trusted clearing agent at your local port. For select markets, we offer door-to-door delivery." },
    ],
  },
];
