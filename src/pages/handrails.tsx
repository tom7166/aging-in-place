import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CircleCheck as CheckCircle } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './handrails-schema.json';

export default function Handrails() {
  return (
    <>
      <SEOHelmet
        title="Handrail Installation & Repair Buffalo NY | Safety & ADA Certified"
        description="Professional handrail installation, repair, and replacement services in Buffalo, Amherst, Tonawanda & Kenmore NY. CAPs certified for seniors, 25+ years of trade experience. Call (716) 533-7108."
        keywords="handrail installation Buffalo NY, handrail repair Western New York, ADA handrails Buffalo, senior safety handrails, staircase handrails replacement, handrail contractors Buffalo"
        canonicalUrl="https://aaronmichaelservices.com/services/handrails"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Handrail Installation, Repair & Replacement in Buffalo & Western New York
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Safe, Durable Handrails Designed for Every Home & Commercial Property
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:7165337108"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  Call (716) 533-7108
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors border-2 border-white"
                >
                  Free Estimate
                </Link>
              </div>
              <p className="mt-6 text-gray-100 text-lg">
                CAPs Certified | 25+ Years of Trade Experience | ADA & Senior Safety Compliant
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Aaron Michael Services provides professional handrail installation, repair, and replacement services throughout <strong>Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York</strong>. With over 25 years in the trades and CAPs certification for senior safety, we know a thing or two about crafting durable, safe, and aesthetically pleasing handrails for homes and commercial properties.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Handrails are not just functional—they are essential safety features. Whether you’re replacing old, worn-out rails, installing new handrails in a staircase, or upgrading your property to meet ADA standards, our team handles every aspect of the job with precision and professionalism. We ensure that your handrails are sturdy, code-compliant, and installed to last.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              From indoor staircases to exterior decks, our experts are trained to repair, replace, and install handrails that are both safe and visually appealing. We also specialize in accessibility handrails designed to support seniors, individuals with mobility challenges, and anyone requiring additional safety measures in their home or business.
            </p>
          </div>
        </section>

        {/* Services Offered */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Handrail Services for Every Property
          </h2>
          <div className="prose prose-lg max-w-none mb-8 text-gray-700">
            <p>
              Our handrail services are designed to provide safety, durability, and compliance. Services include:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Handrail Installation:</strong> Custom and standard handrail installation for stairs, decks, porches, ramps, and more.</li>
              <li><strong>Handrail Repair:</strong> Fix wobbly, loose, or damaged rails to restore safety and compliance.</li>
              <li><strong>Handrail Replacement:</strong> Upgrade old or worn handrails with new, code-compliant designs for residential and commercial properties.</li>
              <li><strong>Senior & ADA Safety Handrails:</strong> CAPs certified installations for seniors, hospitals, and accessibility-compliant projects.</li>
              <li><strong>Material Options:</strong> Wood, metal, wrought iron, and composite materials for indoor and outdoor applications.</li>
            </ul>
            <p>
              With Aaron Michael Services, handrail projects are handled by experienced tradespeople who bring attention to detail, knowledge of local building codes, and a commitment to safety.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Aaron Michael Services for Handrails
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <h3 className="text-xl font-bold mb-2">25+ Years of Experience</h3>
              <p>
                Our seasoned tradespeople have decades of hands-on experience installing, repairing, and replacing handrails across Buffalo and Western New York.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">CAPs Certified for Seniors</h3>
              <p>
                Certified Assistive Products specialists ensure handrails are safe, supportive, and meet accessibility standards for seniors and those with mobility challenges.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
              <p>
                We understand Western New York’s building codes, safety regulations, and material needs for indoor and outdoor handrails.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">High-Quality Materials & Craftsmanship</h3>
              <p>
                Every handrail is installed with attention to detail, using high-quality materials to ensure durability, safety, and aesthetic appeal.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Handrail Services Across Western New York
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Aaron Michael Services provides handrail installation, repair, and replacement across the Buffalo-Niagara region. Our local knowledge ensures safe, compliant, and efficient solutions for homes and businesses.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link to="/cities/buffalo/handrails-buffalo-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo Handrails</h3>
              <p className="text-gray-600">
                Expert handrail repair, replacement, and installation services for Buffalo homes and businesses. CAPs certified for senior safety.
              </p>
            </Link>
            <Link to="/cities/amherst/handrails-amherst-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amherst Handrails</h3>
              <p className="text-gray-600">
                Handrail solutions for Amherst residential and commercial properties, focusing on safety, compliance, and quality craftsmanship.
              </p>
            </Link>
            <Link to="/cities/tonawanda/handrails-tonawanda-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tonawanda Handrails</h3>
              <p className="text-gray-600">
                Professional handrail repair, replacement, and installation services in Tonawanda, ensuring safety and aesthetic appeal.
              </p>
            </Link>
            <Link to="/cities/kenmore/handrails-kenmore-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kenmore Handrails</h3>
              <p className="text-gray-600">
                CAPs certified handrail services in Kenmore, focusing on durability, safety, and accessibility for seniors and those with mobility needs.
              </p>
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Handrail FAQs</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <h3>Are your handrails ADA compliant?</h3>
            <p>Yes, we install handrails to meet ADA standards for accessibility, including seniors and individuals with mobility challenges.</p>

            <h3>Do you repair both indoor and outdoor handrails?</h3>
            <p>Absolutely. Our team handles all types of handrails, including staircases, decks, porches, and ramps, indoors and outdoors.</p>

            <h3>How long does a typical handrail installation take?</h3>
            <p>Installation times vary depending on scope, but most residential handrails are installed within 1-2 days. Larger projects are scheduled efficiently to minimize disruption.</p>

            <h3>Can you recommend the best materials for durability and aesthetics?</h3>
            <p>Yes, our team advises on wood, metal, wrought iron, and composite materials based on your property type, usage, and design preferences.</p>
          </div>
        </section>
      </div>
    </>
  );
}