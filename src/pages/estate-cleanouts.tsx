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
        description="Professional property cleanout services in Buffalo, Amherst, Tonawanda & Kenmore NY. Full estate, rental, foreclosure & commercial cleanouts. Fast, reliable removal. Call (716) 533-7108."
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
              At <strong>Aaron Michael Services</strong>, we specialize in complete property cleanouts throughout <strong>Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York</strong>. From residential estates to commercial buildings, our professional team ensures that every cleanout is thorough, efficient, and handled with care. We understand that each property presents unique challenges, which is why we tailor our approach to meet the specific needs of each client.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Property cleanouts go far beyond simply hauling away unwanted items. Our team meticulously sorts items for donation, recycling, and proper disposal, minimizing waste while maximizing value recovery. Whether you are managing an estate, preparing a foreclosure, or turning over a rental property, we ensure a seamless, stress-free experience. With years of experience serving Western New York property owners, real estate professionals, and property managers, we pride ourselves on professionalism, reliability, and eco-conscious practices.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Aaron Michael Services for Property Cleanouts
            </h2>
            <div className="space-y-6 prose prose-lg text-gray-700">
              <p>
                <strong>Local Expertise:</strong> Our team knows Western New York homes and commercial properties inside and out. We navigate Buffalo, Amherst, Tonawanda, Kenmore, and surrounding areas with ease, understanding local property layouts, zoning regulations, and disposal requirements.
              </p>
              <p>
                <strong>Licensed & Insured:</strong> Safety and security are our top priorities. We are fully licensed and insured, ensuring peace of mind during every property cleanout project. No surprises, no liability concerns, just professional service.
              </p>
              <p>
                <strong>Eco-Friendly Disposal:</strong> We take sustainability seriously. Items that can be recycled or donated are carefully separated from debris, minimizing environmental impact while helping the community.
              </p>
              <p>
                <strong>Efficient & Thorough:</strong> From attic to basement, garage to yard, no space is overlooked. Our systematic approach ensures nothing is left behind, and we complete each cleanout efficiently without sacrificing attention to detail.
              </p>
              <p>
                <strong>Same-Day Service:</strong> In urgent situations, we offer same-day cleanouts to help you meet deadlines and keep properties ready for sale, lease, or occupancy.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Comprehensive Property Cleanout Services
          </h2>

          {/* Estate Cleanouts */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Estate Cleanouts</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Handling the property of a loved one can be emotionally taxing. Our estate cleanout services relieve you of the stress by professionally removing unwanted items while respecting valuable belongings. We work closely with families, executors, and estate attorneys to ensure all property is managed carefully. Items suitable for donation or resale are separated from debris, maximizing value recovery and reducing waste. From small homes in Kenmore to large estates in Amherst, we provide complete estate cleanout solutions.
            </p>
          </div>

          {/* Rental Property Turnover */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rental Property Turnover</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Landlords and property managers often face tight deadlines when preparing rental units for new tenants. Our team efficiently clears furniture, appliances, trash, and debris, allowing you to minimize vacancy and maximize revenue. We understand Western New York property layouts, including older homes with unique challenges, and ensure the property is ready for inspections, maintenance, or new occupancy.
            </p>
          </div>

          {/* Foreclosure Cleanouts */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Foreclosure Cleanouts</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Foreclosed properties require a meticulous approach to remove leftover belongings, debris, and potential hazards. Our foreclosure cleanout services in Buffalo and surrounding areas are designed to meet real estate requirements quickly and efficiently. We help banks, realtors, and investors restore the property to a clean, market-ready state while adhering to safety standards and disposal regulations.
            </p>
          </div>

          {/* Commercial Cleanouts */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Cleanouts</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Businesses, warehouses, and office buildings can accumulate unwanted furniture, equipment, and general debris over time. Our commercial cleanout services remove clutter, making spaces ready for renovations, new tenants, or efficient operation. We handle all types of commercial properties across Buffalo, Tonawanda, and Amherst, providing responsible disposal and maximizing efficiency.
            </p>
          </div>

          {/* Junk Removal & Debris Hauling */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Junk Removal & Debris Hauling</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you’re renovating your home or clearing your yard, our junk removal and debris hauling services cover every need. We remove unwanted items of all sizes, safely and efficiently. Our team is trained to handle heavy lifting, hazardous materials, and large volumes, ensuring that your property is left spotless.
            </p>
          </div>
        </section>

        {/* Service Areas Expanded */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Serving Western New York Communities
            </h2>
            <div className="space-y-6 prose prose-lg text-gray-700">

              <p>
                <strong>Buffalo, NY:</strong> From Elmwood Village to Allentown, our Buffalo cleanout services address the unique needs of older homes, apartments, and commercial buildings. We are familiar with local property layouts, city ordinances, and disposal requirements, making the process seamless.
              </p>

              <p>
                <strong>Amherst, NY:</strong> In Amherst, we handle residential estates, rental turnovers, and commercial cleanouts. Our team is experienced with homes built in different eras, providing careful handling of belongings and debris for responsible disposal.
              </p>

              <p>
                <strong>Tonawanda & North Tonawanda, NY:</strong> Our local knowledge allows us to quickly navigate residential neighborhoods and commercial zones. We provide timely and thorough cleanouts for foreclosures, estates, and property renovations in the Tonawandas.
              </p>

              <p>
                <strong>Kenmore, NY:</strong> Kenmore residents rely on our professional cleanout services for complete property clearing. We handle everything from small apartments to large family homes, ensuring each property is left clean, safe, and ready for the next chapter.
              </p>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8 prose prose-lg text-gray-700">

            <div>
              <h3 className="text-xl font-bold">What areas do you serve?</h3>
              <p>We provide property cleanout services throughout Buffalo, Amherst, Tonawanda, Kenmore, and the surrounding Western New York region. No property is too small or too large.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">How quickly can you perform a cleanout?</h3>
              <p>Many projects can be completed the same day, depending on size and complexity. Contact us for scheduling details, and we will work to meet your timeline.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Do you handle hazardous materials?</h3>
              <p>We follow local regulations and safely dispose of hazardous materials when necessary. Let us know in advance if items like paint, chemicals, or electronics need special handling.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Can you donate items from cleanouts?</h3>
              <p>Absolutely. We carefully sort items for donation to local charities, ensuring valuable goods benefit the community while reducing waste.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Are your services licensed and insured?</h3>
              <p>Yes, our team is fully licensed and insured for your protection. Safety, accountability, and reliability are top priorities for all projects.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">What types of properties do you service?</h3>
              <p>We handle residential homes, apartments, rental units, foreclosures, commercial buildings, and construction sites. Every cleanout is tailored to the property type.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">How do you charge for cleanouts?</h3>
              <p>Our pricing is based on volume, complexity, and specific services requested. Contact us for a free estimate to get a clear, upfront quote.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">What makes Aaron Michael Services different?</h3>
              <p>We combine local expertise, professional handling, eco-conscious disposal, and fast, reliable service. Our team treats every property with care and respect, ensuring client satisfaction every time.</p>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for a Property Cleanout?</h2>
            <p className="text-lg mb-8">Call (716) 533-7108 today or request a free estimate online. Fast, professional, and eco-friendly service across Western New York.</p>
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
          </div>
        </section>

      </div>
    </>
  );
}