import React from "react";
import HomePage from "./HomePage";
import Feature from "./Feature";
import About from "./About";
import MenuPage from "./MenuPages";
import Catering from "./Catering";
import Faq from "./Faq";
import Contact from "./Contact";

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
