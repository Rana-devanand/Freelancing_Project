import React from "react";
import Navbar from "./Navbar"

function Decision() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-100 flex flex-col items-center justify-center">
          <div className="text-center text-gray-600 text-lg font-medium">
            TA Committee Member Decision
          </div>
        </main>
      </div>
    </>
  );
}

export default Decision;
