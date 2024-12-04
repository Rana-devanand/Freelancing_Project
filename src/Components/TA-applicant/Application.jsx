import React from "react";
import Navbar from "./Navbar";
function Application() {
  return (
    <>
        <Navbar />
      {/* <div className="min-h-screen flex flex-col"> */}
        <div className=" bg-gray-100 flex ">
          <div className="bg-white  rounded-lg p-8 w-full">
            <button className="mb-4 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 text-black">
              Back
            </button>
            <h2 className="text-center text-xl font-semibold text-orange-600 mb-6">
              Application Form - Operating Systems - Spring 2024
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="creditsCompleted"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Credits Completed at FAU:
                </label>
                <input
                  type="number"
                  id="creditsCompleted"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="creditsRegister"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Credits You Plan to Register:
                </label>
                <input
                  type="number"
                  id="creditsRegister"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="undergraduateMajor"
                  className="block text-sm font-medium text-gray-700"
                >
                  Undergraduate Major:
                </label>
                <input
                  type="text"
                  id="undergraduateMajor"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </form>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Application;
