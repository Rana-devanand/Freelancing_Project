import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const URL = "https://apitaassistant-app-2024102921080.nicecliff-6fd000a2.eastus2.azurecontainerapps.io/v1/Users/signin";

  const [formData , setFormData] = useState({
    email: '',
    password: '',
  });


  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(URL, formData);
      if(response.status === 200) {
        navigate(`/taapplicants/dashboard`)
      } 
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      navigate(`/taapplicants/dashboard`)
      console.error(error);
    }
  };

  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
          TA Applicant Login
        </h2>
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              name='email'
              onChange={HandleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              name='password'
              onChange={HandleChange}
              required
            />
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Login
            </button>
          </div>
        </form>

        {/* Signup Link */}
        <div className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <NavLink
            to={`/taapplicantsignup/${id}`}
            className="text-blue-500 hover:underline"
            // onClick={() => setIsOpen(false)}
          >
            Signup here
          </NavLink>
        </div>

        {/* Back Button */}
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>

     {/* Fullscreen Modal with Loader */}
     {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="flex flex-col items-center">
            {/* Loader */}
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            <p className="text-white mt-4">Logging in...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
