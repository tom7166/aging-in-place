import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Phone, Home, Info, Mail, Wrench } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search functionality
  const searchableContent = [
    { title: 'Home', path: '/', keywords: ['home', 'main', 'buffalo', 'ada', 'contractor'] },
    { title: 'About', path: '/about', keywords: ['about', 'story', 'experience', 'tom', 'founder'] },
    { title: 'Contact', path: '/contact', keywords: ['contact', 'phone', 'email', 'consultation'] },
    { title: 'Wheelchair Ramps', path: '/services/wheelchair-ramps', keywords: ['wheelchair', 'ramps', 'ada', 'accessibility'] },
    { title: 'Accessible Bathrooms', path: '/services/accessible-bathrooms', keywords: ['bathroom', 'accessible', 'walk-in', 'shower', 'grab bars'] },
    { title: 'Kitchen Modifications', path: '/services/kitchen-modifications', keywords: ['kitchen', 'accessible', 'counters', 'modifications'] },
    { title: 'Door Widening', path: '/services/door-widening', keywords: ['door', 'widening', 'wheelchair', 'access'] },
    { title: 'Aging in Place', path: '/services/aging-in-place', keywords: ['aging', 'seniors', 'home', 'modifications'] },
    { title: 'Disability Modifications', path: '/services/disability-modifications', keywords: ['disability', 'autism', 'special needs', 'modifications'] },
    { title: 'Estate Cleanouts', path: '/services/estate-cleanouts', keywords: ['estate', 'cleanout', 'property', 'removal', 'downsizing'] },
    { title: 'Property Cleanouts', path: '/services/property-cleanouts', keywords: ['property', 'cleanout', 'foreclosure', 'clearing', 'junk removal'] }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = searchableContent
      .filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
      )
      .map(item => item.title);

    setSearchResults(results.slice(0, 5)); // Limit to 5 results
  };

  const handleSearchSelect = (title: string) => {
    const item = searchableContent.find(item => item.title === title);
    if (item) {
      navigate(item.path);
      setIsOpen(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const mainNavItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Info, label: 'About', path: '/about' },
    { icon: Mail, label: 'Contact', path: '/contact' }
  ];

  const serviceItems = [
    { label: 'Wheelchair Ramps', path: '/services/wheelchair-ramps' },
    { label: 'Accessible Bathrooms', path: '/services/accessible-bathrooms' },
    { label: 'Bathroom Remodeling', path: '/services/bathroom-remodeling' },
    { label: 'Kitchen Modifications', path: '/services/kitchen-modifications' },
    { label: 'Kitchen Remodeling', path: '/services/kitchen-remodeling' },
    { label: 'Door Widening', path: '/services/door-widening' },
    { label: 'Aging in Place', path: '/services/aging-in-place' },
    { label: 'Disability Modifications', path: '/services/disability-modifications' },
    { label: 'Home Additions', path: '/services/home-additions' },
    { label: 'Basement Finishing', path: '/services/basement-finishing' },
    { label: 'Flooring Installation', path: '/services/flooring-installation' },
    { label: 'Estate Cleanouts', path: '/services/estate-cleanouts' },
    { label: 'Property Cleanouts', path: '/services/property-cleanouts' },
    { label: 'Accessible Remodeling', path: '/accessible-remodeling-buffalo-ny' },
    { label: 'Remodeling Contractor', path: '/remodeling-contractor-buffalo-ny' }
  ];

  return (
    <>
      {/* Hamburger Menu Button - Fixed in top right corner */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-[9999] p-3 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998] transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Slide-out Menu */}
      <div 
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[9999] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pt-20 h-full overflow-y-auto">
          {/* Logo/Brand */}
          <div className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">
            <Link to="/" onClick={closeMenu} className="hover:text-green-600 transition-colors">
              Aaron Michael Services
            </Link>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-2 bg-gray-50 rounded-lg border border-gray-200">
                {searchResults.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearchSelect(result)}
                    className="w-full text-left px-4 py-2 hover:bg-green-50 hover:text-green-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {result}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Main Navigation */}
          <div className="space-y-2 mb-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700"
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Services Section */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center space-x-2 mb-4">
              <Wrench size={20} className="text-gray-600" />
              <h3 className="font-semibold text-gray-800">Services</h3>
            </div>
            <div className="space-y-1">
              {serviceItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className="block px-4 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors text-gray-600 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <a
              href="tel:716-533-7108"
              className="flex items-center justify-center space-x-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone size={18} />
              <span>Call (716) 533-7108</span>
            </a>
          </div>

          {/* Footer Info */}
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>Licensed & Insured</p>
            <p>Serving Buffalo & WNY</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;