// src/Navbar.js
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`md:flex md:items-center ${
            isOpen ? "flex" : "hidden"
          } flex-col absolute w-[100vw] h-[100vh] justify-center bg-slate-600 z-40`}
        >
          <a href="#" className="text-white px-4 py-2">
            Home
          </a>
          <a href="#" className="text-white px-4 py-2">
            About
          </a>
          <a href="#" className="text-white px-4 py-2">
            Services
          </a>
          <a href="#" className="text-white px-4 py-2">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
