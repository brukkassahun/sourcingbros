import { ChevronDown } from "lucide-react";
import { faqs, whatsappLink } from "@/lib/site";
import Reveal from "@/components/Reveal";

export const metadata = { title: "FAQ", description: "Answers to common questions about sourcing from China with SourcingBros — MOQs, pricing, shipping, quality, payments, and more." };

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-gradient text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24">
          <span className="eyebrow-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> FAQ
          </span>
          <h1 className="display-lg mt-5">
            Frequently Asked
            <span className="block text-gold">Questions</span>
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

          {/* Still have questions? */}
          <Reveal delay={300}>
            <div className="mt-12 overflow-hidden rounded-3xl bg-navy-gradient p-8 text-center text-white">
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
