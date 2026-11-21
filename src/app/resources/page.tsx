import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { SEO } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import { articles } from "@/lib/articles";
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
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={article.heroImage}
                      alt={article.heroAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-navy">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted">
                      <Clock className="h-3 w-3" /> {article.readTime}
                    </div>
                    <h2 className="mt-3 font-display text-lg font-bold leading-snug text-navy group-hover:text-gold">
                      {article.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{article.description}</p>
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
                Have a question that's not covered here?{" "}
                <a
                  href={whatsappLink("Hello! I have a question about sourcing from China.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-gold hover:underline"
                >
                  Message us on WhatsApp
                </a>{" "}
                — we're happy to help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
