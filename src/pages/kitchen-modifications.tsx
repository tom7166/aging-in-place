import React, { useEffect } from 'react';

const KitchenModifications: React.FC = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Kitchen Modifications",
      "description": "Accessible kitchen remodels for Buffalo homes, including lower countertops, pull-out shelving, and reachable appliances.",
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Kitchen Modifications</h1>
        <p className="text-lg md:text-xl text-gray-700">
          Accessible kitchens for everyone. Lower counters, pull-out shelving, and appliances within easy reach.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Kitchen Modifications?</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Ergonomic and accessible designs</li>
            <li>Custom layouts for Buffalo homes</li>
            <li>Improved workflow and safety</li>
            <li>Insurance and consultation support</li>
            <li>22+ years construction experience</li>
          </ul>
        </div>
        <div>
          <img
            src="https://aaronmichaelservices.com/images/kitchen-modifications.jpg"
            alt="Accessible Kitchen Buffalo"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>

      <section className="text-center mb-12">
        <a
          href="tel:7166236879"
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:bg-green-500 transition-all duration-300"
        >
          Call Now for a Free Kitchen Modification Consultation
        </a>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>How long does a kitchen modification take?</strong>
            <p>Typically 1–2 weeks depending on scope.</p>
          </li>
          <li>
            <strong>Do you modify cabinets and appliances?</strong>
            <p>Yes, everything is made accessible and easy to reach.</p>
          </li>
          <li>
            <strong>Are your kitchens ADA-compliant?</strong>
            <p>Yes, all designs follow ADA standards for accessibility.</p>
          </li>
          <li>
            <strong>Do you assist with permits or insurance?</strong>
            <p>Yes, we provide full documentation and support.</p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default KitchenModifications;

