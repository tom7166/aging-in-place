import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowLeft, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Page Not Found | Aaron Michael Services | Buffalo ADA Contractor";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Page not found. Return to Aaron Michael Services homepage for Buffalo ADA contractor services including wheelchair ramps, accessible bathrooms, and aging-in-place modifications.');
    }
    
    // Set favicon
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/favicon.ico';
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.type = 'image/x-icon';
      newFavicon.href = '/favicon.ico';
      document.head.appendChild(newFavicon);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header highContrastMode={false} toggleHighContrast={() => {}} />
      
      <section className="py-32 pt-40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-700 mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <a 
              href="tel:716-533-7108"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (716) 533-7108
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Pages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/services/wheelchair-ramps" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h4 className="font-semibold text-blue-900">Wheelchair Ramps</h4>
                <p className="text-sm text-blue-700">ADA compliant ramp installation</p>
              </Link>
              <Link to="/services/accessible-bathrooms" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h4 className="font-semibold text-blue-900">Accessible Bathrooms</h4>
                <p className="text-sm text-blue-700">Walk-in showers and safety features</p>
              </Link>
              <Link to="/services/aging-in-place" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h4 className="font-semibold text-blue-900">Aging in Place</h4>
                <p className="text-sm text-blue-700">Home modifications for seniors</p>
              </Link>
              <Link to="/about" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h4 className="font-semibold text-blue-900">About Us</h4>
                <p className="text-sm text-blue-700">Our story and experience</p>
              </Link>
              <Link to="/faq" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h4 className="font-semibold text-blue-900">FAQ</h4>
                <p className="text-sm text-blue-700">Common questions answered</p>
              </Link>
              <Link to="/contact" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h4 className="font-semibold text-blue-900">Contact</h4>
                <p className="text-sm text-blue-700">Get in touch with us</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;