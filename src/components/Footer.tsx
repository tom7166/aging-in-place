import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center bg-gray-900 text-white border-t border-gray-700">
      <div className="container mx-auto px-4">
        {/* Quick Links */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-green-400 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
            <Link to="/faq" className="hover:text-green-400 transition-colors">FAQ</Link>
            <Link to="/services/wheelchair-ramps" className="hover:text-green-400 transition-colors">Wheelchair Ramps</Link>
            <Link to="/services/accessible-bathrooms" className="hover:text-green-400 transition-colors">Accessible Bathrooms</Link>
            <Link to="/services/aging-in-place" className="hover:text-green-400 transition-colors">Aging in Place</Link>
          </div>
        </div>
        
        <p className="text-lg font-semibold mb-2">
          Aaron Michael Services - Buffalo's Trusted ADA Contractor
        </p>
        <p className="text-gray-300 mb-2">
          Building Independence Throughout Buffalo & Western New York Since 2015
        </p>
        <p className="text-gray-400 text-sm">
          Licensed • Insured • Family-Owned • Emergency Services Available
        </p>
        <div className="mt-6 pt-4 border-t border-gray-700 text-gray-400 text-sm">
          © 2025 Aaron Michael Services — 14 Mariemont Ave, Buffalo, NY 14220
        </div>
      </div>
    </footer>
  );
};

export default Footer;
