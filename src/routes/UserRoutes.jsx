import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/userPages/Home";
import SubMenu from "../pages/userPages/SubMenu";
import Gallery from "../pages/userPages/Gallery";
import Contact from "../pages/userPages/Contact";
import Catering from "../pages/userPages/Catering";
import MenuPage from "../pages/userPages/MenuPages";
import About from "../pages/userPages/About";
import Faq from "../pages/userPages/Faq";
import ScrollToTop from "../components/ui/ScrollToTop";

const UserRoutes = () => {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home page with all sections */}
          <Route index element={<Home />} />

          {/* Individual pages */}
          <Route path="menu" element={<SubMenu />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="catering" element={<Catering />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default UserRoutes;