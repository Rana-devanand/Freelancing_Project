import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const userName = localStorage.getItem('username');
  return (
    <>
      <header className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-3 px-6">
          {/* Logo */}
          <div className="text-lg font-bold text-yellow-400">UniTAHub</div>

          {/* Navigation Links */}
          <nav className="flex space-x-14">

            <NavLink to="/taapplicants/apply" className="hover:text-yellow-300 transition">
              Apply here
            </NavLink>

            <NavLink to="/taapplicants/application" className="hover:text-yellow-300 transition">
              My <br /> Applications
            </NavLink>

            <NavLink to="/taapplicants/applicationdetails" className="hover:text-yellow-300 transition">
              Applications <br /> details
            </NavLink>

            <NavLink to="/taapplicants/applicationstatus" className="hover:text-yellow-300 transition">
              Application <br /> status 
            </NavLink>

            <NavLink to="/taapplicants/offers" className="hover:text-yellow-300 transition">
              Accept/Decline <br /> Offers
            </NavLink>

            <NavLink to="/taapplicants/chat" className="hover:text-yellow-300 transition">
              Chat
            </NavLink>
          </nav>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            <div className="text-sm text-right">
               <NavLink 
               to="/taapplicants/userProfile"
               >
                   {userName}
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
