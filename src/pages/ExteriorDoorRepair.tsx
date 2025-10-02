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
        <section className="intro py-12 px-6 max-w-4xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Protect Your Home with a Strong, Functional Door</h2>
          <p className="mb-6">
            Your exterior doors are the first line of defense for your home — keeping out weather, 
            drafts, and intruders. Damaged or improperly installed doors can cause water leaks, energy 
            loss, and security risks. At <strong>Aaron Michael Services</strong>, we specialize in 
            <Link to="/carpentry"> exterior carpentry repairs</Link> for ranch-style homes.
          </p>
          <p className="mb-6">
            Our team brings over <em>25 years of carpentry expertise</em> to every project. Each door we repair or replace is properly aligned, weather-sealed, and secure. All projects are step-ladder accessible, maintaining safety for seniors and efficiency for homeowners.
          </p>
          <p className="mb-6">
            We handle a wide variety of doors including entry doors, storm doors, sliding patio doors, 
            and custom ranch home designs. Our work improves energy efficiency, enhances curb appeal, 
            and ensures your home is secure year-round. 
          </p>
          <p className="mb-6">
            From Buffalo to Kenmore, we are committed to providing expert exterior door repairs and replacements that preserve your home's charm while delivering modern functionality. Whether it’s repairing a warped frame, adjusting a misaligned door, or installing new hardware, our team provides durable solutions.
          </p>
          <p className="mb-6">
            Homeowners looking for comprehensive <Link to="/handyman">home repair services</Link> will find that our exterior door solutions integrate seamlessly with other services such as <Link to="/flooring">flooring installation</Link>, <Link to="/general-carpentry">general carpentry</Link>, and step-ladder safe interior repairs.
          </p>
          <p className="mb-6">
            Safety is our top priority. All projects are CAPS-certified, ensuring that repairs and replacements meet the highest standards for senior-friendly work. Step-ladder accessible practices minimize risk while allowing us to perform precise and professional carpentry repairs.
          </p>
        </section>

        {/* SERVICES */}
        <section className="services bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Exterior Door Services</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg space-y-3 text-gray-700">
            <li><Link to="/exterior-door-repair#entry-door-repair">Entry door repair and replacement</Link> – improve security, insulation, and functionality.</li>
            <li><Link to="/exterior-door-repair#storm-door-repair">Storm door installation and adjustments</Link> – maintain weather protection and aesthetics.</li>
            <li><Link to="/exterior-door-repair#sliding-door-repair">Sliding patio door repairs</Link> – rollers, tracks, and seals repaired for smooth operation.</li>
            <li><Link to="/exterior-door-repair#weatherproofing">Weatherstripping and draft-proofing</Link> – energy savings and comfort improvements.</li>
            <li><Link to="/exterior-door-repair#lockset-installation">Lockset and hardware installation</Link> – secure your home with quality components.</li>
            <li><Link to="/exterior-door-repair#wood-frame-repair">Wood frame and trim carpentry repairs</Link> – restore integrity and appearance.</li>
          </ul>
          <p className="mt-4">
            Every repair is approached with precision and care. We protect surrounding surfaces, ensure step-ladder accessible work, and leave your home safe, clean, and visually appealing.
          </p>
        </section>

        {/* WHY US */}
        <section className="why-us py-12 px-6 max-w-4xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Aaron Michael Services?</h2>
          <p className="mb-4">
            Our decades of experience in carpentry and exterior door repair make us a trusted choice for ranch homeowners. We understand door mechanics, weatherproofing techniques, and the importance of functional, safe entrances.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>25+ years of carpentry and door repair expertise</li>
            <li>Licensed & insured for ranch home repair services</li>
            <li>Step-ladder accessible and CAPS-certified projects</li>
            <li>Transparent, upfront pricing with no hidden costs</li>
            <li>Serving Buffalo, Amherst, Tonawanda, Kenmore, and all Western NY communities</li>
          </ul>
        </section>

        {/* SERVICE AREAS */}
        <section className="service-areas bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg text-gray-700">
            <div>
              <h3 className="font-semibold"><Link to="/cities/buffalo/exterior-door-repair-buffalo-ny">Buffalo, NY</Link></h3>
              <p>Entry, storm, and patio door repair for ranch homes in Buffalo.</p>
            </div>
            <div>
              <h3 className="font-semibold"><Link to="/cities/amherst/exterior-door-repair-amherst-ny">Amherst, NY</Link></h3>
              <p>Professional exterior door adjustments and replacements.</p>
            </div>
            <div>
              <h3 className="font-semibold"><Link to="/cities/tonawanda/exterior-door-repair-tonawanda-ny">Tonawanda, NY</Link></h3>
              <p>Patio door and entry door specialists for single-story ranch homes.</p>
            </div>
            <div>
              <h3 className="font-semibold"><Link to="/cities/kenmore/exterior-door-repair-kenmore-ny">Kenmore, NY</Link></h3>
              <p>Reliable and quick exterior door repair and replacement services.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faqs py-12 px-6 max-w-4xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-6">Exterior Door FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Do you repair storm doors?</h3>
              <p>Yes, we repair and replace storm doors for ranch homes, including alignment and weatherproofing.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can you fix sliding patio doors?</h3>
              <p>Yes, we repair rollers, tracks, and seals for smooth and secure operation.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you replace door hardware?</h3>
              <p>Absolutely. We install locks, handles, deadbolts, and other hardware to enhance security and function.</p>
            </div>
            <div>
              <h3 className="font-semibold">What if my frame is rotted?</h3>
              <p>We perform carpentry repairs to restore frame integrity and ensure proper weather sealing.</p>
            </div>
            <div>