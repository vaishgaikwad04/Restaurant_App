import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "../pages/adminPages/Admin";
import AdminDashboardLayout from "../components/layouts/adminLayout/AdminDashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminDashboardLayout />}>
          <Route path="adminDashboard" element={<Admin/>} />
           </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;