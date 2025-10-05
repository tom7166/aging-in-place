import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './same-day-junk-removal-schema.json';

const SameDayJunkRemoval: React.FC = () => {
  useEffect(() => {
    document.title = "Same Day Junk Removal | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Aaron Michael Services offers fast, reliable same-day junk removal for homes and businesses in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Efficient clean-outs, debris removal, and clutter solutions."
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
        title="Same Day Junk Removal | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga"
        description="Aaron Michael Services offers fast, reliable same-day junk removal for homes and businesses in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Efficient clean-outs, debris removal, and clutter solutions."
        keywords="same day junk removal Buffalo, fast junk removal, debris removal Kenmore, clutter removal service"
        canonicalUrl="https://aaronmichaelservices.com/services/same-day-junk-removal"
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-gray-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Same Day Junk Removal</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Same Day Junk Removal</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Fast, reliable junk removal for homes and businesses in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              Aaron Michael Services provides same-day junk removal to homeowners and business owners in Buffalo and surrounding areas. Our professional team quickly clears unwanted items, debris, and clutter, giving you a clean, organized space without delay.
            </p>
            <p>
              From furniture and appliances to construction debris and yard waste, we remove it all safely and responsibly. Our same-day service ensures you regain your space quickly, whether for a move, renovation, or general clean-out.
            </p>
          </section>

          {/* Services Offered */}
          <section className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Our Same Day Junk Removal Services</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Residential Junk Removal:</strong> Furniture, appliances, electronics, and household clutter.</li>
              <li><strong>Commercial Clean-Outs:</strong> Offices, warehouses, and retail spaces.</li>
              <li><strong>Construction Debris:</strong> Post-renovation materials, drywall, and scrap removal.</li>
              <li><strong>Yard Waste:</strong> Branches, leaves, and garden debris.</li>
              <li><strong>Estate & Foreclosure Clean-Outs:</strong> Complete removal for property prep or resale.</li>
            </ul>
          </section>

          {/* Process */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Our Same-Day Process</h2>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Contact & Estimate:</strong> Call or book online for a fast estimate.</li>
              <li><strong>Arrival:</strong> Our team arrives at your property promptly on the same day.</li>
              <li><strong>Assessment:</strong> We evaluate the items to be removed and ensure a safe process.</li>
              <li><strong>Removal:</strong> Efficiently remove and haul away all designated items.</li>
              <li><strong>Cleanup:</strong> We leave your space clean and free of debris, ready for use.</li>
            </ol>
          </section>

          {/* Service Area */}
          <section className="space-y-4 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Serving Buffalo and Surrounding Areas</h2>
            <p>
              Our same-day junk removal service is available in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Our team understands local regulations and ensures proper disposal at licensed facilities.
            </p>
          </section>

          {/* FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Same Day Junk Removal FAQs</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What items do you remove?</h3>
              <p>We remove furniture, appliances, electronics, yard waste, construction debris, and general clutter from homes and businesses.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Do you charge extra for same-day service?</h3>
              <p>Our pricing includes same-day service. Contact us for a personalized estimate based on volume and type of items.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Are you licensed and insured?</h3>
              <p>Aaron Michael Services is fully licensed and insured to provide safe and professional junk removal services throughout Western New York.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-green-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Book Your Same Day Junk Removal</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Reclaim your space today with fast, professional same-day junk removal from Aaron Michael Services.
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
                className="inline-block border border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
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

export default SameDayJunkRemoval;