import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootLayout from "../RootLayout/RootLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);

export default Router;
