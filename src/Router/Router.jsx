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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/add-transaction",
        element: <AddTransaction />,
      },
      {
        path: "/my-transactions",
        element: <MyTransactions />,
      },
      {
        path: "/transaction/update/:id",
        element: <UpdateTransaction />,
      },
      {
        path: "/transaction/:id",
        element: <TransactionDetails />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
