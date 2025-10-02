import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './exterior-door-repair-schema.json';

export default function ExteriorDoorRepair() {
  return (
    <>
      <SEOHelmet
        title="Exterior Door Repair Buffalo NY | Aaron Michael Services"
        description="Professional exterior door repair and replacement in Buffalo, Amherst, Tonawanda & Kenmore NY. Ranch home specialists with 25+ years carpentry experience. Call (716) 533-7108."
        keywords="exterior door repair Buffalo NY, storm door repair Amherst, patio door replacement Tonawanda, ranch home door repair Kenmore, carpentry services Buffalo"
        canonical="https://www.aaronmichaelservices.com/exterior-door-repair"
        schema={schemaData}
      />

      <main className="service-page exterior-door-repair">
        {/* HERO */}
        <section className="hero bg-gray-100 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Exterior Door Repair in Buffalo, NY</h1>
          <p className="text-lg mb-6">
            Reliable repair and replacement of entry, patio, and storm doors for ranch homes across 
            Buffalo, Amherst, Tonawanda, and Kenmore.
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
          <h2 className="text-2xl font-semibold mb-4">Protect Your Home with a Strong, Functional Door</h2>
          <p className="mb-4">
            Your exterior doors are the first line of defense for your home — keeping out weather, 
            drafts, and intruders. Damaged or improperly installed doors can cause water leaks, energy 
            loss, and security risks.
          </p>
          <p className="mb-4">
            At <strong>Aaron Michael Services</strong>, we specialize in exterior door repairs for 
            ranch-style homes. Our team has <em>25+ years of carpentry expertise</em>, ensuring every 
            door we repair or replace is properly aligned, weather-sealed, and secure. We focus on 
            step-ladder accessible projects only, keeping work safe and efficient for ranch homeowners.
          </p>
        </section>

        {/* SERVICES */}
        <section className="services bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Exterior Door Services</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg space-y-3">
            <li>Entry door repair and replacement</li>
            <li>Storm door installation and adjustments</li>
            <li>Sliding patio door repairs (tracks, rollers, seals)</li>
            <li>Weatherstripping and draft-proofing</li>
            <li>Lockset and hardware installation</li>
            <li>Wood frame and trim carpentry repairs</li>
          </ul>
        </section>

        {/* WHY US */}
        <section className="why-us py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Aaron Michael Services?</h2>
          <p className="mb-4">
            With decades in the trades, we know doors inside and out. From small adjustments to 
            full replacements, our team provides reliable solutions that improve your home's security, 
            comfort, and curb appeal.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>25+ years of carpentry and door repair expertise</li>
            <li>Licensed & insured for ranch home repair services</li>
            <li>Specialized in step-ladder accessible work</li>
            <li>Up-front pricing with no hidden surprises</li>
            <li>Serving Buffalo & all of Western New York</li>
          </ul>
        </section>

        {/* SERVICE AREAS */}
        <section className="service-areas bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg">
            <div>
              <h3 className="font-semibold">Buffalo, NY</h3>
              <p>Entry, storm, and patio door repair for ranch homes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Amherst, NY</h3>
              <p>Expert exterior door adjustments and installations.</p>
            </div>
            <div>
              <h3 className="font-semibold">Tonawanda, NY</h3>
              <p>Patio door and entry door specialists for single-story homes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Kenmore, NY</h3>
              <p>Quick, reliable door repair and replacement services.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faqs py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Exterior Door FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Do you repair storm doors?</h3>
              <p>Yes, we handle repairs and replacements of storm doors for ranch homes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can you fix sliding patio doors?</h3>
              <p>Yes, we repair rollers, tracks, and seals on sliding doors.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you replace door hardware?</h3>
              <p>Yes, we install locks, handles, and deadbolts to improve security.</p>
            </div>
            <div>
              <h3 className="font-semibold">What if my frame is rotted?</h3>
              <p>We perform carpentry repairs to restore frames and weatherproofing.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you install full entry doors?</h3>
              <p>Yes, we can remove and replace your entry door with a new, properly sealed unit.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta bg-blue-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Secure & Stylish Exterior Doors</h2>
          <p className="mb-6">
            Protect your ranch home with expert exterior door repair and replacement services. 
            Serving Buffalo and surrounding Western NY communities.
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