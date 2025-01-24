import React from 'react'
import Banner from '../Components/Page Component/Home/Banner'
import RecentBlogs from '../Components/Page Component/Home/RecentBlogs'
import Testimony from '../Components/Page Component/Home/Testimony'
import Reservation from '../Components/Page Component/Home/Reservation'

function Home() {
  return (
    <div>
      <Banner/>
      <Reservation/>
      <Testimony/>
      <RecentBlogs/>
    </div>
  )
}

export default Home
