import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Home, Users, Award, Shield, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Aaron Michael Services | Buffalo ADA Contractor | Accessibility Specialists";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Aaron Michael Services, Buffalo\'s trusted ADA contractor. 22+ years experience in wheelchair ramps, accessible bathrooms, and aging-in-place modifications throughout Western New York.');
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
              Creating safer, more accessible homes for independent living across Western New York
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
              <div className="space-y-4 text-gray-600">
                <p>
                  Aaron Michael Services was founded with a simple yet powerful mission: to help people 
                  age comfortably and safely in their own homes. We understand that home isn't just a 
                  place—it's where memories are made, families gather, and independence thrives.
                </p>
                <p>
                  With years of experience in home modifications and accessibility solutions, we've 
                  helped hundreds of families across Buffalo, Kenmore, Tonawanda, and throughout 
                  Western New York create spaces that adapt to their changing needs.
                </p>
                <p>
                  Every modification we make is designed with both safety and dignity in mind, ensuring 
                  that your home remains a place of comfort and independence for years to come.
                </p>
              </div>
            </div>

            {/* Values/Stats Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Licensed & Insured</h4>
                    <p className="text-gray-600">Fully licensed contractors with comprehensive insurance coverage</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">ADA Compliant</h4>
                    <p className="text-gray-600">All modifications meet or exceed ADA accessibility standards</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Quick Turnaround</h4>
                    <p className="text-gray-600">Most projects completed within 1-3 weeks</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Local Expertise</h4>
                    <p className="text-gray-600">Serving Western NY with personalized, community-focused service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Overview */}
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