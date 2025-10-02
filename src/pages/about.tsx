import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Chrome as Home, Users, Award, Shield, CircleCheck as CheckCircle, Phone, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Aaron Michael Services | Buffalo ADA Contractor | Accessibility Specialists";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        "Learn about Aaron Michael Services, Buffalo's trusted ADA contractor. 25+ years experience in wheelchair ramps, accessible bathrooms, handrails, and aging-in-place modifications throughout Western New York."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header highContrastMode={false} toggleHighContrast={() => {}} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <nav className="mb-6 text-blue-200">
              <div className="flex items-center justify-center space-x-2 text-sm">
                <Home className="w-4 h-4" />
                <Link to="/" className="hover:text-white">Home</Link>
                <ArrowRight className="w-3 h-3" />
                <span>About</span>
              </div>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Aaron Michael Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Building safer, more accessible homes across Buffalo and Western New York
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            
            {/* Story Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-5 text-gray-600">
                <p>
                  My name is <strong>Tom Story</strong>, founder of Aaron Michael Services. I’ve spent over 
                  25 years in the trades as both a <strong>real estate investor</strong> and a <strong>carpenter</strong>. 
                  Raised in South Buffalo, I was trained by old-school craftsmen who taught me that the only way to 
                  truly understand this work is to swing a hammer.
                </p>
                <p>
                  After the passing of my brother Aaron in 2015, I rebranded from T&amp;N Construction to Aaron Michael Services 
                  to honor his memory. Today, we serve Buffalo, Kenmore, Tonawanda, and all of Western New York, focusing on 
                  <Link to="/services/aging-in-place" className="text-blue-600 hover:text-blue-800 font-semibold"> aging-in-place solutions</Link>, 
                  <Link to="/services/wheelchair-ramps" className="text-blue-600 hover:text-blue-800 font-semibold"> ADA-compliant ramps</Link>, 
                  <Link to="/services/bathroom-remodeling" className="text-blue-600 hover:text-blue-800 font-semibold"> accessible bathrooms</Link>, 
                  and <Link to="/services/handrails" className="text-blue-600 hover:text-blue-800 font-semibold"> handrail installations</Link>.
                </p>
                <p>
                  My youngest son, Noah, is non-verbal and on the autism spectrum. Because of him, I shifted my focus toward 
                  helping families and individuals with disabilities live safely at home. As a <strong>Certified Aging-in-Place Specialist (CAPS)</strong> since 2011, 
                  I provide modifications that don’t just solve today’s problems—they prevent tomorrow’s.
                </p>
                <p>
                  Before the pandemic, we worked as exclusive contractors for the <strong>Hyatt</strong> and <strong>Holiday Inn</strong>, 
                  completing projects across the U.S. including the Niagara Falls Hyatt Place renovation. Locally, 
                  we’ve completed hundreds of property rehabs and flips, and continue to invest in multi-family properties 
                  throughout Erie County and the Southern Tier.
                </p>
                <p>
                  We’re not chasing jobs or checks—we’re chasing reputation, results, and satisfied homeowners. 
                  If we work together, you’ll know exactly what’s needed, why it matters, and how to prevent issues 
                  from happening again.
                </p>
              </div>
            </div>

            {/* Placeholder Image */}
            <div>
              <img 
                src="/images/about-placeholder-1.jpg" 
                alt="Tom Story and family in Buffalo, NY" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Second Image */}
          <div className="mb-20">
            <img 
              src="/images/about-placeholder-2.jpg" 
              alt="Aaron Michael Services carpentry project in Buffalo" 
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>

          {/* Services Overview (unchanged) */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Specialized Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚪</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility Modifications</h3>
                <p className="text-gray-600 mb-4">Wheelchair ramps, door widening, and bathroom modifications for enhanced mobility</p>
                <Link to="/services/wheelchair-ramps" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aging-in-Place Solutions</h3>
                <p className="text-gray-600 mb-4">Comprehensive home modifications to support independent living as you age</p>
                <Link to="/services/aging-in-place" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kitchen & Bath Remodeling</h3>
                <p className="text-gray-600 mb-4">Safe, accessible kitchens and bathrooms designed for all mobility levels</p>
                <Link to="/services/bathroom-remodeling" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More →
                </Link>
              </div>

            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Make Your Home More Accessible?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us today for a free consultation. We'll assess your needs and provide personalized 
              recommendations to help you live safely and independently in your home.
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
          </div>
        </div>
      </section>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default About;