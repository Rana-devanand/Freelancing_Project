import React, { useState } from "react";
import Navbar from "./Navbar";

function Records() {
  const [zNumber, setZNumber] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Fetch data from server based on zNumber
    
  };

  
  return (
    <> 
      <div className="min-h-screen bg-gray-100 flex flex-col ">
        <Navbar />
        <div className="p-4 ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            Back
          </button>
          <form onSubmit={handleSearch}>
            <div className="mb-4">
              <label
                htmlFor="zNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Z Number:
              </label>
              <input
                type="text"
                id="zNumber"
                name="zNumber"
                value={zNumber}
                onChange={(e) => setZNumber(e.target.value)}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Records;
