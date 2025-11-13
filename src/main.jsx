import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { router } from "./Router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* AuthProvider must wrap RouterProvider */}
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </AuthProvider>
  </React.StrictMode>
);
