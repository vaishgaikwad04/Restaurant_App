import React, { useEffect } from "react";
import colors from "../../Colors";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

const Feature = () => {
  const navigate = useNavigate();

  const leftParagraphs = [
    "At the heart of every dish lies a story—of time-honored techniques passed down through generations, and of bold creativity inspired by the world around us. This section invites diners into the mind of the chef: someone who honors the past while fearlessly experimenting.",
  ];

 useEffect(() => {
  const elements = document.querySelectorAll(".reveal, .reveal-img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Stronger effect, only once
        }
      });
    },
    { threshold: 0.3 } // triggers a bit earlier
  );

  elements.forEach((el) => observer.observe(el));
}, []);

  return (
    <section id="featuresSection" className="py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#2b2b2b] leading-tight reveal">
            Where innovation meets <br /> tradition
          </h1>

          {leftParagraphs.map((text, index) => (
            <p
              key={index}
              className={`${colors.textSecondary} text-lg leading-relaxed max-w-xl reveal`}
            >
              {text}
            </p>
          ))}

          <button
            onClick={() => navigate("/gallery")}
            className="bg-black text-white px-7 py-4 rounded-md font-medium hover:opacity-90 transition duration-300 reveal"
          >
            Explore Our Space
          </button>

          {/* Floating Image */}
          <div className="relative h-64">
            <img
              className="absolute top-0 right-0 w-[380px] rounded-xl reveal-img float-chef"
              src="https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/6853f53bcce8175a0ea2365f_2148794096-p-800.avif"
              alt="Chef preparing food"
            />
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-6">
          <img
            src="https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/6853f53b626125731f05a54e_2148794095.avif"
            alt="Chef"
            className="rounded-2xl shadow-lg w-full h-[620px] object-cover reveal-img"
          />

          <div>
            <img
              src="https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/6853f53b96e64a52bf304ce0_polowy-talerza-szefa-kuchni-z-oliwa-z-oliwek-p-1080.avif"
              alt="Dish"
              className="rounded-2xl shadow-lg w-full h-[220px] object-cover mt-28 reveal-img"
            />

            <p className={`${colors.textSecondary} text-lg mt-8 max-w-xl reveal`}>
              We believe that flavor evolves, but soul endures. That’s why our
              kitchen blends classic culinary foundations—like slow braises,
              wood-fire cooking, and handmade pasta—with modern techniques and
              unexpected pairings that reflect the season's bounty.
            </p>
          </div>
        </div>

      </div>

      <Contact />
    </section>
  );
};

export default Feature;