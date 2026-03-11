import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/ui/Modal";
import Hero from "../../components/ui/Hero";
import Button from "../../components/ui/Button";
import InputField from "../../components/ui/Form";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormReservationSchema from "../../schema/FormReservationSchema";

const HomePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(FormReservationSchema),
  });

  /* ------------------------------
     Reservation Logic
  ------------------------------ */

  const onSubmit = (data) => {
    const existingReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];

    const MAX_CAPACITY = 20;

    const sameSlotReservations = existingReservations.filter(
      (res) => res.date === data.date && res.time === data.time
    );

    const totalGuests = sameSlotReservations.reduce(
      (sum, res) => sum + Number(res.guests),
      0
    );

    if (totalGuests + Number(data.guests) > MAX_CAPACITY) {
      toast.error("No tables available for this time. Please select another slot.");
      return;
    }

    const updatedReservations = [...existingReservations, data];

    localStorage.setItem("reservations", JSON.stringify(updatedReservations));

    toast.success("Reservation successful! We look forward to seeing you.");

    reset();
    setIsModalOpen(false);
  };

  /* ------------------------------
     Input Styling (Improved)
  ------------------------------ */

  const inputStyle = (error) =>
    `w-full p-3 rounded-lg border outline-none transition duration-200
    bg-white text-[#2b2b2b] border-[#e0e0e0]
    dark:bg-[#1a1a1a] dark:text-white dark:border-gray-700
    placeholder-gray-400 dark:placeholder-gray-500
    focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10
    ${
      error
        ? "border-red-500 focus:ring-red-400"
        : "focus:border-black dark:focus:border-white"
    }`;

  /* ------------------------------
     Modal Animation
  ------------------------------ */

  useEffect(() => {
    if (isModalOpen) {
      const elements = document.querySelectorAll(".reveal-modal");
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("active");
        }, index * 100);
      });
    }
  }, [isModalOpen]);

  return (
    <>
      {/* Hero Section */}

      <section
        id="heroSection"
        className={`w-full scroll-mt-[80px] transition-all duration-300 ${
          isModalOpen ? "filter blur-sm" : ""
        }`}
      >
        <Hero
          HeadingTop="Seasonal flavors &"
          headingBottom="timeless taste"
          image="https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/68568cc33fddb8202c021649_ruben-ramirez-xhKG01FN2uk-unsplash%201%20(2).avif"
          paragraph="Inspired by the seasons, our menu highlights fresh ingredients, bold flavors, and the joy of a well-crafted meal."
        >
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-black dark:bg-white border-black dark:border-white text-white dark:text-black"
          >
            Book a Table
          </Button>

          <Button
            onClick={() => navigate("/menu")}
            className="border border-white text-white"
          >
            Explore the Menu
          </Button>
        </Hero>
      </section>

      {/* Reservation Modal */}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-8 rounded-xl max-h-[80vh]  overflow-y-auto reveal-modal bg-white dark:bg-[#0f0f0f] transition">

          <h2 className="text-center text-2xl font-bold text-[#2b2b2b] dark:text-gray-200 mb-10">
            Reserve Your Table
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >

            {/* Name */}

            <div>
              <InputField
                label="Name"
                {...register("name")}
                placeholder="Enter your full name"
                className={inputStyle(errors.name)}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}

            <div>
              <InputField
                label="Email"
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className={inputStyle(errors.email)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}

            <div>
              <InputField
                label="Phone"
                {...register("phone")}
                placeholder="Enter your phone number"
                className={inputStyle(errors.phone)}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Guests */}

            <div>
              <InputField
                label="Guests"
                type="number"
                min="1"
                {...register("guests")}
                className={inputStyle(errors.guests)}
              />
              {errors.guests && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.guests.message}
                </p>
              )}
            </div>

            {/* Date */}

            <div>
              <InputField
                label="Date"
                type="date"
                {...register("date")}
                className={inputStyle(errors.date)}
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.date.message}
                </p>
              )}
            </div>

            {/* Time */}

            <div>
              <InputField
                label="Time"
                type="time"
                {...register("time")}
                className={inputStyle(errors.time)}
              />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.time.message}
                </p>
              )}
            </div>

            {/* Special Requests */}

            <div className="md:col-span-2">

              <label className="block mb-2 font-medium text-[#2b2b2b] dark:text-gray-200">
                Special Requests
              </label>

              <textarea
                {...register("requests")}
                placeholder="Any special requests?"
                className="
                w-full p-3 rounded-lg border border-[#e0e0e0]
                bg-white text-[#2b2b2b]
                dark:bg-[#1a1a1a] dark:text-white dark:border-gray-700
                placeholder-gray-400 dark:placeholder-gray-500
                outline-none transition
                focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10
                "
              />

            </div>

            {/* Submit Button */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="
              md:col-span-2 py-3 w-60 rounded-lg
              bg-[#1f1f1f] text-white
              hover:bg-[#2b2b2b]
              dark:bg-gray-200 dark:text-black
              dark:hover:bg-gray-300
              transition duration-200
              disabled:opacity-50 shadow-md
              "
            >
              {isSubmitting ? "Reserving..." : "Reserve Table"}
            </button>

          </form>

        </div>
      </Modal>
    </>
  );
};

export default HomePage;