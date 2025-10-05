import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './residential-junk-removal-schema.json';

const ResidentialJunkRemoval: React.FC = () => {
  useEffect(() => {
    document.title = "Residential Junk Removal | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Aaron Michael Services provides professional residential junk removal in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Safe, efficient, and eco-friendly disposal."
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
        title="Residential Junk Removal | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga"
        description="Aaron Michael Services provides professional residential junk removal in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Safe, efficient, and eco-friendly disposal."
        keywords="residential junk removal Buffalo, home junk removal, household junk removal Kenmore"
        canonicalUrl="https://aaronmichaelservices.com/services/residential-junk-removal"
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-green-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Residential Junk Removal</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Junk Removal Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Safe, reliable, and eco-friendly junk removal solutions for homeowners in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              At <strong>Aaron Michael Services</strong>, we provide professional residential junk removal to help homeowners reclaim space, reduce clutter, and maintain a safe living environment. Our experienced team handles everything from furniture, appliances, and electronics to yard debris and construction waste, ensuring efficient and responsible disposal.
            </p>
            <p>
              Whether you’re downsizing, cleaning out after a renovation, or managing estate cleanups, our Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga clients trust us to provide prompt, reliable, and eco-conscious service.
            </p>
          </section>

          {/* Types of Residential Junk */}
          <section className="space-y-6 bg-green-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Types of Residential Junk We Handle</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Furniture:</strong> Sofas, beds, tables, chairs, and cabinets.</li>
              <li><strong>Appliances:</strong> Refrigerators, washers, dryers, stoves, and microwaves.</li>
              <li><strong>Electronics:</strong> TVs, computers, printers, and other e-waste.</li>
              <li><strong>Yard Debris:</strong> Branches, leaves, grass clippings, and garden waste.</li>
              <li><strong>Construction Debris:</strong> Old flooring, drywall, lumber, and tiles.</li>
              <li><strong>Miscellaneous Household Items:</strong> Mattresses, toys, boxes, and cluttered storage.</li>
            </ul>
            <p>
              We follow strict sorting procedures to maximize recycling, donate usable items, and dispose of hazardous materials responsibly, in compliance with local regulations.
            </p>
          </section>

          {/* Junk Removal Process */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Our Residential Junk Removal Process</h2>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Initial Consultation:</strong> Schedule a free onsite or virtual assessment to evaluate the scope of work.</li>
              <li><strong>Transparent Quote:</strong> Receive a clear estimate based on volume, weight, and complexity, with no hidden fees.</li>
              <li><strong>Safe Removal:</strong> Our trained team removes items carefully to prevent property damage and ensure safety.</li>
              <li><strong>Sorting & Disposal:</strong> Items are sorted for donation, recycling, or responsible disposal at certified facilities.</li>
              <li><strong>Site Cleanup:</strong> After removal, we sweep and clean the area so your home is ready to use immediately.</li>
            </ol>
            <p className="text-gray-600 italic mt-2">
              Following these steps ensures a safe, efficient, and environmentally responsible removal experience.
            </p>
          </section>

          {/* Safety & Environmental Focus */}
          <section className="space-y-4 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Safety and Environmental Responsibility</h2>
            <p>
              Our team prioritizes safety, using proper lifting techniques and protective gear to prevent injury. We follow OSHA and local safety guidelines to ensure your home remains damage-free during removal.
            </p>
            <p>
              Environmental stewardship is key — we donate usable items to local charities such as <a href="https://www.buffalohumane.org/" className="text-green-600 hover:underline">Buffalo area nonprofits</a> and recycle materials at certified centers to reduce landfill waste. E-waste and hazardous materials are disposed of in compliance with <a href="https://www.epa.gov/recycle" className=\"text-green-600 hover:underline">EPA regulations</a>.
            </p>
          </section>

          {/* Local Coverage */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Serving Buffalo and Surrounding Areas</h2>
            <p>
              Aaron Michael Services provides residential junk removal across Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Our team is familiar with local disposal facilities and municipal regulations, ensuring full compliance with city ordinances while offering efficient service.
            </p>
            <p>
              Whether you need quick cleanouts, seasonal decluttering, or post-renovation debris removal, we provide dependable scheduling and responsive customer support.
            </p>
          </section>

          {/* FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Residential Junk Removal FAQs</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Do you take hazardous materials?</h3>
              <p>We do not take materials like asbestos or chemicals. We provide guidance on proper disposal for these items in compliance with EPA regulations.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How much does residential junk removal cost?</h3>
              <p>Pricing depends on volume, weight, and type of items. We provide transparent, upfront quotes with no hidden fees.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Can I schedule same-day removal?</h3>
              <p>In many cases, yes. Our availability varies based on location and demand. Contact us for scheduling in Buffalo, Kenmore, Tonawanda, North Tonawanda, or Cheektowaga.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-green-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Reclaim Your Space Today</h2>
            <p className="text-green-200 mb-6 max-w-2xl mx-auto">
              Schedule your residential junk removal with Aaron Michael Services. Our expert team ensures safe, eco-friendly disposal and full compliance with local regulations.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                to="/contact" 
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Get Free Quote
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

export default ResidentialJunkRemoval;