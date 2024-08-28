import React from "react";
import Bulb from "../../assets/images/Bulb.png";
import HeroImg from "../../assets/images/Group.png";
import S1 from "../../assets/images/S1.png";
import S2 from "../../assets/images/S2.png";
import S3 from "../../assets/images/S3.png";
import S4 from "../../assets/images/S4.png";
import { useLocation } from "react-router-dom";

function ServicesPage() {
  const location = useLocation();
  return (
    <div className="ServicesPage text-white">
      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-col">
          <b className="text-teal-400 uppercase w-full tracking-wide text-center mt-16">
            Our Services
          </b>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-7 lg:mt-5 text-center">
            Complete Sourcing Solutions From Concept to Delivery
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly items-center text-white px-10 lg:px-36 md:px-14 sm:px-12 gap-10 mt-10">
        <div className="flex-1">
          <div className="ServicesCard flex flex-col items-start justify-center">
            <img alt="S1" src={S1} className="h-auto py-5" />
            <b className="text-green-400 uppercase w-full tracking-wide text-start">
              Technical Blueprint Analysis
            </b>
            <p className="my-3 tracking-wide leading-relaxed text-start">
              Send us your product drawings, and we'll handle the rest, matching
              you with the ideal supplier for your specific needs.
            </p>
          </div>

          <div className="ServicesCard flex flex-col items-start justify-center mt-6">
            <img alt="S2" src={S2} className="h-auto py-5" />
            <b className="text-sky-400 uppercase w-full tracking-wide text-start">
              Supplier Matching
            </b>
            <p className="my-3 tracking-wide leading-relaxed text-start">
              Leveraging our extensive network in Asia and Mexico, we connect
              you directly with suppliers that meet our rigorous standards for
              quality, reliability, and ethical practices.
            </p>
          </div>

        </div>

        <div className="flex-1 hidden sm:block">
        {location.pathname === "/home" || location.pathname === "/ourServices" ? (
              <img src={HeroImg} alt="HeroImg" />
            ) : (
              <img src={Bulb} alt="BulbImg" />
            )}
          {/* <img className="hidden lg:block h-auto" src={} alt="Lightbulb" /> */}

        </div>

        {/*  */}
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center text-white px-10 lg:px-36 md:px-14 sm:px-12 gap-10">
        <div className="flex-1">
          <div className="ServicesCard flex flex-col items-start justify-center mt-6">
            <img alt="S3" src={S3} className="h-auto py-5" />
            <b className="text-blue-400 uppercase w-full tracking-wide text-start">
              Open Communication
            </b>
            <p className="my-3 tracking-wide leading-relaxed text-start">
              Unique in our approach, we establish a direct line of
              communication between you and your supplier, ensuring clarity and
              transparency without the need for intermediaries.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="ServicesCard flex flex-col items-start justify-center mt-6">
            <img alt="S4" src={S4} className="h-auto py-5" />
            <b className="text-yellow-400 uppercase w-full tracking-wide text-start">
              Logistics and Shipping
            </b>
            <p className="my-3 tracking-wide leading-relaxed text-start">
              Our comprehensive services include logistics and shipping
              management, ensuring your products arrive safely and on time,
              wherever you are in the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
