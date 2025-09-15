import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceAreas from './components/ServiceAreas';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import FloatingCallButton from './components/FloatingCallButton';
import NavBar from './components/NavBar';

import { localBusinessSchema, generateFAQSchema, injectSchema } from './utils/schema';
import { FAQS } from './utils/constants';

// Page Components
import Home from './index';
import About from './about';
import WheelchairRamps from './wheelchair-ramps';
import AccessibleBathrooms from './accessible-bathrooms';
import KitchenModifications from './kitchen-modifications';
import DoorWidening from './door-widening';
import AgingInPlace from './aging-in-place';
import DisabilityModifications from './disability-modifications';
import Contact from './contact';
import NotFound from './not-found';

const App: React.FC = () => {
  const [highContrastMode, setHighContrastMode] = useState(false);

  const toggleHighContrast = () => {
    setHighContrastMode(prev => !prev);
  };

  // SEO schema + meta tags
  useEffect(() => {
    injectSchema(localBusinessSchema);
    injectSchema(generateFAQSchema(FAQS));

    document.title = "Buffalo ADA Contractor | Wheelchair Ramps & Accessibility Upgrades | Aaron Michael Services";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Buffalo's trusted ADA contractor specializing in wheelchair ramps, accessible bathrooms, and aging-in-place upgrades. 22+ years experience. Call 716-623-6879"
      );
    }

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'ADA contractor Buffalo, wheelchair ramps WNY, accessible bathroom remodel, aging in place upgrades, disability home modifications';
    document.head.appendChild(metaKeywords);

    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }
  }, []);

  // High contrast mode
  useEffect(() => {
    if (highContrastMode) {
      document.body.classList.add('high-contrast');
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#fff';
    } else {
      document.body.classList.remove('high-contrast');
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  }, [highContrastMode]);

  // Smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router>
      <NavBar />

      <Routes>
        {/* Main Pages */}
        <Route
          path="/"
          element={
            <div className={`min-h-screen ${highContrastMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
              <Header highContrastMode={highContrastMode} toggleHighContrast={toggleHighContrast} />

              <main id="main-content" role="main">
                <HeroSection highContrastMode={highContrastMode} />
                <AboutSection highContrastMode={highContrastMode} />
                <ServicesSection highContrastMode={highContrastMode} />
                <WhyChooseUs highContrastMode={highContrastMode} />
                <ServiceAreas highContrastMode={highContrastMode} />
                <FAQ highContrastMode={highContrastMode} />
                <ContactSection highContrastMode={highContrastMode} />
              </main>

              <FloatingCallButton highContrastMode={highContrastMode} />

              {/* GrabBars Partner Section */}
              <section className="bg-gray-100 py-10 px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Official Partner with GrabBars.com
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    We proudly install premium safety bars from{" "}
                    <a href="https://www.grabbars.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline">
                      GrabBars.com
                    </a>{" "}
                    on all ADA and aging-in-place modifications.
                  </p>

                  <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                    <p className="text-md text-gray-700 mb-4">
                      We would appreciate & encourage you using our bars on job leads we send you. However, we understand
                      that the timeframe for installation may require you to source bars from a different provider...
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
              <footer
                className={`py-8 text-center border-t ${
                  highContrastMode ? 'bg-black text-white border-white' : 'bg-gray-900 text-white border-gray-200'
                }`}
                role="contentinfo"
              >
                <div className="container mx-auto px-4">
                  <p className="text-lg font-semibold mb-2">
                    Aaron Michael Services - Buffalo's Trusted ADA Contractor
                  </p>
                  <p className={`mb-4 ${highContrastMode ? 'text-white' : 'text-gray-300'}`}>
                    Building Independence Throughout Buffalo & Western New York Since 2015
                  </p>
                  <p className={`text-sm ${highContrastMode ? 'text-white' : 'text-gray-400'}`}>
                    Licensed • Insured • Family-Owned • Emergency Services Available
                  </p>
                  <div className={`mt-6 pt-6 border-t text-sm ${highContrastMode ? 'border-white text-white' : 'border-gray-700 text-gray-400'}`}>
                    © 2025 Aaron Michael Services. All rights reserved. 14 Mariemont Ave Buffalo, NY 14220
                  </div>
                </div>
              </footer>
            </div>
          }
        />

        {/* Secondary Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wheelchair-ramps" element={<WheelchairRamps />} />
        <Route path="/accessible-bathrooms" element={<AccessibleBathrooms />} />
        <Route path="/kitchen-modifications" element={<KitchenModifications />} />
        <Route path="/door-widening" element={<DoorWidening />} />
        <Route path="/aging-in-place" element={<AgingInPlace />} />
        <Route path="/disability-modifications" element={<DisabilityModifications />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
