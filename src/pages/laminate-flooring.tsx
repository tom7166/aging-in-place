import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CircleCheck as CheckCircle, Clock, Shield, Home } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './laminate-flooring-schema.json';

export default function LaminateFlooring() {
  return (
    <>
      <SEOHelmet
        title="Laminate Flooring Buffalo NY | Expert Installation & Repair"
        description="Professional laminate flooring installation, repair, and replacement in Buffalo, Amherst, Tonawanda & Kenmore. CAPS certified, insured, and trusted for over 25 years. Call (716) 533-7108."
        keywords="laminate flooring Buffalo NY, laminate floor repair, laminate installation Buffalo, floor replacement Western New York, laminate contractors Buffalo, Buffalo flooring experts"
        canonicalUrl="https://aaronmichaelservices.com/services/laminate-flooring"
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
                Laminate Flooring Installation & Repair in Buffalo & Western New York
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Durable, Beautiful, and Expertly Installed Laminate Flooring for Your Home
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
                CAPS Certified | Licensed & Insured | Step-Ladder Work Only on Ranch Homes
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Laminate flooring is a cost-effective, durable, and visually appealing solution for homeowners looking to upgrade their flooring without the expense of hardwood. At <strong>Aaron Michael Services</strong>, we specialize in laminate flooring installation, repair, and replacement throughout <strong>Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York</strong>. Our CAPS-certified technicians have over 25 years of hands-on experience installing laminate flooring in ranch-style homes, and we focus exclusively on projects that can be safely completed from a step ladder, ensuring the highest safety standards for our crew and clients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether your existing laminate flooring has worn down, lifted, or been damaged, our team provides expert repairs that restore both beauty and functionality. From single-room upgrades to full-home installations, we handle every aspect of laminate flooring projects with precision, efficiency, and a commitment to your satisfaction.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Laminate Flooring Services</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our comprehensive laminate flooring services are designed to meet every homeowner’s needs in Western New York. Here’s what we offer:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                <strong>Laminate Floor Installation:</strong> We expertly measure, cut, and install laminate planks with precise attention to expansion gaps, transitions, and durability to ensure a flawless finish.
              </li>
              <li>
                <strong>Laminate Floor Repair:</strong> From scratches, dents, and water damage to warped or loose planks, we provide targeted repairs that extend the life of your flooring.
              </li>
              <li>
                <strong>Laminate Floor Replacement:</strong> When your old flooring reaches the end of its life, we remove it safely and install new laminate that enhances your home’s aesthetic and value.
              </li>
              <li>
                <strong>Step-Ladder Safety Installation:</strong> For ranch-style homes, all our laminate work is performed safely from step ladders, in compliance with insurance limitations, ensuring both quality and safety.
              </li>
              <li>
                <strong>Eco-Friendly Disposal:</strong> We responsibly recycle old flooring materials whenever possible to reduce environmental impact.
              </li>
            </ul>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Laminate Flooring?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Laminate flooring has become a popular choice for homeowners in Buffalo and Western New York for good reason. Here are some key benefits:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li><strong>Durability:</strong> Resistant to scratches, dents, and fading, laminate floors maintain their beauty for years even in high-traffic areas.</li>
              <li><strong>Cost-Effective:</strong> Laminate offers the look of hardwood at a fraction of the price.</li>
              <li><strong>Low Maintenance:</strong> Easy to clean and maintain with regular sweeping and damp mopping.</li>
              <li><strong>Variety:</strong> Available in a wide range of colors, textures, and styles to match your home décor.</li>
              <li><strong>Quick Installation:</strong> Our professional team can complete most installations efficiently, minimizing disruption to your daily life.</li>
            </ul>
          </div>
        </section>

        {/* Service Areas */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Laminate Flooring Services Across Western New York</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Aaron Michael Services proudly serves homeowners throughout the Buffalo-Niagara region. Our local expertise ensures laminate flooring installations and repairs are done efficiently, with knowledge of Western New York’s homes, weather challenges, and design preferences.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link to="/cities/buffalo/laminate-flooring-buffalo-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo Laminate Flooring</h3>
              <p className="text-gray-600">Expert installation and repair services for homes across Buffalo. CAPS-certified team ensures quality and safety with every step-ladder project.</p>
            </Link>
            <Link to="/cities/amherst/laminate-flooring-amherst-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amherst Laminate Flooring</h3>
              <p className="text-gray-600">Comprehensive laminate flooring services for residential properties in Amherst. Experienced installers focused on durability and aesthetics.</p>
            </Link>
            <Link to="/cities/tonawanda/laminate-flooring-tonawanda-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tonawanda Laminate Flooring</h3>
              <p className="text-gray-600">Professional laminate flooring installation and repair for Tonawanda homes. Step-ladder friendly, insured, and CAPS-certified.</p>
            </Link>
            <Link to="/cities/kenmore/laminate-flooring-kenmore-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kenmore Laminate Flooring</h3>
              <p className="text-gray-600">Trusted laminate flooring solutions for Kenmore homeowners. Over 25 years of local experience and a commitment to quality craftsmanship.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}