import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-green-700/70 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Aaron Michael Services
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-semibold text-white">
          <li className="relative group">
            <button className="hover:text-green-300 transition-colors">
              Services ▼
            </button>
            <ul className="absolute left-0 mt-2 w-52 bg-green-800/95 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              <li>
                <Link to="/#/kitchen-modifications" className="block px-4 py-2 hover:bg-green-600 rounded-md">
                  Kitchen Modifications
                </Link>
              </li>
              <li>
                <Link to="/#/disability-modifications" className="block px-4 py-2 hover:bg-green-600 rounded-md">
                  Disability Modifications
                </Link>
              </li>
              <li>
                <Link to="/#/aging-in-place" className="block px-4 py-2 hover:bg-green-600 rounded-md">
                  Aging in Place
                </Link>
              </li>
              <li>
                <Link to="/#/accessible-bathrooms" className="block px-4 py-2 hover:bg-green-600 rounded-md">
                  Accessible Bathrooms
                </Link>
              </li>
              <li>
                <Link to="/#/door-widening" className="block px-4 py-2 hover:bg-green-600 rounded-md">
                  Door Widening
                </Link>
              </li>
              <li>
                <Link to="/#/wheelchair-ramps" className="block px-4 py-2 hover:bg-green-600 rounded-md">
                  Wheelchair Ramps
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#/about" className="hover:text-green-300 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/#/contact" className="hover:text-green-300 transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-white hover:bg-green-600 transition-colors"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-700/90 backdrop-blur-md shadow-md w-full">
          <ul className="flex flex-col space-y-2 px-4 py-4 font-semibold text-white">
            <li>
              <button
                className="w-full flex justify-between items-center px-2 py-2 rounded-md hover:bg-green-600 transition-colors"
                onClick={toggleServices}
              >
                Services ▼
              </button>
              <ul className={`${servicesOpen ? 'block' : 'hidden'} pl-4 mt-2 space-y-1`}>
                <li>
                  <Link to="/#/kitchen-modifications" className="block px-2 py-1 hover:bg-green-600 rounded-md">
                    Kitchen Modifications
                  </Link>
                </li>
                <li>
                  <Link to="/#/disability-modifications" className="block px-2 py-1 hover:bg-green-600 rounded-md">
                    Disability Modifications
                  </Link>
                </li>
                <li>
                  <Link to="/#/aging-in-place" className="block px-2 py-1 hover:bg-green-600 rounded-md">
                    Aging in Place
                  </Link>
                </li>
                <li>
                  <Link to="/#/accessible-bathrooms" className="block px-2 py-1 hover:bg-green-600 rounded-md">
                    Accessible Bathrooms
                  </Link>
                </li>
                <li>
                  <Link to="/#/door-widening" className="block px-2 py-1 hover:bg-green-600 rounded-md">
                    Door Widening
                  </Link>
                </li>
                <li>
                  <Link to="/#/wheelchair-ramps" className="block px-2 py-1 hover:bg-green-600 rounded-md">
                    Wheelchair Ramps
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#/about" className="block px-2 py-2 rounded-md hover:bg-green-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/#/contact" className="block px-2 py-2 rounded-md hover:bg-green-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
