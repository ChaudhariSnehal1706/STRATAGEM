import React from "react";
import {
  NavBar,
  Footer,
  PersonalizedSupport,
  ServicesPage2,
} from "../../Components";

function OurServices() {
  return (
    <>
      <div className="ServicesPage">
        {/* NavBar */}
        <nav className="p-8 ">
          <NavBar />
        </nav>
        {/* End NavBar */}

        {/* ServicesPage Component */}
        <div className="lg:px-20 lg:py-10">
          <ServicesPage2 />
        </div>
        {/* End ServicesPage Component */}
      </div>

      {/* PersonalizedSupport Component */}
      <PersonalizedSupport />
      {/* End PersonalizedSupport Component */}

      {/* Footer Component */}
      <Footer />
      {/* End Footer Component */}
    </>
  );
}

export default OurServices;
