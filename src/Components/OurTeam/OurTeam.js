import React from "react";
import M1 from "../../assets/images/M1.png"; // Rename the imported image
import M2 from "../../assets/images/M2.png"; // Rename the imported image
import M3 from "../../assets/images/M3.png"; // Rename the imported image
import ApproachTopImage from "../../assets/images/ApproachTop.png";
import TeamButtomImage from "../../assets/images/TeamButtom.png";

function OurTeam() {
  return (
    <div className="py-10 ">
    <div className="text-center mb-8 text-white relative">
  <img
    src={ApproachTopImage}
    alt="ApproachTop"
    className="absolute top-0 right-0 lg:px-52 px-10 hidden lg:block" data-aos="zoom-out-left"
  />
  <div data-aos="zoom-in-up">
    <b className="text-teal-400 uppercase w-full tracking-wide">
      Our Team
    </b>
    <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-7 lg:mt-5 py-5">
      Expertise and Dedication
    </h1>
    <p className="mt-5 lg:mt-7 text-white tracking-wide leading-relaxed lg:px-64 md:px-32 px-7">
      Our team at Stratagem is composed of seasoned professionals with a
      wealth of experience in sourcing, procurement, and supply chain
      management. From industry veterans to fresh perspectives, each
      member brings a unique set of skills and insights to the table. We
      are dedicated to understanding your specific needs and challenges,
      tailoring our approach to deliver optimal solutions that drive
      success for your business.
    </p>
  </div>
  <img
    src={TeamButtomImage}
    alt="TeamButtom"
    className="absolute bottom-0 left-0 lg:px-32 px-10 hidden lg:block" data-aos="zoom-out-right"
  />
</div>


      {/* Team members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-80 md:px-28 px-5" data-aos="zoom-in-up">
        <div className="teamCard flex flex-col items-center">
          <div className="profileCard">
            <img src={M1} alt="M1" className="h-44" />
          </div>
          <div className="text-center text-white">
            <b className=" text-teal-400 uppercase w-full tracking-wide">
              Lorem Ipsum
            </b>
            <p className=" text-white tracking-wide leading-relaxed">
              CEO of Lorem
            </p>
          </div>
        </div>
        <div className="teamCard flex flex-col items-center">
          <div className="profileCard">
            <img src={M2} alt="M2" className="h-44" />
          </div>
          <div className="text-center text-white">
            <b className=" text-teal-400 uppercase w-full tracking-wide">
              Lorem Ipsum
            </b>
            <p className=" text-white tracking-wide leading-relaxed">
              CEO of Lorem
            </p>
          </div>
        </div>
        <div className="teamCard flex flex-col items-center">
          <div className="profileCard">
            <img src={M3} alt="M3" className="h-44" />
          </div>
          <div className="text-center text-white">
            <b className=" text-teal-400 uppercase w-full tracking-wide">
              Lorem Ipsum
            </b>
            <p className=" text-white tracking-wide leading-relaxed">
              CEO of Lorem
            </p>
          </div>
        </div>

        {/*  */}

        <div className="teamCard flex flex-col items-center">
          <div className="profileCard">
            <img src={M3} alt="M3" className="h-44" />
          </div>
          <div className="text-center text-white">
            <b className=" text-teal-400 uppercase w-full tracking-wide">
              Lorem Ipsum
            </b>
            <p className=" text-white tracking-wide leading-relaxed">
              CEO of Lorem
            </p>
          </div>
        </div>
        <div className="teamCard flex flex-col items-center">
          <div className="profileCard">
            <img src={M1} alt="M1" className="h-44" />
          </div>
          <div className="text-center text-white">
            <b className=" text-teal-400 uppercase w-full tracking-wide">
              Lorem Ipsum
            </b>
            <p className=" text-white tracking-wide leading-relaxed">
              CEO of Lorem
            </p>
          </div>
        </div>
        <div className="teamCard flex flex-col items-center">
          <div className="profileCard">
            <img src={M2} alt="M2" className="h-44" />
          </div>
          <div className="text-center text-white">
            <b className=" text-teal-400 uppercase w-full tracking-wide">
              Lorem Ipsum
            </b>
            <p className=" text-white tracking-wide leading-relaxed">
              CEO of Lorem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
