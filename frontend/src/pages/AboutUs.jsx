import { useState } from "react";
import Navbar from "../components/NavbarC";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import AboutExecution from "../components/about/AboutExecution";
import AboutSystem from "../components/about/AboutSystem";
import AboutVideo from "../components/about/AboutVideo";
import AboutWorkflow from "../components/about/AboutWorkflow";
import AboutOpportunities from "../components/about/AboutOpportunities";
import AboutWorkflowStages  from "../components/about/AboutWorkflowStages";
import AboutConsistency from "../components/about/AboutConsistency";
import AboutFooter from "../components/about/AboutFooter";


const AboutUs = () => {
    const [landingType, setLandingType] = useState("freelancer");
  return (
    <main className="bg-white overflow-x-hidden   ">

        <Navbar landingType={landingType} setLandingType={setLandingType}/>
      <AboutHero />
      <AboutExecution landingType={landingType} />
      <AboutSystem />
      <AboutVideo/>
      <AboutWorkflow/>
     <AboutOpportunities landingType={landingType} />
      <AboutWorkflowStages/>
      <AboutConsistency/>
      <AboutFooter landingType={landingType} />
       <Footer />

    </main>
  );
};

export default AboutUs;