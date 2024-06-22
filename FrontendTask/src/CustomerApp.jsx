import React from 'react'
import Navbar from './customer/Navbar'
import {Outlet} from 'react-router-dom'

export default function CustomerApp() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
