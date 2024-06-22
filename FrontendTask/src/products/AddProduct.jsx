import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddProductForm() {
  let navigation = useNavigate()
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState(null);
  let [showCat, setShowCat] = useState([])
console.log(showCat)
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData()
      data.append("brand", brand)
      data.append("price", price)
      data.append("category", category)
      data.append("rating", rating)
      data.append("image", image)
          
        await axios.post('http://localhost:3000/api/saveProduct', data, {
          headers:{
            'Content-Type' : 'multipart/form-data'
          }
        })
        navigation('/product')
  };
  useEffect(()=>{
    getCategory()
}, [])
async function getCategory(){
    let result = await axios.get('http://localhost:3000/api/getCategory')
    setShowCat(result.data)
}
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  relative top-[70px]">
      <h1 className="text-4xl font-bold mb-8">Add New Product</h1>
      <form 
      method='post'
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="brand" className="block text-gray-700 font-bold mb-2">
            Brand
          </label>
          <input
            type="text"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
            Rating
          </label>
          <input
            type="text"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            min="0"
            max="5"
            step="0.1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
            Category
          </label>
          <div className="mt-2">
                    <select name="" id="" onChange={(e)=>setCategory(e.target.value)}>
                      
                     {showCat.map((data)=>(
                       <option value={data.categoryName}>{data.category_name}</option>

                     ))}
                    </select>
                  </div>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image URL
          </label>
          <input
            type="file"
            id="image"
            
            accept='*/images'
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
