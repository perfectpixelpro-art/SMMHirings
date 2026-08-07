import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyDifferent from "../components/WhyDifferent";
import RealWork from "../components/RealWork";
import HowItWorks from "../components/HowItWorks";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import PainPoints from "../components/PainPoints";

export default function HomePage() {
  const [landingType, setLandingType] = useState("freelancer");

  return (
    <div className="font-sans">
      <Navbar landingType={landingType} setLandingType={setLandingType}/>
      <Hero landingType={landingType} setLandingType={setLandingType} />
      <PainPoints landingType={landingType} />
      {/* <WhyDifferent landingType={landingType}/>
      <RealWork landingType={landingType} /> */}
      <HowItWorks landingType={landingType} />
      {/* <Categories landingType={landingType} /> */}
      <Footer/>
    </div>
  );
}