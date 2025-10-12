import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './gutter-repairs-schema.json';

export default function GutterRepairs() {
  return (
    <>
      <SEOHelmet
        title="Gutter & Downspout Repair Buffalo NY | Aaron Michael Services"
        description="Expert gutter and downspout repair for ranch homes in Buffalo, Amherst, Tonawanda & Kenmore NY. Step-ladder accessible repairs only. Call (716) 533-7108."
        keywords="gutter repair Buffalo NY, downspout repair Amherst, gutter cleaning Tonawanda, gutter replacement Kenmore, ranch home gutter repair Buffalo"
        canonicalUrl="https://aaronmichaelservices.com/services/gutter-repairs"
        schema={schemaData}
      />

      <main className="service-page gutter-repairs">
        {/* HERO */}
        <section className="hero bg-gray-100 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Gutter & Downspout Repair in Buffalo, NY</h1>
          <p className="text-lg mb-6">
            Reliable gutter and downspout repair for ranch homes across Buffalo, Amherst, Tonawanda, 
            and Kenmore. Insurance-approved, step-ladder accessible repairs only.
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
          <h2 className="text-2xl font-semibold mb-4">Keeping Water Away from Your Home</h2>
          <p className="mb-4">
            Gutters and downspouts protect your foundation, siding, and landscaping by directing 
            rainwater away from your home. When they fail, you risk water damage, basement flooding, 
            and costly repairs.
          </p>
          <p className="mb-4">
            At <strong>Aaron Michael Services</strong>, we specialize in <em>ranch house gutter and downspout 
            repair</em>. Due to insurance restrictions, we perform repairs only on step-ladder accessible 
            sections — perfect for single-story homes in Western New York. This focus allows us to work 
            quickly, safely, and affordably while delivering expert results.
          </p>
        </section>

        {/* SERVICES */}
        <section className="services bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Gutter & Downspout Services</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg space-y-3">
            <li>Gutter leak repairs and sealing</li>
            <li>Downspout repairs & replacements</li>
            <li>Re-securing loose gutters on ranch homes</li>
            <li>Clearing clogged downspouts and elbows</li>
            <li>Minor gutter section replacements</li>
            <li>Water drainage solutions to protect foundations</li>
          </ul>
        </section>

        {/* WHY US */}
        <section className="why-us py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us for Gutter Repairs?</h2>
          <p className="mb-4">
            Not every contractor understands the needs of ranch-style homes. We do. By focusing on 
            step-ladder height repairs only, we work safer, faster, and more affordably — while keeping 
            your gutter system working the way it should.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>25+ years of carpentry and exterior repair experience</li>
            <li>Local Buffalo team, serving Western New York families</li>
            <li>Licensed & insured — fully compliant with safety rules</li>
            <li>Honest, up-front pricing for every repair</li>
            <li>Specialized in ranch house gutter repair</li>
          </ul>
        </section>

        {/* SERVICE AREAS */}
        <section className="service-areas bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg">
            <div>
              <h3 className="font-semibold">Buffalo, NY</h3>
              <p>Affordable gutter and downspout repair for single-story homes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Amherst, NY</h3>
              <p>Step-ladder accessible gutter and drainage solutions for ranch homes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Tonawanda, NY</h3>
              <p>Trusted gutter repair experts serving both North Tonawanda and Tonawanda City.</p>
            </div>
            <div>
              <h3 className="font-semibold">Kenmore, NY</h3>
              <p>Quick, safe, and reliable gutter services for Kenmore homeowners.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faqs py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Gutter & Downspout FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Do you work on two-story houses?</h3>
              <p>No, we only perform gutter repairs accessible by step ladder on ranch-style homes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can you replace full gutter systems?</h3>
              <p>We handle section replacements and repairs, but not full multi-story installations.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you fix clogged downspouts?</h3>
              <p>Yes, we clear out clogs and restore proper drainage flow.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can you reseal gutter seams?</h3>
              <p>Yes, we repair leaks and reseal sections to stop water overflow.</p>
            </div>
            <div>
              <h3 className="font-semibold">What areas do you serve?</h3>
              <p>Buffalo, Amherst, Tonawanda, Kenmore, and most Western NY ranch homes.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta bg-blue-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ranch House Gutter Repairs You Can Trust</h2>
          <p className="mb-6">
            Keep your ranch home protected with expert gutter and downspout repairs in Buffalo 
            and surrounding areas. Call today for step-ladder accessible services.
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