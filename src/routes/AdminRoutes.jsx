import { Routes, Route } from "react-router-dom";
import ReservationManagementPage from "../pages/adminPages/ReservationManagementPage";
import AdminLayout from "../components/layouts/adminLayout/AdminDashboardLayout";
import Setting from "../pages/adminPages/Setting";
import Profile from "../pages/adminPages/AdminProfile";
import AdminLogin from "../pages/adminPages/AdminLogin";
import AdminProtectedRoute from "../utils/AdminProtectedRoutes";

const AdminRoutes = () => {
  return (
    <Routes>

      {/* LOGIN */}
      <Route path="/login" element={<AdminLogin />} />

      {/* ADMIN PANEL */}
      <Route
        path="/adminPanel"
        element={
          <AdminProtectedRoute>
            <AdminLayout />
          </AdminProtectedRoute>
        }
      >
        <Route path="reservationManagement" element={<ReservationManagementPage />} />
        <Route path="settings" element={<Setting />} />
        <Route path="profile" element={<Profile />} />
      </Route>

    </Routes>
  );
};

export default AdminRoutes;