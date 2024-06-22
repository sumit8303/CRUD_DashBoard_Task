import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddCustomer() {
  const formRef = useRef(null);
  let navigation = useNavigate()
  let [data, setData] = useState({ 
    firstName: "", 
    lastName: "",
    email: "",
    contactNumber: "",
    paymentBal: "",
    address: ""
  })
  const { firstName, lastName, email, contactNumber, paymentBal, address } = data

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await axios.post(`http://localhost:3000/api/saveCustomer`, data)
    navigation('/')
  }

  useEffect(() => {
    gsap.fromTo(formRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div ref={formRef} className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Add New Customer</h2>
        <form className="mt-8 space-y-6" action='#' method='POST' onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                id="name"
                name='firstName'
                value={firstName}
                onChange={handleChange}
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">Last Name</label>
              <input
               type="text"
               placeholder="Last Name"
               id="lastName"
               name='lastName'
               value={lastName}
               onChange={handleChange}
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
             
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only"> Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name='email'
                value={email}
                onChange={handleChange}
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="sr-only">Contact Number</label>
              <input
                 type="tel"
                 placeholder="Phone No."
                 id="contactNumber"
                 name='contactNumber'
                 value={contactNumber}
                 onChange={handleChange}
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
               
              />
            </div>
            <div>
              <label htmlFor="paymentBal" className="sr-only">Balance Payment </label>
              <input
               type="tel"
               placeholder="Balance Payment"
               id="paymentBal"
               name='paymentBal'
               value={paymentBal}
               onChange={handleChange}
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
               
              />
            </div>
            <div>
              <label htmlFor="address" className="sr-only">Address </label>
              <input
               type="text"
               placeholder="Address"
               id="address"
               name='address'
               value={address}
               onChange={handleChange}
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
               
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
