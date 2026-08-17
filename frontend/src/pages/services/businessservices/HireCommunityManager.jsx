import React from 'react';
import { useState } from "react";

import Navbar from "../../../components/NavbarC";

const HireCommunityManager = () => {

  
     const [landingType, setLandingType] = useState("freelancer");
     
  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar landingType={landingType} setLandingType={setLandingType}/>
      



    </main>
  )
}

export default HireCommunityManager