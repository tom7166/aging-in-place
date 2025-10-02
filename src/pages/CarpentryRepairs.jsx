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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            Aaron Michael Services specializes in <strong>carpentry repairs</strong> for ranch homes across Buffalo, Amherst, Tonawanda, Kenmore, and the greater Western New York area. Our team is CAPS-certified, experienced in step-ladder work only, and fully committed to safe, precise, and durable results for senior homeowners and families.
          </p>
          <p className="mb-6">
            From door and window frame repairs to shelving, cabinetry, and minor structural adjustments, we approach every project with attention to detail and craftsmanship. Our focus is on keeping your home safe, functional, and aesthetically pleasing. Each repair is scoped for safety, efficiency, and long-lasting durability.
          </p>
          <p className="mb-6">
            We understand that ranch homes have unique requirements for accessibility and structural layout. That’s why all our projects are designed to be step-ladder accessible, ensuring senior safety and compliance with insurance requirements. Our CAPS certification further guarantees that every repair is performed with the highest standards in mind.
          </p>
          <p className="mb-6">
            Whether you need <Link to="/carpentry">interior carpentry repairs</Link>, <Link to="/general-carpentry">custom woodwork fixes</Link>, or <Link to="/handyman">other home improvement solutions</Link>, Aaron Michael Services has the knowledge, tools, and expertise to deliver exceptional results.
          </p>
          <p className="mb-6">
            Every repair project begins with a careful assessment of your home’s condition. We evaluate the woodwork, cabinetry, and structural components to determine the best approach, materials, and techniques for a long-lasting solution. Our goal is to restore your home’s carpentry to its optimal condition while maintaining the ranch-style charm.
          </p>

          <p className="mb-6">
            Homeowners in Buffalo often face challenges such as aged cabinetry, warped door frames, or minor structural wear. In Amherst, Tonawanda, and Kenmore, our team addresses similar issues while ensuring that repairs are compliant with safety standards and step-ladder accessibility. No matter the scale, we treat every home as if it were our own.
          </p>

          <p className="mb-6">
            Our carpentry repairs include refinishing, repairing cracks or splits, replacing damaged boards, and adjusting frames to ensure doors and windows function properly. We also specialize in repairing shelving and cabinetry that may have worn over time, providing both functional and aesthetic restoration.
          </p>

          <p className="mb-6">
            For seniors and homeowners with mobility concerns, our step-ladder accessible approach ensures that repairs can be done safely without compromising quality or efficiency. This method reduces risk while maintaining precision in every cut, joint, and installation.
          </p>

          <p className="mb-6">
            Over our 25+ years of service, we’ve completed thousands of carpentry repair projects across Buffalo and Western New York. Our experience has allowed us to develop techniques that not only repair but also enhance the longevity of your home’s woodwork. We pride ourselves on leaving each home neat, organized, and structurally sound.
          </p>

          <p className="mb-6">
            Choosing Aaron Michael Services for your carpentry repairs means selecting a team that prioritizes <Link to="/safety">senior-friendly practices</Link>, adherence to step-ladder accessibility, and precise workmanship. Whether it’s a small interior repair or a full-scale structural adjustment, our commitment remains consistent: safe, reliable, and high-quality results.
          </p>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Carpentry Repair Services</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><Link to="/carpentry-repairs#door-frame-repair">Interior door and frame repair</Link> – precise adjustments and replacements to keep doors functional and safe.</li>
            <li><Link to="/carpentry-repairs#window-trim-repair">Window frame and trim repairs</Link> – restoring integrity and appearance to your home’s windows.</li>
            <li><Link to="/carpentry-repairs#cabinet-repairs">Step-ladder accessible shelving & cabinetry repairs</Link> – minor to major repairs with safety-first approach.</li>
            <li><Link to="/carpentry-repairs#structural-adjustments">Ranch home minor structural carpentry adjustments</Link> – maintain stability and charm without compromising safety.</li>
            <li><Link to="/carpentry-repairs#custom-woodwork">Custom woodwork repair and refinishing</Link> – tailored solutions for worn or damaged cabinetry and trim.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our repair process emphasizes precision, safety, and cleanliness. We take care to protect surrounding surfaces and ensure minimal disruption to your home. Every project, no matter how small, receives the same attention to detail that has made us a trusted name in Buffalo and Western New York.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Homeowners seeking comprehensive solutions will find that our team can integrate repairs with other services such as <Link to="/flooring">flooring installation</Link>, <Link to="/general-carpentry">general carpentry upgrades</Link>, and <Link to="/handyman">home maintenance services</Link> — creating a seamless, fully restored living space.
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