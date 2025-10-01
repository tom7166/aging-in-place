import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CircleCheck as CheckCircle, Trash2, Clock, Shield, Chrome as Home, Truck } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './bathroom-remodeling-schema.json';

export default function BathroomRemodeling() {
  return (
    <>
      <SEOHelmet
        title="Bathroom Remodeling Buffalo NY | Expert Renovation Services"
        description="Professional bathroom remodeling services in Buffalo, Amherst, Tonawanda & Kenmore NY. Full renovations, design, installation & upgrades. Call (716) 533-7108 for your free estimate."
        keywords="bathroom remodeling Buffalo NY, bathroom renovation Western New York, master bathroom remodel, small bathroom renovation, bathroom design Buffalo, bathtub replacement Tonawanda, shower installation Kenmore"
        canonicalUrl="https://aaronmichaelservices.com/services/bathroom-remodeling"
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
                Professional Bathroom Remodeling in Buffalo & Western New York
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Transform Your Bathroom with Expert Renovations, Design & Installation
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
                Licensed & Insured | Custom Designs | High-Quality Materials | Same-Day Consultations
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At <strong>Aaron Michael Services</strong>, we provide top-tier <strong>bathroom remodeling</strong> and renovation services across <strong>Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York</strong>. Whether you’re upgrading a small guest bathroom, remodeling a master suite, or modernizing a dated bathroom for resale value, our team delivers custom solutions that combine style, functionality, and durability.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our full-service approach to bathroom remodeling includes design consultation, material selection, plumbing upgrades, fixture installation, tile work, flooring, lighting, and finishing touches. We pride ourselves on precision, reliability, and exceptional craftsmanship, ensuring every project exceeds expectations.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Aaron Michael Services for Bathroom Remodeling
            </h2>
            <div className="space-y-6 prose prose-lg text-gray-700">
              <p>
                <strong>Expert Design Consultation:</strong> Our team works with you to create a bathroom that matches your vision and lifestyle. From layout optimization to selecting finishes and fixtures, we guide you through every step.
              </p>
              <p>
                <strong>Licensed & Insured Professionals:</strong> All remodeling work is performed by fully licensed and insured contractors. Safety, quality, and professionalism are guaranteed for every project.
              </p>
              <p>
                <strong>Local Knowledge:</strong> We understand Western New York properties, weather conditions, and building codes, ensuring your remodel meets all local standards and functions perfectly for years to come.
              </p>
              <p>
                <strong>High-Quality Materials:</strong> We source the best materials for durability and aesthetics, from luxurious tile and stone to modern vanities, countertops, and fixtures.
              </p>
              <p>
                <strong>Efficient & Reliable:</strong> Remodeling can disrupt your daily routine, which is why we plan each project meticulously, minimize downtime, and complete work efficiently without compromising quality.
              </p>
            </div>
          </div>
        </section>

        {/* Full Service Offerings */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Comprehensive Bathroom Remodeling Services
          </h2>

          {/* Master Bathroom Remodel */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Master Bathroom Remodel</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your master bathroom should be a retreat. We specialize in full-scale remodels that enhance space, improve functionality, and elevate aesthetics. From walk-in showers and soaking tubs to double vanities and custom cabinetry, every detail is tailored to your preferences.
            </p>
          </div>

          {/* Small Bathroom Renovation */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Bathroom Renovation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Even compact bathrooms deserve style and efficiency. Our small bathroom remodels maximize storage, lighting, and functionality while creating a fresh, modern look. We handle layout adjustments, vanity upgrades, and smart storage solutions.
            </p>
          </div>

          {/* Shower & Bathtub Installation */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Shower & Bathtub Installation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              From luxurious soaking tubs to modern walk-in showers, we provide professional installation of all types of bathtubs and shower systems. Our team ensures waterproofing, proper plumbing, and flawless finishes for long-lasting use.
            </p>
          </div>

          {/* Tile & Flooring */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tile & Flooring</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tile and flooring are central to the look and function of your bathroom. We install ceramic, porcelain, natural stone, and luxury vinyl flooring, offering durable and stylish solutions that stand up to moisture and wear.
            </p>
          </div>

          {/* Plumbing & Fixture Upgrades */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Plumbing & Fixture Upgrades</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our remodeling services include upgrading sinks, faucets, showers, toilets, and water-efficient fixtures. Proper installation and code compliance are guaranteed, enhancing functionality while reducing water consumption.
            </p>
          </div>

          {/* Lighting & Ventilation */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lighting & Ventilation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Proper lighting and ventilation are essential for comfort and safety. We install modern lighting solutions, exhaust fans, and ventilation systems that improve air quality, reduce mold risk, and enhance the ambiance.
            </p>
          </div>

          {/* Custom Vanities & Storage */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Vanities & Storage</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Maximize your space with custom vanities, cabinets, and storage solutions designed for your specific needs. We focus on functionality and style, providing efficient organization without sacrificing aesthetics.
            </p>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Bathroom Remodeling Across Western New York
            </h2>
            <div className="space-y-6 prose prose-lg text-gray-700">

              <p>
                <strong>Buffalo, NY:</strong> From Elmwood Village to Allentown, we remodel bathrooms in all Buffalo neighborhoods. Our team is familiar with older homes, modern condominiums, and everything in between.
              </p>

              <p>
                <strong>Amherst, NY:</strong> We provide bathroom renovations that elevate style and functionality for residential properties in Amherst, ensuring long-lasting quality and compliance with local codes.
              </p>

              <p>
                <strong>Tonawanda & North Tonawanda, NY:</strong> Our team handles complete bathroom remodels, including plumbing, fixtures, and design enhancements, across Tonawanda and North Tonawanda.
              </p>

              <p>
                <strong>Kenmore, NY:</strong> Kenmore residents trust us for custom bathroom designs, high-quality installations, and expert craftsmanship, delivering beautiful, functional bathrooms tailored to every home.
              </p>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8 prose prose-lg text-gray-700">

            <div>
              <h3 className="text-xl font-bold">How long does a bathroom remodel take?</h3>
              <p>Bathroom remodel timelines vary depending on size and complexity, typically ranging from 2-6 weeks. We provide a detailed schedule during the planning stage.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Do you handle design and material selection?</h3>
              <p>Yes, we offer full design consultation, helping clients select tiles, fixtures, vanities, lighting, and flooring to achieve the desired aesthetic and functionality.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Are your remodels licensed and insured?</h3>
              <p>All remodeling work is completed by fully licensed and insured professionals, ensuring quality, safety, and compliance with local building codes.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Can you remodel small bathrooms?</h3>
              <p>Absolutely. We specialize in maximizing space, storage, and design for compact bathrooms, delivering a modern, functional, and stylish result.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Do you provide eco-friendly options?</h3>
              <p>Yes, we offer energy-efficient fixtures, water-saving toilets and faucets, and environmentally conscious materials whenever possible.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">What areas do you service?</h3>
              <p>We service Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York for full bathroom remodels and renovations.</p>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Bathroom?</h2>
            <p className="text-lg mb-8">Call (716) 533-7108 today or request a free estimate online. Expert bathroom remodeling services across Western New York.</p>
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