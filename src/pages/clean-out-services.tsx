import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import schemaData from './clean-out-services-schema.json';

const CleanOutServices: React.FC = () => {
  useEffect(() => {
    document.title = "Clean Out Services | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Aaron Michael Services offers professional clean out services for homes, garages, attics, basements, and estates in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Safe, thorough, and eco-friendly."
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
      <section className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-purple-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Clean Out Services</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Clean Out Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive home and estate clean outs in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              <strong>Aaron Michael Services</strong> specializes in thorough clean out services for residential properties. From cluttered basements and attics to full estate clean outs, our team ensures safe, efficient, and environmentally responsible removal of unwanted items. 
            </p>
            <p>
              Serving Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga, we are trusted by homeowners, realtors, and property managers to handle clean outs quickly while maintaining respect for your property.
            </p>
          </section>

          {/* Types of Clean Outs */}
          <section className="space-y-6 bg-purple-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Types of Clean Out Services</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Basement and Attic Clean Outs:</strong> Removal of stored items, old furniture, and cluttered materials.</li>
              <li><strong>Garage Clean Outs:</strong> Organizing and disposing of tools, storage boxes, and equipment safely.</li>
              <li><strong>Estate Clean Outs:</strong> Complete removal of household items for estate sales, downsizing, or property transitions.</li>
              <li><strong>Hoarding Clean Outs:</strong> Sensitive and compassionate clean outs with safety and sanitation as a priority.</li>
              <li><strong>Appliance and Furniture Removal:</strong> Eco-friendly disposal and recycling whenever possible.</li>
            </ul>
          </section>

          {/* Clean Out Process */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Our Clean Out Process</h2>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Free Consultation:</strong> We assess your clean out needs and provide an accurate estimate.</li>
              <li><strong>Scheduling:</strong> Flexible scheduling tailored to your availability.</li>
              <li><strong>Removal & Sorting:</strong> Items are sorted for donation, recycling, or proper disposal.</li>
              <li><strong>Safety & Sanitation:</strong> Our team ensures a clean, safe environment during and after removal.</li>
              <li><strong>Final Walkthrough:</strong> We ensure all areas are cleared, tidy, and ready for use.</li>
            </ol>
          </section>

          {/* Safety & Compliance */}
          <section className="space-y-4 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Safety and Compliance</h2>
            <p>
              Our clean out services follow all OSHA safety guidelines and local municipal regulations. Protective gear, proper lifting techniques, and safe transportation practices ensure your property and our team remain secure throughout the process.
            </p>
            <p>
              We donate usable items to local organizations like <a href="https://www.buffalohumane.org/" className="text-purple-600 hover:underline">Buffalo area charities</a> and recycle materials responsibly to minimize landfill contributions. Hazardous waste is disposed of in compliance with <a href="https://www.epa.gov/recycle" className="text-purple-600 hover:underline">EPA regulations</a>.
            </p>
          </section>

          {/* Local Coverage */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Serving Buffalo and Surrounding Areas</h2>
            <p>
              Aaron Michael Services provides clean out services across Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Our local knowledge ensures compliance with city ordinances and efficient service delivery.
            </p>
          </section>

          {/* FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Clean Out Services FAQs</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Do you handle estate clean outs?</h3>
              <p>Yes, we provide complete estate clean outs including sorting, removal, donation, and disposal in compliance with local regulations.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Can you remove hazardous materials?</h3>
              <p>We do not handle hazardous chemicals or asbestos, but we guide clients to proper disposal methods following EPA guidelines.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How quickly can you schedule a clean out?</h3>
              <p>Scheduling is flexible; same-week service is often available depending on location in Buffalo, Kenmore, Tonawanda, North Tonawanda, or Cheektowaga.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-purple-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Get Your Property Cleaned Out Today</h2>
            <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
              Contact Aaron Michael Services for professional clean out services. We handle every step safely, efficiently, and responsibly.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                to="/contact" 
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Request a Quote
              </Link>
              <a 
                href="tel:+17165337108" 
                className="inline-block border border-purple-200 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
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

export default CleanOutServices;