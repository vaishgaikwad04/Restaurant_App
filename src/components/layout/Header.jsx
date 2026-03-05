import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setIsOpen(false);
  };

  return (
    <header className="w-full bg-white">
      <div className="flex items-center justify-between px-8 py-4">

        {/* LEFT SIDE (Logo + Nav) */}
        <div className="flex items-center gap-12">

          {/* Logo */}
          <Link to="/" className="text-gray-800 text-2xl font-semibold">
            THYME
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-gray-600 font-medium text-sm">

            <button
              onClick={() => handleScroll("featuresSection")}
              className="hover:text-gray-800 hover:-translate-y-1 transition-all duration-300"
            >
              About
            </button>

            <Link
              to="/menu"
              className="hover:text-gray-800 hover:-translate-y-1 transition-all duration-300"
            >
              Menu
            </Link>

            <button
              onClick={() => handleScroll("faqSection")}
              className="hover:text-gray-800 hover:-translate-y-1 transition-all duration-300"
            >
              FAQ
            </button>

            <Link
              to="/gallery"
              className="hover:text-gray-800 hover:-translate-y-1 transition-all duration-300"
            >
              Gallery
            </Link>

            <button
              onClick={() => handleScroll("contactSection")}
              className="hover:text-gray-800 hover:-translate-y-1 transition-all duration-300"
            >
              Contact
            </button>

          </nav>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 text-gray-700 font-medium">

          <button onClick={() => handleScroll("featuresSection")}>About</button>

          <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>

          <button onClick={() => handleScroll("faqSection")}>FAQ</button>

          <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>

          <button onClick={() => handleScroll("contactSection")}>Contact</button>

        </div>
      )}
    </header>
  );
};

export default Header;