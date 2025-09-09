import type { ContactInfo, ServiceItem, FAQItem } from '../types';

export const CONTACT_INFO: ContactInfo = {
  phone: "7166236879",
  displayPhone: "716-623-6879",
  businessName: "Aaron Michael Services",
  tagline: "Buffalo's Trusted ADA Contractor",
  address: {
    city: "Buffalo",
    state: "NY",
    region: "Western New York"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    icon: "accessibility",
    title: "Wheelchair Ramps",
    description: "Custom-built wheelchair ramps for Buffalo homes. Aluminum, wood, and concrete options available. ADA-compliant slopes and safety features.",
    keywords: ["wheelchair ramps Buffalo", "ADA ramps WNY", "accessibility ramps"]
  },
  {
    icon: "bath",
    title: "Accessible Bathrooms",
    description: "Complete bathroom remodels for accessibility. Walk-in tubs, roll-in showers, grab bars, and comfort-height toilets throughout Buffalo area.",
    keywords: ["accessible bathroom Buffalo", "walk-in tub installation", "ADA bathroom remodel"]
  },
  {
    icon: "home",
    title: "Kitchen Modifications",
    description: "Lower countertops, accessible cabinets, and easy-reach appliances. Making Buffalo kitchens work for everyone.",
    keywords: ["accessible kitchen Buffalo", "kitchen modifications WNY", "disability kitchen remodel"]
  },
  {
    icon: "door-open",
    title: "Door Widening",
    description: "Expand doorways to 36+ inches for wheelchair access. Expert carpentry maintaining your Buffalo home's structural integrity.",
    keywords: ["door widening Buffalo", "wheelchair accessible doors", "ADA door installation"]
  },
  {
    icon: "heart",
    title: "Aging in Place",
    description: "Comprehensive home modifications helping Buffalo seniors stay independent. Handrails, lighting, flooring, and safety upgrades.",
    keywords: ["aging in place Buffalo", "senior home modifications", "independent living upgrades"]
  },
  {
    icon: "wrench",
    title: "Disability Modifications",
    description: "Specialized modifications for all disabilities. Vision, mobility, and cognitive accessibility solutions for Buffalo families.",
    keywords: ["disability home modifications", "accessible home upgrades Buffalo", "ADA compliance"]
  }
];

export const SERVICE_AREAS = [
  "Buffalo", "Cheektowaga", "Amherst", "Tonawanda", "West Seneca", 
  "Lackawanna", "Kenmore", "Depew", "Lancaster", "Williamsville",
  "East Amherst", "Clarence", "Orchard Park", "Hamburg"
];

export const FAQS: FAQItem[] = [
  {
    question: "Who builds wheelchair ramps in Buffalo?",
    answer: "Aaron Michael Services is Buffalo's trusted wheelchair ramp contractor with 22+ years of experience building ADA-compliant ramps throughout WNY."
  },
  {
    question: "What's the best ADA contractor near me in Buffalo?",
    answer: "Aaron Michael Services specializes exclusively in ADA modifications and accessibility upgrades. We're a family-owned Buffalo business with personal disability experience."
  },
  {
    question: "How much do aging in place upgrades cost in Buffalo?",
    answer: "Aging in place modifications in Buffalo typically range from $500-$15,000 depending on scope. We provide free consultations and work with insurance when possible."
  },
  {
    question: "Who does accessible bathroom remodels in Western New York?",
    answer: "Aaron Michael Services specializes in accessible bathroom remodels throughout WNY, including walk-in tubs, roll-in showers, and complete ADA compliance."
  },
  {
    question: "What disability home modifications are available in Buffalo?",
    answer: "We provide comprehensive disability modifications including ramps, bathroom accessibility, door widening, kitchen modifications, and aging-in-place upgrades throughout Buffalo and WNY."
  }
];