import React from "react";
import "./App.css";
// import Spinner from "./Components/Spinner";
import { BrowserRouter, Routes, Navigate, Route, Link } from "react-router-dom";
import LoadingPage from "./Pages/LoadingPage";
// import TopServices from "./Sections/TopServices";


// const NavigationBar = React.lazy(() => import("./Components/NavigationBar"));
// const Footer = React.lazy(() => import("./Components/Footer"));
const OurApp = React.lazy(() => import("./Pages/OurApp"));
const AboutUs = React.lazy(() => import("./Pages/AboutUS"));
const IntroPage = React.lazy(() => import("./Pages/IntroPage"));
const ErrorPage = React.lazy(() => import("./Pages/ErrorPage/ErrorPage"));
const RequestSuccess = React.lazy(() =>import("./Pages/SuccessPage/RequestSuccess"));
const HomePage = React.lazy(() => import("./Pages/HomePage"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs"));
const OurTeam = React.lazy(() => import("./Pages/OurTeam"));
const OurProjects= React.lazy(()=> import("./Pages/OurProjects"))
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavigationBar /> */}
        <Routes>
          <Route path={"/"} exact element={<IntroPage />} />

          <Route path={"/home"} exact element={<HomePage />} />
          <Route path={"/about_us"} element={<AboutUs />} />
          <Route path={"/contact_us"} element={<ContactUs />} />
          <Route path={"/our_app"} element={<OurApp />} />
          <Route path={"/our_team"} element={<OurTeam />} />
          <Route path={"/our_projects"} element={<OurProjects/>} />
          <Route path={"/loading"} element={<LoadingPage />} />
          <Route path="*" element={<Navigate to={"/error-page"} />} />
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="/rquest-success" element={<RequestSuccess />} />

          {/* <Route path="/spinner" element={<Spinner />} /> */}
          {/* <Route path="/top-services" element={<TopServices />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
