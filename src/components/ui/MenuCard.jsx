import React from "react";

const MenuCard = ({ image, title, description, className = "" }) => {
  return (
    <div
      className={`group cursor-pointer transition-transform duration-300 hover:-translate-y-2 ${className}`}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-2xl shadow-sm">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Title */}
      <h2 className="mt-6 text-xl font-semibold text-[#f5efe6] dark:text-white">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-2 text-[#b8afa5] dark:text-gray-400 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default MenuCard;