import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <header className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-3 px-6">
          {/* Logo */}
          <div className="font-bold text-yellow-400 text-lg">UniTAHub</div>

          {/* Navigation Links */}
          <nav className="flex space-x-10 text-sm">

            <NavLink to="/departments/coursemanagement" className="hover:text-yellow-300 transition">
              Course Management
            </NavLink>

            <NavLink to="/departments/applicationreview" className="hover:text-yellow-300 transition">
              TA Applications review
            </NavLink>

            <NavLink to="/departments/selectionstatus" className="hover:text-yellow-300 transition">
             TA Selection Status
            </NavLink>

            <NavLink to="/departments/matching" className="hover:text-yellow-300 transition">
             TA Matching
            </NavLink>

            <NavLink to="/departments/records" className="hover:text-yellow-300 transition">
             TA Records
            </NavLink>

            <NavLink to="/departments/chat" className="hover:text-yellow-300 transition">
              Chat
            </NavLink>
          </nav>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            <div className="text-sm text-right">
               <NavLink 
               to="/departments/profile"
               >
                    <img src="https://via.placeholder.com/30x30" alt="User Avatar" className="rounded-full" />
                    Jhon
               </NavLink>
            </div>
            <button className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
              onClick={() => navigate("/")}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
