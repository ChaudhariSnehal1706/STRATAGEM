import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import React from "react";
// import Home from "./pages/home/Home.js"
import Home2 from "./pages/home/Home2.js"
import AboutUs from "./pages/aboutUs/aboutUs.js"
import OurServices from "./pages/ourServices/ourServices.js"
import ContactUs from "./pages/contactUs/contactUs.js"

function App() {
  return (
    <Router>
    {/* <Router basename={'/stratagemholdings.com'}> */}
      <Routes>
      <Route path="/" element={<Home2 />} />
      {/* <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home2 />} /> */}
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/ourServices" element={<OurServices />} />
      <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
