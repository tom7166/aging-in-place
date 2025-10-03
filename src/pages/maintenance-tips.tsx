import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import schemaData from './maintenance-tips-schema.json';

const MaintenanceTips: React.FC = () => {
  useEffect(() => {
    document.title = "Maintenance Tips | Buffalo, Kenmore, Tonawanda, Cheektowaga";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Comprehensive maintenance tips for accessibility ramps, home modifications, and safety features. Serving Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga."
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
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-blue-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Maintenance Tips</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Maintenance Tips for Accessibility Ramps</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Keep your ramps and accessibility modifications safe and functional year-round
            in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Introduction */}
          <section>
            <p>
              At <strong>Aaron Michael Services</strong>, we don't just install ramps and accessibility solutions —
              we ensure they remain safe, functional, and compliant for years to come. Proper maintenance prolongs
              the lifespan of your ramps and other modifications while reducing accident risk for seniors,
              people with disabilities, and caregivers in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
            </p>
            <p>
              This guide covers maintenance best practices for <strong>wood, aluminum, concrete, modular, and portable ramps</strong>,
              along with general home accessibility features. Following these tips can save thousands in repairs and
              prevent dangerous slips or falls.
            </p>
          </section>

          {/* General Maintenance Guidelines */}
          <section>
            <h2 className="text-3xl font-bold mb-6">General Maintenance Guidelines</h2>
            <p>
              Regardless of ramp material, all accessibility features benefit from routine inspection.
              Experts at the <a href="https://www.cdc.gov/falls/" className="text-blue-600 hover:text-blue-800 font-semibold">CDC</a> recommend monthly checks for hazards such as:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Loose handrails or screws</li>
              <li>Warped or cracked surfaces</li>
              <li>Accumulated debris or leaves</li>
              <li>Signs of rot, rust, or corrosion</li>
            </ul>
            <p>
              Proper cleaning and lubrication of moving parts, such as hinges on foldable ramps, ensures smooth operation.
              Buffalo winters require additional attention to snow and ice accumulation to prevent slips.
            </p>
          </section>

          {/* Wood Ramp */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Wood Ramp Maintenance</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>Sealing:</strong> Apply a weather-resistant sealant or stain at least once a year to prevent water damage.</li>
              <li><strong>Check for rot:</strong> Inspect the ramp structure annually, especially after winter snow and ice exposure.</li>
              <li><strong>Non-slip treatment:</strong> Add grit tape, rubber mats, or anti-slip paint to prevent slips.</li>
              <li><strong>Fasteners:</strong> Tighten screws, bolts, and nails to maintain stability.</li>
            </ul>
            <p className="italic text-gray-600">
              Nurses and physical therapists often note that improperly maintained wood ramps are one of the leading causes of residential falls.
            </p>
          </section>

          {/* Aluminum Ramp */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Aluminum Ramp Maintenance</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>Inspect joints:</strong> Ensure modular connections are secure and bolts remain tight.</li>
              <li><strong>Cleaning:</strong> Wash with mild soap and water to prevent dirt buildup and surface corrosion.</li>
              <li><strong>Snow & ice:</strong> Clear promptly and use non-metal shovels to avoid scratching surfaces.</li>
              <li><strong>Lubricate:</strong> Hinges or moving parts on foldable sections require light lubrication yearly.</li>
            </ul>
            <p className="italic text-gray-600">
              Physical therapists recommend aluminum ramps for long-term aging-in-place solutions because durability minimizes maintenance headaches.
            </p>
          </section>

          {/* Seasonal Tips */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Seasonal Maintenance Tips</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>Winter:</strong> Remove snow promptly, use anti-slip coatings, and ensure handrails are secure.</li>
              <li><strong>Spring:</strong> Inspect for water damage, rot, or mold after thawing snow.</li>
              <li><strong>Summer:</strong> Clean dirt and debris, check for expansion or warping on wooden ramps.</li>
              <li><strong>Fall:</strong> Remove leaves and debris, seal cracks, and prep surfaces for winter.</li>
            </ul>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-3xl font-bold mb-6">FAQs on Ramp Maintenance</h2>
            <h3 className="text-xl font-semibold mb-2">How often should I inspect my ramp?</h3>
            <p>Monthly inspections are recommended, with additional checks after extreme weather.</p>

            <h3 className="text-xl font-semibold mb-2">Can I maintain a ramp myself?</h3>
            <p>Yes, basic cleaning and tightening fasteners are fine, but for major repairs, consult professionals.</p>

            <h3 className="text-xl font-semibold mb-2">What's the lifespan of a well-maintained ramp?</h3>
            <p>Wood: 10–15 years, Aluminum: 20+ years, Concrete: 30+ years. Proper maintenance can extend life significantly.</p>
          </section>

          {/* Call to Action */}
          <section className="bg-gray-900 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Professional Maintenance Services</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Aaron Michael Services offers routine maintenance inspections, winter prep, and repairs for all ramp types.
              Our certified team ensures ADA compliance and optimal safety year-round in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                to="/contact" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule a Maintenance Check
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
      </section>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default MaintenanceTips;