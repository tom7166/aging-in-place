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
            Keep your ramps, handrails, and accessibility modifications safe and functional year-round in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Introduction */}
          <section>
            <p>
              At <strong>Aaron Michael Services</strong>, we understand that installing an accessibility ramp or modification is just the first step. Proper ongoing maintenance ensures these essential features remain safe, functional, and compliant with ADA standards. In Buffalo and surrounding areas, harsh winters, seasonal storms, and everyday wear can impact ramps, handrails, and home modifications if not properly cared for.
            </p>
            <p>
              This guide provides detailed tips for maintaining <strong>wood, aluminum, concrete, modular, and portable ramps</strong>, along with general home accessibility features. Whether you’re a homeowner, caregiver, or property manager, following these recommendations can prevent accidents, extend the lifespan of your installations, and maintain compliance with local and federal accessibility regulations.
            </p>
          </section>

          {/* Why Maintenance Matters */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Why Ramp and Home Accessibility Maintenance Matters</h2>
            <p>
              According to the <a href="https://www.cdc.gov/falls/" className="text-blue-600 hover:text-blue-800 font-semibold">CDC</a>, falls are the leading cause of injury for adults over 65. Accessibility ramps, handrails, and home modifications play a critical role in preventing these accidents. Yet, improperly maintained ramps are a major source of slips, trips, and falls.
            </p>
            <p>
              Regular inspection and maintenance improve safety, reduce costly repairs, and ensure that ramps and modifications continue to comply with ADA and local accessibility guidelines. For Buffalo-area homes, maintenance is particularly important due to seasonal temperature swings, snow accumulation, ice, and humidity that can deteriorate materials over time.
            </p>
            <p>
              Physical therapists and occupational therapists consistently recommend routine checks and care for ramps and handrails to prevent accidents and protect the well-being of seniors and individuals with disabilities.
            </p>
          </section>

          {/* Ramp Material Maintenance */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Ramp Material-Specific Maintenance Tips</h2>

            {/* Wood Ramps */}
            <section className="mb-12 bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Wood Ramp Maintenance</h3>
              <p>
                Wood ramps are aesthetically pleasing but highly sensitive to weather conditions. Proper care is essential to prevent rot, warping, and structural failure.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Annual Sealing:</strong> Apply a high-quality weather-resistant stain or sealant at least once per year. This protects the wood from moisture absorption and reduces splitting or cracking.</li>
                <li><strong>Rot Inspection:</strong> Examine structural supports and decking for signs of rot or decay, especially after Buffalo’s harsh winters.</li>
                <li><strong>Anti-Slip Treatments:</strong> Install grit tape, rubber mats, or textured paint to prevent slips, particularly in icy conditions.</li>
                <li><strong>Hardware Checks:</strong> Tighten screws, bolts, and nails regularly to maintain stability. Replace any rusted fasteners promptly.</li>
              </ul>
              <p className="italic text-gray-600">
                Nurses and physical therapists report that improperly maintained wooden ramps are among the leading causes of residential falls.
              </p>
            </section>

            {/* Aluminum Ramps */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Aluminum Ramp Maintenance</h3>
              <p>
                Aluminum ramps are durable and corrosion-resistant, making them popular for residential and commercial properties. Although low-maintenance, periodic attention ensures long-term reliability.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Connection Checks:</strong> Verify modular joints and bolts are secure.</li>
                <li><strong>Cleaning:</strong> Wash with mild soap and water to remove dirt and prevent surface corrosion.</li>
                <li><strong>Snow & Ice Management:</strong> Remove accumulation promptly; avoid metal shovels that can scratch surfaces.</li>
                <li><strong>Lubrication:</strong> Hinges and moving parts should be lightly lubricated yearly.</li>
              </ul>
              <p className="italic text-gray-600">
                Physical therapists recommend aluminum ramps for long-term aging-in-place solutions because their durability minimizes maintenance headaches.
              </p>
            </section>

            {/* Concrete Ramps */}
            <section className="mb-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Concrete Ramp Maintenance</h3>
              <p>
                Concrete ramps are highly durable but can develop cracks or spalling over time, especially in regions with freeze-thaw cycles like Buffalo.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Crack Repair:</strong> Fill small cracks promptly with concrete patch to prevent water infiltration.</li>
                <li><strong>Surface Cleaning:</strong> Use a pressure washer to remove moss, algae, and debris to prevent slippery surfaces.</li>
                <li><strong>Sealant Application:</strong> Apply concrete sealant every 2–3 years to maintain surface integrity.</li>
              </ul>
              <p className="italic text-gray-600">
                Occupational therapists note that even minor surface degradation can create trip hazards for users with limited mobility.
              </p>
            </section>

            {/* Modular Ramps */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Modular Ramp Maintenance</h3>
              <p>
                Modular ramps offer flexibility and can be reconfigured as needs change. They require careful assembly and regular inspections.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Stability Checks:</strong> Ensure all sections are locked and aligned correctly.</li>
                <li><strong>Fastener Maintenance:</strong> Tighten bolts, screws, and connectors periodically.</li>
                <li><strong>Cleaning:</strong> Remove debris, snow, and ice to maintain traction.</li>
              </ul>
            </section>

            {/* Portable Ramps */}
            <section className="mb-12 bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Portable Ramp Maintenance</h3>
              <p>
                Portable ramps are convenient for travel or temporary needs. While lightweight, they require careful storage and handling.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Inspect Folding Mechanisms:</strong> Check hinges, joints, and locking systems regularly.</li>
                <li><strong>Surface Care:</strong> Keep anti-slip surfaces clean and dry.</li>
                <li><strong>Storage:</strong> Store indoors when not in use to prevent corrosion or damage.</li>
              </ul>
            </section>

          </section>

          {/* Seasonal Maintenance */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Seasonal Maintenance Tips for Buffalo Homes</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>Winter:</strong> Shovel snow promptly, apply non-slip coatings, and check handrails for looseness.</li>
              <li><strong>Spring:</strong> Inspect for winter damage, water infiltration, rot, or mold growth.</li>
              <li><strong>Summer:</strong> Clean dirt, check wood expansion, and tighten all fasteners.</li>
              <li><strong>Fall:</strong> Remove leaves and debris, seal cracks, and prepare surfaces for winter weather.</li>
            </ul>
          </section>

          {/* Common Problems */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Common Ramp Maintenance Problems</h2>
            <p>
              Homeowners frequently make mistakes that compromise ramp safety:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Ignoring seasonal inspections</li>
              <li>Using incorrect sealants or paints on wood</li>
              <li>Failing to tighten loose bolts or screws</li>
              <li>Allowing snow and ice to accumulate for extended periods</li>
              <li>Neglecting modular or portable ramp joints</li>
            </ul>
            <p>
              Proper attention to these details dramatically reduces accidents and prolongs the life of your ramps.
            </p>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <h3 className="text-xl font-semibold mb-2">How often should I inspect my ramp?</h3>
            <p>Monthly inspections are recommended, with additional checks after heavy snow, storms, or extreme weather.</p>

            <h3 className="text-xl font-semibold mb-2">Can I maintain a ramp myself?</h3>
            <p>Basic cleaning and fastener checks are fine, but major repairs should be handled by professionals to ensure ADA compliance.</p>

            <h3 className="text-xl font-semibold mb-2">How long do different ramps last?</h3>
            <p>Wood: 10–15 years; Aluminum: 20+ years; Concrete: 30+ years; Modular/Portable: 10–20 years depending on usage and maintenance.</p>

            <h3 className="text-xl font-semibold mb-2">Does maintenance affect insurance or liability?</h3>
            <p>Regular maintenance reduces liability risk for homeowners and property managers and may be required for compliance with certain insurance policies.</p>

            <h3 className="text-xl font-semibold mb-2">What cleaning products are safe?</h3>
            <p>Use mild soap, water, and non-abrasive brushes. Avoid harsh chemicals that can damage ramp surfaces.</p>
          </section>

          {/* Professional Services CTA */}
          <section className="bg-gray-900 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white