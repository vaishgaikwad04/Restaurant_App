import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/userPages/HomePage";
import Feature from "../pages/userPages/Feature";
import SubMenu from "../pages/userPages/SubMenu";
import Gallery from "../pages/userPages/Gallery";
import Contact from "../pages/userPages/Contact";
import Catering from "../pages/userPages/Catering";
import MenuPage from "../pages/userPages/MenuPages";
import Header from "../components/layout/Header";
import About from "../pages/userPages/About";
import Faq from "../pages/userPages/Faq";


const UserRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Homepage "/" → all pages together */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
              <Feature />
              <MenuPage />
              <Catering />
              <About />
              <Faq/>
              <Contact/>
              
          
            </>
          }
        />

        {/* Individual pages with Header via Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="feature" element={<Feature />} />
          <Route path="menu" element={<SubMenu />} />
          <Route path="menuPage" element={<MenuPage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="catering" element={<Catering />} />
          <Route path="about" element={<About />} />
         
      
        </Route>
      </Routes>
    </Router>
  );
};

export default UserRoutes;
