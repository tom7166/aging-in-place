import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CircleCheck as CheckCircle, Clock, Shield } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './trim-carpentry-schema.json';

export default function TrimCarpentry() {
  return (
    <>
      <SEOHelmet
        title="Trim Carpentry Buffalo NY | Baseboards, Crown Molding & Repairs"
        description="Expert trim carpentry services in Buffalo, Amherst, Tonawanda & Kenmore NY. Repair, replace, and install baseboards, crown molding, and custom trim. Seniors & CAPS certified. Call (716) 533-7108."
        keywords="trim carpentry Buffalo NY, baseboard repair Buffalo, crown molding installation, interior trim replacement, senior-friendly carpentry, CAPS certified carpentry, ranch home trim repair"
        canonicalUrl="https://aaronmichaelservices.com/services/trim-carpentry"
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
                Professional Trim Carpentry Services in Buffalo & Western New York
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Baseboards, Crown Molding, Door & Window Trim Repairs & Installation
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
                Seniors & CAPS Certified | Step-Ladder Repairs Only | 25+ Years Experience
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Aaron Michael Services provides expert <strong>trim carpentry services</strong> throughout Buffalo, Amherst, Tonawanda, Kenmore, and the surrounding Western New York area. With over 25 years of hands-on experience and a dedication to precision, we repair, replace, and install interior trim, baseboards, crown molding, and more—perfectly suited for ranch-style homes. Our team is CAPS-certified to serve senior homeowners safely, and our work is always limited to step-ladder accessible projects to ensure compliance with our insurance and your safety.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether you’re repairing cracked baseboards, replacing worn crown molding, or updating your window and door trim, we bring craftsmanship, attention to detail, and efficiency to every project. From minor touch-ups to full trim installations, our goal is to enhance the beauty, safety, and functionality of your home.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Trim Carpentry Services</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our team handles all aspects of trim carpentry in ranch homes, focusing on repairs, replacements, and installations that are safe, efficient, and visually appealing. We specialize in:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Baseboard installation, replacement, and repair</li>
            <li>Crown molding repair and custom installations</li>
            <li>Door and window trim replacement and upgrades</li>
            <li>Custom trim work for built-ins, shelving, and cabinetry</li>
            <li>Damage repair from water, impact, or age</li>
            <li>Step-ladder accessible projects for senior-friendly homes</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every trim project is approached with precision, care, and respect for your home. We carefully measure, cut, and fit each piece to ensure a seamless finish. Our team also takes care of debris removal and post-installation clean-up, leaving your home pristine and safe.
          </p>
        </section>

        {/* Service Areas */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Trim Carpentry Across Western New York</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/cities/buffalo/trim-carpentry-buffalo-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo Trim Carpentry</h3>
              <p className="text-gray-600">Expert trim repair, replacement, and installation for ranch homes in Buffalo. Senior-friendly, step-ladder accessible, and CAPS certified.</p>
            </Link>
            <Link to="/cities/amherst/trim-carpentry-amherst-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amherst Trim Carpentry</h3>
              <p className="text-gray-600">Professional trim carpentry services including baseboards, crown molding, and door/window trim repairs for senior homeowners.</p>
            </Link>
            <Link to="/cities/tonawanda/trim-carpentry-tonawanda-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tonawanda Trim Carpentry</h3>
              <p className="text-gray-600">Repair and installation of all interior trim types. Specializing in ranch homes with step-ladder only projects.</p>
            </Link>
            <Link to="/cities/kenmore/trim-carpentry-kenmore-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kenmore Trim Carpentry</h3>
              <p className="text-gray-600">Reliable, senior-friendly trim carpentry services including crown molding, baseboards, and custom trim solutions.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}