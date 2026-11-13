"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X, Mail, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 transition-all duration-500 sm:bottom-5 sm:right-5 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <a
        href={`mailto:${site.email}`}
        aria-label="Email us"
        className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-3 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-navy shadow-md transition-colors hover:border-gold hover:text-gold"
      >
        <Mail className="h-4 w-4" strokeWidth={1.5} />
        <span className="hidden sm:inline">Email</span>
      </a>
      <a
        href={whatsappLink(`Hello ${site.name}! I'd like to discuss a sourcing request.`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative flex items-center gap-2 rounded-full bg-navy px-4 py-3 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-lg transition-transform hover:scale-[1.03]"
      >
        <MessageCircle className="h-4 w-4 text-gold" strokeWidth={1.5} />
        <span className="hidden sm:inline">Chat with us</span>
        <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-cream" />
        </span>
      </a>
    </div>
  );
}
