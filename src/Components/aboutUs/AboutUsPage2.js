import React, { useEffect, useRef } from "react";

function AboutUsPage() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      handleElementVisibility(textRef1);
      handleElementVisibility(textRef2);
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
    <div className="mx-auto p-8 aboutUsPage text-white flex flex-col items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="container mx-auto text-center  py-7 ">
          {/* <b>About Us</b> */}
          <div ref={textRef1} className=" fade-in-top">
            <b className="text-teal-400 uppercase w-full tracking-wide">
              About Us
            </b>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-10 lg:mt-5 ">
              Stratagem: Navigating Your Sourcing Journey
            </h1>
          </div>
          <div ref={textRef2} className=" fade-in-bottom">
            <p className="mt-5 lg:mt-7 text-white tracking-wide leading-relaxed">
              At Stratagem, we believe that the foundation of successful
              sourcing is not just about finding the right supplier but about
              creating sustainable and productive relationships. Our mission is
              to streamline your sourcing process, from initial design to final
              delivery, ensuring a smooth, efficient, and transparent journey
              every step of the way.
            </p>
            <button className="mt-10 bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
