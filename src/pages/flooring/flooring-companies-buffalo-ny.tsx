import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Star, Award, Shield, ArrowRight, Home } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingCallButton from '../../components/FloatingCallButton';

const FlooringCompaniesBuffaloNY = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flooring Companies Buffalo NY",
    "description": "Leading flooring company in Buffalo NY. Expert installation, competitive pricing. 1,200+ projects, BBB accredited. All flooring types.",
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
      "priceRange": "$2200-$35000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Top Flooring Companies Buffalo NY | Expert Installation | Aaron Michael Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading flooring company in Buffalo NY. Expert installation, competitive pricing. 1,200+ projects, BBB accredited. All flooring types. Free estimates 716-533-7108.');
    }
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://aaronmichaelservices.com/services/flooring/flooring-companies-buffalo-ny');
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

      <section className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Top Flooring Companies Buffalo NY</h1>
          <p className="text-xl mb-8">Leading flooring company with 22+ years experience, 1,200+ completed projects, and a reputation for excellence in Buffalo and Western New York.</p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-indigo-800 px-4 py-2 rounded-lg flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="bg-indigo-800 px-4 py-2 rounded-lg flex items-center">
              <Award className="w-5 h-5 text-yellow-400 mr-2" />
              <span>1,200+ Projects</span>
            </div>
          </div>
          <a href="tel:716-533-7108" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center">
            <Phone className="w-5 h-5 mr-2" />Call: 716-533-7108
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart from Other Flooring Companies</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">22+ Years Experience</h3>
              <p className="text-gray-600">Over two decades serving Buffalo with quality flooring installation and exceptional customer service.</p>
            </div>
            <div className="text-center p-6">
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed, insured, and bonded for your protection and peace of mind.</p>
            </div>
            <div className="text-center p-6">
              <Star className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-gray-600">1,200+ satisfied customers with 4.9/5 rating across all review platforms.</p>
            </div>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">When comparing flooring companies in Buffalo NY, Aaron Michael Services stands out for quality workmanship, transparent pricing, and customer satisfaction. As one of the area's most trusted flooring companies, we've built our reputation on delivering exceptional results for over 22 years. Our experienced team handles residential and commercial projects of all sizes with the same attention to detail and commitment to excellence.</p>
            <p className="text-lg text-gray-700 mb-6">Unlike larger flooring companies that may outsource work, we maintain direct control over every project from initial consultation through final installation. This hands-on approach ensures consistent quality and allows us to address any concerns immediately. We work with premium flooring manufacturers to provide the best materials at competitive prices, and our installation techniques meet or exceed industry standards.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Flooring Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">Hardwood Flooring</h3>
              <p className="text-gray-600 text-sm mb-3">Solid & engineered hardwood installation, refinishing, repair</p>
              <p className="text-blue-600 font-semibold">$8-15/sq ft</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">Luxury Vinyl</h3>
              <p className="text-gray-600 text-sm mb-3">Waterproof LVP & sheet vinyl installation</p>
              <p className="text-blue-600 font-semibold">$5-10/sq ft</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">Tile Flooring</h3>
              <p className="text-gray-600 text-sm mb-3">Ceramic, porcelain, natural stone</p>
              <p className="text-blue-600 font-semibold">$8-18/sq ft</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">Laminate</h3>
              <p className="text-gray-600 text-sm mb-3">Affordable wood-look flooring options</p>
              <p className="text-blue-600 font-semibold">$3-7/sq ft</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Questions About Flooring Companies?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">How do I choose between flooring companies?</h3>
              <p className="text-gray-700">Look for experience, licensing, reviews, and transparent pricing. Request references and compare multiple estimates before deciding.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">What should I expect from a flooring company?</h3>
              <p className="text-gray-700">Professional companies provide detailed estimates, timeline commitments, quality materials, skilled installation, and warranty coverage.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">Do flooring companies offer warranties?</h3>
              <p className="text-gray-700">Reputable flooring companies provide workmanship warranties in addition to manufacturer warranties on materials.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">How long has your company been in business?</h3>
              <p className="text-gray-700">Aaron Michael Services has served Buffalo NY for over 22 years with 1,200+ completed flooring projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Choose Buffalo's Trusted Flooring Company</h2>
          <p className="text-xl mb-8">Get expert flooring installation with transparent pricing and quality service. Contact us today!</p>
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

export default FlooringCompaniesBuffaloNY;
