import React from "react";
import {
  AboutUsPage,
  Footer,
  NavBar,
  OurApproach,
  OurTeam,
  OurValues,
} from "../../Components";
function AboutUs() {
  return (
    <>
      <div className="aboutUsPage" >
        {/* NavBar */}
        <nav className="p-8">
          <NavBar />
        </nav>
        {/* End NavBar */}

        {/* Hero Section */}
        {/* <div className="flex flex-col lg:flex-row justify-evenly items-center text-white px-7 lg:px-24 py-16 lg:py-24"> */}
          <AboutUsPage />
        {/* </div> */}
        {/* End Hero Section */}
      </div>

      {/* OurApproach Page */}
      <OurApproach />
      {/* End OurApproach Page */}
      
      {/* OurValues Page */}
      <OurValues />
      {/* End OurValues Page */}

      
      {/* OurTeam Page */}
      <OurTeam />
      {/* End OurTeam Page */}


      {/* Footer Page */}
      <Footer />
      {/* End Footer Page */}
    </>
  );
}

export default AboutUs;
