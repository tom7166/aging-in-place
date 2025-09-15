import React, { useEffect } from 'react';

const AccessibleBathrooms: React.FC = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Accessible Bathrooms",
      "description": "ADA-compliant bathroom remodels in Buffalo with walk-in tubs, roll-in showers, grab bars, and comfort-height toilets.",
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessible Bathrooms</h1>
        <p className="text-lg md:text-xl text-gray-700">
          ADA-compliant bathroom remodels including walk-in tubs, roll-in showers, grab bars, and comfort-height toilets.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Accessible Bathrooms?</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Full ADA compliance</li>
            <li>Customized layouts for your Buffalo home</li>
            <li>Non-slip flooring and safety enhancements</li>
            <li>Insurance support and free consultations</li>
            <li>Experienced local contractors</li>
          </ul>
        </div>
        <div>
          <img
            src="https://aaronmichaelservices.com/images/accessible-bathrooms.jpg"
            alt="Accessible Bathroom Renovation Buffalo"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>

      <section className="text-center mb-12">
        <a
          href="tel:7166236879"
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:bg-green-500 transition-all duration-300"
        >
          Call Now for a Free Accessible Bathroom Consultation
        </a>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>How much does an accessible bathroom cost?</strong>
            <p>$7,000–$25,000 depending on customization.</p>
          </li>
          <li>
            <strong>How long does the remodel take?</strong>
            <p>Walk-in showers take 3–5 days; full renovations take 7–10 days.</p>
          </li>
          <li>
            <strong>Are grab bars included?</strong>
            <p>Yes, all remodels include ADA-compliant safety features.</p>
          </li>
          <li>
            <strong>Do you handle insurance paperwork?</strong>
            <p>Yes, we provide documentation assistance for coverage.</p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default AccessibleBathrooms;

