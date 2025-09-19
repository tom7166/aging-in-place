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
import FAQ from './pages/FAQ.tsx';
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
