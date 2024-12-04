import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function Signup() {
  const navigate  = useNavigate();
  const {id} = useParams(); 
  const userId = parseInt(id);
   
  const URL = "https://apitaassistant-app-2024102921080.nicecliff-6fd000a2.eastus2.azurecontainerapps.io/v1/Users/create";
  const [formdata , setFormData] = useState(
    {
    giveName: "",
    email: "",
    zNumber: "",
    phoneNumber: "",
    level: "",
    department: "",
    password: "",
    userTypeId: userId,
  });

  console.log(formdata);
  const HandleChange = (e) =>{
    setFormData({...formdata, [e.target.name] : e.target.value})
  }

  const HandleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response =  await axios.post(URL, formdata);
      navigate(`/taapplicants/verify/${formdata.email}`);
      console.log(response);
    } catch (error) {
      navigate(`/taapplicants/verify/${formdata.email}`);
      console.log(error);
    }
  }
  
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
          TA Applicant Login
        </h2>
        <form onSubmit={HandleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Name"
              name='givenName'
              onChange={HandleChange}
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
              name='email'
              onChange={HandleChange}
              required
            />
          </div>

               {/*  Z number */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Z Number:
            </label>
            <input
              type="text"
              id="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Z Number"
              name='zNumber'
              onChange={HandleChange}
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
              name='phoneNumber'
              onChange={HandleChange}
              required
            />
          </div>

                {/*  Department */}
                <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
            Department:
            </label>
            <input
              type="text"
              id="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Department"
              name='department'
              onChange={HandleChange}
              required
            />
          </div>

         {/*  Level */}
         <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
            Level:
            </label>
            <input
              type="text"
              id="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Level"
              name='level'
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
              create
            </button>
          </div>
        </form>

        {/* Signup Link */}
        <div className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <NavLink
            to={`/taapplicantlogin/${id}`}
            className="text-blue-500 hover:underline"
            // onClick={() => setIsOpen(false)}
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