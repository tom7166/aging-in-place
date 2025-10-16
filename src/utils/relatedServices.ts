import { Accessibility, Bath, ChefHat, DoorOpen, Home as HomeIcon, Hammer, Layers, Sparkles, Wrench } from 'lucide-react';
import { RelatedService } from '../components/RelatedServices';

export const accessibilityServices: RelatedService[] = [
  {
    title: "Wheelchair Ramps",
    description: "Custom wheelchair ramps for safe home access",
    link: "/services/wheelchair-ramps"
  },
  {
    title: "Accessible Bathrooms",
    description: "Walk-in tubs, roll-in showers, and safety features",
    link: "/services/accessible-bathrooms"
  },
  {
    title: "Door Widening",
    description: "Expand doorways for wheelchair accessibility",
    link: "/services/door-widening"
  },
  {
    title: "Kitchen Modifications",
    description: "Accessible kitchen design and modifications",
    link: "/services/kitchen-modifications"
  },
  {
    title: "Aging in Place",
    description: "Complete home modifications for senior independence",
    link: "/services/aging-in-place"
  },
  {
    title: "Handrails",
    description: "Safety handrails and grab bar installation",
    link: "/services/handrails"
  }
];

export const flooringServices: RelatedService[] = [
  {
    title: "Hardwood Floors",
    description: "Classic hardwood floor installation and restoration",
    link: "/services/hardwood-floors"
  },
  {
    title: "Luxury Vinyl Plank",
    description: "Durable, waterproof luxury vinyl flooring",
    link: "/services/luxury-vinyl-plank"
  },
  {
    title: "Laminate Flooring",
    description: "Affordable, stylish laminate flooring",
    link: "/services/laminate-flooring"
  },
  {
    title: "Hardwood Floor Refinishing",
    description: "Restore beauty to existing hardwood floors",
    link: "/services/hardwood-floor-refinishing"
  },
  {
    title: "Slip-Resistant Flooring",
    description: "Safe flooring for accessibility needs",
    link: "/services/slip-resistant-flooring"
  },
  {
    title: "Floor Remodeling",
    description: "Complete floor renovation services",
    link: "/services/flooring/floor-remodeling"
  }
];

export const remodelingServices: RelatedService[] = [
  {
    title: "Bathroom Remodeling",
    description: "Complete bathroom renovations and upgrades",
    link: "/services/bathroom-remodeling"
  },
  {
    title: "Kitchen Remodeling",
    description: "Custom kitchen design and remodeling",
    link: "/services/kitchen-remodeling"
  },
  {
    title: "Basement Finishing",
    description: "Transform basements into functional living space",
    link: "/services/basement-finishing"
  },
  {
    title: "Home Additions",
    description: "Expand your home with quality additions",
    link: "/services/home-additions"
  },
  {
    title: "Flooring Installation",
    description: "Professional flooring installation services",
    link: "/services/flooring-installation"
  }
];

export const repairServices: RelatedService[] = [
  {
    title: "Basement Repairs",
    description: "Foundation and basement repair services",
    link: "/services/basement-repairs"
  },
  {
    title: "Bathroom Repairs",
    description: "Quick bathroom fixture and plumbing repairs",
    link: "/services/bathroom-repairs"
  },
  {
    title: "Kitchen Repairs",
    description: "Kitchen cabinet and appliance repairs",
    link: "/services/kitchen-repairs"
  },
  {
    title: "Carpentry Repairs",
    description: "Professional carpentry and woodwork repairs",
    link: "/services/carpentry-repairs"
  },
  {
    title: "Door Repairs",
    description: "Interior and exterior door repair services",
    link: "/services/interior-door-repair"
  },
  {
    title: "Stair Repair",
    description: "Staircase repair and restoration",
    link: "/services/stair-repair"
  }
];

export const cleanoutServices: RelatedService[] = [
  {
    title: "Estate Cleanouts",
    description: "Professional estate and home cleanout services",
    link: "/services/estate-cleanouts"
  },
  {
    title: "Property Cleanouts",
    description: "Complete property cleanout services",
    link: "/services/property-cleanouts"
  },
  {
    title: "Basement Clean Out",
    description: "Remove unwanted items from basements",
    link: "/services/basement-clean-out"
  },
  {
    title: "Garage Clean Out",
    description: "Garage cleanout and organization",
    link: "/services/garage-clean-out"
  },
  {
    title: "Hoarding Clean Up",
    description: "Compassionate hoarding situation cleanup",
    link: "/services/hoarding-clean-up"
  },
  {
    title: "Foreclosure Clean Out",
    description: "Fast foreclosure property cleanout",
    link: "/services/foreclosure-clean-out"
  }
];

export const getRelatedServicesByCategory = (category: string): RelatedService[] => {
  const categoryMap: { [key: string]: RelatedService[] } = {
    accessibility: accessibilityServices,
    flooring: flooringServices,
    remodeling: remodelingServices,
    repairs: repairServices,
    cleanouts: cleanoutServices
  };

  return categoryMap[category] || [];
};

export const getRelatedServices = (currentService: string, category: string, limit: number = 3): RelatedService[] => {
  const services = getRelatedServicesByCategory(category);
  return services.filter(s => s.link !== currentService).slice(0, limit);
};
