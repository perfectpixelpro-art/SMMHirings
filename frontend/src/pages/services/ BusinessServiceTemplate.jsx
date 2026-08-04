import { useState } from "react";
import businessServicesData from "../../data/businessServicesData";
import businessFAQsData from "../../data/businessFAQsData";

import BusinessServiceHero from "../../components/services/BusinessServiceHero";
import WhatIsSection from "../../components/services/WhatIsSection";
import WhereItWorksSection from "../../components/services/WhereItWorksSection";
import HowItWorksSection from "../../components/services/HowItWorksSection";
import ToolsUsedSection from "../../components/services/ToolsUsedSection";
import FAQSection from "../../components/services/FAQSection";
import Footer from "../../components/Footer";

export default function BusinessServiceTemplate({ slug }) {
  const service = businessServicesData[slug];
  const faqs = businessFAQsData[slug] || [];

  const [landingType, setLandingType] = useState("business");

  if (!service) return null;

  return (
    <div className="w-full bg-white">

      <BusinessServiceHero
        category={service.category}
        title={service.title}
        tagline={service.tagline}
        landingType={landingType}
        setLandingType={setLandingType}
      />

      <WhatIsSection
        title={service.whatIsTitle}
        description={service.whatIsDescription}
      />

      <WhereItWorksSection
        title={service.platformsTitle}
        platforms={service.platforms}
      />

      <HowItWorksSection
        title={service.howItWorksTitle}
        steps={service.howItWorks}
      />

      <ToolsUsedSection
        title={service.toolsTitle}
        subtitle={service.toolsSubtitle}
        intro={service.toolsIntro}
        tools={service.tools}
      />

      <FAQSection faqs={faqs} />

      <Footer />

    </div>
  );
}                                       