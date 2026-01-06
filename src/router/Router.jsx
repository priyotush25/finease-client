import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/home/Home";
import Signup from "../pages/log-sign/Signup";
import Login from "../pages/log-sign/Login";
import AddT from "../pages/add-transaction/AddT";
import Mytransaction from "../pages/my-transaction/Mytransaction";
import Details from "../pages/Details/Details";
import PrivateRoute from "../privateroute/PrivateRoute";
import Report from "../pages/report/Report";
import Update from "../pages/update/Update";
import MyProfile from "../pages/my-profile/MyProfile";
import UserProfile from "../pages/my-profile/UserProfile";
import NotFound from "../pages/error-message/NotFound";
import Blogs from "../pages/Blogs/Blogs";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

export const router = createBrowserRouter([
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
            <AddT />
          </PrivateRoute>
        },
        {
          path: "/my-transaction",
          element: <PrivateRoute>
            <Mytransaction />
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