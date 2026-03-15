import React, { useEffect, useState } from "react";
import Table from "../../components/ui/table";
import Dropdown from "../../components/ui/Dropdown";

const Admin = () => {
  const [reservations, setReservations] = useState([]);
  const [filter, setFilter] = useState("All");

  const columns = [
    { header: "Name", key: "name" },
    { header: "Guests", key: "guests" },
    { header: "Date", key: "date" },
    { header: "Time", key: "time" },
    { header: "Phone", key: "phone" },

    {
      header: "Status",
      key: "status",
      render: (row) => (
        <span className="text-sm font-medium dark:text-gray-200">
          {row.status || "Pending"}
        </span>
      ),
    },

    {
      header: "Actions",
      key: "actions",
      render: (row) => (
        <div className="flex gap-4 text-sm font-medium">
          <button
            onClick={() => updateStatus(row.id, "Approved")}
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition"
          >
            Approve
          </button>

          <button
            onClick={() => updateStatus(row.id, "Rejected")}
            className="text-gray-500 hover:text-black dark:text-gray-500 dark:hover:text-white transition"
          >
            Reject
          </button>
        </div>
      ),
    },
  ];

  const statusOptions = [
    { label: "All Reservations", value: "All" },
    { label: "Pending", value: "Pending" },
    { label: "Approved", value: "Approved" },
    { label: "Rejected", value: "Rejected" },
    { label: "Cancelled", value: "Cancelled" },
  ];

  useEffect(() => {
  const storedReservations =
    JSON.parse(localStorage.getItem("reservations")) || [];

  const updatedReservations = storedReservations.map((item) => ({
    ...item,
    status: item.status || "Pending",
  }));

  setReservations(updatedReservations);

  localStorage.setItem(
    "reservations",
    JSON.stringify(updatedReservations)
  );
}, []);

  const totalReservations = reservations.length;

  const totalGuests = reservations.reduce(
    (sum, item) => sum + Number(item.guests),
    0
  );

  const today = new Date().toISOString().split("T")[0];

  const todayReservations = reservations.filter(
    (item) => item.date === today
  ).length;

  const updateStatus = (id, status) => {
    const updatedReservations = reservations.map((item) =>
      item.id === id ? { ...item, status } : item
    );

    setReservations(updatedReservations);

    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
  };

  const filteredReservations =
    filter === "All"
      ? reservations
      : reservations.filter((item) => (item.status || "Pending") === filter);

  return (
    <div className="p-6 h-full overflow-hidden bg-gray-100 dark:bg-black transition">

      <h1 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
        Admin Dashboard
      </h1>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">
            Total Reservations
          </h2>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {totalReservations}
          </p>
        </div>

        <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">
            Total Guests
          </h2>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {totalGuests}
          </p>
        </div>

        <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">
            Today's Reservations
          </h2>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {todayReservations}
          </p>
        </div>

      </div>

      {/* Table */}

      <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-700 rounded-lg shadow p-6">

        <Dropdown
          title="Recent Reservations"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          options={statusOptions}
        />

        <div className="overflow-x-auto max-h-[460px] overflow-y-auto mt-4">
          <Table columns={columns} data={filteredReservations} />
        </div>

      </div>

    </div>
  );
};

export default Admin;