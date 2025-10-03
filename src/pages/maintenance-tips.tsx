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

      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <nav className="mb-6 text-blue-200">
              <div className="flex items-center justify-center space-x-2 text-sm">
                <Home className="w-4 h-4" />
                <Link to="/" className="hover:text-white">Home</Link>
                <ArrowRight className="w-3 h-3" />
                <span>Maintenance Tips</span>
              </div>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Maintenance Tips for Accessibility Ramps</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Keep your ramps and accessibility modifications safe and functional year-round
              in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga
            </p>
          </div>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <section className="mb-12">
            <p className="text-lg text-gray-700 mb-4">
              At <strong>Aaron Michael Services</strong>, we don't just install ramps and accessibility solutions —
              we ensure they remain safe, functional, and compliant for years to come. Proper maintenance prolongs
              the lifespan of your ramps and other modifications while reducing accident risk for seniors,
              people with disabilities, and caregivers in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
            </p>
            <p className="text-lg text-gray-700">
              This guide covers maintenance best practices for <strong>wood, aluminum, concrete, modular, and portable ramps</strong>,
              along with general home accessibility features. Following these tips can save thousands in repairs and
              prevent dangerous slips or falls.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">General Maintenance Guidelines</h2>
            <p className="text-lg text-gray-700 mb-4">
              Regardless of ramp material, all accessibility features benefit from routine inspection.
              Experts at the <a href="https://www.cdc.gov/falls/" className="text-blue-600 hover:underline">CDC</a> recommend monthly checks for hazards such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Loose handrails or screws</li>
              <li>Warped or cracked surfaces</li>
              <li>Accumulated debris or leaves</li>
              <li>Signs of rot, rust, or corrosion</li>
            </ul>
            <p className="text-lg text-gray-700 mt-4">
              Proper cleaning and lubrication of moving parts, such as hinges on foldable ramps, ensures smooth operation.
              Buffalo winters require additional attention to snow and ice accumulation to prevent slips.
            </p>
          </section>

          <section className="mb-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Wood Ramp Maintenance</h2>
            <p className="text-lg text-gray-700 mb-4">
              Wood ramps are beautiful and functional but require consistent care:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Sealing:</strong> Apply a weather-resistant sealant or stain at least once a year to prevent water damage.</li>
              <li><strong>Check for rot:</strong> Inspect the ramp structure annually, especially after winter snow and ice exposure.</li>
              <li><strong>Non-slip treatment:</strong> Add grit tape, rubber mats, or anti-slip paint to prevent slips.</li>
              <li><strong>Fasteners:</strong> Tighten screws, bolts, and nails to maintain stability.</li>
            </ul>
            <p className="text-gray-600 italic mt-4">
              Nurses and physical therapists often note that improperly maintained wood ramps are one of the leading causes of residential falls.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Aluminum Ramp Maintenance</h2>
            <p className="text-lg text-gray-700 mb-4">
              Aluminum ramps are low-maintenance but benefit from occasional care:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Inspect joints:</strong> Ensure modular connections are secure and bolts remain tight.</li>
              <li><strong>Cleaning:</strong> Wash with mild soap and water to prevent dirt buildup and surface corrosion.</li>
              <li><strong>Snow & ice:</strong> Clear promptly and use non-metal shovels to avoid scratching surfaces.</li>
              <li><strong>Lubricate:</strong> Hinges or moving parts on foldable sections require light lubrication yearly.</li>
            </ul>
            <p className="text-gray-600 italic mt-4">
              Physical therapists recommend aluminum ramps for long-term aging-in-place solutions because durability minimizes maintenance headaches.
            </p>
          </section>

          <section className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Seasonal Maintenance Tips</h2>
            <p className="text-lg text-gray-700 mb-4">
              Buffalo-area homes face unique seasonal challenges:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Winter:</strong> Remove snow promptly, use anti-slip coatings, and ensure handrails are secure.</li>
              <li><strong>Spring:</strong> Inspect for water damage, rot, or mold after thawing snow.</li>
              <li><strong>Summer:</strong> Clean dirt and debris, check for expansion or warping on wooden ramps.</li>
              <li><strong>Fall:</strong> Remove leaves and debris, seal cracks, and prep surfaces for winter.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">FAQs on Ramp Maintenance</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How often should I inspect my ramp?</h3>
              <p className="text-gray-700">Monthly inspections are recommended, with additional checks after extreme weather.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Can I maintain a ramp myself?</h3>
              <p className="text-gray-700">Yes, basic cleaning and tightening fasteners are fine, but for major repairs, consult professionals.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What's the lifespan of a well-maintained ramp?</h3>
              <p className="text-gray-700">
                Wood: 10–15 years, Aluminum: 20+ years, Concrete: 30+ years. Proper maintenance can extend life significantly.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Professional Maintenance Services</h2>
            <p className="text-lg text-gray-700">
              Aaron Michael Services offers routine maintenance inspections, winter prep, and repairs for all ramp types.
              Our certified team ensures ADA compliance and optimal safety year-round in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Call <a href="tel:7165337108" className="text-blue-600 hover:underline font-semibold">(716) 533-7108</a> or visit our <Link to="/contact" className=\"text-blue-600 hover:underline">Contact Page</Link>
              {' '}to schedule a maintenance check or repair today.
            </p>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default MaintenanceTips;
