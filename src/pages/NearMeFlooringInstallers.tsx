import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './near-me-flooring-installers-schema.json';

const NearMeFlooringInstallers: React.FC = () => {
  useEffect(() => {
    document.title = "Near Me Flooring Installers | Buffalo, Kenmore, Tonawanda | Aaron Michael Services";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Aaron Michael Services provides expert flooring installation near you in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Hardwood, LVP, tile, and modern flooring installers ready for your project."
      );
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet
        title="Near Me Flooring Installers | Buffalo, Kenmore, Tonawanda | Aaron Michael Services"
        description="Aaron Michael Services provides expert flooring installation near you in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Hardwood, LVP, tile, and modern flooring installers ready for your project."
        keywords="flooring installers near me, local flooring contractor Buffalo, flooring installation Kenmore"
        canonicalUrl="https://aaronmichaelservices.com/services/near-me-flooring-installers"
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-gray-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Near Me Flooring Installers</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Flooring Installers Near You</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Trusted local flooring installation for Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Hardwood, LVP, tile, and modern flooring solutions.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              Aaron Michael Services offers professional flooring installation near you, bringing years of expertise to every project. We specialize in hardwood, luxury vinyl plank (LVP), tile, and other modern flooring solutions designed for durability, style, and comfort in homes throughout Buffalo and Western New York.
            </p>
            <p>
              Our team ensures precise installation, seamless transitions between flooring types, and adherence to all local building codes. With our expert guidance, you can transform your home with high-quality flooring that lasts for years.
            </p>
          </section>

          {/* Services Overview */}
          <section className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Flooring Installation Services Near You</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Hardwood Flooring Installation:</strong> Precision installation for long-lasting beauty and elegance.</li>
              <li><strong>Luxury Vinyl Plank (LVP) Installation:</strong> Durable, waterproof, and perfect for kitchens and bathrooms.</li>
              <li><strong>Tile Installation:</strong> Ceramic, porcelain, or natural stone for high-traffic and wet areas.</li>
              <li><strong>Modern Flooring Solutions:</strong> Eco-friendly options including bamboo, cork, and sustainable materials.</li>
            </ul>
          </section>

          {/* Benefits of Local Installers */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Why Choose Local Flooring Installers?</h2>
            <p>
              Hiring local flooring experts ensures fast response times, familiarity with local codes, and a deep understanding of regional home construction and weather impacts. Aaron Michael Services offers:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Prompt scheduling and same-day estimates in Buffalo and surrounding areas</li>
              <li>Knowledge of local building codes and requirements</li>
              <li>Professional advice on flooring material selection for your home's environment</li>
              <li>Experienced crews who deliver a clean, efficient, and professional installation</li>
            </ul>
          </section>

          {/* Seamless Transitions */}
          <section className="space-y-6 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Seamless Transitions Between Flooring Types</h2>
            <p>
              Combining multiple flooring types in one home requires skillful transitions. Our local installers provide:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Custom transition strips between hardwood, LVP, tile, and carpet</li>
              <li>Subfloor leveling for smooth edges</li>
              <li>Trim and molding that complement your home’s design</li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">FAQs About Flooring Installers Near You</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What areas do you serve?</h3>
              <p>We serve Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga for all flooring installation projects.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Do you provide free estimates?</h3>
              <p>Yes, we offer free consultations and estimates to help homeowners make informed decisions.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Can you install multiple flooring types in one home?</h3>
              <p>Absolutely. Our team specializes in combining hardwood, LVP, tile, and other modern flooring with seamless transitions.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gray-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Flooring Installers Near You Today</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Aaron Michael Services provides expert, local flooring installation throughout Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                to="/contact" 
                className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Request a Quote
              </Link>
              <a 
                href="tel:+17165337108" 
                className="inline-block border border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Call Now: (716) 533-7108
              </a>
            </div>
          </section>

        </div>
      </main>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default NearMeFlooringInstallers;