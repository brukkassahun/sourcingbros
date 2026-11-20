import { ChevronDown } from "lucide-react";
import { faqs, whatsappLink } from "@/lib/site";
import { SEO } from "@/lib/seo";
import { BreadcrumbSchema } from "@/components/StructuredData";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: SEO.pages.faq.title,
  description: SEO.pages.faq.description,
};

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", path: "/" },
        { name: "FAQ", path: "/faq" },
      ]} />

      {/* Hero */}
      <section className="bg-navy-gradient text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24">
          <span className="eyebrow-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> FAQ
          </span>
          <h1 className="display-lg mt-5">
            China Sourcing FAQ
            <span className="block text-gold">Questions & Answers</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
            Everything you need to know about sourcing from China with SourcingBros. Can't
            find your answer? Just message us.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 50}>
                <details className="group overflow-hidden rounded-2xl border border-line bg-white">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-sans text-sm font-bold text-navy transition-colors hover:bg-cream [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-gold transition-transform group-open:rotate-180" strokeWidth={2} />
                  </summary>
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted">
                    {faq.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-line bg-white p-8 sm:p-12">
            <h2 className="display-md text-navy">Common Questions About Sourcing from China</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              <p>
                Sourcing from China doesn't have to be complicated. As a professional China sourcing agent, SourcingBros answers the most common questions global buyers have about importing from China — from minimum order quantities and pricing to shipping, quality inspection, and payment methods. Whether you're sourcing vehicles, auto parts, electronics, or custom-manufactured goods, understanding the China procurement process helps you make informed decisions and avoid costly mistakes.
              </p>
              <p>
                Many buyers wonder how working with a China sourcing agent compares to buying directly from factories. The key difference is that we provide factory-direct pricing without the risks — you get transparent pricing with no hidden markups, plus quality inspection, export documentation, and global shipping handled by experts on the ground in Guangzhou. Our verified factory relationships mean you're not gambling on unknown manufacturers. You get the benefit of our experience negotiating with Chinese factories and ensuring product quality before anything ships.
              </p>
              <p>
                Common concerns about sourcing from China include product quality, shipping reliability, and payment security. At SourcingBros, we address these with pre-shipment quality inspection and photo reports on every order, real-time shipping tracking to 40+ countries, and secure payment terms. Our FAQ covers minimum order quantities, lead times, customs documentation, and the step-by-step sourcing process — everything you need to import from China with confidence. Still have questions? Contact our Guangzhou-based team directly via WhatsApp for personalized answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Still have questions? */}
      <section className="bg-cream pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal delay={300}>
            <div className="overflow-hidden rounded-3xl bg-navy-gradient p-8 text-center text-white">
              <h3 className="font-display text-xl font-black">Still have questions?</h3>
              <p className="mx-auto mt-2 max-w-sm text-white/60">
                We're happy to answer anything. Send us a message on WhatsApp.
              </p>
              <a
                href={whatsappLink("Hello SourcingBros! I have a question that wasn't answered in your FAQ.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5"
              >
                Ask on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
