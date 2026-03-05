import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/ui/Modal";
import Hero from "../../components/ui/Hero";
import Button from "../../components/ui/Button";
import InputField from "../../components/ui/Form"; // Tailwind inside InputField
import { toast } from "react-toastify";

const HomePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    date: "",
    time: "",
    requests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Data:", reservationData);
    toast.success("Reservation successful! We look forward to seeing you.");

    setReservationData({
      name: "",
      email: "",
      phone: "",
      guests: 1,
      date: "",
      time: "",
      requests: "",
    });
    setIsModalOpen(false);
  };

  // Animate modal content when modal opens
  useEffect(() => {
    if (isModalOpen) {
      const elements = document.querySelectorAll(".reveal-modal");
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("active");
        }, index * 100); // stagger effect
      });
    }
  }, [isModalOpen]);

  return (
    <>
      {/* Hero Section */}
      <section className={`w-full transition-all duration-300 ${isModalOpen ? "filter blur-sm" : ""}`}>
        <Hero
          HeadingTop="Seasonal flavors &"
          headingBottom="timeless taste"
          image="https://cdn.prod.website-files.com/6853e980ebd4ddbff1249c43/68568cc33fddb8202c021649_ruben-ramirez-xhKG01FN2uk-unsplash%201%20(2).avif"
          paragraph="Inspired by the seasons, our menu highlights fresh ingredients, bold flavors, and the joy of a well-crafted meal."
        >
          <Button onClick={() => setIsModalOpen(true)} className="bg-black border-black text-white">
            Book a Table
          </Button>
          <Button onClick={() => navigate("/menu")} className="border border-white text-white">
            Explore the Menu
          </Button>
        </Hero>
      </section>

      {/* Reservation Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-8 bg-[#e7dfd6] rounded-xl h-148 reveal-modal">
          <h2 className="text-center text-2xl font-bold text-[#2b2b2b] mb-6">Reserve Your Table</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Name"
              name="name"
              value={reservationData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="input-field"
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              value={reservationData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="input-field"
            />
            <InputField
              label="Phone"
              type="text"
              name="phone"
              value={reservationData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="input-field"
            />
            <InputField
              label="Guests"
              type="number"
              name="guests"
              value={reservationData.guests}
              onChange={handleChange}
              placeholder="Number of guests"
              required
              className="input-field"
            />
            <InputField
              label="Date"
              type="date"
              name="date"
              value={reservationData.date}
              onChange={handleChange}
              required
              className="input-field"
            />
            <InputField
              label="Time"
              type="time"
              name="time"
              value={reservationData.time}
              onChange={handleChange}
              required
              className="input-field"
            />

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-[#2b2b2b]" htmlFor="requests">
                Special Requests
              </label>
              <textarea
                id="requests"
                name="requests"
                value={reservationData.requests}
                onChange={handleChange}
                placeholder="Any special requests?"
                className="w-full p-3 rounded-lg border border-[#e0e0e0] bg-[#f0e6d2] text-[#2b2b2b] focus:outline-none focus:ring-2 focus:ring-[#1f1f1f] transition duration-200 input-field"
              />
            </div>

            <button
              type="submit"
              className="md:col-span-2 py-3 w-60 rounded-lg bg-[#1f1f1f] text-white font-semibold hover:bg-[#2b2b2b] transition duration-200"
            >
              Reserve Table
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default HomePage;