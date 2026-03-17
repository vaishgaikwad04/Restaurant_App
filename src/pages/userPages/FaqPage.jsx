import React from "react";
import Accordion from "../../components/ui/Accordion";

const Faq = () => {
  return (
    <div
      id="faqSection"
      className="scroll-mt-[80px] bg-white dark:bg-black text-gray-900 dark:text-white transition"
    >
      <Accordion />
    </div>
  );
};

export default Faq;