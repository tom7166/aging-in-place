import React, { useEffect } from 'react';

const DoorWidening: React.FC = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Door Widening",
      "description": "Expand doorways to 36+ inches for wheelchair access. Expert Buffalo carpentry maintaining structural integrity.",
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Door Widening</h1>
        <p className="text-lg md:text-xl text-gray-700">
          Professional door widening for ADA accessibility in Buffalo homes. Maintain your home’s structure and flow.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Door Widening Services?</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Expand doorways to 36+ inches</li>
            <li>Expert carpentry without compromising structure</li>
            <li>Enhance mobility and safety</li>
            <li>Insurance and permit assistance</li>
            <li>Family-owned Buffalo business</li>
          </ul>
        </div>
        <div>
          <img
            src="https://aaronmichaelservices.com/images/door-widening.jpg"
            alt="Door Widening Buffalo"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>

      <section className="text-center mb-12">
        <a
          href="tel:7166236879"
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:bg-green-500 transition-all duration-300"
        >
          Call Now for a Free Door Widening Consultation
        </a>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>How much does door widening cost?</strong>
            <p>$800–$3,000 depending on structure and materials.</p>
          </li>
          <li>
            <strong>Do you maintain structural integrity?</strong>
            <p>Yes, all work is done professionally with safety and code compliance.</p>
          </li>
          <li>
            <strong>Do you handle permits?</strong>
            <p>Yes, we assist with all local permit requirements.</p>
          </li>
          <li>
            <strong>How long does it take?</strong>
            <p>Most door widening projects are completed within 1–3 days.</p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default DoorWidening;

