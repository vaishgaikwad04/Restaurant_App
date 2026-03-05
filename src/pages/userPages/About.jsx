import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-footer");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, index * 150); // stagger
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="w-full bg-[#2b1d16]">
      <div className="flex flex-col lg:flex-row items-center min-h-[500px] max-w-7xl mx-auto">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-white px-8 lg:px-16 space-y-6 reveal-footer">
          <h1 className="text-5xl font-semibold leading-tight mb-6">
            Fresh, seasonal, always inspired
          </h1>

          <p className="text-lg text-gray-300 max-w-xl">
            Our kitchen follows the rhythm of the seasons. Every ingredient is carefully selected at its peak — sourced from trusted farmers, foragers, and local producers. The result? A menu that’s never static, always evolving, and rooted in what’s fresh now. Because the best flavors aren’t invented — they’re harvested.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] mt-12 lg:mt-0 reveal-footer">
          <img
            src="https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/6856913dcb873797e5d5b5ca_Rectangle%2011.avif"
            alt="Seasonal ingredients"
            className="absolute inset-0 w-full h-full object-cover rounded-l-[300px] brightness-95 contrast-90"
          />
        </div>

      </div>
    </section>
  );
};

export default Footer;