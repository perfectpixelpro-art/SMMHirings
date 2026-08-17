import { useState } from "react";
import Navbar from "../../components/NavbarC";
import FreelancerHero from "../../components/services/FreelancerHero";
import FreelancerServicesGrid from "../../components/services/FreelancerServicesGrid";
import FreelancerBriefOverview from "../../components/services/FreelancerBriefOverview";
import FreelancerProcess from "../../components/services/FreelancerProcess";
import FreelancerInfoBox from "../../components/services/FreelancerInfoBox";
import TaskAssignment from "../../components/services/TaskAssignment";
import HowPaymentIsReleased from "../../components/services/Howpaymentisreleased";
import FreelancerTestimonials from "../../components/services/FreelancerTestimonials";
import FreelancerNoPitching from "../../components/services/FreelancerNoPitching";
import FreelancerFAQ from "../../components/services/FreelancerFAQ";
import FreelancerFinalCTA from "../../components/services/FreelancerFinalCTA";
import Footer from "../../components/Footer";

function FreelancerServices() {
  const [landingType, setLandingType] = useState("freelancer");
  return (
   <main className="bg-white overflow-x-hidden">
      <Navbar landingType={landingType} setLandingType={setLandingType}/>
      <FreelancerHero />
      <FreelancerServicesGrid />
      <FreelancerBriefOverview />
      <FreelancerProcess />
      <FreelancerInfoBox />
      <TaskAssignment />
      <HowPaymentIsReleased/>
      <FreelancerTestimonials/>
      <FreelancerNoPitching/>
      <FreelancerFAQ/>
      <FreelancerFinalCTA/>
      <Footer />
   </main>
  );
}

export default FreelancerServices;