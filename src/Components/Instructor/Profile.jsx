import React from 'react'
import Navbar from './Navbar'

function Profile() {
  return (
    <>
       <Navbar/>
       <main className="flex-grow bg-gray-100 flex flex-col items-center justify-center">
         <div className="text-center text-gray-600 text-lg font-medium">
         Profile
         </div>
       </main>
    </>
  )
}

export default Profile