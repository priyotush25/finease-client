import React from "react";
import { Link } from "react-router";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo + Description */}
          <div>
            <h1 className="text-2xl font-extrabold text-primary mb-2">FineEase</h1>
            <p className="text-sm text-base-content/70">
              FineEase is your personal finance companion. Track expenses, manage budgets, and achieve your financial goals easily.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold text-lg mb-2">Quick Links</h2>
            <ul className="space-y-1">
              <li><Link className="hover:text-primary transition" to="/">Home</Link></li>
              <li><Link className="hover:text-primary transition" to="/features">Features</Link></li>
              <li><Link className="hover:text-primary transition" to="/dashboard">Dashboard</Link></li>
              <li><Link className="hover:text-primary transition" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="font-semibold text-lg mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-base-300 mt-8 pt-4 text-center text-sm text-base-content/70">
          &copy; {new Date().getFullYear()} FineEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
