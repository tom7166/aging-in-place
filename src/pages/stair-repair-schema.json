import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CircleCheck as CheckCircle, Clock, Shield } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './stair-repair-schema.json';

export default function StairRepair() {
  return (
    <>
      <SEOHelmet
        title="Stair Repair Buffalo NY | Ranch Home Specialists"
        description="Safe, reliable stair repair services in Buffalo, Amherst, Tonawanda & Kenmore NY. Step-ladder accessible, senior-friendly, CAPS certified. 25+ years of experience. Call (716) 533-7108."
        keywords="stair repair Buffalo NY, stair replacement, interior stair repair, ranch home stair repair, senior-friendly stair repairs, CAPS certified stair services"
        canonicalUrl="https://aaronmichaelservices.com/services/stair-repair"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Stair Repair Services for Ranch Homes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Step-Ladder Accessible | Senior-Friendly | CAPS Certified | 25+ Years Experience
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
            At Aaron Michael Services, we specialize in <strong>stair repair</strong> for ranch homes across Buffalo, Amherst, Tonawanda, Kenmore, and the surrounding Western New York region. Our team is CAPS-certified, step-ladder only, and experienced in safely performing stair repairs for senior-friendly homes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We understand the importance of structurally sound stairs for safety and daily mobility. From repairing treads, risers, and handrails to stabilizing loose steps, our expert team handles every project with precision and care. Safety, longevity, and attention to detail are our top priorities.
          </p>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Stair Repair Services We Offer</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Interior stair tread and riser repair</li>
            <li>Handrail installation and repair</li>
            <li>Step stabilization and leveling</li>
            <li>Ranch home step-ladder accessible repairs</li>
            <li>Senior-friendly stair safety upgrades</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            All stair repairs are performed with care to protect surrounding surfaces and ensure long-lasting durability. We make your stairs safe, functional, and visually appealing while maintaining compliance with senior-friendly standards.
          </p>
        </section>

        {/* Service Areas */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Stair Repair Services Across Western New York</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/cities/buffalo/stair-repair-buffalo-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo Stair Repairs</h3>
              <p className="text-gray-600">Expert stair repairs for ranch homes in Buffalo. Step-ladder accessible, senior-friendly, CAPS certified.</p>
            </Link>
            <Link to="/cities/amherst/stair-repair-amherst-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amherst Stair Repairs</h3>
              <p className="text-gray-600">Reliable, safe stair repair services for ranch homes. We focus on senior safety and structural integrity.</p>
            </Link>
            <Link to="/cities/tonawanda/stair-repair-tonawanda-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tonawanda Stair Repairs</h3>
              <p className="text-gray-600">Ranch home stair repair specialists. Step-ladder accessible, CAPS-certified for seniors, 25+ years experience.</p>
            </Link>
            <Link to="/cities/kenmore/stair-repair-kenmore-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kenmore Stair Repairs</h3>
              <p className="text-gray-600">Comprehensive stair repair solutions for ranch homes. Safety, longevity, and senior-friendly service guaranteed.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}