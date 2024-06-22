import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ViewProduct() {
  let [data, setData] = useState([])
  let {id} = useParams()
  useEffect(()=>{
    getDataById()
  }, [])
  async function getDataById(){
    let result = await axios.get(`http://localhost:3000/api/getDataById/${id}`)
    setData(result.data)
  }


  return (
    <>
    {data.map((data)=>(
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Brand :   <span id="username" className="text-gray-700 font-normal">{data.brand}</span> </label>
        
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Price :    <span id="email" className="text-gray-900  font-normal">{data.price}</span></label>
       
        </div>
       
      </div>
    </div>
    ))}
    </>
  )
}