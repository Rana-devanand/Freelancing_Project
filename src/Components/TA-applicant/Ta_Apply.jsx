import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
function Ta_Apply() {

  // Fetch termName data from server here
  const URL = "https://apitaassistant-app-2024102921080.nicecliff-6fd000a2.eastus2.azurecontainerapps.io/v1/Applications/terms";
  
  const [termName, setTermName] = useState({});
    const fetchTermName = async () => {
      try {
        const response = await axios.get(URL)
        setTermName(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    const [formData , setFormData] = useState({
    userid : '',
    termid :'',
    year :'',
    previousTA: false,
  })


  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked((prev) => {
      const newValue = !prev; 
      setFormData((prevFormData) => ({
        ...prevFormData,
        previousTA: newValue,
      }));
      return newValue;
    });
  };
  console.log(isChecked);

  console.log(formData)
  const HandleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("formdata  ",formData)

  }

    useEffect(()=>{
      // Fetch user data from server here
      fetchTermName();
    },[])
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-100 flex flex-col items-center justify-center">
          <div className="h-screen flex items-center justify-center">
            <div className="bg-zinc-400 rounded-lg p-5 w-96">
              <h2 className="text-2xl font-bold text-black mb-4">Apply </h2>
              <form onSubmit={handleSubmit}>
                <label className="text-black mb-2 block">
                  UserID *<br />
                  <input
                    type="userId"
                    onChange={HandleChange}
                    className="w-full p-4 border border-gray-300 rounded-md mb-4"
                    placeholder="Your ID "
                    name="userid"
                    required
                  />
                </label>
                <label className="text-black mb-2 block">
                  Choose Term Name *<br />
                  <div className="mb-4">
                    <select
                      // onChange={
                      className="w-full p-4 border border-gray-300 rounded-md mb-4"
                      name="termid"
                      onChange={HandleChange}
                    >
                      <option value="">Select</option>
                      {termName.length > 0 &&
                        termName.map((data, i) => (
                          <option key={i} value={data.termId}>
                            {data.termName}
                          </option>
                        ))}
                    </select>
                  </div>
                </label>
                <label className="text-black mb-4 block">
                  Enter Year *<br />
                  <input
                    type="text"
                    onChange={HandleChange}
                    className="w-full p-4 border border-gray-300 rounded-md mb-4"
                    placeholder="Enter Year"
                    name="year"
                    required
                  />
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="checkbox"
                    className="w-4 h-4 border-gray-300 rounded bg-gray-100 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    onChange={handleCheckboxChange}
                    value={isChecked}
                    name="previousTA"
                  />
                  <label
                    htmlFor="checkbox"
                    className="ml-2 text-gray-700 dark:text-gray-200"
                  >
                    Previous TA
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="bg-black text-blue-500 font-bold py-2 px-4  mt-5 rounded-md hover:bg-blue-100 w-full"
                >
                  Apply Now!
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Ta_Apply;
