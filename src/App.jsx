import React from "react";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const role = "user";
  const roleAdmin = "admin";

  return (
    <div>
      {role === "user" && <UserRoutes />}
      {roleAdmin === "admin" && <AdminRoutes />}
      <ToastContainer
        position="top-right"
        autoClose={1000} // 3 seconds
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
};

export default App;
