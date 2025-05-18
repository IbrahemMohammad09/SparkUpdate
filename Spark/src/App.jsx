import React from "react";
import "./App.css";
const NavigationBar = React.lazy(() => import("./Components/NavigationBar"));
const Footer = React.lazy(() => import("./Components/Footer"));
const OurApp = React.lazy(() => import("./Pages/OurApp"));
const AboutUs = React.lazy(() => import("./Pages/AboutUS"));
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const HomePage = React.lazy(() => import("./Pages/HomePage"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs"));

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path={"/"} exact element={<HomePage />} />
          <Route path={"/about_us"} element={<AboutUs />} />
          <Route path={"/contact_us"} element={<ContactUs />} />
          <Route path={"/our_app"} element={<OurApp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
