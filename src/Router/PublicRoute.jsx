import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import NotFound from "../Pages/NoFound/NotFound";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Auth/Signup";
import Login from "../Pages/Auth/Login";
import PrivateRoute from "./PrivateRoute";

import Details from "../Pages/Details/Details";
import Report from "../Pages/Report/Report";
import Update from "../Pages/Update/Update";
import Blogs from "../Pages/Blogs/Blogs";
import About from "../Pages/About/About";
import Contact from "../Pages/Contract/Contact";
import MyProfile from "../Pages/MyProfile/MyProfile";
import UserProfile from "../Pages/MyProfile/UserProfile";
import MyTransaction from "../Pages/MyTransaction/Mytransaction";
import AddTransaction from "../Pages/AddTransaction/AddTransaction";





export const PublicRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "/signup",
            element: <Signup />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
          path: "/add-transaction",
          element: <PrivateRoute>
            <AddTransaction />
          </PrivateRoute>
        },
        {
          path: "/my-transaction",
          element: <PrivateRoute>
            <MyTransaction />
          </PrivateRoute>
        },
        {
          path: "/transaction-details/:id",
          element: <Details />
        },
        {
          path: "/report",
          element: <PrivateRoute>
            <Report />
          </PrivateRoute>
        },
        {
          path: "/update/:id",
          element: <PrivateRoute>
            <Update />
          </PrivateRoute>
        },
        {
          path: "/blogs",
          element: <Blogs />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "/my-profile",
          element: <PrivateRoute>
            <MyProfile />
          </PrivateRoute>,
          children: [
            {
              index: true,
              element: <UserProfile />
            }
          ]
        }
    ]
  },
]);