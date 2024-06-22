import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddCategory(){
  let navigation = useNavigate()
  let [data, setData]= useState({
    category_name:"",
    category_discription:"",
      
  })

  const {category_name, category_discription} = data

  function handleChange(e){
      setData({...data,[e.target.name]:e.target.value })
  }


  async function handleSubmit(e){
      e.preventDefault()        
       await axios.post('http://localhost:3000/api/addCategory', data)
      navigation('/product')
     
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Add New Category</h1>
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Category Name
          </label>
          <input
            type="text"
            id="name"
            name='category_name'
            value={category_name}

            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Category Description
          </label>
          <textarea
            id="description"
            name='category_discription'
            value={category_discription}
            onChange={handleChange}

            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
