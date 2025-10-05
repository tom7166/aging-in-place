import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './foreclosure-clean-out-schema.json';

const ForeclosureCleanOut: React.FC = () => {
  useEffect(() => {
    document.title = "Foreclosure Clean Out Services | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Aaron Michael Services provides professional foreclosure clean out services for homes and properties in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Safe, thorough, and efficient removal of debris, furniture, and personal property."
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
        title="Foreclosure Clean Out Services | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga"
        description="Aaron Michael Services provides professional foreclosure clean out services for homes and properties in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Safe, thorough, and efficient removal of debris, furniture, and personal property."
        keywords="foreclosure clean out Buffalo, foreclosure property clean out, bank foreclosure cleanout service"
        canonicalUrl="https://aaronmichaelservices.com/services/foreclosure-clean-out"
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-800 to-red-600 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-red-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Foreclosure Clean Out Services</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Foreclosure Clean Out Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive property clean outs for foreclosed homes in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              At <strong>Aaron Michael Services</strong>, we specialize in foreclosure clean outs, providing banks, realtors, and property managers with safe, thorough, and efficient removal of debris, furniture, and personal property. We understand the unique challenges of foreclosed properties and ensure compliance with local regulations.
            </p>
            <p>
              Our services cover Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Each clean out is handled with discretion, professionalism, and attention to detail.
            </p>
          </section>

          {/* Types of Foreclosure Clean Outs */}
          <section className="space-y-6 bg-red-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Types of Foreclosure Clean Outs</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Full Property Clean Outs:</strong> Complete removal of all furniture, personal items, trash, and debris.</li>
              <li><strong>Partial Clean Outs:</strong> Selective removal for occupied properties or estate sales.</li>
              <li><strong>Appliance & Electronics Disposal:</strong> Safe and eco-friendly removal in compliance with local regulations.</li>
              <li><strong>Hazardous Material Handling:</strong> Guidance and referral for disposal of chemicals, paint, or asbestos per EPA standards.</li>
              <li><strong>Yard & Outdoor Clean Outs:</strong> Removal of yard debris, overgrowth, and outdoor furniture to restore property appearance.</li>
            </ul>
          </section>

          {/* Foreclosure Clean Out Process */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Our Foreclosure Clean Out Process</h2>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Initial Assessment:</strong> We inspect the property and provide a detailed quote.</li>
              <li><strong>Scheduling:</strong> Flexible scheduling ensures timely completion for banks or realtors.</li>
              <li><strong>Removal & Sorting:</strong> Items are sorted for donation, recycling, or proper disposal.</li>
              <li><strong>Safety Compliance:</strong> Protective gear and proper procedures ensure safe handling.</li>
              <li><strong>Final Inspection:</strong> We ensure all items are removed and property is clean, secure, and ready for sale or occupancy.</li>
            </ol>
          </section>

          {/* Local Coverage */}
          <section className="space-y-4 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Serving Buffalo and Surrounding Areas</h2>
            <p>
              Aaron Michael Services provides foreclosure clean out services across Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Local knowledge ensures compliance with municipal ordinances and efficiency for bank-managed or realtor-managed properties.
            </p>
          </section>

          {/* FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Foreclosure Clean Out FAQs</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Do you provide same-day clean outs?</h3>
              <p>Availability depends on property location and scheduling. Contact us for the fastest service options in Buffalo, Kenmore, Tonawanda, North Tonawanda, or Cheektowaga.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Can you handle hazardous materials?</h3>
              <p>We do not remove hazardous chemicals ourselves, but provide guidance for compliant disposal according to EPA and local regulations.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What areas do you serve?</h3>
              <p>Our services cover Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga, with full adherence to local ordinances.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-red-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Restore Your Foreclosed Property?</h2>
            <p className="text-red-200 mb-6 max-w-2xl mx-auto">
              Contact Aaron Michael Services today for professional foreclosure clean out services. We ensure safe, thorough, and efficient removal of debris and personal property.
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
                className="inline-block border border-red-200 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
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

export default ForeclosureCleanOut;