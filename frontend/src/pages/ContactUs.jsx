import { useState } from "react";
import Navbar from "../components/NavbarC";
import Footer from "../components/Footer";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function ContactUs() {
     const [landingType, setLandingType] = useState("freelancer");
  return (
    <>
      <Navbar landingType={landingType} setLandingType={setLandingType}/>

      <ContactForm />
         <ContactInfo />
          <Footer />
    </>
  );
}