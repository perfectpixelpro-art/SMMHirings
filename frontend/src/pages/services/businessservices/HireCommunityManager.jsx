import React from 'react';
import { useState } from "react";

import Navbar from "../../../components/NavbarC";
import CommunityManagerHero from "../../../components/services/businessservices/HireCommunityManager/CommunityManagerHero";
import WhatCommunityManagerDoes from "../../../components/services/businessservices/HireCommunityManager/WhatCommunityManagerDoes";
import FindingRightManager from "../../../components/services/businessservices/HireCommunityManager/FindingRightManager";
import CommunityDashboard from "../../../components/services/businessservices/HireCommunityManager/CommunityDashboard";
import HowHiringWorks from "../../../components/services/businessservices/HireCommunityManager/HowHiringWorks";
import WhyChooseCommunityManagement from "../../../components/services/businessservices/HireCommunityManager/WhyChooseCommunityManagement";
import GetStarted from "../../../components/services/businessservices/HireCommunityManager/GetStarted";
import CommunityManagerFAQ from "../../../components/services/businessservices/HireCommunityManager/CommunityManagerFAQ";
import CommunityFinalCTA from "../../../components/services/businessservices/HireCommunityManager/CommunityFinalCTA";
import Footer from "../../../components/Footer";

const HireCommunityManager = () => {

  
     const [landingType, setLandingType] = useState("freelancer");
     
  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar landingType={landingType} setLandingType={setLandingType}/>
      <CommunityManagerHero/>
      <WhatCommunityManagerDoes/>
      <FindingRightManager/>
      <CommunityDashboard/>
      <HowHiringWorks/>
      <WhyChooseCommunityManagement/>
      <GetStarted/>
      <CommunityManagerFAQ/>
      <CommunityFinalCTA/>
      <Footer />
      
    </main>
  )
}

export default HireCommunityManager