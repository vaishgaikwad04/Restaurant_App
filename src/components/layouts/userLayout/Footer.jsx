import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();

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
  };

  return (
    <>
      <footer className="bg-[#111111] text-[#e5e5e5] pt-20 pb-10 px-6 lg:px-20 -mt-20 relative">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-12 border-b border-[#333] dark:border-gray-800 pb-12">
            {/* Logo / About */}
            <div>
              <h2 className="text-3xl font-semibold tracking-widest mb-4">
                THYME
              </h2>

              <p className="text-[#bfbfbf] dark:text-gray-400 leading-relaxed">
                Inspired by the seasons, our menu celebrates fresh ingredients,
                bold flavors and the joy of gathering around a great meal.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>

              <ul className="space-y-3 text-[#bfbfbf] dark:text-gray-400">
                <li
                  onClick={() => handleScroll("featureSection")}
                  className="cursor-pointer hover:text-white transition"
                >
                  Features
                </li>

                <li
                  onClick={() => navigate("/menu")}
                  className="cursor-pointer hover:text-white transition"
                >
                  Menu
                </li>

                <li
                  onClick={() => navigate("/gallery")}
                  className="cursor-pointer hover:text-white transition"
                >
                  Gallery
                </li>

                <li
                  onClick={() => handleScroll("faqSection")}
                  className="cursor-pointer hover:text-white transition"
                >
                  FAQ
                </li>

                <li
                  onClick={() => handleScroll("contactSection")}
                  className="cursor-pointer hover:text-white transition"
                >
                  Contact
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Visit Us</h3>

              <p className="text-[#bfbfbf] dark:text-gray-400 leading-relaxed">
                2849 Juniper Street <br />
                Portland, OR 97214
              </p>

              <p className="mt-4 text-[#bfbfbf] dark:text-gray-400">
                (415) 823-7641
              </p>

              <p className="text-[#bfbfbf] dark:text-gray-400">
                thymerestaurant@gmail.com
              </p>

              <p className="mt-4 text-[#bfbfbf] dark:text-gray-400">
                Mon–Fri: 11AM – 11PM <br />
                Sat–Sun: 10AM – 12AM
              </p>
            </div>
          </div>
          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm text-[#9e9e9e] dark:text-gray-500">
            <p>
              © {new Date().getFullYear()} THYME Restaurant. All rights
              reserved.
            </p>

            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Instagram
              </a>

              <a href="#" className="hover:text-white transition">
                Facebook
              </a>

              <a href="#" className="hover:text-white transition">
                Twitter
              </a>

              {/* Scroll To Top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="
                  ml-6
                  p-2
                  rounded-full
                  hover:bg-[#1a1a1a]
                  transition
                  hover:scale-110"
              >
                <FaArrowUp size={22} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
