import React from "react";
import HomePage from "./HomePage";
import Feature from "./FeaturePage";
import About from "./AboutPage";
import MenuPage from "./MenuPages";
import Catering from "./CateringPage";
import Faq from "./FaqPage";
import Contact from "./ContactPage";

const Home = () => {
  return (
    <>
      <HomePage />
      <Feature />
      <MenuPage />
      <Catering />
      <Faq />
      <About />
      <Contact />
    </>
  );
};

export default Home;
