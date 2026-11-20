import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { SEO } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata = {
  title: SEO.pages.resources.title,
  description: SEO.pages.resources.description,
  alternates: { canonical: "/resources" },
  openGraph: {
    title: SEO.pages.resources.title,
    description: SEO.pages.resources.description,
    url: `${SEO.organization.url}/resources`,
  },
};

const articles = [
  {
    slug: "how-to-find-reliable-china-factories",
    title: "How to Find Reliable Chinese Factories: A Complete Guide for Importers",
    excerpt: "Finding trustworthy factories in China is the #1 challenge for importers. Learn how to verify suppliers, check certifications, conduct factory audits, and avoid scams — without flying to China.",
    readTime: "8 min read",
    category: "Sourcing Guide",
    keywords: ["China factory verification", "reliable suppliers China", "factory audit China"],
  },
  {
    slug: "china-sourcing-agent-vs-trading-company",
    title: "China Sourcing Agent vs Trading Company: Which Is Better?",
    excerpt: "Should you use a sourcing agent or a trading company? We break down the differences in pricing, transparency, quality control, and service — so you can choose the right partner for your business.",
    readTime: "6 min read",
    category: "Sourcing Guide",
    keywords: ["sourcing agent vs trading company", "China procurement", "sourcing company comparison"],
  },
  {
    slug: "import-vehicles-from-china-guide",
    title: "How to Import LHD Vehicles from China: Step-by-Step Guide",
    excerpt: "Complete guide to importing left-hand-drive vehicles from China — choosing the right brand (Chery, Jetour, BYD, Geely), export documentation, shipping options (RoRo vs container), and customs clearance.",
    readTime: "10 min read",
    category: "Vehicle Sourcing",
    keywords: ["import vehicles from China", "LHD car export China", "China vehicle import guide"],
  },
  {
    slug: "negotiate-prices-with-chinese-factories",
    title: "How to Negotiate Prices with Chinese Factories (Without Losing the Deal)",
    excerpt: "Price negotiation with Chinese suppliers is an art. Learn the cultural nuances, negotiation tactics, and pricing structures that will get you the best factory-direct price — without damaging the relationship.",
    readTime: "7 min read",
    category: "Sourcing Guide",
    keywords: ["negotiate China factory prices", "supplier negotiation China", "factory direct pricing"],
  },
  {
    slug: "quality-inspection-china-imports",
    title: "Pre-Shipment Quality Inspection in China: Why It Matters & How It Works",
    excerpt: "Pre-shipment inspection is your last line of defense against defective products. Learn what AQL sampling is, what a quality inspection report looks like, and why you should never skip this step.",
    readTime: "6 min read",
    category: "Quality Control",
    keywords: ["quality inspection China", "pre-shipment inspection", "AQL sampling China"],
  },
  {
    slug: "shipping-from-china-to-africa",
    title: "Shipping from China to Africa: Sea Freight, Air Freight & Express Guide",
    excerpt: "Everything you need to know about shipping from China to African ports — sea freight (FCL & LCL), air freight, express courier, shipping costs, transit times, and customs documentation for Nigeria, Ghana, and more.",
    readTime: "9 min read",
    category: "Shipping & Logistics",
    keywords: ["shipping China to Africa", "sea freight China Africa", "import customs Africa"],
  },
  {
    slug: "car-wrap-ppf-sourcing-china",
    title: "Sourcing Car Wraps & PPF from China: Complete Buyer's Guide",
    excerpt: "China is the world's largest producer of car wrap films and PPF. Learn how to source PET color change films, TPU paint protection film, and window tint directly from Chinese manufacturers at factory-direct prices.",
    readTime: "7 min read",
    category: "Product Sourcing",
    keywords: ["car wrap sourcing China", "PPF manufacturer China", "vinyl wrap wholesale China"],
  },
  {
    slug: "avoid-common-china-sourcing-mistakes",
    title: "10 Common China Sourcing Mistakes (And How to Avoid Them)",
    excerpt: "From paying full upfront to skipping quality inspections, these are the most expensive mistakes importers make when sourcing from China — and exactly how to avoid each one.",
    readTime: "8 min read",
    category: "Sourcing Guide",
    keywords: ["China sourcing mistakes", "import mistakes China", "sourcing pitfalls"],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
      ]} />

      {/* Hero */}
      <section className="bg-navy-gradient text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24">
          <span className="eyebrow-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Resources & Guides
          </span>
          <h1 className="display-lg mt-5">
            China Sourcing Guides
            <span className="block text-gold">& Resources</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
            Expert guides on sourcing from China — from finding reliable factories to negotiating
            prices, ensuring quality, handling shipping, and avoiding common mistakes. Free resources
            for global importers and businesses.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={(i % 3) * 100}>
                <Link
                  href={`/resources/${article.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
                >
                  <div className="flex h-40 items-center justify-center bg-navy-gradient">
                    <BookOpen className="h-12 w-12 text-gold/40" strokeWidth={1} />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-gold">
                      <span>{article.category}</span>
                      <span className="text-muted">·</span>
                      <span className="flex items-center gap-1 text-muted">
                        <Clock className="h-3 w-3" /> {article.readTime}
                      </span>
                    </div>
                    <h2 className="mt-3 font-display text-lg font-bold leading-snug text-navy group-hover:text-gold">
                      {article.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
                      Read Article <ArrowRight className="h-3 w-3" strokeWidth={2} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content block */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-line bg-cream p-8 sm:p-12">
            <h2 className="display-md text-navy">Learn How to Source from China</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              <p>
                Sourcing products from China can transform your business — lower costs, wider product
                range, and direct access to the world's manufacturing powerhouse. But without the right
                knowledge, it can also be risky. Our <strong className="text-navy">China sourcing guides</strong>
                cover everything you need to know, from finding reliable factories to shipping your goods.
              </p>
              <p>
                Whether you're a first-time importer or an experienced buyer, these resources will help
                you navigate the complexities of <strong className="text-navy">China procurement</strong> —
                supplier verification, price negotiation, quality inspection, export documentation,
                shipping methods, and customs clearance. Written by sourcing professionals with years of
                on-the-ground experience in Guangzhou, Shenzhen, and across China's manufacturing hubs.
              </p>
              <p>
                Have a question that's not covered here? <a href={whatsappLink("Hello! I have a question about sourcing from China.")} target="_blank" rel="noopener noreferrer" className="font-bold text-gold hover:underline">Message us on WhatsApp</a> —
                we're happy to help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
