import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Star, ArrowRight, Hammer, Home, Shield } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingCallButton from '../../components/FloatingCallButton';

const FlooringServicesBuffaloNY = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flooring Services Buffalo NY",
    "description": "Complete flooring services in Buffalo NY. Installation, refinishing, repair, replacement. All types. 1,100+ projects completed. Licensed contractor.",
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
      "priceRange": "$1500-$30000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Flooring Services Buffalo NY | Installation, Repair & Refinishing | Aaron Michael";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete flooring services in Buffalo NY. Installation, refinishing, repair, replacement. All types. 1,100+ projects completed. Licensed contractor. Call 716-533-7108.');
    }
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://aaronmichaelservices.com/services/flooring/flooring-services-buffalo-ny');
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

      <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Complete Flooring Services Buffalo NY</h1>
          <p className="text-xl mb-8">Professional flooring installation, refinishing, and repair services for all Buffalo area homes and businesses.</p>
          <div className="flex gap-4 mb-8">
            <div className="bg-green-700 px-4 py-2 rounded-lg flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span>1,100+ Projects</span>
            </div>
          </div>
          <a href="tel:716-533-7108" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center">
            <Phone className="w-5 h-5 mr-2" />Call: 716-533-7108
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Flooring Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <Hammer className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">New Installation</h3>
              <p className="text-gray-600 mb-4">Professional installation of hardwood, tile, vinyl, laminate, and carpet flooring with expert precision and attention to detail.</p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />All flooring types</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Subfloor preparation</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Quality materials</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <Home className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Refinishing</h3>
              <p className="text-gray-600 mb-4">Restore the beauty of hardwood floors with professional sanding, staining, and finishing services.</p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Sanding & screening</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Custom stain colors</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Polyurethane finishes</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Repair Services</h3>
              <p className="text-gray-600 mb-4">Expert repair of damaged flooring including board replacement, tile repair, and subfloor fixes.</p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Board replacement</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Tile repair</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Water damage fixes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Flooring Services</h2>
              <p className="text-lg text-gray-700 mb-6">Aaron Michael Services has provided comprehensive flooring services to Buffalo NY homeowners for over 22 years. With 1,100+ completed projects, we've earned a reputation for quality workmanship, reliable service, and competitive pricing.</p>
              <p className="text-lg text-gray-700 mb-6">Our licensed and insured team handles every aspect of your flooring project from consultation and material selection through installation and final cleanup. We work with all flooring types and provide customized solutions that match your style, budget, and functional requirements.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" /><span className="text-lg">Free consultations and detailed estimates</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" /><span className="text-lg">Licensed, insured, and experienced professionals</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" /><span className="text-lg">Quality materials and expert installation</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" /><span className="text-lg">Serving all of Western New York</span></li>
              </ul>
            </div>
            <div className="bg-green-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Service Pricing Guide</h3>
              <div className="space-y-4">
                <div className="border-b border-green-700 pb-4">
                  <div className="flex justify-between mb-2">
                    <span>Hardwood Installation</span>
                    <span className="font-bold">$8-15/sq ft</span>
                  </div>
                  <p className="text-sm text-green-200">Includes materials and labor</p>
                </div>
                <div className="border-b border-green-700 pb-4">
                  <div className="flex justify-between mb-2">
                    <span>Refinishing</span>
                    <span className="font-bold">$3-5/sq ft</span>
                  </div>
                  <p className="text-sm text-green-200">Sanding, staining, and finishing</p>
                </div>
                <div className="border-b border-green-700 pb-4">
                  <div className="flex justify-between mb-2">
                    <span>Vinyl/LVP Installation</span>
                    <span className="font-bold">$5-10/sq ft</span>
                  </div>
                  <p className="text-sm text-green-200">Premium materials available</p>
                </div>
                <div className="pb-4">
                  <div className="flex justify-between mb-2">
                    <span>Repair Services</span>
                    <span className="font-bold">$200-800</span>
                  </div>
                  <p className="text-sm text-green-200">Depends on extent of damage</p>
                </div>
              </div>
              <p className="text-sm text-green-200 mt-6">*Prices vary based on materials, room size, and project complexity. Free estimates provided.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">What flooring services do you offer?</h3>
              <p className="text-gray-700">We provide complete flooring services including new installation, refinishing, repairs, and replacement for all flooring types.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">Do you handle subfloor issues?</h3>
              <p className="text-gray-700">Yes, we address subfloor damage, leveling, and moisture issues as part of our comprehensive flooring services.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">How do I choose the right flooring?</h3>
              <p className="text-gray-700">During your free consultation, we'll discuss your lifestyle, budget, and preferences to recommend the best options for your space.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">Are your flooring services guaranteed?</h3>
              <p className="text-gray-700">Yes, we stand behind our workmanship and use quality materials to ensure long-lasting results you'll love.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started with Your Flooring Project</h2>
          <p className="text-xl mb-8">Contact us for a free consultation and estimate. Professional flooring services throughout Buffalo NY.</p>
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

export default FlooringServicesBuffaloNY;
