"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks, site, whatsappLink } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-cream/95 backdrop-blur-md shadow-sm"
            : "border-b border-transparent bg-cream"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6">
          <div className="shrink-0">
            <Logo variant="dark" />
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-10">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-sans text-[11px] font-bold uppercase tracking-[0.18em] transition-colors hover:text-gold ${
                  pathname === l.href ? "text-gold" : "text-navy"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink(`Hello SourcingBros! I'd like to discuss a sourcing request.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden sm:flex"
            >
              Get a Quote
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy transition-colors hover:border-navy lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 bottom-0 top-16 z-[90] bg-cream transition-all duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 p-6">
          {navLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`border-b border-line px-2 py-4 font-sans text-sm font-black uppercase tracking-[0.2em] transition-all ${
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              } ${pathname === l.href ? "text-gold" : "text-navy"}`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappLink(`Hello SourcingBros! I'd like to discuss a sourcing request.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 justify-center"
          >
            Get a Quote
          </a>
          <div className="mt-4 flex flex-col gap-2 px-2">
            <a href={`mailto:${site.email}`} className="text-sm text-muted">{site.email}</a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-sm text-muted">{site.phone}</a>
          </div>
        </nav>
      </div>
    </>
  );
}
