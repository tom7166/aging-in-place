import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './interior-door-repair-schema.json';

export default function InteriorDoorRepair() {
  return (
    <>
      <SEOHelmet
        title="Interior Door Repair Buffalo NY | Aaron Michael Services"
        description="Professional interior door repair and replacement in Buffalo, Amherst, Tonawanda & Kenmore NY. Ranch home specialists with 25+ years carpentry experience. Call (716) 533-7108."
        keywords="interior door repair Buffalo NY, door frame repair Amherst, closet door repair Tonawanda, ranch home carpentry Kenmore, door replacement Buffalo"
        canonicalUrl="https://aaronmichaelservices.com/services/interior-door-repair"
        schema={schemaData}
      />

      <main className="service-page interior-door-repair">
        {/* HERO */}
        <section className="hero bg-gray-100 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Interior Door Repair in Buffalo, NY</h1>
          <p className="text-lg mb-6">
            Expert repairs, adjustments, and replacements for bedroom, bathroom, closet, and basement 
            doors in ranch homes across Buffalo and Western New York.
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
          <h2 className="text-2xl font-semibold mb-4">Every Door Should Open & Close Smoothly</h2>
          <p className="mb-4">
            Interior doors get daily use — and when they stick, sag, or refuse to latch properly, 
            it can be frustrating and inconvenient. From squeaky hinges to cracked frames, every 
            problem has a solution.
          </p>
          <p className="mb-4">
            At <strong>Aaron Michael Services</strong>, we’ve spent over <em>25 years in carpentry and 
            home repairs</em>, specializing in ranch homes across Buffalo and Western New York. We fix 
            and replace doors quickly, cleanly, and affordably — always focusing on step-ladder 
            accessible work only, in line with our insurance coverage.
          </p>
        </section>

        {/* SERVICES */}
        <section className="services bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Interior Door Services</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg space-y-3">
            <li>Bedroom and bathroom door repairs</li>
            <li>Closet and bifold door adjustments</li>
            <li>Basement door installation and repairs</li>
            <li>Rehanging sagging or sticking doors</li>
            <li>Frame and trim carpentry repairs</li>
            <li>Replacing damaged or broken hardware</li>
            <li>Installing new interior doors for remodels</li>
          </ul>
        </section>

        {/* WHY US */}
        <section className="why-us py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us for Interior Door Repairs?</h2>
          <p className="mb-4">
            Interior door work requires precision. If doors aren’t properly aligned, they’ll stick, 
            rattle, or damage the frame over time. That’s where our decades of hands-on carpentry 
            experience come in. We do the job right the first time.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>25+ years of carpentry and repair expertise</li>
            <li>Focused on ranch home interior repair projects</li>
            <li>Licensed & insured for safe, step-ladder accessible work</li>
            <li>Clear, honest pricing with no surprises</li>
            <li>Trusted by Buffalo homeowners for quality service</li>
          </ul>
        </section>

        {/* SERVICE AREAS */}
        <section className="service-areas bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg">
            <div>
              <h3 className="font-semibold">Buffalo, NY</h3>
              <p>Expert repair and replacement of all interior doors.</p>
            </div>
            <div>
              <h3 className="font-semibold">Amherst, NY</h3>
              <p>Bedroom, bathroom, and closet door specialists.</p>
            </div>
            <div>
              <h3 className="font-semibold">Tonawanda, NY</h3>
              <p>Fixing interior doors in ranch homes across Tonawanda.</p>
            </div>
            <div>
              <h3 className="font-semibold">Kenmore, NY</h3>
              <p>Affordable and reliable interior door carpentry services.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faqs py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Interior Door FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Can you fix sticking doors?</h3>
              <p>Yes, we adjust doors that stick, sag, or rub against the frame.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you repair closet bifold doors?</h3>
              <p>Yes, we repair or replace bifold and sliding closet doors.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can you replace bathroom doors?</h3>
              <p>Yes, we install new bathroom and bedroom doors, complete with hardware.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you handle frame repairs?</h3>
              <p>Yes, we provide carpentry repairs for cracked or damaged frames.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you work on all types of homes?</h3>
              <p>We focus exclusively on ranch-style homes and step-ladder accessible repairs.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta bg-blue-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Smooth-Operating Doors Every Time</h2>
          <p className="mb-6">
            Get expert interior door repairs and replacements from Buffalo’s ranch home specialists. 
            Call today to schedule your service.
          </p>
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