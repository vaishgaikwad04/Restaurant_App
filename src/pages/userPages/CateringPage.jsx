import React, { useEffect } from "react";

const Catering = () => {
  const cateringImages = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WPLsU9scJUZZT9wCI5QRMt9OSAFHhox1Bw&s",
      title: "Wedding Catering",
    },
    {
      img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
      title: "Corporate Events",
    },
    {
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      title: "Private Parties",
    },
    {
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      title: "Special Celebrations",
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".reveal-card");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-24 bg-gray-50 dark:bg-black overflow-hidden transition">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16 reveal-card">
          <h2 className="text-5xl font-semibold tracking-wide text-gray-900 dark:text-white">
            Catering Services
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we bring our
            signature flavors and exceptional hospitality to your special
            events.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {cateringImages.map((item, index) => (
            <div
              key={index}
              className="reveal-card relative group overflow-hidden rounded-2xl shadow-xl"
              style={{ transitionDelay: `${index * 120}ms` }}
            >

              {/* Image */}
              <img
                src={item.img}
                alt="catering"
                className="w-full h-80 object-cover transform group-hover:scale-125 group-hover:rotate-1 transition duration-700 dark:brightness-90"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Catering;