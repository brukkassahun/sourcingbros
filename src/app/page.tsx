import Link from "next/link";
import {
  Car, Wrench, Layers, Cpu, Factory, ShieldCheck, Truck, Warehouse,
  MessageSquare, Search, PackageCheck, Globe, Clock, Hammer, ShoppingBag,
  ArrowRight, Check, Star, TrendingUp, Users, Award, FileCheck,
} from "lucide-react";
import { services, productCategories, processSteps, trustBadges, stats, faqs, site, whatsappLink } from "@/lib/site";
import { SEO } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { ServiceListSchema, FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";

const iconMap: Record<string, React.ElementType> = {
  car: Car, wrench: Wrench, layers: Layers, chip: Cpu, factory: Factory,
  "shield-check": ShieldCheck, truck: Truck, warehouse: Warehouse,
  "message-square": MessageSquare, search: Search, "package-check": PackageCheck,
  globe: Globe, clock: Clock, hammer: Hammer, "shopping-bag": ShoppingBag,
};

export const metadata = {
  title: SEO.pages.home.title,
  description: SEO.pages.home.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: SEO.pages.home.title,
    description: SEO.pages.home.description,
    url: SEO.organization.url,
  },
};

export default function HomePage() {
  return (
    <>
      <ServiceListSchema />
      <FAQSchema />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }]} />

      {/* HERO — SEO-optimized H1 with primary keyword */}
      <section className="relative overflow-hidden bg-navy-gradient text-white">
        <div className="absolute inset-0 bg-navy-radial" />
        <div className="absolute right-[-5%] top-[10%] h-72 w-72 rounded-full bg-gold/8 blur-3xl animate-float" />
        <div className="absolute left-[-3%] bottom-[5%] h-64 w-64 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="eyebrow-light">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              China Sourcing Agent — Direct Factory Access
            </span>

            <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              Source Anything from China.
              <span className="block text-gold">Delivered to Your Door.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              SourcingBros is your professional China sourcing agent. We connect you directly to
              verified Chinese factories — sourcing vehicles, auto parts, car wraps, electronics,
              and custom-manufactured products with quality inspection and global shipping handled
              end-to-end. No middleman markups. Transparent factory-direct pricing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink("Hello SourcingBros! I'd like to get a quote for a sourcing request.")}
                target="_blank" rel="noopener noreferrer"
                className="btn-primary"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <Link href="/how-it-works" className="btn-ghost-light">
                See How It Works
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-black text-gold">{s.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-cream" />
      </section>

      {/* TRUST BADGES */}
      <section className="border-b border-line bg-cream">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4">
          {trustBadges.map((badge, i) => {
            const Icon = iconMap[badge.icon] || Globe;
            return (
              <Reveal key={badge.title} delay={i * 80}>
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-navy">{badge.title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{badge.sub}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow">What We Do</span>
            <h2 className="display-lg mt-5 text-navy">
              Full-Service China Sourcing,
              <span className="text-gold"> Start to Finish</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              From finding the right factory to inspecting the goods and shipping them to your
              country — we handle every step of the China sourcing process so you don't have to.
              Our services cover the entire procurement lifecycle.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Globe;
              return (
                <Reveal key={service.id} delay={(i % 3) * 100}>
                  <Link href={`/services#${service.id}`} className="card-service group block h-full p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="title mt-5 text-navy">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{service.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-gold opacity-0 transition-opacity group-hover:opacity-100">
                      Learn More <ArrowRight className="h-3 w-3" strokeWidth={2} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE SOURCE */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow">Product Categories</span>
            <h2 className="display-lg mt-5 text-navy">
              What Can We Source
              <span className="text-gold"> For You?</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              If it's made in China, we can source it. Here are the categories we specialize in —
              but don't let this list limit you. Our factory network covers virtually every
              manufacturing sector in China.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Globe;
              return (
                <Reveal key={cat.id} delay={(i % 3) * 100}>
                  <div className="rounded-2xl border border-line bg-cream p-7 transition-all duration-300 hover:border-gold/40 hover:shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-strong">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="title mt-5 text-navy">{cat.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
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

          <div className="mt-10 text-center">
            <p className="text-sm text-muted">
              Don't see your product?{" "}
              <a
                href={whatsappLink("Hello! I need to source a product not listed on your site. Can you help?")}
                target="_blank" rel="noopener noreferrer"
                className="font-bold text-gold hover:underline"
              >
                Just ask us
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-navy text-white">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow-light">The Process</span>
            <h2 className="display-lg mt-5">
              How China Sourcing
              <span className="text-gold"> Works</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/60">
              Five simple steps from your request to your delivery. No complexity, no hidden
              steps — just transparent, reliable sourcing from Chinese factories.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Globe;
              return (
                <Reveal key={step.step} delay={i * 100}>
                  <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-gold/30 hover:bg-white/8">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <span className="font-display text-2xl font-black text-white/15">{step.step}</span>
                    </div>
                    <h3 className="mt-4 font-sans text-sm font-bold uppercase tracking-wide text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/how-it-works" className="btn-ghost-light">
              See Full Process Details
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Why SourcingBros</span>
              <h2 className="display-lg mt-5 text-navy">
                We're Not Middlemen.
                <span className="block text-gold">We're Your Partner in China.</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Most China sourcing companies add 20-40% markup and hide the real factory price.
                We don't. You see the factory price, our service fee, and shipping costs — broken
                down transparently. We work for you, not the factory.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  { title: "Transparent Pricing", desc: "Factory price, service fee, and shipping — all shown separately. No hidden markups, no inflated costs." },
                  { title: "Pre-Shipment Inspection on Every Order", desc: "Photos, videos, and quality reports before you pay the balance. You approve before anything ships." },
                  { title: "50+ Verified Factory Relationships", desc: "We've spent years building direct relationships with factories across China. You get the benefit of our network." },
                  { title: "One Contact, End-to-End", desc: "One person handles your entire project — from sourcing to shipping. No being passed around between departments." },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={i * 80}>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15">
                        <Check className="h-4 w-4 text-gold-strong" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h4 className="font-sans text-sm font-bold text-navy">{item.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={150}>
              <div className="relative overflow-hidden rounded-3xl border border-line bg-navy-gradient p-8 text-white">
                <div className="absolute right-[-10%] top-[-5%] h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
                <div className="relative">
                  <Star className="h-8 w-8 text-gold" fill="currentColor" />
                  <h3 className="mt-5 font-display text-2xl font-black leading-tight">
                    "They found the exact parts I needed at half the price I was paying before.
                    The quality inspection gave me confidence to order in bulk."
                  </h3>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-display text-sm font-black text-navy">
                      ED
                    </div>
                    <div>
                      <p className="font-sans text-sm font-bold">Ellis Danso</p>
                      <p className="text-xs text-white/50">Auto Dealer, Accra, Ghana</p>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                    <div>
                      <div className="font-display text-2xl font-black text-gold">50%</div>
                      <div className="text-[10px] uppercase tracking-wider text-white/50">Cost Saved</div>
                    </div>
                    <div>
                      <div className="font-display text-2xl font-black text-gold">7 days</div>
                      <div className="text-[10px] uppercase tracking-wider text-white/50">Delivery Time</div>
                    </div>
                    <div>
                      <div className="font-display text-2xl font-black text-gold">100%</div>
                      <div className="text-[10px] uppercase tracking-wider text-white/50">Quality Pass</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW — SEO content section */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="eyebrow">Common Questions</span>
            <h2 className="display-lg mt-5 text-navy">
              China Sourcing
              <span className="text-gold"> FAQ</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Everything you need to know about sourcing from China with SourcingBros.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.slice(0, 4).map((faq, i) => (
              <Reveal key={i} delay={i * 50}>
                <details className="group overflow-hidden rounded-2xl border border-line bg-cream">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-sans text-sm font-bold text-navy transition-colors hover:bg-white [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="text-gold transition-transform group-open:rotate-45 text-xl font-light">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted">{faq.a}</div>
                </details>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/faq" className="btn-ghost">
              View All FAQs
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO CONTENT BLOCK — keyword-rich text for search engines */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-line bg-white p-8 sm:p-12">
            <h2 className="display-md text-navy">
              Professional China Sourcing Agent Services
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              <p>
                SourcingBros is a professional <strong className="text-navy">China sourcing agent</strong> based in
                Guangzhou, China. We help businesses worldwide import products directly from Chinese factories —
                without the middleman markups, language barriers, or quality risks that make sourcing from China
                intimidating for first-time buyers.
              </p>
              <p>
                Our core expertise spans <strong className="text-navy">vehicle sourcing and export</strong> (new and used
                LHD vehicles from Chery, Jetour, BYD, Geely, and 20+ other Chinese brands),
                <strong className="text-navy"> auto parts and body kits</strong> (OEM-spec and aftermarket components
                from certified manufacturers), <strong className="text-navy">car wraps and PPF</strong> (PET color change
                films with 500+ colors, TPU paint protection film), <strong className="text-navy">electronics and gadgets</strong>
                from Shenzhen suppliers, and <strong className="text-navy">custom OEM manufacturing</strong> for clients
                who need products built to their own specifications.
              </p>
              <p>
                Unlike trading companies that hide the real factory price, SourcingBros operates with full transparency.
                You see the factory price, our service fee, and the shipping cost — broken down separately in every quote.
                We charge a flat service fee, not a percentage markup. This means you get <strong className="text-navy">factory-direct
                pricing</strong> that's typically 15-40% lower than what you'd pay through trading companies or wholesale
                marketplaces.
              </p>
              <p>
                Every order goes through <strong className="text-navy">pre-shipment quality inspection</strong>. Our team
                visits the factory or warehouse, inspects the goods against your specifications, and sends you a
                comprehensive report with photos and videos. You approve before anything ships. For vehicles, we provide
                a full 360° walkaround video and mechanical check.
              </p>
              <p>
                We handle <strong className="text-navy">global shipping and logistics</strong> — sea freight (FCL & LCL),
                air freight, and express courier — to 40+ countries across Africa, the Middle East, Southeast Asia, Europe,
                and the Americas. We also offer <strong className="text-navy">warehousing and consolidation</strong> services,
                so you can buy from multiple suppliers and ship everything in one consolidated shipment to reduce costs.
              </p>
              <p>
                Whether you're a <strong className="text-navy">car dealer in Ghana</strong> looking for LHD vehicles, an
                <strong className="text-navy"> auto shop in Nigeria</strong> sourcing body kits, or a
                <strong className="text-navy"> distributor in Dubai</strong> importing electronics — SourcingBros is your
                direct line to Chinese factories. Get a free quote within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gold-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-black leading-[1.1] tracking-[-0.01em] text-navy sm:text-4xl lg:text-5xl">
            Ready to Source from China?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-navy/70">
            Tell us what you need. We'll send you a quote within 48 hours — no obligation, no
            commitment. Just honest factory-direct pricing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink("Hello SourcingBros! I'd like to get a free quote.")}
              target="_blank" rel="noopener noreferrer"
              className="btn-dark"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <Link href="/contact" className="btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
