import React from "react";
import Navbar from "./Navbar";

function ApplicationDetails() {
  const courses = [
    "Operating Systems",
    "Computer Programming",
    "Artificial Intelligence",
    "Data Science",
    "Operating Systems",
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 border-b border-gray-200 p-4 rounded-md mb-4"
            >
              <span className="text-gray-700 font-medium">{course}</span>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700">
                  View
                </button>
                <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700">
                  Edit
                </button>
                <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-6 px-6 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-900">
          Back to Home
        </button>
      </div>
    </>
  );
}

export default ApplicationDetails;
