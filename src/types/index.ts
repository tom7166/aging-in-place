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

export interface SchemaData {
  "@context": string;
  "@type": string;
  [key: string]: any;
}