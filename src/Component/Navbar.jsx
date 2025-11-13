import { Link, NavLink } from "react-router";
import defaultAvatar from "../assets/default-avatar.jpeg";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="navbar">
          {/* Navbar Start */}
          <div className="navbar-start">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-lg font-bold">FinEase</span>
            </Link>
          </div>

          {/* Navbar Center */}
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

          {/* Navbar End */}
          <div className="navbar-end flex items-center gap-2">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="btn bg-white text-green-700 border border-transparent hover:bg-transparent hover:text-white hover:border-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-outline border-white text-white hover:bg-green-100 hover:text-green-600"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL || defaultAvatar} alt="profile" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52 text-black"
                >
                  <li>
                    <span className="font-medium">
                      {user.displayName || "User"}
                    </span>
                  </li>
                  <li>
                    <span className="text-sm text-gray-600 break-words">
                      {user.email}
                    </span>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="btn btn-sm w-full bg-green-500 text-white hover:bg-green-600 hover:text-black border-none"
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
