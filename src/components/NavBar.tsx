import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { HashLink as Link } from 'react-router-hash-link';

const nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <>
      {/* Floating Hamburger Button */}
      <button
        className="fixed top-6 right-6 z-[9999] p-3 rounded-full bg-green-700 text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        onClick={toggleMenu}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
          onClick={toggleMenu}
        />
      )}

      {/* Slide-out Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-green-700 shadow-xl z-[9999] transform transition-transform duration-300 ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 pt-20">
          {/* Logo */}
          <div className="text-xl font-bold text-white mb-8 border-b border-green-600 pb-4">
            Aaron Michael Services
          </div>

          {/* Menu Items */}
          <ul className="space-y-4 text-white">
            <li>
              <button
                className="w-full flex justify-between items-center px-4 py-3 rounded-md hover:bg-green-600 transition-colors text-left"
                onClick={toggleServices}
              >
                <span>Services</span>
                <span className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <ul className={`${servicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 mt-2 space-y-1 pl-4`}>
                <li>
                  <Link 
                    to="/#/kitchen-modifications" 
                    className="block px-4 py-2 hover:bg-green-600 rounded-md transition-colors"
                    onClick={toggleMenu}
                  >
                    Kitchen Modifications
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/#/disability-modifications" 
                    className="block px-4 py-2 hover:bg-green-600 rounded-md transition-colors"
                    onClick={toggleMenu}
                  >
                    Disability Modifications
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/#/aging-in-place" 
                    className="block px-4 py-2 hover:bg-green-600 rounded-md transition-colors"
                    onClick={toggleMenu}
                  >
                    Aging in Place
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/#/accessible-bathrooms" 
                    className="block px-4 py-2 hover:bg-green-600 rounded-md transition-colors"
                    onClick={toggleMenu}
                  >
                    Accessible Bathrooms
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/#/door-widening" 
                    className="block px-4 py-2 hover:bg-green-600 rounded-md transition-colors"
                    onClick={toggleMenu}
                  >
                    Door Widening
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/#/wheelchair-ramps" 
                    className="block px-4 py-2 hover:bg-green-600 rounded-md transition-colors"
                    onClick={toggleMenu}
                  >
                    Wheelchair Ramps
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link 
                to="/#/about" 
                className="block px-4 py-3 rounded-md hover:bg-green-600 transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/#/contact" 
                className="block px-4 py-3 rounded-md hover:bg-green-600 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default nav;
