import React, { useEffect } from "react";
import colors from "../../Colors";

const Catering = () => {
  const cateringImages = [
    "https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/6855275578c90b26d89b1681_elegantna-dekoracja-przyjecia-slubnego%201.avif",
    "https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/68552755860d1da7b25fe49a_pasztet-ozdobiony-ogorkami-i-marchewka-oraz-dzbanek-z-kompotem%201.avif",
    "https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/68552755e2a805a48bdd3e4f_al-elmes-ULHxWq8reao-unsplash%201.avif",
    "https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/68552755ad69905a95544715_pasztet-ozdobiony-ogorkami-i-marchewka-oraz-dzbanek-z-kompotem%202.avif",
  ];

  // Scroll reveal
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-catering");
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
    <section className="py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8 reveal-catering">
          <h1 className={`text-4xl md:text-5xl font-semibold text-${colors.textPrimary} leading-tight max-w-xl`}>
            Seasonal catering <br /> for every celebration
          </h1>

          <p className={`text-${colors.textSecondary} text-lg leading-relaxed`}>
            Whether you're hosting an intimate dinner or a large celebration,
            our team brings seasonal flavor and refined service to your table.
          </p>

          <button className="bg-black text-white px-7 py-4 rounded-md font-medium hover:opacity-90 transition duration-300">
            Make reservation
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-6">
          {cateringImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Catering ${index + 1}`}
              className="rounded-2xl shadow-md w-full h-48 object-cover reveal-catering"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catering;