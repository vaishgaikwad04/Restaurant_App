import React from "react";
import Button from "../../components/ui/Button";
import colors from "../../Colors";

const Hero = ({ HeadingTop, headingBottom, paragraph, children, image, className }) => {
  return (
    <section className={`w-full ${className}`}>
      
      {/* Top Light Section */}
      <div className="pt-12 pb-2 dark:bg-black transition">
        <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-semibold text-black dark:text-gray-100 opacity-0 animate-slideUp1">
  {HeadingTop}
</h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative overflow-hidden">

        {/* IMAGE */}
        <img
          src={image}
          alt="food"
          className="w-full h-[500px] object-cover hero-img"
        />

        {/* TOP REVEAL PANEL */}
        <div className="absolute inset-0 bg-[#e7dfd6] dark:bg-black reveal-top z-20"></div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* CONTENT OVER IMAGE */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto w-full">
            
            <h2
              style={{ color: colors.textLight }}
              className="text-3xl md:text-6xl font-medium -mt-8 opacity-0 animate-slideUp2 dark:text-white"
            >
              {headingBottom}
            </h2>

            <div className="flex items-center justify-between mt-82">
              
              <p
                style={{ color: colors.textLight }}
                className="max-w-xl text-lg opacity-0 animate-slideUp3 dark:text-gray-200"
              >
                {paragraph}
              </p>

              <div className="flex gap-4 opacity-0 animate-slideUp4">
                {children}
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;