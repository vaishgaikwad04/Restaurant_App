import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Go to home page
    setTimeout(() => {
      const el = document.getElementById("featuresSection");
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100); // small delay so the section exists
  };

  const handleContactClick = () => {
    navigate("/"); // Go to home page
    setTimeout(() => {
      const el = document.getElementById("contactSection");
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100); // small delay so the section exists
  };

  const handleFeatureClick = () => {
    navigate("/"); // Go to home page
    setTimeout(() => {
      const el = document.getElementById("faqSection");
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100); // small delay so the section exists
  };
  return (
    <>
      <div className="flex items-inline justify-between px-8 py-4">
        <Link to="/" className="text-gray-800 text-2xl font-semibold">
      THYME
        </Link>

        <nav className="flex items-center gap-6 text-gray-600 font-medium text-sm">
          <Link
            onClick={handleClick}
            className="hover:text-gray-800 hover:-translate-y-1 transition-all duration-300 ease-out"
            to="/"
          >
            About
          </Link>

          <Link
            className="hover:text-gray-800 hover:-translate-y-1 transition-all duration-300 ease-out"
            to="/menu"
          >
            Menu
          </Link>

          <Link
            onClick={handleFeatureClick}
            className="hover:text-gray-800 hover:-translate-y-1  transition-all duration-300 ease-out"
            to="/"
          >
            Faq
          </Link>

          <Link
            className="hover:text-gray-800 hover:-translate-y-1  transition-all duration-300 ease-out"
            to="/gallery"
          >
            Gallery
          </Link>

          <Link
            onClick={handleContactClick}
            className="hover:text-gray-800 hover:-translate-y-1  transition-all duration-300 ease-out"
            to="/"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
