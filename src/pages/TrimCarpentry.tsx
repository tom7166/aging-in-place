import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './trim-carpentry-schema.json';

export default function TrimCarpentry() {
  return (
    <>
      <SEOHelmet
        title="Trim Carpentry Buffalo NY | Aaron Michael Services"
        description="Professional trim carpentry in Buffalo, Amherst, Tonawanda & Kenmore NY. Ranch home specialists, 25+ years experience, CAPS-certified for older homeowners. Call (716) 533-7108."
        keywords="trim carpentry Buffalo NY, crown molding installation Amherst, baseboard repair Tonawanda, window & door trim Kenmore, ranch home carpentry Buffalo"
        canonical="https://www.aaronmichaelservices.com/trim-carpentry"
        schema={schemaData}
      />

      <main className="service-page trim-carpentry">
        {/* HERO */}
        <section className="hero bg-gray-100 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Trim Carpentry Services in Buffalo, NY</h1>
          <p className="text-lg mb-6">
            Expert trim installation, repair, and replacement for ranch homes across Western New York.
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
          <h2 className="text-2xl font-semibold mb-4">Enhance Your Home with Quality Trim</h2>
          <p className="mb-4">
            Trim carpentry adds elegance, functionality, and protection to your home. From baseboards and crown molding to door and window trim, Aaron Michael Services specializes in trim work for ranch homes in Buffalo and Western New York.
          </p>
          <p className="mb-4">
            With over 25 years of experience, our team delivers precise, durable, and aesthetically pleasing results while adhering to CAPS-certified safety standards for older homeowners. All work is step-ladder accessible, in compliance with insurance requirements.
          </p>
        </section>

        {/* SERVICES */}
        <section className="services bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Trim Carpentry Services</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg space-y-3">
            <li>Crown molding installation and repair</li>
            <li>Baseboard and wainscoting repair or replacement</li>
            <li>Door and window trim installation and repair</li>
            <li>Custom carpentry solutions for ranch homes</li>
            <li>Step-ladder accessible work only (insurance compliant)</li>
            <li>High-quality wood, MDF, and composite materials</li>
          </ul>
        </section>

        {/* WHY US */}
        <section className="why-us py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Aaron Michael Services?</h2>
          <p className="mb-4">
            Trim carpentry can transform your home's appearance while protecting walls and surfaces. We specialize in ranch homes and step-ladder accessible repairs, ensuring safe, precise, and professional results.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>25+ years of carpentry experience</li>
            <li>CAPS-certified for senior safety</li>
            <li>Ranch home specialists</li>
            <li>Step-ladder accessible work only</li>
            <li>Fast, reliable service in Buffalo & Western New York</li>
            <li>Custom finishes to match your home's style</li>
          </ul>
        </section>

        {/* SERVICE AREAS */}
        <section className="service-areas bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg">
            <div>
              <h3 className="font-semibold">Buffalo, NY</h3>
              <p>Expert trim carpentry tailored to local ranch homes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Amherst, NY</h3>
              <p>Professional installation and repair of all trim types.</p>
            </div>
            <div>
              <h3 className="font-semibold">Tonawanda, NY</h3>
              <p>Durable, precise trim work with aesthetic appeal.</p>
            </div>
            <div>
              <h3 className="font-semibold">Kenmore, NY</h3>
              <p>Step-ladder accessible, insurance-compliant solutions.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faqs py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Trim Carpentry FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Do you install crown molding?</h3>
              <p>Yes, we install and repair crown molding for ranch homes with precision and style.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can you repair damaged baseboards?</h3>
              <p>Absolutely, we replace or repair baseboards to restore your home’s finished look.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you handle window and door trim?</h3>
              <p>Yes, we repair, replace, and install trim to match your home’s aesthetic and functionality.</p>
            </div>
            <div>
              <h3 className="font-semibold">Are your services safe for seniors?</h3>
              <p>Yes, all work is CAPS-certified for senior safety and step-ladder accessible.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you provide custom carpentry?</h3>
              <p>Yes, we can create custom trim solutions to enhance your ranch home’s appearance.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta bg-blue-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Enhance Your Home with Expert Trim Carpentry</h2>
          <p className="mb-6">Beautiful, precise, and safe trim solutions for your ranch home.</p>
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