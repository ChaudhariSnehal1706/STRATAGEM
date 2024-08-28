import React from "react";

function ReadyToBegin() {
  return (
    <div className="lg:py-36 md:py-16 py-6">
      <div className="flex justify-center items-center p-7 lg:p-0">
        <div className="ReadyToBegin" data-aos="zoom-out">
          <div className="ReadyToBeginCard bg-cover bg-center py-16 lg:px-28 container mx-auto px-7 " data-aos="zoom-in-up">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
              Ready to <span className="text-green-300"> Begin?</span>
            </h1>
            <p className="mt-5 mb-8 lg:mt-7 text-white tracking-wide leading-relaxed mx-22">
              With Stratagem's Sourcing Guide and our expert team by your side,
              you're well-equipped to navigate the complexities of global
              sourcing. Start your journey today and unlock the full potential
              of your business with strategic sourcing solutions tailored to
              your unique needs. Contact us to learn more and take the first
              step towards transformative sourcing partnerships.
            </p>
            <button
              href="#"
              className="bg-gradient-to-br from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white py-3 px-8 rounded-full block mx-auto">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyToBegin;
