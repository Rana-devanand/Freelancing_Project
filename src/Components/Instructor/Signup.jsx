import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate();
  const {id} = useParams();
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
        Instructor Signup
        </h2>
        <form>

        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Name"
              required
            />
          </div>

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
              required
            />
          </div>
               
               {/*  Number */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Phone Number:
            </label>
            <input
              type="text"
              id="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Phone Number"
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
              required
            />
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              create
            </button>
          </div>
        </form>

        {/* Signup Link */}
        <div className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <NavLink
            to={`/instructorlogin/${id}`}
            className="text-blue-500 hover:underline"
          >
            login here
          </NavLink>
        </div>

        {/* Back Button */}
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate('/')}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup