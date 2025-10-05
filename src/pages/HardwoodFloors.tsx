import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './hardwood-floors-schema.json';

const HardwoodFloors: React.FC = () => {
  useEffect(() => {
    document.title = "Hardwood Flooring Installation & Maintenance | Buffalo, Kenmore, Tonawanda";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Aaron Michael Services provides expert hardwood flooring installation, refinishing, and maintenance in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Durable, beautiful flooring solutions for your home."
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
        title="Hardwood Flooring Installation & Maintenance | Buffalo, Kenmore, Tonawanda"
        description="Aaron Michael Services provides expert hardwood flooring installation, refinishing, and maintenance in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Durable, beautiful flooring solutions for your home."
        keywords="hardwood flooring Buffalo, hardwood floor installation, floor refinishing Kenmore, hardwood maintenance Tonawanda"
        canonicalUrl="https://aaronmichaelservices.com/services/hardwood-floors"
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-800 to-yellow-600 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-gray-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Hardwood Floors</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hardwood Flooring Installation & Maintenance</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert hardwood flooring solutions for homes in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              Aaron Michael Services specializes in hardwood flooring installation, refinishing, and maintenance throughout Western New York. Hardwood floors provide timeless beauty, increased property value, and long-lasting durability when properly installed and cared for.
            </p>
            <p>
              Our experienced team works with solid and engineered hardwood to deliver a custom look for every home in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. We help you select the perfect wood species, finish, and design for your lifestyle and space.
            </p>
          </section>

          {/* Installation Types */}
          <section className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Hardwood Flooring Installation Options</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Solid Hardwood:</strong> Durable and long-lasting, ideal for living rooms and hallways.</li>
              <li><strong>Engineered Hardwood:</strong> Versatile and moisture-resistant, perfect for kitchens and basements.</li>
              <li><strong>Prefinished Hardwood:</strong> Saves time with factory-applied finishes for quick installation.</li>
              <li><strong>Custom Staining & Finishing:</strong> Tailor your floor’s color and sheen to match your decor.</li>
              <li><strong>Patterned Layouts:</strong> Herringbone, diagonal, and plank designs for a unique aesthetic.</li>
            </ul>
          </section>

          {/* Maintenance & Durability */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Maintenance and Durability of Hardwood Floors</h2>
            <p>
              Proper care ensures hardwood floors last decades. Follow these best practices:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Regular sweeping or vacuuming to remove dust and grit.</li>
              <li>Use furniture pads to prevent scratches and dents.</li>
              <li>Clean spills immediately to prevent water damage.</li>
              <li>Refinishing every 7–10 years to restore luster and protect the wood.</li>
              <li>Avoid harsh chemicals; use manufacturer-recommended cleaning solutions.</li>
            </ul>
            <p className="text-gray-600 italic mt-4">
              According to the <a href="https://www.nahb.org/" className="text-blue-600 hover:underline">National Association of Home Builders</a>, well-maintained hardwood floors can last 30+ years and significantly increase property value.
            </p>
          </section>

          {/* Seamless Transitions */}
          <section className="space-y-6 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Seamless Transitions Between Flooring Types</h2>
            <p>
              Combining hardwood with tile, carpet, or vinyl requires precise transition strips and professional installation. Our team ensures smooth, safe, and aesthetically pleasing transitions in every home.
            </p>
            <p>
              We handle:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Leveling floors for uniformity</li>
              <li>Custom trim and moldings</li>
              <li>Durable transition strips to prevent tripping hazards</li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Hardwood Flooring FAQs</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What type of hardwood is best for my home?</h3>
              <p>Solid hardwood offers longevity, while engineered hardwood works well in areas with moisture. Our team will recommend the best option based on your space and lifestyle.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How do I maintain hardwood floors?</h3>
              <p>Regular cleaning, immediate spill removal, and refinishing every 7–10 years are essential for durability.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Can hardwood be installed over radiant heat?</h3>
              <p>Yes, engineered hardwood is ideal for radiant heat systems. We ensure proper installation to avoid warping or gaps.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-yellow-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Hardwood Flooring Project</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Trust Aaron Michael Services for expert installation, refinishing, and maintenance of hardwood floors in Buffalo, Kenmore, Tonawanda, and surrounding areas.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                to="/contact" 
                className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
              >
                Request a Quote
              </Link>
              <a 
                href="tel:+17165337108" 
                className="inline-block border border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
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

export default HardwoodFloors;