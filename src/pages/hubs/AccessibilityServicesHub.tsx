import React from 'react';
import { Link } from 'react-router-dom';
import { Accessibility, Home as HomeIcon, Bath, ChefHat, DoorOpen, Hammer } from 'lucide-react';
import SEOHelmet from '../../components/SEOHelmet';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';

const AccessibilityServicesHub: React.FC = () => {
  const services = [
    {
      icon: <Accessibility className="w-12 h-12 text-blue-600" />,
      title: "Wheelchair Ramps",
      description: "Custom wheelchair ramps designed for safe, compliant home access",
      link: "/services/wheelchair-ramps",
      relatedLinks: [
        { label: "Types of Ramps", url: "/services/types-of-ramps" },
        { label: "ADA Compliance", url: "/services/ada-compliance-details-and-local-regulations" }
      ]
    },
    {
      icon: <Bath className="w-12 h-12 text-blue-600" />,
      title: "Accessible Bathrooms",
      description: "Walk-in tubs, roll-in showers, and grab bars for safe bathing",
      link: "/services/accessible-bathrooms",
      relatedLinks: [
        { label: "Bathroom Remodeling", url: "/services/bathroom-remodeling" }
      ]
    },
    {
      icon: <ChefHat className="w-12 h-12 text-blue-600" />,
      title: "Kitchen Modifications",
      description: "Lowered countertops, accessible cabinets, and universal design",
      link: "/services/kitchen-modifications",
      relatedLinks: [
        { label: "Kitchen Remodeling", url: "/services/kitchen-remodeling" }
      ]
    },
    {
      icon: <DoorOpen className="w-12 h-12 text-blue-600" />,
      title: "Door Widening",
      description: "Expand doorways for wheelchair and walker accessibility",
      link: "/services/door-widening"
    },
    {
      icon: <HomeIcon className="w-12 h-12 text-blue-600" />,
      title: "Aging in Place",
      description: "Complete home modifications for senior independence",
      link: "/services/aging-in-place"
    },
    {
      icon: <Hammer className="w-12 h-12 text-blue-600" />,
      title: "Disability Modifications",
      description: "Custom solutions for all mobility and accessibility needs",
      link: "/services/disability-modifications"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet
        title="Accessibility Services Buffalo NY | Wheelchair Ramps, Accessible Bathrooms & More"
        description="Complete accessibility modification services in Buffalo NY. Wheelchair ramps, accessible bathrooms, aging in place solutions. Licensed ADA contractor. Free consultations."
        keywords="accessibility services Buffalo, ADA modifications WNY, wheelchair ramps Buffalo, accessible bathrooms Buffalo"
        canonicalUrl="https://aaronmichaelservices.com/services/accessibility"
      />

      <NavBar />

      <Breadcrumbs
        items={[
          { label: "Services", path: "/services/accessibility" },
          { label: "Accessibility Services", path: "/services/accessibility" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Accessibility Services in Buffalo, NY
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional accessibility modifications that create independence and safety.
            From wheelchair ramps to complete home renovations, we build accessible solutions for Western New York families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center mb-4">
                {service.description}
              </p>
              <div className="text-center mb-4">
                <Link
                  to={service.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </Link>
              </div>
              {service.relatedLinks && (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Related:</p>
                  <div className="flex flex-col space-y-1">
                    {service.relatedLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.url}
                        className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        → {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Improve Your Home's Accessibility?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Free consultations available. We serve Buffalo, Tonawanda, Kenmore, Amherst, and all of Western New York.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AccessibilityServicesHub;
