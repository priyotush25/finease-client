import React from "react";
import { use } from "react";
import {
  FiUser,
  FiHeart,
  FiStar,
  FiSettings,
  FiBell,
  FiLogOut,
} from "react-icons/fi";
import { Outlet } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const MyProfile = () => {
  const {logOut} = use(AuthContext)

  return (
    <section className="min-h-screen max-w-7xl mx-auto py-6 bg-neutral flex flex-col md:flex-row">
      <title>My Profile | FinEase</title>
      {/* Sidebar */}
      <aside className="w-full hidden md:w-1/4 lg:w-1/5 bg-accent-content shadow-sm lg:flex flex-row md:flex-col items-center md:items-start p-4 md:p-6">
        <h2 className="text-xl font-semibold mb-6 hidden md:block">My Profile</h2>
        <nav className="flex flex-row md:flex-col w-full justify-around md:justify-start space-y-0 md:space-y-6">
          <a
            href="#"
            className="flex items-center gap-3 text-orange-500 font-medium"
          >
            <FiUser className="text-lg" /> User info
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition">
            <FiHeart /> Favorites
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition">
            <FiStar /> Watchlist
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition">
            <FiSettings /> Setting
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition">
            <FiBell /> Notifications
          </a>
        </nav>

        <div className="mt-auto w-full flex justify-center md:justify-start pt-6 md:pt-10">
          <button onClick={logOut} className="flex items-center gap-2 text-red-500 font-medium hover:text-red-600 transition">
            <FiLogOut /> Log out
          </button>
        </div>
      </aside>

      <Outlet />
    </section>
  );
};

export default MyProfile;
