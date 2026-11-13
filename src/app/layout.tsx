import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} flex min-h-dvh flex-col bg-cream font-sans text-navy antialiased`}>
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
