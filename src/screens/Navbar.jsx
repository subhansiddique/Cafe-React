import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" bg-black text-white rounded-md shadow-lg h-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
           <img src="https://websitedemos.net/cafe-04/wp-content/uploads/sites/545/2020/02/logo-regular-free-img.png" height={12} />
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              to="/"
              className="hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/About"
              className="hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              About us
            </Link>
            <Link
              to="/offer"
              className="hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              What We Offer
            </Link>
            <Link
              to="/gallery"
              className="hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Gallery
            </Link>{" "}
            <Link
              to="/contact"
              className="hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
