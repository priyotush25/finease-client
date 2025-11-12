import { Outlet } from "react-router";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const RootLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <main className="flex-1 p-4">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
