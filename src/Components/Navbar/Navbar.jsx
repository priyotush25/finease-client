import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiUser, FiLogOut, FiSettings } from "react-icons/fi";
import { Link, NavLink } from "react-router";

import userLogo from "../../assets/user.png";
import useAuth from "../../Hooks/useAuth";
import Switch from "../Theme/Switch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logOut, setThemeController } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Handle scroll effect for a modern "glass" look
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setThemeController(theme);
  }, [theme, setThemeController]);

  const handleTheme = (checked) => setTheme(checked ? "dark" : "light");

  const navLinkStyles = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors duration-300 hover:text-primary ${
      isActive ? "text-primary after:w-full" : "text-secondary after:w-0"
    } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-base-100/80 backdrop-blur-md shadow-lg py-2" 
          : "bg-base-100 py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
         <h1 className="text-3xl font-bold">FinEase</h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          <li><NavLink to="/" className={navLinkStyles}>Home</NavLink></li>
          {user && (
            <>
              <li><NavLink to="/add-transaction" className={navLinkStyles}>Add Transaction</NavLink></li>
              <li><NavLink to="/my-transaction" className={navLinkStyles}>Transactions</NavLink></li>
              <li><NavLink to="/report" className={navLinkStyles}>Reports</NavLink></li>
            </>
          )}
          <li><NavLink to="/blogs" className={navLinkStyles}>Blogs</NavLink></li>
          <li><NavLink to="/about" className={navLinkStyles}>About</NavLink></li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Switch handleTheme={handleTheme} theme={theme} />
          </div>

          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL || userLogo} alt="Profile" />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-2xl menu menu-sm dropdown-content bg-base-100 rounded-xl w-64 border border-base-200">
                <li className="px-4 py-3 border-b border-base-200 mb-2">
                  <p className="font-bold text-base truncate">{user.displayName}</p>
                  <p className="text-xs opacity-60 truncate">{user.email}</p>
                </li>
                <li><Link to="/my-profile"><FiUser /> Profile</Link></li>
                <li><Link to="/settings"><FiSettings /> Settings</Link></li>
                <li className="mt-2">
                  <button onClick={logOut} className="btn btn-error btn-sm text-white flex items-center gap-2">
                    <FiLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/login" className="px-6 py-2 text-sm font-bold text-secondary hover:text-primary transition">
                Log In
              </Link>
              <Link to="/signup" className="px-6 py-2 text-sm font-bold bg-primary text-white rounded-full shadow-md hover:shadow-lg transition-all active:scale-95">
                Get Started
              </Link>
            </div>
          )}

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-secondary">
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar/Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
        <div className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-base-100 shadow-xl p-6">
           <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-xl text-primary">Menu</span>
                <HiX size={24} onClick={() => setIsOpen(false)} />
              </div>
              
              <ul className="space-y-4 flex-grow">
                <li><Link onClick={() => setIsOpen(false)} to="/" className="block text-lg font-medium">Home</Link></li>
                {user && (
                  <>
                    <li><Link onClick={() => setIsOpen(false)} to="/add-transaction" className="block text-lg font-medium">Add Transaction</Link></li>
                    <li><Link onClick={() => setIsOpen(false)} to="/my-transaction" className="block text-lg font-medium">My Transactions</Link></li>
                  </>
                )}
                <li><Link onClick={() => setIsOpen(false)} to="/about" className="block text-lg font-medium">About Us</Link></li>
              </ul>

              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center justify-between px-2">
                  <span>Theme</span>
                  <Switch handleTheme={handleTheme} theme={theme} />
                </div>
                {!user && (
                  <>
                    <Link to="/login" onClick={() => setIsOpen(false)} className="btn btn-outline w-full rounded-full">Login</Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)} className="btn btn-primary w-full rounded-full text-white">Sign Up</Link>
                  </>
                )}
              </div>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;