import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './hoarding-clean-up-schema.json';

const HoardingCleanUp: React.FC = () => {
  useEffect(() => {
    document.title = "Hoarding Clean Up Services | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Aaron Michael Services provides professional hoarding clean up services in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Safe, discreet, and thorough removal of clutter and debris."
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
        title="Hoarding Clean Up Services | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga"
        description="Aaron Michael Services provides professional hoarding clean up services in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Safe, discreet, and thorough removal of clutter and debris."
        keywords="hoarding clean up Buffalo, hoarding cleanup service, clutter removal, discreet cleaning Kenmore"
        canonicalUrl="https://aaronmichaelservices.com/services/hoarding-clean-up"
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-purple-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Hoarding Clean Up</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hoarding Clean Up Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Compassionate and professional hoarding clean up solutions for homes in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              At <strong>Aaron Michael Services</strong>, we provide discreet and professional hoarding clean up services. Our trained team handles sensitive situations with compassion, ensuring safe removal of clutter, debris, and unwanted items while restoring homes to a clean, functional state.
            </p>
            <p>
              We serve Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Every project is managed with respect, maintaining the dignity and privacy of homeowners while complying with local health and safety regulations.
            </p>
          </section>

          {/* Hoarding Clean Up Services */}
          <section className="space-y-6 bg-purple-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Our Hoarding Clean Up Services</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Full Home Clean Outs:</strong> Complete removal of clutter and debris from all rooms.</li>
              <li><strong>Selective Room Clean Ups:</strong> Focused cleaning for specific areas such as kitchens, bedrooms, or basements.</li>
              <li><strong>Sanitation & Decontamination:</strong> Safe cleaning and deodorizing of affected areas following CDC guidelines.</li>
              <li><strong>Donation & Recycling:</strong> Items are sorted for donation or recycling whenever possible to reduce waste.</li>
              <li><strong>Furniture & Large Item Removal:</strong> Safe and efficient handling of heavy furniture and appliances.</li>
            </ul>
          </section>

          {/* Process */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Our Hoarding Clean Up Process</h2>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Assessment & Consultation:</strong> We evaluate the property and discuss options with homeowners or property managers.</li>
              <li><strong>Customized Plan:</strong> Each clean up is tailored to the property’s needs and family preferences.</li>
              <li><strong>Safe Removal:</strong> Our team removes clutter safely while wearing protective equipment and using proper handling techniques.</li>
              <li><strong>Sanitation & Cleanup:</strong> All cleaned areas are sanitized, deodorized, and organized for safety and functionality.</li>
              <li><strong>Follow-Up:</strong> Optional follow-up visits ensure the property remains clutter-free and safe.</li>
            </ol>
          </section>

          {/* Local Coverage */}
          <section className="space-y-4 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Serving Buffalo and Western NY</h2>
            <p>
              Aaron Michael Services offers hoarding clean up services throughout Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Our knowledge of local regulations ensures safe disposal and compliance while restoring homes efficiently.
            </p>
          </section>

          {/* FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Hoarding Clean Up FAQs</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Is the process discreet?</h3>
              <p>Yes, our team works respectfully and privately to protect homeowner dignity during every clean up.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Do you sort items for donation or recycling?</h3>
              <p>Absolutely. Whenever possible, items are donated or recycled to reduce waste and benefit the community.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Which areas do you serve?</h3>
              <p>We serve Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga, following all local health and safety guidelines.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-purple-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Professional Hoarding Clean Up?</h2>
            <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
              Contact Aaron Michael Services today for safe, discreet, and thorough hoarding clean up in Buffalo and surrounding areas.
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

export default HoardingCleanUp;