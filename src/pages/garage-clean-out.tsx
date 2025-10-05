import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './garage-clean-out-schema.json';

const GarageCleanOut: React.FC = () => {
  useEffect(() => {
    document.title = "Garage Clean Out Services | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Aaron Michael Services provides professional garage clean out services in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Efficient removal of clutter, debris, and unwanted items."
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
      <SEOHelmet
        title="Garage Clean Out Services | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga"
        description="Aaron Michael Services provides professional garage clean out services in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Efficient removal of clutter, debris, and unwanted items."
        keywords="garage clean out Buffalo, garage cleanout service, garage debris removal Kenmore"
        canonicalUrl="https://aaronmichaelservices.com/services/garage-clean-out"
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-gray-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Garage Clean Out</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garage Clean Out Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional garage clean out solutions for homes in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              Aaron Michael Services provides complete garage clean out services, removing clutter, debris, and unwanted items safely and efficiently. Our team is trained to handle everything from old tools to large furniture, restoring your garage to a clean, functional space.
            </p>
            <p>
              We proudly serve Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga, always following local disposal regulations and best practices to ensure a safe, compliant, and eco-friendly clean out.
            </p>
          </section>

          {/* Garage Clean Out Services */}
          <section className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Our Garage Clean Out Services</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Full Garage Clean Outs:</strong> Complete removal of clutter, tools, and old furniture.</li>
              <li><strong>Partial or Area-Specific Clean Outs:</strong> Focused cleaning for corners, storage areas, or sections of your garage.</li>
              <li><strong>Hazardous Material Handling:</strong> Proper disposal of paints, chemicals, and oils according to EPA guidelines (<a href="https://www.epa.gov/hw/household-hazardous-waste-hhw" className="text-gray-800 hover:underline">EPA HHW guidelines</a>).</li>
              <li><strong>Recycling & Donation:</strong> Items sorted for donation or recycling wherever possible.</li>
              <li><strong>Sanitation & Cleanup:</strong> Sweeping, scrubbing, and deodorizing to leave your garage ready for use.</li>
            </ul>
          </section>

          {/* Clean Out Process */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Our Garage Clean Out Process</h2>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Initial Assessment:</strong> Evaluate garage size, clutter type, and homeowner goals.</li>
              <li><strong>Customized Plan:</strong> Every clean out is tailored to your needs and property type.</li>
              <li><strong>Safe Removal:</strong> Our team uses protective gear and professional equipment to remove debris safely.</li>
              <li><strong>Sanitization & Cleanup:</strong> We clean surfaces, remove odors, and prepare the garage for safe use.</li>
              <li><strong>Follow-Up Support:</strong> Optional visits to ensure your garage remains organized and clutter-free.</li>
            </ol>
          </section>

          {/* Local Service Area */}
          <section className="space-y-4 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Serving Buffalo and Surrounding Areas</h2>
            <p>
              Our team provides garage clean out services across Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. We are familiar with local regulations and disposal requirements, ensuring safe, legal, and efficient removal of unwanted items.
            </p>
          </section>

          {/* FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Garage Clean Out FAQs</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How long does a garage clean out take?</h3>
              <p>Depending on garage size and volume, most clean outs are completed in 1–2 days.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Do you handle hazardous materials?</h3>
              <p>Yes, we follow EPA HHW guidelines to safely remove paints, chemicals, oils, and other hazardous materials.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Are your services insured?</h3>
              <p>Aaron Michael Services is fully licensed and insured, guaranteeing safe and professional service.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gray-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready for a Garage Clean Out?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact Aaron Michael Services today to schedule a professional garage clean out in Buffalo and surrounding areas.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                to="/contact" 
                className="inline-block bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                Request a Quote
              </Link>
              <a 
                href="tel:+17165337108" 
                className="inline-block border border-gray-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
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

export default GarageCleanOut;