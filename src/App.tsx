import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import { localBusinessSchema, generateFAQSchema, injectSchema } from './utils/schema';
import { FAQS } from './utils/constants';

import Home from './pages/Home';
import About from './pages/about.tsx';
import WheelchairRamps from './pages/wheelchair-ramps.tsx';
import AccessibleBathrooms from './pages/accessible-bathrooms.tsx';
import KitchenModifications from './pages/kitchen-modifications.tsx';
import DoorWidening from './pages/door-widening.tsx';
import AgingInPlace from './pages/aging-in-place.tsx';
import DisabilityModifications from './pages/disability-modifications.tsx';
import BuffaloBathroomRemodeling from './pages/cities/buffalo/buffalo-ny-bathroom-remodeling.tsx';
import BuffaloKitchenRemodeling from './pages/cities/buffalo/buffalo-ny-kitchen-remodeling.tsx';
import BuffaloHomeAdditions from './pages/cities/buffalo/buffalo-ny-home-additions.tsx';
import BuffaloBasementFinishing from './pages/cities/buffalo/buffalo-ny-basement-finishing.tsx';
import BuffaloFlooringInstallation from './pages/cities/buffalo/buffalo-ny-flooring-installation.tsx';
import AccessibleRemodelingBuffalo from './pages/cities/buffalo/accessible-remodeling-buffalo-ny.tsx';
import RemodelingContractorBuffalo from './pages/cities/buffalo/remodeling-contractor-buffalo-ny.tsx';
import AccessibleRemodelingTonawanda from './pages/cities/tonawanda/accessible-remodeling-tonawanda-ny.tsx';
import RemodelingContractorTonawanda from './pages/cities/tonawanda/remodeling-contractor-tonawanda-ny.tsx';
import FAQPage from './pages/FAQ.tsx';
import Contact from './pages/Contact.tsx';
import NotFound from './pages/NotFound.tsx';

const App: React.FC = () => {
  const [highContrastMode, setHighContrastMode] = useState(false);
  const toggleHighContrast = () => setHighContrastMode(prev => !prev);

  useEffect(() => {
    injectSchema(localBusinessSchema);
    injectSchema(generateFAQSchema(FAQS));
  }, []);

  return (
    <Router>
      {/* Hamburger Navigation */}
      <NavBar />

      {/* Page Routes */}
      <div> {/* Remove padding since hamburger nav doesn't need it */}
        <Routes>
          <Route path="/" element={<Home highContrastMode={highContrastMode} toggleHighContrast={toggleHighContrast} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/wheelchair-ramps" element={<WheelchairRamps />} />
          <Route path="/services/accessible-bathrooms" element={<AccessibleBathrooms />} />
          <Route path="/services/kitchen-modifications" element={<KitchenModifications />} />
          <Route path="/services/door-widening" element={<DoorWidening />} />
          <Route path="/services/aging-in-place" element={<AgingInPlace />} />
          <Route path="/services/disability-modifications" element={<DisabilityModifications />} />
          <Route path="/services/bathroom-remodeling" element={<BuffaloBathroomRemodeling />} />
          <Route path="/services/kitchen-remodeling" element={<BuffaloKitchenRemodeling />} />
          <Route path="/services/home-additions" element={<BuffaloHomeAdditions />} />
          <Route path="/services/basement-finishing" element={<BuffaloBasementFinishing />} />
          <Route path="/services/flooring-installation" element={<BuffaloFlooringInstallation />} />
          <Route path="/accessible-remodeling-buffalo-ny" element={<AccessibleRemodelingBuffalo />} />
          <Route path="/remodeling-contractor-buffalo-ny" element={<RemodelingContractorBuffalo />} />
          <Route path="/accessible-remodeling-tonawanda-ny" element={<AccessibleRemodelingTonawanda />} />
          <Route path="/remodeling-contractor-tonawanda-ny" element={<RemodelingContractorTonawanda />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
