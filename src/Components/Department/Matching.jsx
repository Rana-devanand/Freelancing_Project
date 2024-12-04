import React, { useState } from "react";
import Navbar from "./Navbar";

function Matching() {
  const [recommendations, setRecommendations] = useState({
    artificialIntelligence: "Recommend",
    operatingSystems: "Recommend",
    computerProgramming: "Recommend",
    softwareEngineering: "Recommend",
  });

  const handleRecommendationChange = (subject, value) => {
    setRecommendations({
      ...recommendations,
      [subject]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send recommendations to server
    console.log("Recommendations submitted:", recommendations);
  };
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-100 flex flex-col items-center justify-center">
          <div className="bg-gray-200 p-10 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">TA Recommendations</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="artificialIntelligence"
                  className="block text-sm font-medium text-gray-700"
                >
                  Artificial Intelligence:
                </label>
                <select
                  id="artificialIntelligence"
                  value={recommendations.artificialIntelligence}
                  onChange={(e) =>
                    handleRecommendationChange(
                      "artificialIntelligence",
                      e.target.value
                    )
                  }
                  className="border border-gray-300 p-2 w-full"
                >
                  <option value="Recommend">Recommend</option>
                  <option value="Do Not Recommend">Do Not Recommend</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="operatingSystems"
                  className="block text-sm font-medium text-gray-700"
                >
                  Operating Systems:
                </label>
                <select
                  id="operatingSystems"
                  value={recommendations.operatingSystems}
                  onChange={(e) =>
                    handleRecommendationChange(
                      "operatingSystems",
                      e.target.value
                    )
                  }
                  className="border border-gray-300 p-2 w-full"
                >
                  <option value="Recommend">Recommend</option>
                  <option value="Do Not Recommend">Do Not Recommend</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="computerProgramming"
                  className="block text-sm font-medium text-gray-700"
                >
                  Computer Programming:
                </label>
                <select
                  id="computerProgramming"
                  value={recommendations.computerProgramming}
                  onChange={(e) =>
                    handleRecommendationChange(
                      "computerProgramming",
                      e.target.value
                    )
                  }
                  className="border border-gray-300 p-2 w-full"
                >
                  <option value="Recommend">Recommend</option>
                  <option value="Do Not Recommend">Do Not Recommend</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="softwareEngineering"
                  className="block text-sm font-medium text-gray-700"
                >
                  Software Engineering:
                </label>
                <select
                  id="softwareEngineering"
                  value={recommendations.softwareEngineering}
                  onChange={(e) =>
                    handleRecommendationChange(
                      "softwareEngineering",
                      e.target.value
                    )
                  }
                  className="border border-gray-300 p-2 w-full"
                >
                  <option value="Recommend">Recommend</option>
                  <option value="Do Not Recommend">Do Not Recommend</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit Recommendations
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default Matching;
