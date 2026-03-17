import React, { useEffect } from "react";
import Button from "../../components/ui/Button";

const Contact = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-contact");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section
      id="contactSection"
      className="min-h-screen pt-[110px] pb-[120px] px-6 lg:px-20 scroll-mt-[68px] bg-white dark:bg-black transition"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-[90px] items-center justify-center">

        {/* LEFT SIDE */}
        <section className="w-full space-y-6 reveal-contact">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white mx-4">
            We’d love to
          </h1>

          {/* Image Section */}
          <div className="relative reveal-contact">
            <img
              src="https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/685540ff4ec7abade4efa909_pasztet-ozdobiony-ogorkami-i-marchewka-oraz-dzbanek-z-kompotem%203.avif"
              alt="food"
              className="w-full h-94 object-cover rounded dark:brightness-90"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-3xl md:text-4xl font-medium text-white -mt-8 mx-4">
                  hear from You
                </h2>

                <p className="text-white max-w-xl mt-62 mx-4">
                  Inspired by the seasons, our menu highlights fresh
                  ingredients, bold flavors, and the joy of a well-crafted meal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <div className="w-full max-w-[380px] pt-[40px] lg:pt-[106px] space-y-12 reveal-contact">

          <div>
            <h3 className="text-[20px] font-semibold text-gray-900 dark:text-white mb-[6px]">
              Open Hours
            </h3>

            <p className="text-[17px] text-gray-600 dark:text-gray-400 leading-[28px]">
              Monday–Friday: 11:00AM–11:00PM
            </p>

            <p className="text-[17px] text-gray-600 dark:text-gray-400 leading-[28px] mb-[24px]">
              Saturday–Sunday: 10:00AM–12:00AM
            </p>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold text-gray-900 dark:text-white mb-[6px]">
              Address
            </h3>

            <p className="text-[17px] text-gray-600 dark:text-gray-400 leading-[28px]">
              2849 Juniper Street Portland, OR 97214
            </p>

            <p className="text-[17px] text-gray-600 dark:text-gray-400 leading-[28px]">
              (415) 823-7641
            </p>

            <p className="text-[17px] text-gray-600 dark:text-gray-400 leading-[28px] mb-[24px]">
              thymerestaurant@gmail.com
            </p>
          </div>

          <Button
            onClick={() => handleScroll("heroSection")}
            className="bg-black dark:bg-white text-white dark:text-black px-[34px] py-[16px] rounded-[10px] text-[15px] hover:opacity-90 transition duration-300"
          >
            Make a reservation
          </Button>

        </div>
      </div>
    </section>
  );
};

export default Contact;