import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEOHelmet from './components/SEOHelmet';

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
import KenmoreWheelchairRampInstallation from './pages/cities/kenmore/kenmore-ny-wheelchair-ramp-installation.tsx';
import KenmoreGrabBarInstallation from './pages/cities/kenmore/kenmore-ny-grab-bar-installation.tsx';
import KenmoreStairLiftInstallation from './pages/cities/kenmore/kenmore-ny-stair-lift-installation.tsx';
import TonawandaWheelchairRampInstallation from './pages/cities/tonawanda/tonawanda-ny-wheelchair-ramp-installation.tsx';
import NorthTonawandaWheelchairRampInstallation from './pages/cities/north-tonawanda/north-tonawanda-ny-wheelchair-ramp-installation.tsx';
import KenmoreWalkInTubInstallation from './pages/cities/kenmore/kenmore-ny-walk-in-tub-installation.tsx';
import KenmoreRollInShowerInstallation from './pages/cities/kenmore/kenmore-ny-roll-in-shower-installation.tsx';
import KenmoreDoorWidening from './pages/cities/kenmore/kenmore-ny-door-widening.tsx';
import KenmoreKitchenModifications from './pages/cities/kenmore/kenmore-ny-kitchen-modifications.tsx';
import KenmoreAgingInPlaceDesignConsultation from './pages/cities/kenmore/kenmore-ny-aging-in-place-design-consultation.tsx';
import KenmoreHomeSafetyAssessments from './pages/cities/kenmore/kenmore-ny-home-safety-assessments.tsx';
import TonawandaGrabBarInstallation from './pages/cities/tonawanda/tonawanda-ny-grab-bar-installation.tsx';
import NorthTonawandaGrabBarInstallation from './pages/cities/north-tonawanda/north-tonawanda-ny-grab-bar-installation.tsx';
import TonawandaStairLiftInstallation from './pages/cities/tonawanda/tonawanda-ny-stair-lift-installation.tsx';
import TonawandaWalkInTubInstallation from './pages/cities/tonawanda/tonawanda-ny-walk-in-tub-installation.tsx';
import TonawandaRollInShowerInstallation from './pages/cities/tonawanda/tonawanda-ny-roll-in-shower-installation.tsx';
import TonawandaDoorWidening from './pages/cities/tonawanda/tonawanda-ny-door-widening.tsx';
import TonawandaKitchenModifications from './pages/cities/tonawanda/tonawanda-ny-kitchen-modifications.tsx';
import TonawandaAgingInPlaceDesignConsultation from './pages/cities/tonawanda/tonawanda-ny-aging-in-place-design-consultation.tsx';
import TonawandaHomeSafetyAssessments from './pages/cities/tonawanda/tonawanda-ny-home-safety-assessments.tsx';
import NorthTonawandaStairLiftInstallation from './pages/cities/north-tonawanda/north-tonawanda-ny-stair-lift-installation.tsx';
import NorthTonawandaWalkInTubInstallation from './pages/cities/north-tonawanda/north-tonawanda-ny-walk-in-tub-installation.tsx';
import NorthTonawandaRollInShowerInstallation from './pages/cities/north-tonawanda/north-tonawanda-ny-roll-in-shower-installation.tsx';
import NorthTonawandaDoorWidening from './pages/cities/north-tonawanda/north-tonawanda-ny-door-widening.tsx';
import NorthTonawandaKitchenModifications from './pages/cities/north-tonawanda/north-tonawanda-ny-kitchen-modifications.tsx';
import NorthTonawandaAgingInPlaceDesignConsultation from './pages/cities/north-tonawanda/north-tonawanda-ny-aging-in-place-design-consultation.tsx';
import NorthTonawandaHomeSafetyAssessments from './pages/cities/north-tonawanda/north-tonawanda-ny-home-safety-assessments.tsx';
import KenmoreHomePage from './pages/cities/kenmore/kenmore-home-page.tsx';
import TonawandaHomePage from './pages/cities/tonawanda/tonawanda-home-page.tsx';
import NorthTonawandaHomePage from './pages/cities/north-tonawanda/north-tonawanda-home-page.tsx';
import FAQPage from './components/FAQ.tsx';
import Contact from './pages/Contact.tsx';
import NotFound from './pages/NotFound.tsx';
import EstateCleanouts from './pages/estate-cleanouts.tsx';
import PropertyCleanouts from './pages/property-cleanouts.tsx';
import BathroomRemodeling from './pages/bathroom-remodeling.tsx';
import KitchenRemodeling from './pages/kitchen-remodeling.tsx';
import FoundationRepair from './pages/FoundationRepair.tsx';
import HandymanServices from './pages/HamdymanServices.tsx';
import InvestorServices from './pages/investor-services.tsx';
import Handrails from './pages/handrails.tsx';
import BuffaloEstateCleanouts from './pages/cities/buffalo/buffalo-ny-estate-cleanouts.tsx';
import BasementRepairs from './pages/BasementRepairs.tsx';
import BathroomRepairs from './pages/BathroomRepairs.tsx';
import CarpentryRepairs from './pages/CarpentryRepairs.jsx';
import Carpentry from './pages/Carpentry.tsx';
import ExteriorDoorRepair from './pages/ExteriorDoorRepair.tsx';
import InteriorDoorRepair from './pages/InteriorDoorRepair.tsx';
import GutterRepairs from './pages/GutterRepairs.tsx';
import KitchenRepairs from './pages/KitchenRepairs.tsx';
import StairRepair from './pages/StairRepair.jsx';
import WindowScreenRepair from './pages/WindowScreenRepair.tsx';
import TrimCarpentry from './pages/TrimCarpentry.tsx';
import LaminateFlooring from './pages/laminate-flooring.tsx';
import TypesOfRamps from './pages/types-of-ramps.tsx';
import ADAComplianceDetailsAndLocalRegulations from './pages/ada-compliance-details-and-local-regulations.tsx';
import MaintenanceTips from './pages/maintenance-tips.tsx';
import SlipResistantFlooring from './pages/slip-resistant-flooring.tsx';
import FlooringTransitions from './pages/flooring-transitions.tsx';
import MaintenanceDurability from './pages/maintenance-durability.tsx';
import ResidentialJunkRemoval from './pages/residential-junk-removal.tsx';
import CleanOutServices from './pages/clean-out-services.tsx';
import ForeclosureCleanOut from './pages/foreclosure-clean-out.tsx';
import HoardingCleanUp from './pages/hoarding-clean-up.tsx';
import BasementCleanOut from './pages/basement-clean-out.tsx';
import GarageCleanOut from './pages/garage-clean-out.tsx';
import LightDemolition from './pages/LightDemolition.tsx';
import SameDayJunkRemoval from './pages/SameDayJunkRemoval.tsx';
import HardwoodFloors from './pages/HardwoodFloors.tsx';
import LuxuryVinylPlank from './pages/LuxuryVinylPlank.tsx';
import ModernFlooring from './pages/ModernFlooring.tsx';
import HardwoodFlooringInstallersNearMe from './pages/HardwoodFlooringInstallersNearMe.tsx';
import NearMeFlooringInstallers from './pages/NearMeFlooringInstallers.tsx';

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
          <Route path="/services/bathroom-remodeling" element={<BathroomRemodeling />} />
          <Route path="/services/kitchen-remodeling" element={<KitchenRemodeling />} />
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
          <Route path="/kenmore-ny-wheelchair-ramp-installation" element={<KenmoreWheelchairRampInstallation />} />
          <Route path="/kenmore-ny-grab-bar-installation" element={<KenmoreGrabBarInstallation />} />
          <Route path="/kenmore-ny-stair-lift-installation" element={<KenmoreStairLiftInstallation />} />
          <Route path="/tonawanda-ny-wheelchair-ramp-installation" element={<TonawandaWheelchairRampInstallation />} />
          <Route path="/north-tonawanda-ny-wheelchair-ramp-installation" element={<NorthTonawandaWheelchairRampInstallation />} />
          <Route path="/kenmore-ny-walk-in-tub-installation" element={<KenmoreWalkInTubInstallation />} />
          <Route path="/kenmore-ny-roll-in-shower-installation" element={<KenmoreRollInShowerInstallation />} />
          <Route path="/kenmore-ny-door-widening" element={<KenmoreDoorWidening />} />
          <Route path="/kenmore-ny-kitchen-modifications" element={<KenmoreKitchenModifications />} />
          <Route path="/kenmore-ny-aging-in-place-design-consultation" element={<KenmoreAgingInPlaceDesignConsultation />} />
          <Route path="/kenmore-ny-home-safety-assessments" element={<KenmoreHomeSafetyAssessments />} />
          <Route path="/tonawanda-ny-grab-bar-installation" element={<TonawandaGrabBarInstallation />} />
          <Route path="/north-tonawanda-ny-grab-bar-installation" element={<NorthTonawandaGrabBarInstallation />} />
          <Route path="/tonawanda-ny-stair-lift-installation" element={<TonawandaStairLiftInstallation />} />
          <Route path="/tonawanda-ny-walk-in-tub-installation" element={<TonawandaWalkInTubInstallation />} />
          <Route path="/tonawanda-ny-roll-in-shower-installation" element={<TonawandaRollInShowerInstallation />} />
          <Route path="/tonawanda-ny-door-widening" element={<TonawandaDoorWidening />} />
          <Route path="/tonawanda-ny-kitchen-modifications" element={<TonawandaKitchenModifications />} />
          <Route path="/tonawanda-ny-aging-in-place-design-consultation" element={<TonawandaAgingInPlaceDesignConsultation />} />
          <Route path="/tonawanda-ny-home-safety-assessments" element={<TonawandaHomeSafetyAssessments />} />
          <Route path="/north-tonawanda-ny-stair-lift-installation" element={<NorthTonawandaStairLiftInstallation />} />
          <Route path="/north-tonawanda-ny-walk-in-tub-installation" element={<NorthTonawandaWalkInTubInstallation />} />
          <Route path="/north-tonawanda-ny-roll-in-shower-installation" element={<NorthTonawandaRollInShowerInstallation />} />
          <Route path="/north-tonawanda-ny-door-widening" element={<NorthTonawandaDoorWidening />} />
          <Route path="/north-tonawanda-ny-kitchen-modifications" element={<NorthTonawandaKitchenModifications />} />
          <Route path="/north-tonawanda-ny-aging-in-place-design-consultation" element={<NorthTonawandaAgingInPlaceDesignConsultation />} />
          <Route path="/north-tonawanda-ny-home-safety-assessments" element={<NorthTonawandaHomeSafetyAssessments />} />
          <Route path="/kenmore-home" element={<KenmoreHomePage />} />
          <Route path="/tonawanda-home" element={<TonawandaHomePage />} />
          <Route path="/north-tonawanda-home" element={<NorthTonawandaHomePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/services/foundation-repair" element={<FoundationRepair />} />
          <Route path="/services/handyman-services" element={<HandymanServices />} />
          <Route path="/services/investor-services" element={<InvestorServices />} />
          <Route path="/services/handrails" element={<Handrails />} />
          <Route path="/services/estate-cleanouts" element={<EstateCleanouts />} />
          <Route path="/services/property-cleanouts" element={<PropertyCleanouts />} />
          <Route path="/estate-cleanouts" element={<EstateCleanouts />} />
          <Route path="/property-cleanouts" element={<PropertyCleanouts />} />
          <Route path="/cities/buffalo/buffalo-ny-estate-cleanouts" element={<BuffaloEstateCleanouts />} />
          <Route path="/services/basement-repairs" element={<BasementRepairs />} />
          <Route path="/services/bathroom-repairs" element={<BathroomRepairs />} />
          <Route path="/services/carpentry-repairs" element={<CarpentryRepairs />} />
          <Route path="/services/carpentry" element={<Carpentry />} />
          <Route path="/services/exterior-door-repair" element={<ExteriorDoorRepair />} />
          <Route path="/services/interior-door-repair" element={<InteriorDoorRepair />} />
          <Route path="/services/gutter-repairs" element={<GutterRepairs />} />
          <Route path="/services/kitchen-repairs" element={<KitchenRepairs />} />
          <Route path="/services/stair-repair" element={<StairRepair />} />
          <Route path="/services/window-screen-repair" element={<WindowScreenRepair />} />
          <Route path="/services/trim-carpentry" element={<TrimCarpentry />} />
          <Route path="/services/laminate-flooring" element={<LaminateFlooring />} />
          <Route path="/services/types-of-ramps" element={<TypesOfRamps />} />
          <Route path="/services/ada-compliance-details-and-local-regulations" element={<ADAComplianceDetailsAndLocalRegulations />} />
          <Route path="/services/maintenance-tips" element={<MaintenanceTips />} />
          <Route path="/services/slip-resistant-flooring" element={<SlipResistantFlooring />} />
          <Route path="/services/flooring-transitions" element={<FlooringTransitions />} />
          <Route path="/services/maintenance-durability" element={<MaintenanceDurability />} />
          <Route path="/services/residential-junk-removal" element={<ResidentialJunkRemoval />} />
          <Route path="/services/clean-out-services" element={<CleanOutServices />} />
          <Route path="/services/foreclosure-clean-out" element={<ForeclosureCleanOut />} />
          <Route path="/services/hoarding-clean-up" element={<HoardingCleanUp />} />
          <Route path="/services/basement-clean-out" element={<BasementCleanOut />} />
          <Route path="/services/garage-clean-out" element={<GarageCleanOut />} />
          <Route path="/services/light-demolition" element={<LightDemolition />} />
          <Route path="/services/same-day-junk-removal" element={<SameDayJunkRemoval />} />
          <Route path="/services/hardwood-floors" element={<HardwoodFloors />} />
          <Route path="/services/luxury-vinyl-plank" element={<LuxuryVinylPlank />} />
          <Route path="/services/modern-flooring" element={<ModernFlooring />} />
          <Route path="/services/hardwood-flooring-installers-near-me" element={<HardwoodFlooringInstallersNearMe />} />
          <Route path="/services/near-me-flooring-installers" element={<NearMeFlooringInstallers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
