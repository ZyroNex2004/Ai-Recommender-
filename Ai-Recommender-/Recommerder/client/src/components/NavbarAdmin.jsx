import React from "react";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <nav className="bg-white shadow-sm border-b py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-zinc-900">
          <Link to="/">📚 PaperRecommend AI</Link>
        </h1>
        <ul className="hidden md:flex space-x-6 font-medium text-gray-600">
          <li className="py-3 hover:text-blue-500 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer py-3">
            <Link to="/explore">Explore</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer py-3">
            <Link to="/search">Search</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer py-3">
            <Link to="/contact">Contact</Link>
          </li>
          
          <li className= "bg-red-400 rounded-2xl px-6 py-3 hover:text-white hover:bg-red-600 cursor-pointer">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarAdmin;

