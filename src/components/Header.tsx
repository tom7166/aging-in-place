import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Eye } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

interface HeaderProps {
  highContrastMode: boolean;
  toggleHighContrast: () => void;
}

const Header: React.FC<HeaderProps> = ({ highContrastMode, toggleHighContrast }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'Our Story' },
    { href: '#services', label: 'Services' },
    { href: '#why-choose', label: 'Why Choose Us' },
    { href: '#service-areas', label: 'Service Areas' },
    { href: '#faq', label: 'FAQ' },
    { href: '/accessible-bathrooms', label: 'Accessible Bathrooms' },
    { href: '/kitchen-modifications', label: 'Kitchen Modifications' },
    { href: '/door-widening', label: 'Door Widening' },
    { href: '/aging-in-place', label: 'Aging in Place' },
    { href: '/disability-modifications', label: 'Disability Modifications' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      
      <header 
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? `${highContrastMode ? 'bg-black border-white' : 'bg-white'} shadow-lg border-b`
            : 'bg-transparent'
        }`}
        role="banner"
      >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className={`text-xl font-bold ${
              highContrastMode 
                ? 'text-white' 
                : isScrolled 
                  ? 'text-blue-900' 
                  : 'text-white'
            }`}>
              {CONTACT_INFO.businessName}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors duration-200 hover:scale-105 transform ${
                    highContrastMode
                      ? 'text-white hover:text-yellow-400'
                      : isScrolled
                        ? 'text-gray-700 hover:text-blue-600'
                        : 'text-white hover:text-green-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Phone Number & Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleHighContrast}
                className={`p-2 rounded-full transition-colors ${
                  highContrastMode
                    ? 'bg-white text-black hover:bg-yellow-400'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-label="Toggle high contrast mode"
              >
                <Eye size={20} />
              </button>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full font-bold transition-all duration-200 hover:scale-105 transform ${
                  highContrastMode
                    ? 'bg-white text-black hover:bg-yellow-400'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
                aria-label={`Call us at ${CONTACT_INFO.displayPhone}`}
              >
                <Phone size={18} />
                <span className="text-lg">{CONTACT_INFO.displayPhone}</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-md ${
                  highContrastMode
                    ? 'text-white hover:bg-gray-800'
                    : isScrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`lg:hidden mt-4 py-4 border-t ${
              highContrastMode 
                ? 'border-white bg-black' 
                : isScrolled 
                  ? 'border-gray-200 bg-white' 
                  : 'border-white/20 bg-black/50 backdrop-blur-sm'
            }`}>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left font-medium transition-colors ${
                      highContrastMode
                        ? 'text-white hover:text-yellow-400'
                        : isScrolled
                          ? 'text-gray-700 hover:text-blue-600'
                          : 'text-white hover:text-green-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-bold text-lg transition-all ${
                    highContrastMode
                      ? 'bg-white text-black hover:bg-yellow-400'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                  aria-label={`Call us at ${CONTACT_INFO.displayPhone}`}
                >
                  <Phone size={20} />
                  <span>Call {CONTACT_INFO.displayPhone}</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
