import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import schemaData from './hardwood-flooring-installers-near-me-schema.json';

const HardwoodFlooringInstallersNearMe: React.FC = () => {
  useEffect(() => {
    document.title = "Hardwood Flooring Installers Near Me | Buffalo, Kenmore, Tonawanda | Aaron Michael Services";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Aaron Michael Services offers expert hardwood flooring installation near you in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Certified local hardwood installers ready for your home."
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
      <section className="bg-gradient-to-r from-brown-900 to-brown-700 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-gray-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Hardwood Flooring Installers Near Me</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Local Hardwood Flooring Installers Near You</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional hardwood flooring installation services for Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga homes.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              At <strong>Aaron Michael Services</strong>, we specialize in hardwood flooring installation near you. Our local team ensures top-quality craftsmanship, precise measurements, and seamless finishes in homes throughout Buffalo and Western New York. Whether you need traditional oak, maple, or engineered hardwood, we deliver durable, elegant results.
            </p>
            <p>
              Choosing a local installer guarantees familiarity with building codes, rapid response, and expertise with Buffalo-area home layouts. Our certified hardwood flooring installers can help you select the best wood species, finishes, and installation methods for your lifestyle and home environment.
            </p>
          </section>

          {/* Services Overview */}
          <section className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Our Hardwood Flooring Installation Services</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Solid Hardwood Installation:</strong> Traditional planks for timeless beauty and long-lasting durability.</li>
              <li><strong>Engineered Hardwood:</strong> Perfect for areas prone to humidity, providing stability and elegance.</li>
              <li><strong>Refinishing & Repair:</strong> Restore worn floors to like-new condition without full replacement.</li>
              <li><strong>Custom Finishes:</strong> Staining, sanding, and finishing for a tailored look to match your home décor.</li>
            </ul>
          </section>

          {/* Benefits of Local Installers */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Why Hire Local Hardwood Flooring Installers?</h2>
            <p>
              Local installers bring unmatched knowledge of Buffalo-area homes and regional building codes. Benefits of hiring our team include:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Rapid scheduling and same-day estimates</li>
              <li>Understanding of local subfloor conditions and seasonal moisture challenges</li>
              <li>Expert guidance on hardwood types, finishes, and maintenance</li>
              <li>Efficient, clean installations with minimal disruption to your home</li>
            </ul>
          </section>

          {/* Installation Process */}
          <section className="space-y-6 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Our Hardwood Installation Process</h2>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Consultation:</strong> Discuss your goals, flooring options, and budget.</li>
              <li><strong>Measurement & Assessment:</strong> Verify subfloor condition and plan the installation layout.</li>
              <li><strong>Preparation:</strong> Remove old flooring, level subfloors, and acclimate wood planks.</li>
              <li><strong>Installation:</strong> Lay planks with precision, including transitions to other flooring types.</li>
              <li><strong>Finishing:</strong> Sand, stain, seal, and clean up for a polished look.</li>
            </ol>
          </section>

          {/* FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Hardwood Flooring FAQs</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Do you serve all areas near Buffalo?</h3>
              <p>Yes, we serve Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga for all hardwood flooring projects.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Can you install hardwood over existing floors?</h3>
              <p>In most cases, yes. We inspect your subfloor to ensure proper adhesion and longevity.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How long does installation take?</h3>
              <p>Time varies by project size, but our team works efficiently while maintaining top-quality workmanship.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gray-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Local Hardwood Flooring Experts Today</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Aaron Michael Services provides trusted hardwood flooring installation near you in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                to="/contact" 
                className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Request a Quote
              </Link>
              <a 
                href="tel:+17165337108" 
                className="inline-block border border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
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

export default HardwoodFlooringInstallersNearMe;