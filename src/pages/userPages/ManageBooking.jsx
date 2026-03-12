import React, { useState } from "react";
import Modal from "../../components/ui/Modal";
import InputField from "../../components/ui/Form";
import { useForm } from "react-hook-form";

const ManageBooking = () => {
  const [phone, setPhone] = useState("");
  const [reservation, setReservation] = useState(null);
  const [message, setMessage] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [editingReservation, setEditingReservation] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  /* ---------------- Search Booking ---------------- */

  const handleSearch = () => {
    const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

    const found = reservations.find(
      (item) => String(item.phone).trim() === phone.trim(),
    );

    if (!found) {
      setMessage("No reservation found with this phone number.");
      setReservation(null);
      setIsModalOpen(true);
      return;
    }

    setReservation(found);
  };

  /* ---------------- Cancel Booking ---------------- */

  const cancelBooking = () => {
    const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

    const updated = reservations.map((item) =>
      item.id === reservation.id ? { ...item, status: "Cancelled" } : item,
    );

    localStorage.setItem("reservations", JSON.stringify(updated));

    setReservation({ ...reservation, status: "Cancelled" });
  };

  /* ---------------- Open Edit Modal ---------------- */

  const openEditModal = () => {
    setEditingReservation(reservation);

    reset(reservation); // prefill form

    setIsEditModalOpen(true);
  };

  /* ---------------- Update Reservation ---------------- */

  const onSubmit = (data) => {
    const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

    const updated = reservations.map((item) =>
      item.id === editingReservation.id
        ? { ...item, ...data, status: "Pending" }
        : item,
    );

    localStorage.setItem("reservations", JSON.stringify(updated));

    setReservation({ ...editingReservation, ...data, status: "Pending" });

    setIsEditModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-start justify-center p-6 dark:bg-[#0f0f0f]">
      <div className="w-full max-w-2xl dark:bg-[#111111] p-6 rounded-lg ml-34">
        {/* Search */}

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="
            w-full p-3 border rounded-md
            dark:bg-[#1a1a1a] dark:border-gray-700 dark:text-white
            outline-none
            "
          />

          <button
            onClick={handleSearch}
            className="px-5 py-3 bg-black text-white rounded-md"
          >
            Search
          </button>
        </div>

        {/* Reservation Card */}

        {reservation && (
          <div className="space-y-3 text-sm dark:text-gray-200 border-t pt-6">
            <h2 className="text-lg font-semibold mb-2">Reservation Details</h2>

            <p>
              <strong>Name:</strong> {reservation.name}
            </p>
            <p>
              <strong>Guests:</strong> {reservation.guests}
            </p>
            <p>
              <strong>Date:</strong> {reservation.date}
            </p>
            <p>
              <strong>Time:</strong> {reservation.time}
            </p>

            <p>
              <strong>Status:</strong> {reservation.status || "Pending"}
            </p>

            <div className="flex gap-3 mt-8">
              {reservation.status !== "Cancelled" && (
                <button
                  onClick={openEditModal}
                  className="
      flex-1 py-2 rounded-md border
      border-gray-300 dark:border-gray-700
      hover:bg-gray-100 dark:hover:bg-[#1f1f1f]
      text-sm font-medium
      transition
      "
                >
                  Modify Booking
                </button>
              )}

              {reservation.status !== "Cancelled" && (
                <button
                  onClick={cancelBooking}
                  className="
      flex-1 py-2 rounded-md
      bg-red-500 text-white
      hover:bg-red-600
      text-sm font-medium
      transition
      "
                >
                  Cancel Booking
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Reservation Not Found Modal */}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center space-y-4">
          <h2 className="text-lg font-semibold dark:text-white">
            Reservation Not Found
          </h2>

          <p className="text-gray-500 dark:text-gray-400">{message}</p>

          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 bg-black text-white rounded-md"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Edit Reservation Modal */}

      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <div className="p-8 max-h-[80vh] overflow-y-auto bg-white dark:bg-[#0f0f0f] rounded-xl">
          <h2 className="text-center text-2xl font-bold mb-10">
            Modify Reservation
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <InputField label="Name" {...register("name")} />
            <InputField label="Email" type="email" {...register("email")} />
            <InputField label="Phone" {...register("phone")} />
            <InputField label="Guests" type="number" {...register("guests")} />
            <InputField label="Date" type="date" {...register("date")} />
            <InputField label="Time" type="time" {...register("time")} />

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">Special Requests</label>

              <textarea
                {...register("requests")}
                className="
                w-full p-3 rounded-lg border
                dark:bg-[#1a1a1a] dark:border-gray-700
                "
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="
              md:col-span-2 py-3 w-60 rounded-lg
              bg-[#1f1f1f] text-white
              hover:bg-[#2b2b2b]
              transition
              "
            >
              Update Reservation
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ManageBooking;
