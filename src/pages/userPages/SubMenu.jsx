import React, { useState, useRef } from "react";
import { FaLeaf, FaPepperHot } from "react-icons/fa";
import Hero from "../../components/ui/Hero";
import Contact from "./Contact";
import Circle from "../../components/ui/Circle";

const SubMenu = () => {
  const [activeTab, setActiveTab] = useState("Starters");

  // Ref to scroll to menu section
  const menuRef = useRef(null);

  const menuData = {
    Starters: [
      {
        title: "Calamari Fritti",
        price: "$11.5",
        desc: "Crispy fried calamari served with marinara sauce and lemon wedges.",
        img: "https://cdn.prod.website-files.com/685662e1a30070647f211940/6856672ad163ffbef45cd376_6009%20(1)-p-500.jpg",
      },
      {
        title: "Stuffed Mushrooms",
        price: "$10",
        desc: "Mushrooms stuffed with cream cheese, herbs, and breadcrumbs, baked to perfection.",
        img: "https://cdn.prod.website-files.com/685662e1a30070647f211940/685670dce3cef5056aab51b9_pexels-harry-dona-2338407%20(1)-p-500.jpg",
        badge: { text: "Vegan", color: "green", icon: "leaf" },
      },
      {
        title: "Spicy Chicken Wings",
        price: "$12",
        desc: "Chicken wings marinated in a spicy sauce, served with celery and blue cheese dressing.",
        img: "https://cdn.prod.website-files.com/685662e1a30070647f211940/6856705e92ce4944e3c16421_163922%20(1)-p-500.jpg",
        badge: { text: "Spicy", color: "red", icon: "pepper" },
      },
      {
        title: "Classic Bruschetta",
        price: "$8.5",
        desc: "Fresh tomatoes, basil, garlic, olive oil, balsamic vinegar, and toasted bread.",
        img: "https://cdn.prod.website-files.com/685662e1a30070647f211940/685670fbddb960d00f041596_pexels-lulizler-7432991-p-500.jpg",
        badge: { text: "Vegan", color: "green", icon: "leaf" },
      },
    ],
    Mains: [
      {
        title: "Grilled Salmon",
        price: "$18",
        desc: "Fresh salmon fillet grilled to perfection, served with lemon butter sauce.",
        img: "https://cdn.prod.website-files.com/685662e1a30070647f211940/685665f9aa3ef47030de253e_14%20(1).jpg",
      },
      {
        title: "Vegan Pasta",
        price: "$15",
        desc: "Pasta with fresh vegetables and vegan pesto sauce.",
        img: "https://cdn.prod.website-files.com/685662e1a30070647f211940/6856667cc8fa95412a89bd99_105902%20(1).jpg",
        badge: { text: "Vegan", color: "green", icon: "leaf" },
      },
       {
    title: "Grilled Salmon",
    price: "$18",
    desc: "Fresh salmon fillet grilled to perfection, served with lemon butter sauce.",
    img: "https://cdn.prod.website-files.com/685662e1a30070647f211940/6856705e92ce4944e3c16421_163922%20(1)-p-500.jpg",
  },
  {
    title: "Vegan Pasta",
    price: "$15",
    desc: "Pasta with fresh vegetables and vegan pesto sauce.",
    img: "https://cdn.prod.website-files.com/685662e1a30070647f211940/685670dce3cef5056aab51b9_pexels-harry-dona-2338407%20(1)-p-500.jpg",
    badge: { text: "Vegan", color: "green", icon: "leaf" },
  },
  {
    title: "Ribeye Steak",
    price: "$22",
    desc: "Juicy ribeye steak grilled to your liking, served with garlic butter and roasted vegetables.",
    img: "https://cdn.prod.website-files.com/685662e1a30070647f211940/6856705e92ce4944e3c16421_163922%20(1)-p-500.jpg",
  },
  {
    title: "Chicken Marsala",
    price: "$19",
    desc: "Pan-seared chicken breast with a rich mushroom and Marsala wine sauce.",
    img: "https://cdn.prod.website-files.com/685662e1a30070647f211940/6856672ad163ffbef45cd376_6009%20(1)-p-500.jpg",
  },
    ],
    Desserts: [
      {
        title: "Chocolate Lava Cake",
        price: "$7",
        desc: "Warm chocolate cake with a gooey center, served with vanilla ice cream.",
        img: "https://cdn.prod.website-files.com/685662e1a30070647f211940/6856672ad163ffbef45cd376_6009%20(1)-p-500.jpg",
      },
      {
        title: "Fruit Tart",
        price: "$6.5",
        desc: "Seasonal fruits on a creamy custard in a crisp tart shell.",
        img: "https://cdn.prod.website-files.com/685662e1a30070647f211940/685670fbddb960d00f041596_pexels-lulizler-7432991-p-500.jpg",
      },
    ],
    Drinks: [
      {
        title: "Cappuccino",
        price: "$4.5",
        desc: "Rich espresso with steamed milk and foam.",
        img: "https://cdn.prod.website-files.com/685662e1a30070647f211940/6856672ad163ffbef45cd376_6009%20(1)-p-500.jpg",
      },
      {
        title: "Fresh Orange Juice",
        price: "$3.5",
        desc: "Freshly squeezed oranges for a refreshing drink.",
        img: "https://cdn.prod.website-files.com/685662e1a30070647f211940/685670fbddb960d00f041596_pexels-lulizler-7432991-p-500.jpg",
      },
    ],
  };

  return (
    <section className="w-full">
      {/* Circle button floating */}
      <Circle
        onClickScroll={() =>
          menuRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />

      {/* Hero Section */}
      <div className="relative">
        <Hero
          HeadingTop=" Seasonal &"
          headingBottom="  Signature"
          paragraph=" Inspired by the seasons, our menu highlights fresh
              ingredients, bold flavors, and the joy of a well
              crafted meal."
          image="https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/685a686e3191cbff8a32da20_widok-szefa-kuchni-pracujacego-w-kuchni%201.avif"
        />
      </div>

      {/* Menu Section */}
      <section id="menu-section" ref={menuRef} className="w-full py-16">
        {/* Tabs */}
        <div className="max-w-6xl mx-auto flex justify-center gap-10 mb-12">
          {Object.keys(menuData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative text-lg font-medium transition-colors duration-300 cursor-pointer
              ${activeTab === tab ? "text-[#2d2621]" : "text-[#9c948c] hover:text-[#2d2621]"}`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#2d2621] rounded" />
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {menuData[activeTab].map((item) => (
            <div
              key={item.title}
              className="flex gap-5 bg-white p-4 rounded-lg transition-shadow duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-32 h-32 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[#2d2621]">
                    {item.title}
                  </h3>
                  <span className="text-lg font-semibold text-[#2d2621]">
                    {item.price}
                  </span>
                </div>

                <p className="text-[#7d746c] text-sm">{item.desc}</p>

                {item.badge && (
                  <div className="mt-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded ${
                        item.badge.color === "green"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.badge.icon === "leaf" && (
                        <FaLeaf className="text-green-600" />
                      )}
                      {item.badge.icon === "pepper" && (
                        <FaPepperHot className="text-red-600" />
                      )}
                      {item.badge.text}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </section>
  );
};

export default SubMenu;