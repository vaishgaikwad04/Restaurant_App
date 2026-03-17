import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");

    if (isAuth) {
      navigate("/adminPanel/reservationManagement");
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-950">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
