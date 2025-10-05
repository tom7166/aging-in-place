import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './maintenance-durability-schema.json';

const MaintenanceDurability: React.FC = () => {
  useEffect(() => {
    document.title = "Maintenance and Durability | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Expert 1500-word guide on maintenance and durability of ramps, flooring, and home modifications. Aaron Michael Services ensures long-lasting solutions in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga."
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
        title="Maintenance and Durability | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga"
        description="Expert 1500-word guide on maintenance and durability of ramps, flooring, and home modifications. Aaron Michael Services ensures long-lasting solutions in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga."
        keywords="maintenance durability Buffalo, long-lasting home modifications, durable ramps, flooring durability"
        canonicalUrl="https://aaronmichaelservices.com/services/maintenance-durability"
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-blue-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Maintenance and Durability</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Maintenance and Durability for Home Modifications</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Keep your ramps, flooring, and accessibility modifications safe, functional, and long-lasting with expert guidance from Aaron Michael Services.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              At <strong>Aaron Michael Services</strong>, we know that a home modification’s true value lies in its longevity. Our Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga clients rely on us to ensure that ramps, flooring, and other accessibility features remain durable, safe, and functional for years to come.
            </p>
            <p>
              Environmental stressors, seasonal weather, and daily wear can all compromise the integrity of home modifications. Without proper maintenance, even professionally installed solutions may fail prematurely, creating safety hazards and costly repairs.
            </p>
          </section>

          {/* Ramp Maintenance */}
          <section className="space-y-6 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Ramp Maintenance for Longevity</h2>
            <p>
              Maintaining ramps is critical for safety and performance. Key steps include:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Monthly inspections:</strong> Check screws, bolts, and supports for looseness or damage.</li>
              <li><strong>Wood ramps:</strong> Apply weather-resistant sealants annually, inspect for rot or cracks, especially after harsh Buffalo winters.</li>
              <li><strong>Aluminum ramps:</strong> Clean surfaces with mild soap, lubricate moving parts, and inspect joints to prevent corrosion.</li>
              <li><strong>Portable/modular ramps:</strong> Store indoors when possible and inspect folding mechanisms regularly.</li>
            </ul>
            <p className="text-gray-600 italic mt-4">
              Experts from the <a href="https://www.cdc.gov/falls/" className="text-blue-600 hover:underline">CDC</a> note that poorly maintained ramps are a leading cause of residential falls.
            </p>
          </section>

          {/* Flooring Maintenance */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Flooring Maintenance for Safety and Durability</h2>
            <p>
              Flooring endures daily use and environmental factors. Proper care ensures safety, accessibility, and longevity:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Wood flooring:</strong> Clean spills immediately, refinish every 3–5 years, and use non-slip rugs where needed.</li>
              <li><strong>Vinyl/LVT:</strong> Sweep regularly, clean with mild detergent, inspect edges, and avoid abrasive tools.</li>
              <li><strong>Low-pile carpet:</strong> Vacuum weekly, address stains immediately, and replace compressed padding.</li>
              <li><strong>Tile/ceramic:</strong> Inspect grout, seal annually, and use protective pads under heavy furniture.</li>
            </ul>
            <p>
              Seamless transitions between flooring types prevent tripping hazards and meet ADA accessibility guidelines. For detailed guidance, see our <Link to="/services/flooring-transitions" className="text-blue-600 hover:underline">flooring transitions page</Link>.
            </p>
          </section>

          {/* Seasonal Maintenance */}
          <section className="space-y-4 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Seasonal Maintenance Tips</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Winter:</strong> Remove snow, apply anti-slip coatings, check ramps and flooring for ice hazards.</li>
              <li><strong>Spring:</strong> Inspect for water damage, clean floors, and check fasteners.</li>
              <li><strong>Summer:</strong> Polish wood and laminate, check expansion joints, prevent corrosion on aluminum ramps.</li>
              <li><strong>Fall:</strong> Remove leaves and debris, seal cracks, and prep surfaces for winter moisture and freezing temperatures.</li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">FAQs on Maintenance and Durability</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How often should I inspect my ramps and flooring?</h3>
              <p>Monthly inspections and after severe weather events are recommended.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Can I perform maintenance myself?</h3>
              <p>Basic cleaning and tightening fasteners are safe for homeowners. For sealants, structural repairs, or ADA compliance checks, consult a professional.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What is the expected lifespan of ramps and flooring with proper maintenance?</h3>
              <p>Wood ramps: 10–15 years, Aluminum ramps: 20+ years, Flooring: 10–30 years depending on material. Proper care significantly extends life.</p>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Keep Your Home Safe and Accessible</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Schedule a professional maintenance check to ensure ramps, flooring, and accessibility modifications remain safe and durable. Our certified team serves Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                to="/contact" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Free Consultation
              </Link>
              <a 
                href="tel:+17165337108" 
                className="inline-block border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
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

export default MaintenanceDurability;