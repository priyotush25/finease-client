import { Outlet } from "react-router";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
