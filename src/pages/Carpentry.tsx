import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './carpentry-schema.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
export default function Carpentry() {
  return (
    <>
      <SEOHelmet
        title="Carpentry Services Buffalo NY | Aaron Michael Services"
        description="Expert carpentry services for ranch homes in Buffalo, Amherst, Tonawanda & Kenmore NY. Repairs, installations, custom projects. CAPS-certified, 25+ years experience. Call (716) 533-7108."
        keywords="carpentry Buffalo NY, ranch home carpentry Amherst, custom carpentry Tonawanda, home repairs Kenmore, step-ladder accessible carpentry Buffalo"
        canonicalUrl="https://aaronmichaelservices.com/services/carpentry"
        schema={schemaData}
      />

      <main className="service-page carpentry">
        {/* HERO */}
        <section className="hero bg-gray-100 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Professional Carpentry Services in Buffalo, NY
          </h1>
          <p className="text-lg mb-6">
            Expert carpentry solutions for ranch homes across Buffalo, Amherst, Tonawanda, Kenmore, and Western New York. We specialize in precise, safe, and step-ladder accessible projects.
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
          <h2 className="text-2xl font-semibold mb-4">
            Reliable Carpentry for Ranch Homes in Buffalo & Western NY
          </h2>
          <p className="mb-4">
            At <strong>Aaron Michael Services</strong>, we provide top-quality <a href="/carpentry">carpentry services</a> tailored specifically for ranch homes. From structural repairs to custom cabinetry, our team delivers precise, lasting results for homeowners in Buffalo, Amherst, Tonawanda, and Kenmore. All work is step-ladder accessible and CAPS-certified, prioritizing senior safety and insurance compliance.
          </p>
          <p className="mb-4">
            With over 25 years of experience, we understand the unique needs of ranch-style homes and ensure every project is handled efficiently and professionally. Whether you require minor repairs, large-scale installations, or custom woodwork, our team brings skill, experience, and attention to detail to every job.
          </p>
          <p className="mb-4">
            Our services are designed to improve both the safety and aesthetic appeal of your home. By focusing on step-ladder accessible work, we ensure that all renovations and repairs can be done without compromising safety, particularly for senior residents.
          </p>
          <p className="mb-4">
            For homeowners looking for dependable, high-quality <a href="/handyman">home improvement services</a>, our carpentry solutions provide a reliable foundation for any project. From <a href="/flooring">flooring installations</a> to <a href="/general-carpentry">general carpentry</a>, our team is ready to handle a wide range of home improvement tasks.
          </p>
        </section>

        {/* SERVICES */}
        <section className="services bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Carpentry Services</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg space-y-3">
            <li><a href="/carpentry#woodwork-repair">Repair and replacement of damaged woodwork</a> – doors, trim, and cabinetry restored with precision.</li>
            <li><a href="/carpentry#cabinet-installation">Installation of new cabinetry, shelving, and custom units</a> designed to fit your ranch home style.</li>
            <li><a href="/carpentry#structural-reinforcements">Structural reinforcements for walls, doors, and trim</a> to maintain home integrity and safety.</li>
            <li><a href="/carpentry#custom-projects">Custom carpentry solutions</a> tailored to your home's specific design and functional needs.</li>
            <li>Step-ladder accessible projects only, <a href="/safety">insurance compliant</a> for senior safety.</li>
            <li>Interior and exterior woodwork crafted for durability and aesthetics.</li>
          </ul>
        </section>

        {/* WHY US */}
        <section className="why-us py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Aaron Michael Services?</h2>
          <p className="mb-4">
            Our team specializes in safe, reliable, and efficient carpentry services for ranch homeowners. Every project is handled with care, ensuring it meets both functional and aesthetic goals. We pride ourselves on professionalism, attention to detail, and over two decades of experience serving Buffalo and surrounding communities.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>25+ years of carpentry experience in Buffalo, Amherst, Tonawanda & Kenmore</li>
            <li>CAPS-certified for senior safety and step-ladder accessible work</li>
            <li>Custom solutions tailored to your ranch home</li>
            <li>Expert repairs and installations for lasting results</li>
            <li>Reliable home improvement services throughout Western New York</li>
          </ul>
        </section>

        {/* SERVICE AREAS */}
        <section className="service-areas bg-gray-50 py-12 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg">
            <div>
              <h3 className="font-semibold"><a href="/service-areas/buffalo">Buffalo, NY</a></h3>
              <p>Custom carpentry and home improvement projects tailored to ranch-style homes in Buffalo.</p>
            </div>
            <div>
              <h3 className="font-semibold"><a href="/service-areas/amherst">Amherst, NY</a></h3>
              <p>Expert repairs, cabinetry installations, and custom woodwork solutions for Amherst homes.</p>
            </div>
            <div>
              <h3 className="font-semibold"><a href="/service-areas/tonawanda">Tonawanda, NY</a></h3>
              <p>Durable carpentry services for Tonawanda homeowners, from minor repairs to full installations.</p>
            </div>
            <div>
              <h3 className="font-semibold"><a href="/service-areas/kenmore">Kenmore, NY</a></h3>
              <p>Step-ladder accessible carpentry projects performed safely and efficiently in Kenmore homes.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faqs py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Carpentry FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Do you handle custom carpentry projects?</h3>
              <p>Yes, we design and build <a href="/carpentry#custom-projects">custom woodwork</a> to enhance your ranch home.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can you repair damaged woodwork?</h3>
              <p>Absolutely. Our team specializes in precise and lasting wood repairs for doors, trim, and cabinetry throughout Buffalo and Western NY.</p>
            </div>
            <div>
              <h3 className="font-semibold">Are your services safe for seniors?</h3>
              <p>Yes. All projects are CAPS-certified and step-ladder accessible to ensure maximum safety for senior residents.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you install shelving or cabinetry?</h3>
              <p>Yes, we provide professional installation of shelves, cabinets, and other interior woodwork for ranch homes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you work on exterior wood projects?</h3>
              <p>Yes, our team can repair or install exterior wood trim and features within step-ladder reach, maintaining safety and quality.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta bg-blue-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Professional Carpentry for Your Ranch Home</h2>
          <p className="mb-6">
            Reliable, step-ladder accessible carpentry solutions for Buffalo, Amherst, Tonawanda, and Kenmore homes.
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
