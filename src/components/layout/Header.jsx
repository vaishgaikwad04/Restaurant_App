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
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-widest text-gray-800"
        >
          THYME
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700 text-sm font-medium">

          <button
            onClick={() => handleScroll("featuresSection")}
            className="relative group"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </button>

          <Link to="/menu" className="relative group">
            Menu
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <button
            onClick={() => handleScroll("faqSection")}
            className="relative group"
          >
            FAQ
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </button>

          <Link to="/gallery" className="relative group">
            Gallery
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <button
            onClick={() => handleScroll("contactSection")}
            className="relative group"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </button>

          {/* CTA Button */}
          <button
            onClick={() => handleScroll("contactSection")}
            className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-900 transition"
          >
            Book Table
          </button>

        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-gray-700 font-medium">

          <button onClick={() => handleScroll("featuresSection")}>
            About
          </button>

          <Link to="/menu" onClick={() => setIsOpen(false)}>
            Menu
          </Link>

          <button onClick={() => handleScroll("faqSection")}>
            FAQ
          </button>

          <Link to="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>

          <button onClick={() => handleScroll("contactSection")}>
            Contact
          </button>

          <button
            onClick={() => handleScroll("contactSection")}
            className="bg-black text-white px-6 py-2 rounded-md"
          >
            Book Table
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;