import React from 'react';
import { CONTACT_INFO } from '../utils/constants';
import AboutSchema from './components/AboutSchema';


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          About Aaron Michael Services
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Based in Buffalo, NY, <strong>Aaron Michael Services</strong> has been providing expert 
          ADA home modifications for over 25 years. We specialize in wheelchair ramps, accessible 
          bathrooms, kitchen modifications, door widening, and comprehensive aging-in-place upgrades.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Founded by <strong>Tom Story</strong>, who brings personal disability experience and a 
          lifetime in construction, we are a family-owned business dedicated to making homes safer, 
          more accessible, and more comfortable for seniors and people with disabilities in 
          Buffalo and all of Western New York.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is simple: <em>help families maintain independence and quality of life at home</em> 
          through professional, reliable, and ADA-compliant modifications.
        </p>
<main className="flex-grow">
  <HeroSection highContrastMode={false} />
  <ServicesSection />
  <AboutSection />
  <UnifiedSchema />   {/* <-- injects LocalBusiness + FAQ schema */}
  <FAQSection faqs={FAQS} />
  <ContactSection />
</main>

        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Schedule Your Free Consultation
        </a>
      </div>
    </section>
  );
};

export default AboutSection;

