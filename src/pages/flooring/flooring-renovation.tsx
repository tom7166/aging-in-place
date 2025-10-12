import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Star, ArrowRight, Hammer, Shield } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingCallButton from '../../components/FloatingCallButton';

const FlooringRenovation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flooring Renovation",
    "description": "Expert flooring renovation in Buffalo NY. Complete floor transformation, removal, subfloor repair, installation. 720+ projects. Licensed & insured.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aaron Michael Services",
      "telephone": "+17165337108",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "14 Mariemont Ave",
        "addressLocality": "Buffalo",
        "addressRegion": "NY",
        "postalCode": "14220"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "287"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceRange": "$3800-$16200",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Flooring Renovation Buffalo NY | Complete Floor Transformation | Aaron Michael";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert flooring renovation in Buffalo NY. Complete floor transformation, removal, subfloor repair, installation. 720+ projects. Licensed & insured. Call 716-533-7108.');
    }
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://aaronmichaelservices.com/services/flooring/flooring-renovation');
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
    <div className="min-h-screen bg-white">
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      <section className="bg-gradient-to-r from-teal-900 to-cyan-900 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Flooring Renovation</h1>
          <p className="text-xl mb-8">Complete flooring renovation services in Buffalo NY. Transform worn, dated floors into beautiful new surfaces with expert renovation.</p>
          <div className="flex gap-4 mb-8">
            <div className="bg-teal-800 px-4 py-2 rounded-lg flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span>720+ Renovations</span>
            </div>
          </div>
          <a href="tel:716-533-7108" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center">
            <Phone className="w-5 h-5 mr-2" />Call: 716-533-7108
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Complete Flooring Renovation Services</h2>
              <p className="text-lg text-gray-700 mb-6">Flooring renovation involves more than just replacing old floors. It's a comprehensive process that addresses underlying issues, updates materials, and transforms your space. Aaron Michael Services provides complete flooring renovation throughout Buffalo NY with 720+ successful projects and 22+ years of expertise.</p>
              <p className="text-lg text-gray-700 mb-6">Our renovation services handle everything from initial assessment through final installation. We identify and repair subfloor damage, address moisture issues, remove old materials properly, and install new flooring that enhances both function and aesthetics. Whether renovating a single room or entire floors, we deliver quality results that last.</p>
            </div>
            <div>
              <div className="bg-teal-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">What's Included in Renovation</h3>
                <ul className="space-y-4">
                  <li className="flex items-start"><CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Assessment:</strong> Thorough inspection of existing floors and subfloor conditions</span></li>
                  <li className="flex items-start"><CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Removal:</strong> Complete removal of old flooring materials and disposal</span></li>
                  <li className="flex items-start"><CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Repair:</strong> Subfloor repair, leveling, and moisture remediation</span></li>
                  <li className="flex items-start"><CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Installation:</strong> Professional installation of new flooring materials</span></li>
                  <li className="flex items-start"><CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Finishing:</strong> Trim work, transitions, and final touches</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Renovation Options by Room Type</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Hammer className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Kitchen Renovation</h3>
              <p className="text-gray-600 mb-4">Waterproof and durable flooring options perfect for high-traffic kitchens. LVP, tile, and sealed hardwood choices.</p>
              <p className="text-sm text-gray-500">$4,500 - $10,000 typical</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Shield className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Bathroom Renovation</h3>
              <p className="text-gray-600 mb-4">Moisture-resistant flooring designed for wet environments. Porcelain tile, luxury vinyl, and waterproof options.</p>
              <p className="text-sm text-gray-500">$2,200 - $5,500 typical</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Hammer className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Whole Home Renovation</h3>
              <p className="text-gray-600 mb-4">Coordinated flooring throughout multiple rooms or entire floors for cohesive, beautiful results.</p>
              <p className="text-sm text-gray-500">$12,000 - $35,000+ typical</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Renovate Your Flooring?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Increase Home Value</h3>
              <p className="text-gray-600">New flooring renovation can increase home value by 3-5% or more, offering excellent ROI.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Improve Aesthetics</h3>
              <p className="text-gray-600">Transform dated, worn floors into beautiful modern surfaces that enhance your entire home.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Fix Underlying Issues</h3>
              <p className="text-gray-600">Address subfloor damage, moisture problems, and structural concerns during renovation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Flooring Renovation FAQs</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">What's the difference between renovation and replacement?</h3>
              <p className="text-gray-700">Renovation is comprehensive, addressing subfloor and structural issues. Simple replacement may only swap materials without fixing underlying problems.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">How long does flooring renovation take?</h3>
              <p className="text-gray-700">Single rooms typically take 4-7 days including removal, prep, and installation. Larger renovations may take 2-3 weeks.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">Do you handle subfloor repairs?</h3>
              <p className="text-gray-700">Yes, comprehensive subfloor repair is a key part of proper flooring renovation and ensures long-lasting results.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">What if you find unexpected damage?</h3>
              <p className="text-gray-700">We'll notify you immediately, explain the issue, and provide options and pricing before proceeding with additional work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Flooring Renovation Project</h2>
          <p className="text-xl mb-8">Get expert flooring renovation with comprehensive service and quality results. Free consultation available.</p>
          <a href="tel:716-533-7108" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center">
            <Phone className="w-5 h-5 mr-2" />Call: 716-533-7108
          </a>
        </div>
      </section>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default FlooringRenovation;
