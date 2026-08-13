import { useState } from "react";
import Navbar from "../../components/NavbarC";
import FreelancerHero from "../../components/services/FreelancerHero";
import FreelancerServicesGrid from "../../components/services/FreelancerServicesGrid";
import FreelancerProcess from "../../components/services/FreelancerProcess";
import FreelancerInfoBox from "../../components/services/FreelancerInfoBox";
import TaskAssignment from "../../components/services/TaskAssignment";
import HowPaymentIsReleased from "../../components/services/Howpaymentisreleased";
import FreelancerTestimonials from "../../components/services/FreelancerTestimonials";
import FreelancerFAQ from "../../components/services/FreelancerFAQ";
import Footer from "../../components/Footer";

function FreelancerServices() {
  const [landingType, setLandingType] = useState("freelancer");
  return (
   <main className="bg-white overflow-x-hidden">
      <Navbar landingType={landingType} setLandingType={setLandingType}/>
      <FreelancerHero />
      <FreelancerServicesGrid />
      <FreelancerProcess />
      <FreelancerInfoBox />
      <TaskAssignment />
      <HowPaymentIsReleased/>
      <FreelancerTestimonials/>
      <FreelancerFAQ/>
      <Footer />
   </main>
  );
}

export default FreelancerServices;