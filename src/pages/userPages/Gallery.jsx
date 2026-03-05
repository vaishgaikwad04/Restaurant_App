import React, { useState } from "react";
import Hero from "../../components/ui/Hero";
import Contact from "./Contact";

const Gallery = () => {
  const images = [
    "https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/685c0f0d6b2dd5abcfa18a71_984.avif",
    "https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/685c134b3ae8de09daddc66c_pexels-elevate-1267320.avif",
    "https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/685c0f998c808d5b6498ba1d_2148516908.avif",
    "https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/685c157afeda6da4c1d9fcc0_pexels-quark-studio-1159039-3201921.avif",
    "https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/685c132a2df071f4048c80f3_edward-howell-vvUy1hWVYEA-unsplash-p-1080.avif",
    "https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/685c1419c92b1837bd72061e_pexels-taryn-elliott-4457038.avif",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div>
      <Hero
        HeadingTop="The atmosphere"
        headingBottom="behind the flavor"
        paragraph="Inspired by the seasons, our menu highlights fresh ingredients, bold flavors, and the joy of a well-crafted meal."
        image="https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/685c132a2df071f4048c80f3_edward-howell-vvUy1hWVYEA-unsplash.avif"
      />

      <div id="gallerySection" className="max-w-7xl mx-auto px-12 py-16">
        <h1 className="text-4xl font-semibold mb-4 text-center">Explore our gallery</h1>
        <h2 className="text-gray-600 mb-8 text-center">
          Step into our world — a space made for gathering, tasting, and staying a while.
        </h2>

        <section className="columns-1 md:columns-2 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="mb-8 relative overflow-hidden rounded-lg break-inside-avoid cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </section>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-2xl font-bold"
          >
            ×
          </button>
          <button
            onClick={prevImage}
            className="absolute left-5 text-white text-3xl font-bold"
          >
            ‹
          </button>
          <img src={images[currentIndex]} className="max-h-[80%] max-w-[80%] object-contain" />
          <button
            onClick={nextImage}
            className="absolute right-5 text-white text-3xl font-bold"
          >
            ›
          </button>

          {/* Bottom Thumbnails */}
          <div className="absolute bottom-10 flex gap-4 overflow-x-auto px-5">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className={`h-20 w-20 object-cover rounded-lg cursor-pointer border-2 ${
                  idx === currentIndex ? "border-white" : "border-transparent"
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      )}

      <Contact />
    </div>
  );
};

export default Gallery;