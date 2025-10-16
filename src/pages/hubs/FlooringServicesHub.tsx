import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Hammer, Sparkles, RefreshCw } from 'lucide-react';
import SEOHelmet from '../../components/SEOHelmet';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';

const FlooringServicesHub: React.FC = () => {
  const services = [
    {
      icon: <Layers className="w-12 h-12 text-orange-600" />,
      title: "Hardwood Flooring",
      description: "Beautiful hardwood floor installation and restoration",
      link: "/services/hardwood-floors",
      relatedLinks: [
        { label: "Hardwood Floor Refinishing", url: "/services/hardwood-floor-refinishing" },
        { label: "Buffalo Hardwood Flooring", url: "/services/hardwood-flooring-Buffalo-ny" }
      ]
    },
    {
      icon: <Sparkles className="w-12 h-12 text-orange-600" />,
      title: "Luxury Vinyl Plank",
      description: "Durable, waterproof luxury vinyl flooring solutions",
      link: "/services/luxury-vinyl-plank"
    },
    {
      icon: <Layers className="w-12 h-12 text-orange-600" />,
      title: "Laminate Flooring",
      description: "Affordable, stylish laminate floor installation",
      link: "/services/laminate-flooring",
      relatedLinks: [
        { label: "Flooring Transitions", url: "/services/flooring-transitions" }
      ]
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-orange-600" />,
      title: "Floor Remodeling",
      description: "Complete floor renovation and replacement services",
      link: "/services/flooring/floor-remodeling"
    },
    {
      icon: <Hammer className="w-12 h-12 text-orange-600" />,
      title: "Slip-Resistant Flooring",
      description: "Safe, non-slip flooring for accessibility needs",
      link: "/services/slip-resistant-flooring"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-orange-600" />,
      title: "Modern Flooring",
      description: "Contemporary flooring designs and materials",
      link: "/services/modern-flooring"
    }
  ];

  const cityServices = [
    { city: "Buffalo", url: "/services/flooring/buffalo-flooring" },
    { city: "Kenmore", url: "/services/hardwood-flooring/kenmore-hardwood-flooring-installation" },
    { city: "Amherst", url: "/services/hardwood-flooring/amherst-hardwood-floor-sanding" },
    { city: "Tonawanda", url: "/services/hardwood-flooring/tonawanda-hardwood-floor-repair" },
    { city: "West Seneca", url: "/services/hardwood-flooring/west-seneca-hardwood-flooring-contractor" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet
        title="Flooring Services Buffalo NY | Hardwood, Vinyl, Laminate Floor Installation"
        description="Professional flooring installation in Buffalo NY. Hardwood floors, luxury vinyl plank, laminate flooring. Licensed contractors. Free estimates."
        keywords="flooring Buffalo NY, hardwood floors Buffalo, vinyl flooring WNY, laminate flooring Buffalo"
        canonicalUrl="https://aaronmichaelservices.com/services/flooring"
      />

      <NavBar />

      <Breadcrumbs
        items={[
          { label: "Services", path: "/services/flooring" },
          { label: "Flooring Services", path: "/services/flooring" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Flooring Services in Buffalo, NY
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From classic hardwood to modern luxury vinyl, we install beautiful, durable floors
            throughout Western New York. Expert craftsmanship with every project.
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
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
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
                        className="text-sm text-orange-600 hover:text-orange-800 transition-colors"
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

        <div className="bg-orange-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Flooring Services by City
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {cityServices.map((city, index) => (
              <Link
                key={index}
                to={city.url}
                className="bg-white hover:bg-orange-100 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                {city.city}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready for New Floors?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Get a free estimate on your flooring project. We serve all of Western New York.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FlooringServicesHub;
