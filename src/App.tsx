import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceAreas from './components/ServiceAreas';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import FloatingCallButton from './components/FloatingCallButton';
import { localBusinessSchema, generateFAQSchema, injectSchema } from './utils/schema';
import { FAQS } from './utils/constants';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './index';
import About from './about';
import WheelchairRamps from './wheelchair-ramps';
import AccessibleBathrooms from './accessible-bathrooms';
import KitchenModifications from './kitchen-modifications';
import DoorWidening from './door-widening';
import AgingInPlace from './aging-in-place';
import DisabilityModifications from './disability-modifications';
import Contact from './contact';

// Optional: 404 Page
import NotFound from './not-found';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Service Pages */}
        <Route path="/wheelchair-ramps" element={<WheelchairRamps />} />
        <Route path="/accessible-bathrooms" element={<AccessibleBathrooms />} />
        <Route path="/kitchen-modifications" element={<KitchenModifications />} />
        <Route path="/door-widening" element={<DoorWidening />} />
        <Route path="/aging-in-place" element={<AgingInPlace />} />
        <Route path="/disability-modifications" element={<DisabilityModifications />} />

        {/* Catch-all for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* your routes here */}
      </Routes>
    </Router>
  );
}

function App() {
  const [highContrastMode, setHighContrastMode] = useState(false);

  // Toggle high contrast mode
  const toggleHighContrast = () => {
    setHighContrastMode(prev => !prev);
  };

  // Inject SEO schema on component mount
  useEffect(() => {
    // Inject Local Business Schema
    injectSchema(localBusinessSchema);
    
    // Inject FAQ Schema
    const faqSchema = generateFAQSchema(FAQS);
    injectSchema(faqSchema);

    // Update document title and meta description
    document.title = "Buffalo ADA Contractor | Wheelchair Ramps & Accessibility Upgrades | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Buffalo's trusted ADA contractor specializing in wheelchair ramps, accessible bathrooms, and aging-in-place upgrades. 22+ years experience. Call 716-623-6879");
    }

    // Add keywords meta tag
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'ADA contractor Buffalo, wheelchair ramps WNY, accessible bathroom remodel, aging in place upgrades, disability home modifications';
    document.head.appendChild(metaKeywords);

    // Add viewport meta for mobile optimization
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }
  }, []);

  // Apply high contrast styles to body
  useEffect(() => {
    if (highContrastMode) {
      document.body.classList.add('high-contrast');
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';
    } else {
      document.body.classList.remove('high-contrast');
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  }, [highContrastMode]);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };
    
    handleSmoothScroll();
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className={`min-h-screen ${highContrastMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Header Navigation */}
      <Header 
        highContrastMode={highContrastMode} 
        toggleHighContrast={toggleHighContrast} 
      />

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section with Background Video */}
        <HeroSection highContrastMode={highContrastMode} />

        {/* About/Our Story Section */}
        <AboutSection highContrastMode={highContrastMode} />

        {/* Services Section */}
        <ServicesSection highContrastMode={highContrastMode} />

        {/* Why Choose Us Section */}
        <WhyChooseUs highContrastMode={highContrastMode} />

        {/* Service Areas Section */}
        <ServiceAreas highContrastMode={highContrastMode} />

        {/* FAQ Section */}
        <FAQ highContrastMode={highContrastMode} />

        {/* Final Contact/CTA Section */}
        <ContactSection highContrastMode={highContrastMode} />
      </main>

      {/* Mobile Floating Call Button */}
      <FloatingCallButton highContrastMode={highContrastMode} />

      {/* Footer */}
      <footer 
        className={`py-8 text-center border-t ${
          highContrastMode 
            ? 'bg-black text-white border-white' 
            : 'bg-gray-900 text-white border-gray-200'
        }`}
        role="contentinfo"
      >
        <div className="container mx-auto px-4">
          <p className="text-lg font-semibold mb-2">
            Aaron Michael Services - Buffalo's Trusted ADA Contractor
          </p>
          <p className={`mb-4 ${
            highContrastMode ? 'text-white' : 'text-gray-300'
          }`}>
            Building Independence Throughout Buffalo & Western New York Since 2015
          </p>
          <p className={`text-sm ${
            highContrastMode ? 'text-white' : 'text-gray-400'
          }`}>
            Licensed • Insured • Family-Owned • Emergency Services Available
          </p>
          
          {/* Copyright */}
          <div className={`mt-6 pt-6 border-t text-sm ${
            highContrastMode ? 'border-white text-white' : 'border-gray-700 text-gray-400'
          }`}>
            © 2025 Aaron Michael Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
