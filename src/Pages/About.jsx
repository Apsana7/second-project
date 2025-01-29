import React from 'react'
import Testimony from '../Components/Page Component/Home/Testimony'
import Reservation from '../Components/Page Component/Home/Reservation'
import Chefs from '../Components/Page Component/Home/Chefs'
import Services from '../Components/Page Component/Home/Services'
import Banner from '../Components/Page Component/About/Banner'
import AboutResturant from '../Components/Page Component/Home/AboutResturant'


function About() {
  return (
    <div>
      <Banner/>
      <AboutResturant/>
      <Services />
      <Chefs />
      <Reservation />
      <Testimony />

    </div>
  )
}

export default About
