import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/lib/site";
import { SEO } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { OrganizationSchema, WebsiteSchema } from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F1B2D",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sourcingbros.com"),
  title: {
    default: SEO.pages.home.title,
    template: `%s · SourcingBros`,
  },
  description: SEO.pages.home.description,
  keywords: [...SEO.keywords.primary, ...SEO.keywords.services, ...SEO.keywords.longTail],
  authors: [{ name: "SourcingBros" }],
  creator: "SourcingBros",
  publisher: "SourcingBros",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SEO.organization.url,
    siteName: "SourcingBros",
    title: SEO.pages.home.title,
    description: SEO.pages.home.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SourcingBros — China Sourcing Agent for Factory Direct Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.pages.home.title,
    description: SEO.pages.home.description,
    images: ["/og-image.png"],
  },
  category: "business",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className={`${inter.variable} flex min-h-dvh flex-col bg-cream font-sans text-navy antialiased`}>
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <FloatingContact />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
