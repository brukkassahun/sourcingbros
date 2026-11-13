import Link from "next/link";
import {
  Car, Wrench, Layers, Cpu, Factory, ShieldCheck, Truck, Warehouse,
  Globe, Check, ArrowRight,
} from "lucide-react";
import { services, whatsappLink } from "@/lib/site";
import Reveal from "@/components/Reveal";

const iconMap: Record<string, React.ElementType> = {
  car: Car, wrench: Wrench, layers: Layers, chip: Cpu, factory: Factory,
  "shield-check": ShieldCheck, truck: Truck, warehouse: Warehouse,
};

export const metadata = { title: "Services", description: "Full-service sourcing from China — vehicle sourcing, auto parts, car wraps, electronics, custom manufacturing, quality inspection, logistics, and warehousing." };

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-gradient text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24">
          <span className="eyebrow-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Our Services
          </span>
          <h1 className="display-lg mt-5">
            Everything You Need to Source
            <span className="block text-gold">from China</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
            From finding the right factory to delivering to your door — we offer eight core
            services that cover the entire sourcing lifecycle. Use one, use them all.
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
                    {/* Left: icon + title */}
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold">
                        <Icon className="h-7 w-7" strokeWidth={1.5} />
                      </div>
                      <h2 className="display-md mt-5 text-navy">{service.title}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{service.short}</p>
                      <a
                        href={whatsappLink(`Hello! I'm interested in your ${service.title} service. Can you provide more details?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-gold hover:underline"
                      >
                        Inquire about this service <ArrowRight className="h-3 w-3" strokeWidth={2} />
                      </a>
                    </div>

                    {/* Right: description + features */}
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

      {/* CTA */}
      <section className="bg-gold-gradient py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-2xl font-black text-navy sm:text-3xl">
            Need a service not listed here?
          </h2>
          <p className="mt-3 text-navy/70">Just ask. If it involves sourcing from China, we can do it.</p>
          <a
            href={whatsappLink("Hello! I need a sourcing service not listed on your site. Can you help?")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark mt-6"
          >
            WhatsApp Us <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </section>
    </>
  );
}
