import React from 'react';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ServiceAreas from '../components/ServiceAreas';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';
import FloatingCallButton from '../components/FloatingCallButton';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Building, Layers, ChefHat, Hammer } from 'lucide-react';

interface HomeProps {
  highContrastMode: boolean;
  toggleHighContrast: () => void;
}

const Home: React.FC<HomeProps> = ({ highContrastMode, toggleHighContrast }) => {
  return (
    <div className={`min-h-screen ${highContrastMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Header Navigation */}
      <Header highContrastMode={highContrastMode} toggleHighContrast={toggleHighContrast} />

      {/* Main Content */}
      <main id="main-content" role="main">
        <HeroSection highContrastMode={highContrastMode} />
        <AboutSection />
        <ServicesSection highContrastMode={highContrastMode} />
        <WhyChooseUs highContrastMode={highContrastMode} />
        <ServiceAreas highContrastMode={highContrastMode} />
        <FAQ highContrastMode={highContrastMode} />
        <ContactSection highContrastMode={highContrastMode} />
      </main>

      {/* FAQ Link Section - Before GrabBars Partner Section */}
      <section className="bg-blue-50 py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">
                Have Questions About Accessibility?
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Get answers to common questions about wheelchair ramps, accessible bathrooms, 
              aging in place modifications, and ADA compliance in Buffalo and Western New York.
            </p>
            <Link
              to="/faq"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services Showcase */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Home Renovation & Accessibility Services
            </h2>
            <p className="text-xl text-gray-600">
              From single modifications to complete home transformations - we build accessible Buffalo homes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Hammer className="w-12 h-12 text-blue-600" />,
                title: "Bathroom Remodeling",
                description: "Complete bathroom renovations with accessibility and style",
                link: "/services/bathroom-remodeling"
              },
              {
                icon: <ChefHat className="w-12 h-12 text-orange-600" />,
                title: "Kitchen Remodeling", 
                description: "Universal design kitchens that work for everyone",
                link: "/services/kitchen-remodeling"
              },
              {
                icon: <Building className="w-12 h-12 text-green-600" />,
                title: "Home Additions",
                description: "Expand your home with accessible room additions",
                link: "/services/home-additions"
              },
              {
                icon: <Layers className="w-12 h-12 text-purple-600" />,
                title: "Basement Finishing",
                description: "Waterproof, accessible basement living spaces",
                link: "/services/basement-finishing"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {service.description}
                </p>
                <div className="text-center">
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Call Button */}
      <FloatingCallButton highContrastMode={highContrastMode} />

      {/* GrabBars Partner Section */}
      <section className="bg-gray-100 py-10 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Official Partner with GrabBars.com
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We proudly install premium safety bars from{" "}
            <a
              href="https://www.grabbars.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline"
            >
              GrabBars.com
            </a>{" "}
            on all ADA and aging-in-place modifications.
          </p>

          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <p className="text-md text-gray-700 mb-4">
              Quality Made Grab Bars, not that Amazon Junk!
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-lg font-semibold text-blue-800 mb-2">
                ✅ Save 10% on every order!
              </p>
              <p className="text-md text-blue-700">
                Use your exclusive wholesale code:{" "}
                <span className="font-bold">AaronMichaelServices</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;