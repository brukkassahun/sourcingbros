import Link from "next/link";
import {
  Car, Wrench, Layers, Cpu, Factory, ShieldCheck, Truck, Warehouse,
  Globe, Check, ArrowRight,
} from "lucide-react";
import { services, whatsappLink } from "@/lib/site";
import { SEO } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { BreadcrumbSchema } from "@/components/StructuredData";

const iconMap: Record<string, React.ElementType> = {
  car: Car, wrench: Wrench, layers: Layers, chip: Cpu, factory: Factory,
  "shield-check": ShieldCheck, truck: Truck, warehouse: Warehouse,
};

export const metadata = {
  title: SEO.pages.services.title,
  description: SEO.pages.services.description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: SEO.pages.services.title,
    description: SEO.pages.services.description,
    url: `${SEO.organization.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]} />

      {/* Hero */}
      <section className="bg-navy-gradient text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24">
          <span className="eyebrow-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Our Services
          </span>
          <h1 className="display-lg mt-5">
            China Sourcing Services —
            <span className="block text-gold">From Factory to Your Door</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
            SourcingBros offers eight core China sourcing services that cover the entire procurement
            lifecycle — from finding the right factory to delivering goods to your destination port.
            Whether you need a single vehicle or a container load of parts, we handle it all.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] space-y-6 px-4 sm:px-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            const isEven = i % 2 === 0;
            return (
              <Reveal key={service.id} delay={50}>
                <div id={service.id} className="scroll-mt-20 overflow-hidden rounded-3xl border border-line bg-white p-8 sm:p-10 lg:p-12">
                  <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold">
                        <Icon className="h-7 w-7" strokeWidth={1.5} />
                      </div>
                      <h2 className="display-md mt-5 text-navy">{service.title}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{service.short}</p>
                      <a
                        href={whatsappLink(`Hello! I'm interested in your ${service.title} service. Can you provide more details?`)}
                        target="_blank" rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-gold hover:underline"
                      >
                        Inquire about this service <ArrowRight className="h-3 w-3" strokeWidth={2} />
                      </a>
                    </div>

                    <div className={`lg:col-span-2 ${isEven ? "" : "lg:order-1"}`}>
                      <p className="text-base leading-relaxed text-navy/80">{service.description}</p>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2 rounded-xl bg-cream px-4 py-3">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
                            <span className="text-sm text-navy/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SEO content block */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-line bg-cream p-8 sm:p-12">
            <h2 className="display-md text-navy">Why Use a China Sourcing Agent?</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              <p>
                A professional <strong className="text-navy">China sourcing agent</strong> eliminates the
                risks and complexities of importing from China. Without a sourcing agent, you'd need to
                find factories yourself, verify their quality, negotiate prices in a foreign language,
                arrange inspections, handle export documentation, and manage international shipping —
                all while hoping the products meet your expectations.
              </p>
              <p>
                SourcingBros handles all of this for you. We've spent years building relationships with
                <strong className="text-navy"> verified Chinese factories</strong> across multiple industries —
                from vehicle manufacturers in Chongqing to electronics suppliers in Shenzhen. We know
                which factories deliver quality, which ones cut corners, and which ones offer the best
                value for your specific needs.
              </p>
              <p>
                Our <strong className="text-navy">transparent pricing model</strong> means you always know
                exactly what you're paying. We show you the factory price, our service fee, and shipping
                costs separately — no hidden markups, no inflated prices. This approach typically saves
                our clients 15-40% compared to buying through trading companies or wholesale marketplaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-gradient py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-2xl font-black text-navy sm:text-3xl">
            Need a service not listed here?
          </h2>
          <p className="mt-3 text-navy/70">Just ask. If it involves sourcing from China, we can do it.</p>
          <a
            href={whatsappLink("Hello! I need a sourcing service not listed on your site. Can you help?")}
            target="_blank" rel="noopener noreferrer"
            className="btn-dark mt-6"
          >
            WhatsApp Us <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </section>
    </>
  );
}
