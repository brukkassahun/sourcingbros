"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin, Clock, Send, Check } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { SEO } from "@/lib/seo";
import { BreadcrumbSchema } from "@/components/StructuredData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    productType: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message from form
    const msg = `Hello SourcingBros! I'd like to submit a sourcing request.%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Company:* ${form.company || "N/A"}%0A*Phone:* ${form.phone || "N/A"}%0A*Product:* ${form.productType || "N/A"}%0A*Quantity:* ${form.quantity || "N/A"}%0A%0A*Details:* ${form.message}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const update = (key: string, value: string) => setForm({ ...form, [key]: value });

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]} />

      {/* Hero */}
      <section className="bg-navy-gradient text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24">
          <span className="eyebrow-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Get in Touch
          </span>
          <h1 className="display-lg mt-5">
            Let's Source
            <span className="block text-gold">Something Together</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
            Tell us what you need and we'll get back to you within 48 hours with a quote.
            Prefer to chat directly? WhatsApp us anytime.
          </p>
        </div>
      </section>

      {/* Contact methods + form */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left: contact methods */}
            <div className="lg:col-span-2">
              <h2 className="display-md text-navy">Contact Methods</h2>
              <p className="mt-3 text-muted">
                Reach out however you prefer. We're responsive on all channels.
              </p>

              <div className="mt-8 space-y-4">
                {/* WhatsApp — primary */}
                <a
                  href={whatsappLink("Hello SourcingBros! I'd like to discuss a sourcing request.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all hover:border-gold/40 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-navy">WhatsApp</h3>
                    <p className="text-sm text-muted">{site.phone}</p>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-gold">Fastest response</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all hover:border-gold/40 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <Mail className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-navy">Email</h3>
                    <p className="text-sm text-muted">{site.email}</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all hover:border-gold/40 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <Phone className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-navy">Phone</h3>
                    <p className="text-sm text-muted">{site.phone}</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <MapPin className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-navy">Location</h3>
                    <p className="text-sm text-muted">{site.location}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <Clock className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-navy">Business Hours</h3>
                    <p className="text-sm text-muted">Mon–Sat, 9:00–18:00 (GMT+8)</p>
                    <p className="text-xs text-muted">WhatsApp monitored outside hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-line bg-white p-8 sm:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15">
                      <Check className="h-8 w-8 text-gold-strong" strokeWidth={2} />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-black text-navy">Request Sent!</h3>
                    <p className="mt-2 max-w-sm text-muted">
                      We've opened WhatsApp with your details pre-filled. Hit send and we'll
                      respond within 48 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-ghost mt-6"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="display-md text-navy">Request a Quote</h2>
                    <p className="mt-2 text-sm text-muted">
                      Fill out the form below. We'll compile your request and send it via WhatsApp.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block font-sans text-[11px] font-bold uppercase tracking-wider text-navy/60">
                            Full Name *
                          </label>
                          <input
                            required
                            type="text"
                            value={form.name}
                            onChange={(e) => update("name", e.target.value)}
                            className="input-field"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block font-sans text-[11px] font-bold uppercase tracking-wider text-navy/60">
                            Email *
                          </label>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            className="input-field"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block font-sans text-[11px] font-bold uppercase tracking-wider text-navy/60">
                            Company
                          </label>
                          <input
                            type="text"
                            value={form.company}
                            onChange={(e) => update("company", e.target.value)}
                            className="input-field"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block font-sans text-[11px] font-bold uppercase tracking-wider text-navy/60">
                            Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            className="input-field"
                            placeholder="+233 55 123 4567"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block font-sans text-[11px] font-bold uppercase tracking-wider text-navy/60">
                            Product Type
                          </label>
                          <select
                            value={form.productType}
                            onChange={(e) => update("productType", e.target.value)}
                            className="input-field"
                          >
                            <option value="">Select category</option>
                            <option value="Vehicles">Vehicles</option>
                            <option value="Auto Parts & Body Kits">Auto Parts & Body Kits</option>
                            <option value="Car Wraps & PPF">Car Wraps & PPF</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Custom Manufacturing">Custom Manufacturing</option>
                            <option value="Industrial & Hardware">Industrial & Hardware</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="mb-2 block font-sans text-[11px] font-bold uppercase tracking-wider text-navy/60">
                            Estimated Quantity
                          </label>
                          <input
                            type="text"
                            value={form.quantity}
                            onChange={(e) => update("quantity", e.target.value)}
                            className="input-field"
                            placeholder="e.g. 50 units, 1 container, 5 rolls"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block font-sans text-[11px] font-bold uppercase tracking-wider text-navy/60">
                          Product Details *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          className="input-field resize-none"
                          placeholder="Describe what you need — product name, specifications, target price, destination country, timeline..."
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full justify-center">
                        Send Request via WhatsApp
                        <Send className="h-4 w-4" strokeWidth={2} />
                      </button>
                      <p className="text-center text-xs text-muted">
                        Clicking this button opens WhatsApp with your details pre-filled.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-line bg-white p-8 sm:p-12">
            <h2 className="display-md text-navy">Get a Free China Sourcing Quote from {SEO.organization.name}</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              <p>
                Ready to start sourcing from China? Contact SourcingBros today for a free, no-obligation sourcing quote. As your dedicated China sourcing agent, we'll connect you directly to verified factories and provide factory-direct pricing within 48 hours. Whether you need vehicles, auto parts, car wraps, electronics, or custom-manufactured products, our Guangzhou-based team handles every step of the China procurement process — from factory verification to quality inspection and global shipping.
              </p>
              <p>
                Getting a quote is simple. Fill out the form above with your product details, estimated quantity, and any specifications, and we'll compile your request and send it via WhatsApp for fast communication. You can also reach us directly by WhatsApp, email, or phone — whatever is most convenient. Our transparent pricing means you'll always see the factory price, our service fee, and shipping costs broken down separately, with no hidden markups or surprises.
              </p>
              <p>
                SourcingBros serves importers in 40+ countries across Africa, the Middle East, Southeast Asia, Europe, and the Americas. Whether you're a first-time importer learning how to import from China or an experienced buyer looking for a more reliable sourcing partner, we provide the factory access, quality control, and logistics support you need. Contact us today and discover why businesses worldwide trust SourcingBros as their China sourcing agent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
