import React from "react";
import Navbar from "./Navbar";

const Layout = ({ setToken, children }) => {
  return (
    <div className="bg-gray-100 min-h-full">
      <Navbar setToken={setToken} />

      {children}
    </div>
  );
};

export default Layout;
