import Link from "next/link";
import {
  MessageSquare, Search, PackageCheck, ShieldCheck, Truck,
  ArrowRight, Check, Clock, FileText, Camera, MapPin, Package,
} from "lucide-react";
import { processSteps, whatsappLink } from "@/lib/site";
import { SEO } from "@/lib/seo";
import { BreadcrumbSchema } from "@/components/StructuredData";
import Reveal from "@/components/Reveal";

const iconMap: Record<string, React.ElementType> = {
  "message-square": MessageSquare, search: Search, "package-check": PackageCheck,
  "shield-check": ShieldCheck, truck: Truck,
};

export const metadata = {
  title: SEO.pages.howItWorks.title,
  description: SEO.pages.howItWorks.description,
};

export default function HowItWorksPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", path: "/" },
        { name: "How It Works", path: "/how-it-works" },
      ]} />

      {/* Hero */}
      <section className="bg-navy-gradient text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24">
          <span className="eyebrow-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> The Process
          </span>
          <h1 className="display-lg mt-5">
            How to Source from China
            <span className="block text-gold">Step by Step</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
            No complex workflows. No hidden steps. Just five clear stages from your initial
            request to goods arriving at your destination.
          </p>
        </div>
      </section>

      {/* Process steps — detailed */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="space-y-4">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || MessageSquare;
              return (
                <Reveal key={step.step} delay={i * 80}>
                  <div className="flex flex-col gap-6 rounded-3xl border border-line bg-white p-8 sm:flex-row sm:items-center lg:p-10">
                    {/* Step number + icon */}
                    <div className="flex shrink-0 flex-row items-center gap-5 sm:flex-col sm:items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-gold">
                        <Icon className="h-8 w-8" strokeWidth={1.5} />
                      </div>
                      <span className="font-display text-3xl font-black text-gold/30">{step.step}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 border-t border-line pt-6 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                      <h2 className="font-display text-xl font-black text-navy sm:text-2xl">{step.title}</h2>
                      <p className="mt-3 text-base leading-relaxed text-muted">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* What you get at each stage */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="mb-14 text-center">
            <span className="eyebrow">Transparency</span>
            <h2 className="display-lg mt-5 text-navy">
              What You Get
              <span className="text-gold"> at Each Stage</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              We keep you informed at every step. Here's exactly what you receive from us
              throughout the process.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Clock, title: "48-Hour Response", desc: "After you send your request, you get a detailed quote within 48 hours — with factory info, product specs, and pricing." },
              { icon: FileText, title: "Itemized Quote", desc: "Factory price, our service fee, and estimated shipping — broken down separately. No hidden markups, no surprises." },
              { icon: Camera, title: "Photo & Video Reports", desc: "Sample photos, production progress shots, and pre-shipment inspection reports with detailed imagery." },
              { icon: ShieldCheck, title: "Quality Approval Gate", desc: "Nothing ships without your approval. You see the inspection report and give the green light before we dispatch." },
              { icon: MapPin, title: "Real-Time Tracking", desc: "Once shipped, you get tracking information and updates until your goods arrive at the destination port." },
              { icon: Package, title: "Full Documentation", desc: "Commercial invoice, packing list, certificate of origin, and all export/customs paperwork provided." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 100}>
                <div className="h-full rounded-2xl border border-line bg-cream p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                    <item.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-sans text-sm font-bold uppercase tracking-wide text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-line bg-white p-8 sm:p-12">
            <h2 className="display-md text-navy">The China Sourcing Process Explained</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              <p>
                Understanding how to source from China is the first step toward importing quality products at factory-direct prices. As your China sourcing agent, SourcingBros simplifies the entire procurement process into five transparent stages — from your initial product request to final delivery at your destination. Our step-by-step approach eliminates the guesswork, language barriers, and quality risks that often come with sourcing from China independently.
              </p>
              <p>
                The process begins when you tell us what you need — whether it's vehicles, auto parts, electronics, or custom-manufactured goods. Within 48 hours, our team in Guangzhou identifies verified factories, negotiates the best factory-direct pricing, and sends you an itemized quote with transparent pricing that separates product cost, service fee, and shipping. You review the quote, approve the sample, and we move into production with quality inspection at every milestone.
              </p>
              <p>
                Before any product leaves China, we conduct a thorough pre-shipment quality inspection and send you photo and video reports for approval. Nothing ships without your green light. Once approved, we handle all export documentation, customs clearance, and global shipping by sea, air, or express to 40+ countries. You receive real-time tracking and full documentation — including commercial invoices, packing lists, and certificates of origin — making import from China a seamless, end-to-end experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-gradient py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-2xl font-black text-navy sm:text-3xl">
            Ready to Start?
          </h2>
          <p className="mt-3 text-navy/70">Step 1 is easy — just tell us what you need.</p>
          <a
            href={whatsappLink("Hello SourcingBros! I'd like to start a sourcing request. Here's what I need:")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark mt-6"
          >
            Send Your Request <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </section>
    </>
  );
}
