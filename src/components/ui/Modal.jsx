import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  // Close modal on ESC key
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", onEsc);

    return () => window.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm dark:bg-black/70"
        onClick={onClose}
      />

      {/* Modal wrapper */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

        {/* Modal box */}
        <div
          className="
            relative
            w-full
            max-w-2xl
            max-h-[90vh]
            overflow-y-auto
            p-6
            rounded-xl
            shadow-xl
            bg-white
            dark:bg-[#111111]
            dark:border dark:border-gray-800
            transition-colors duration-300
          "
          onClick={(e) => e.stopPropagation()}
        >

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="
              absolute top-4 right-4 text-2xl
              text-gray-500 hover:text-gray-900
              dark:text-gray-400 dark:hover:text-white
              transition
            "
          >
            &times;
          </button>

          {/* Content */}
          {children}

        </div>

      </div>
    </>,
    document.body
  );
};

export default Modal;