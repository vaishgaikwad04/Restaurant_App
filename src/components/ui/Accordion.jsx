import React, { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const faqData = [
  {
    question: "Do you take reservations?",
    answer:
      "Yes, we recommend making a reservation to ensure availability, especially during weekends and holiday seasons. You can book a table directly through our website or contact us by phone."
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer:
      "Absolutely. We offer vegetarian, vegan, and gluten-free options, and our chefs are happy to adjust dishes to meet specific dietary needs. Please inform us of any allergies or restrictions when making your reservation."
  },
  {
    question: "Is your menu seasonal?",
    answer:
      "Yes, our menu is inspired by seasonal ingredients sourced from local farms. We update our offerings regularly to highlight fresh produce and unique flavors throughout the year."
  },
  {
    question: "Do you offer catering services?",
    answer:
      "Yes, we provide catering services for corporate events, private gatherings, and special occasions. Our team works closely with clients to create customized menus tailored to their event."
  },
  {
    question: "Can I book the restaurant for a private event?",
    answer:
      "Yes, we offer private dining and full-restaurant bookings for special events such as birthdays, anniversaries, and corporate functions. Please contact our events team to discuss availability and menu options."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 bg-white dark:bg-black transition">
      
      <h1 className="text-4xl font-semibold mb-3 text-center text-gray-900 dark:text-white">
        Have any questions?
      </h1>

      <p className="text-center text-gray-500 dark:text-gray-400 mb-14 max-w-xl mx-auto">
        From dining details to event bookings, here’s everything you need to
        know to plan your visit or host with us.
      </p>

      <div className="space-y-5">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#111111] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 transition"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-8 py-5 text-left text-lg font-semibold text-gray-900 dark:text-white focus:outline-none hover:bg-gray-50 dark:hover:bg-black transition-colors duration-300"
            >
              <span>{item.question}</span>

              <span className="text-3xl text-gray-700 dark:text-gray-300 select-none">
                {openIndex === index ? <RxCross2 /> : <BiPlusCircle />}
              </span>
            </button>

            <div
              className={`px-8 pb-6 text-gray-700 dark:text-gray-300 text-base transition-[max-height] duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              {openIndex === index && (
                <p className="leading-relaxed">{item.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}