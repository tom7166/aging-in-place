import React, { useEffect } from 'react';

const AgingInPlace: React.FC = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Aging in Place",
      "description": "Home modifications to allow seniors to age safely at home in Buffalo, including handrails, lighting, flooring, and safety upgrades.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Aaron Michael Services",
        "telephone": "+17166236879",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "14 Mariemont Ave",
          "addressLocality": "Buffalo",
          "addressRegion": "NY",
          "postalCode": "14220",
          "addressCountry": "US"
        }
      },
      "areaServed": ["Buffalo","Cheektowaga","Amherst","Tonawanda","West Seneca","WNY"]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, []);

  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Aging in Place</h1>
        <p className="text-lg md:text-xl text-gray-700">
          Comprehensive home modifications for seniors in Buffalo to age safely and independently.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Aging in Place Services?</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Handrails, ramps, and flooring safety upgrades</li>
            <li>Accessible lighting and switches</li>
            <li>Bathroom and kitchen modifications</li>
            <li>Insurance support and consultations</li>
            <li>Buffalo-based experts with personal disability experience</li>
          </ul>
        </div>
        <div>
          <img
            src="https://aaronmichaelservices.com/images/aging-in-place.jpg"
            alt="Aging in Place Buffalo"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>

      <section className="text-center mb-12">
        <a
          href="tel:7166236879"
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:bg-green-500 transition-all duration-300"
        >
          Call Now for a Free Aging in Place Consultation
        </a>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>How much do aging in place upgrades cost?</strong>
            <p>$3,000–$30,000 depending on scope of work.</p>
          </li>
          <li>
            <strong>How long does the project take?</strong>
            <p>Most modifications are completed within 1–2 weeks.</p>
          </li>
          <li>
            <strong>Do you provide insurance assistance?</strong>
            <p>Yes, we help navigate coverage options for senior modifications.</p>
          </li>
          <li>
            <strong>Are all modifications ADA-compliant?</strong>
            <p>Yes, every upgrade follows ADA and safety standards.</p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default AgingInPlace;

