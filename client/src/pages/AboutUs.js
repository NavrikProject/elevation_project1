import React from "react";
import Footer from "../components/User/Footer/Footer";
import NavBarAndRes from "../components/User/Navbar/NavBarAndRes";
import About from "../components/User/About/About";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBarAndRes />
      <About />
      <Footer />
    </React.Fragment>
  );
};

export default AboutUs;
