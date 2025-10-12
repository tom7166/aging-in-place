import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Star, ArrowRight, Hammer, Home } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingCallButton from '../../components/FloatingCallButton';

const FloorRemodeling = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Floor Remodeling",
    "description": "Professional floor remodeling in Buffalo NY. Transform any room with expert updates. 680+ projects, hardwood refinishing, tile, vinyl.",
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
      "priceRange": "$4200-$18500",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Floor Remodeling Buffalo NY | Expert Room Transformations | Aaron Michael";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional floor remodeling in Buffalo NY. Transform any room with expert updates. 680+ projects, hardwood refinishing, tile, vinyl. Licensed contractor 716-533-7108.');
    }
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://aaronmichaelservices.com/services/flooring/floor-remodeling');
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

      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Floor Remodeling Services</h1>
          <p className="text-xl mb-8">Transform your Buffalo home with professional floor remodeling. 680+ successful room transformations with quality materials and expert installation.</p>
          <div className="flex gap-4 mb-8">
            <div className="bg-purple-800 px-4 py-2 rounded-lg flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span>680+ Remodels</span>
            </div>
          </div>
          <a href="tel:716-533-7108" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center">
            <Phone className="w-5 h-5 mr-2" />Call: 716-533-7108
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Floor Remodeling Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Complete Room Transformations</h3>
              <p className="text-lg text-gray-700 mb-6">Floor remodeling goes beyond simple replacement. It's about transforming your space with new flooring that matches your lifestyle and enhances your home's value. Aaron Michael Services specializes in complete floor remodeling projects throughout Buffalo NY, handling everything from removal of old flooring to installation of beautiful new surfaces.</p>
              <p className="text-lg text-gray-700 mb-6">Our floor remodeling services include hardwood refinishing, tile replacement, luxury vinyl installation, and complete flooring transformations. With 680+ completed remodeling projects, we understand how to update your floors while minimizing disruption to your daily life.</p>
              <ul className="space-y-3">
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" /><span>Complete floor removal and disposal</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" /><span>Subfloor repair and preparation</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" /><span>New flooring installation</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" /><span>Trim and transition work</span></li>
              </ul>
            </div>
            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Popular Remodeling Projects</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Kitchen Floor Remodeling</h4>
                  <p className="text-gray-700 mb-2">Update your kitchen with waterproof luxury vinyl, durable tile, or warm hardwood flooring.</p>
                  <p className="text-sm text-gray-600">$4,500 - $9,500 typical range</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Bathroom Floor Remodeling</h4>
                  <p className="text-gray-700 mb-2">Replace outdated tile with beautiful porcelain or waterproof vinyl options.</p>
                  <p className="text-sm text-gray-600">$2,200 - $4,800 typical range</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Living Room Remodeling</h4>
                  <p className="text-gray-700 mb-2">Transform living spaces with elegant hardwood or modern luxury vinyl plank.</p>
                  <p className="text-sm text-gray-600">$5,500 - $12,000 typical range</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Whole Floor Remodeling</h4>
                  <p className="text-gray-700 mb-2">Update multiple rooms or entire floors with coordinated flooring throughout.</p>
                  <p className="text-sm text-gray-600">$10,000 - $25,000+ typical range</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Floor Remodeling Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-purple-100 text-purple-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="font-bold mb-3">Consultation</h3>
              <p className="text-gray-600 text-sm">Discuss your vision, preferences, budget, and timeline for your floor remodeling project.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-purple-100 text-purple-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="font-bold mb-3">Design & Select</h3>
              <p className="text-gray-600 text-sm">Choose flooring materials, colors, and patterns that match your style and needs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-purple-100 text-purple-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="font-bold mb-3">Preparation</h3>
              <p className="text-gray-600 text-sm">Remove old flooring, repair subfloor, and prepare the space for new installation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-purple-100 text-purple-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="font-bold mb-3">Installation</h3>
              <p className="text-gray-600 text-sm">Expert installation with attention to detail, followed by cleanup and final inspection.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Floor Remodeling FAQs</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">How long does floor remodeling take?</h3>
              <p className="text-gray-700">Most single-room remodels take 3-5 days. Larger projects or whole-floor remodeling may take 1-2 weeks depending on scope.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">Can I stay in my home during remodeling?</h3>
              <p className="text-gray-700">Yes, we work room-by-room when possible to minimize disruption. We discuss scheduling during consultation to fit your needs.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">What's included in floor remodeling?</h3>
              <p className="text-gray-700">Complete service includes removal of old flooring, subfloor prep, new installation, trim work, and cleanup.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">How much does floor remodeling cost?</h3>
              <p className="text-gray-700">Projects typically range from $4,200-$18,500 depending on room size, material selection, and project complexity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Remodel Your Floors?</h2>
          <p className="text-xl mb-8">Contact us for a free consultation and transform your Buffalo home with expert floor remodeling.</p>
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

export default FloorRemodeling;
