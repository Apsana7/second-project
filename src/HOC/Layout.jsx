import React from 'react'
import Footer from '../Components/Navigation/Footer'
import { Outlet } from 'react-router-dom'
import MainNav from '../Components/Navigation/MainNav'

function Layout() {
  return (
  <div className='maindiv'> 
  <img
                src="coffee.jpg"
                alt=""
                className="w-full h-screen object-cover fixed -z-50 top-0 bottom-0"
            />
    <MainNav/>
    <div>
        <Outlet/>
    </div>
    <Footer/>
  </div>
  )
}

export default Layout
