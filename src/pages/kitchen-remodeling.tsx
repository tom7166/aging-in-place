import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CircleCheck as CheckCircle, Trash2, Clock, Shield, Chrome as Home, Truck } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './kitchen-remodeling-schema.json';

export default function KitchenRemodeling() {
  return (
    <>
      <SEOHelmet
        title="Kitchen Remodeling Buffalo NY | Custom Kitchen Renovation Services"
        description="Top-rated kitchen remodeling services in Buffalo, Amherst, Tonawanda & Kenmore NY. Custom design, cabinet installation, countertops, flooring, and complete renovations. Call (716) 533-7108 today!"
        keywords="kitchen remodeling Buffalo NY, kitchen renovation Western New York, cabinet installation Buffalo, countertop replacement, custom kitchen design, backsplash installation, kitchen flooring, appliance installation Buffalo NY"
        canonicalUrl="https://aaronmichaelservices.com/services/kitchen-remodeling"
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
                Expert Kitchen Remodeling Services in Buffalo & Western New York
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Custom Designs, Cabinetry, Countertops & Complete Kitchen Renovations
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
                Licensed & Insured | Custom Designs | Eco-Friendly Materials
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Transform your kitchen into the heart of your home with Aaron Michael Services, the leading <strong>kitchen remodeling experts in Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York</strong>. Whether you’re looking for a complete renovation, a modern upgrade, or efficient layout redesign, our skilled team delivers custom kitchen solutions that combine style, functionality, and lasting quality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our approach to kitchen remodeling goes beyond simple cosmetic improvements. Every project is carefully planned, including cabinet selection, countertop installation, backsplash design, flooring upgrades, lighting, appliances, and storage solutions. We collaborate closely with homeowners to ensure that every detail—from color schemes to cabinet hardware—reflects their vision while optimizing the kitchen for daily use.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Aaron Michael Services, we understand that a kitchen remodel is a significant investment. That’s why we prioritize transparency, professional craftsmanship, and project management from start to finish. With years of experience serving Western New York homeowners, our team is adept at handling projects of all sizes, from small kitchen upgrades to full-scale renovations.
            </p>
          </div>
        </section>

        {/* Our Kitchen Remodeling Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Kitchen Remodeling Services</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Aaron Michael Services offers a full spectrum of kitchen remodeling services designed to meet your specific needs. Our services include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Custom Cabinet Installation & Refacing:</strong> Upgrade your storage and style with high-quality cabinetry tailored to your space.</li>
              <li><strong>Countertop Replacement:</strong> Choose from granite, quartz, marble, or eco-friendly surfaces for a durable, beautiful finish.</li>
              <li><strong>Backsplash & Tile Installation:</strong> Add elegance and protection with professionally installed backsplash designs.</li>
              <li><strong>Flooring Upgrades:</strong> From hardwood to tile, we create cohesive designs that enhance your kitchen’s functionality and look.</li>
              <li><strong>Lighting & Fixture Upgrades:</strong> Improve ambiance and usability with energy-efficient lighting and stylish fixtures.</li>
              <li><strong>Appliance Installation:</strong> Ensure a seamless integration of new appliances for efficiency and aesthetics.</li>
              <li><strong>Custom Storage & Pantry Solutions:</strong> Maximize space and accessibility with innovative storage designs.</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our remodeling process begins with a thorough consultation, during which we assess your existing kitchen, discuss your goals, and create a tailored design plan. Throughout construction, our team maintains clean and organized work areas, ensuring minimal disruption to your home. By combining expert craftsmanship with high-quality materials, we guarantee a kitchen that is both functional and beautiful for years to come.
            </p>
          </div>
        </section>

        {/* Service Areas */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Kitchen Remodeling Services Across Western New York
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We proudly provide kitchen remodeling services throughout Buffalo, Amherst, Tonawanda, Kenmore, and surrounding areas. Our local expertise ensures that every project complies with regional building codes and maximizes the unique potential of each home.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link to="/cities/buffalo/kitchen-remodeling-buffalo-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo Kitchen Remodeling</h3>
              <p className="text-gray-600">
                Complete kitchen renovations for Buffalo homeowners. From design to installation, we handle every step to create a functional and stylish kitchen tailored to your lifestyle.
              </p>
            </Link>
            <Link to="/cities/amherst/kitchen-remodeling-amherst-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amherst Kitchen Remodeling</h3>
              <p className="text-gray-600">
                Professional kitchen remodels in Amherst, NY. We specialize in cabinet refacing, countertop replacement, flooring upgrades, and custom layouts for small or large kitchens.
              </p>
            </Link>
            <Link to="/cities/tonawanda/kitchen-remodeling-tonawanda-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tonawanda Kitchen Remodeling</h3>
              <p className="text-gray-600">
                Expert kitchen renovations in Tonawanda. Our team delivers modern design, efficient storage solutions, and full-service remodeling for homes of all sizes.
              </p>
            </Link>
            <Link to="/cities/kenmore/kitchen-remodeling-kenmore-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kenmore Kitchen Remodeling</h3>
              <p className="text-gray-600">
                Kenmore kitchen remodel specialists. We combine design expertise, high-quality materials, and professional installation to transform your kitchen into a modern, functional space.
              </p>
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 prose prose-lg max-w-none text-gray-700">
            <div>
              <h3 className="font-bold">How long does a kitchen remodel take?</h3>
              <p>Kitchen remodels typically take 4-8 weeks depending on size, design complexity, and custom features. We provide a detailed project timeline during consultation.</p>
            </div>
            <div>
              <h3 className="font-bold">Do you handle kitchen design and layout?</h3>
              <p>Yes. We offer full design services, helping clients select cabinets, countertops, flooring, lighting, and appliances to achieve a functional and stylish kitchen.</p>
            </div>
            <div>
              <h3 className="font-bold">Are your kitchen remodels licensed and insured?</h3>
              <p>All kitchen remodeling work is performed by licensed and insured professionals, ensuring safety, quality, and compliance with building codes.</p>
            </div>
            <div>
              <h3 className="font-bold">Can you remodel small kitchens?</h3>
              <p>Absolutely. We specialize in maximizing space, storage, and efficiency in small kitchens while creating a modern and functional design.</p>
            </div>
            <div>
              <h3 className="font-bold">Do you offer eco-friendly kitchen options?</h3>
              <p>Yes. We provide sustainable materials, energy-efficient appliances, and environmentally conscious design solutions whenever possible.</p>
            </div>
            <div>
              <h3 className="font-bold">What areas do you service?</h3>
              <p>We provide kitchen remodeling services throughout Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}