import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ServiceAreas from '../components/ServiceAreas';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';
import FloatingCallButton from '../components/FloatingCallButton';
import { localBusinessSchema, generateFAQSchema, injectSchema } from '../utils/schema';
import { FAQS } from '../utils/constants';

const Home: React.FC = () => {
  const [highContrastMode, setHighContrastMode] = useState(false);
  const toggleHighContrast = () => setHighContrastMode(prev => !prev);

  useEffect(() => {
    injectSchema(localBusinessSchema);
    injectSchema(generateFAQSchema(FAQS));
    document.title = "Buffalo ADA Contractor | Wheelchair Ramps & Accessibility Upgrades | Aaron Michael Services";
  }, []);

  return (
    <div className={`min-h-screen ${highContrastMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <Header highContrastMode={highContrastMode} toggleHighContrast={toggleHighContrast} />

      <main>
        <HeroSection highContrastMode={highContrastMode} />
        <AboutSection highContrastMode={highContrastMode} />
        <ServicesSection highContrastMode={highContrastMode} />
        <WhyChooseUs highContrastMode={highContrastMode} />
        <ServiceAreas highContrastMode={highContrastMode} />
        <FAQ highContrastMode={highContrastMode} />
        <ContactSection highContrastMode={highContrastMode} />
      </main>

      <FloatingCallButton highContrastMode={highContrastMode} />
    </div>
  );
};

export default Home;
