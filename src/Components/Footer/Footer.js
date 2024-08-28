import React from 'react';
import Logo from "../../assets/images/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  
  return (
    // <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-4">
    <footer className="bg-gradient-to-r footer text-white py-4">
      <div className='container mx-auto px-5'>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:space-x-36">
          <img alt="LOGO" src={Logo} className="h-8 mb-4 lg:mb-0 mt-8" />
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 p-8">
            <li>
              <a 
              // onClick={() => {
              //   if (location.pathname === "/home") {
              //     navigate("/");
              //   } else {
              //     navigate("/home");
              //   }
              // }} 
              onClick={() => {
                navigate("/");
              }}
              className="hover:text-gray-300">HOME</a>
            </li>
            <li>
              <a onClick={() => {
                navigate("/aboutUs");
              }} className="hover:text-gray-300">ABOUT US</a>
            </li>
            <li>
              <a onClick={() => {
                navigate("/ourServices");
              }} className="hover:text-gray-300">OUR SERVICES</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">WHY US?</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">SOURCE GUIDE</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
