import React from "react";
import Navbar from "./Navbar";

function Offers() {
  const acceptedOffers = [
    {
      subject: "Computer Programming",
      zNumber: "Z23744520",
      status: "Accepted",
    },
  ];

  const rejectedOffers = [
    { subject: "Data Science", zNumber: "Z23744520", status: "Rejected" },
    {
      subject: "Artificial Intelligence",
      zNumber: "Z23744520",
      status: "Rejected",
    },
  ];
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="mt-4 m-5">
          <h2 className="text-lg font-bold mb-2 text-[#FACC15]">Accept Offer</h2>
          {acceptedOffers.length === 0 ? (
            <p className="text-gray-500">No offers right now</p>
          ) : (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Subject</th>
                  <th className="border border-gray-300 px-4 py-2">Z Number</th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                  <th className="border border-gray-300 px-4 py-2">Edit</th>
                </tr>
              </thead>
              <tbody>
                {acceptedOffers.map((offer, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      {offer.subject}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {offer.zNumber}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {offer.status}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button className="bg-green-500 hover:bg-zinc-500 text-white font-bold py-2 px-4 mr-2 rounded-md">
                        Accept
                      </button>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">
                        Decline
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
          {/* Rejected Offers */}
        <div className="mt-4 m-5">
          <h2 className="text-lg font-bold mb-2 text-[#FACC15]">Rejected Offer</h2>
          {rejectedOffers.length === 0 ? (
            <p className="text-gray-500">No offers right now</p>
          ) : (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Subject</th>
                  <th className="border border-gray-300 px-4 py-2">Z Number</th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                  <th className="border border-gray-300 px-4 py-2">Edit</th>
                </tr>
              </thead>
              <tbody>
                {rejectedOffers.map((offer, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      {offer.subject}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {offer.zNumber}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {offer.status}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button className="bg-green-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 mr-2 rounded-md">
                        Accept
                      </button>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">
                        Decline
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Offers;
