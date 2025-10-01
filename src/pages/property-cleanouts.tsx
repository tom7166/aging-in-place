import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CircleCheck as CheckCircle, Truck, Shield, Home } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './property-cleanouts-schema.json';

export default function PropertyCleanouts() {
  return (
    <>
      <SEOHelmet
        title="Property Cleanouts Buffalo NY | Aaron Michael Services"
        description="Complete property cleanouts in Buffalo, Amherst, Tonawanda & Kenmore. Estate, rental, foreclosure & commercial cleanouts. Fast, reliable removal. Call (716) 575-2626."
        keywords="property cleanouts Buffalo NY, estate cleanouts Western New York, rental cleanouts, foreclosure cleanouts Buffalo, commercial cleanout services, debris removal Buffalo NY"
        canonicalUrl="https://aaronmichaelservices.com/services/property-cleanouts"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Hero / CTA */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Property Cleanouts in Buffalo & Western New York
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Estate, rental, foreclosure & commercial cleanouts. Fast, reliable, and environmentally responsible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:7165337108"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
              >
                <Phone className="h-6 w-6" /> Call (716) 533-7108
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors border-2 border-white"
              >
                Free Estimate
              </Link>
            </div>
            <p className="mt-6 text-gray-100 text-lg">
              Serving Buffalo, Amherst, Tonawanda, Kenmore & all of Western New York
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Aaron Michael Services provides complete property cleanouts throughout <strong>Buffalo, Amherst, Tonawanda, Kenmore</strong>, and Western New York. We specialize in estate, rental, foreclosure, and commercial cleanouts, handling every detail with speed, respect, and environmental responsibility.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unlike general junk removal, our team systematically clears every room, sorts items for donation or recycling, and prepares properties for their next use. We ensure spaces are ready for renovation, sale, or new tenants efficiently and professionally.
            </p>
          </div>
        </section>

        {/* Core Services */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Property Cleanout Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Estate & Foreclosure Cleanouts</h3>
                <p className="text-blue-50 mb-4">
                  Sensitive and efficient clearing of estate or foreclosed properties, including valuables review and donation.
                </p>
                <ul className="space-y-2 text-blue-50 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-0.5" /> Full property clearing</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-0.5" /> Donation & recycling coordination</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-0.5" /> Documentation for executors</li>
                </ul>
              </div>
              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Rental & Commercial Turnovers</h3>
                <p className="text-blue-50 mb-4">
                  Quick and thorough cleanouts to minimize vacancy periods and prepare spaces for new occupants.
                </p>
                <ul className="space-y-2 text-blue-50 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-0.5" /> Abandoned property removal</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-0.5" /> Fast, reliable service</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-0.5" /> Minimal disruption</li>
                </ul>
              </div>
              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Debris & Appliance Removal</h3>
                <p className="text-blue-50 mb-4">
                  Removal of all unwanted materials, appliances, and construction debris with proper handling of recyclables and hazardous items.
                </p>
                <ul className="space-y-2 text-blue-50 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-0.5" /> Appliances & electronics</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-0.5" /> Yard waste & outdoor debris</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-0.5" /> General household items</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Property Cleanout Process
          </h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center">1</span>
                Assessment & Planning
              </h3>
              <p className="text-gray-700 ml-13">
                On-site walkthrough to evaluate scope, volume, and special handling requirements. We provide a transparent, detailed estimate.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center">2</span>
                Systematic Clearing
              </h3>
              <p className="text-gray-700 ml-13">
                Room-by-room removal of all contents, including appliances, furniture, and debris, with care to protect property surfaces.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center">3</span>
                Sorting & Disposal
              </h3>
              <p className="text-gray-700 ml-13">
                Items are sorted for donation, recycling, or proper disposal, with environmentally responsible practices and documentation for donations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center">4</span>
                Final Sweep & Handoff
              </h3>
              <p className="text-gray-700 ml-13">
                Full walkthrough to ensure the property is clear and ready for renovation, sale, or tenancy. Before/after photos provided.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Serving Buffalo & Western New York
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Link to="/cities/buffalo" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo</h3>
              </Link>
              <Link to="/cities/amherst" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Amherst</h3>
              </Link>
              <Link to="/cities/tonawanda" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tonawanda</h3>
              </Link>
              <Link to="/cities/kenmore" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kenmore</h3>
              </Link>
            </div>
            <p className="text-gray-700 text-center">
              We also serve Cheektowaga, West Seneca, Lancaster, Depew, Williamsville, Hamburg, Orchard Park, East Amherst, Clarence, and all surrounding Western New York communities.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does a property cleanout cost?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Costs vary based on size, volume, and complexity. Residential cleanouts typically range from $1