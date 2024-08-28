import React from "react";

function Stratagem() {
  return (
    <div className="StratagemPage bg-cover bg-center flex flex-col items-center justify-center text-center text-white lg:py-10">
      <div className="my-7"></div>
      <b className="text-teal-400 uppercase w-full tracking-wide mt-7">
        Why Choose Stratagem?
      </b>
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight p-5 mt-7 lg:mt-5 ">
        Direct : Transparent : Reliable
      </h1>
      <p className="mt-5 lg:mt-7 text-white tracking-wide leading-relaxed px-5 lg:px-96">
        What sets Stratagem apart is our commitment to not just being a link in
        the chain but a facilitator of direct relationships. By removing the
        middleman, we ensure that our clients have full visibility and control
        over their sourcing process, leading to better outcomes, improved
        efficiencies, and stronger partnerships.
      </p>
      <button className="mt-10 bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full">
        Join Us Now
      </button>
      <div className="my-7"></div>
    </div>
  );
}

export default Stratagem;
