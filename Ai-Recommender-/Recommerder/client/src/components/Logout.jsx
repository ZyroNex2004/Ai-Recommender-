import React, { useState, useEffect } from "react";
// import NavbarAdmin from "../Navbar/NavbarAdmin";
// import Dashboard from "../Dashboard/Dashboard";
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from "./NavbarAdmin";
import Dashboard from "./Dashboard";


export default function Logout() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();


  const [logoutPopupOpen, setLogoutPopupOpen] = useState(true);
  

  useEffect(() => {
    const handlePopState = () => {
      setLogoutPopupOpen(true);
      window.history.pushState(null, null, window.location.pathname);
    };

    // Push a new state when the component mounts
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleConfirmLogout = () => {
    // Logic to handle logout (e.g., clear token, redirect)
    localStorage.removeItem("token"); // Clear token from localStorage
    navigate("/"); // Redirect to home or login page using navigate
  };

  const handleCancelLogout = () => {
    setLogoutPopupOpen(false);
    navigate("/dashboard"); // Redirect to dashboard or any other page
  }



  return (
    <div>
      {logoutPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded shadow-md w-11/12 md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Logout</h3>
            <p className="mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleConfirmLogout}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Confirm
              </button>
              <button
                onClick={() => handleCancelLogout(false)}
                className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <Navbar />
      <div className="flex">
        <Dashboard />
      </div>
    </div>
  );
}
