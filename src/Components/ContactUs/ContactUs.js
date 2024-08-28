import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ContactUs() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine whether to add the additional padding classes
  const addAdditionalPadding =
    location.pathname === "/home" || location.pathname === "/";

  return (
    <div
      className={`lg:flex justify-center items-center py-10 ${
        addAdditionalPadding ? "lg:py-16 md:py-32 px-5 lg:px-10" : ""
      }`}>
      <div className="ContactUsCard bg-gradient-to-br from-red-400 via-yellow-400 to-purple-600 p-8 rounded-lg text-center">
        <div className=" lg:pt-16">
          <b className="text-yellow-400 uppercase tracking-wide">Contact Us</b>
          <h2 className="text-white text-2xl lg:text-3xl mt-3 font-bold leading-tight">
            Start Your Sourcing Journey with Stratagem
          </h2>
        </div>
        <form className="text-white mt-10 flex flex-col lg:px-10">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              className="form-input"
              type="text"
              placeholder="First Name"
            />
            <input className="form-input" type="text" placeholder="Last Name" />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
            <input
              className="form-input"
              type="email"
              placeholder="Email Address"
              required
            />
            <input
              className="form-input"
              type="tel"
              placeholder="Phone Number"
            />
          </div>
          <textarea
            className="form-textarea mt-4"
            rows={4}
            placeholder="Write your message here..."></textarea>
          <div className="mx-auto text-center my-10">
            <button className="bg-gradient-to-r from-purple-700 to-sky-400 hover:from-sky-400 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full cursor-pointer transition duration-300 ease-in-out">
              Send Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
