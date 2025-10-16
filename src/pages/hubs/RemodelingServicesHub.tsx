import React from 'react';
import { Link } from 'react-router-dom';
import { Bath, ChefHat, Home as HomeIcon, Layers, Hammer } from 'lucide-react';
import SEOHelmet from '../../components/SEOHelmet';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';

const RemodelingServicesHub: React.FC = () => {
  const services = [
    {
      icon: <Bath className="w-12 h-12 text-green-600" />,
      title: "Bathroom Remodeling",
      description: "Complete bathroom renovations with modern design and functionality",
      link: "/services/bathroom-remodeling",
      relatedLinks: [
        { label: "Accessible Bathrooms", url: "/services/accessible-bathrooms" },
        { label: "Bathroom Repairs", url: "/services/bathroom-repairs" }
      ]
    },
    {
      icon: <ChefHat className="w-12 h-12 text-green-600" />,
      title: "Kitchen Remodeling",
      description: "Transform your kitchen with custom cabinetry and modern appliances",
      link: "/services/kitchen-remodeling",
      relatedLinks: [
        { label: "Kitchen Modifications", url: "/services/kitchen-modifications" },
        { label: "Kitchen Repairs", url: "/services/kitchen-repairs" }
      ]
    },
    {
      icon: <HomeIcon className="w-12 h-12 text-green-600" />,
      title: "Home Additions",
      description: "Expand your living space with quality room additions",
      link: "/services/home-additions"
    },
    {
      icon: <Layers className="w-12 h-12 text-green-600" />,
      title: "Basement Finishing",
      description: "Turn your basement into beautiful, functional living space",
      link: "/services/basement-finishing",
      relatedLinks: [
        { label: "Basement Repairs", url: "/services/basement-repairs" },
        { label: "Basement Clean Out", url: "/services/basement-clean-out" }
      ]
    },
    {
      icon: <Hammer className="w-12 h-12 text-green-600" />,
      title: "Flooring Installation",
      description: "Expert installation of all flooring types",
      link: "/services/flooring-installation",
      relatedLinks: [
        { label: "Hardwood Floors", url: "/services/hardwood-floors" },
        { label: "Laminate Flooring", url: "/services/laminate-flooring" }
      ]
    }
  ];

  const cityPages = [
    { city: "Buffalo", url: "/remodeling-contractor-buffalo-ny" },
    { city: "Tonawanda", url: "/remodeling-contractor-tonawanda-ny" },
    { city: "Kenmore", url: "/remodeling-contractor-kenmore-ny" },
    { city: "North Tonawanda", url: "/remodeling-contractor-north-tonawanda-ny" },
    { city: "Amherst", url: "/remodeling-contractor-amherst-ny" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet
        title="Home Remodeling Services Buffalo NY | Kitchen, Bathroom, Basement Renovations"
        description="Professional home remodeling in Buffalo NY. Kitchen remodeling, bathroom renovations, basement finishing. Licensed contractors. Free estimates."
        keywords="home remodeling Buffalo, kitchen remodeling Buffalo, bathroom renovation WNY, basement finishing Buffalo"
        canonicalUrl="https://aaronmichaelservices.com/services/remodeling"
      />

      <NavBar />

      <Breadcrumbs
        items={[
          { label: "Services", path: "/services/remodeling" },
          { label: "Remodeling Services", path: "/services/remodeling" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Home Remodeling Services in Buffalo, NY
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your home with our comprehensive remodeling services.
            From kitchens and bathrooms to complete home renovations, we bring your vision to life.
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
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
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
                        className="text-sm text-green-600 hover:text-green-800 transition-colors"
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

        <div className="bg-green-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Remodeling Contractor Services by City
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {cityPages.map((city, index) => (
              <Link
                key={index}
                to={city.url}
                className="bg-white hover:bg-green-100 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                {city.city}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Remodeling Project?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Free consultations and estimates. Licensed and insured contractors serving all of Western New York.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RemodelingServicesHub;
