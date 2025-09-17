import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMobileServices = () => setMobileServicesOpen(!mobileServicesOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">
          Aaron Michael Services
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-semibold text-gray-800">
          <li className="relative group">
            <button className="hover:text-green-600 transition-colors">
              Services ▼
            </button>
            {/* Desktop Dropdown */}
            <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              <li>
                <Link to="/pages/kitchen-modifications" className="block px-4 py-2 hover:bg-green-50 rounded-md">
                  Kitchen Modifications
                </Link>
              </li>
              <li>
                <Link to="/pages/disability-modifications" className="block px-4 py-2 hover:bg-green-50 rounded-md">
                  Disability Modifications
                </Link>
              </li>
              <li>
                <Link to="/pages/aging-in-place" className="block px-4 py-2 hover:bg-green-50 rounded-md">
                  Aging in Place
                </Link>
              </li>
              <li>
                <Link to="/pages/accessible-bathrooms" className="block px-4 py-2 hover:bg-green-50 rounded-md">
                  Accessible Bathrooms
                </Link>
              </li>
              <li>
                <Link to="/pages/door-widening" className="block px-4 py-2 hover:bg-green-50 rounded-md">
                  Door Widening
                </Link>
              </li>
              <li>
                <Link to="/pages/wheelchair-ramps" className="block px-4 py-2 hover:bg-green-50 rounded-md">
                  Ramps & Railings
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/pages/about" className="hover:text-green-600 transition-colors">About</Link>
          </li>
          <li>
            <Link to="/pages/contact" className="hover:text-green-600 transition-colors">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-green-100 transition-colors"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/90 shadow-md w-full">
          <ul className="flex flex-col space-y-2 px-4 py-4 font-semibold text-gray-800">
            <li>
              <button
                className="w-full text-left flex justify-between items-center px-2 py-1 rounded-md hover:bg-green-50 transition-colors"
                onClick={toggleMobileServices}
              >
                Services ▼
              </button>
              <ul className={`pl-4 mt-2 space-y-1 ${mobileServicesOpen ? 'block' : 'hidden'}`}>
                <li>
                  <Link to="/pages/kitchen-modifications" className="block px-2 py-1 hover:bg-green-100 rounded-md transition-colors">
                    Kitchen Modifications
                  </Link>
                </li>
                <li>
                  <Link to="/pages/disability-modifications" className="block px-2 py-1 hover:bg-green-100 rounded-md transition-colors">
                    Disability Modifications
                  </Link>
                </li>
                <li>
                  <Link to="/pages/aging-in-place" className="block px-2 py-1 hover:bg-green-100 rounded-md transition-colors">
                    Aging in Place
                  </Link>
                </li>
                <li>
                  <Link to="/pages/accessible-bathrooms" className="block px-2 py-1 hover:bg-green-100 rounded-md transition-colors">
                    Accessible Bathrooms
                  </Link>
                </li>
                <li>
                  <Link to="/pages/door-widening" className="block px-2 py-1 hover:bg-green-100 rounded-md transition-colors">
                    Door Widening
                  </Link>
                </li>
                <li>
                  <Link to="/pages/wheelchair-ramps" className="block px-2 py-1 hover:bg-green-100 rounded-md transition-colors">
                    Ramps & Railings
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/pages/about" className="block px-2 py-1 rounded-md hover:bg-green-50 transition-colors">About</Link>
            </li>
            <li>
              <Link to="/pages/contact" className="block px-2 py-1 rounded-md hover:bg-green-50 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;