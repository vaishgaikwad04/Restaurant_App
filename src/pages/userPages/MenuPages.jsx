import React from "react";
import MenuCard from "../../components/ui/MenuCard";
import { useNavigate } from "react-router-dom";
const MenuPages = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 1,
      image:
        "https://cdn.prod.website-files.com/685662e1a30070647f211940/685aa17eaea74cb2f0e2f383_1610%20(1)-p-1080.jpg",
      title: "Starters",
      description: "Seasonal small plates to share or savor solo.",
    },
    {
      id: 2,
      image:
        "https://cdn.prod.website-files.com/685662e1a30070647f211940/685bdbc667fce88f7a3a37e9_5889%201%20(2)%20(1)-p-1080.png",
      title: "Mains",
      description: "Hearty dishes rooted in classic technique.",
    },
    {
      id: 3,
      image:
        "https://cdn.prod.website-files.com/685662e1a30070647f211940/685bdc1cbe1205e5514114e1_dessert%20(1)%20(1)-p-1080.png",
      title: "Desserts",
      description: "Sweet finishes, both bold and nostalgic.",
    },
    {
      id: 4,
      image:
        "https://cdn.prod.website-files.com/685662e1a30070647f211940/685bdabeee745ee70b58e389_Rectangle%2010%20(3)%20(1)-p-1080.png",
      title: "Drinks",
      description: "Crafted cocktails, wines, and soft pairings.",
    },
  ];

  return (
    <section className="bg-[#111111] py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-20">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#f5efe6] leading-tight">
            Explore our <br /> seasonal menu
          </h1>

          <p className="text-[#cfc6bb] text-lg max-w-2xl leading-relaxed">
            Crafted with ingredients at their peak — limited-time dishes
            inspired by the current harvest.
          </p>
        </div>

        {/* Grid */}
        <div
          onClick={() => {
            navigate("/menu");
            setTimeout(() => {
              window.scrollTo({
                top: document.body.scrollHeight / 3,
                behavior: "smooth",
              });
            }, 100);
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {menuItems.map((item) => (
            <MenuCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPages;
