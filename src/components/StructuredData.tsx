import { SEO } from "@/lib/seo";
import { services, faqs } from "@/lib/site";

// Organization schema — tells Google this is a business entity
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SEO.organization.name,
    legalName: SEO.organization.legalName,
    url: SEO.organization.url,
    logo: SEO.organization.logo,
    description: SEO.organization.description,
    slogan: SEO.organization.slogan,
    foundingDate: SEO.organization.foundingDate,
    founder: SEO.organization.founders.map((f) => ({
      "@type": "Person",
      name: f.name,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: SEO.organization.address.addressLocality,
      addressRegion: SEO.organization.address.addressRegion,
      addressCountry: SEO.organization.address.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SEO.organization.contactPoint.telephone,
      contactType: SEO.organization.contactPoint.contactType,
      areaServed: SEO.organization.contactPoint.areaServed,
      availableLanguage: SEO.organization.contactPoint.availableLanguage,
    },
    sameAs: SEO.organization.sameAs,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// WebSite schema — enables sitelinks search box
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO.organization.name,
    url: SEO.organization.url,
    description: SEO.organization.description,
    publisher: {
      "@type": "Organization",
      name: SEO.organization.name,
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// Service schema — for individual service pages
export function ServiceListSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: SEO.organization.name,
          url: SEO.organization.url,
        },
        areaServed: "Global",
        serviceType: service.title,
        url: `${SEO.organization.url}/services#${service.id}`,
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// FAQ schema — makes FAQs eligible for rich results
export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// Breadcrumb schema — shows navigation path in search results
export function BreadcrumbSchema({ items }: { items: { name: string; path: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SEO.organization.url}${item.path}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// All schemas combined for the homepage
export function AllSchemas() {
  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <ServiceListSchema />
      <FAQSchema />
    </>
  );
}
