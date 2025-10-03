import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import schemaData from './basement-clean-out-schema.json';

const BasementCleanOut: React.FC = () => {
  useEffect(() => {
    document.title = "Basement Clean Out Services | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Aaron Michael Services provides professional basement clean out services in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Efficient removal of debris, old furniture, and clutter."
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
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-green-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Basement Clean Out</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Basement Clean Out Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive basement clean out solutions for homes in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              At <strong>Aaron Michael Services</strong>, we specialize in safe and efficient basement clean outs. Whether clearing clutter, old furniture, or debris, our trained team ensures your basement is restored to a clean, organized space.
            </p>
            <p>
              We serve Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga, providing services that comply with local waste disposal regulations while maintaining your home’s safety and integrity.
            </p>
          </section>

          {/* Basement Clean Out Services */}
          <section className="space-y-6 bg-green-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Our Basement Clean Out Services</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Full Basement Clean Outs:</strong> Complete removal of debris, old furniture, and clutter.</li>
              <li><strong>Partial or Room-Specific Clean Outs:</strong> Targeted cleaning for specific basement areas.</li>
              <li><strong>Sanitation & Mold Prevention:</strong> Cleaning and disinfecting surfaces to prevent mold growth, following <a href="https://www.cdc.gov/mold/" className="text-green-700 hover:underline">CDC guidelines</a>.</li>
              <li><strong>Furniture & Large Item Removal:</strong> Safe removal of heavy items, including appliances, couches, and storage units.</li>
              <li><strong>Recycling & Donation:</strong> Items sorted for donation or recycling whenever possible to reduce waste.</li>
            </ul>
          </section>

          {/* Clean Out Process */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Our Basement Clean Out Process</h2>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Initial Assessment:</strong> We evaluate your basement, identify hazards, and discuss your needs.</li>
              <li><strong>Customized Plan:</strong> Every clean out is tailored to the property size, type of clutter, and homeowner preferences.</li>
              <li><strong>Safe Removal:</strong> Team members wear protective gear and use professional equipment to remove all debris safely.</li>
              <li><strong>Sanitization & Cleanup:</strong> Surfaces are cleaned, sanitized, and prepped for future use.</li>
              <li><strong>Follow-Up Support:</strong> Optional follow-up visits to ensure ongoing safety and organization.</li>
            </ol>
          </section>

          {/* Local Service Area */}
          <section className="space-y-4 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Serving Buffalo and Surrounding Areas</h2>
            <p>
              Aaron Michael Services provides basement clean out services across Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Our team is experienced in handling all property types and local regulations, ensuring compliant, efficient, and safe removal of unwanted items.
            </p>
          </section>

          {/* FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Basement Clean Out FAQs</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How long does a typical clean out take?</h3>
              <p>Time depends on basement size and volume of items. Most standard clean outs are completed in 1–3 days.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Do you provide disposal and recycling services?</h3>
              <p>Yes. We sort items for donation, recycling, and proper disposal according to local guidelines.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Are you insured and licensed?</h3>
              <p>Absolutely. Aaron Michael Services is fully licensed and insured, ensuring safe and reliable service.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-green-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready for a Basement Clean Out?</h2>
            <p className="text-green-200 mb-6 max-w-2xl mx-auto">
              Contact Aaron Michael Services today to schedule a professional basement clean out in Buffalo and surrounding areas.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                to="/contact" 
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Request a Quote
              </Link>
              <a 
                href="tel:+17165337108" 
                className="inline-block border border-green-200 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
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

export default BasementCleanOut;