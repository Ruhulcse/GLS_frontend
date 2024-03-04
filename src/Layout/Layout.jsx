import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer/Footer'
import Navbar from '../shared/Navbar/Navbar'

const Layout = () => {
  return (
    <div>
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Layout