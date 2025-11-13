import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";

import { ToastContainer } from "react-toastify";
import "./index.css";
import { router } from "./Router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" />
  </React.StrictMode>
);
