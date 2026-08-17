import React from 'react';
import { useState } from "react";

import Navbar from "../../../components/NavbarC";
import ContentWritersHero from "../../../components/services/businessservices/HireContentWritersCopywriters/ContentWritersHero";
import WhyHardToHire from "../../../components/services/businessservices/HireContentWritersCopywriters/WhyHardToHire";
import WhoIsThisFor from "../../../components/services/businessservices/HireContentWritersCopywriters/WhoIsThisFor";
import ProblemsWeSolve from "../../../components/services/businessservices/HireContentWritersCopywriters/ProblemsWeSolve";
import ContentProcess from "../../../components/services/businessservices/HireContentWritersCopywriters/ContentProcess";
import WhyHireThrough from "../../../components/services/businessservices/HireContentWritersCopywriters/WhyHireThrough";
import GetStartedChecklist from "../../../components/services/businessservices/HireContentWritersCopywriters/GetStartedChecklist";
import HireContentWritersCopywritersFAQ from "../../../components/services/businessservices/HireContentWritersCopywriters/HireContentWritersCopywritersFAQ";
import ContentFinalCTA from "../../../components/services/businessservices/HireContentWritersCopywriters/ContentFinalCTA";
import Footer from "../../../components/Footer";



const HireContentWritersCopywriters = () => {

   const [landingType, setLandingType] = useState("freelancer");

  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar landingType={landingType} setLandingType={setLandingType}/>
      <ContentWritersHero/>
      <WhyHardToHire/>
      <WhoIsThisFor/>
      <ProblemsWeSolve/>
      <ContentProcess/>
      <WhyHireThrough/>
      <GetStartedChecklist/>
      <HireContentWritersCopywritersFAQ/>
      <ContentFinalCTA/>
      <Footer />



    </main>
  )
}

export default HireContentWritersCopywriters