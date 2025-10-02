import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Phone, Chrome as Home, Info, Mail, ChevronDown, ChevronUp } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    { title: 'Foundation Repair', path: '/services/foundation-repair', keywords: ['foundation', 'repair', 'crack', 'basement', 'waterproofing', 'stabilization'] },
    { title: 'Handyman Services', path: '/services/handyman-services', keywords: ['handyman', 'repair', 'maintenance', 'fix', 'small jobs'] },
    { title: 'Investor Services', path: '/services/investor-services', keywords: ['investor', 'property', 'rental', 'flip', 'renovation', 'real estate'] },
    { title: 'Handrails', path: '/services/handrails', keywords: ['handrail', 'grab bar', 'safety', 'stairs', 'railing'] },
    { title: 'Estate Cleanouts', path: '/services/estate-cleanouts', keywords: ['estate', 'cleanout', 'property', 'removal', 'downsizing'] },
    { title: 'Property Cleanouts', path: '/services/property-cleanouts', keywords: ['property', 'cleanout', 'foreclosure', 'clearing', 'junk removal'] },
    { title: 'Basement Repairs', path: '/services/basement-repairs', keywords: ['basement', 'repair', 'crack', 'waterproofing', 'foundation'] },
    { title: 'Bathroom Repairs', path: '/services/bathroom-repairs', keywords: ['bathroom', 'repair', 'plumbing', 'fixture', 'leak'] },
    { title: 'Carpentry Repairs', path: '/services/carpentry-repairs', keywords: ['carpentry', 'repair', 'wood', 'trim', 'door', 'frame'] },
    { title: 'Carpentry', path: '/services/carpentry', keywords: ['carpentry', 'wood', 'trim', 'custom', 'installation'] },
    { title: 'Exterior Door Repair', path: '/services/exterior-door-repair', keywords: ['exterior', 'door', 'repair', 'replacement', 'weather'] },
    { title: 'Interior Door Repair', path: '/services/interior-door-repair', keywords: ['interior', 'door', 'repair', 'replacement', 'hinge'] },
    { title: 'Gutter Repairs', path: '/services/gutter-repairs', keywords: ['gutter', 'repair', 'cleaning', 'drainage', 'downspout'] },
    { title: 'Kitchen Repairs', path: '/services/kitchen-repairs', keywords: ['kitchen', 'repair', 'cabinet', 'countertop', 'fixture'] },
    { title: 'Stair Repair', path: '/services/stair-repair', keywords: ['stair', 'repair', 'steps', 'railing', 'tread'] },
    { title: 'Window Screen Repair', path: '/services/window-screen-repair', keywords: ['window', 'screen', 'repair', 'replacement', 'mesh'] },
    { title: 'Trim Carpentry', path: '/services/trim-carpentry', keywords: ['trim', 'carpentry', 'molding', 'baseboards', 'crown'] },
    { title: 'Laminate Flooring', path: '/services/laminate-flooring', keywords: ['laminate', 'flooring', 'installation', 'floor', 'wood'] },
    { title: 'Bathroom Remodeling', path: '/services/bathroom-remodeling', keywords: ['bathroom', 'remodel', 'renovation', 'upgrade'] },
    { title: 'Kitchen Remodeling', path: '/services/kitchen-remodeling', keywords: ['kitchen', 'remodel', 'renovation', 'upgrade'] },
    { title: 'Home Additions', path: '/services/home-additions', keywords: ['addition', 'expansion', 'room', 'extension'] },
    { title: 'Basement Finishing', path: '/services/basement-finishing', keywords: ['basement', 'finishing', 'remodel', 'conversion'] },
    { title: 'Flooring Installation', path: '/services/flooring-installation', keywords: ['flooring', 'installation', 'hardwood', 'tile'] }
  ];

  const serviceCategories = [
    {
      name: 'Accessibility Services',
      icon: '♿',
      services: [
        { label: 'Wheelchair Ramps', path: '/services/wheelchair-ramps' },
        { label: 'Accessible Bathrooms', path: '/services/accessible-bathrooms' },
        { label: 'Door Widening', path: '/services/door-widening' },
        { label: 'Handrails & Grab Bars', path: '/services/handrails' },
        { label: 'Aging in Place', path: '/services/aging-in-place' },
        { label: 'Disability Modifications', path: '/services/disability-modifications' }
      ]
    },
    {
      name: 'Remodeling',
      icon: '🏗️',
      services: [
        { label: 'Bathroom Remodeling', path: '/services/bathroom-remodeling' },
        { label: 'Kitchen Remodeling', path: '/services/kitchen-remodeling' },
        { label: 'Basement Finishing', path: '/services/basement-finishing' },
        { label: 'Home Additions', path: '/services/home-additions' },
        { label: 'Kitchen Modifications', path: '/services/kitchen-modifications' }
      ]
    },
    {
      name: 'Repairs',
      icon: '🔧',
      services: [
        { label: 'Foundation Repair', path: '/services/foundation-repair' },
        { label: 'Basement Repairs', path: '/services/basement-repairs' },
        { label: 'Bathroom Repairs', path: '/services/bathroom-repairs' },
        { label: 'Kitchen Repairs', path: '/services/kitchen-repairs' },
        { label: 'Stair Repair', path: '/services/stair-repair' },
        { label: 'Gutter Repairs', path: '/services/gutter-repairs' },
        { label: 'Exterior Door Repair', path: '/services/exterior-door-repair' },
        { label: 'Interior Door Repair', path: '/services/interior-door-repair' },
        { label: 'Window Screen Repair', path: '/services/window-screen-repair' }
      ]
    },
    {
      name: 'Carpentry & Flooring',
      icon: '🪚',
      services: [
        { label: 'Carpentry', path: '/services/carpentry' },
        { label: 'Trim Carpentry', path: '/services/trim-carpentry' },
        { label: 'Carpentry Repairs', path: '/services/carpentry-repairs' },
        { label: 'Flooring Installation', path: '/services/flooring-installation' },
        { label: 'Laminate Flooring', path: '/services/laminate-flooring' }
      ]
    },
    {
      name: 'Specialized Services',
      icon: '⭐',
      services: [
        { label: 'Handyman Services', path: '/services/handyman-services' },
        { label: 'Investor Services', path: '/services/investor-services' },
        { label: 'Estate Cleanouts', path: '/services/estate-cleanouts' },
        { label: 'Property Cleanouts', path: '/services/property-cleanouts' }
      ]
    }
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

    setSearchResults(results.slice(0, 5));
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

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
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

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-[9999] p-3 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998] transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[9999] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pt-20 h-full overflow-y-auto">
          <div className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">
            <Link to="/" onClick={closeMenu} className="hover:text-green-600 transition-colors">
              Aaron Michael Services
            </Link>
          </div>

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

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-gray-800 mb-4 px-2">Our Services</h3>
            <div className="space-y-2">
              {serviceCategories.map((category) => (
                <div key={category.name} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="w-full flex items-center justify-between px-3 py-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{category.icon}</span>
                      <span className="font-medium text-gray-700 text-sm">{category.name}</span>
                    </div>
                    {expandedCategories.has(category.name) ? (
                      <ChevronUp size={18} className="text-gray-400" />
                    ) : (
                      <ChevronDown size={18} className="text-gray-400" />
                    )}
                  </button>

                  {expandedCategories.has(category.name) && (
                    <div className="pl-6 pb-2 space-y-1">
                      {category.services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={closeMenu}
                          className="block px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors text-gray-600 text-sm"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <a
              href="tel:716-533-7108"
              className="flex items-center justify-center space-x-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone size={18} />
              <span>Call (716) 533-7108</span>
            </a>
          </div>

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
