import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Star, ArrowRight, Home, Award, Hammer } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingCallButton from '../../components/FloatingCallButton';

const FloorRenovations = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Floor Renovations",
    "description": "Complete floor renovation services in Buffalo NY. Multi-room, whole-home, commercial projects. 380+ renovations completed. 22+ years experience.",
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
      "priceRange": "$8500-$45000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Floor Renovations Buffalo NY | Multi-Room & Whole Home Projects | Aaron Michael";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete floor renovation services in Buffalo NY. Multi-room, whole-home, commercial projects. 380+ renovations completed. 22+ years experience. Call 716-533-7108.');
    }
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://aaronmichaelservices.com/services/flooring/floor-renovations');
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

      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Complete Floor Renovations</h1>
          <p className="text-xl mb-8">Large-scale floor renovation projects for Buffalo NY homes and businesses. Multi-room, whole-home, and commercial floor transformations with expert coordination and quality results.</p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-slate-700 px-4 py-2 rounded-lg flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span>380+ Renovations</span>
            </div>
            <div className="bg-slate-700 px-4 py-2 rounded-lg flex items-center">
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
          <h2 className="text-3xl font-bold text-center mb-12">Large-Scale Floor Renovation Expertise</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">Floor renovations differ from simple room updates—they involve coordinating multiple spaces, managing complex logistics, and ensuring cohesive results throughout your property. Aaron Michael Services specializes in large-scale floor renovations with 380+ completed projects across Buffalo NY. We handle whole-home renovations, multi-room updates, and commercial floor transformations with the expertise and resources these projects demand.</p>
              <p className="text-lg text-gray-700 mb-6">Our renovation approach focuses on minimal disruption while maintaining quality throughout. We create detailed project plans, coordinate material deliveries, schedule work efficiently, and communicate progress clearly. Whether updating an entire home before selling, renovating a newly purchased property, or upgrading commercial space, we deliver professional results on schedule and within budget.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">What We Handle</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-slate-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Project Planning:</strong> Detailed scheduling and material coordination</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-slate-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Complete Removal:</strong> All existing flooring throughout project areas</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-slate-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Subfloor Work:</strong> Comprehensive repairs, leveling, moisture treatment</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-slate-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Installation:</strong> Professional installation with coordinated transitions</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-slate-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Finishing:</strong> All trim, molding, and final details</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Types of Floor Renovations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Home className="w-12 h-12 text-slate-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Whole-Home Renovation</h3>
              <p className="text-gray-600 mb-4">Complete flooring renovation throughout entire home with coordinated materials and seamless transitions between rooms.</p>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />All floors on one level</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Multiple flooring types</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Cohesive design flow</li>
              </ul>
              <p className="text-sm text-gray-500">$15,000 - $45,000+ typical</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Hammer className="w-12 h-12 text-slate-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Multi-Room Projects</h3>
              <p className="text-gray-600 mb-4">Coordinate flooring updates across several rooms, perfect for partial home updates or specific living areas.</p>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />3-5 room coordination</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Phased scheduling</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />Minimal disruption</li>
              </ul>
              <p className="text-sm text-gray-500">$8,500 - $20,000 typical</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Award className="w-12 h-12 text-slate-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Commercial Renovation</h3>
              <p className="text-gray-600 mb-4">Large-scale flooring for offices, retail spaces, and commercial properties with durability and aesthetics.</p>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />After-hours scheduling</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />High-traffic materials</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />ADA compliance</li>
              </ul>
              <p className="text-sm text-gray-500">Custom pricing per project</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Renovation Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-slate-100 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Initial Consultation & Assessment</h3>
                  <p className="text-gray-700">Meet to discuss your renovation goals, timeline, and budget. Assess existing conditions and measure all spaces involved in the project.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-slate-100 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Design & Material Selection</h3>
                  <p className="text-gray-700">Choose flooring types for each area, coordinate colors and transitions, finalize material orders and create detailed project plan.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-slate-100 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Removal & Preparation</h3>
                  <p className="text-gray-700">Remove all existing flooring, inspect and repair subfloors, address moisture issues, level surfaces, and prepare for installation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-slate-100 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Installation & Finishing</h3>
                  <p className="text-gray-700">Install new flooring room by room, coordinate transitions and thresholds, install trim and molding, complete final inspection and walkthrough.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Floor Renovation FAQs</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">How long do floor renovations take?</h3>
              <p className="text-gray-700">Multi-room projects typically take 1-2 weeks. Whole-home renovations may take 2-4 weeks depending on size and complexity.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">Can we stay in our home during renovation?</h3>
              <p className="text-gray-700">In most cases, yes. We work area by area to minimize disruption and keep living spaces accessible throughout the project.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">Do you handle furniture moving?</h3>
              <p className="text-gray-700">We can assist with moving furniture or work around your schedule. We discuss logistics during planning to determine the best approach.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">What if we want different flooring in different rooms?</h3>
              <p className="text-gray-700">That's common! We coordinate different flooring types and ensure proper transitions between spaces for cohesive, professional results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Plan Your Floor Renovation Project</h2>
          <p className="text-xl mb-8">Contact us to discuss your multi-room or whole-home floor renovation. Expert coordination and quality results throughout Buffalo NY.</p>
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

export default FloorRenovations;
