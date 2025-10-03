import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import schemaData from './luxury-vinyl-plank-schema.json';

const LuxuryVinylPlank: React.FC = () => {
  useEffect(() => {
    document.title = "Luxury Vinyl Plank Flooring Installation & Maintenance | Buffalo, Kenmore, Tonawanda";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Aaron Michael Services provides professional Luxury Vinyl Plank (LVP) flooring installation, maintenance, and repairs in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Durable, waterproof flooring for modern homes."
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
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-gray-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Luxury Vinyl Plank Flooring</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Luxury Vinyl Plank Flooring Installation & Maintenance</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Modern, durable, and waterproof flooring solutions for homes in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              Aaron Michael Services specializes in Luxury Vinyl Plank (LVP) flooring installation, maintenance, and repair. LVP offers the beauty of hardwood or stone with superior durability and waterproof protection, making it ideal for high-traffic and moisture-prone areas like kitchens, bathrooms, and basements.
            </p>
            <p>
              Our team works with top-quality materials and modern installation techniques to ensure a flawless, long-lasting floor for your home. Serving Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga, we bring professional craftsmanship and attention to detail to every project.
            </p>
          </section>

          {/* Installation Types */}
          <section className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Types of Luxury Vinyl Plank Flooring</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Glue-Down LVP:</strong> Adheres directly to the subfloor for permanent, stable installation.</li>
              <li><strong>Click-Lock LVP:</strong> Floating floor installation that is fast and easy to repair or replace.</li>
              <li><strong>Loose Lay LVP:</strong> Flexible installation using weight and friction for temporary or semi-permanent setups.</li>
              <li><strong>Waterproof Core LVP:</strong> Ideal for bathrooms, laundry rooms, and basements to prevent water damage.</li>
            </ul>
          </section>

          {/* Maintenance & Durability */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Maintenance and Durability</h2>
            <p>
              LVP is low-maintenance but requires some care to maximize its lifespan:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Sweep or vacuum regularly to remove dirt and grit that can scratch surfaces.</li>
              <li>Wipe up spills immediately to avoid staining or warping.</li>
              <li>Use protective pads under furniture to prevent dents.</li>
              <li>Do not use harsh chemicals; gentle cleaners keep LVP looking new.</li>
              <li>Refinish or replace individual planks if damaged to maintain uniformity.</li>
            </ul>
            <p className="text-gray-600 italic mt-4">
              According to <a href="https://www.flooringamerica.com/" className="text-blue-600 hover:underline">Flooring America</a>, LVP is one of the most durable and versatile flooring options for modern homes.
            </p>
          </section>

          {/* Seamless Transitions */}
          <section className="space-y-6 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Seamless Transitions Between Flooring Types</h2>
            <p>
              Combining LVP with hardwood, tile, or carpet requires careful planning for smooth and visually appealing transitions. Aaron Michael Services ensures precise leveling, custom trim, and transition strips to create safe and attractive flooring junctions.
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Professional leveling of subfloors</li>
              <li>Custom trims for aesthetic continuity</li>
              <li>Durable transition strips to prevent trip hazards</li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Luxury Vinyl Plank FAQs</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Is LVP waterproof?</h3>
              <p>Most LVP products are waterproof, making them ideal for kitchens, bathrooms, and basements. Always confirm the product specifications.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Can I install LVP over existing flooring?</h3>
              <p>Yes, LVP can often be installed over tile, vinyl, or wood, provided the subfloor is clean and level.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How long does LVP last?</h3>
              <p>High-quality LVP can last 20–30 years with proper care and regular maintenance.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gray-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Schedule Your LVP Flooring Project</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Trust Aaron Michael Services for expert installation, maintenance, and repair of Luxury Vinyl Plank flooring in Buffalo, Kenmore, Tonawanda, and surrounding areas.
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

export default LuxuryVinylPlank;