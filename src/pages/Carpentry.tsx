import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './carpentry-schema.json';

export default function Carpentry() {
  return (
    <>
      <SEOHelmet
        title="Carpentry Services Buffalo NY | Aaron Michael Services"
        description="Expert carpentry services for ranch homes in Buffalo, Amherst, Tonawanda & Kenmore NY. Repairs, installations, custom projects. CAPS-certified, 25+ years experience. Call (716) 533-7108."
        keywords="carpentry Buffalo NY, ranch home carpentry Amherst, custom carpentry Tonawanda, home repairs Kenmore, step-ladder accessible carpentry Buffalo"
        canonical="https://www.aaronmichaelservices.com/carpentry"
        schema={schemaData}
      />

      <main className="service-page carpentry">
        {/* HERO */}
        <section className="hero bg-gray-100 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Professional Carpentry Services in Buffalo, NY</h1>
          <p className="text-lg mb-6">
            Repair, install, and customize carpentry solutions for ranch homes across Western New York.
          </p>
          <a
            href="tel:7165337108"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700"
          >
            Call Now: (716) 533-7108
          </a>
        </section>

        {/* INTRO */}
        <section className="intro py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Expert Carpentry for Your Ranch Home</h2>
          <p className="mb-4">
            Aaron Michael Services provides professional carpentry solutions for ranch homes in Buffalo and Western New York. Whether it's repairs, custom projects, or structural improvements, our team ensures safe, precise, and durable results.
          </p>
          <p className="mb-4">
            All work is step-ladder accessible, adhering to our insurance restrictions, and CAPS-certified to prioritize senior safety. With over 25 years of experience, we know how to get the job done right, the first time.
          </p>
        </section>

        {/* SERVICES */}
        <section className="services bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Carpentry Services Include</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg space-y-3">
            <li>Repair and replacement of damaged woodwork</li>
            <li>Installation of new cabinetry, shelving, and custom units</li>
            <li>Structural reinforcements for walls, doors, and trim</li>
            <li>Custom carpentry solutions for ranch homes</li>
            <li>Step-ladder accessible projects only (insurance compliant)</li>
            <li>Interior & exterior woodwork for safe and aesthetic results</li>
          </ul>
        </section>

        {/* WHY US */}
        <section className="why-us py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Aaron Michael Services?</h2>
          <p className="mb-4">
            We specialize in safe, reliable, and efficient carpentry services for ranch homeowners. All projects are step-ladder accessible, adhering to insurance restrictions, and performed with precision by a team with over 25 years of experience.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>25+ years of carpentry experience</li>
            <li>CAPS-certified for senior safety</li>
            <li>Step-ladder accessible work only</li>
            <li>Custom solutions tailored to your home</li>
            <li>Expert repairs and installations for lasting results</li>
            <li>Serving Buffalo & Western New York ranch homes</li>
          </ul>
        </section>

        {/* SERVICE AREAS */}
        <section className="service-areas bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg">
            <div>
              <h3 className="font-semibold">Buffalo, NY</h3>
              <p>Expert carpentry tailored to ranch-style homes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Amherst, NY</h3>
              <p>Repairs, installations, and custom woodwork solutions.</p>
            </div>
            <div>
              <h3 className="font-semibold">Tonawanda, NY</h3>
              <p>Durable and precise carpentry services for home improvement.</p>
            </div>
            <div>
              <h3 className="font-semibold">Kenmore, NY</h3>
              <p>Step-ladder accessible projects performed safely and efficiently.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faqs py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Carpentry FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Do you handle custom carpentry projects?</h3>
              <p>Yes, we can design and build custom woodwork to enhance your ranch home.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can you repair damaged woodwork?</h3>
              <p>Absolutely, we specialize in precise and lasting wood repairs for homes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Are your services safe for seniors?</h3>
              <p>Yes, all work is CAPS-certified for senior safety and step-ladder accessible.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you install shelving or cabinetry?</h3>
              <p>Yes, we provide installation of shelves, cabinets, and other interior woodwork.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you work on exterior wood projects?</h3>
              <p>Yes, we can repair or install exterior wood trim and features within step-ladder reach.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta bg-blue-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Professional Carpentry for Your Ranch Home</h2>
          <p className="mb-6">Reliable, safe, and precise carpentry solutions for Buffalo & Western New York.</p>
          <a
            href="tel:7165337108"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-100"
          >
            Call (716) 533-7108
          </a>
        </section>
      </main>
    </>
  );
}