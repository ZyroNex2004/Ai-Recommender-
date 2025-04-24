import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-zinc-900">
          <Link to="/">📚 PaperRecommend AI</Link>
        </h1>
        <ul className="hidden md:flex space-x-6 font-medium text-gray-600">
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/explore">Explore</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/search">Search</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/register">Register</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

