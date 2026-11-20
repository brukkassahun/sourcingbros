import type { Metadata } from "next";
import { SEO } from "@/lib/seo";

export const metadata: Metadata = {
  title: SEO.pages.contact.title,
  description: SEO.pages.contact.description,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
