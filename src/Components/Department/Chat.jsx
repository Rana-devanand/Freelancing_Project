import React, { useState } from "react";
import Navbar from "./Navbar";

function Chat() {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sending the message here
    // For example, you could send it to a server or display it on the screen
    console.log("Sending message:", message);
    setMessage(""); // Clear the input field
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <div className=" p-4">
          <h2 className="text-2xl font-bold mb-4">Chat with TA</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
                rows={4}
              />
            </div>
            <div className="flex justify-start gap-5">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              > 
                Send
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Chat;
