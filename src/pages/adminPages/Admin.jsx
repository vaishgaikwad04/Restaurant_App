import React, { useEffect, useState } from "react";

const Admin = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const storedReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];
      setReservations(storedReservations);
  }, []);

  const totalReservations = reservations.length;

  const totalGuests = reservations.reduce(
    (sum, item) => sum + Number(item.guests),
    0,
  );

  const today = new Date().toISOString().split("T")[0];

  const todayReservations = reservations.filter(
    (item) => item.date === today,
  ).length;

  return (
    <div className="p-6 h-full overflow-hidden">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-6 dark:text-white">
        Admin Dashboard
      </h1>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-[#111111] p-6 rounded-lg shadow">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">
            Total Reservations
          </h2>
          <p className="text-3xl font-bold dark:text-white">
            {totalReservations}
          </p>
        </div>

        <div className="bg-white dark:bg-[#111111] p-6 rounded-lg shadow">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">
            Total Guests
          </h2>
          <p className="text-3xl font-bold dark:text-white">{totalGuests}</p>
        </div>

        <div className="bg-white dark:bg-[#111111] p-6 rounded-lg shadow">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">
            Today's Reservations
          </h2>
          <p className="text-3xl font-bold dark:text-white">
            {todayReservations}
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#111111] rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Recent Reservations
        </h2>

        <div className="overflow-x-auto max-h-[460px] overflow-y-auto scrollbar-thin">
          <table className="w-full text-left">
            <thead className="sticky top-0 bg-white dark:bg-[#111111] z-10">
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="py-3">Name</th>
                <th className="py-3">Guests</th>
                <th className="py-3">Date</th>
                <th className="py-3">Time</th>
                <th className="py-3">Phone</th>
              </tr>
            </thead>

            <tbody>
              {reservations.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No reservations yet
                  </td>
                </tr>
              ) : (
                reservations.map((res, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 dark:border-gray-800"
                  >
                    <td className="py-3">{res.name}</td>
                    <td className="py-3">{res.guests}</td>
                    <td className="py-3">{res.date}</td>
                    <td className="py-3">{res.time}</td>
                    <td className="py-3">{res.phone}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
