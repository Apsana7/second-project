import React from 'react'
import Header from '../Components/Navigation/Header'
import SubHeader from '../Components/Navigation/SubHeader'
import { Outlet } from 'react-router-dom'
import MainNav from '../Components/Navigation/MainNav'

function Layout() {
  return (
  <div>
    <MainNav/>
    <div>
        <Outlet/>
    </div>
  </div>
  )
}

export default Layout
