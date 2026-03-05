import React from "react";

const MenuCard = ({ image, title, description }) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
        />
      </div>

      <h2 className="mt-6 text-xl font-semibold text-[#f5efe6]">
        {title}
      </h2>

      <p className="mt-2 text-[#b8afa5] text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default MenuCard;