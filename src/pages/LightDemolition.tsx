import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import schemaData from './light-demolition-schema.json';

const LightDemolition: React.FC = () => {
  useEffect(() => {
    document.title = "Light Demolition Services | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Aaron Michael Services provides professional light demolition services in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Safe removal of walls, fixtures, and flooring for remodeling projects."
      );
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-800 to-red-600 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-gray-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Light Demolition</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Light Demolition Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Safe and efficient removal of walls, fixtures, and flooring for residential remodeling projects in Buffalo and surrounding areas.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              Aaron Michael Services specializes in light demolition for homeowners and small remodeling projects in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Our team safely removes walls, cabinets, flooring, and fixtures, preparing your space for renovation without damaging surrounding areas.
            </p>
            <p>
              Whether you're upgrading a bathroom, remodeling a kitchen, or preparing a room for an accessible modification, our light demolition services are precise, efficient, and fully compliant with local building codes.
            </p>
          </section>

          {/* Services Offered */}
          <section className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Our Light Demolition Services</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Interior Wall Removal:</strong> Safe removal of drywall, plaster, or paneling without structural compromise.</li>
              <li><strong>Cabinet & Fixture Removal:</strong> Efficient removal of old kitchen and bathroom cabinets or built-ins.</li>
              <li><strong>Flooring Removal:</strong> Hardwood, laminate, tile, or carpet removal for renovation preparation.</li>
              <li><strong>Small Structural Adjustments:</strong> Non-load-bearing walls and minor structural modifications.</li>
              <li><strong>Debris Removal:</strong> Cleanup and proper disposal of demolition waste, following local regulations.</li>
            </ul>
          </section>

          {/* Light Demolition Process */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Our Light Demolition Process</h2>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Project Assessment:</strong> Evaluate the project scope and identify non-load-bearing walls and fixtures.</li>
              <li><strong>Customized Plan:</strong> Each demolition project is tailored for safety and efficiency.</li>
              <li><strong>Safety Measures:</strong> Protective equipment, dust barriers, and debris containment to ensure safe removal.</li>
              <li><strong>Removal & Cleanup:</strong> Demolition team removes targeted elements and clears debris from the property.</li>
              <li><strong>Final Inspection:</strong> Verify space is ready for next renovation steps and ensure no hazards remain.</li>
            </ol>
          </section>

          {/* Local Service Area */}
          <section className="space-y-4 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Serving Buffalo and Surrounding Areas</h2>
            <p>
              We provide light demolition services across Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Our familiarity with local codes ensures a compliant, safe demolition for every residential project.
            </p>
          </section>

          {/* FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Light Demolition FAQs</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Do you remove load-bearing walls?</h3>
              <p>We only handle non-load-bearing walls and minor structural modifications. For load-bearing walls, consult a structural engineer.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How is debris disposed of?</h3>
              <p>All debris is removed from your property and disposed of according to local waste and recycling regulations.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Are your services insured?</h3>
              <p>Aaron Michael Services is fully licensed and insured, ensuring safe and professional demolition services.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-red-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Light Demolition Today</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Contact Aaron Michael Services for professional light demolition in Buffalo and surrounding areas.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                to="/contact" 
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Request a Quote
              </Link>
              <a 
                href="tel:+17165337108" 
                className="inline-block border border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Call Now: (716) 533-7108
              </a>
            </div>
          </section>

        </div>
      </main>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default LightDemolition;