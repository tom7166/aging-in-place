import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import schemaData from './ada-compliance-details-and-local-regulations-schema.json';

const ADAComplianceDetailsAndLocalRegulations: React.FC = () => {
  useEffect(() => {
    document.title = "ADA Compliance Details & Local Regulations | Buffalo, Tonawanda, Cheektowaga";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Learn about ADA compliance for accessibility ramps, entrances, and modifications. Serving Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga with local regulation expertise."
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
                <span>ADA Compliance</span>
              </div>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ADA Compliance Details and Local Regulations</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Expert guidance on ADA standards and local building codes for accessible home modifications
              in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga
            </p>
          </div>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <section className="mb-12">
            <p className="text-lg text-gray-700 mb-4">
              At <strong>Aaron Michael Services</strong>, accessibility is at the heart of what we do.
              Our team specializes in ensuring that every ramp, entryway, and modification we build
              complies fully with the <a href="https://www.ada.gov/resources/" className="text-blue-600 hover:underline">Americans with Disabilities Act (ADA)</a>
              {' '}and meets all local building codes in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
            </p>
            <p className="text-lg text-gray-700">
              Understanding ADA compliance can feel overwhelming. This page provides a detailed breakdown of
              the requirements, practical implications, and how Western New York's weather and local ordinances
              shape accessibility solutions for homes and businesses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What is ADA Compliance?</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Americans with Disabilities Act, signed into law in 1990, protects the rights of individuals
              with disabilities by ensuring equal access to buildings, services, and public spaces.
              Compliance means that features such as ramps, handrails, entrances, and pathways are
              designed and built to meet specific safety and usability standards.
            </p>
            <p className="text-lg text-gray-700">
              According to the <em>ADA National Network</em>, nearly 1 in 4 adults in the U.S. lives with a disability,
              which underscores the importance of creating inclusive environments. In Buffalo alone,
              census data indicates that more than <strong>14%</strong> of residents report mobility-related limitations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Key ADA Ramp Requirements</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li><strong>Slope:</strong> A 1:12 slope ratio (1 inch of rise for every 12 inches of ramp length).</li>
              <li><strong>Width:</strong> At least 36 inches of clear width between handrails.</li>
              <li><strong>Landings:</strong> Level landings at top and bottom, and at intervals for longer ramps.</li>
              <li><strong>Handrails:</strong> Required for ramps with a rise greater than 6 inches.</li>
              <li><strong>Surface:</strong> Must be firm, stable, and slip-resistant.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Physical therapists often emphasize slope and surface as the most critical factors
              in preventing falls and ensuring safe transfers for wheelchair users and those using walkers.
            </p>
          </section>

          <section className="mb-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Local Regulations in Buffalo & WNY</h2>
            <p className="text-lg text-gray-700 mb-4">
              While the ADA sets federal standards, municipalities in Western New York, including
              Buffalo, Cheektowaga, and Tonawanda, enforce building codes that must also be met.
              These codes may cover issues such as snow removal, drainage, and structural integrity.
            </p>
            <h3 className="text-xl font-semibold mb-3">Examples of Local Ordinances:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Buffalo:</strong> Requires permits for ramps attached to residential or commercial structures.</li>
              <li><strong>Cheektowaga:</strong> Enforces zoning requirements to ensure ramps do not block sidewalks or public access.</li>
              <li><strong>Tonawanda:</strong> May require inspections for ramps exceeding certain dimensions.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Local Insight:</strong> Our team regularly coordinates with local inspectors to ensure every installation
              passes smoothly. In snowy regions like Buffalo, additional attention is paid to slope and drainage to minimize ice hazards.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">FAQs on ADA & Local Rules</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Do all homes need to be ADA compliant?</h3>
              <p className="text-gray-700">No, but following ADA guidelines ensures safety and accessibility for residents and visitors alike.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How do I get a permit for a ramp in Buffalo?</h3>
              <p className="text-gray-700">You'll need to submit an application to the Buffalo Building Permits Office. Our team handles this process for clients.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What happens if a business ignores ADA requirements?</h3>
              <p className="text-gray-700">Businesses may face fines, lawsuits, and required modifications. Compliance also ensures accessibility for customers.</p>
            </div>
          </section>

          <section className="mb-12">
            <p className="text-lg text-gray-700">
              <strong>Aaron Michael Services</strong> ensures all accessibility modifications meet ADA standards
              and local regulations across Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
              Call us at <a href="tel:7165337108" className="text-blue-600 hover:underline font-semibold">(716) 533-7108</a> or visit our <Link to="/contact" className=\"text-blue-600 hover:underline">Contact Page</Link>
              {' '}to schedule your compliance consultation today.
            </p>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default ADAComplianceDetailsAndLocalRegulations;
