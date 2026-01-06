import React, { useEffect, useState, useContext } from 'react';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from '../../../assets/logo.png';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../../provider/AuthProvider';
import userLogo from '../../../assets/user.png';
import Switch from '../../theme-change-btn/Switch';
import { FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut, themeController, setThemeController } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector('html');
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setThemeController(theme);
  }, [theme]);

  const handleTheme = (checked) => setTheme(checked ? "dark" : "light");
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="FinEase Logo" className="w-36" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <li><NavLink className="hover:text-green-600 transition" to="/">Home</NavLink></li>
          {user && <>
            <li><NavLink className="hover:text-green-600 transition" to="/add-transaction">Add Transaction</NavLink></li>
            <li><NavLink className="hover:text-green-600 transition" to="/my-transaction">My Transactions</NavLink></li>
            <li><NavLink className="hover:text-green-600 transition" to="/report">Reports</NavLink></li>
          </>}
          <li><NavLink className="hover:text-green-600 transition" to="/blogs">Blogs</NavLink></li>
          <li><NavLink className="hover:text-green-600 transition" to="/about">About</NavLink></li>
          <li><NavLink className="hover:text-green-600 transition" to="/contact">Contact</NavLink></li>
        </ul>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Switch handleTheme={handleTheme} theme={theme} />

          {user ? (
            <div className="relative">
              <img 
                src={user.photoURL || userLogo} 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-green-600 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{user.displayName}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                  </div>
                  <NavLink to="/my-profile" className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-700 rounded transition">
                    <FiUser /> My Profile
                  </NavLink>
                  <button onClick={logOut} className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 rounded transition">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden lg:flex gap-3">
              <Link to="/login" className="px-4 py-2 bg-gray-800 text-white rounded-full hover:opacity-90 transition">Log In</Link>
              <Link to="/signup" className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">Sign Up</Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none">
              {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 w-full absolute top-16 left-0 shadow-md z-40">
          <ul className="flex flex-col gap-3 py-4 px-6 text-gray-700 dark:text-gray-300">
            <li><NavLink to="/" className="hover:text-green-600 transition" onClick={toggleMenu}>Home</NavLink></li>
            {user && <>
              <li><NavLink to="/add-transaction" className="hover:text-green-600 transition" onClick={toggleMenu}>Add Transaction</NavLink></li>
              <li><NavLink to="/my-transaction" className="hover:text-green-600 transition" onClick={toggleMenu}>My Transactions</NavLink></li>
              <li><NavLink to="/report" className="hover:text-green-600 transition" onClick={toggleMenu}>Reports</NavLink></li>
            </>}
            <li><NavLink to="/blogs" className="hover:text-green-600 transition" onClick={toggleMenu}>Blogs</NavLink></li>
            <li><NavLink to="/about" className="hover:text-green-600 transition" onClick={toggleMenu}>About</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-green-600 transition" onClick={toggleMenu}>Contact</NavLink></li>

            {!user && (
              <div className="flex flex-col gap-2 mt-3">
                <Link to="/login" className="px-4 py-2 bg-gray-800 text-white rounded-full text-center" onClick={toggleMenu}>Log In</Link>
                <Link to="/signup" className="px-4 py-2 bg-green-600 text-white rounded-full text-center hover:bg-green-700" onClick={toggleMenu}>Sign Up</Link>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
