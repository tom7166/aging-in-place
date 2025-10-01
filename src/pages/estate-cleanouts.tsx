import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CircleCheck as CheckCircle, Trash2, Clock, Shield, Chrome as Home, Truck } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './property-cleanouts-schema.json';

export default function PropertyCleanouts() {
  return (
    <>
      <SEOHelmet
        title="Property Cleanouts Buffalo NY | Complete Removal Services"
        description="Professional property cleanout services in Buffalo, Amherst, Tonawanda & Kenmore NY. Full estate, rental, foreclosure & commercial cleanouts. Fast, reliable removal. Call (716) 575-2626."
        keywords="property cleanouts Buffalo NY, estate cleanouts Western New York, rental property cleanout, foreclosure cleanout Buffalo, commercial cleanout services, debris removal Buffalo NY"
        canonicalUrl="https://aaronmichaelservices.com/services/property-cleanouts"
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
                Professional Property Cleanout Services in Buffalo & Western New York
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Complete Property Clearing, Debris Removal & Cleanout Solutions
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
                Same-Day Service Available | Licensed & Insured | Eco-Friendly Disposal
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              When you need a property completely cleared and ready for its next chapter, Aaron Michael Services delivers comprehensive property cleanout solutions throughout <strong>Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York</strong>. Whether you're managing an estate settlement, preparing a foreclosure for resale, turning over a rental property, or clearing commercial space, our professional team handles every aspect of property cleanout with efficiency, respect, and environmental responsibility.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Property cleanouts involve much more than simply hauling away unwanted items. Our systematic approach ensures nothing is overlooked—from attic to basement, garage to yard. We carefully sort items for donation, recycling, and proper disposal, maximizing value recovery while minimizing environmental impact. With years of experience serving Western New York property owners, real estate professionals, and property managers, we understand the urgency and sensitivity that different cleanout situations require.
            </p>
          </div>
        </section>

        {/* The rest of your sections go here ... */}

        {/* Service Areas */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Property Cleanout Services Across Western New York
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Aaron Michael Services provides professional property cleanout services throughout the Buffalo-Niagara region. Our local expertise means we understand Western New York properties, weather-related accumulation issues, and regional disposal regulations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link to="/cities/buffalo/remodeling-contractor-buffalo-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo Cleanouts</h3>
              <p className="text-gray-600">
                Complete property clearing services. We provide comprehensive property cleanout services for residential and commercial properties. Whether you're dealing with an estate, foreclosure, eviction, or simply decluttering, our experienced team handles all aspects of removing unwanted items efficiently and respectfully.
              </p>
            </Link>
            <Link to="/cities/amherst/remodeling-contractor-amherst-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amherst Cleanouts</h3>
              <p className="text-gray-600">
                Professional removal specialists. We provide comprehensive property cleanout services for residential and commercial properties. Whether you're dealing with an estate, foreclosure, eviction, or simply decluttering, our experienced team handles all aspects of removing unwanted items efficiently and respectfully.
              </p>
            </Link>
            <Link to="/cities/tonawanda/remodeling-contractor-tonawanda-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tonawanda Cleanouts</h3>
              <p className="text-gray-600">
                Fast property clearing service. We provide comprehensive property cleanout services for residential and commercial properties. Whether you're dealing with an estate, foreclosure, eviction, or simply decluttering, our experienced team handles all aspects of removing unwanted items efficiently and respectfully.
              </p>
            </Link>
            <Link to="/cities/kenmore/remodeling-contractor-kenmore-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kenmore Cleanouts</h3>
              <p className="text-gray-600">
                Comprehensive removal solutions. We provide comprehensive property cleanout services for residential and commercial properties. Whether you're dealing with an estate, foreclosure, eviction, or simply decluttering, our experienced team handles all aspects of removing unwanted items efficiently and respectfully.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}