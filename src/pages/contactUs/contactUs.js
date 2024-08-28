import React from "react";
import { ContactUs, Footer, NavBar } from "../../Components";

function ContactUsPage() {
  return (
    <div className="ContactUsPage"> 
      <div className="p-8">
        <NavBar />
      <ContactUs/>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactUsPage;
