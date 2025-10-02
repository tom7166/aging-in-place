import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './stair-repair-schema.json';

export default function StairRepair() {
  return (
    <>
      <SEOHelmet
        title="Stair Repair Buffalo NY | Aaron Michael Services"
        description="Expert stair repair and replacement in Buffalo, Amherst, Tonawanda & Kenmore NY. Ranch home specialists with 25+ years carpentry experience. Call (716) 533-7108."
        keywords="stair repair Buffalo NY, step repair Amherst, stair tread replacement Tonawanda, ranch home stair carpentry Kenmore, handrail and step repair Buffalo"
        canonical="https://www.aaronmichaelservices.com/stair-repair"
        schema={schemaData}
      />

      <main className="service-page stair-repair">
        {/* HERO */}
        <section className="hero bg-gray-100 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Stair Repair in Buffalo, NY</h1>
          <p className="text-lg mb-6">
            Professional stair repair, reinforcement, and handrail services for ranch homes across Buffalo and Western New York. 
            Keeping every step safe, sturdy, and reliable.
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
          <h2 className="text-2xl font-semibold mb-4">Stairs Built for Safety & Strength</h2>
          <p className="mb-4">
            Stairs are one of the most used and most important parts of any home. When steps creak, 
            sag, or become loose, they quickly become a safety hazard. At <strong>Aaron Michael Services</strong>, 
            we provide stair repair and replacement services designed for ranch homes across Buffalo 
            and Western New York.
          </p>
          <p className="mb-4">
            With <em>25+ years of carpentry and home repair expertise</em>, we ensure stairs are safe, 
            sturdy, and built to last. As CAPS-certified specialists, we’re especially focused on 
            stair safety for older adults and accessibility modifications where needed.
          </p>
        </section>

        {/* SERVICES */}
        <section className="services bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Stair Repair Services</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg space-y-3">
            <li>Repairing squeaky, loose, or broken steps</li>
            <li>Reinforcing stair frames and supports</li>
            <li>Replacing worn treads and risers</li>
            <li>Fixing or replacing handrails and balusters</li>
            <li>Custom carpentry repairs for ranch home stairs</li>
            <li>Safety-focused stair adjustments for seniors</li>
          </ul>
        </section>

        {/* WHY US */}
        <section className="why-us py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Aaron Michael Services?</h2>
          <p className="mb-4">
            Stair repair isn’t just about looks — it’s about safety. Loose or damaged steps can 
            cause serious injuries, especially in ranch homes where stairs often connect basements, 
            porches, or additions. We combine traditional carpentry skills with modern safety 
            standards to keep your home secure.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>25+ years of hands-on carpentry expertise</li>
            <li>CAPS-certified for senior and accessibility modifications</li>
            <li>Focused on ranch homes and step-ladder accessible work</li>
            <li>Reliable, insured, and locally trusted in Buffalo</li>
            <li>Affordable solutions with long-lasting results</li>
          </ul>
        </section>

        {/* SERVICE AREAS */}
        <section className="service-areas bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg">
            <div>
              <h3 className="font-semibold">Buffalo, NY</h3>
              <p>Safe, reliable stair repairs and replacements.</p>
            </div>
            <div>
              <h3 className="font-semibold">Amherst, NY</h3>
              <p>Carpentry specialists for ranch home stairs.</p>
            </div>
            <div>
              <h3 className="font-semibold">Tonawanda, NY</h3>
              <p>Step repair and reinforcement you can trust.</p>
            </div>
            <div>
              <h3 className="font-semibold">Kenmore, NY</h3>
              <p>Local experts for stair safety and stability.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faqs py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Stair Repair FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Can you fix squeaky stairs?</h3>
              <p>Yes, we reinforce and adjust stairs to eliminate squeaks and looseness.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you replace stair treads?</h3>
              <p>We replace worn, broken, or unsafe stair treads and risers.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can you install new handrails?</h3>
              <p>Yes, we repair or install handrails to improve safety and stability.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you handle basement stairs?</h3>
              <p>Yes, we repair and reinforce basement stairs in ranch homes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you focus on safety for seniors?</h3>
              <p>Yes, as CAPS-certified professionals, we specialize in safe stair solutions for older adults.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta bg-blue-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Safe, Sturdy Stairs You Can Trust</h2>
          <p className="mb-6">
            Keep your family safe with expert stair repair and replacement services. Call Buffalo’s 
            ranch home specialists today to schedule service.
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