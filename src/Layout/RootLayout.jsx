import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Navbar />
      <div className="container-main">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
