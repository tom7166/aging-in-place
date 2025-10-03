import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import schemaData from './ada-compliance-details-and-local-regulations-schema.json';

const ADAComplianceDetailsAndLocalRegulations: React.FC = () => {
  useEffect(() => {
    document.title = "ADA Compliance Details and Local Regulations | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Comprehensive guide to ADA compliance and local accessibility regulations for ramps, handrails, and home modifications in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga."
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
            <span>ADA Compliance Details and Local Regulations</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ADA Compliance Details and Local Regulations</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ensure your ramps, handrails, and home modifications meet ADA standards and local codes in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              At <strong>Aaron Michael Services</strong>, we specialize in designing and installing ADA-compliant ramps, handrails, and home modifications that meet both federal and local accessibility regulations. Our team serves Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga, helping homeowners and businesses create safe, accessible spaces.
            </p>
            <p>
              ADA compliance ensures equal access for individuals with disabilities, while local regulations may include city-specific codes and inspection requirements. Failing to meet these standards can result in safety hazards, legal liabilities, and costly fines.
            </p>
            <p>
              This guide covers everything you need to know about ADA requirements, local Buffalo-area regulations, common compliance mistakes, and best practices for long-term accessibility.
            </p>
          </section>

          {/* Why ADA Compliance is Important */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Why ADA Compliance is Critical</h2>
            <p>
              ADA compliance is more than a legal requirement — it’s a safety measure that protects residents, visitors, and employees. Physical and occupational therapists recommend proper ramp slopes, handrails, and doorway widths to prevent falls and ensure mobility for seniors and people with disabilities.
            </p>
            <p>
              For homes and businesses in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga, weather extremes like snow, ice, and freeze-thaw cycles make compliance plus proper maintenance essential.
            </p>
            <p>
              Maintaining ADA compliance also preserves property value and reduces risk of lawsuits or insurance issues, making it both a safety and financial priority.
            </p>
          </section>

          {/* Federal ADA Requirements */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Federal ADA Requirements for Residential and Commercial Properties</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>Ramp Slope:</strong> Maximum 1:12 (1 inch rise per 12 inches of run).</li>
              <li><strong>Ramp Width:</strong> Minimum 36 inches for single-user ramps.</li>
              <li><strong>Handrails:</strong> Required on both sides of ramps exceeding 6 inches in rise, with height 34–38 inches from ramp surface.</li>
              <li><strong>Landings:</strong> Level landings required at top and bottom of ramps; minimum 60 inches long.</li>
              <li><strong>Surface:</strong> Non-slip, firm, stable, and smooth surfaces required for all ramps.</li>
              <li><strong>Edge Protection:</strong> Ramps must have curbs, walls, or railings to prevent wheelchairs from slipping off edges.</li>
            </ul>
            <p>
              These standards apply to both public and private installations where accessibility is necessary, and following them ensures safety and legal compliance.
            </p>
          </section>

          {/* Local Buffalo-Area Regulations */}
          <section className="space-y-4 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Local Regulations in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga</h2>
            <p>
              In addition to federal ADA requirements, local building codes often specify additional criteria for ramps, handrails, and accessibility modifications. Some key considerations include:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>Permit Requirements:</strong> Many municipalities require permits for ramp installation or structural modifications. Aaron Michael Services handles all local permitting in Buffalo and surrounding areas.</li>
              <li><strong>Inspection Standards:</strong> City inspectors may review slope, width, handrail placement, and landing dimensions.</li>
              <li><strong>Materials:</strong> Some local codes may specify weather-resistant materials suitable for Buffalo winters.</li>
              <li><strong>Residential vs. Commercial:</strong> Certain properties have additional accessibility requirements, especially public or commercial spaces.</li>
            </ul>
            <p>
              Staying informed about these regulations prevents fines, ensures safety, and guarantees that your installation passes inspections the first time.
            </p>
          </section>

          {/* Common Compliance Mistakes */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Common ADA Compliance Mistakes</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Ramp slope steeper than 1:12</li>
              <li>Insufficient handrail height or missing rails</li>
              <li>Narrow ramp widths less than 36 inches</li>
              <li>Non-level landings at ramp tops and bottoms</li>
              <li>Slippery surfaces or inadequate edge protection</li>
              <li>Ignoring local permit and inspection requirements</li>
            </ul>
            <p>
              Our team at Aaron Michael Services proactively addresses these issues, ensuring all installations meet both federal and local standards.
            </p>
          </section>

          {/* Best Practices for ADA Compliance */}
          <section className="space-y-4 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Best Practices for Maintaining Compliance</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Schedule periodic inspections for slope, handrails, and surface conditions.</li>
              <li>Keep ramps clear of snow, ice, leaves, and debris.</li>
              <li>Repair cracks, loose screws, or warped surfaces immediately.</li>
              <li>Use weather-resistant and non-slip materials for all ramps and handrails.</li>
              <li>Document maintenance to demonstrate compliance for inspections or audits.</li>
            </ul>
            <p>
              Following these best practices helps homeowners and businesses in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga avoid accidents and remain legally compliant.
            </p>
          </section>

          {/* FAQs on ADA Compliance */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">FAQs on ADA Compliance and Local Regulations</h2>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Do I need a permit to install a ramp in Buffalo?</h3>
              <p>Yes, most municipalities require permits for any structural modification, including ramps. Aaron Michael Services handles permitting for you.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">What slope is allowed for ramps?</h3>
              <p>The maximum slope allowed by ADA is 1:12, which means 1 inch of rise for every 12 inches of run.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Are handrails required?</h3>
              <p>Yes, handrails are required on both sides for ramps that rise more than 6 inches, with heights between 34 and 38 inches.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">What about ramp width?</h3>
              <p>ADA mandates a minimum ramp width of 36 inches for single-user ramps to accommodate wheelchairs safely.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">How often should I inspect my ramps?</h3>
              <p>Monthly inspections are recommended, with additional checks after storms or heavy snow.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="space-y-4 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Professional ADA Compliance Services</h2>
            <p>
              Aaron Michael Services provides comprehensive ADA compliance assessments, ramp installations, handrail placement, and ongoing inspections. We ensure your home or business in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga is fully compliant and safe.
            </p>
            <p>
              Call <a href="tel:7165337108" className="text-blue-600 hover:underline font-semibold">(716) 533-7108</a> or visit our <Link to="/contact" className="text-blue-600 hover:underline font-semibold">Contact Page</Link> to schedule a consultation and make your property accessible today.
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
