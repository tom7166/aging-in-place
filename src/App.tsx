import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import { localBusinessSchema, generateFAQSchema, injectSchema } from './utils/schema';
import { FAQS } from './utils/constants';

import Home from './pages/index';
import About from './pages/About';
import WheelchairRamps from './pages/wheelchair-ramps';
import AccessibleBathrooms from './pages/accessible-bathrooms';
import KitchenModifications from './pages/kitchen-modifications';
import DoorWidening from './pages/door-widening';
import AgingInPlace from './pages/aging-in-place';
import DisabilityModifications from './pages/disability-modifications';
import Contact from './pages/contact';
import NotFound from './pages/not-found';

const App: React.FC = () => {
  const [highContrastMode, setHighContrastMode] = useState(false);
  const toggleHighContrast = () => setHighContrastMode(prev => !prev);

  useEffect(() => {
    injectSchema(localBusinessSchema);
    injectSchema(generateFAQSchema(FAQS));
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home highContrastMode={highContrastMode} toggleHighContrast={toggleHighContrast} />} />
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
    </Router>
  );
};

export default App;
