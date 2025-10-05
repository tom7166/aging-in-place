import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './modern-flooring-schema.json';

const ModernFlooring: React.FC = () => {
  useEffect(() => {
    document.title = "Modern Flooring Solutions | Buffalo, Kenmore, Tonawanda | Aaron Michael Services";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Aaron Michael Services offers modern flooring solutions including hardwood, LVP, tile, and eco-friendly options in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Expert installation, maintenance, and repairs."
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
        title="Modern Flooring Solutions | Buffalo, Kenmore, Tonawanda | Aaron Michael Services"
        description="Aaron Michael Services offers modern flooring solutions including hardwood, LVP, tile, and eco-friendly options in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Expert installation, maintenance, and repairs."
        keywords="modern flooring Buffalo, flooring installation, hardwood floors, LVP flooring, tile installation"
        canonicalUrl="https://aaronmichaelservices.com/services/modern-flooring"
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-gray-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Modern Flooring</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Modern Flooring Solutions for Every Home</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert installation and maintenance of hardwood, luxury vinyl plank, tile, and eco-friendly flooring across Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              Aaron Michael Services specializes in modern flooring installations that combine style, durability, and functionality. From sleek hardwood to waterproof luxury vinyl plank (LVP), our flooring solutions are designed to meet the needs of contemporary homes in Buffalo and Western New York.
            </p>
            <p>
              We provide complete services including consultation, installation, maintenance, and repairs. Our focus is on high-quality craftsmanship and long-lasting results that enhance your home's beauty and value.
            </p>
          </section>

          {/* Types of Modern Flooring */}
          <section className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Types of Modern Flooring</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Hardwood Flooring:</strong> Timeless and elegant, suitable for living rooms, bedrooms, and hallways.</li>
              <li><strong>Luxury Vinyl Plank (LVP):</strong> Waterproof, durable, and perfect for kitchens, bathrooms, and basements.</li>
              <li><strong>Tile Flooring:</strong> Ceramic, porcelain, and natural stone options for high-traffic and wet areas.</li>
              <li><strong>Eco-Friendly Flooring:</strong> Bamboo, cork, and reclaimed wood for sustainable and modern design.</li>
            </ul>
          </section>

          {/* Installation & Maintenance */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Professional Installation & Maintenance</h2>
            <p>
              Proper installation is critical for flooring longevity. Aaron Michael Services ensures precise subfloor preparation, leveling, and acclimation of materials. Our team follows manufacturer guidelines and industry best practices for every flooring type.
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Subfloor inspection and preparation</li>
              <li>Moisture barrier installation when needed</li>
              <li>Precision cutting and placement for a seamless finish</li>
              <li>Routine maintenance tips for cleaning, refinishing, and care</li>
            </ul>
            <p className="text-gray-600 italic mt-4">
              According to <a href="https://www.flooringamerica.com/" className="text-blue-600 hover:underline">Flooring America</a>, proper installation and regular maintenance significantly extend flooring lifespan and reduce repair costs.
            </p>
          </section>

          {/* Seamless Transitions */}
          <section className="space-y-6 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Seamless Transitions Between Flooring Types</h2>
            <p>
              Combining multiple flooring types requires careful planning to maintain visual appeal and safety. We provide professional transition solutions including:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Custom transition strips between LVP, hardwood, tile, and carpet</li>
              <li>Subfloor leveling for smooth, flush edges</li>
              <li>Trim and molding customization to match design aesthetics</li>
            </ul>
          </section>

          {/* Flooring FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Modern Flooring FAQs</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Which flooring type is best for high-traffic areas?</h3>
              <p>LVP and tile are highly durable and low-maintenance, making them ideal for kitchens, entryways, and hallways.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Can I combine hardwood and LVP in one room?</h3>
              <p>Yes, with proper transition strips and subfloor preparation, multiple flooring types can coexist seamlessly.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How often should I maintain my flooring?</h3>
              <p>Regular sweeping or vacuuming and cleaning with manufacturer-approved products will keep floors looking new. Hardwood may require periodic refinishing every 5–10 years.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gray-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Upgrade Your Home with Modern Flooring</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Aaron Michael Services delivers expert modern flooring installation, maintenance, and repair throughout Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
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

export default ModernFlooring;