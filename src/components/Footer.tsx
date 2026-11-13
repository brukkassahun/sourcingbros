import Link from "next/link";
import { navLinks, site, whatsappLink } from "@/lib/site";
import Logo from "./Logo";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
];

const serviceLinks = [
  { href: "/services#vehicle-sourcing", label: "Vehicle Sourcing" },
  { href: "/services#auto-parts", label: "Auto Parts" },
  { href: "/services#car-wraps", label: "Car Wraps & PPF" },
  { href: "/services#custom-manufacturing", label: "Custom Manufacturing" },
  { href: "/services#logistics", label: "Shipping & Logistics" },
  { href: "/services#quality-inspection", label: "Quality Inspection" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappLink(`Hello SourcingBros! I have a sourcing inquiry.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-gold-strong"
              >
                WhatsApp Us
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-white/80 transition-colors hover:bg-white hover:text-navy"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-white/40">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-white/40">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-white/40">
              Contact
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${site.email}`} className="text-sm text-white/70 transition-colors hover:text-gold">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-sm text-white/70 transition-colors hover:text-gold">
                  {site.phone}
                </a>
              </li>
              <li className="text-sm text-white/70">WeChat: {site.wechat}</li>
              <li className="text-sm text-white/70">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Direct Factory Sourcing · Quality Inspected · Global Shipping</p>
        </div>
      </div>
    </footer>
  );
}
