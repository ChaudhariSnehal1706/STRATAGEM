import React from "react";
import OurValuesImage from "../../assets/images/OurValues.png";
import ValuesTop from "../../assets/images/ValuesTop.png";

function OurValuesComponent() {

  return (
    <div className="OurValues flex flex-col items-center justify-center py-10 lg:py-20">
    <div className="container mx-auto px-4">

      <div className="flex flex-col sm:flex-row items-center justify-center text-white lg:gap-64">
        <div className="hidden sm:block w-1/2" data-aos="zoom-in-up">
          <img
            src={OurValuesImage}
            alt="OurApproach"
            className="h-auto w-full"
          />
        </div>
        <div className="max-w-md p-4 w-full sm:w-1/2 relative" data-aos="zoom-in-up">
          <b className="text-teal-400 uppercase tracking-wide">Our Values</b>
          <h1 className="text-2xl lg:text-3xl font-bold leading-tight mt-7 lg:mt-5">
            Integrity and Transparency
          </h1>
          <p className="mt-4">
            Integrity and transparency are at the core of everything we do at
            Stratagem. We believe in building trust through open communication,
            honesty, and ethical business practices. From transparent pricing
            structures to clear reporting mechanisms, we strive to foster a
            culture of accountability and integrity throughout our interactions.
            When you partner with us, you can rest assured that we'll always act
            in your best interests, maintaining the highest standards of
            integrity every step of the way.
          </p>
          <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full">
            Join Us Now
          </button>
          <div className="absolute top-0 right-0 w-20 h-20" style={{top:"-35px"}}>
            <img src={ValuesTop} alt="ValuesTop" className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default OurValuesComponent;
