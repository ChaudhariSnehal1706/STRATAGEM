import React from "react";
import OurApproachImage from "../../assets/images/OurApproach.png";
import ApproachTopImage from "../../assets/images/ApproachTop.png";
import ApproachBottomImage from "../../assets/images/ApproachBottom.png";

function OurApproachComponent() {

  return (
    <div  className="OurApproach flex items-center justify-center">
    <div className="container mx-auto p-4">

      <div className="flex flex-col sm:flex-row items-center justify-center text-white relative lg:gap-64">
        <div className="max-w-md p-4 relative" data-aos="zoom-in-up">
          <b className="text-teal-400 uppercase w-full tracking-wide">
            Our Approach
          </b>
          <h1 className="text-2xl lg:text-3xl font-bold leading-tight mt-7 lg:mt-5 ">
            Tailored Strategies for Success
          </h1>
          <p className="mt-4">
            At Stratagem, we understand that every sourcing journey is unique.
            That's why we don't believe in one-size-fits-all solutions. Instead,
            we take the time to listen to your goals, analyze your requirements,
            and develop customized strategies that align with your objectives.
            Whether you're seeking cost savings, quality improvements, or supply
            chain resilience, our flexible approach ensures that we adapt to
            your evolving needs, delivering tangible results that exceed
            expectations.
          </p>
          <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full">
            Join Us Now
          </button>
          <div className="absolute bottom-0 right-0 w-20 h-20">
            <img
              src={ApproachBottomImage}
              alt="ApproachBottom"
              className="h-full w-full"
            />
          </div>
        </div>

        <div  className="hidden sm:block relative" data-aos="zoom-in-up">
          <img
            src={ApproachTopImage}
            alt="ApproachTop"
            className="absolute top-0 right-0"
          />
          <img
            src={OurApproachImage}
            alt="OurApproach"
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default OurApproachComponent;
