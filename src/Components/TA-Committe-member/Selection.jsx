import React, { useState } from "react";
import Navbar from "./Navbar";

function Selection() {
  const [subjects, setSubjects] = useState([
    {
      subject: "Artificial Intelligence",
      status: "Pending",
      action: "Assign applicant",
      optional: "",
      finalizedAction: "",
    },
    {
      subject: "Operating Systems",
      status: "Finalised",
      action: "View Details",
      optional: "",
      finalizedAction: "",
    },
    {
      subject: "Computer Programming",
      status: "Selected",
      action: "View Details",
      optional: "Assign another applicant",
      finalizedAction: "Finalise",
    },
    {
      subject: "Software Engineering",
      status: "Pending",
      action: "Assign applicant",
      optional: "",
      finalizedAction: "",
    },
  ]);
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">TA Selection</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 bg-gray-200">
                Subject
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-200">
                Status
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-200">
                Action
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-200">
                Optional
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-200">
                Finalised Action
              </th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {subject.subject}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {subject.status}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {subject.action}
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {subject.optional ? (
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                      {subject.optional}
                    </button>
                  ) : (
                    ""
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {subject.finalizedAction ? (
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                      {subject.finalizedAction}
                    </button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
          Back to Home
        </button>
      </div>
    </>
  );
}

export default Selection;
