import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import { localBusinessSchema, generateFAQSchema, injectSchema } from './utils/schema';
import { FAQS } from './utils/constants';

import Home from './pages/Home';
import About from './pages/about.tsx';
import Contact from './pages/Contact.tsx';
import WheelchairRamps from './pages/wheelchair-ramps.tsx';
import AccessibleBathrooms from './pages/accessible-bathrooms.tsx';
import KitchenModifications from './pages/kitchen-modifications.tsx';
import DoorWidening from './pages/door-widening.tsx';
import AgingInPlace from './pages/aging-in-place.tsx';
import DisabilityModifications from './pages/disability-modifications.tsx';
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
      {/* Floating Navbar appears on all pages */}
      <Navbar />

      {/* Main Routes */}
      <div className="pt-24"> {/* ensures content is not hidden behind fixed navbar */}
        <Routes>
          <Route
            path="/"
            element={<Home highContrastMode={highContrastMode} toggleHighContrast={toggleHighContrast} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wheelchair-ramps" element={<WheelchairRamps />} />
          <Route path="/accessible-bathrooms" element={<AccessibleBathrooms />} />
          <Route path="/kitchen-modifications" element={<KitchenModifications />} />
          <Route path="/door-widening" element={<DoorWidening />} />
          <Route path="/aging-in-place" element={<AgingInPlace />} />
          <Route path="/disability-modifications" element={<DisabilityModifications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;