import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Star, ArrowRight, Home, Award } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingCallButton from '../../components/FloatingCallButton';

const WoodFloorReplacementNearMe = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wood Floor Replacement Near Me",
    "description": "Wood floor replacement near Buffalo NY. Expert hardwood removal & installation. Solid, engineered, luxury vinyl. 520+ projects.",
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
      "priceRange": "$5500-$22000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Wood Floor Replacement Near Me Buffalo NY | Expert Installation | Aaron Michael";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Wood floor replacement near Buffalo NY. Expert hardwood removal & installation. Solid, engineered, luxury vinyl. 520+ projects. Free quotes 716-533-7108.');
    }
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://aaronmichaelservices.com/services/flooring/wood-floor-replacement-near-me');
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

      <section className="bg-gradient-to-r from-amber-900 to-orange-900 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Wood Floor Replacement Near Buffalo NY</h1>
          <p className="text-xl mb-8">Expert wood floor replacement services. Remove old, damaged wood floors and install beautiful new hardwood, engineered, or luxury vinyl flooring.</p>
          <div className="flex gap-4 mb-8">
            <div className="bg-amber-800 px-4 py-2 rounded-lg flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span>520+ Replacements</span>
            </div>
            <div className="bg-amber-800 px-4 py-2 rounded-lg flex items-center">
              <Award className="w-5 h-5 text-yellow-400 mr-2" />
              <span>22+ Years</span>
            </div>
          </div>
          <a href="tel:716-533-7108" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center">
            <Phone className="w-5 h-5 mr-2" />Call: 716-533-7108
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Wood Floor Replacement</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">When wood floors are beyond repair—warped, extensively damaged, or outdated—replacement is the best solution. Aaron Michael Services provides complete wood floor replacement services throughout Buffalo NY with 520+ successful projects. We handle the entire process from removal of old flooring through installation of beautiful new wood surfaces.</p>
              <p className="text-lg text-gray-700 mb-6">Our wood floor replacement services include removal and disposal of existing floors, subfloor inspection and repair, moisture testing, and professional installation of your chosen flooring. Whether you prefer solid hardwood, engineered wood, or wood-look luxury vinyl, we deliver quality results with minimal disruption to your home.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-amber-600 mr-3 mt-1" /><span>Complete removal of damaged wood floors</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-amber-600 mr-3 mt-1" /><span>Subfloor repair and moisture remediation</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-amber-600 mr-3 mt-1" /><span>Professional installation of new wood flooring</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-amber-600 mr-3 mt-1" /><span>Finishing, trim, and transition work</span></li>
              </ul>
            </div>
            <div className="bg-amber-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Signs You Need Replacement</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div><span><strong>Extensive Water Damage:</strong> Warped, cupped, or buckled boards throughout</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div><span><strong>Structural Issues:</strong> Soft spots, sagging, or subfloor damage</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div><span><strong>Severe Wear:</strong> Deep scratches, gouges, or finish damage beyond refinishing</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div><span><strong>Outdated Style:</strong> Old parquet or styles you want to update</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div><span><strong>Noise Issues:</strong> Constant squeaking that can't be fixed</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Replacement Flooring Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Home className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Solid Hardwood</h3>
              <p className="text-gray-600 mb-4">Premium solid wood flooring in oak, maple, cherry, and exotic species. Can be refinished multiple times.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />3/4" thick solid wood</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Multiple refinishing possible</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Long-lasting investment</li>
              </ul>
              <p className="text-sm text-gray-500">$10-18/sq ft installed</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Home className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Engineered Hardwood</h3>
              <p className="text-gray-600 mb-4">Stable engineered construction with real wood veneer. Better for humidity changes than solid wood.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Dimensionally stable</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Real wood top layer</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Below-grade compatible</li>
              </ul>
              <p className="text-sm text-gray-500">$8-14/sq ft installed</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Home className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Luxury Vinyl Plank</h3>
              <p className="text-gray-600 mb-4">Waterproof wood-look flooring. Durable, low-maintenance, and perfect for high-moisture areas.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />100% waterproof</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Realistic wood appearance</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Easy maintenance</li>
              </ul>
              <p className="text-sm text-gray-500">$6-12/sq ft installed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Replacement Project Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">$2,500-$5,000</div>
              <h3 className="font-bold mb-2">Small Room</h3>
              <p className="text-sm text-gray-600">Bedroom or office (150-250 sq ft)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">$5,000-$9,500</div>
              <h3 className="font-bold mb-2">Medium Space</h3>
              <p className="text-sm text-gray-600">Living room or kitchen (300-500 sq ft)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">$9,500-$16,000</div>
              <h3 className="font-bold mb-2">Large Area</h3>
              <p className="text-sm text-gray-600">Multiple rooms (600-1000 sq ft)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">$16,000+</div>
              <h3 className="font-bold mb-2">Whole Home</h3>
              <p className="text-sm text-gray-600">Complete home replacement (1000+ sq ft)</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8">*Prices include removal, disposal, subfloor prep, and new flooring installation. Final cost depends on material selection and project complexity.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Wood Floor Replacement FAQs</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">Should I replace or refinish my wood floors?</h3>
              <p className="text-gray-700">If floors have extensive damage, structural issues, or are beyond refinishing, replacement is the better option for long-term results.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">How long does wood floor replacement take?</h3>
              <p className="text-gray-700">Most residential projects take 3-7 days including removal, subfloor work, installation, and finishing. Larger projects may take longer.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">Can you match my existing wood floors?</h3>
              <p className="text-gray-700">We can often match or closely coordinate existing wood floors for additions or partial replacements, depending on species and availability.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">What if you find subfloor damage?</h3>
              <p className="text-gray-700">We inspect subfloors during removal and repair any damage as part of proper wood floor replacement to ensure stable, lasting results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Wood Floor Replacement Near You?</h2>
          <p className="text-xl mb-8">Get expert wood floor replacement in Buffalo NY with quality materials and professional installation. Free estimates available.</p>
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

export default WoodFloorReplacementNearMe;
