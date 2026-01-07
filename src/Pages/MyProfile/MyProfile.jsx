import React from "react";
import { Outlet } from "react-router";
import Container from "../../Components/Container/Container";

const MyProfile = () => {
  return (
    <section className="min-h-screen bg-base-200/50 py-12 lg:py-20 transition-colors duration-300">
      <title>My Account | FinEase</title>
      <Container>
        {/* Full width content area */}
        <div className="max-w-4xl mx-auto">
           <Outlet />
        </div>
      </Container>
    </section>
  );
};

export default MyProfile;