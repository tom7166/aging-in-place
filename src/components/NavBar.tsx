import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Wheelchair Ramps', path: '/wheelchair-ramps' },
    { name: 'Accessible Bathrooms', path: '/accessible-bathrooms' },
    { name: 'Kitchen Modifications', path: '/kitchen-modifications' },
    { name: 'Door Widening', path: '/door-widening' },
    { name: 'Aging in Place', path: '/aging-in-place' },
    { name: 'Disability Modifications', path: '/disability-modifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-700 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">
          Aaron Michael Services
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-yellow-400 transition-colors duration-300 font-semibold"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center space-x-1 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:scale-105 transition-transform duration-300"
            >
              <Phone size={16} />
              <span>Call</span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-600 text-white">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-xl hover:text-yellow-400 transition-colors duration-300 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center space-x-1 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300"
              >
                <Phone size={20} />
                <span>Call</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

