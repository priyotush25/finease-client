import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar.jsx/Navbar";
import Footer from "../Component/Footer.jsx/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
