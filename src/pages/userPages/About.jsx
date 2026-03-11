import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-footer");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, index * 200);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 },
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section
      id="aboutSection"
      className="w-full bg-black overflow-hidden scroll-mt-[80px]"
    >
      <div className="flex flex-col lg:flex-row items-center min-h-[550px] max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-white px-8 lg:px-16 space-y-8 reveal-footer">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-tight">
            Fresh, seasonal,
            <br />
            always inspired
          </h1>

          <p className="text-sm text-gray-300 max-w-xl leading-relaxed">
            Our kitchen follows the rhythm of the seasons. Every ingredient is
            carefully selected at its peak — sourced from trusted farmers,
            foragers, and local producers. The result? A menu that’s never
            static, always evolving, and rooted in what’s fresh now.
          </p>

          <Button
            onClick={() => navigate("/menu")}
            className="mt-4 px-8 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition duration-300"
          >
            Explore Menu
          </Button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 relative h-[420px] lg:h-[550px] mt-14 lg:mt-0 reveal-footer group">
          {/* Image */}
          <img
            src="https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/6856913dcb873797e5d5b5ca_Rectangle%2011.avif"
            alt="Seasonal ingredients"
            className="absolute inset-0 w-full h-full object-cover rounded-l-[280px] transform group-hover:scale-110 transition duration-700"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 rounded-l-[280px] bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
