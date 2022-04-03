import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-full">
      <Navbar />

      {children}
    </div>
  );
};

export default Layout;
