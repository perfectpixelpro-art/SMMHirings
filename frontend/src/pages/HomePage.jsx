import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyDifferent from "../components/WhyDifferent";
import RealWork from "../components/RealWork";
import HowItWorks from "../components/HowItWorks";
import Categories from "../components/Categories";
import Footer from "../components/BlackFooter";
import PainPoints from "../components/PainPoints";
import Compare from "../components/Compare";
import BuiltFor from "../components/BuiltFor";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import FooterCTA from "../components/FooterCTA";



export default function HomePage() {
  const [landingType, setLandingType] = useState("freelancer");

  return (
    <div className="font-sans  ">
      <Navbar landingType={landingType} setLandingType={setLandingType}/>
      <Hero landingType={landingType} setLandingType={setLandingType} />
      <PainPoints landingType={landingType} />
      {/* <RealWork landingType={landingType} /> */}
      <HowItWorks landingType={landingType} />
      <WhyDifferent landingType={landingType}/>
      <Categories landingType={landingType} />
      {/* <Compare landingType={landingType} /> */}
      <BuiltFor landingType={landingType} />
      <Testimonials landingType={landingType} />
      <Faq landingType={landingType} />
      <FooterCTA landingType={landingType} setLandingType={setLandingType} />
      <Footer/>
    </div>
  );
}