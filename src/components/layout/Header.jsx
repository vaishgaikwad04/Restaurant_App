import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleScroll = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false);
  };

  /* Load saved theme */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  /* Apply theme */
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="w-full bg-white dark:bg-black sticky top-0 z-50 shadow-sm transition">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div
          onClick={() => handleScroll("heroSection")}
          className="text-2xl font-bold tracking-widest text-gray-800 dark:text-white cursor-pointer"
        >
          THYME
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700 dark:text-gray-200 text-sm font-medium">

          <button onClick={() => handleScroll("featureSection")} className="relative group">
            Features
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          
          <button onClick={() => navigate("/manageBooking")} className="relative group">
         Manage Booking
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
           <button onClick={() => navigate("/menu")} className="relative group">
            Menu
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>


          <button onClick={() => navigate("/gallery")} className="relative group">
            Gallery
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>

          <button onClick={() => handleScroll("faqSection")} className="relative group">
            FAQ
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>

          <button onClick={() => handleScroll("contactSection")} className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>

        </nav>

        {/* Right Controls (Theme + Mobile Menu) */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex items-center justify-center w-9 h-9 rounded-md
            border border-gray-300 dark:border-gray-700
            hover:bg-gray-100 dark:hover:bg-gray-800
            transition duration-200"
          >
            {theme === "light" ? (
              <FiMoon size={16} />
            ) : (
              <FiSun size={16} className="text-yellow-400" />
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-gray-800 dark:bg-white"></span>
            <span className="w-6 h-[2px] bg-gray-800 dark:bg-white"></span>
            <span className="w-6 h-[2px] bg-gray-800 dark:bg-white"></span>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-black transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-start ml-8 gap-6 text-gray-700 dark:text-gray-200 font-medium">

          <button onClick={() => handleScroll("featureSection")}>
            Features
          </button>

          <button onClick={() => navigate("/menu")}>
            Menu
          </button>

          <button onClick={() => navigate("/gallery")}>
            Gallery
          </button>

          <button onClick={() => handleScroll("faqSection")}>
            FAQ
          </button>

          <button onClick={() => handleScroll("contactSection")}>
            Contact
          </button>



        </div>
      </div>
    </header>
  );
};

export default Header;