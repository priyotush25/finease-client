import React from "react";
import logo from "../../assets/logo1.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaPhone, FaFacebookF, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
  <footer className="bg-base-100 text-base-content border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-16">
          {/* Logo & Contact */}
          <div className="space-y-4">
            <a href="/" title="Home">
              <img className="w-36" src={logo} alt="FinEase Logo" />
            </a>
            <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400">
              Bank Town
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Savar, Dhaka (DHA)</p>

            <div className="flex items-center gap-2 hover:text-green-500 transition cursor-pointer">
              <AiOutlineMail className="text-xl text-green-600 dark:text-green-400" />
              <span>support@finease.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-green-500 transition cursor-pointer">
              <FaPhone className="text-xl text-green-600 dark:text-green-400" />
              <span>+880 1234-567809</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/rafiul396"
                target="_blank"
                className="text-2xl text-green-600 hover:text-green-500 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/rafiul396/"
                target="_blank"
                className="text-2xl text-green-600 hover:text-green-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/rafiul396/"
                target="_blank"
                className="text-2xl text-green-600 hover:text-green-500 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h6 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">
              Explore
            </h6>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-green-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/add-transaction" className="hover:text-green-500 transition">
                  Add Transaction
                </a>
              </li>
              <li>
                <a href="/my-transaction" className="hover:text-green-500 transition">
                  My Transactions
                </a>
              </li>
              <li>
                <a href="/report" className="hover:text-green-500 transition">
                  Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">
              Quick Links
            </h6>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-green-500 transition cursor-pointer">Privacy Policy</a>
              </li>
              <li>
                <a className="hover:text-green-500 transition cursor-pointer">Terms & Conditions</a>
              </li>
              <li>
                <a className="hover:text-green-500 transition cursor-pointer">Customer Support</a>
              </li>
              <li>
                <a className="hover:text-green-500 transition cursor-pointer">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Subscribe */}
          <div>
            <h6 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">
              Subscribe
            </h6>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get weekly tips and updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-green-300 dark:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-slate-800 dark:text-white transition"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-200 dark:border-green-700 mt-8 pt-6 text-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; 2025 FinEase | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
