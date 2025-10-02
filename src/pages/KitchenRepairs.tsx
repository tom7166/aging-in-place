import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './kitchen-repairs-schema.json';

export default function KitchenRepairs() {
  return (
    <>
      <SEOHelmet
        title="Kitchen Repairs Buffalo NY | Aaron Michael Services"
        description="Expert kitchen repairs in Buffalo, Amherst, Tonawanda, and Kenmore NY. Cabinet repair, countertop fixes, flooring, plumbing, drywall, and more. Call (716) 533-7108."
        keywords="kitchen repairs Buffalo NY, cabinet repair, countertop repair, kitchen plumbing, drywall repair, Amherst kitchen repair, Tonawanda kitchen repair, Kenmore kitchen repair"
        canonical="https://www.aaronmichaelservices.com/kitchen-repairs"
        schema={schemaData}
      />

      <main className="service-page kitchen-repairs">
        {/* HERO */}
        <section className="hero bg-gray-100 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Kitchen Repairs in Buffalo, NY</h1>
          <p className="text-lg mb-6">
            Trusted kitchen repair services in Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York. 
            From cabinets and countertops to flooring, plumbing, and drywall – we’ve got you covered.
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
          <h2 className="text-2xl font-semibold mb-4">Your Local Kitchen Repair Experts</h2>
          <p className="mb-4">
            The kitchen is the heart of your home, and when something goes wrong, it disrupts daily life. 
            At <strong>Aaron Michael Services</strong>, we specialize in comprehensive kitchen repair solutions 
            for homeowners across Western New York. Whether it’s fixing water-damaged cabinets, repairing a 
            cracked countertop, or restoring flooring, our team brings over 25 years of hands-on experience 
            in carpentry, remodeling, and repair services.  
          </p>
          <p className="mb-4">
            We’re fully insured, CAPS certified, and locally trusted with a reputation for honest, 
            high-quality workmanship. If you’re searching for “kitchen repair near me” in Buffalo, Amherst, 
            Tonawanda, or Kenmore, you’ve found the right team.
          </p>
        </section>

        {/* SERVICES WE OFFER */}
        <section className="services bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Kitchen Repair Services</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg space-y-3">
            <li>Cabinet repair & refacing – fix water damage, sagging doors, and broken hardware</li>
            <li>Countertop repair – cracked laminate, chips, burns, and loose seams</li>
            <li>Kitchen plumbing repairs – leaky faucets, sink replacement, garbage disposals</li>
            <li>Drywall repair – patching holes, smoothing cracks, fixing moisture issues</li>
            <li>Flooring repair – tile, laminate, hardwood, or LVT kitchen floor repairs</li>
            <li>Backsplash repair – cracked or missing tiles replaced seamlessly</li>
            <li>Appliance hookups – dishwashers, ranges, refrigerators</li>
            <li>Painting & finishing – restoring the look of your kitchen walls, trim, and cabinets</li>
          </ul>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why-us py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Aaron Michael Services?</h2>
          <p className="mb-4">
            With decades in the trades, we understand kitchens inside and out. We’ve repaired hundreds of kitchens 
            across Buffalo and Western New York, delivering results that last. Here’s why homeowners trust us:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>25+ years of professional experience in kitchen carpentry and remodeling</li>
            <li>Locally owned and operated in Buffalo, NY</li>
            <li>CAPS certified – aging-in-place and accessibility expertise</li>
            <li>Licensed & insured for your protection</li>
            <li>Transparent pricing, honest assessments, and reliable scheduling</li>
          </ul>
        </section>

        {/* SERVICE AREAS */}
        <section className="service-areas bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Kitchen Repairs Near You</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg">
            <div>
              <h3 className="font-semibold">Buffalo, NY</h3>
              <p>Kitchen cabinet repair, flooring, and drywall fixes right here in the city of Buffalo.</p>
            </div>
            <div>
              <h3 className="font-semibold">Amherst, NY</h3>
              <p>From countertop repair to kitchen plumbing issues, Amherst homeowners trust us.</p>
            </div>
            <div>
              <h3 className="font-semibold">Tonawanda, NY</h3>
              <p>Full-service kitchen repairs, from floors to cabinets, in Tonawanda homes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Kenmore, NY</h3>
              <p>We’re the go-to handyman service for kitchen repairs in Kenmore and surrounding areas.</p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="faqs py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Kitchen Repair FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Do you repair water-damaged cabinets?</h3>
              <p>Yes, we can restore or replace water-damaged kitchen cabinets and prevent further issues.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can you fix a cracked countertop?</h3>
              <p>We handle laminate, solid surface, and tile countertop repairs to restore both function and look.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you replace damaged kitchen flooring?</h3>
              <p>Absolutely — we repair and replace tile, hardwood, laminate, and LVT flooring in kitchens.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you service minor kitchen plumbing issues?</h3>
              <p>Yes — from leaky faucets to garbage disposal installation, we handle small kitchen plumbing jobs.</p>
            </div>
            <div>
              <h3 className="font-semibold">How soon can you repair my kitchen?</h3>
              <p>Most repairs are scheduled within a few days. Call us today at (716) 533-7108 for availability.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta bg-blue-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Kitchen Repairs in Buffalo?</h2>
          <p className="mb-6">
            Don’t let a small repair turn into a major problem. Call Aaron Michael Services today 
            for expert kitchen repairs in Buffalo and Western New York.
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