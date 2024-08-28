import React, { useEffect, useRef } from "react";

// import Bulb from "../../assets/images/Bulb.png";
import HeroImg from "../../assets/images/Group.png";
import S1 from "../../assets/images/S1.png";
import S2 from "../../assets/images/S2.png";
import S3 from "../../assets/images/S3.png";
import S4 from "../../assets/images/S4.png";
import { Parallax } from "react-parallax";

function ServicesPage() {
  
  const textRef1 = useRef(null); 
  const textRef2 = useRef(null); 
  const cardRef1 = useRef(null); 
  const cardRef2 = useRef(null); 
  const cardRef3 = useRef(null); 
  const cardRef4 = useRef(null); 
  const imgRef = useRef(null); 

  useEffect(() => {
    const handleScroll = () => {
      handleElementVisibility(textRef1);
      handleElementVisibility(textRef2);
      handleElementVisibility(cardRef1);
      handleElementVisibility(cardRef2);
      handleElementVisibility(cardRef3);
      handleElementVisibility(cardRef4);
      handleElementVisibility(imgRef);
    };

    const handleElementVisibility = (ref) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isInViewport) {
        ref.current.classList.add("visible");
      } else {
        ref.current.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <div className="ServicesPage text-white">
      <div className="container mx-auto ">
        <div className="flex justify-center items-center flex-col ">
          <b ref={textRef1}  className="text-teal-400 uppercase w-full tracking-wide text-center mt-16 fade-in-top">
            Our Services
          </b>
          <h1 ref={textRef2}  className="text-4xl lg:text-5xl font-bold leading-tight mt-7 lg:mt-5 text-center fade-in-bottom">
            Complete Sourcing Solutions From Concept to Delivery
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="lg:flex flex-col lg:flex-row justify-evenly items-center text-white lg:gap-10 mt-10 ">
          <div className="flex-1">
            <div ref={cardRef1} className="PurpleRing  fade-in-top">
              <div className="ServicesCard flex flex-col items-start justify-center ">
                <img alt="S1" src={S1} className="h-24 my-4 imgCircle" />
                <b className="text-green-400 uppercase w-full tracking-wide text-start">
                  Technical Blueprint Analysis
                </b>
                <p className="my-3 tracking-wide leading-relaxed text-start">
                  Send us your product drawings, and we'll handle the rest,
                  matching you with the ideal supplier for your specific needs.
                </p>
              </div>
            </div>

            <div ref={cardRef2} className="ServicesCard flex flex-col items-start justify-center mt-6 fade-in-top">
              <img alt="S2" src={S2} className="h-24 my-4 imgCircle" />
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
            {/* <Parallax
              className="hidden lg:block"
              bgImage={HeroImg}
              strength={200}
              renderLayer={(percentage) => (
                <div>
                  <div
                    style={{
                      position: "absolute",
                      width: percentage * 500,
                      height: percentage * 500,
                    }}
                  />
                </div>
              )}>
              <div style={{ height: 580 }}>
                <div className="text-black" style={insideStyles}>renderProp</div>
              </div>
            </Parallax> */}
            <img ref={imgRef} className="hidden lg:block lg:ml-20 fade-in-top" src={HeroImg} alt="Lightbulb" style={{maxWidth:"80%"}}/>
          </div>

          {/*  */}
        </div>
        <div className="lg:flex flex-col lg:flex-row justify-evenly items-center text-white lg:gap-10 ">
          <div className="flex-1">
            <div ref={cardRef3} className="PurpleCircle fade-in-top">
              <div className="ServicesCard flex flex-col items-start justify-center mt-6 ">
                <img alt="S3" src={S3} className="h-24 my-4 imgCircle" />
                <b className="text-blue-400 uppercase w-full tracking-wide text-start">
                  Open Communication
                </b>
                <p className="my-3 tracking-wide leading-relaxed text-start">
                  Unique in our approach, we establish a direct line of
                  communication between you and your supplier, ensuring clarity
                  and transparency without the need for intermediaries.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div ref={cardRef4} className="RedRing fade-in-top">
              <div className="ServicesCard flex flex-col items-start justify-center mt-6 ">
                <img alt="S4" src={S4} className="h-36 py-5" />
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
      </div>
    </div>
  );
}

export default ServicesPage;
