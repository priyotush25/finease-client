<<<<<<< HEAD
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
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { router } from './router/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
>>>>>>> c52945d (update all)
