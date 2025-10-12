import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CircleCheck as CheckCircle, Trash2, Clock, Shield, Chrome as Home, Truck } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './investor-services-schema.json';

export default function InvestorServices() {
  return (
    <>
      <SEOHelmet
        title="Investor Property Services Buffalo NY | Renovation & Cleanouts"
        description="Professional investor property services in Buffalo, Amherst, Tonawanda, Kenmore & Western New York. Complete renovation, cleanouts, and turnkey solutions for real estate investors. Call (716) 533-7108."
        keywords="investor property services Buffalo NY, investment property renovations, real estate investor services, rental property upgrades Western New York, foreclosure cleanout services, flip property remodeling"
        canonicalUrl="https://aaronmichaelservices.com/services/investor-services"
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
                Investor Property Services in Buffalo & Western New York
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Comprehensive Renovation, Cleanouts & Turnkey Solutions for Real Estate Investors
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
                Fast Turnaround | Licensed & Insured | Eco-Friendly Disposal
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Aaron Michael Services specializes in investor property solutions across <strong>Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York</strong>. Real estate investors trust us for full-service renovation, property cleanouts, and turnkey solutions designed to maximize property value and minimize vacancy time. Whether you're flipping homes, managing rental units, or handling distressed properties, our team provides efficient, reliable services that keep your investments moving forward.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every investor project is unique. We understand that timing is critical when preparing properties for resale or rent. Our professionals coordinate all aspects of your project, including demolition, renovation, repairs, and final cleanouts. We work closely with contractors, inspectors, and vendors to ensure your property is investor-ready, saving you time, money, and stress.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              From small upgrades like fresh paint and flooring to major overhauls of kitchens, bathrooms, and exterior spaces, Aaron Michael Services provides customized solutions for investors of all types. We combine craftsmanship, local expertise, and a deep understanding of Western New York real estate markets to deliver superior results that appeal to buyers and tenants alike.
            </p>
          </div>
        </section>

        {/* Investor Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Comprehensive Investor Property Services
          </h2>
          <div className="prose prose-lg max-w-none mb-8 text-gray-700">
            <p>
              Our investor services are designed to simplify property management, enhance property value, and reduce time on market. We offer:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Property Cleanouts:</strong> Complete clearing of estates, foreclosures, rental turnovers, and commercial spaces, with sorting for donation, recycling, and responsible disposal.</li>
              <li><strong>Interior & Exterior Renovations:</strong> Kitchen and bathroom remodeling, flooring installation, painting, and exterior upgrades for curb appeal.</li>
              <li><strong>Emergency Repairs:</strong> Fast solutions for plumbing, electrical, roofing, HVAC, and structural issues to keep investor projects on schedule.</li>
              <li><strong>Turnkey Solutions:</strong> Fully coordinated renovations and cleanouts to deliver move-in or resale ready properties.</li>
              <li><strong>Project Management:</strong> We coordinate contractors, manage timelines, inspections, and all aspects of your investor project from start to finish.</li>
            </ul>
            <p>
              With Aaron Michael Services, investors gain a local partner who understands the nuances of Buffalo and Western New York properties, zoning, disposal regulations, and market trends. Our goal is to provide reliable, fast, and high-quality services that allow investors to maximize ROI and keep properties moving.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Real Estate Investors Trust Aaron Michael Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
              <p>
                We understand timing is everything in real estate. Our team ensures investor projects are completed efficiently without compromising quality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
              <p>
                With deep knowledge of Buffalo and Western New York properties, weather challenges, and local regulations, we navigate investor projects smoothly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p>
                All work is completed by licensed and insured professionals, providing peace of mind for investors handling multiple properties.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Cost-Effective Solutions</h3>
              <p>
                We optimize resources, materials, and labor to keep renovation and cleanout costs within budget while maintaining top-quality results.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Investor Services Across Western New York
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Aaron Michael Services provides comprehensive investor property services throughout the Buffalo-Niagara region. Our local expertise ensures compliance, efficiency, and superior results for your investment properties.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link to="/cities/buffalo/investor-services-buffalo-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo Investor Services</h3>
              <p className="text-gray-600">
                Comprehensive property renovations, cleanouts, and turnkey solutions tailored for Buffalo real estate investors. Maximize ROI and minimize downtime with our professional team.
              </p>
            </Link>
            <Link to="/cities/amherst/investor-services-amherst-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amherst Investor Services</h3>
              <p className="text-gray-600">
                Professional investor property solutions including cleanouts, remodeling, and project management for Amherst real estate investors and landlords.
              </p>
            </Link>
            <Link to="/cities/tonawanda/investor-services-tonawanda-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tonawanda Investor Services</h3>
              <p className="text-gray-600">
                Fast, reliable property renovation and cleanout services for investors in Tonawanda. From flips to rental turnovers, we handle it all with expertise and care.
              </p>
            </Link>
            <Link to="/cities/kenmore/investor-services-kenmore-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kenmore Investor Services</h3>
              <p className="text-gray-600">
                Turnkey property solutions for Kenmore investors, including cleanouts, renovations, and project management for residential and commercial properties.
              </p>
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Investor FAQs</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <h3>Do you handle investor properties under foreclosure?</h3>
            <p>Yes, we specialize in foreclosure cleanouts and renovations to make properties ready for resale or rental quickly and efficiently.</p>

            <h3>How quickly can you complete a property turnaround?</h3>
            <p>Turnaround times vary based on the scope of work, but our team prioritizes efficiency to minimize vacancy time while maintaining high-quality results.</p>

            <h3>Do you provide before-and-after property documentation?</h3>
            <p>Absolutely. We document all work for investors, including photos and reports, ensuring transparency and accountability for resale or tenant purposes.</p>

            <h3>Can you coordinate contractors for large renovation projects?</h3>
            <p>Yes, we manage all aspects of renovation projects, coordinating licensed contractors, scheduling inspections, and ensuring timelines are met for investor properties.</p>
          </div>
        </section>
      </div>
    </>
  );
}