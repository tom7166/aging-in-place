import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Star, Shield, ArrowRight, Home, Award, Hammer } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingCallButton from '../../components/FloatingCallButton';

const FlooringContractorsBuffaloNY = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flooring Contractors Buffalo NY",
    "description": "Top flooring contractors in Buffalo NY. Expert hardwood, tile, vinyl, carpet installation. 850+ projects, 22+ years experience. Licensed & insured.",
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
      },
      "priceRange": "$$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "287"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Buffalo", "addressRegion": "NY" },
      { "@type": "City", "name": "Amherst", "addressRegion": "NY" },
      { "@type": "City", "name": "Tonawanda", "addressRegion": "NY" }
    ],
    "offers": {
      "@type": "Offer",
      "priceRange": "$3500-$15000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Flooring Contractors Buffalo NY | Expert Installation | Aaron Michael Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Top flooring contractors in Buffalo NY. Expert installation of hardwood, tile, vinyl, carpet. 22+ years experience, 850+ projects completed. Licensed & insured. Call 716-533-7108.');
    }
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://aaronmichaelservices.com/services/flooring/flooring-contractors-buffalo-ny');
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

      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="mb-6 text-blue-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  <span>/</span>
                  <Link to="/services/hardwood-floors" className="hover:text-white transition-colors">Flooring Services</Link>
                  <span>/</span>
                  <span>Flooring Contractors Buffalo NY</span>
                </div>
              </nav>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Flooring Contractors Buffalo NY</h1>
              <p className="text-xl mb-8 text-blue-100">Expert installation of all flooring types. Licensed, insured, and trusted by 850+ Buffalo homeowners with over 22 years of professional service.</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-blue-800 px-4 py-2 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <div className="flex items-center bg-blue-800 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="font-semibold">850+ Projects</span>
                </div>
              </div>
              <a href="tel:716-533-7108" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center shadow-lg hover:shadow-xl transition-all">
                <Phone className="w-5 h-5 mr-2" />
                Call: 716-533-7108
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" /><span>Licensed & Insured Professional Contractors</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" /><span>22+ Years Serving Buffalo & WNY</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" /><span>All Flooring Types: Hardwood, Tile, Vinyl, Carpet</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" /><span>Competitive Pricing & Free Estimates</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" /><span>Quality Materials & Expert Craftsmanship</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Flooring Contractor Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From residential homes to commercial spaces, we handle all your flooring needs with professional expertise and quality materials.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Hammer className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Hardwood Flooring</h3>
              <p className="text-gray-600 mb-4">Expert installation of solid and engineered hardwood. Oak, maple, cherry, and exotic species. Professional refinishing and repair services.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />Solid & engineered installation</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />Refinishing & restoration</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />Custom stains & finishes</li>
              </ul>
              <Link to="/services/hardwood-floors" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Home className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Tile Flooring</h3>
              <p className="text-gray-600 mb-4">Professional ceramic, porcelain, and natural stone tile installation. Perfect for kitchens, bathrooms, and high-traffic areas.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />Ceramic & porcelain tile</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />Natural stone installation</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />Custom patterns & designs</li>
              </ul>
              <span className="text-gray-400 text-sm">Starting at $8-15/sq ft</span>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Vinyl & LVP</h3>
              <p className="text-gray-600 mb-4">Luxury vinyl plank and sheet vinyl installation. Waterproof, durable, and beautiful options for any room in your home.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />Luxury vinyl plank (LVP)</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />Sheet vinyl installation</li>
                <li className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />Waterproof & durable options</li>
              </ul>
              <Link to="/services/luxury-vinyl-plank" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Flooring Contractors Serving Buffalo NY</h2>
              <p className="text-lg text-gray-700 mb-6">With over 22 years of experience and 850+ completed projects, Aaron Michael Services has established itself as Buffalo's trusted flooring contractor. We specialize in all types of residential and commercial flooring installation, bringing quality craftsmanship and professional service to every project.</p>
              <p className="text-lg text-gray-700 mb-6">Our team of licensed and insured flooring professionals handles everything from material selection to final installation. We work with homeowners, property managers, and businesses throughout Western New York, providing comprehensive flooring solutions that combine durability with aesthetic appeal.</p>
              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h3 className="font-bold text-xl mb-3">Our Process:</h3>
                <ol className="space-y-3">
                  <li className="flex items-start"><span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold text-sm">1</span><span><strong>Free Consultation:</strong> Discuss your project, preferences, and budget</span></li>
                  <li className="flex items-start"><span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold text-sm">2</span><span><strong>Material Selection:</strong> Choose from quality flooring options</span></li>
                  <li className="flex items-start"><span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold text-sm">3</span><span><strong>Professional Installation:</strong> Expert installation with attention to detail</span></li>
                  <li className="flex items-start"><span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold text-sm">4</span><span><strong>Quality Inspection:</strong> Final walkthrough and satisfaction guarantee</span></li>
                </ol>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Project Investment Guide</h3>
              <div className="space-y-4 mb-8">
                <div className="border-b border-blue-600 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Small Room (100-200 sq ft)</span>
                    <span className="text-xl font-bold">$1,500-$4,000</span>
                  </div>
                  <p className="text-sm text-blue-200">Bedroom, bathroom, or office</p>
                </div>
                <div className="border-b border-blue-600 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Medium Space (300-500 sq ft)</span>
                    <span className="text-xl font-bold">$4,500-$8,500</span>
                  </div>
                  <p className="text-sm text-blue-200">Kitchen, living room, or multiple rooms</p>
                </div>
                <div className="border-b border-blue-600 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Whole Home (1000+ sq ft)</span>
                    <span className="text-xl font-bold">$8,000-$25,000+</span>
                  </div>
                  <p className="text-sm text-blue-200">Complete home flooring installation</p>
                </div>
              </div>
              <p className="text-sm text-blue-200 mb-6">*Prices vary based on material selection, room preparation, and project complexity. Free estimates provided.</p>
              <a href="tel:716-533-7108" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold w-full block text-center transition-colors">
                Get Your Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-xl mb-3">How long does flooring installation take?</h3>
              <p className="text-gray-700">Most residential flooring projects take 2-5 days depending on size and complexity. We provide detailed timelines during the consultation phase.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-xl mb-3">Do you offer free estimates?</h3>
              <p className="text-gray-700">Yes! We provide free, no-obligation estimates for all flooring projects. Call 716-533-7108 to schedule your consultation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-xl mb-3">What flooring is best for high-traffic areas?</h3>
              <p className="text-gray-700">For high-traffic areas, we recommend luxury vinyl plank, engineered hardwood, or porcelain tile. These options combine durability with aesthetic appeal.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-xl mb-3">Are you licensed and insured?</h3>
              <p className="text-gray-700">Absolutely. Aaron Michael Services is fully licensed and insured, providing peace of mind and protection for your property.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-xl mb-3">Do you remove old flooring?</h3>
              <p className="text-gray-700">Yes, we handle complete flooring removal, subfloor preparation, and disposal of old materials as part of our comprehensive service.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-xl mb-3">What areas do you serve?</h3>
              <p className="text-gray-700">We serve Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York with professional flooring contractor services.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Floors?</h2>
          <p className="text-xl mb-8 text-blue-100">Contact Buffalo's trusted flooring contractors for a free consultation and estimate. Quality installation, competitive pricing, and professional service guaranteed.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:716-533-7108" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center shadow-lg hover:shadow-xl transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call: 716-533-7108
            </a>
            <Link to="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center shadow-lg hover:shadow-xl transition-all">
              Request Free Estimate
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default FlooringContractorsBuffaloNY;
