import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './maintenance-tips-schema.json';

const MaintenanceTips: React.FC = () => {
  useEffect(() => {
    document.title = "Maintenance Tips | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga";

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
      <SEOHelmet
        title="Maintenance Tips | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga"
        description="Comprehensive maintenance tips for accessibility ramps, home modifications, and safety features. Serving Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga."
        keywords="maintenance tips Buffalo, ramp maintenance, home modification care, accessibility equipment maintenance"
        canonicalUrl="https://aaronmichaelservices.com/services/maintenance-tips"
      />
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
            Keep your ramps, handrails, and accessibility modifications safe and functional year-round in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              At <strong>Aaron Michael Services</strong>, we know that installing a ramp or other accessibility feature is only the first step. Proper maintenance ensures your ramps, handrails, and modifications remain safe, functional, and ADA compliant.
            </p>
            <p>
              In Buffalo and Western New York, harsh winters, ice, and seasonal storms can damage ramps and accessibility installations if neglected. This guide provides comprehensive maintenance tips for all ramp types, home modifications, and safety features, tailored for residents of Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
            </p>
            <p>
              Following these tips not only prevents accidents but also extends the life of your installations and helps you avoid costly repairs.
            </p>
          </section>

          {/* Why Maintenance Matters */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Why Ramp and Home Accessibility Maintenance Matters</h2>
            <p>
              Falls are the leading cause of injury among adults over 65, according to the <a href="https://www.cdc.gov/falls/" className="text-blue-600 hover:underline">CDC</a>. Accessibility ramps and modifications prevent these accidents, but poorly maintained installations remain a major safety hazard.
            </p>
            <p>
              Routine maintenance protects residents, preserves property value, and ensures compliance with ADA standards and local regulations. Buffalo’s winter weather accelerates wear, so seasonal care is essential.
            </p>
            <p>
              Occupational and physical therapists recommend regular inspections to prevent injuries and maintain independence for people with limited mobility.
            </p>
          </section>

          {/* Ramp Material Maintenance */}
          <section className="space-y-12">

            {/* Wood Ramps */}
            <section className="bg-blue-50 p-8 rounded-lg space-y-4">
              <h3 className="text-2xl font-bold mb-4">Wood Ramp Maintenance</h3>
              <p>
                Wood ramps are durable and visually appealing but require regular maintenance to prevent rot, warping, and slipping hazards.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Sealing:</strong> Apply a weather-resistant sealant annually to protect the wood from moisture and ice.</li>
                <li><strong>Rot Inspection:</strong> Examine decking and supports for rot or deterioration, especially after winter.</li>
                <li><strong>Non-Slip Surfaces:</strong> Install grit tape, rubber mats, or textured paint for traction.</li>
                <li><strong>Hardware:</strong> Tighten screws, bolts, and nails regularly; replace any corroded fasteners.</li>
              </ul>
              <p className="italic text-gray-600">
                Nurses and PTs note that wooden ramps are common fall sites if not properly maintained.
              </p>
            </section>

            {/* Aluminum Ramps */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Aluminum Ramp Maintenance</h3>
              <p>
                Aluminum ramps are lightweight and resistant to corrosion. They require less maintenance than wood but still benefit from periodic checks.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Joint and Bolt Checks:</strong> Ensure all modular connections remain tight.</li>
                <li><strong>Cleaning:</strong> Wash with mild soap and water to prevent dirt buildup.</li>
                <li><strong>Snow & Ice:</strong> Remove promptly; avoid metal shovels that can scratch surfaces.</li>
                <li><strong>Lubrication:</strong> Lightly lubricate hinges and folding mechanisms yearly.</li>
              </ul>
            </section>

            {/* Concrete Ramps */}
            <section className="bg-gray-50 p-8 rounded-lg space-y-4">
              <h3 className="text-2xl font-bold mb-4">Concrete Ramp Maintenance</h3>
              <p>
                Concrete ramps are strong and long-lasting but can develop cracks or moss growth over time.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Crack Repair:</strong> Fill small cracks immediately to prevent water penetration.</li>
                <li><strong>Surface Cleaning:</strong> Pressure wash to remove moss or debris.</li>
                <li><strong>Sealant Application:</strong> Apply a concrete sealant every 2–3 years to protect against weather.</li>
              </ul>
            </section>

            {/* Modular Ramps */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Modular Ramp Maintenance</h3>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Section Stability:</strong> Verify all modules are locked and aligned.</li>
                <li><strong>Fasteners:</strong> Tighten bolts and connectors to avoid instability.</li>
                <li><strong>Debris Management:</strong> Remove leaves, snow, and ice promptly.</li>
              </ul>
            </section>

            {/* Portable Ramps */}
            <section className="bg-blue-50 p-8 rounded-lg space-y-4">
              <h3 className="text-2xl font-bold mb-4">Portable Ramp Maintenance</h3>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Folding Mechanism:</strong> Inspect hinges and locks regularly.</li>
                <li><strong>Surface Cleaning:</strong> Keep non-slip surfaces free of dirt and moisture.</li>
                <li><strong>Storage:</strong> Store indoors when not in use to prevent damage.</li>
              </ul>
            </section>
          </section>

          {/* Seasonal Maintenance */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Seasonal Maintenance Tips</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>Winter:</strong> Remove snow, apply anti-slip treatments, and check handrails.</li>
              <li><strong>Spring:</strong> Inspect for water damage, mold, or rot after thawing.</li>
              <li><strong>Summer:</strong> Clean dirt and debris, check wood expansion and warping.</li>
              <li><strong>Fall:</strong> Clear leaves, seal cracks, and prep ramps for winter.</li>
            </ul>
          </section>

          {/* Common Problems */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Common Problems and Mistakes</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Ignoring small cracks or loose hardware</li>
              <li>Using metal shovels on aluminum ramps</li>
              <li>Neglecting sealant or non-slip surfaces</li>
              <li>Failing to check ramps after storms or ice accumulation</li>
            </ul>
            <p>
              Addressing these issues proactively prevents accidents and extends the life of your accessibility features.
            </p>
          </section>

          {/* FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div>
              <h3 className="text-xl font-semibold mb-2">How often should I inspect my ramp?</h3>
              <p>Monthly, with additional checks after extreme weather.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I maintain a ramp myself?</h3>
              <p>Basic cleaning and tightening fasteners are fine. For major repairs, consult professionals.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What’s the lifespan of a well-maintained ramp?</h3>
              <p>Wood: 10–15 years, Aluminum: 20+ years, Concrete: 30+ years.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Do ramps need seasonal maintenance?</h3>
              <p>Yes, especially in Buffalo due to snow, ice, and freeze-thaw cycles.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Are there ADA compliance requirements?</h3>
              <p>All ramps should meet ADA slope, width, and handrail guidelines.</p>
            </div>
          </section>

          {/* Professional Services */}
          <section className="space-y-4 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Professional Maintenance Services</h2>
            <p>
              Aaron Michael Services offers inspections, winter prep, and repairs for all ramp types. Our certified team ensures ADA compliance and optimal safety year-round in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
            </p>
            <p>
              Call <a href="tel:7165337108" className="text-blue-600 hover:underline font-semibold">(716) 533-7108</a> or visit our <Link to="/contact" className="text-blue-600 hover:underline font-semibold">Contact Page</Link> to schedule a maintenance check today.
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