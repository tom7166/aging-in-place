import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import schemaData from './flooring-transitions-schema.json';

const FlooringTransitions: React.FC = () => {
  useEffect(() => {
    document.title = "Seamless Flooring Transitions | Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Learn how to create seamless transitions between different flooring types in your home or business. Aaron Michael Services serves Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga."
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
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-blue-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Seamless Flooring Transitions</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Seamless Transitions Between Different Flooring Types</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert guidance on creating smooth, safe, and aesthetically pleasing transitions between flooring types in Buffalo-area homes and businesses.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              At <strong>Aaron Michael Services</strong>, we understand that transitioning between flooring types—like hardwood to tile or carpet to vinyl—can be tricky. Improper transitions cause trip hazards, damage to flooring edges, and a jarring aesthetic.
            </p>
            <p>
              Our team designs and installs seamless flooring transitions that are safe, ADA-compliant, and visually appealing. Serving Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga, we provide expert solutions for both residential and commercial properties.
            </p>
          </section>

          {/* Importance of Seamless Transitions */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Why Seamless Transitions Are Essential</h2>
            <p>
              Flooring transitions are more than cosmetic—they impact safety, functionality, and durability. Uneven or poorly planned transitions increase fall risk, particularly for seniors or those using mobility devices like wheelchairs and walkers.
            </p>
            <p>
              ADA guidelines recommend smooth, low-pile, and slip-resistant transitions between different surfaces. Buffalo homes and businesses face snow, ice, and moisture challenges that require careful planning to maintain safe, durable flooring junctions.
            </p>
          </section>

          {/* Types of Transitions */}
          <section className="space-y-12">
            <h2 className="text-3xl font-bold mb-6">Types of Flooring Transitions</h2>

            <div className="space-y-8">

              {/* T-Molding */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">T-Molding Transitions</h3>
                <p>
                  T-molding is perfect for connecting two floors of equal height, such as hardwood to laminate or tile. The "T" shape bridges the gap, creating a clean and safe transition.
                </p>
                <p>
                  Buffalo homes benefit from T-molding in open living spaces or hallways where two similar-height floors meet. Proper installation prevents movement and protects edges from chipping.
                </p>
              </div>

              {/* Reducer Strips */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Reducer Strips</h3>
                <p>
                  Reducer strips are ideal when one floor is higher than the other, such as hardwood to vinyl. The gentle slope reduces trip hazards and protects the flooring edges.
                </p>
                <p>
                  Our team installs low-profile, durable reducers that maintain ADA compliance and aesthetic continuity for homes and businesses in Western New York.
                </p>
              </div>

              {/* Carpet to Hard Surface */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Carpet to Hard Surface Transitions</h3>
                <p>
                  Transitioning from carpet to tile or wood requires a secure edge to prevent fraying and maintain a flush surface. We use metal or vinyl strips that hold carpet fibers in place while providing a smooth walkable surface.
                </p>
                <p>
                  Properly executed carpet transitions enhance mobility and safety, especially in high-traffic areas.
                </p>
              </div>

              {/* Thresholds for Doorways */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Thresholds for Doorways</h3>
                <p>
                  Doorway thresholds provide a finished look and bridge small height differences. ADA-compliant thresholds maintain a low profile, minimizing tripping hazards.
                </p>
                <p>
                  We install thresholds that accommodate wheelchairs, walkers, and daily foot traffic while matching the surrounding flooring style.
                </p>
              </div>

              {/* Custom Transitions */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Custom Transitions</h3>
                <p>
                  Some Buffalo homes have unique challenges requiring custom transition solutions. Our team can fabricate seamless transitions using wood, metal, or engineered materials to match existing flooring and maintain a smooth, safe passage.
                </p>
                <p>
                  Custom transitions are especially important in aging-in-place renovations, ensuring accessibility without compromising style.
                </p>
              </div>

            </div>
          </section>

          {/* Installation & Maintenance */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Installation and Care Tips</h2>
            <p>
              Proper preparation is essential for seamless flooring transitions. Subfloors must be level, clean, and dry before installing any transition. Using the correct adhesive and fasteners ensures stability over time.
            </p>
            <p>
              Maintenance is simple: check for movement, clean gently, and replace worn strips as needed. In Buffalo’s winter months, snow and moisture require extra attention to avoid slips and protect flooring edges.
            </p>
            <p>
              Our experts at Aaron Michael Services provide precise installation and guidance for low-maintenance transitions that remain safe and visually cohesive.
            </p>
          </section>

          {/* FAQs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">FAQs on Flooring Transitions</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What transition is best for different floor heights?</h3>
              <p>Reducer strips provide a safe, smooth slope when floors are of unequal heights, protecting edges and preventing trips.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Are custom transitions ADA-compliant?</h3>
              <p>Yes, Aaron Michael Services ensures all custom transitions meet ADA guidelines for low-profile, smooth, and safe flooring connections.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How often should transitions be inspected?</h3>
              <p>Regular checks every 3–6 months are recommended, with immediate attention after heavy traffic or seasonal changes.</p>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ensure Safe and Seamless Flooring Today</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact Aaron Michael Services for professional installation of seamless flooring transitions throughout Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Safety, durability, and aesthetics guaranteed.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                to="/contact" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Free Consultation
              </Link>
              <a 
                href="tel:+17165337108" 
                className="inline-block border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Call Now: (716) 533-7108
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default FlooringTransitions;