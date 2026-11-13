"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function LogoMark({ className = "h-8 w-8", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const badgeFill = variant === "dark" ? "#0F1B2D" : "#FAF9F6";
  const strokeColor = variant === "dark" ? "#FAF9F6" : "#0F1B2D";
  const gold = "#D4A84B";

  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Rounded square badge */}
      <rect x="2" y="2" width="44" height="44" rx="12" fill={badgeFill} />
      {/* Gold accent bar (left) */}
      <rect x="2" y="2" width="5" height="44" rx="2.5" fill={gold} />
      {/* S letterform — stylized sourcing arrow */}
      <path
        d="M33 17C33 14.2386 28.9706 12 24 12C19.0294 12 15 14.2386 15 17C15 19.7614 19.0294 22 24 22C28.9706 22 33 24.2386 33 27C33 29.7614 28.9706 32 24 32C19.0294 32 15 29.7614 15 27"
        stroke={strokeColor}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Arrow dot at top-right — "sourcing from" */}
      <circle cx="33" cy="14" r="2.5" fill={gold} />
      {/* Arrow dot at bottom-left — "to you" */}
      <circle cx="15" cy="34" r="2.5" fill={gold} />
    </svg>
  );
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const text = variant === "dark" ? "text-navy" : "text-white";
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`} aria-label="SourcingBros home">
      <LogoMark variant={variant} />
      <span className={`font-display text-base font-black uppercase tracking-[0.16em] ${text}`}>
        SOURCING<span className="font-medium text-gold">BROS</span>
      </span>
    </Link>
  );
}
