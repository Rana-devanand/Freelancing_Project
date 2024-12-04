import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function CourseManagement() {
  const navigate = useNavigate();
  const courses = [
    {
      title: "Artificial Intelligence",
      crn: "12345",
      courseNumber: "6653",
      subject: "CAP",
      term: "Summer 2024",
      deadline: "01-18-2024",
    },
    {
      title: "Operating Systems",
      crn: "12355",
      courseNumber: "5607",
      subject: "CAP",
      term: "Spring 2024",
      deadline: "12-23-2023",
    },
    {
      title: "Computer Programming",
      crn: "12333",
      courseNumber: "5300",
      subject: "CEN",
      term: "Spring 2024",
      deadline: "12-23-2023",
    },
    {
      title: "Software Engineering",
      crn: "12344",
      courseNumber: "5567",
      subject: "CEN",
      term: "Spring 2024",
      deadline: "12-22-2023",
    },
  ];
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="bg-gray-100 p-4">
          <h1 className="text-2xl font-bold mb-4">Course List</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={() => navigate("/departments/createcourse")}>
            Add New Course
          </button>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">CRN</th>
                <th className="border border-gray-300 px-4 py-2">
                  Course Number
                </th>
                <th className="border border-gray-300 px-4 py-2">Subject</th>
                <th className="border border-gray-300 px-4 py-2">Term</th>
                <th className="border border-gray-300 px-4 py-2">Deadline</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {course.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {course.crn}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {course.courseNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {course.subject}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {course.term}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {course.deadline}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2"
                    >
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            {" "}
              Back
          </button>
        </div>
      </div>
    </>
  );
}

export default CourseManagement;
