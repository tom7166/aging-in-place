export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  keywords: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone: string;
  displayPhone: string;
  businessName: string;
  tagline: string;
  address: {
    city: string;
    state: string;
    region: string;
  };
}

export interface SchemaData {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  telephone: string;
  address: {
    '@type': string;
    addressLocality: string;
    addressRegion: string;
  };
  geo: {
    '@type': string;
    latitude: string;
    longitude: string;
  };
  areaServed: string[];
  serviceType: string;
}