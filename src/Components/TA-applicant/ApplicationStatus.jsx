import React from "react";
import Navbar from "./Navbar";

function ApplicationStatus() {
  const data = [
    { subject: "Operating Systems", status: "Application Processing" },
    { subject: "Computer Programming", status: "Accepted by You" },
    { subject: "Artificial Intelligence", status: "Accepted by You" },
    { subject: "Data Science", status: "Accepted by You" },
    { subject: "Operating Systems", status: "Application Processing" },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <div className=" p-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Subject</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.subject}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
}

export default ApplicationStatus;
