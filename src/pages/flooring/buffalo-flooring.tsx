import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Star, Shield, ArrowRight, Home, Award } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingCallButton from '../../components/FloatingCallButton';

const BuffaloFlooring = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Buffalo Flooring",
    "description": "Complete Buffalo flooring services. Installation, refinishing, repair. Hardwood, tile, vinyl specialists. 950+ projects, 22+ years serving WNY.",
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
      "priceRange": "$2800-$25000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Buffalo Flooring | Expert Installation & Refinishing | Aaron Michael Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete Buffalo flooring services. Installation, refinishing, repair. Hardwood, tile, vinyl specialists. 950+ projects, 22+ years serving WNY. Free estimates 716-533-7108.');
    }
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://aaronmichaelservices.com/services/flooring/buffalo-flooring');
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

      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Buffalo Flooring Services</h1>
          <p className="text-xl mb-8 text-gray-100">Complete flooring solutions for Buffalo homes and businesses. Installation, refinishing, and repair services with 22+ years of expertise.</p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center bg-gray-700 px-4 py-2 rounded-lg">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="font-semibold">950+ Projects</span>
            </div>
            <div className="flex items-center bg-gray-700 px-4 py-2 rounded-lg">
              <Award className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="font-semibold">22+ Years Experience</span>
            </div>
          </div>
          <a href="tel:716-533-7108" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center">
            <Phone className="w-5 h-5 mr-2" />Call: 716-533-7108
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Complete Buffalo Flooring Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Home className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Installation</h3>
              <p className="text-gray-600">Professional installation of all flooring types. Hardwood, tile, vinyl, laminate, and carpet with expert precision.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Refinishing</h3>
              <p className="text-gray-600">Hardwood floor refinishing and restoration services. Sanding, staining, and finishing to restore beauty.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <CheckCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Repair</h3>
              <p className="text-gray-600">Expert flooring repairs for all types. Fix damaged boards, tiles, or sections quickly and affordably.</p>
            </div>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">Buffalo Flooring by Aaron Michael Services delivers comprehensive flooring solutions throughout Western New York. With over 950 completed projects and 22 years of professional experience, we've become Buffalo's trusted choice for residential and commercial flooring needs. Our team specializes in every aspect of flooring work, from new installations to refinishing existing surfaces and providing expert repairs.</p>
            <p className="text-lg text-gray-700 mb-6">We understand that choosing the right flooring is a significant investment in your property. That's why we offer personalized consultations to help you select materials that match your lifestyle, budget, and aesthetic preferences. Whether you're renovating a single room or updating your entire home, our licensed and insured professionals ensure quality results that stand the test of time.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Buffalo Flooring Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Hardwood Flooring</h3>
              <p className="text-gray-600 mb-4">Timeless elegance and durability. Choose from oak, maple, cherry, and exotic species in solid or engineered options.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />Solid & engineered hardwood</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />Refinishing services available</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />Custom stains & finishes</li>
              </ul>
              <p className="text-sm text-gray-500">Starting at $8-15/sq ft installed</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Luxury Vinyl Plank</h3>
              <p className="text-gray-600 mb-4">Waterproof, durable, and realistic wood-look flooring. Perfect for kitchens, bathrooms, and basements.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />100% waterproof options</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />Realistic wood & stone looks</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />Easy maintenance</li>
              </ul>
              <p className="text-sm text-gray-500">Starting at $5-10/sq ft installed</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Tile Flooring</h3>
              <p className="text-gray-600 mb-4">Ceramic, porcelain, and natural stone options. Ideal for high-moisture areas and high-traffic spaces.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />Ceramic & porcelain tile</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />Natural stone installation</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />Custom patterns available</li>
              </ul>
              <p className="text-sm text-gray-500">Starting at $8-18/sq ft installed</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Laminate Flooring</h3>
              <p className="text-gray-600 mb-4">Affordable, durable, and easy to maintain. Great wood-look alternative for budget-conscious homeowners.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />Budget-friendly option</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />Scratch & wear resistant</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />Easy installation</li>
              </ul>
              <p className="text-sm text-gray-500">Starting at $3-7/sq ft installed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Buffalo Flooring FAQs</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">What's the best flooring for Buffalo's climate?</h3>
              <p className="text-gray-700">Engineered hardwood and luxury vinyl plank perform well in Buffalo's humidity changes. Both resist expansion/contraction better than solid hardwood.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">How long does installation take?</h3>
              <p className="text-gray-700">Most residential projects take 2-5 days. Larger spaces or complex patterns may require additional time. We provide detailed timelines upfront.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">Do you offer financing?</h3>
              <p className="text-gray-700">Contact us to discuss payment options for your Buffalo flooring project. We work to make quality flooring affordable for all budgets.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">Can you match existing flooring?</h3>
              <p className="text-gray-700">We can often match or closely coordinate with existing flooring for additions and repairs, depending on the material and availability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for New Floors in Buffalo?</h2>
          <p className="text-xl mb-8">Get expert Buffalo flooring installation with free estimates and quality service. Call today!</p>
          <a href="tel:716-533-7108" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center mx-auto">
            <Phone className="w-5 h-5 mr-2" />Call: 716-533-7108
          </a>
        </div>
      </section>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default BuffaloFlooring;
