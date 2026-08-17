import React from 'react';
import { useState } from "react";

import Navbar from "../../../components/NavbarC";
import HireSocialMediaManagerHero from "../../../components/services/businessservices/HireSocialMediaManager/HireSocialMediaManagerHero";
import Professional from "../../../components/services/businessservices/HireSocialMediaManager/Professional";
import WorthYourTime from "../../../components/services/businessservices/HireSocialMediaManager/WorthYourTime";
import CommonQuestions from "../../../components/services/businessservices/HireSocialMediaManager/CommonQuestions";
import WhatGetsReviewed from "../../../components/services/businessservices/HireSocialMediaManager/WhatGetsReviewed";
import HowToHire from "../../../components/services/businessservices/HireSocialMediaManager/HowToHire";
import WhatYouNeed from "../../../components/services/businessservices/HireSocialMediaManager/WhatYouNeed";
import HireSocialMediaManagerFAQ from "../../../components/services/businessservices/HireSocialMediaManager/HireSocialMediaManagerFAQ";
import FinalCTA from "../../../components/services/businessservices/HireSocialMediaManager/FinalCTA";
import Footer from "../../../components/Footer";

const HireSocialMediaManager = () => {

  const [landingType, setLandingType] = useState("freelancer");
  
  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar landingType={landingType} setLandingType={setLandingType}/>
      <HireSocialMediaManagerHero />
      <Professional/>
      <WorthYourTime/>
      <CommonQuestions/>
      <WhatGetsReviewed/>
      <HowToHire/>
      <WhatYouNeed/>
      <HireSocialMediaManagerFAQ/>
      <FinalCTA/>
      <Footer />
    </main>
  )
}

export default HireSocialMediaManager;