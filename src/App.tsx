import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import { localBusinessSchema, generateFAQSchema, injectSchema } from './utils/schema';
import { FAQS } from './components/FAQ.tsx';

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
import TonawandaBathroomRemodeling from './pages/cities/tonawanda/tonawanda-ny-bathroom-remodeling.tsx';
import TonawandaKitchenRemodeling from './pages/cities/tonawanda/tonawanda-ny-kitchen-remodeling.tsx';
import TonawandaHomeAdditions from './pages/cities/tonawanda/tonawanda-ny-home-additions.tsx';
import TonawandaBasementFinishing from './pages/cities/tonawanda/tonawanda-ny-basement-finishing.tsx';
import TonawandaFlooringInstallation from './pages/cities/tonawanda/tonawanda-ny-flooring-installation.tsx';
import AccessibleRemodelingKenmore from './pages/cities/kenmore/accessible-remodeling-kenmore-ny.tsx';
import RemodelingContractorKenmore from './pages/cities/kenmore/remodeling-contractor-kenmore-ny.tsx';
import KenmoreBathroomRemodeling from './pages/cities/kenmore/kenmore-ny-bathroom-remodeling.tsx';
import KenmoreKitchenRemodeling from './pages/cities/kenmore/kenmore-ny-kitchen-remodeling.tsx';
import KenmoreHomeAdditions from './pages/cities/kenmore/kenmore-ny-home-additions.tsx';
import KenmoreBasementFinishing from './pages/cities/kenmore/kenmore-ny-basement-finishing.tsx';
import KenmoreFlooringInstallation from './pages/cities/kenmore/kenmore-ny-flooring-installation.tsx';
import AccessibleRemodelingNorthTonawanda from './pages/cities/north-tonawanda/accessible-remodeling-north-tonawanda-ny.tsx';
import RemodelingContractorNorthTonawanda from './pages/cities/north-tonawanda/remodeling-contractor-north-tonawanda-ny.tsx';
import NorthTonawandaBathroomRemodeling from './pages/cities/north-tonawanda/north-tonawanda-ny-bathroom-remodeling.tsx';
import NorthTonawandaKitchenRemodeling from './pages/cities/north-tonawanda/north-tonawanda-ny-kitchen-remodeling.tsx';
import NorthTonawandaHomeAdditions from './pages/cities/north-tonawanda/north-tonawanda-ny-home-additions.tsx';
import NorthTonawandaBasementFinishing from './pages/cities/north-tonawanda/north-tonawanda-ny-basement-finishing.tsx';
import NorthTonawandaFlooringInstallation from './pages/cities/north-tonawanda/north-tonawanda-ny-flooring-installation.tsx';
import AccessibleRemodelingAmherst from './pages/cities/amherst/accessible-remodeling-amherst-ny.tsx';
import RemodelingContractorAmherst from './pages/cities/amherst/remodeling-contractor-amherst-ny.tsx';
import AmherstBathroomRemodeling from './pages/cities/amherst/amherst-ny-bathroom-remodeling.tsx';
import AmherstKitchenRemodeling from './pages/cities/amherst/amherst-ny-kitchen-remodeling.tsx';
import AmherstHomeAdditions from './pages/cities/amherst/amherst-ny-home-additions.tsx';
import AmherstBasementFinishing from './pages/cities/amherst/amherst-ny-basement-finishing.tsx';
import AmherstFlooringInstallation from './pages/cities/amherst/amherst-ny-flooring-installation.tsx';
import BuffaloAccessibleBathroomRemodeling from './pages/cities/buffalo/buffalo-ny-accessible-bathroom-remodeling.tsx';
import AmherstWheelchairRampInstallation from './pages/cities/amherst/amherst-ny-wheelchair-ramp-installation.tsx';
import KenmoreSmallBathroomRemodel from './pages/cities/kenmore/kenmore-ny-small-bathroom-remodel.tsx';
import TonawandaBasementFinishingEgress from './pages/cities/tonawanda/tonawanda-ny-basement-finishing-egress.tsx';
import FAQPage from './components/FAQ.tsx';
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
          <Route path="/tonawanda-ny-bathroom-remodeling" element={<TonawandaBathroomRemodeling />} />
          <Route path="/tonawanda-ny-kitchen-remodeling" element={<TonawandaKitchenRemodeling />} />
          <Route path="/tonawanda-ny-home-additions" element={<TonawandaHomeAdditions />} />
          <Route path="/tonawanda-ny-basement-finishing" element={<TonawandaBasementFinishing />} />
          <Route path="/tonawanda-ny-flooring-installation" element={<TonawandaFlooringInstallation />} />
          <Route path="/accessible-remodeling-kenmore-ny" element={<AccessibleRemodelingKenmore />} />
          <Route path="/remodeling-contractor-kenmore-ny" element={<RemodelingContractorKenmore />} />
          <Route path="/kenmore-ny-bathroom-remodeling" element={<KenmoreBathroomRemodeling />} />
          <Route path="/kenmore-ny-kitchen-remodeling" element={<KenmoreKitchenRemodeling />} />
          <Route path="/kenmore-ny-home-additions" element={<KenmoreHomeAdditions />} />
          <Route path="/kenmore-ny-basement-finishing" element={<KenmoreBasementFinishing />} />
          <Route path="/kenmore-ny-flooring-installation" element={<KenmoreFlooringInstallation />} />
          <Route path="/accessible-remodeling-north-tonawanda-ny" element={<AccessibleRemodelingNorthTonawanda />} />
          <Route path="/remodeling-contractor-north-tonawanda-ny" element={<RemodelingContractorNorthTonawanda />} />
          <Route path="/north-tonawanda-ny-bathroom-remodeling" element={<NorthTonawandaBathroomRemodeling />} />
          <Route path="/north-tonawanda-ny-kitchen-remodeling" element={<NorthTonawandaKitchenRemodeling />} />
          <Route path="/north-tonawanda-ny-home-additions" element={<NorthTonawandaHomeAdditions />} />
          <Route path="/north-tonawanda-ny-basement-finishing" element={<NorthTonawandaBasementFinishing />} />
          <Route path="/north-tonawanda-ny-flooring-installation" element={<NorthTonawandaFlooringInstallation />} />
          <Route path="/accessible-remodeling-amherst-ny" element={<AccessibleRemodelingAmherst />} />
          <Route path="/remodeling-contractor-amherst-ny" element={<RemodelingContractorAmherst />} />
          <Route path="/amherst-ny-bathroom-remodeling" element={<AmherstBathroomRemodeling />} />
          <Route path="/amherst-ny-kitchen-remodeling" element={<AmherstKitchenRemodeling />} />
          <Route path="/amherst-ny-home-additions" element={<AmherstHomeAdditions />} />
          <Route path="/amherst-ny-basement-finishing" element={<AmherstBasementFinishing />} />
          <Route path="/amherst-ny-flooring-installation" element={<AmherstFlooringInstallation />} />
          <Route path="/buffalo-ny-accessible-bathroom-remodeling" element={<BuffaloAccessibleBathroomRemodeling />} />
          <Route path="/amherst-ny-wheelchair-ramp-installation" element={<AmherstWheelchairRampInstallation />} />
          <Route path="/kenmore-ny-small-bathroom-remodel" element={<KenmoreSmallBathroomRemodel />} />
          <Route path="/tonawanda-ny-basement-finishing-egress" element={<TonawandaBasementFinishingEgress />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
