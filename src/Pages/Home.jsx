import React from 'react'
import Banner from '../Components/Page Component/Home/Banner'
import RecentBlogs from '../Components/Page Component/Home/RecentBlogs'
import Testimony from '../Components/Page Component/Home/Testimony'
import Reservation from '../Components/Page Component/Home/Reservation'
import Chefs from '../Components/Page Component/Home/Chefs'
import Services from '../Components/Page Component/Home/Services'
import AboutResturant from '../Components/Page Component/Home/AboutResturant'
import Menu from '../Components/Page Component/Home/Menu'

function Home() {
  return (
    <div className=''>
      <Banner/>

      <AboutResturant/>

      <div className='bg-gray-100 pt-20 '>
      <Menu/> 
      </div>

      <Services/>

      <div className='bg-gray-100 py-36 '>
      <Chefs/>
      </div>

      <Reservation/>

      <Testimony/>

      
      <div className='bg-gray-100'>

      <RecentBlogs/>
      </div>
    </div>
  )
}

export default Home
