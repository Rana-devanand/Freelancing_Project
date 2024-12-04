import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const CreateCourse = () => {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [crn, setCrn] = useState("");
  const [courseNumber, setCourseNumber] = useState("");
  const [title, setTitle] = useState("");
  const [term, setTerm] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { subject, crn, courseNumber, title, term });
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-center rounded-md  m-5">
        <div className="bg-gray-100 p-10">
          <h1 className="text-2xl font-bold mb-4 text-[#C1AE15]">Create Course</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="crn"
                className="block text-sm font-medium text-gray-700"
              >
                CRN (5 digit Number):
              </label>
              <input
                type="text"
                id="crn"
                name="crn"
                value={crn}
                onChange={(e) => setCrn(e.target.value)}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="courseNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Course Number (4 digit number between 5000 to 6000):
              </label>
              <input
                type="text"
                id="courseNumber"
                name="courseNumber"
                value={courseNumber}
                onChange={(e) => setCourseNumber(e.target.value)}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                subject:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="term"
                className="block text-sm font-medium text-gray-700"
              >
                Term:
              </label>
              <input
                type="text"
                id="term"
                name="term"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="border border-gray-300 p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="term"
                className="block text-sm font-medium text-gray-700"
              >
                Deadline:
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={deadline}
                onChange={(e) => setTerm(e.target.value)}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Create Course
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateCourse;
