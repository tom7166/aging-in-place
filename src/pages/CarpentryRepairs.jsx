import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CircleCheck as CheckCircle, Clock, Shield } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './carpentry-repairs-schema.json';

export default function CarpentryRepairs() {
  return (
    <>
      <SEOHelmet
        title="Carpentry Repairs Buffalo NY | Ranch Home Specialists"
        description="Professional carpentry repair services in Buffalo, Amherst, Tonawanda & Kenmore NY. Step-ladder repairs, senior-friendly, 25+ years experience. Call (716) 533-7108."
        keywords="carpentry repairs Buffalo NY, interior carpentry repair, ranch home carpentry, step-ladder carpentry, senior-friendly carpentry, CAPS certified repairs"
        canonicalUrl="https://aaronmichaelservices.com/services/carpentry-repairs"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Carpentry Repairs for Ranch Homes in Buffalo & Western New York
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Step-Ladder Repairs | Seniors & CAPS Certified | 25+ Years Experience
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
              Ranch homes only | Step-ladder accessible projects
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Aaron Michael Services specializes in <strong>carpentry repairs</strong> for ranch homes across Buffalo, Amherst, Tonawanda, Kenmore, and the Western New York area. Our team is CAPS-certified, experienced in step-ladder work only, and fully committed to safe, high-quality results for senior homeowners.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            From door and window frame repairs to shelving, cabinetry, and minor structural adjustments, we handle every carpentry repair with precision and care. Every project is scoped for safety, efficiency, and long-lasting durability.
          </p>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Carpentry Repair Services We Offer</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Interior door and frame repair</li>
            <li>Window frame and trim repairs</li>
            <li>Step-ladder accessible shelving & cabinetry repairs</li>
            <li>Ranch home minor structural carpentry adjustments</li>
            <li>Custom woodwork repair and refinishing</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            All work is performed with care to avoid damage to surrounding surfaces. We take pride in leaving your home neat, safe, and structurally sound. Our team ensures your home’s carpentry remains functional, beautiful, and safe for seniors.
          </p>
        </section>

        {/* Service Areas */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Carpentry Repairs Across Western New York</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/cities/buffalo/carpentry-repairs-buffalo-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo Carpentry Repairs</h3>
              <p className="text-gray-600">Ranch home-focused carpentry repairs with step-ladder safety for seniors. Over 25 years experience in Buffalo homes.</p>
            </Link>
            <Link to="/cities/amherst/carpentry-repairs-amherst-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amherst Carpentry Repairs</h3>
              <p className="text-gray-600">Professional interior carpentry repairs and custom solutions. Step-ladder only and CAPS certified for seniors.</p>
            </Link>
            <Link to="/cities/tonawanda/carpentry-repairs-tonawanda-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tonawanda Carpentry Repairs</h3>
              <p className="text-gray-600">Ranch home specialists performing safe, reliable carpentry repairs for senior-friendly projects.</p>
            </Link>
            <Link to="/cities/kenmore/carpentry-repairs-kenmore-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kenmore Carpentry Repairs</h3>
              <p className="text-gray-600">High-quality repairs of interior woodwork, shelving, and minor structural carpentry for ranch homes.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}