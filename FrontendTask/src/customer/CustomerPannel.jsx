// src/components/TablePage.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CustomerPannel() {
  let [data, setData] = useState([])
  useEffect(() => {
    getData()
  }, [])
  async function getData() {
    let result = await axios.get('http://localhost:3000/api/getCustomer')
    setData(result.data)
  }


  async function deleteData(id) {
    let result = confirm("Are U sure to Delete")
    if (result == true) {
      await axios.delete(`http://localhost:3000/api/deleteCustomer/${id}`)
      getData()
    }
  }


  return (
    <div className="w-screen bg-gray-100 p-4 mt-4		">
      <div className="container w-full mx-auto">
        <h1 className="text-2xl font-bold mb-4 mt-12">User Interface Table</h1>
        <table className="min-w-98 bg-white w-90 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 w-lvw	text-white">
            <tr>
              <th className="py-2 px-4 text-left">First Name</th>
              <th className="py-2 px-4 text-left">Last Name </th>
              <th className="py-2 px-4 text-left">Email </th>
              <th className="py-2 px-4 text-left">Contact Number</th>
              <th className="py-2 px-4 text-left">Balance Payment </th>
              <th className="py-2 px-4 text-left">Address </th>
            </tr>
          </thead>
          <tbody>
          {data.map((data) => (
            <tr key={data} className="hover:bg-gray-100 ">
              <td className="py-2 px-4 border-b">{data.firstName}</td>
              <td className="py-2 px-4 border-b">{data.LastName}</td>
              <td className="py-2 px-4 border-b">{data.email}</td>
              <td className="py-2 px-4 border-b">{data.contactNumber}</td>
              <td className="py-2 px-4 border-b">{data.paymentBal}</td>
              <td className="py-2 px-4 border-b">{data.address}</td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                <Link type="button"
                  to={`/customer/view/${data.id}`}
                  className="bg-blue-500 text-white py-1 px-3 rounded-lg mr-2">View</Link>
                <Link type="button" className="bg-green-500 text-white py-1 px-3 rounded-lg mr-2"
                  onClick={() => deleteData(data.id)}
                >Delete</Link>
                <Link type="button"
                  to={`/customer/update/${data.id}`}
                 className="bg-red-500 text-white py-1 px-3 rounded-lg"

                >Update</Link>
              </td>
            </tr>

          ))}
        </tbody>
         
        </table>
      </div>
    </div>
  );
};

