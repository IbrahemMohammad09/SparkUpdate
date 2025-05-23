import React from "react";
// import Footer from "../Components/Footer";
// import NavigationBar from "../Components/NavigationBar";
import MainTitle from "../Components/MainTitle";
import HeroSection from "../Sections/HeroSection";
import TopServices from "../Sections/TopServices";
function Homepage() {
  MainTitle("Home Page");
  return (
    <>
      <HeroSection />
      <TopServices />
    </>
  );
}

export default Homepage;
