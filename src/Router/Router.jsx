import { createBrowserRouter } from "react-router";

import AddTransaction from "../Pages/AddTransaction";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyTransactions from "../Pages/MyTransactions";
import NotFound from "../Pages/NotFound";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import Reports from "../Pages/Reports";
import TransactionDetails from "../Pages/TransactionDetails";
import UpdateTransaction from "../Pages/UpdateTransaction";
import RootLayout from "../RootLayout/RootLayout";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },

      // Protected Routes
      {
        path: "/add-transaction",
        element: (
          <PrivateRoute>
            <AddTransaction />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-transactions",
        element: (
          <PrivateRoute>
            <MyTransactions />
          </PrivateRoute>
        ),
      },
      {
        path: "/transaction/update/:id",
        element: (
          <PrivateRoute>
            <UpdateTransaction />
          </PrivateRoute>
        ),
      },
      {
        path: "/transaction/:id",
        element: (
          <PrivateRoute>
            <TransactionDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/reports",
        element: (
          <PrivateRoute>
            <Reports />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
