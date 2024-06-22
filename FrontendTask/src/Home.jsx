// src/App.js
import React from 'react';
import './index.css';
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 animate-bounce">Welcome to My DashBoard</h1>
        <div className="space-x-4">
          <Link to='/customer/customerPannel' className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300">
            Go To Customer Page
          </Link>
          <Link to='/product' className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-700 transition duration-300">
          Go To Product Page
          </Link>
        </div>
      </div>
    </div>
  );
}
