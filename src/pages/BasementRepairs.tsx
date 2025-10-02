import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './basement-repairs-schema.json';

export default function BasementRepairs() {
  return (
    <>
      <SEOHelmet
        title="Basement Repairs Buffalo NY | Aaron Michael Services"
        description="Expert basement repairs in Buffalo, Amherst, Tonawanda & Kenmore NY. Wall cracks, waterproofing, sump pumps, flooring & finishing repairs. Call (716) 533-7108."
        keywords="basement repairs Buffalo NY, waterproofing Amherst, foundation cracks Tonawanda, sump pump repair Kenmore, basement finishing Buffalo, basement handyman Western New York"
        canonical="https://www.aaronmichaelservices.com/basement-repairs"
        schema={schemaData}
      />

      <main className="service-page basement-repairs">
        {/* HERO */}
        <section className="hero bg-gray-100 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Basement Repairs in Buffalo, NY</h1>
          <p className="text-lg mb-6">
            Keep your basement safe, dry, and functional. Serving Buffalo, Amherst, Tonawanda, Kenmore, 
            and all of Western New York, Aaron Michael Services provides expert basement repair solutions.
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
          <h2 className="text-2xl font-semibold mb-4">Protect Your Basement, Protect Your Home</h2>
          <p className="mb-4">
            A damaged basement can lead to water leaks, mold growth, foundation instability, and expensive 
            repairs if ignored. At <strong>Aaron Michael Services</strong>, we provide complete basement repair 
            solutions that restore your space and prevent future issues. From waterproofing to flooring, 
            we make basements safe, dry, and usable.
          </p>
          <p className="mb-4">
            With 25+ years in the trades, our local team understands Buffalo’s unique weather challenges — 
            heavy snow, spring thaws, and heavy rains that cause leaks and cracks. We bring hands-on expertise 
            and proven solutions tailored to Western New York homes.
          </p>
        </section>

        {/* SERVICES */}
        <section className="services bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Basement Repair Services</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg space-y-3">
            <li>Basement wall crack repairs</li>
            <li>Waterproofing & moisture control solutions</li>
            <li>Sump pump installation & repairs</li>
            <li>Basement flooring repair (concrete, vinyl, tile, LVT)</li>
            <li>Framing & drywall repair for finished basements</li>
            <li>Basement window & egress repairs</li>
            <li>Mold prevention & water damage restoration</li>
            <li>Structural reinforcement & safety upgrades</li>
          </ul>
        </section>

        {/* WHY US */}
        <section className="why-us py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Aaron Michael Services?</h2>
          <p className="mb-4">
            When it comes to basement repairs, choosing the right contractor matters. We combine decades of 
            carpentry and repair expertise with modern waterproofing and foundation solutions. 
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>25+ years of hands-on experience</li>
            <li>Buffalo-based, locally owned and operated</li>
            <li>Licensed & insured for complete protection</li>
            <li>Proven results in waterproofing and structural repair</li>
            <li>Affordable, transparent pricing</li>
          </ul>
        </section>

        {/* SERVICE AREAS */}
        <section className="service-areas bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Basement Repairs Across Western New York</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg">
            <div>
              <h3 className="font-semibold">Buffalo, NY</h3>
              <p>Basement waterproofing, wall crack repairs, and sump pump solutions in Buffalo homes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Amherst, NY</h3>
              <p>Trusted basement repair contractors for Amherst homeowners and property managers.</p>
            </div>
            <div>
              <h3 className="font-semibold">Tonawanda, NY</h3>
              <p>Full-service basement repair specialists serving North and City of Tonawanda.</p>
            </div>
            <div>
              <h3 className="font-semibold">Kenmore, NY</h3>
              <p>Affordable basement repair services for Kenmore families and landlords.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faqs py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Basement Repair FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Do you fix basement wall cracks?</h3>
              <p>Yes, we repair structural and surface cracks to prevent leaks and foundation issues.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can you waterproof my basement?</h3>
              <p>We offer drainage systems, sump pumps, and sealants to keep basements dry.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you repair basement windows?</h3>
              <p>Yes, we repair and replace basement windows and egress openings for safety and light.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can you repair finished basement damage?</h3>
              <p>We restore drywall, flooring, and framing damaged by water or moisture.</p>
            </div>
            <div>
              <h3 className="font-semibold">How soon can repairs start?</h3>
              <p>Most basement repairs can be scheduled within the same week. Call (716) 533-7108.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta bg-blue-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Basement Repairs You Can Trust</h2>
          <p className="mb-6">
            Protect your investment and make your basement safe, dry, and usable again. 
            Call Aaron Michael Services today for expert basement repairs in Buffalo and Western New York.
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