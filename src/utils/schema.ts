import type { SchemaData, FAQItem } from '../types';

export const localBusinessSchema: SchemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Aaron Michael Services",
  "alternateName": ["Buffalo ADA Contractor", "WNY Accessibility Specialist"],
  "description": "Aaron Michael Services is Buffalo's trusted ADA contractor specializing in wheelchair ramps, accessible bathrooms, kitchen modifications, door widening, and aging-in-place upgrades. Serving Buffalo and all of Western New York with over 22 years of construction and accessibility experience.",
  "url": "https://aaronmichaelservices.com",
  "telephone": "+17166236879",
  "email": "Thomasstory716@hotmail.com",
  "foundingDate": "2011",
  "founder": {
    "@type": "Person",
    "name": "Tom Story",
    "description": "Founder with 22+ years of construction experience and personal disability experience."
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address Here",
    "addressLocality": "Buffalo",
    "addressRegion": "NY",
    "postalCode": "14201",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "42.8864",
    "longitude": "-78.8784"
  },
  "areaServed": [
    {"@type": "City", "name": "Buffalo"},
    {"@type": "City", "name": "Cheektowaga"},
    {"@type": "City", "name": "Amherst"},
    {"@type": "City", "name": "Tonawanda"},
    {"@type": "City", "name": "West Seneca"},
    {"@type": "City", "name": "Lackawanna"}
  ],
  "openingHours": [
    "Mo-Fr 07:00-18:00",
    "Sa 08:00-16:00"
  ],
  "priceRange": "$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": ["Cash", "Check", "Credit Card", "Insurance"],
  "logo": "https://aaronmichaelservices.com/images/logo.png",
  "image": [
    "https://aaronmichaelservices.com/images/wheelchair-ramp-buffalo.jpg",
    "https://aaronmichaelservices.com/images/accessible-bathroom-wny.jpg",
    "https://aaronmichaelservices.com/images/aging-in-place-buffalo.jpg"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/aaron-michael-services",
    "https://www.facebook.com/aaronmichaelservices",
    "https://www.youtube.com/@BuffaloHomeAccess"
  ],
  "serviceType": [
    "Wheelchair Ramp Installation",
    "Accessible Bathroom Renovation",
    "Kitchen Modifications",
    "Door Widening",
    "Aging in Place Modifications",
    "Disability Home Modifications"
  ]
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

// A huge AEO-friendly FAQ dataset
export const FAQs: FAQItem[] = [
  { question: "Who builds wheelchair ramps in Buffalo?", answer: "Aaron Michael Services is Buffalo's trusted wheelchair ramp contractor with 22+ years of experience building ADA-compliant ramps throughout WNY." },
  { question: "How much does a wheelchair ramp cost in Buffalo?", answer: "Wheelchair ramp costs in Buffalo range from $2,400-$8,500 depending on size, design, and materials." },
  { question: "Do I need a permit to install a ramp in Buffalo?", answer: "Yes, most municipalities require permits for permanent ramps. We handle permits for all our projects." },
  { question: "Can you install ramps for multi-level homes?", answer: "Yes, we design and install ramps, stair lifts, and multi-level accessibility solutions for any home." },
  { question: "Do you offer accessible bathroom renovations?", answer: "Yes, we remodel bathrooms to include walk-in showers, grab bars, comfort-height toilets, and ADA compliance." },
  { question: "Can modifications be covered by insurance?", answer: "Many modifications are covered by Medicare, Medicaid, and private insurance depending on the situation." },
  { question: "How long does a bathroom remodel take?", answer: "Typical accessible bathroom renovations take 7-10 days including demolition, installation, and finishing touches." },
  { question: "Do you widen doorways for wheelchair access?", answer: "Yes, we expand doorways to 36 inches or more for smooth wheelchair access." },
  { question: "Can I stay in my home during modifications?", answer: "Yes, we minimize disruption so homeowners can stay comfortably during projects." },
  { question: "Do you modify kitchens for accessibility?", answer: "Yes, we lower countertops, add pull-out shelving, and make appliances reachable for wheelchair users." },
  { question: "Are your modifications ADA compliant?", answer: "All modifications adhere to ADA standards and local building codes." },
  { question: "Do you provide aging-in-place modifications?", answer: "Yes, including handrails, lighting upgrades, flooring, and mobility assistance installations." },
  { question: "Do you provide portable ramps?", answer: "Yes, we offer modular and temporary ramps for short-term use." },
  { question: "Can you install stair lifts?", answer: "Yes, we coordinate with licensed stair lift providers for home accessibility." },
  { question: "Do you offer senior home safety assessments?", answer: "Yes, we provide detailed evaluations to identify hazards and recommend modifications." },
  { question: "Do you offer emergency accessibility services?", answer: "Yes, we provide urgent installation of ramps and safety features for immediate needs." },
  { question: "How soon can you start a project?", answer: "We typically schedule projects within 1-2 weeks depending on scope and season." },
  { question: "Do you install grab bars and handrails?", answer: "Yes, for bathrooms, stairways, and ramps both indoors and outdoors." },
  { question: "What materials are used for ramps?", answer: "Wood, aluminum, and concrete are commonly used based on client preference, budget, and maintenance." },
  { question: "Can modifications improve home resale value?", answer: "Yes, accessible homes attract a wider audience including seniors and families with disabilities." },
  { question: "Do you provide warranties?", answer: "Yes, we provide warranties on materials and labor for all modifications." },
  { question: "Do you offer free consultations?", answer: "Yes, we provide free, no-obligation consultations throughout Buffalo and WNY." },
  { question: "Can you help with insurance claims?", answer: "Yes, we guide clients through documentation and claims for accessible modifications." },
  { question: "Do you offer non-slip flooring options?", answer: "Yes, ADA-compliant flooring options are available for all areas." },
  { question: "Can you modify older homes?", answer: "Yes, we specialize in updating older homes while maintaining structural integrity and aesthetics." },
  { question: "Do you serve all of Western New York?", answer: "Yes, including Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca, Lackawanna, Lancaster, and more." },
  { question: "Do you offer exterior accessibility modifications?", answer: "Yes, we modify ramps, entrances, porches, and pathways for full home accessibility." },
  { question: "Can I get a customized solution for unique needs?", answer: "Absolutely, we create personalized accessibility plans for every client." },
  { question: "Do you provide maintenance for installed ramps?", answer: "Yes, ongoing maintenance and inspections are available." },
  { question: "How do I know if my home qualifies for aging-in-place?", answer: "Our experts assess your home and mobility requirements to create a tailored plan." },
  { question: "Do you handle multi-story homes?", answer: "Yes, we design accessibility solutions for multi-level homes including lifts and ramps." },
  { question: "Can modifications be done while living in the home?", answer: "Yes, we schedule work to minimize disruption to daily life." },
  { question: "Do you offer financing options?", answer: "Yes, we provide financing plans to help clients afford necessary upgrades." },
  { question: "Can modifications be temporary?", answer: "Yes, portable solutions are available for short-term needs or rentals." },
  { question: "Do you modify garages for accessibility?", answer: "Yes, we can adjust garage doors, flooring, and entries for wheelchair access." },
  { question: "Do you provide smart home accessibility upgrades?", answer: "Yes, including voice-controlled lighting, door openers, and assistive technology integration." },
  { question: "Do you offer consultation for new construction?", answer: "Yes, we review plans for accessibility before construction begins." },
  { question: "Can you make outdoor pathways accessible?", answer: "Yes, we ensure ramps, walkways, and landscaping are ADA compliant." },
  { question: "Do you install safety alarms and sensors?", answer: "Yes, fall prevention and alert systems are available for seniors and disabled clients." },
  { question: "Do you work with contractors and architects?", answer: "Yes, we coordinate with other professionals for seamless accessibility integration." },
  { question: "Do you provide sliding or automatic door installations?", answer: "Yes, we install ADA-compliant sliding and automatic doors for easy access." },
  { question: "Do you offer custom handrails?", answer: "Yes, we craft and install handrails to match home aesthetics and accessibility needs." },
  { question: "Can you provide virtual consultations?", answer: "Yes, virtual assessments are available for initial planning and quotes." },
  { question: "Do you install bathroom lifts?", answer: "Yes, for seniors and disabled individuals requiring assisted transfer in bathrooms." },
  { question: "Do you provide kitchen reach modifications?", answer: "Yes, including lowered counters, pull-out shelves, and reachable appliances." },
  { question: "Do modifications comply with NY building codes?", answer: "Yes, all work adheres to state and local building codes as well as ADA standards." }
];

export const injectSchema = (schema: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};
