import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">
          Aaron Michael Services
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-semibold text-gray-800">
          <li className="relative group">
            <button className="hover:text-green-600 transition-colors">
              Services
            </button>
            {/* Dropdown */}
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity">
              <li>
                <Link
                  to="/services/ada"
                  className="block px-4 py-2 hover:bg-green-100"
                >
                  ADA Modifications
                </Link>
              </li>
              <li>
                <Link
                  to="/services/bathrooms"
                  className="block px-4 py-2 hover:bg-green-100"
                >
                  Bathroom Remodels
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ramps"
                  className="block px-4 py-2 hover:bg-green-100"
                >
                  Ramps & Railings
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-600 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-600 transition-colors">
              Contact
            </Link>
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
        <div className="md:hidden bg-white shadow-md w-full">
          <ul className="flex flex-col space-y-2 px-4 py-4 font-semibold text-gray-800">
            <li>
              <button className="w-full text-left" onClick={() => {}}>
                Services ▼
              </button>
              <ul className="pl-4 mt-2 space-y-1">
                <li>
                  <Link to="/services/ada" className="block px-2 py-1 hover:bg-green-100 rounded-md">
                    ADA Modifications
                  </Link>
                </li>
                <li>
                  <Link to="/services/bathrooms" className="block px-2 py-1 hover:bg-green-100 rounded-md">
                    Bathroom Remodels
                  </Link>
                </li>
                <li>
                  <Link to="/services/ramps" className="block px-2 py-1 hover:bg-green-100 rounded-md">
                    Ramps & Railings
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about" className="block px-2 py-1 hover:bg-green-100 rounded-md">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block px-2 py-1 hover:bg-green-100 rounded-md">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
