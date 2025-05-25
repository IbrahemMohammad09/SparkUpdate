import React from "react";
import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import MainTitle from "../Components/MainTitle";
import HeroSection from "../Sections/HeroSection";
import TopServices from "../Sections/TopServices";
import OurProjects from "../Sections/OurProjects";
function Homepage() {
  MainTitle("Home Page");
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <TopServices />
      <OurProjects />
      <Footer />
    </>
  );
}

export default Homepage;
