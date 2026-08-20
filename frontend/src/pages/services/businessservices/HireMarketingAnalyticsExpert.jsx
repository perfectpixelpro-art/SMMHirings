import React from 'react';
import { useState } from "react";

import Navbar from "../../../components/NavbarC";
import HireMarketingAnalyticsExpertHero from "../../../components/services/businessservices/HireMarketingAnalyticsExpert/HireMarketingAnalyticsExpertHero";
import WhyHard from "../../../components/services/businessservices/HireMarketingAnalyticsExpert/WhyHard";
import AnalyticsVsReporting  from "../../../components/services/businessservices/HireMarketingAnalyticsExpert/AnalyticsVsReporting";
import AnalyticsDashboard  from "../../../components/services/businessservices/HireMarketingAnalyticsExpert/AnalyticsDashboard";
import ProblemsFreelancerSolves  from "../../../components/services/businessservices/HireMarketingAnalyticsExpert/ProblemsFreelancerSolves";



const HireMarketingAnalyticsExpert = () => {

  const [landingType, setLandingType] = useState("freelancer");

  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar landingType={landingType} setLandingType={setLandingType}/>
      <HireMarketingAnalyticsExpertHero/>
      <WhyHard/>
      <AnalyticsVsReporting/>
      <AnalyticsDashboard/>
      <ProblemsFreelancerSolves/>
      


    </main>
  )
}

export default HireMarketingAnalyticsExpert;