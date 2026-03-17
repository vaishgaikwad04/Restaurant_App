import { Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/userLayout/Layout";
import Home from "../pages/userPages/MainPage";
import SubMenu from "../pages/userPages/SubMenuPage";
import Gallery from "../pages/userPages/GalleryPage";
import Contact from "../pages/userPages/ContactPage";
import Catering from "../pages/userPages/CateringPage";
import About from "../pages/userPages/AboutPage";
import Faq from "../pages/userPages/FaqPage";
import ManageBooking from "../pages/userPages/ManageBookingPage";
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
