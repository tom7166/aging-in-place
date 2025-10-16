import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center bg-gray-900 text-white border-t border-gray-700">
      <div className="container mx-auto px-4">
        {/* Quick Links */}
        <div className="mb-8">
          <div className="grid md:grid-cols-4 gap-8 text-sm mb-6">
            <div>
              <h3 className="font-bold text-white mb-3 text-base">Company</h3>
              <div className="flex flex-col gap-2">
                <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
                <Link to="/about" className="hover:text-green-400 transition-colors">About</Link>
                <Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
                <Link to="/faq" className="hover:text-green-400 transition-colors">FAQ</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3 text-base">Services</h3>
              <div className="flex flex-col gap-2">
                <Link to="/services/accessibility" className="hover:text-green-400 transition-colors">Accessibility Services</Link>
                <Link to="/services/remodeling" className="hover:text-green-400 transition-colors">Remodeling Services</Link>
                <Link to="/services/flooring" className="hover:text-green-400 transition-colors">Flooring Services</Link>
                <Link to="/services/handyman-services" className="hover:text-green-400 transition-colors">Handyman Services</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3 text-base">Popular Services</h3>
              <div className="flex flex-col gap-2">
                <Link to="/services/wheelchair-ramps" className="hover:text-green-400 transition-colors">Wheelchair Ramps</Link>
                <Link to="/services/accessible-bathrooms" className="hover:text-green-400 transition-colors">Accessible Bathrooms</Link>
                <Link to="/services/kitchen-remodeling" className="hover:text-green-400 transition-colors">Kitchen Remodeling</Link>
                <Link to="/services/hardwood-floors" className="hover:text-green-400 transition-colors">Hardwood Floors</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3 text-base">Service Areas</h3>
              <div className="flex flex-col gap-2">
                <Link to="/remodeling-contractor-buffalo-ny" className="hover:text-green-400 transition-colors">Buffalo</Link>
                <Link to="/remodeling-contractor-tonawanda-ny" className="hover:text-green-400 transition-colors">Tonawanda</Link>
                <Link to="/remodeling-contractor-kenmore-ny" className="hover:text-green-400 transition-colors">Kenmore</Link>
                <Link to="/remodeling-contractor-amherst-ny" className="hover:text-green-400 transition-colors">Amherst</Link>
              </div>
            </div>
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
