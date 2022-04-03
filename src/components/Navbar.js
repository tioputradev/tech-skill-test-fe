import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setToken }) => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid mb-8 px-10 py-4 bg-blue-600">
      <p className="text-3xl text-white font-thin">
        <span className="font-extrabold">GitHub</span> Jobs
      </p>

      <button
        className=" text-white cursor-pointer"
        onClick={() => {
          setToken("");

          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
