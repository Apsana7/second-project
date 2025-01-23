import React from 'react'
import Footer from '../Components/Navigation/Footer'
import { Outlet } from 'react-router-dom'
import MainNav from '../Components/Navigation/MainNav'

function Layout() {
  return (
  <div>
    <MainNav/>
    <div>
        <Outlet/>
    </div>
    <Footer/>
  </div>
  )
}

export default Layout
