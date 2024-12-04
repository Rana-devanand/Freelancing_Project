import React, { useState } from 'react';
import Navbar from "./Navbar";

function Chat() {
     const [messages, setMessages] = useState([
          {
            id: 1,
            timestamp: "2023-12-08 22:24:34.768824",
            sender: "Vikas Reddy",
            message: "HII",
          },
        ]);
      
        const [newMessage, setNewMessage] = useState("");
      
        const handleSendMessage = () => {
          if (newMessage.trim() !== "") {
            setMessages([
              ...messages,
              {
                id: messages.length + 1,
                timestamp: new Date().toISOString(),
                sender: "You",
                message: newMessage,
              },
            ]);
            setNewMessage("");
          }
        };
  return (
    <>
    <Navbar/>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Chat with Dept Staff</h2>

            <div className="overflow-y-auto max-h-64">
                {messages.map((message) => (
                    <div key={message.id} className={`flex items-center ${message.sender === "You" ? "justify-end" : "justify-start"}`}>
                        <div className={`bg-gray-200 p-4 rounded-lg ${message.sender === "You" ? "ml-auto" : "mr-auto"}`}>
                            <p className="text-sm font-semibold">{message.timestamp}</p>
                            <p className="text-sm">{message.sender}: {message.message}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex mt-4">
                <input type="text" className="flex-1 border border-gray-300 p-2 rounded" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Message:" />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={handleSendMessage}>Send</button>
            </div>

            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">Back</button>
        </div>
    </>
  )
}

export default Chat