import React from 'react'
import Banner from '../Components/Page Component/Home/Banner'
import RecentBlogs from '../Components/Page Component/Home/RecentBlogs'
import Testimony from '../Components/Page Component/Home/Testimony'
import Reservation from '../Components/Page Component/Home/Reservation'
import Chefs from '../Components/Page Component/Home/Chefs'
import Services from '../Components/Page Component/Home/Services'
import AboutResturant from '../Components/Page Component/Home/AboutResturant'

function Home() {
  return (
    <div>
      <Banner/>
      <AboutResturant/>
      <Services/>
      <Chefs/>
      <Reservation/>
      <Testimony/>
      <RecentBlogs/>
    </div>
  )
}

export default Home
