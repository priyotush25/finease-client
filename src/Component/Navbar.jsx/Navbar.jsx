import { Link } from "react-router";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react"; // Lucide icons
import useAuth from "../../Hook/useAuth/useAuth";
import useTheme from "../../Hook/useTheme/useTheme";
import Container from "../Container/Container";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const guestLinks = (
    <>
      <Link className="btn btn-ghost" to="/">Home</Link>
      <Link className="btn btn-ghost" to="/about">About</Link>
      <Link className="btn btn-ghost" to="/contact">Contact</Link>
      <Link className="btn btn-ghost" to="/features">Features</Link>
      <Link className="btn btn-primary" to="/login">Login</Link>
    </>
  );

  const userLinks = (
    <>
      <Link className="btn btn-ghost" to="/dashboard">Dashboard</Link>
      <Link className="btn btn-ghost" to="/transactions">Transactions</Link>
      <Link className="btn btn-ghost" to="/budget">Budget</Link>
      <Link className="btn btn-ghost" to="/reports">Reports</Link>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          User
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to="/profile">Profile</Link></li>
          <li><button onClick={logout}>Logout</button></li>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="bg-base-200 shadow">
      <Container className="flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          <Link to="/">FineEase</Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4">
          {!user ? guestLinks : userLinks}
          <button className="btn btn-sm" onClick={toggleTheme}>
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="btn btn-ghost">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-base-200 border-t border-base-300">
          <div className="flex flex-col p-4 space-y-2">
            {!user ? guestLinks : userLinks}
            <button className="btn btn-sm mt-2" onClick={toggleTheme}>
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
