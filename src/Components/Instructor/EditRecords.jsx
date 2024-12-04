import React from "react";
import Navbar from "./Navbar";

function EditRecords() {
  const handleSubmit = () => {
    // Handle form submission logic here (e.g., send feedback to server)
    console.log("Feedback submitted:", feedbackText);
  };
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Edit Feedback for Computer Programming
        </h2>
        <textarea
          className="w-full border border-gray-300 p-2 rounded mb-4"
          value={feedbackText}
          // onChange={(e) => setFeedbackText(e.target.value)}
          placeholder="Enter your feedback here"
        />
        <div className="flex justify-end">
          
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleSubmit}
          >
            Submit Feedback
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default EditRecords;
