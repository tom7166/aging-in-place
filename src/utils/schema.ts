import type { SchemaData, FAQItem } from '../types';

export const localBusinessSchema: SchemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Aaron Michael Services",
  "description": "Buffalo ADA home upgrades and accessibility contractor",
  "telephone": "+17166236879",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Buffalo",
    "addressRegion": "NY"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "42.8864",
    "longitude": "-78.8784"
  },
  "areaServed": ["Buffalo NY", "Western New York", "Cheektowaga", "Amherst", "Tonawanda", "West Seneca"],
  "serviceType": "ADA Compliance Contractor"
};

export const generateFAQSchema = (faqs: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const injectSchema = (schema: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};