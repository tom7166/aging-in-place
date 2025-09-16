import React, { useEffect } from 'react';

const WheelchairRamps: React.FC = () => {
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Wheelchair Ramps",
      "description": "Custom-built wheelchair ramps for Buffalo homes. ADA-compliant and weather-resistant.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Aaron Michael Services",
        "telephone": "+17165337108",
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
    script.text = JSON.stringify(serviceSchema);
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, []);

  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Wheelchair Ramps</h1>
        <p className="text-lg md:text-xl text-gray-700">Custom-built wheelchair ramps for Buffalo homes, fully ADA-compliant, durable, and safe.</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Wheelchair Ramps?</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>25+ years of Buffalo construction experience</li>
            <li>Aluminum, wood, and concrete options</li>
            <li>Custom slopes and weather-resistant designs</li>
            <li>Insurance and permit assistance</li>
            <li>Family-owned, personal disability experience</li>
          </ul>
        </div>
        <div>
          <img
            src="https://aaronmichaelservices.com/images/wheelchair-ramps.jpg"
            alt="Wheelchair Ramp Installation Buffalo"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>

      <section className="text-center mb-12">
        <a
          href="tel:7166236879"
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:bg-green-500 transition-all duration-300"
        >
          Call Now for a Free Wheelchair Ramp Consultation
        </a>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>How much does a wheelchair ramp cost in Buffalo?</strong>
            <p>$2,400–$8,500 depending on length, complexity, and materials.</p>
          </li>
          <li>
            <strong>How long does installation take?</strong>
            <p>Most ramps are installed within 1–3 days; custom ramps may take longer.</p>
          </li>
          <li>
            <strong>Do you provide ADA-compliant designs?</strong>
            <p>Yes, every ramp follows ADA slope and safety guidelines.</p>
          </li>
          <li>
            <strong>Do you assist with permits and insurance?</strong>
            <p>Yes, we handle documentation and submission for permits and insurance claims.</p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default WheelchairRamps;

