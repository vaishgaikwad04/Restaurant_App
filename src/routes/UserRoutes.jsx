import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/userPages/Home";
import SubMenu from "../pages/userPages/SubMenu";
import Gallery from "../pages/userPages/Gallery";
import Contact from "../pages/userPages/Contact";
import Catering from "../pages/userPages/Catering";
import About from "../pages/userPages/About";
import Faq from "../pages/userPages/Faq";
import ManageBooking from "../pages/userPages/ManageBooking";
import ScrollToTop from "../components/ui/ScrollToTop";

const UserRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="menu" element={<SubMenu />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="catering" element={<Catering />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="manageBooking" element={<ManageBooking />} />

        </Route>
      </Routes>
    </>
  );
};

export default UserRoutes;