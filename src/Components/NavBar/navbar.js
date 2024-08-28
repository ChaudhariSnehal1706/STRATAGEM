import React, { useState } from "react";
import Logo from "../../assets/images/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <nav className="navbar text-white lg:rounded-full rounded-3xl container mx-auto">
      <div>
        <ul className="hidden lg:flex items-center justify-evenly py-8">
          <li
            className={
              pathname === "/" || pathname.startsWith("/home") ? "active" : ""
            }>
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
              >
              HOME
            </a>
          </li>
          <li className={pathname === "/aboutUs" ? "active" : ""}>
            <a
              onClick={() => {
                navigate("/aboutUs");
              }}>
              ABOUT US
            </a>
          </li>
          <li className={pathname === "/ourServices" ? "active" : ""}>
            <a
              onClick={() => {
                navigate("/ourServices");
              }}>
              OUR SERVICES
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/ourServices");
              }}
              className="flex-shrink-0">
              <img alt="LOGO" src={Logo} className="logo lg:block hidden " />
            </a>
          </li>
          <li>
            <a href="#">WHY US?</a>
          </li>
          <li>
            <a href="#">SOURCE GUIDE</a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/contactUs");
              }}
              // className="nav-link bg-gradient-to-br from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-full px-12 py-4"
              className="nav-link call_now_btn text-white rounded-full px-12 py-4"
              >
              Call Now
            </a>
          </li>
        </ul>
        <ul className="flex lg:hidden items-center justify-between p-8">
          <li>
            <a
              onClick={() => {
                navigate("/");
              }}
              className="flex-shrink-0">
              <img alt="LOGO" src={Logo} className="logo lg:hidden" />
            </a>
          </li>
          <li>
            <button onClick={toggleMenu} className="menu-button lg:hidden">
              {isOpen ? (
                // Close icon SVG
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white fill-current"
                  viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"
                  />
                </svg>
              ) : (
                // Hamburger menu icon SVG
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white fill-current"
                  viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                  />
                </svg>
              )}
            </button>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="menu-list lg:hidden p-7 ">
          <li
            className={
              pathname === "/" || pathname.startsWith("/home") ? "active" : ""
            }>
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
              className="block py-2 px-4 hover:text-gray-300">
              HOME
            </a>
          </li>
          <li className={pathname === "/aboutUs" ? "active" : ""}>
            <a
              onClick={() => {
                navigate("/aboutUs");
              }}
              className="block py-2 px-4 hover:text-gray-300">
              ABOUT US
            </a>
          </li>
          <li className={pathname === "/ourServices" ? "active" : ""}>
            <a
              onClick={() => {
                navigate("/ourServices");
              }}
              className="block py-2 px-4 hover:text-gray-300">
              OUR SERVICES
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:text-gray-300">
              WHY US?
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:text-gray-300">
              SOURCE GUIDE
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/contactUs");
              }}
              // className="inline-block py-2 px-4 rounded-full bg-gradient-to-br from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
              className="inline-block py-3 px-9 rounded-full call_now_btn text-white"
              >
              Call Now
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
