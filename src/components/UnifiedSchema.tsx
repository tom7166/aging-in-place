import { useEffect } from 'react';
import { FAQS } from '../utils/constants';

const UnifiedSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        // LocalBusiness + Founder
        {
          "@type": "LocalBusiness",
          "name": "Aaron Michael Services",
          "image": "https://aaronmichaelservices.com/images/logo.png",
          "telephone": "+17166236879",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "14 Mariemont Ave",
            "addressLocality": "Buffalo",
            "addressRegion": "NY",
            "postalCode": "14220",
            "addressCountry": "US"
          },
          "founder": {
            "@type": "Person",
            "name": "Tom Story",
            "description": "Founder with 22+ years construction experience and personal disability experience",
            "image": "https://aaronmichaelservices.com/images/tom-story.jpg"
          },
          "description": "Buffalo ADA contractor specializing in wheelchair ramps, accessible bathrooms, kitchen modifications, door widening, and aging-in-place upgrades.",
          "url": "https://aaronmichaelservices.com",
          "openingHours": [
            "Mo-Fr 07:00-18:00",
            "Sa 08:00-16:00"
          ],
          "priceRange": "$$$",
          "currenciesAccepted": "USD",
          "paymentAccepted": ["Cash", "Check", "Credit Card", "Insurance"],
          "areaServed": ["Buffalo", "Cheektowaga", "Amherst", "Tonawanda", "West Seneca", "WNY"],
          "serviceType": [
            "Wheelchair Ramp Installation",
            "Accessible Bathroom Renovation",
            "Kitchen Modifications",
            "Door Widening",
            "Aging in Place Upgrades",
            "Disability Home Modifications"
          ]
        },

        // FAQ Page
        {
          "@type": "FAQPage",
          "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default UnifiedSchema;
