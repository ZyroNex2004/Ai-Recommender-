import React from "react";
import Navbar from "./Navbar";
// import Navbar from "./Navbar";
import NavbarAdmin from "./NavbarAdmin";

const Dashboard = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarAdmin />
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-zinc-800 mb-6">Welcome to Your Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sample stat card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-700">Papers Recommended</h2>
              <p className="text-2xl font-bold mt-2 text-blue-600">12</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-700">Your Searches</h2>
              <p className="text-2xl font-bold mt-2 text-green-500">24</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-700">Saved Papers</h2>
              <p className="text-2xl font-bold mt-2 text-purple-600">5</p>
            </div>
          </div>

          <div className="mt-10 text-right">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg transition"
              onClick={() => {
                alert("Logging out...");
                // Add logout logic here
                window.location.href = "/register";
              }}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
