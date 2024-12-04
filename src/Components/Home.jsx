import React, { useEffect, useState } from "react";
import "../assets/css/style.css";
import Navbar from "../Components/Navbar"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [userdata , setUserDate] = useState("");

  const URL = "https://apitaassistant-app-2024102921080.nicecliff-6fd000a2.eastus2.azurecontainerapps.io/v1/UserTypes";
  const getUserData = async () => {
    try {
      const response = await axios.get(URL);
      console.log(response.data.data);
      setUserDate(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);

    }
  }
     const [role, setRole] = useState('TA Applicant');

     const handleSubmit = (e) => {
       e.preventDefault();
      if(role === '1'){
        // admin
        navigate(`/departmentlogin/${role}`);
      }
      if(role === '2'){
        // TA-applicant
        navigate(`/taapplicantlogin/${role}`);
      }
       if(role === '3'){
        // TA-member
        navigate(`/taapplicantmemberlogin/${role}`);
      }
       if(role === '4'){
        // instructor
        navigate(`/instructorlogin/${role}`);
      }
     };
useEffect(() =>{
  getUserData();
},[])
  
  return (
     <>
     {/* <Navbar /> */}
     <div className="flex justify-center items-center min-h-screen bg-gray-100">
     <div className="bg-white shadow-md rounded-lg p-6 w-80">
       <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
         Login As:
       </h2>
       <form onSubmit={handleSubmit}>
         {/* Dropdown */}
         <div className="mb-4">
           <select
             value={role}
             onChange={(e) => setRole(e.target.value)}
             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
           >
             <option value="">Select</option>
             {
              userdata.length > 0 && userdata.map((data, i) =>
                (
                <option key={i} value={data.userTypeId}>{data.type}</option>
              ))
             }
           </select>
         </div>
         
         <button
           type="submit"
           className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
         >
           Submit
         </button>
       </form>
     </div>
   </div>
   </>
  );
}

export default Home;
