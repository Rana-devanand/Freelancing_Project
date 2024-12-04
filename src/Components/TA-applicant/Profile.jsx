import React from "react";
import Navbar from "./Navbar";

function Profile() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-100 flex flex-col items-center justify-center">
          <div className="text-center text-gray-600 text-lg font-medium">
            <div className="bg-white shadow-md rounded-lg p-8 w-96 text-sm">
              {/* Title */}
              <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                User Profile
              </h2>

              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <img
                  src="https://via.placeholder.com/100" // Replace with actual image URL
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-2 border-blue-500"
                />
              </div>

              {/* Profile Details */}
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-semibold">Username:</span> MadhuShalini
                  Kotti
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  madhushalini@gmail.com
                </p>
                <p>
                  <span className="font-semibold">Z Number:</span> Z23744520
                </p>
                <p>
                  <span className="font-semibold">Phone Number:</span>{" "}
                  09347876834
                </p>
                <p>
                  <span className="font-semibold">Department:</span> CS
                </p>
                <p>
                  <span className="font-semibold">Level:</span> Graduate
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-6 space-y-4">
                <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
                  Edit Profile
                </button>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                  Back to Homepage
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Profile;
