import Link from "next/link";
import {
  Car, Wrench, Layers, Cpu, Hammer, ShoppingBag,
  Check, ArrowRight, Globe,
} from "lucide-react";
import { productCategories, whatsappLink } from "@/lib/site";
import { SEO } from "@/lib/seo";
import { BreadcrumbSchema } from "@/components/StructuredData";
import Reveal from "@/components/Reveal";

const iconMap: Record<string, React.ElementType> = {
  car: Car, wrench: Wrench, layers: Layers, chip: Cpu,
  hammer: Hammer, "shopping-bag": ShoppingBag,
};

export const metadata = {
  title: SEO.pages.products.title,
  description: SEO.pages.products.description,
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", path: "/" },
        { name: "What We Source", path: "/products" },
      ]} />

      {/* Hero */}
      <section className="bg-navy-gradient text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24">
          <span className="eyebrow-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Product Categories
          </span>
          <h1 className="display-lg mt-5">
            What We Can Source from China
            <span className="block text-gold">For You</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
            If it's made in China, we can source it. Below are the categories we specialize in —
            but this is just the beginning. Have something else in mind? Just ask.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {productCategories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Globe;
              return (
                <Reveal key={cat.id} delay={(i % 2) * 100}>
                  <div className="h-full rounded-3xl border border-line bg-white p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold-strong">
                        <Icon className="h-7 w-7" strokeWidth={1.5} />
                      </div>
                      <h2 className="font-display text-2xl font-black text-navy">{cat.title}</h2>
                    </div>

                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                      {cat.items.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
                          <span className="text-sm text-navy/80">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                      {cat.brands.map((b) => (
                        <span key={b} className="rounded-full bg-navy/5 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-navy/60">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-line bg-white p-8 sm:p-12">
            <h2 className="display-md text-navy">Products We Source Direct from Chinese Factories</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              <p>
                As a leading China sourcing agent, SourcingBros connects global buyers directly to verified factories across China's major manufacturing hubs. From LHD vehicles built in Chongqing to electronics sourced from Shenzhen's tech corridors, our product sourcing covers every category made in China. We handle factory verification, price negotiation, quality inspection, and global shipping — giving you factory-direct pricing without the risk of importing from China alone.
              </p>
              <p>
                Our vehicle sourcing from China includes left-hand-drive cars, SUVs, and commercial vehicles from brands like Chery, Jetour, BYD, and Geely. For auto parts and body kits, we source directly from OEM-approved manufacturers, ensuring compatibility and durability. Our car wrap and PPF sourcing offers 500+ colors and finishes from top Chinese wrap film producers, all available at factory-direct wholesale prices. Every product category we source undergoes pre-shipment quality inspection before it leaves China.
              </p>
              <p>
                Beyond vehicles and auto products, our China procurement services extend to consumer electronics, industrial hardware, custom OEM manufacturing, and lifestyle goods. Whether you need a single sample or a full container load, our sourcing team in Guangzhou leverages relationships with 50+ verified factories to find the right product at the right price. Import from China with confidence — transparent pricing, no middleman markups, and end-to-end logistics support to 40+ countries worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-cream pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <Reveal delay={200}>
            <div className="overflow-hidden rounded-3xl bg-navy-gradient p-10 text-center text-white">
              <h3 className="font-display text-2xl font-black">Don't see your product?</h3>
              <p className="mx-auto mt-3 max-w-md text-white/60">
                This list covers our main specialties, but we source anything made in China.
                Tell us what you need and we'll find it.
              </p>
              <a
                href={whatsappLink("Hello! I need to source a product not listed on your site. Can you help?")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6"
              >
                Tell Us What You Need <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
