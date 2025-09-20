import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, Eye, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

interface HeaderProps {
  highContrastMode: boolean;
  toggleHighContrast: () => void;
}

const Header: React.FC<HeaderProps> = ({ highContrastMode, toggleHighContrast }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mainNavItems = [
    { href: '#about', label: 'About' },
    { href: '#why-choose', label: 'Why Us' },
    { href: '#service-areas', label: 'Areas' },
    { href: '#faq', label: 'FAQ' }
  ];

 const serviceItems = [
  { href: '#services', label: 'All Services' },
  { href: '/services/wheelchair-ramps', label: 'Wheelchair Ramps' },
  { href: '/services/accessible-bathrooms', label: 'Accessible Bathrooms' },
  { href: '/services/bathroom-remodeling', label: 'Bathroom Remodeling' },
  { href: '/services/kitchen-modifications', label: 'Kitchen Modifications' },
  { href: '/services/kitchen-remodeling', label: 'Kitchen Remodeling' },
  { href: '/services/door-widening', label: 'Door Widening' },
  { href: '/services/aging-in-place', label: 'Aging in Place' },
  { href: '/services/disability-modifications', label: 'Disability Modifications' },
  { href: '/services/home-additions', label: 'Home Additions' },
  { href: '/services/basement-finishing', label: 'Basement Finishing' },
  { href: '/services/flooring-installation', label: 'Flooring Installation' },
  { href: '/accessible-remodeling-buffalo-ny', label: 'Accessible Remodeling' },
  { href: '/remodeling-contractor-buffalo-ny', label: 'Remodeling Contractor' }
];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#') && !href.includes('/')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMenuOpen(false);
        setIsServicesDropdownOpen(false);
      }
    } else {
      // For page navigation
      window.location.hash = href;
      setIsMenuOpen(false);
      setIsServicesDropdownOpen(false);
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? `${highContrastMode ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm border-b ${highContrastMode ? 'border-white/20' : 'border-gray-200'}`
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Clickable Logo */}
            <button
              onClick={handleLogoClick}
              className={`text-lg font-light tracking-wide transition-colors duration-200 hover:opacity-80 ${
                highContrastMode 
                  ? 'text-white' 
                  : isScrolled 
                    ? 'text-gray-900' 
                    : 'text-white'
              }`}
            >
              {CONTACT_INFO.businessName}
            </button>

            {/* Desktop Navigation - Minimal */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-all duration-200 hover:opacity-70 ${
                    highContrastMode
                      ? 'text-white'
                      : isScrolled
                        ? 'text-gray-700'
                        : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Services Dropdown - Minimal */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className={`flex items-center space-x-1 text-sm font-medium transition-all duration-200 hover:opacity-70 ${
                    highContrastMode
                      ? 'text-white'
                      : isScrolled
                        ? 'text-gray-700'
                        : 'text-white'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Minimal Dropdown Menu */}
                {isServicesDropdownOpen && (
                  <div className={`absolute top-full right-0 mt-3 w-56 rounded-xl shadow-xl border backdrop-blur-sm z-50 ${
                    highContrastMode 
                      ? 'bg-black/95 border-white/20' 
                      : 'bg-white/95 border-gray-200'
                  }`}>
                    <div className="py-3">
                      {serviceItems.map((item, index) => (
                        <button
                          key={item.href}
                          onClick={() => scrollToSection(item.href)}
                          className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 ${
                            index === 0 ? 'border-b ' + (highContrastMode ? 'border-white/20' : 'border-gray-200') : ''
                          } ${
                            highContrastMode
                              ? 'text-white hover:bg-white/10'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Minimal Controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleHighContrast}
                className={`p-2 rounded-full transition-all duration-200 hover:scale-105 ${
                  highContrastMode
                    ? 'bg-white/20 text-white hover:bg-white/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                aria-label="Toggle high contrast mode"
              >
                <Eye size={18} />
              </button>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  highContrastMode
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                aria-label={`Call us at ${CONTACT_INFO.displayPhone}`}
              >
                <Phone size={16} />
                <span>{CONTACT_INFO.displayPhone}</span>
              </a>

              {/* Minimal Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-md transition-all duration-200 ${
                  highContrastMode
                    ? 'text-white hover:bg-white/10'
                    : isScrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu - Clean & Minimal */}
          {isMenuOpen && (
            <div className={`lg:hidden mt-6 py-6 border-t backdrop-blur-sm ${
              highContrastMode 
                ? 'border-white/20 bg-black/95' 
                : isScrolled 
                  ? 'border-gray-200 bg-white/95' 
                  : 'border-white/20 bg-black/80'
            }`}>
              <div className="space-y-6">
                {/* Main nav items for mobile */}
                <div className="space-y-4">
                  {mainNavItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left font-medium transition-colors ${
                        highContrastMode
                          ? 'text-white hover:text-gray-300'
                          : isScrolled
                            ? 'text-gray-700 hover:text-gray-900'
                            : 'text-white hover:text-gray-200'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Services section for mobile */}
                <div className={`pt-4 border-t space-y-3 ${
                  highContrastMode ? 'border-white/20' : 'border-gray-200'
                }`}>
                  <div className={`text-xs font-semibold uppercase tracking-wide ${
                    highContrastMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Services
                  </div>
                  {serviceItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left font-medium transition-colors pl-4 ${
                        highContrastMode
                          ? 'text-white hover:text-gray-300'
                          : isScrolled
                            ? 'text-gray-600 hover:text-gray-800'
                            : 'text-gray-200 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-medium text-sm transition-all mt-6 ${
                    highContrastMode
                      ? 'bg-white text-black hover:bg-gray-200'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                  aria-label={`Call us at ${CONTACT_INFO.displayPhone}`}
                >
                  <Phone size={18} />
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
