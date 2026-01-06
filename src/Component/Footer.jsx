import { Link } from "react-router";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ---------- Logo + About ---------- */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">FinEase</span>
            </div>
            <p className="text-gray-100 text-sm">
              FinEase helps you manage your personal finance efficiently, track
              transactions, and get insights.
            </p>
            <div className="flex gap-3 mt-2">
              <Link to="#" className="hover:text-gray-300">
                <FaFacebookF />
              </Link>
              <Link to="#" className="hover:text-gray-300">
                <FaTwitter />
              </Link>
              <Link to="#" className="hover:text-gray-300">
                <FaLinkedinIn />
              </Link>
              <Link to="#" className="hover:text-gray-300">
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* ---------- Quick Links ---------- */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-100">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/add-transaction" className="hover:text-gray-300">
                  Add Transaction
                </Link>
              </li>
              <li>
                <Link to="/my-transactions" className="hover:text-gray-300">
                  My Transactions
                </Link>
              </li>
              <li>
                <Link to="/reports" className="hover:text-gray-300">
                  Reports
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-gray-300">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* ---------- Contact ---------- */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <p className="text-gray-100 text-sm">
              123 Finance Street, Dhaka, Bangladesh
            </p>
            <p className="text-gray-100 text-sm">Email: support@finease.com</p>
            <p className="text-gray-100 text-sm">Phone: +880 123 456 789</p>
          </div>
        </div>

        {/* ---------- Footer Bottom ---------- */}
        <div className="mt-10 border-t border-green-400 pt-4 text-center text-gray-100 text-sm">
          &copy; {new Date().getFullYear()} FinEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
