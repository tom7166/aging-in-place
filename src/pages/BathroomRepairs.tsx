import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './bathroom-repairs-schema.json';

export default function BathroomRepairs() {
  return (
    <>
      <SEOHelmet
        title="Bathroom Repairs Buffalo NY | Aaron Michael Services"
        description="Expert bathroom repairs in Buffalo, Amherst, Tonawanda & Kenmore NY. Toilet, sink, shower, tile, drywall & flooring repair. Call (716) 533-7108."
        keywords="bathroom repairs Buffalo NY, shower repair Buffalo, tile repair Amherst, bathroom plumbing Tonawanda, drywall repair Kenmore, bathroom handyman Western New York"
        canonicalUrl="https://aaronmichaelservices.com/services/bathroom-repairs"
        schema={schemaData}
      />

      <main className="service-page bathroom-repairs">
        {/* HERO */}
        <section className="hero bg-gray-100 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Bathroom Repairs in Buffalo, NY</h1>
          <p className="text-lg mb-6">
            Professional bathroom repair services for homeowners across Buffalo, Amherst, Tonawanda, Kenmore, 
            and all of Western New York. From tile and plumbing repairs to flooring and drywall fixes, we’ve 
            got you covered.
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
          <h2 className="text-2xl font-semibold mb-4">Dependable Bathroom Repair Experts</h2>
          <p className="mb-4">
            Bathrooms take a beating with daily use. Leaks, cracked tiles, worn-out grout, or broken fixtures 
            can quickly become more than just cosmetic issues. At <strong>Aaron Michael Services</strong>, we 
            specialize in reliable bathroom repairs designed to restore both function and style to your space. 
          </p>
          <p className="mb-4">
            Serving Buffalo and the surrounding Western New York region for over 25 years, we bring unmatched 
            craftsmanship and experience to every project. Our CAPS certification also means we can repair and 
            adapt bathrooms for accessibility, making them safer for older adults or individuals with mobility 
            challenges.
          </p>
        </section>

        {/* SERVICES */}
        <section className="services bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Bathroom Repair Services</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg space-y-3">
            <li>Toilet repair & replacement</li>
            <li>Sink & faucet repair</li>
            <li>Shower & tub repair, including caulking and re-sealing</li>
            <li>Tile & grout repair for floors, showers, and walls</li>
            <li>Drywall repair for moisture or water damage</li>
            <li>Bathroom flooring repair (tile, vinyl, LVT, laminate)</li>
            <li>Vanity repair & installation</li>
            <li>Bathroom fan replacement & ventilation improvements</li>
            <li>Accessibility upgrades (grab bars, handrails, step-in showers)</li>
          </ul>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why-us py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Homeowners Choose Us</h2>
          <p className="mb-4">
            With thousands of successful projects across Buffalo and surrounding towns, Aaron Michael Services 
            has built a reputation for quality and trust. When you need bathroom repairs, you want them done 
            right the first time — that’s what we deliver.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>25+ years in bathroom carpentry and plumbing repairs</li>
            <li>Locally owned and operated in Buffalo, NY</li>
            <li>CAPS certified for aging-in-place bathroom solutions</li>
            <li>Fully licensed & insured for peace of mind</li>
            <li>Fast scheduling and same-week service in most cases</li>
          </ul>
        </section>

        {/* SERVICE AREAS */}
        <section className="service-areas bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Bathroom Repairs Near You</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg">
            <div>
              <h3 className="font-semibold">Buffalo, NY</h3>
              <p>Full-service bathroom repairs for plumbing, tile, and fixtures throughout Buffalo homes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Amherst, NY</h3>
              <p>Dependable bathroom repair specialists serving Amherst families and property owners.</p>
            </div>
            <div>
              <h3 className="font-semibold">Tonawanda, NY</h3>
              <p>Trusted for tile, drywall, and plumbing bathroom fixes across Tonawanda.</p>
            </div>
            <div>
              <h3 className="font-semibold">Kenmore, NY</h3>
              <p>Providing quality bathroom repair services for Kenmore homeowners for over 25 years.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faqs py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Bathroom Repair FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Do you repair bathroom water damage?</h3>
              <p>Yes, we handle drywall, flooring, and vanity repairs caused by leaks or water exposure.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can you fix broken shower tiles?</h3>
              <p>Absolutely — we repair or replace cracked, chipped, or missing shower and floor tiles.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you install grab bars for seniors?</h3>
              <p>Yes — we’re CAPS certified and specialize in bathroom safety modifications.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can you replace a broken toilet or sink?</h3>
              <p>We handle all minor and major bathroom plumbing repairs and fixture replacements.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you offer quick bathroom repairs?</h3>
              <p>Most bathroom repairs can be scheduled within days. Call (716) 533-7108 for availability.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta bg-blue-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Bathroom Repairs in Buffalo?</h2>
          <p className="mb-6">
            Don’t wait for leaks or damage to get worse. Call Aaron Michael Services today for expert bathroom 
            repairs in Buffalo and all of Western New York.
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