import Link from "next/link";
import { ArrowRight, Factory, ShieldCheck, Globe, Users, HandshakeIcon } from "lucide-react";
import { stats, whatsappLink } from "@/lib/site";
import Reveal from "@/components/Reveal";

export const metadata = { title: "About", description: "SourcingBros is your direct factory sourcing partner in China. We connect global buyers to verified Chinese factories with transparent pricing and quality inspection." };

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-gradient text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24">
          <span className="eyebrow-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> About Us
          </span>
          <h1 className="display-lg mt-5">
            We Bridge the Gap
            <span className="block text-gold">Between You and China's Factories</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
            SourcingBros was built on one simple idea: global buyers deserve direct access to
            Chinese factories — without middleman markups, without quality risks, and without
            the complexity of navigating a foreign market alone.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="display-md text-navy">Our Story</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-navy/80">
            <p>
              SourcingBros was founded by entrepreneurs who experienced firsthand the
              challenges of sourcing from China. The language barrier, the difficulty of
              verifying factory quality, the complexity of export documentation, and the
              constant fear of receiving substandard products — all of these make buying
              direct from China intimidating for businesses around the world.
            </p>
            <p>
              We spent years building relationships with factories across China — from
              vehicle manufacturers in Chongqing to electronics suppliers in Shenzhen, from
              auto parts makers to car wrap film producers. We learned which factories deliver
              quality, which ones cut corners, and which ones offer the best value.
            </p>
            <p>
              Today, we open that network to you. Whether you need a single vehicle or a
              container load of parts, we handle the entire process — sourcing, negotiation,
              quality inspection, documentation, and shipping. You deal with one person who
              speaks your language and handles everything on the ground in China.
            </p>
            <p>
              <strong className="text-navy">No middleman markups. No quality surprises. No logistics headaches.</strong>
              {" "}Just direct factory access, transparent pricing, and reliable service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="text-center">
                  <div className="font-display text-4xl font-black text-gold sm:text-5xl">{s.value}</div>
                  <div className="mt-2 text-xs font-medium uppercase tracking-wider text-white/50">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow">Our Values</span>
            <h2 className="display-lg mt-5 text-navy">
              What We
              <span className="text-gold"> Stand For</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Transparency", desc: "Factory price, service fee, shipping — all separate, all visible. We work for you, not the factory." },
              { icon: Factory, title: "Direct Access", desc: "50+ verified factory relationships built over years. You get the benefit of our network." },
              { icon: Globe, title: "Global Reach", desc: "We ship to 40+ countries by sea, air, and express. Wherever you are, we can deliver." },
              { icon: HandshakeIcon, title: "Partnership", desc: "One dedicated contact for your entire project. We're your team on the ground in China." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-line bg-cream p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                    <v.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-sans text-sm font-bold uppercase tracking-wide text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-gradient py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-2xl font-black text-navy sm:text-3xl">
            Let's Work Together
          </h2>
          <p className="mt-3 text-navy/70">
            Tell us what you need to source. We'll show you what direct factory access looks like.
          </p>
          <a
            href={whatsappLink("Hello SourcingBros! I'd like to discuss a sourcing project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark mt-6"
          >
            Start a Conversation <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </section>
    </>
  );
}
