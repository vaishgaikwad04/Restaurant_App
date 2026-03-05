import React from "react";
import "../../App.css";
import { FaArrowDownLong } from "react-icons/fa6";

// CircularText Component
const CircularText = ({
  text = "",
  radius = 80,
  textSize = "text-base",
  letterSpacing = 0,
}) => {
  if (!text) return null;

  const letters = text.split("");
  const angle = 360 / letters.length;

  return (
    <div
      className="relative rounded-full flex items-center justify-center animate-spin-slow"
      style={{ width: radius * 2, height: radius * 2 }}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#f5efe6] select-none ${textSize}`}
          style={{
            transform: `rotate(${index * angle}deg) translate(${radius - 10}px) rotate(-${index * angle}deg)`,
            letterSpacing: `${letterSpacing}px`,
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

// ExploreMenuCircle Component
const Circle = ({ onClickScroll }) => {
  return (
    <div className="relative">
       <div className="absolute top-8 right-10 w-40 h-40 rounded-full bg-[#2d2621] flex items-center justify-center shadow-lg z-[9999] cursor-pointer">
      <CircularText
        text="EXPLORE THE MENU • EXPLORE THE MENU • "
        radius={74}
        textSize="text-sm"
        letterSpacing={1.2}
      />
      <button
        onClick={onClickScroll}
        className="absolute text-3xl text-[#f5efe6]"
      >
        <FaArrowDownLong />
      </button>
    </div>
    </div>
   
  );
};

export default Circle;