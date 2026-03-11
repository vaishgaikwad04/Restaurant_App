import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6 bg-gray-50 dark:bg-[#0f0f0f] flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default AdminLayout;