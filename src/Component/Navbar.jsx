import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="navbar">
          {/* ---------- Navbar Start ---------- */}
          <div className="navbar-start">
            {/* Mobile Dropdown */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-green-700 rounded-box w-52"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/add-transaction">Add Transaction</NavLink>
                </li>
                <li>
                  <NavLink to="/my-transactions">My Transactions</NavLink>
                </li>
                <li>
                  <NavLink to="/reports">Reports</NavLink>
                </li>
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="text-lg font-bold">FinEase</span>
            </Link>
          </div>

          {/* ---------- Navbar Center (Desktop Links) ---------- */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/add-transaction">Add Transaction</NavLink>
              </li>
              <li>
                <NavLink to="/my-transactions">My Transactions</NavLink>
              </li>
              <li>
                <NavLink to="/reports">Reports</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </ul>
          </div>

          {/* ---------- Navbar End (Login Button) ---------- */}
          <div className="navbar-end">
            <Link
              to="/login"
              className="btn bg-white text-green-700 hover:bg-green-100 border-none"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
