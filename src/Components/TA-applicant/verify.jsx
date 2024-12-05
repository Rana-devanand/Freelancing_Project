import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
function verify() {
     const {email }= useParams();
     const navigate = useNavigate();
     const URL = "https://apitaassistant-app-2024102921080.nicecliff-6fd000a2.eastus2.azurecontainerapps.io/v1/Users/verify"
     const [verificationCode, setVerificationCode] = useState({
          email : email,
          verificationCode : ""
     });
     console.log(verificationCode);
     const handleCodeChange = (e) => {
         setVerificationCode({...verificationCode,[e.target.name]: e.target.value});
     };
 
     const handleSubmit = async (e) => {
         e.preventDefault();
         try {
          const response = await axios.post(URL, verificationCode);
          const responseData = response.data.data;
          localStorage.setItem('username', responseData.givenName);
          localStorage.setItem('email', responseData.email);
          localStorage.setItem('role', responseData.userType);
          localStorage.setItem('phoneNumber', responseData.phoneNumber);
          navigate('/taapplicants/dashboard')
         } catch (error) {
               console.log(error);
         }
     };
 
  return (
    <>
      <div className="bg-white h-screen flex items-center justify-center">
            <div className="bg-green-500 rounded-lg p-10 w-96">
                <h2 className="text-2xl font-bold text-white mb-4">2 Step Verification</h2>
                <p className="text-white mb-6">Enter a verification code</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        onChange={handleCodeChange}
                        className="w-full p-4 border border-gray-300 rounded-md mb-4"
                        placeholder="Enter the 8-digit code"
                        name='verificationCode'
                    />
                    <button
                        type="submit"
                        className="bg-white text-green-500 font-bold py-2 px-4 rounded-md hover:bg-green-100"
                    >
                        Verify
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default verify