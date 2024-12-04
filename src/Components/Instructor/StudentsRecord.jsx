import React from "react";
import Navbar from "./Navbar";

function StudentsRecord() {
  return (
    <>
    <Navbar/>
      <div className="flex justify-center mt-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Spring 2023
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Fall 2024
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Summer 2024
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Spring 2024
        </button>
      </div>
    </>
  );
}

export default StudentsRecord;
