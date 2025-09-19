import React, { useEffect } from 'react';
import { MessageCircle, Phone, CheckCircle } from 'lucide-react';
import { FAQS } from '../utils/constants';

const FAQPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Buffalo Accessibility FAQ - Wheelchair Ramps, Home Modifications, ADA Compliance",
    "description": "Comprehensive FAQ about accessibility modifications in Buffalo NY including wheelchair ramps, accessible bathrooms, aging in place, and ADA compliance throughout Western New York.",
    "url": "https://aaronmichaelservices.com/#/faq",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  useEffect(() => {
    document.title = "Buffalo Accessibility FAQ | Wheelchair Ramps & Home Modifications | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive FAQ about accessibility modifications in Buffalo NY. Wheelchair ramps, accessible bathrooms, aging in place, ADA compliance. Expert answers from Western New York contractors.');
    }
    
    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(structuredDataScript);
    
    return () => {
      if (document.head.contains(structuredDataScript)) {
        document.head.removeChild(structuredDataScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle size={48} className="mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Common questions about accessibility modifications, wheelchair ramps, and ADA compliance in Buffalo and Western New York
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <h3 
                  className="text-xl font-bold text-blue-900 mb-4"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <div 
                  className="text-gray-700 leading-relaxed"
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-6 text-blue-100">
              Get personalized answers about your specific accessibility needs in Buffalo
            </p>
            <a 
              href="tel:716-533-7108" 
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 716-533-7108 for Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;