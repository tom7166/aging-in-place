import React from "react";
import { Accessibility, Bath, Home, DoorOpen, Heart, Wrench } from "lucide-react";
import { CONTACT_INFO } from "../utils/constants";

const services = [
  {
    icon: <Accessibility size={36} className="text-green-500" />,
    title: "Wheelchair Ramp Installation",
    description: `
      Safe, strong, and ADA-compliant wheelchair ramps for Buffalo homes.
      We build wood, aluminum, and concrete ramps tailored to your property.
      Every ramp meets ADA slope standards, includes safety rails, and is built to last through WNY winters.
    `,
    bullets: [
      "Custom design for your property",
      "Portable and permanent options",
      "Aluminum, wood, or concrete builds",
      "Insurance & grant assistance available",
    ],
    keywords: "wheelchair ramps Buffalo, ADA ramp contractor, handicap ramps WNY",
  },
  {
    icon: <Bath size={36} className="text-green-500" />,
    title: "Accessible Bathroom Remodels",
    description: `
      Bathrooms are the #1 place for slips and falls. We remodel bathrooms to make them
      safe, stylish, and accessible for seniors and people with disabilities.
      Our work is informed by real family disability experience.
    `,
    bullets: [
      "Roll-in showers with grab bars",
      "Walk-in tubs for easy bathing",
      "Comfort-height toilets",
      "Slip-resistant flooring",
    ],
    keywords: "accessible bathroom Buffalo, walk-in tubs WNY, roll-in showers contractor",
  },
  {
    icon: <Home size={36} className="text-green-500" />,
    title: "Accessible Kitchen Modifications",
    description: `
      We make Buffalo kitchens functional for everyone by lowering counters,
      installing pull-out shelves, and upgrading appliances for easy reach.
      Cook, eat, and live independently without barriers.
    `,
    bullets: [
      "Lowered countertops & cabinets",
      "Pull-out pantry and shelving systems",
      "Side-hinged & drawer-style ovens",
      "Lighting & smart appliance upgrades",
    ],
    keywords: "accessible kitchen Buffalo, disability kitchen remodel, kitchen modifications WNY",
  },
  {
    icon: <DoorOpen size={36} className="text-green-500" />,
    title: "Door Widening & Hallway Adjustments",
    description: `
      Narrow doors and hallways are a daily obstacle for wheelchair users.
      We expand doorways to ADA standards (36+ inches) while protecting your home’s structure.
    `,
    bullets: [
      "Door widening up to ADA standards",
      "Pocket & sliding door installation",
      "Hallway adjustments for mobility devices",
      "Structural integrity guaranteed",
    ],
    keywords: "door widening Buffalo, accessible doors WNY, ADA contractor near me",
  },
  {
    icon: <Heart size={36} className="text-green-500" />,
    title: "Aging-in-Place Upgrades",
    description: `
      90% of Buffalo seniors want to age at home instead of moving into nursing facilities.
      We provide smart modifications that keep homes safe, comfortable, and independent.
    `,
    bullets: [
      "Grab bars & stair railings",
      "Non-slip flooring",
      "Better lighting throughout",
      "Bedroom & entryway accessibility",
    ],
    keywords: "aging in place Buffalo, senior home upgrades WNY, independent living contractor",
  },
  {
    icon: <Wrench size={36} className="text-green-500" />,
    title: "Specialized Disability Modifications",
    description: `
      Every disability is unique. We create custom modifications for mobility, vision, hearing,
      and cognitive accessibility — designed to support your family’s real needs.
    `,
    bullets: [
      "Visual contrast for low vision",
      "Voice & remote-activated home controls",
      "Smart home integration",
      "Custom carpentry & modifications",
    ],
    keywords: "disability modifications Buffalo, accessible homes WNY, ADA upgrades contractor",
  },
];

const ServicesSection: React.FC<{ highContrastMode: boolean }> = ({ highContrastMode }) => {
  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900" id="services">
      <div className="container mx-auto px-6 text-center">
        <h2
          className={`text-3xl md:text-5xl font-extrabold mb-8 ${
            highContrastMode ? "text-white" : "text-gray-900"
          }`}
        >
          Accessibility & ADA Services in Buffalo, NY
        </h2>
        <p
          className={`max-w-3xl mx-auto text-lg md:text-xl mb-16 ${
            highContrastMode ? "text-gray-200" : "text-gray-600"
          }`}
        >
          From wheelchair ramps to full home renovations, we help families across Western New York
          create homes that are safe, functional, and built for independence.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 ${
                highContrastMode
                  ? "bg-gray-800 border border-gray-700 text-white"
                  : "bg-white border border-gray-200 text-gray-800"
              }`}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="mb-6">{service.description}</p>
              <ul className="text-left list-disc list-inside space-y-2">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-sm md:text-base">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className={`inline-block px-10 py-5 rounded-2xl font-bold text-xl md:text-2xl shadow-xl transition-all duration-300 hover:scale-105 ${
              highContrastMode
                ? "bg-white text-black hover:bg-yellow-400 border-4 border-white"
                : "bg-green-600 text-white hover:bg-green-500 border-4 border-green-400"
            }`}
          >
            Call Now for a Free Consultation: {CONTACT_INFO.displayPhone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
