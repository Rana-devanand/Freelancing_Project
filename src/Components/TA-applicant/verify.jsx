import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";

function verify() {
  const { email } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first: "",
    second: "",
    third: "",
    four: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const HandleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(URL, formData);
      console.log(response);
      navigate(`/taapplicants/dashboard`);
    } catch (error) {
      navigate("/taapplicants/dashboard");
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
          {/* <!-- Icon --> */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89-4.68a2 2 0 011.94 0L21 8m-18 0v8a2 2 0 002 2h14a2 2 0 002-2V8m-18 0l8 5 8-5"
                />
              </svg>
            </div>
          </div>

          {/* <!-- Title --> */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Please check your email
          </h2>

          {/* <!-- Subtitle --> */}
          <p className="text-sm text-gray-600 mb-6">
            We've sent a code to{" "}
            <span className="font-medium text-gray-800">{email}</span>
          </p>

          {/* <!-- OTP Input --> */}
          <div className="flex justify-center gap-4 mb-6">
            <input
              type="text"
              maxlength="1"
              className="w-12 h-12 text-xl font-bold text-center border-2 border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              name="first"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              maxlength="1"
              className="w-12 h-12 text-xl font-bold text-center border-2 border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              name="second"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              maxlength="1"
              className="w-12 h-12 text-xl font-bold text-center border-2 border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              name="third"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              maxlength="1"
              className="w-12 h-12 text-xl font-bold text-center border-2 border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              name="four"
              onChange={handleChange}
              required
            />
          </div>

          {/* <!-- Resend Link --> */}
          <p className="text-sm text-gray-600 mb-6">
            Didn't get the code?{" "}
            <a href="#" className="text-green-600 font-medium hover:underline">
              Click to resend.
            </a>
          </p>

          {/* <!-- Buttons --> */}
          <div className="flex justify-between gap-4">
            <button className="w-full py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100">
              Cancel
            </button>
            <button
              className="w-full py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
              onClick={HandleVerify}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default verify;
