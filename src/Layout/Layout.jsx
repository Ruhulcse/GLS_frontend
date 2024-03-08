import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer/Footer'
import Nav from '../shared/Navbar/Nav'

const Layout = () => {
  return (
    <div>
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Layout