import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './window-screen-repair-schema.json';

export default function WindowScreenRepair() {
  return (
    <>
      <SEOHelmet
        title="Window & Screen Repair Buffalo NY | Aaron Michael Services"
        description="Expert window and screen repair in Buffalo, Amherst, Tonawanda & Kenmore NY. Ranch home specialists, 25+ years experience. CAPS-certified for safety. Call (716) 533-7108."
        keywords="window repair Buffalo NY, screen repair Amherst, window replacement Tonawanda, ranch home window services Kenmore, CAPS-certified window repair Buffalo"
        canonical="https://www.aaronmichaelservices.com/window-screen-repair"
        schema={schemaData}
      />

      <main className="service-page window-screen-repair">
        {/* HERO */}
        <section className="hero bg-gray-100 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Window & Screen Repair in Buffalo, NY</h1>
          <p className="text-lg mb-6">
            Professional window and screen repairs, replacements, and upgrades for ranch homes across Western New York.
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
          <h2 className="text-2xl font-semibold mb-4">Protect Your Home & Improve Comfort</h2>
          <p className="mb-4">
            Windows and screens protect your home from weather, pests, and drafts. Damaged or worn components reduce comfort and efficiency. 
            Aaron Michael Services specializes in repairing and replacing windows and screens for ranch homes in Buffalo and Western New York.
          </p>
          <p className="mb-4">
            With over 25 years of experience and CAPS-certified safety practices, we ensure every repair is secure, durable, and accessible for homeowners of all ages.
          </p>
        </section>

        {/* SERVICES */}
        <section className="services bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Window & Screen Services</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg space-y-3">
            <li>Repairing broken window panes and frames</li>
            <li>Replacing damaged screens and screen doors</li>
            <li>Weatherproofing and sealing gaps</li>
            <li>Energy-efficient window upgrades</li>
            <li>Custom carpentry for ranch home windows</li>
            <li>Step-ladder accessible repairs only (insurance compliant)</li>
          </ul>
        </section>

        {/* WHY US */}
        <section className="why-us py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Aaron Michael Services?</h2>
          <p className="mb-4">
            Window and screen issues may seem small, but they impact home comfort, energy efficiency, and safety. Our experienced team provides reliable, step-ladder safe repairs for ranch homes, focusing on older homeowners and accessibility.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>25+ years of hands-on carpentry experience</li>
            <li>CAPS-certified for safety and accessibility</li>
            <li>Ranch home specialists, step-ladder accessible work</li>
            <li>Fast, reliable service in Buffalo & Western New York</li>
            <li>Long-lasting repairs with high-quality materials</li>
          </ul>
        </section>

        {/* SERVICE AREAS */}
        <section className="service-areas bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg">
            <div>
              <h3 className="font-semibold">Buffalo, NY</h3>
              <p>Window and screen repairs designed for local homes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Amherst, NY</h3>
              <p>Reliable, professional window and screen services.</p>
            </div>
            <div>
              <h3 className="font-semibold">Tonawanda, NY</h3>
              <p>Ranch home specialists for all window repairs.</p>
            </div>
            <div>
              <h3 className="font-semibold">Kenmore, NY</h3>
              <p>Energy-efficient and secure window solutions.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faqs py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Window & Screen Repair FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Do you replace broken window panes?</h3>
              <p>Yes, we repair or replace cracked or broken panes to restore safety and insulation.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can you fix torn or damaged screens?</h3>
              <p>Absolutely, we replace or repair window and screen door screens to keep pests out.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you weatherproof windows?</h3>
              <p>Yes, we seal gaps and install weatherstripping to improve comfort and efficiency.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you service older ranch homes?</h3>
              <p>Yes, we specialize in ranch homes and step-ladder accessible repairs only.</p>
            </div>
            <div>
              <h3 className="font-semibold">Are your repairs safe for seniors?</h3>
              <p>Yes, we follow CAPS-certified safety procedures to ensure older adults’ safety.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta bg-blue-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Secure Your Home With Expert Window Repairs</h2>
          <p className="mb-6">Protect your home, improve energy efficiency, and enjoy peace of mind with our window and screen services.</p>
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