import React from "react";
import {
  AboutUsPage2,
  ContactUs,
  Footer,
  NavBar,
  ReadyToBegin,
  ServicesPage2,
  SourcingGuide2,
  Stratagem,
  Testimonials,
} from "../../Components";
import BulbImg from "../../assets/images/Bulb.png";

function Home() {
  return (
    <>
      <div className="hero_section">
        {/* NavBar */}
        <nav className="p-8">
          <NavBar />
        </nav>
        {/* End NavBar */}

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-evenly items-center text-white container mx-auto px-4  lg:py-5 pb-20 ">
          <div className="max-w-xl lg:mr-12">
            {/* <div className="pr-96"> */}
            {/* <p style={{ color: " #63F3F2" }}>Welcome to Stratagem </p> */}
            <b className="text-teal-400 uppercase w-full tracking-wide">
              Welcome to Stratagem
            </b>
            {/* <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-7 lg:mt-5 ">
              Your Gateway to Global Sourcing Excellence
            </h1> */}

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-7 lg:mt-5 ">
              Your Gateway to Global Sourcing{" "}
              <span className="excellence-text">Excellence</span>
            </h1>
            <p className="mt-5 lg:mt-7 text-white tracking-wide leading-relaxed capitalize">
              Stratagem is your premier partner for comprehensive sourcing
              solutions across Asia and Mexico. With our deep industry knowledge
              and expansive network, we connect businesses of all sizes with the
              high-quality suppliers they need to thrive in a competitive
              market.
            </p>
            <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full ">
              Join Now
            </button>
          </div>
          <div className="hidden sm:block">
            <img src={BulbImg} alt="BulbImg flex-1 " className="BulbImg" />
          </div>
        </div>

        {/* End Hero Section */}
      </div>
      {/* AboutUs Page */}
      <AboutUsPage2 />
      {/* End AboutUs Page */}
      {/* ServicesPage Page */}
      <ServicesPage2 />
      {/* End ServicesPage Page */}

      {/* Stratagem Page */}
      <Stratagem />
      {/* End Stratagem Page */}

      {/* SourcingGuide Page */}
      <SourcingGuide2 />
      {/* End SourcingGuide Page */}

      {/* ReadyToBegin Page */}
      <ReadyToBegin />
      {/* End ReadyToBegin Page */}

      {/* Testimonials Page */}
      <Testimonials />
      {/* End Testimonials Page */}

      {/* ContactUs Page */}
      <ContactUs />
      {/* End ContactUs Page */}

      {/* Footer Page */}
      <Footer />
      {/* End Footer Page */}
    </>
  );
}

export default Home;
